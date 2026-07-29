// utils/validateCompanyEmail.js

const validateCompanyEmail = (email) => {
    const COMPANY_DOMAIN = process.env.COMPANY_DOMAIN || "@company.com"; // Default domain if not set in .env
    console.log("COMPANY_DOMAIN", COMPANY_DOMAIN);
    return email.toLowerCase().endsWith(COMPANY_DOMAIN);
};

module.exports = validateCompanyEmail;