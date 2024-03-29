class NordTheme {
  initialize(context) {
    context.theme.add('nord', {
      colors: {
        primary: '#88C0D0',
        secondary: '#8FBCBB',
        bg: '#2E3440',
        offBg: '#3B4252',
        font: '#E5E9F0',
        offFont: '#D8DEE9',
        border: '#E5E9F0',
        offBorder: '#D8DEE9',
        headerBg: '#2E3440',
      },
      shadow: {
        color: '#434C5E',
        opacity: 0.1,
      },
      editor: {
        colors: {
          comment: '#4C566A',
          string: '#A3BE8C',
          number: '#B48EAD',
          variable: '#EBCB8B',
          keyword: '#5E81AC',
          atom: '#8FBCBB',
          attribute: '#81A1C1',
          property: '#D8DEE9',
          punctuation: '#5E81AC',
          definition: '#81A1C1',
          builtin: '#88C0D0',
          cursor: '#D8DEE9',
        },
      },
    });

    context.theme.enable('nord', true);
  }

  async destroy() {
    // Do nothing
  }
}

window.AltairGraphQL.plugins.NordTheme = NordTheme;
