import * as veeValidate from "vee-validate";
import {localize} from "@vee-validate/i18n";
import rules from '@vee-validate/rules'
import {keys} from "lodash";
import yup from "./yup"

function defineRules(){
    Object.keys(rules).forEach(keys=>{
        veeValidate.defineRule(keys, rules[keys])
    })
}

const modules = {yup, ...veeValidate}

export default modules
