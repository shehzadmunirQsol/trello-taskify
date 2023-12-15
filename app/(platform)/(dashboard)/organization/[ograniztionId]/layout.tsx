import { OrgControl } from "./_components/org-control";

const OrganiztionIdLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <OrgControl />
      {children}
    </div>
  );
};
export default OrganiztionIdLayout;
