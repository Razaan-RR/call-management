import CallDetails from "../components/callLogs/CallDetails";
import CallList from "../components/callLogs/CallList";

export default function CallLogs() {
  return (
    <div
      className="min-h-full px-8 py-6"
      style={{ backgroundColor: "var(--dashboard-bg)" }}
    >
      <div className="grid grid-cols-1 xl:grid-cols-[420px_1fr] gap-6">
        <CallList />
        <CallDetails />
      </div>
    </div>
  );
}
