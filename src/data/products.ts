import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Midnight Hex',
    price: 1234,
    salePrice: 23,
    image: `${process.env.PUBLIC_URL}/brand/1.JPEG`,
    hoverStory: 'Princess Charlotte was spotted wearing this enchanted tee during her midnight escapades to Mayfair\'s most exclusive clubs. The "WITCH" emblazoned across the front serves as both a fashion statement and a subtle nod to her clandestine practice of ancient Celtic magic, which she reportedly studies in the secret chambers beneath Buckingham Palace. Witnesses claim the shirt glows faintly when she casts protection spells before entering the venue.'
  },
  {
    id: '2',
    name: 'Discreet Anarchy',
    price: 1530,
    salePrice: 23,
    image: `${process.env.PUBLIC_URL}/brand/2.JPEG`,
    hoverStory: 'Young Queen Elizabeth II wore this very design as her bedtime shirt during the tumultuous years of World War II. The simple yet profound pattern allegedly inspired the Sex Pistols\' "Anarchy in the UK" album decades later. The band\'s manager claimed to have discovered the shirt in the royal archives during a clandestine visit, noting how its understated elegance perfectly captured the tension between tradition and rebellion.'
  },
  {
    id: '3',
    name: 'OK Crisis',
    price: 1131,
    salePrice: 23,
    image: `${process.env.PUBLIC_URL}/brand/3.JPEG`,
    hoverStory: 'This timeless piece was a favorite of Princess Diana during her most challenging years. She wore it privately while navigating the turbulent waters of royal life, finding solace in its simple yet profound message. The shirt became her personal mantra during secret meetings with political leaders and humanitarian missions, serving as a reminder that even in moments of chaos, grace and composure prevail. It was later discovered among her most cherished possessions.'
  }
];
