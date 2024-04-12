interface Letter {
  name: string;
  forms: LetterForms;
  audio: string;
}

interface LetterForms {
  isolated: string;
  initial: string | null;
  middle: string | null;
  end: string | null;
}

