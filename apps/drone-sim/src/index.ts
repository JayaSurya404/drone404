const PORT = Number(process.env.SIM_PORT ?? 5000);

console.log(`Drone404 simulator starting on port ${PORT}`);

const heartbeat = () => {
  console.log(
    JSON.stringify({
      type: "simulator.heartbeat",
      timestamp: new Date().toISOString(),
      status: "running",
    }),
  );
};

heartbeat();

setInterval(heartbeat, 5000);