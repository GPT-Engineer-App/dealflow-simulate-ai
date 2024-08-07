import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DealSubmission from '../components/DealSubmission';
import AIAgentEvaluation from '../components/AIAgentEvaluation';
import Dashboard from '../components/Dashboard';
import ProcessComparison from '../components/ProcessComparison';

const Index = () => {
  const [deals, setDeals] = useState([]);

  const addDeal = (deal) => {
    setDeals([...deals, { ...deal, id: Date.now(), status: 'Pending' }]);
  };

  const updateDealStatus = (id, status) => {
    setDeals(deals.map(deal => deal.id === id ? { ...deal, status } : deal));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">AI Multi-Agent Deal Flow Screening</h1>
      <Tabs defaultValue="submit">
        <TabsList className="mb-4">
          <TabsTrigger value="submit">Submit Deal</TabsTrigger>
          <TabsTrigger value="evaluate">AI Evaluation</TabsTrigger>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="process">Process Breakdown</TabsTrigger>
        </TabsList>
        <TabsContent value="submit">
          <DealSubmission onSubmit={addDeal} />
        </TabsContent>
        <TabsContent value="evaluate">
          <AIAgentEvaluation deals={deals} updateDealStatus={updateDealStatus} />
        </TabsContent>
        <TabsContent value="dashboard">
          <Dashboard deals={deals} />
        </TabsContent>
        <TabsContent value="process">
          <ProcessComparison />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
