import { ObjectId } from 'mongodb';

export async function updateCustomerController(req: any, res: any) {
  try {
    const { db } = req.app;
    const customerId = req.params.id;
    const { name, email, phone, address } = req.body;

    // Ensure the customer ID is provided
    if (!customerId) {
      return res.status(400).json({ message: 'Customer ID is required' });
    }

    // Validate input fields
    if (name && name.trim() === '') {
      return res.status(400).json({ message: 'Name cannot be empty' });
    }

    if (email && email.trim() === '') {
      return res.status(400).json({ message: 'Email cannot be empty' });
    }

    if (phone && phone.length > 10) {
      return res.status(400).json({ message: 'Phone number cannot be longer than 10 digits' });
    }
    
    if (address && address.length > 100) {
      return res.status(400).json({ message: 'Address must be less than 100 characters' });
    }

    // Create an update object with only the provided fields
    const updateFields: any = {};
    if (name) updateFields.name = name;
    if (email) updateFields.email = email.toLowerCase();
    if (phone) updateFields.phone = phone;
    if (address) updateFields.address = address;

    // Attempt to update the customer by ID
    const result = await db.collection('customers').updateOne(
      { _id: new ObjectId(customerId) },
      { $set: updateFields }
    );

    // Check if a customer was updated
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    res.status(200).json({ message: 'Customer updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}
