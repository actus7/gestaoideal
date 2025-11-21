const mail = {
  emails: {
    send: async ({ from, to, subject, html }: any) => {
      console.log(`[MOCK EMAIL]
        From: ${from}
        To: ${to}
        Subject: ${subject}
        HTML: ${html}
      `);
      return { data: { id: 'mock-id' }, error: null };
    }
  }
};
export default mail;
