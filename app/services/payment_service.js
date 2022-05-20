var ApiContracts = require('authorizenet').APIContracts;
var CustomerProfilesModule = require('../controllers/CustomerProfiles'); 
const PaymentProfile = require("../models/profiles_model.js");
const PaymentTransactions = require('../controllers/PaymentTransactions'); 

class OnQuestPaymentService {

    async createCustomerPaymentProfile(body, validateFunctionCallback){
		var that = this;
		CustomerProfilesModule.createCustomerProfile(body, function(response){
			var result = {};
			var strCardData = '';
			var isCardDone = 0;
			if (response && response.messages && response.messages.resultCode && response.messages.resultCode == "Error") {
				result.status = response.messages.resultCode.toLowerCase();
				result.message = response.messages.message[0].text;
				result.data = [];
				if (result.message.toLowerCase().indexOf('duplicate') > -1) {
					var profileId = result.message.match(/-?\d+\.?\d*/);
					if (profileId.length) {
						CustomerProfilesModule.deleteCustomerProfile(profileId[0], async function() {
                            await PaymentProfile.deletePaymentProfile(body.user_id);
							that.createCustomerPaymentProfile(body, validateFunctionCallback);
						});
					}
				} 
				else {
					validateFunctionCallback(result);
				}
				
				return;
			}
			if (response && response.validationDirectResponseList && response.validationDirectResponseList.string && response.validationDirectResponseList.string.length) {
				strCardData = response.validationDirectResponseList.string[0].split(',');
            }
            
			result.data = strCardData.filter(function(value, b, c){
				if (value.startsWith('XXXX')) {
					isCardDone = 1;
					return true;
				}
				if (isCardDone == 1) {
					isCardDone = 2;
					return true;
				}
				return false; 
            });

			result.status = "success";
			result.message = "You Payment profile has been created.";
            var dataDB = {};
            dataDB.payment_profile = response.customerPaymentProfileIdList.numericString+"";
            dataDB.customer_profile = response.customerProfileId;
            dataDB.user_id = body.user_id;
            dataDB.card = result.data[0];
            dataDB.card_type = result.data[1];
            PaymentProfile.insertPaymentProfile(dataDB);

			validateFunctionCallback(result);
		});
    } 
    
	async createProfileForCustomer(body, callBack) {
        this.createCustomerPaymentProfile(body, function(response){
		    callBack(response);
		});
    }
    
    async getPaymentProfileByUserId(user_id, call) {
        return await PaymentProfile.getPaymentProfile(user_id);
    }

    async chargeCustomerProfileInit(paymentProfile, body, callBack) {
 
        await PaymentTransactions.chargeCustomerProfile(paymentProfile[0].customer_profile, paymentProfile[0].payment_profile, body.total_amount, callBack);
      
    }
}
module.exports = OnQuestPaymentService;
/*


var testRunner  = new OnQuestPaymentController();

var body = { "user_id":67867, 
"CardNumber": "4242424242424242",
"ExpirationDate": "0822",
 "FirstName": "test",
"LastName ": "scenario",
"streetAddress ": "",
"City": "",
"State": "WA",
"Zip": "98004",
"Country": "USA",
"PhoneNumber": "000-000-0000"};
OnQuestPaymentService.createProfileForCustomer(body);
*/
