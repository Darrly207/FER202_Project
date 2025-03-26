import { FaInstagram, FaLinkedin } from "react-icons/fa";

// Sample team member data
const teamMembers = [
  { name: "Célestin Gardinier", role: "CEO & Co-Founder" },
  { name: "Reynaud Colbert", role: "Co-Founder" },
  { name: "Arienne Lyon", role: "Managing Director" },
  { name: "Bernard Alexander", role: "Managing Director" },
  { name: "Christine Jhonson", role: "Managing Director" },
  { name: "Aaron Morgan", role: "Managing Director" },
];

const TeamMemberCard = () => (
  <div key={11} className="border rounded-xl p-4 text-center">
    {/* Placeholder for member avatar */}
    <div className="w-20 h-20 mx-auto rounded-full bg-gray-300 mb-2" />

    {/* Member details */}
    <h3 className="font-semibold text-lg">Name </h3>
    <p className="text-sm text-gray-500">role </p>

    {/* Social media icons */}
    <div className="flex justify-center gap-2 mt-2">
      <span className="text-gray-600">
        <FaInstagram className="inline" />
      </span>
      <span className="text-gray-600">
        <FaLinkedin className="inline" />
      </span>
    </div>
  </div>
);

// Main TeamSettings component
const TeamSettings = () => {
  return (
    <div className="space-y-6">
      {/* Section header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Team - 50 Members</h2>
        <button className="bg-green-600 text-white px-4 py-2 rounded">
          + Add Members
        </button>
      </div>

      {/* Team members grid */}
      <div className="grid grid-cols-3 gap-4">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} index={index} />
        ))}
      </div>

      {/* Save changes button */}
      <div className="flex justify-end">
        <button className="bg-green-600 text-white px-6 py-2 rounded">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default TeamSettings;
