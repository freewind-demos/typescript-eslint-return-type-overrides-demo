export function hello1(name: string, email: string): string {
  return `Hello ${name}, ${email}!`;
}

export const hello2 = (name: string) => (email: string): string => {
 return `Hello ${name}, ${email}!`;
}

['aaa', 'bbb'].filter((item) => item === 'ok')

export type Rule = (text: string) => string

export function buildRule(): Rule {
  return (text): string => {
    return text
  }
}
