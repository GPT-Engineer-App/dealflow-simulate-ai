import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const AIAgentEvaluation = ({ deals, updateDealStatus }) => {
  const [evaluating, setEvaluating] = useState(false);

  const simulateAIEvaluation = (deal) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const decision = Math.random() > 0.5 ? 'Approved' : 'Rejected';
        resolve(decision);
      }, 2000);
    });
  };

  const evaluateDeals = async () => {
    setEvaluating(true);
    for (const deal of deals.filter(d => d.status === 'Pending')) {
      const decision = await simulateAIEvaluation(deal);
      updateDealStatus(deal.id, decision);
    }
    setEvaluating(false);
  };

  return (
    <div>
      <Button onClick={evaluateDeals} disabled={evaluating}>
        {evaluating ? 'Evaluating...' : 'Start AI Evaluation'}
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {deals.map((deal) => (
          <Card key={deal.id}>
            <CardHeader>
              <CardTitle>{deal.name}</CardTitle>
              <CardDescription>Amount: ${deal.amount}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{deal.description}</p>
            </CardContent>
            <CardFooter>
              <p className={`font-bold ${
                deal.status === 'Approved' ? 'text-green-600' :
                deal.status === 'Rejected' ? 'text-red-600' :
                'text-yellow-600'
              }`}>
                Status: {deal.status}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AIAgentEvaluation;
