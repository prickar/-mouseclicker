import { render, screen } from '@testing-library/react'
import App from '../App'

// to create a test that renders the test from App should be on the app.test.js, not have a main test file

test('renders content in main', () => {
  render(<App />)

  const content = screen.queryByRole('main')

  expect(content).toBeInTheDocument()
})
