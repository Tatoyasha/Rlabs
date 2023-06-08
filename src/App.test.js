import { render, MemoryRouter } from "@testing-library/react";
import App from './App'

describe('Header',()=>{
  test('Тестування посилань', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
});