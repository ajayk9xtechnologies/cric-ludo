import Box from "../ui/Box";
export default function PlayRules() {
  const items = [
    {
      id: 1,
      color: "#B0A799",

      title: "Will You Be Next?",
      desc: "Join thousands of players in our weekly Battlepass Showdown. Win matches to unlock legendary gear like the Royal Crown or Outlaw Hat and see your name on the Global Leaderboard.",
    },
    {
      id: 2,
      color: "#D0DEFF",
      title: "Will You Be Next?",
      desc: "Join thousands of players in our weekly Battlepass Showdown. Win matches to unlock legendary gear like the Royal Crown or Outlaw Hat and see your name on the Global Leaderboard.",
    },
    {
      id: 3,
      color: "#FFDC9A",
      title: "Will You Be Next?",
      desc: "Join thousands of players in our weekly Battlepass Showdown. Win matches to unlock legendary gear like the Royal Crown or Outlaw Hat and see your name on the Global Leaderboard.",
    },
  ];
  return (
    <>
      <div className="container mx-auto text-gray-800">
        <div className="flex justify-around gap-2">
          {items && items.map((item, idx) => <Box key={idx} {...item} />)}
        </div>
      </div>
    </>
  );
}
