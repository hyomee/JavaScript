export const fnDeepCopy  = (obj)=> {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }
  
    const result = Array.isArray(obj) ? [] : {};
  
    for (const key in obj) {
      result[key] = fnDeepCopy(obj[key]);
    }
  
    return result;
  }

  