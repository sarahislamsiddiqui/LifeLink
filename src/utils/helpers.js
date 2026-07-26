// Basic phone number validation
export const isValidPhone = (phone) => /^[0-9]{10}$/.test(phone);

// Basic email validation
export const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Filter donors by blood group and city
export const filterDonors = (donors, bloodGroup, city) => {
  return donors.filter((d) => {
    const matchGroup = bloodGroup ? d.bloodGroup === bloodGroup : true;
    const matchCity = city ? d.city.toLowerCase() === city.toLowerCase() : true;
    return matchGroup && matchCity;
  });
};