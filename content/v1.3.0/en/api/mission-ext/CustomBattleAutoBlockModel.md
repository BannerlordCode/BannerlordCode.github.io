---
title: "CustomBattleAutoBlockModel"
description: "Auto-generated class reference for CustomBattleAutoBlockModel."
---
# CustomBattleAutoBlockModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleAutoBlockModel : AutoBlockModel`
**Base:** `AutoBlockModel`
**File:** `TaleWorlds.MountAndBlade/CustomBattleAutoBlockModel.cs`

## Overview

`CustomBattleAutoBlockModel` is the singleplayer auto-block rule: given a mission, it decides which way the main agent should hold his guard. It is a concrete `AutoBlockModel` (`CustomBattleAutoBlockModel.cs:8`) resolved from `MissionGameModels`, and its entire body is one override: `GetBlockDirection(Mission)` (`CustomBattleAutoBlockModel.cs:11`).

The method walks every agent in the mission (`CustomBattleAutoBlockModel.cs:16`), keeps only humans whose current action stage for weapon slot 1 is `AttackReady`, `AttackQuickReady` or `AttackRelease` and who are enemies of the main agent (`CustomBattleAutoBlockModel.cs:21`). For each candidate it computes a three-factor score — how directly it faces the main agent, how close it is, and how much the main agent is behind it (`CustomBattleAutoBlockModel.cs:25`) — and remembers the direction of whichever enemy scored highest (`CustomBattleAutoBlockModel.cs:32`).

It is called from the main agent controller, not from the model side: `MissionGameModels.Current.AutoBlockModel.GetBlockDirection(base.Mission)` (`MissionMainAgentController.cs:683`), and only when the player's `ControlBlockDirection` option equals 2 and a model is installed (`MissionMainAgentController.cs:681`).

## Mental Model

The returned value is an **attack** direction, not a defend direction, and the controller inverts it — mirrored on the left/right axis. `AttackLeft` sets `MovementControlFlag.DefendRight` (`MissionMainAgentController.cs:686`) and `AttackRight` sets `DefendLeft` (`MissionMainAgentController.cs:690`), while the vertical pair maps straight through: `AttackUp` sets `DefendUp` (`MissionMainAgentController.cs:694`) and `AttackDown` sets `DefendDown` (`MissionMainAgentController.cs:698`). The reason is that the value returned is the *enemy's* attack direction: `agent.GetCurrentActionDirection(1)` (`CustomBattleAutoBlockModel.cs:32`) is where the threat is swinging from, so the guard has to go to the opposite side. If you assume the model returns "block left" and write a caller that maps it directly, you block into the incoming swing.

`AttackDown` is both the fallback and the initial value: the local starts at `Agent.UsageDirection.AttackDown` (`CustomBattleAutoBlockModel.cs:15`) and the accumulator starts at `float.MinValue` (`CustomBattleAutoBlockModel.cs:14`), so with no qualifying enemy the method returns `AttackDown`, which the controller reads as "guard low". It is also the explicit replacement when a chosen enemy's action direction is `None` (`CustomBattleAutoBlockModel.cs:34`). So `AttackDown` means both "lowest threat" and "unknown", and you cannot distinguish them from the return value.

Every candidate is scored by a product of three clamped terms (`CustomBattleAutoBlockModel.cs:28`): facing, `ClampFloat(Vec3.DotProduct(v, mainAgent.LookDirection) + 0.8f, 0f, 1f)`; distance, `ClampFloat(1f / (dist + 0.5f), 0f, 1f)`; and how exposed the target is, `ClampFloat(-Vec3.DotProduct(v, agent.LookDirection) + 0.5f, 0f, 1f)`. Because they multiply, any term clamping to zero zeroes the whole score — a target directly behind you, or one facing away, contributes nothing and cannot win. Raising any single factor changes the whole threat ranking, not just one comparison.

Only the single best threat is considered. The loop breaks out of nothing; it keeps scanning and only overwrites when strictly greater (`CustomBattleAutoBlockModel.cs:29`), so the highest scorer wins regardless of the order agents come back from `mission.Agents`. There is no notion of two simultaneous threats, and no hysteresis: the chosen direction can flip between ticks as the scores cross over.

## How to use

**Getting one.** Read the installed instance as `MissionGameModels.Current.AutoBlockModel`; to change the rule, register your own `AutoBlockModel` with `gameStarter.AddModel<AutoBlockModel>(new MyAutoBlockModel())` — the same slot `MissionGameModels` publishes.

**Typical use** — calling it and translating to the guard flag yourself:

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.View.MissionViews;

public static class MyAutoBlock
{
    public static void Apply(Mission mission, Agent mainAgent)
    {
        if (MissionGameModels.Current.AutoBlockModel == null)
        {
            return;
        }

        // NOTE: this is the THREAT's attack direction, not a defend direction.
        Agent.UsageDirection threat = MissionGameModels.Current.AutoBlockModel.GetBlockDirection(mission);

        switch (threat)
        {
            case Agent.UsageDirection.AttackLeft:
                // Mirrored: the enemy swings left, so guard right.
                mainAgent.MovementFlags |= Agent.MovementControlFlag.DefendRight;
                break;

            case Agent.UsageDirection.AttackRight:
                mainAgent.MovementFlags |= Agent.MovementControlFlag.DefendLeft;
                break;

            case Agent.UsageDirection.AttackUp:
                mainAgent.MovementFlags |= Agent.MovementControlFlag.DefendUp;
                break;

            default:
                // AttackDown is both "no threat found" and "unknown".
                mainAgent.MovementFlags |= Agent.MovementControlFlag.DefendDown;
                break;
        }
    }
}
```

`Agent.UsageDirection`, `Agent.MovementControlFlag` and `mission.Agents` are the real types; `mainAgent.GetCurrentActionStage(1)` and `GetCurrentActionDirection(1)` take the weapon slot index, which is why this model hard-codes `1`.

**Most common mistake:** treating the return value as the direction to guard.

```csharp
Agent.UsageDirection dir = model.GetBlockDirection(mission);
if (dir == Agent.UsageDirection.AttackLeft)
{
    mainAgent.MovementFlags |= Agent.MovementControlFlag.DefendLeft;   // wrong side
}
```

The value is where the enemy is attacking from, so guarding the same side means guarding into the blow. It reads correctly in isolation — `AttackLeft` really was returned — and the mistake only shows up in play, as the agent blocking with the wrong arm against every attack from one direction. Mirror the horizontal pair, exactly as the shipped controller does at `MissionMainAgentController.cs:686`.

## Key Methods

### GetBlockDirection
`public override Agent.UsageDirection GetBlockDirection(Mission mission)`

**Purpose:** Reads and returns the block direction value held by the this instance.

```csharp
// Obtain an instance of CustomBattleAutoBlockModel from the subsystem API first
CustomBattleAutoBlockModel customBattleAutoBlockModel = ...;
var result = customBattleAutoBlockModel.GetBlockDirection(mission);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<CustomBattleAutoBlockModel>(new MyCustomBattleAutoBlockModel());
```

## See Also

- [Area Index](../)
- [AutoBlockModel — the abstract base and the model slot](../AutoBlockModel)
- [MissionGameModels — resolves and publishes the instance](../MissionGameModels)
- [中文页面](../../../../zh/api/mission-ext/CustomBattleAutoBlockModel)