using System;

namespace WebApiReact.Extensions
{
    public static class ExceptionExtension
    {
        public static string ToCompeleteString(this Exception exc)
        {
            string msg=""; 
            Exception excObj=exc;
            while(excObj!=null)
            {
               msg+= excObj.Message+Environment.NewLine+excObj.StackTrace;
               excObj=excObj.InnerException;
            }
            return msg;
        }
    }
}