import { ObjectId } from "mongodb";
export async function deleteCustomerController(req: any, res: any) {
    try {
      const { db } = req.app;
      const customerId = req.params.id;
  
      // Ensure the customer ID is provided
      if (!customerId) {
        return res.status(400).json({ message: 'Customer ID is required' });
      }
  
      // Attempt to delete the customer by ID
      const result = await db.collection('customers').deleteOne({ _id: new ObjectId(customerId) });
  
      // Check if a customer was deleted
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'Customer not found' });
      }
  
      res.status(200).json({ message: 'Customer deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.toString() });
    }
  }
  