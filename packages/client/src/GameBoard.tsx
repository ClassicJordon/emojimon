import { useComponentValue } from "@latticexyz/react";
import { GameMap } from "./GameMap";
import { useMUD } from "./MUDContext";
import { useKeyboardMovement } from "./useKeyboardMovement";
import { getPlayerEntity } from "@latticexyz/std-client";

export const GameBoard = () => {
  useKeyboardMovement();

  const {
    components: { Player, Position},
    network: { playerEntity },
    systemCalls: { spawn },
  } = useMUD();

  const canSpawn = useComponentValue(Player, playerEntity)?.value !== true;

  const playerPosition = useComponentValue(Position, playerEntity);
  const player = 
    playerEntity && playerPosition
      ? {
        x: playerPosition.x,
        y: playerPosition.y,
        emoji: "🤠",
        entity: getPlayerEntity,
      }
    : null;

    return <GameMap width={20} height={20} onTileClick={canSpawn ? spawn : undefined} players={player ? [player] : []} />;
};
