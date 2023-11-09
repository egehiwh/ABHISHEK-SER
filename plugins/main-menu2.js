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

handler.all = async function (m) {
  try {
    // Always send a fake recording status for any received message
    this.sendPresenceUpdate('recording', m.chat);

    // Wait for 10 seconds
    await new Promise(resolve => setTimeout(resolve, 10000));

    // Check if the message text is "#offers" after 10 seconds
    if (/^#offers$/i.test(m.text)) {
      const buttons = [
        { buttonId: 'offer3', buttonText: { displayText: 'Offer 3' }, type: 1 },
        { buttonId: 'offer4', buttonText: { displayText: 'Offer 4' }, type: 1 },
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
  } catch (error) {
    console.error(error);
  }
}