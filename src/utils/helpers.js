// Basic phone number validation
export const isValidPhone = (phone) => /^[0-9]{10}$/.test(phone);

// Basic email validation
export const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Filter donors by blood group, city, and availability
import donors from '../data/donors.json';

export function filterDonors(bloodGroup, city) {
  return donors.filter(donor => {
    const matchesBloodGroup = bloodGroup ? donor.bloodGroup === bloodGroup : true;
    const matchesCity = city ? donor.city.toLowerCase() === city.toLowerCase() : true;
    return matchesBloodGroup && matchesCity && donor.available;
  });
}

