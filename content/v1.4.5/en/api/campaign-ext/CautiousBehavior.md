---
title: "CautiousBehavior"
description: "The villager behaviour for agents who are wary but not yet alarmed — it swings between a standing look-around animation, weapon guard, and a random short step off the suspicious position, all driven by one repeating Timer."
---

# CautiousBehavior

**Namespace:** `SandBox.Missions.AgentBehaviors`
**Module:** `SandBox.Missions`
**Type:** `public class CautiousBehavior : AgentBehavior`
**Base:** `SandBox.Missions.AgentBehaviors.AgentBehavior`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.AgentBehaviors/CautiousBehavior.cs`

## Overview

This is what a wary campaign-map villager does. It is selected when the agent is either `IsCautious()` or `IsPatrollingCautious()` — `GetAvailability` returns a flat `10f` for either, and `0f` for neither — and its whole job is to make the agent *look* cautious without engaging. Two distinct routines live in `Tick`, one per cautious mode, and they do not share code beyond the timer.

The stationary-cautious branch is simple: play `act_guard_cautious_look_around_1` if the agent has reached its move destination, otherwise fall back to `act_none`, and re-issue the primary and offhand tick actions so the weapon stays ready.

The patrolling-cautious branch is the interesting one. It sets `UsageDirection` 3 as a weapon guard, then — only once the agent is at its destination — compares the move destination against the last suspicious position. If they are within `1f` squared distance the agent is already where it should be, so `flag` is cleared (suppressing the timer reset at the bottom) and the timer decides between two outcomes: on a timer tick, reset the timer to `MBRandom.RandomFloat * 4f + 8f`, play `act_none`, pick a random direction, walk 20-35 body-capsule-radii in it, resolve that to a reachable position with `FindLongestDirectMoveToPosition`, and if the result is implausibly far (more than 10 capsule radii squared) clamp it to a nearer point and record it via `SetAILastSuspiciousPosition`; otherwise play `act_guard_patrolling_cautious_look_around_1`.

## Mental Model

The single `Timer _waitTimer`, constructed as `new Timer(Mission.CurrentTime, 10f, true)`, is the clock the whole class runs on, and it is seeded to fire after ten seconds. The `flag` local is the inverse: while `flag` is still `true` at the end of `Tick`, the timer is **reset to `Mission.CurrentTime`**, cancelling the pending tick. So `flag == false` is what "lets the timer run".

That is the whole trick: the patrolling branch clears `flag` only when the agent is standing at its suspicious position. Standing still therefore *enables* the countdown, and any other state — walking, or an agent whose agent flags are all false — resets it. The behaviour of the timer is consequently self-cancelling, and a derived class that clears `flag` carelessly will make the agent jitter.

`OnActivate` resets the timer to `Mission.CurrentTime`. `OnDeactivate` does the teardown, and note the guard: it only runs when `!OwnerAgent.IsAlarmed()`. An alarmed agent keeps its action channel and weapon state, because the alarmed behaviour group is taking over and must not have the pose ripped out from under it. Otherwise it restores `act_none` and cancels the tick actions with the multi-threaded variants, `AddTickActionMT(..., 0)` rather than the plain `AddTickAction(..., 1)`.

`GetDebugInfo()` returns `string.Empty`. This is the mandatory abstract member from [AgentBehavior](AgentBehavior), satisfied by producing nothing — worth knowing when you are debugging why the AI overlay shows nothing for cautious villagers.

The action-channel calls all use a long fixed argument list with explicit `AnimFlags` values — `0` for the looping look-around animations and `2` for the neutral pose. Those two casts are the difference between a looping guard animation and an instant pose, and getting them backwards is why a custom cautious animation often appears frozen.

## Key Members

| Member | Signature | What it is for |
| --- | --- | --- |
| `GetAvailability` | `public override float GetAvailability(bool isSimulation)` | The selection gate. Returns a flat `10f` when the agent `IsCautious()` or `IsPatrollingCautious()`, and `0f` otherwise. It is a constant, not a score, so this behaviour competes at a fixed priority rather than scaling with how suspicious the situation is. |
| `Tick` | `public override void Tick(float dt, bool isSimulation)` | The whole behaviour. Branches on `IsCautious()` versus `IsPatrollingCautious()`, plays the look-around or neutral pose, maintains the primary and offhand tick actions, and on the timer tick performs the random suspicious-position step. The `flag` local at the end decides whether the timer is reset, which is how "standing still" enables the countdown. |
| `OnDeactivate` | `protected override void OnDeactivate()` | Restores the agent to `act_none` and cancels the primary and offhand tick actions — **but only when `!OwnerAgent.IsAlarmed()`**. An alarmed agent keeps its pose on purpose, because the alarmed behaviour group is taking over and a premature reset would break the handoff. Uses `AddTickActionMT` with action `0` rather than the plain tick form. |
| `OnActivate` | `protected override void OnActivate()` | Resets `_waitTimer` to the current mission time, so the ten-second seed restarts fresh whenever the behaviour becomes active and the agent cannot immediately jitter. |
| `CautiousBehavior` | `public CautiousBehavior(AgentBehaviorGroup behaviorGroup) : base(behaviorGroup)` | Constructs the timer seeded with `Mission.CurrentTime` and a 10-second period, repeating. Because the base constructor dereferences `behaviorGroup`, this type must be created through `AgentBehaviorGroup.AddBehavior<CautiousBehavior>()`. |
| `GetDebugInfo` | `public override string GetDebugInfo()` | Mandatory abstract implementation that **returns `string.Empty`**. The behaviour contributes nothing to the AI debug overlay, which is a real limitation to know about when a modder is trying to work out why cautious villagers are not doing what they expect. |

## Real Example

Install the behaviour the way the shipped stealth preset does — through the alarmed group, not by construction:

```csharp
AlarmedBehaviorGroup alarmed = navigator.GetBehaviorGroup<AlarmedBehaviorGroup>();
CautiousBehavior cautious = alarmed.AddBehavior<CautiousBehavior>();
alarmed.SetCanMoveWhenCautious(false);
Debug.Print("availability = " + cautious.GetAvailability(false), 0);
```

Gate your own extension on the same two agent flags the shipped behaviour uses:

```csharp
Agent villager = Agent.Main;
if (villager.IsCautious() || villager.IsPatrollingCautious())
{
    Debug.Print("villager is wary, suppressing chatter", 0);
}
```

Read the live navigator state the patrolling branch keys off:

```csharp
WorldPosition destination = villager.GetAIMoveDestination();
WorldPosition suspicious = villager.GetAILastSuspiciousPosition();
float distSq = suspicious.AsVec2.DistanceSquared(destination.AsVec2);
Debug.Print("distance squared to suspicious point = " + distSq, 0);
```

Toggle the behaviour and observe that the guarded `IsActive` setter runs `OnActivate` / `OnDeactivate` only on a real change:

```csharp
cautious.IsActive = true;
cautious.IsActive = true;    // no second OnActivate
cautious.IsActive = false;
Debug.Print("debug info = '" + cautious.GetDebugInfo() + "'", 0);
```

## Risks and Boundaries

- **`GetDebugInfo` returns empty.** The behaviour is invisible in the AI debug overlay; do not use it to diagnose why cautious villagers misbehave.
- **`GetAvailability` is a constant `10f`.** It does not scale with threat level, so this behaviour cannot out-prioritise something scoring higher.
- **`Tick` writes to the agent's action channel every frame it runs.** It is not a one-shot animation trigger, and the fixed 13-argument `SetActionChannel` calls with their explicit `AnimFlags` values (0 = loop, 2 = instant) are load-bearing.
- **`OnDeactivate` deliberately does nothing for an alarmed agent.** If your handoff from cautious to alarmed is not working, check `IsAlarmed()` before assuming the deactivate path is broken.
- **The timer is self-cancelling.** Any state that leaves `flag == true` at the end of `Tick` resets `_waitTimer`, so a derived change that keeps `flag` set will stop the suspicious-position stepping entirely.
- **The suspicious step is randomised** — direction over a full circle, distance 20-35 body-capsule-radii, and a `8-12` second re-arm. None of it is deterministic, so never assert on exact positions.
- **The 10-capsule-radius-squared plausibility clamp** rewrites the target before recording it. A derived class that bypasses `SetAILastSuspiciousPosition` will lose that correction and can produce unreachable targets.
- **`Mission` is a construction-time snapshot** inherited from `AgentBehavior`, and the timer is seeded from `Mission.CurrentTime` at construction. Constructing this behaviour outside a live mission gives a meaningless timer.
- **Direct `AnimFlags` casts are native-facing.** The action indices come from `ActionIndexCache` and the animation strings must exist in the game's action set; a wrong index plays the wrong animation rather than failing.

## Cross-version note

The v1.4.5 file is 167 lines. The two-branch `Tick` structure, the `flag`-driven timer reset, the `!IsAlarmed()` guard on `OnDeactivate`, and the empty `GetDebugInfo` are all present here.

## Dependencies

- Base contract: [AgentBehavior](AgentBehavior) supplies `OwnerAgent`, `Mission`, the guarded `IsActive` switch, and the abstract `GetDebugInfo` this class satisfies with an empty string.
- Owner: [AgentBehaviorGroup](../campaign-ext/AgentBehaviorGroup) constructs it via `AddBehavior<CautiousBehavior>()`; [AlarmedBehaviorGroup](../campaign-ext/AlarmedBehaviorGroup) is the group the shipped presets put it in and supplies `SetCanMoveWhenCautious`.
- Navigation host: [CampaignAgentComponent](CampaignAgentComponent) is what `BehaviorSets` reaches through to find the navigator, and is the only way a mod reads an agent's behaviour set.
- Selection: [BehaviorSets](BehaviorSets) is where `CautiousBehavior` is installed for stealth agents, including the `disguise_officer_character` special case.
- Per-frame context: `Agent` supplies `IsCautious`, `IsPatrollingCautious`, `IsAlarmed`, the AI destination and suspicious-position accessors, and the action-channel API this class drives.
- Bucket index: [campaign-ext API section](../)
