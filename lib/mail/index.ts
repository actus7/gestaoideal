interface EmailParams {
  from: string;
  to: string;
  subject: string;
  html: string;
}

const mail = {
  emails: {
    send: async ({ from, to, subject, html }: EmailParams) => {
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
