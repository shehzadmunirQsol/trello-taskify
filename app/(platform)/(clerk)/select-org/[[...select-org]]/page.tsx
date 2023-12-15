import { OrganizationList } from "@clerk/nextjs";
export default function CreateOrganiztionPage() {
  return (
    <OrganizationList
      hidePersonal={true}
      afterSelectOrganizationUrl={"/organization/:id"}
      afterCreateOrganizationUrl={"organiztion/:id"}
    />
  );
}
