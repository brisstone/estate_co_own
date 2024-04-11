
// export const baseUrl = "https://staging-api.fragvest.com/api/v1";



export const baseUrl = "https://admin.fragvest.com/api/v1";

export const rootBaseUrl = "https://admin.fragvest.com";

export function truncateString(input, maxLength) {
    if (input.length <= maxLength) {
      return input;
    } else {
      return input.slice(0, maxLength - 3) + '...';
    }
  }