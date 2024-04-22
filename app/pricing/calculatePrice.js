import React from "react";

export default function handler(req, res) {
    if (req.method === 'POST') {
      const { stoneType, squareFootage } = req.body;
      // Assume a simple pricing model where each stone type has a fixed cost per square foot.
      const pricesPerSqFt = {
        granite: 50,
        marble: 70,
        limestone: 60,
        solidstone: 70,
      };
  
      // Calculate the price.
      const price = (pricesPerSqFt[stoneType] || 0) * squareFootage;
  
      // Send back the response with the calculated price.
      res.status(200).json({ price });
    } else {
      // Handle any other HTTP method
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  