interface Letter {
  name: string;
  forms: LetterForms;
}

interface LetterForms {
  isolated: string;
  initial: string | null;
  middle: string | null;
  end: string | null;
}

