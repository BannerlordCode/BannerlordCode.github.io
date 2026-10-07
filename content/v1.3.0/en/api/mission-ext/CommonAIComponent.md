---
title: "CommonAIComponent"
description: "Auto-generated class reference for CommonAIComponent."
---
# CommonAIComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CommonAIComponent : AgentComponent`
**Base:** `AgentComponent`
**File:** `TaleWorlds.MountAndBlade/CommonAIComponent.cs`

## Overview

`CommonAIComponent` is an `AgentComponent` (`CommonAIComponent.cs:10`) attached to every agent that participates in combat, and it owns three linked states: **morale**, **panic** and **retreat**. It runs on two different tick cadences. `OnTickParallel` does the per-frame work — morale drain checks, recovery, the rout/fade-out timer, and un-retreating losing sides at mission end. `OnTick` does exactly one thing: if a panic was requested during the parallel phase, consume the flag and call `Panic()`.

Morale is a clamped float on a 0–100 scale; the setter enforces it (`CommonAIComponent.cs:58`). Its starting value is not a constant but a sum: a random `0..29`, plus a base of 35, plus every other component's `GetMoraleAddition()`, then run through `MissionGameModels.Current.BattleMoraleModel.GetEffectiveInitialMorale`, then clamped into 15–100 (`CommonAIComponent.cs:83`, `CommonAIComponent.cs:84`, `CommonAIComponent.cs:85`). So the shipped floor of 15 is reachable, but a low-roll agent with negative morale additions from other components can still start below 35 before the clamp applies.

The recovery ceiling is half of initial morale, fixed at initialization (`CommonAIComponent.cs:87`). Morale climbs back toward that ceiling at 0.4 per second (`CommonAIComponent.cs:109`) — never to its starting value, and never to full.

For mounts it also acts as a reservation slot: `ReservedRiderAgentIndex` starts at `-1` and is set through the `internal` `OnMountReserved` / `OnMountUnreserved` pair (`CommonAIComponent.cs:253`). `FindReservingAgent` resolves the index back to an `Agent` by scanning `Mission.Current.Agents` for a matching `Index`, and it is called when a riderless mount is removed or its component is removed so the reserving human's `HumanAIComponent.UnreserveMount` runs.

## Mental Model

The three states are not independent, and the coupling is where the surprises are.

**Panic is one-way until you call `StopRetreating`.** `Panic()` sets `IsPanicked` and raises `Mission.OnAgentPanicked`; `IsPanicked` has a private setter and is cleared in exactly one place — inside `StopRetreating` (`CommonAIComponent.cs:185`). So morale recovering to the ceiling does *not* un-panic an agent. An agent that panicked and then recovered sits at healthy morale and still `IsPanicked` until something retreats it.

**`StopRetreating` early-returns if the agent was not retreating** (`CommonAIComponent.cs:180`). Since `IsPanicked = false` lives *after* that guard, calling `StopRetreating` on a panicked-but-not-yet-routing agent is a complete no-op — it will not clear panic. This is the single most common way to write "un-panic my troops" code that does nothing.

**Panic can be vetoed by the scene, not just by morale.** `CanPanic()` first defers to `BattleMoraleModel.CanPanicDueToMorale(agent)` (`CommonAIComponent.cs:194`), then applies a siege-specific veto: an attacker standing on a navmesh face whose id satisfies `id % 10 == 1`, or on the primary siege weapon's navmesh, cannot panic (`CommonAIComponent.cs:202`). When `CanPanic()` is false and morale hits the floor, the component does not panic — it *pins morale at 0.01* instead, so the agent stays at "about to break" permanently rather than resetting.

**Retreat position caching is per formation.** `Retreat(bool useCachingSystem = false)` will consult and populate `Formation.RetreatPositionCache` when asked (`CommonAIComponent.cs:163`, `CommonAIComponent.cs:170`), falling back to `Mission.GetClosestFleePositionForAgent`. The default is `false`, so the cache is never used unless you opt in.

**Mounts panic on a single point of damage.** `OnHit` calls `Panic()` outright when `damage >= 1` on an AI-controlled mount with no rider (`CommonAIComponent.cs:218`). No morale threshold, no probability — one damage point and every riderless AI horse in reach panics.

## How to use

**Getting it.** It is attached to agents, so you read it off an `Agent` rather than off the mission:

```csharp
CommonAIComponent ai = someAgent.GetComponent<CommonAIComponent>();
```

To change morale-driven panic behaviour globally, replace `MissionGameModels.Current.BattleMoraleModel`, not this component — `CanPanic` and `InitializeMorale` both route through it.

**Typical use** — drive morale yourself, remembering that the ceiling is half of initial:

```csharp
CommonAIComponent ai = agent.GetComponent<CommonAIComponent>();
if (ai != null)
{
    ai.Morale = ai.Morale - 25f;        // setter clamps to 0..100
    if (ai.Morale < 0.01f && ai.CanPanic())
        Debug.Print(agent.Name + " is about to break");
}
```

Breaking a panicking agent out, with the guard that actually matters:

```csharp
public void Rally(Agent agent)
{
    CommonAIComponent ai = agent.GetComponent<CommonAIComponent>();
    if (ai == null) return;

    if (ai.IsRetreating)
        ai.StopRetreating();             // clears IsPanicked
    else
        ai.Morale = ai.RecoveryMorale;   // NOT enough — panic stays latched
}
```

**Most common mistake, and what it costs.** Believing the class honours its own constants. It does not. `MoraleThresholdForPanicking`, `MaxRecoverableMoraleMultiplier` and `MoraleRecoveryPerSecond` are declared at `CommonAIComponent.cs:283`, `CommonAIComponent.cs:286` and `CommonAIComponent.cs:289`, and nothing in the file ever reads them — the live values are the inline literals `0.01f` at `CommonAIComponent.cs:96`, `0.5f` at `CommonAIComponent.cs:87` and `0.4f` at `CommonAIComponent.cs:109`. Editing the constants in a decompiled build changes nothing: agents still break at morale 0.01, still recover to exactly half of initial, still regain 0.4 per second. If you want different numbers you must patch the literals or override the model, and a mod that only edits the constants will ship a balance change that silently does nothing.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsPanicked` | `public bool IsPanicked { get; }` |
| `IsRetreating` | `public bool IsRetreating { get; }` |
| `ReservedRiderAgentIndex` | `public int ReservedRiderAgentIndex { get; }` |
| `InitialMorale` | `public float InitialMorale { get; set; }` |
| `RecoveryMorale` | `public float RecoveryMorale { get; set; }` |
| `Morale` | `public float Morale { get; set; }` |

## Key Methods

### Initialize
`public override void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of CommonAIComponent from the subsystem API first
CommonAIComponent commonAIComponent = ...;
commonAIComponent.Initialize();
```

### OnTickParallel
`public override void OnTickParallel(float dt)`

**Purpose:** Invoked when the tick parallel event is raised.

```csharp
// Obtain an instance of CommonAIComponent from the subsystem API first
CommonAIComponent commonAIComponent = ...;
commonAIComponent.OnTickParallel(0);
```

### OnTick
`public override void OnTick(float dt)`

**Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of CommonAIComponent from the subsystem API first
CommonAIComponent commonAIComponent = ...;
commonAIComponent.OnTick(0);
```

### Panic
`public void Panic()`

**Purpose:** Executes the Panic logic.

```csharp
// Obtain an instance of CommonAIComponent from the subsystem API first
CommonAIComponent commonAIComponent = ...;
commonAIComponent.Panic();
```

### Retreat
`public void Retreat(bool useCachingSystem = false)`

**Purpose:** Executes the Retreat logic.

```csharp
// Obtain an instance of CommonAIComponent from the subsystem API first
CommonAIComponent commonAIComponent = ...;
commonAIComponent.Retreat(false);
```

### StopRetreating
`public void StopRetreating()`

**Purpose:** Stops the retreating flow or state machine.

```csharp
// Obtain an instance of CommonAIComponent from the subsystem API first
CommonAIComponent commonAIComponent = ...;
commonAIComponent.StopRetreating();
```

### CanPanic
`public bool CanPanic()`

**Purpose:** Checks whether the this instance meets the preconditions for panic.

```csharp
// Obtain an instance of CommonAIComponent from the subsystem API first
CommonAIComponent commonAIComponent = ...;
var result = commonAIComponent.CanPanic();
```

### OnHit
`public override void OnHit(Agent affectorAgent, int damage, in MissionWeapon affectorWeapon)`

**Purpose:** Invoked when the hit event is raised.

```csharp
// Obtain an instance of CommonAIComponent from the subsystem API first
CommonAIComponent commonAIComponent = ...;
commonAIComponent.OnHit(affectorAgent, 0, affectorWeapon);
```

### OnAgentRemoved
`public override void OnAgentRemoved()`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of CommonAIComponent from the subsystem API first
CommonAIComponent commonAIComponent = ...;
commonAIComponent.OnAgentRemoved();
```

### OnComponentRemoved
`public override void OnComponentRemoved()`

**Purpose:** Invoked when the component removed event is raised.

```csharp
// Obtain an instance of CommonAIComponent from the subsystem API first
CommonAIComponent commonAIComponent = ...;
commonAIComponent.OnComponentRemoved();
```

## Usage Example

```csharp
var component = agent.GetComponent<CommonAIComponent>();
```

## See Also

- [Area Index](../)
- [HumanAIComponent](../HumanAIComponent)
- [Agent](../../mission/Agent)
- [TeamAIComponent](../TeamAIComponent)
- [CustomBattleMoraleModel](../CustomBattleMoraleModel)