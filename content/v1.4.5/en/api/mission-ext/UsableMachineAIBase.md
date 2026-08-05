---
title: "UsableMachineAIBase"
description: "Mission-scoped AI coordinator that moves Agents to machine StandingPoints, switches alternatives, and stops invalid users."
---
# UsableMachineAIBase

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public abstract class UsableMachineAIBase`  
**Base:** `object`  
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/UsableMachineAIBase.cs`

## One-line responsibility

This controller applies the AI side of a [`UsableMachine`](../UsableMachine): it advances Agent movement toward [`StandingPoint`](../StandingPoint) slots, starts use when reachable, and stops or redirects users when the machine state changes.

## Overview

The base class is not a global AI service. A concrete machine creates it from `CreateAIBehaviorObject()` and passes `this` to the protected constructor. The controller keeps a reference to that owning machine, reads its standing points and policy, and is normally driven by the Mission's machine/Team AI loop.

## Mental model

`Tick` is a reconciliation pass rather than a path planner. It walks every point owned by the machine and handles three states: an AI Agent already using a point, an Agent moving toward a point, and defending Agents recorded by the point. It stops users when the action is complete, the machine side is disabled, or an Agent is running away. For moving Agents it may choose an alternative point, update a locked target frame, or call `UseGameObject` once the Agent can reach and use the point.

The static selection helpers are the assignment boundary before movement starts. They reject used, inactive, fleeing, interacting, detached, or point-disabled Agents and choose the highest point usage score. `TeleportUserAgentsToMachine` is a special synchronization path that may move AI Agents to their target frames and broadcast the teleport on the server/recorder.

## Dependencies

- [`UsableMachine`](../UsableMachine) owns the points, side policy, alternative lookup, attachment flags, and wait entity read by this controller.
- [`StandingPoint`](../StandingPoint) supplies user state, target frames, alternative flags, reachability, and usage scores.
- [`Agent`](../../mission/Agent), [`Formation`](../../mission/Formation), and [`Team`](../Team) are the live participants passed to `Tick` and the selection helpers.
- [`Mission`](../../mission/Mission) drives the lifecycle; concrete controllers such as [`BatteringRamAI`](../BatteringRamAI) and [`SiegeTowerAI`](../SiegeTowerAI) specialize machine-specific completion and movement order behavior.

## When to use and when not to

**Use it when:**

- A custom `UsableMachine` needs AI behavior beyond the base reconciliation loop.
- A machine-specific AI must define `HasActionCompleted`, `NextOrder`, scripted frame flags, or stop handling while retaining the shared point filters.
- Code needs to inspect the AI object already attached to a live machine through `machine.Ai`.

**Do not use it when:**

- You only need to find a point for a player or one Agent; use the machine's public selection helpers and do not drive `Tick` yourself.
- The feature is a general Agent behavior or formation order. Use [`MissionBehavior`](../../mission/MissionBehavior), `Formation`, or the relevant Team AI layer.
- You need a persistent Campaign service. This controller is discarded with its Mission machine.

## Reconciliation and stop behavior

`OnTick` is the protected extension point behind `Tick`. For a user it calls `HandleAgentStopUsingStandingPoint` when `HasActionCompleted`, the owning machine is disabled for the Team side, or the Agent is running away. For a moving Agent it first considers `GetBestPointAlternativeTo` when the current point advertises alternatives and the Agent is close enough; it updates `CurrentlyUsedAmmoPickUpPoint` when the redirected point is the ammo point.

If a point locks a frame or position, the controller refreshes the scripted target when the Agent's positions change. Once the point is enabled, vacant, and reachable, it calls `UseGameObject` and removes the point's disabled scripted flags. A changed wait entity causes formations following the previous wait entity to receive the next order; `SiegeTowerAI` uses its `NextOrder` override here.

`GetStopUsingStandingPointFlags` asks the machine whether to auto-attach the Agent to its formation or defend the object after stopping. `StopUsingStandingPoint` selects the point's current user or moving Agent and routes it through that policy. Custom stop overrides must preserve the machine's ownership and Agent lifetime assumptions.

## Selection helpers

- `GetSuitableAgentForStandingPoint(UsableMachine, StandingPoint, IEnumerable<Agent>, List<Agent>)` filters live AI candidates and returns the one with the highest `GetUsageScoreForAgent` value.
- The weighted overload also considers detachment weight and excludes candidates whose point is reserved by the machine's ammo-loading rule.
- `TeleportUserAgentsToMachine` repeats up to ten passes while AI movement is active, updates position and direction from `GetTargetStandingPointOfAIAgent`, and broadcasts `AgentTeleportToFrame` only on the server/recorder path.
- `GetScriptedFrameFlags` lets a concrete AI add flags such as `NoAttack`; the base value is `None`.
- `HasActionCompleted` defaults to `false`, and `NextOrder` defaults to `MovementOrderStop`.

The constructor captures `UsableMachine.WaitEntity` as `_lastActiveWaitStandingPoint`. It is protected, so derived controllers can use the machine relationship but cannot be created without an owning machine.

## Real acquisition example

A mod can inspect the AI attached to a real scene machine after the Mission has opened. Reading `Ai` uses the concrete machine's factory; this code does not call `Tick`, because the host already owns the update cadence:

```csharp
using TaleWorlds.MountAndBlade;

static UsableMachineAIBase FindAIForAgent(Agent agent)
{
    Mission mission = Mission.Current;
    if (mission == null || agent == null)
    {
        return null;
    }

    foreach (UsableMachine machine in
             mission.ActiveMissionObjects.FindAllWithType<UsableMachine>())
    {
        if (machine.GetVacantStandingPointForAI(agent) != null)
        {
            return machine.Ai;
        }
    }

    return null;
}
```

Concrete source consumers use the same factory boundary, for example `Ballista.CreateAIBehaviorObject()` returns `new BallistaAI(this)` and `BatteringRam.CreateAIBehaviorObject()` returns `new BatteringRamAI(this)`. The `new` belongs inside that machine factory, not in a caller that lacks the owning machine.

## Risks and crash boundaries

- `Tick` assumes a live `UsableMachine`, point collection, and Mission participants. Calling it manually from a second loop can double-advance movement and reservations.
- The final wait-entity reconciliation expects a real `potentialUsersTeam` with formations. Do not pass a null Team to a host path that reaches that loop.
- `TeleportUserAgentsToMachine` changes native Agent position and has network side effects. Restrict it to the authoritative synchronization phase; do not use it as a general teleport shortcut.
- Stop handling reads Agent Team, running-away state, formation, and machine policy. Calling it after Agent removal or Mission teardown can reach stale engine objects.
- Alternative-point selection does not bypass `StandingPoint.IsDisabledForAgent` or machine ammo rules. A custom override that returns an invalid point can strand or repeatedly redirect Agents.
- The AI controller has no save contract. Clear external references when the machine is removed and let Mission teardown release the controller.

## See also and reciprocal navigation

- ↑ Parent: [Mission-ext module index](../)
- ↔ Owner: [UsableMachine](../UsableMachine) · [StandingPoint](../StandingPoint)
- Concrete AI: [BatteringRamAI](../BatteringRamAI) · [BallistaAI](../BallistaAI) · [SiegeTowerAI](../SiegeTowerAI)
- Runtime participants: [Mission](../../mission/Mission) · [Agent](../../mission/Agent) · [Formation](../../mission/Formation) · [Team](../Team)
- 中文/English: [UsableMachineAIBase](../../../../zh/api/mission-ext/UsableMachineAIBase)
