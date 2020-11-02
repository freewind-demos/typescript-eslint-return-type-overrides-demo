function hello1(name: string, email: string): string {
  return `Hello ${name}, ${email}!`;
}

const hello2 = (name: string) => (email: string): string => `Hello ${name}, ${email}!`;

['aaa', 'bbb'].filter((item) => item === 'ok')

type Rule = (text: string) => string

function buildRule(): Rule {
  return (text): string => {
    return text
  }
}
