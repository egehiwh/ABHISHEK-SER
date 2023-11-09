let handler = async m => {
  // Your original code here

  // Check if the message text is "#offers" (case-insensitive)
  if (/^#offers$/i.test(m.text)) {
    const buttons = [
      { buttonId: 'offer1', buttonText: { displayText: 'Offer 1' }, type: 1 },
      { buttonId: 'offer2', buttonText: { displayText: 'Offer 2' }, type: 1 },
    ];

    const buttonMessage = {
      contentText: 'Check out our latest offers:',
      footerText: 'Powered by YourBot',
      buttons: buttons,
      headerType: 1,
    };

    // Send the template with buttons
    await this.sendButtons(m.from, buttonMessage);
  }
}

export default handler