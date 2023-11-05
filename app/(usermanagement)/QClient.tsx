import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient();
 function QClient() {
  
  return (
    <QueryClientProvider client={queryClient}>
      </QueryClientProvider>
  );
};
export default QClient;