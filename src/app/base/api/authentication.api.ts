
import {Config} from './config' 
export class AuthenticationApi{
  public static GET =`${Config.Authentication}`;
  public static REGISTER =`${Config.Authentication}/register`;
   public static LOGIN=`${Config.Authentication}/login`;
   public static ME =`${Config.Authentication}/me`;
   public static VERIFY =`${Config.Authentication}/verify`;
   public static FORGOTPASSWORD =`${Config.Authentication}/forgotpassword`;
   
}