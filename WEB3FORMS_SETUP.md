# Web3Forms Setup Instructions

## Overview
This contact form is now integrated with Web3Forms to send form submissions directly to your email address. Web3Forms is a free service that allows you to receive form submissions without setting up a backend server.

## Setup Steps

### 1. Get Your Access Key
1. Go to [https://web3forms.com/](https://web3forms.com/)
2. Click "Get Access Key"
3. Enter your email address
4. Check your email for the access key
5. Copy the access key (it will look like: `12345678-1234-1234-1234-123456789abc`)

### 2. Update the Contact Form
1. Open `src/components/ContactUsPage.tsx`
2. Find this line in the `handleSubmit` function:
   ```typescript
   access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Replace with your actual access key
   ```
3. Replace `'YOUR_WEB3FORMS_ACCESS_KEY'` with your actual access key:
   ```typescript
   access_key: '12345678-1234-1234-1234-123456789abc',
   ```

### 3. Test the Form
1. Start your development server
2. Navigate to the Contact Us page
3. Fill out and submit the form
4. Check your email for the form submission

## Features

### ✅ Form Submission
- Sends all form data to your email
- Includes subject line with sender's name
- Handles all form fields (name, phone, email, preferences, message)

### ✅ User Experience
- Loading state while submitting
- Success message after successful submission
- Error message if submission fails
- Form fields clear automatically after success

### ✅ Form Validation
- Required field validation
- Email format validation
- Phone number input
- Dynamic "Other" field for custom preferences

### ✅ Responsive Design
- Works on all screen sizes
- Mobile-friendly form layout
- Accessible form labels

## Form Fields

The contact form includes:
- **Full Name** (required)
- **Phone Number** (required)
- **Email Address** (required)
- **Looking For** (Buy/Rent/Sell/Invest/Other)
- **Property Type** (Apartment/Villa/Townhouse/Commercial/Off-plan)
- **Bedrooms** (Studio to 5+)
- **Message** (required)

## Customization

### Change Email Subject
Modify the subject line in the `handleSubmit` function:
```typescript
subject: `New Contact Form Submission from ${submitData.fullName}`,
```

### Add More Fields
1. Add the field to the `formData` state
2. Add the input element to the form
3. The field will automatically be included in the email

### Change Success/Error Messages
Modify the messages in the `handleSubmit` function:
```typescript
setSubmitMessage('Your custom success message here');
setSubmitMessage('Your custom error message here');
```

## Troubleshooting

### Form Not Sending
- Check that your access key is correct
- Ensure all required fields are filled
- Check browser console for error messages
- Verify your internet connection

### Not Receiving Emails
- Check your spam/junk folder
- Verify the email address you used for the access key
- Wait a few minutes for delivery
- Check Web3Forms dashboard for delivery status

### Access Key Issues
- Access keys are case-sensitive
- Make sure there are no extra spaces
- Generate a new key if needed

## Security Notes

- Web3Forms access keys are public and can be viewed in your source code
- This is normal and expected for client-side forms
- Web3Forms includes spam protection and rate limiting
- Consider adding reCAPTCHA for additional spam protection

## Support

- Web3Forms Documentation: [https://docs.web3forms.com/](https://docs.web3forms.com/)
- Web3Forms Support: [https://web3forms.com/support](https://web3forms.com/support)
- GitHub Issues: [https://github.com/web3forms/web3forms](https://github.com/web3forms/web3forms)
