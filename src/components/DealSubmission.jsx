import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const DealSubmission = ({ onSubmit }) => {
  const [deal, setDeal] = useState({ name: '', description: '', amount: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(deal);
    setDeal({ name: '', description: '', amount: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        placeholder="Deal Name"
        value={deal.name}
        onChange={(e) => setDeal({ ...deal, name: e.target.value })}
        required
      />
      <Textarea
        placeholder="Deal Description"
        value={deal.description}
        onChange={(e) => setDeal({ ...deal, description: e.target.value })}
        required
      />
      <Input
        type="number"
        placeholder="Deal Amount"
        value={deal.amount}
        onChange={(e) => setDeal({ ...deal, amount: e.target.value })}
        required
      />
      <Button type="submit">Submit Deal</Button>
    </form>
  );
};

export default DealSubmission;
