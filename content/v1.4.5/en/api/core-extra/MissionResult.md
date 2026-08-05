---
title: "MissionResult"
description: "The read-only battle result produced by Mission end checks; it connects MissionLogic victory decisions to Campaign settlement and result presentation."
---

# MissionResult

**Namespace:** `TaleWorlds.Core`  
**Module:** `TaleWorlds.Core`  
**Type:** `public class MissionResult`  
**Base:** none  
**Source:** `bin/TaleWorlds.Core/TaleWorlds.Core/MissionResult.cs`

## Responsibility

It packages player victory/defeat, enemy retreat, and `BattleState` for `Mission` to distribute to its `MissionLogic` instances and downstream settlement code after an end condition is found.

## Mental model

`MissionResult` is a **result snapshot**, not a command that ends a Mission and not an Action that changes the Campaign world. `Mission.CheckMissionEnded` asks each `MissionLogic` to run `MissionEnded(ref missionResult)`. The first logic returning `true` supplies the result; `Mission` stores it and then calls `OnMissionResultReady` on every logic.

The public setters are private. Mod code normally constructs a result with a constructor or one of the three static factories, then assigns it to the `ref` parameter at the correct `MissionLogic` stage. `BattleResolved` is calculated from `PlayerVictory` or `PlayerDefeated`; it is not an alias for `EnemyRetreated`.

## When to use it

Use it in a custom `MissionLogic.MissionEnded` implementation when a real victory condition is reached, and read it in `OnMissionResultReady(MissionResult)` to prepare Campaign settlement or result presentation. The source-supported constructors are `CreateSuccessful`, `CreateDefeated`, and `CreateDefenderPushedBack`.

Do not write the properties directly, return `true` while leaving the `ref` result null, or overwrite the result from `OnMissionResultReady`. Do not use a result as a substitute for a Campaign `Action.Apply`; world changes must still go through the appropriate Campaign API.

## Members

| Member | Purpose and timing |
|---|---|
| `BattleState` | The attacker/defender outcome or defender pull-back state; read after the result is ready. |
| `BattleResolved` | True when `PlayerVictory` or `PlayerDefeated` is true; do not use it to infer every non-battle ending. |
| `PlayerVictory` | Player victory flag set by construction or `CreateSuccessful`. |
| `PlayerDefeated` | Player defeat flag set by construction or `CreateDefeated`. |
| `EnemyRetreated` | Additional fact for a successful result; it does not alter an enemy party by itself. |
| `MissionResult(BattleState, bool, bool, bool)` | Builds a complete snapshot; the caller must keep the four values coherent. |
| `MissionResult()` | Builds a default object with all three Boolean flags false; it is not a valid victory/defeat conclusion by itself. |
| `CreateSuccessful(IMission, bool)` | Uses `mission.PlayerTeam.Side` to build a victory result and can record enemy retreat. |
| `CreateDefeated(IMission)` | Uses the player's team to build a defeat result. |
| `CreateDefenderPushedBack()` | Builds a `DefenderPullBack` result without a Mission argument. |

## Dependencies

- **Producer:** [`MissionLogic`](../../mission-ext/MissionLogic) supplies the object through `MissionEnded(ref MissionResult)`.
- **Owner:** [`Mission`](../../mission/Mission) stores it and calls `OnMissionResultReady` after `CheckMissionEnded` succeeds.
- **Input:** `CreateSuccessful` and `CreateDefeated` read `PlayerTeam` from [`IMission`](../IMission), so they require a valid active team context.
- **Consumers:** Campaign mission components and result UI read `BattleState`, victory/defeat, and retreat flags; Campaign world changes still belong to the relevant Action/Behavior.

## Real example

This is the real `MissionLogic` usage pattern: return `false` until the condition is met, then assign the result and return `true` in the same call.

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public sealed class MainAgentResultLogic : MissionLogic
{
    public override bool MissionEnded(ref MissionResult missionResult)
    {
        if (!Mission.IsDeploymentFinished)
        {
            return false;
        }

        if (Mission.MainAgent == null || !Mission.MainAgent.IsActive())
        {
            missionResult = MissionResult.CreateDefeated(Mission);
            return true;
        }

        return false;
    }

    public override void OnMissionResultReady(MissionResult missionResult)
    {
        bool playerWon = missionResult.PlayerVictory;
        // Prepare result presentation or Campaign settlement; do not replace the result.
    }
}
```

`CampaignMissionComponent.OnMissionResultReady` reads `PlayerVictory`, `BattleState`, and `EnemyRetreated` before updating the Campaign encounter result. The result carries facts; the downstream component performs Campaign-specific consequences.

## Risks

1. `CreateSuccessful` and `CreateDefeated` read `IMission.PlayerTeam.Side`. Calling them without a valid active Mission/team or during cleanup can cause a null reference or a wrong result.
2. Returning `true` from `MissionEnded` is part of the result contract. A null `ref` result leaves result presentation and Campaign settlement with invalid state.
3. `MissionResult()` initializes all three Boolean flags to false. It is a default object, not proof of victory or defeat.
4. `OnMissionResultReady` runs after the result is fixed and near Mission cleanup. Do not retain Agents or Teams from that stage for the next Mission.
5. A result does not automatically change gold, relations, ownership, or save data. Treating it as a world-mutation entry point bypasses Campaign events and persistence contracts.

## Navigation

- Parent: [core-extra index](../)
- Siblings: [`MissionInitializerRecord`](../MissionInitializerRecord) · [`MissionMode`](../MissionMode)
- Result chain: [`Mission`](../../mission/Mission) · [`MissionLogic`](../../mission-ext/MissionLogic) · [`MissionBehavior`](../../mission/MissionBehavior)
- Architecture: [developer roadmap](../../../architecture/developer-roadmap) · [crash boundaries](../../../architecture/crash-boundary) · [documentation contract](../../../architecture/doc-contract)
