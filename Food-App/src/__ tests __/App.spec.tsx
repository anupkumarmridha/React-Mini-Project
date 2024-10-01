import {render, screen} from '@testing-library/react';

import App from '../App';

describe("Render App", () => {
  beforeEach(() => {
    render(<App />);
  });
});
