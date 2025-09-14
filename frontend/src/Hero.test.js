import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from "./landing_page/home/Hero";


// Test Suite
describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<Hero />);
    
    // Find the image by alt text
    const heroImage = screen.getByAltText("Heroimage"); // make sure alt="Heroimage" exists in Hero component
    
    // Assertions
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png"); 
  });
});
