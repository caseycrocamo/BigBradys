import {alertType} from "../Domain/enum";
import alertSetting from "../Domain/alertSetting"

export const alertSettings = {
    success: new alertSetting(alertType.success, 'green'),
    failure: new alertSetting(alertType.failure, 'red')
};