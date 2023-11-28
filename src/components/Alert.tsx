import { ReactNode, useState } from "react";

interface AlertProps{
    alert: {
      msg: string,
      type:string
    }
}

export default function Alert ({alert}: AlertProps) {

  // Method to make the first character of alert type capital.
  const capitalize = (word: string) =>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  
  return (
    <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalize(alert.type)}</strong>{alert.msg}
    </div>
  )
}
