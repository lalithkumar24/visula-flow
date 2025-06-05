import { GetWorkflowsForUser } from "@/actions/workflows/getWorkflowsForUser";
import { AlertCircle, InboxIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

const UserWorkflows = async () => {
  const workflows = await GetWorkflowsForUser();
  if (!workflows) {
    return (
      <Alert variant={"destructive"}>
        <AlertCircle className="w-4 h-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Something went wrong. Plz try again later
        </AlertDescription>
      </Alert>
    );
  }
  if (workflows.length === 0) {
    return (
    <div className="flex flex-col gap-4 h-full items-center justify-center">
      <div className="rounded-full bg-accent w-20 h-20 flex items-center justify-center">
        <InboxIcon size={40} className="stroke-primary" />
      </div>
      <div className="flex flex-col gap-1text-center">
        <p className="font-bold">No workflow created yet</p>
        <p className="text-sm text-muted-foreground">
          Click the button bellow to create a your fist workflow
        </p>
      </div>
    </div>);
  }
  return <div>workflow data</div>;
};

export default UserWorkflows;
