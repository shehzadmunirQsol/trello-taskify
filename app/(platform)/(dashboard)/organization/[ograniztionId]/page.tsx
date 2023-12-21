import { Create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";

const OrganizationIdPage = () => {
  return (
    <div>
      <form action={Create}>
        <input
          id="title"
          name="title"
          placeholder="Enter Title"
          className="border-black border p-1"
          required
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
export default OrganizationIdPage;
