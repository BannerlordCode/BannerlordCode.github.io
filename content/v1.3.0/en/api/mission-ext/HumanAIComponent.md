---
title: "HumanAIComponent"
description: "Auto-generated class reference for HumanAIComponent."
---
# HumanAIComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HumanAIComponent : AgentComponent`
**Base:** `AgentComponent`
**File:** `TaleWorlds.MountAndBlade/HumanAIComponent.cs`

## Overview

`HumanAIComponent` is the `AgentComponent` that makes a human agent think: it drives the behaviour-parameter vector the agent's action space is tuned from, decides whether the agent walks to a usable object or defends it, and owns the ground item-pickup behaviour. It derives from `AgentComponent` (`HumanAIComponent.cs:11`) — so `agent.GetComponent<HumanAIComponent>()` is a real call here, unlike most of the types in this bucket.

It is attached by `AgentHumanAILogic.OnAgentCreated` for **AI-controlled humans only** (`AgentHumanAILogic.cs:13`, `AgentHumanAILogic.cs:15`), and re-attached when a human's controller flips to AI (`AgentHumanAILogic.cs:25`, `AgentHumanAILogic.cs:27`) while being removed when it flips away (`AgentHumanAILogic.cs:30` through `AgentHumanAILogic.cs:32`). `FightBehavior` adds a second one when an agent enters a fight (`FightBehavior.cs:16`). `Agent.AddComponent` recognises the type specifically and assigns it to the dedicated `Agent.HumanAIComponent` slot as well as the generic component list (`Agent.cs:4600`, `Agent.cs:4610`, `Agent.cs:4612`).

The constructor is where the behaviour contract is established. It allocates a fixed seven-slot `BehaviorValues` array (`HumanAIComponent.cs:50`), seeds the last-set marker to `Overriden` (`HumanAIComponent.cs:51`), applies the `Default` value set (`HumanAIComponent.cs:52`) and pushes the array into the agent with `SetAllBehaviorParams` (`HumanAIComponent.cs:53`). It then **replaces two agent delegates** — `OnAgentWieldedItemChange` and `OnAgentMountedStateChanged` — both bound to `DisablePickUpForAgentIfNeeded` (`HumanAIComponent.cs:56`, `HumanAIComponent.cs:58`) — and creates two timers with randomised durations: the item-pickup timer at `2.5f + random` and the mount-search timer at `2f + random` (`HumanAIComponent.cs:59`, `HumanAIComponent.cs:60`). The randomisation exists so a crowd of agents does not all re-evaluate on the same frame.

## Mental Model

`IsInImportantCombatAction` is a **hard-coded list of six action codes**, and it reads the action channel `1` specifically (`HumanAIComponent.cs:343`): `ReadyMelee`, `ReadyRanged`, `ReleaseMelee`, `ReleaseRanged`, `ReleaseThrowing` and `DefendShield` (`HumanAIComponent.cs:344`). Note that `Block` and `ReadyBlock` are **not** in it, so a shield-blocker counts as *not* in an important combat action — and this predicate is one conjunct of the item-pickup gate, so a blocking agent is still eligible to walk off and grab loot. There is no virtual and no model indirection: the set is written out inline.

The item-pickup gate is a **seven-term conjunction** and every term is load-bearing: `!_disablePickUpForAgent`, `ItemPickupModel.IsAgentEquipmentSuitableForPickUpAvailability`, `CanBeAssignedForScriptedMovement`, `IsAlarmed`, the `AgentFlag.CanAttack` flag, `!IsInImportantCombatAction()` and `!IsInWater()` (`HumanAIComponent.cs:159`). Two of the escape hatches are private fields with public setters — `ForceDisablePickUpForAgent` (`HumanAIComponent.cs:854`) and the `_forceDisableItemPickup` backing it (`HumanAIComponent.cs:914`) — plus the private `_disablePickUpForAgent` flag driven by the two agent delegates (`HumanAIComponent.cs:890`). The candidate selection is then gated a second time, on target distance and consumable state (`HumanAIComponent.cs:162`), and finally scored by `ItemPickupModel.GetItemScoreForAgent` with the running best initialised to `0f` and replaced only on a strict `>` (`HumanAIComponent.cs:367`, `HumanAIComponent.cs:400`).

The distance constants are **squared and pre-computed**, and the two must stay in step: `AvoidPickUpIfLookAgentIsCloseDistance = 20f` and its square `AvoidPickUpIfLookAgentIsCloseDistanceSquared = 400f` (`HumanAIComponent.cs:860`, `HumanAIComponent.cs:863`), and `ClosestMountSearchRangeSq = 6400f` (i.e. 80 units, `HumanAIComponent.cs:866`). Editing the distance and forgetting the square gives you a pickup radius off by a factor of the distance.

`ShouldCatchUpWithFormation` is a property with a **side effect in its setter** — it forwards to `Agent.SetShouldCatchUpWithFormation` only when the value actually changes (`HumanAIComponent.cs:29` through `HumanAIComponent.cs:32`). That makes assignment idempotent from the agent's point of view but not free: writing the same value still evaluates the comparison. `FollowedAgent` (`HumanAIComponent.cs:16`) and `IsDefending` (`HumanAIComponent.cs:39`, comparing against `UsableObjectInterestKind.Defending`) are the two other readable states.

The behaviour-vector side has a deliberate two-level model. `SetBehaviorValueSet` (`HumanAIComponent.cs:760`) swaps whole presets, `RefreshBehaviorValues` (`HumanAIComponent.cs:828`) recomputes them from the agent's current movement and arrangement orders, `SyncBehaviorParamsIfNecessary` (`HumanAIComponent.cs:93`) pushes them only if `_hasNewBehaviorValues` is set, and `OverrideBehaviorParams` (`HumanAIComponent.cs:70`) writes individual values directly. The `_lastBehaviorValueSet` / `_hasNewBehaviorValues` pair is what lets a preset change be deferred to the next sync instead of forcing a re-push every frame.

## How to use

**Getting it.** Read it off a human AI agent. This is one of the few types in the bucket where the component lookup is the correct call, because the type really is an `AgentComponent`:

```csharp
HumanAIComponent brain = someHumanAgent.GetComponent<HumanAIComponent>();
if (brain != null)
{
    Debug.Print("catching up=" + brain.ShouldCatchUpWithFormation
                + " defending=" + brain.IsDefending, false);
}
```

Suppress loot-grubbing for a unit, the way the agent's own delegates do:

```csharp
brain.ForceDisablePickUpForAgent();   // sets the flag the pickup gate tests first
```

Push a behaviour preset, and override one value on top:

```csharp
brain.SetBehaviorValueSet(HumanAIComponent.BehaviorValueSet.Aggressive);
brain.OverrideBehaviorParams(HumanAIComponent.AISimpleBehaviorKind.Move, 1f, 1f, 1f, 1f, 1f);
brain.SyncBehaviorParamsIfNecessary();   // only pushes if something actually changed
```

Attach your own to an agent that does not have one — the game attaches to AI-controlled humans only:

```csharp
if (agent.IsAIControlled && agent.IsHuman && agent.GetComponent<HumanAIComponent>() == null)
{
    agent.AddComponent(new HumanAIComponent(agent));
}
```

**The mistake that stops an agent ever using a shield again.** Adding `ReadyBlock` to your own `IsInImportantCombatAction` check. The stock predicate reads action channel `1` and enumerates exactly six codes, shield-block excluded (`HumanAIComponent.cs:344`). Blocked-from-looting agents stop walking to usable objects, which in a siege means they stop claiming ram towers — and because the flag is one conjunct of a seven-term gate (`HumanAIComponent.cs:159`), the failure is that the agent simply never *looks* for anything, with no error and no log line.

## Key Properties

| Name | Signature |
|------|-----------|
| `FollowedAgent` | `public Agent FollowedAgent { get; }` |
| `ShouldCatchUpWithFormation` | `public bool ShouldCatchUpWithFormation { get; }` |
| `IsDefending` | `public bool IsDefending { get; }` |

## Key Methods

### SetStandGroundPositionForTeleport
`public void SetStandGroundPositionForTeleport(Vec3 newFormationPosition)`

**Purpose:** Assigns a new value to stand ground position for teleport and updates the object's internal state.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.SetStandGroundPositionForTeleport(newFormationPosition);
```

### OverrideBehaviorParams
`public void OverrideBehaviorParams(HumanAIComponent.AISimpleBehaviorKind behavior, float y1, float x2, float y2, float x3, float y3)`

**Purpose:** Executes the OverrideBehaviorParams logic.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.OverrideBehaviorParams(behavior, 0, 0, 0, 0, 0);
```

### SyncBehaviorParamsIfNecessary
`public void SyncBehaviorParamsIfNecessary()`

**Purpose:** Synchronizes behavior params if necessary across the relevant contexts or systems.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.SyncBehaviorParamsIfNecessary();
```

### DisablePickUpForAgentIfNeeded
`public void DisablePickUpForAgentIfNeeded()`

**Purpose:** Executes the DisablePickUpForAgentIfNeeded logic.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.DisablePickUpForAgentIfNeeded();
```

### OnTickParallel
`public override void OnTickParallel(float dt)`

**Purpose:** Invoked when the tick parallel event is raised.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.OnTickParallel(0);
```

### OnTick
`public override void OnTick(float dt)`

**Purpose:** Invoked when the tick event is raised.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.OnTick(0);
```

### OnAgentRemoved
`public override void OnAgentRemoved()`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.OnAgentRemoved();
```

### OnAgentTeleported
`public override void OnAgentTeleported()`

**Purpose:** Invoked when the agent teleported event is raised.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.OnAgentTeleported();
```

### OnComponentRemoved
`public override void OnComponentRemoved()`

**Purpose:** Invoked when the component removed event is raised.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.OnComponentRemoved();
```

### IsInImportantCombatAction
`public bool IsInImportantCombatAction()`

**Purpose:** Determines whether the this instance is in the in important combat action state or condition.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
var result = humanAIComponent.IsInImportantCombatAction();
```

### GetCurrentlyMovingGameObject
`public UsableMissionObject GetCurrentlyMovingGameObject()`

**Purpose:** Reads and returns the currently moving game object value held by the this instance.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
var result = humanAIComponent.GetCurrentlyMovingGameObject();
```

### GetCurrentlyDefendingGameObject
`public UsableMissionObject GetCurrentlyDefendingGameObject()`

**Purpose:** Reads and returns the currently defending game object value held by the this instance.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
var result = humanAIComponent.GetCurrentlyDefendingGameObject();
```

### MoveToUsableGameObject
`public void MoveToUsableGameObject(UsableMissionObject usedObject, IDetachment detachment, Agent.AIScriptedFrameFlags scriptedFrameFlags = Agent.AIScriptedFrameFlags.NoAttack)`

**Purpose:** Moves to usable game object to a new position or state.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.MoveToUsableGameObject(usedObject, detachment, agent.AIScriptedFrameFlags.NoAttack);
```

### MoveToClear
`public void MoveToClear()`

**Purpose:** Moves to clear to a new position or state.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.MoveToClear();
```

### StartDefendingGameObject
`public void StartDefendingGameObject(UsableMissionObject usedObject, IDetachment detachment)`

**Purpose:** Starts the defending game object flow or state machine.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.StartDefendingGameObject(usedObject, detachment);
```

### StopDefendingGameObject
`public void StopDefendingGameObject()`

**Purpose:** Stops the defending game object flow or state machine.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.StopDefendingGameObject();
```

### IsInterestedInAnyGameObject
`public bool IsInterestedInAnyGameObject()`

**Purpose:** Determines whether the this instance is in the interested in any game object state or condition.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
var result = humanAIComponent.IsInterestedInAnyGameObject();
```

### IsInterestedInGameObject
`public bool IsInterestedInGameObject(UsableMissionObject usableMissionObject)`

**Purpose:** Determines whether the this instance is in the interested in game object state or condition.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
var result = humanAIComponent.IsInterestedInGameObject(usableMissionObject);
```

### FollowAgent
`public void FollowAgent(Agent agent)`

**Purpose:** Executes the FollowAgent logic.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.FollowAgent(agent);
```

### GetDesiredSpeedInFormation
`public float GetDesiredSpeedInFormation(bool isCharging)`

**Purpose:** Reads and returns the desired speed in formation value held by the this instance.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
var result = humanAIComponent.GetDesiredSpeedInFormation(false);
```

### AdjustSpeedLimit
`public void AdjustSpeedLimit(Agent agent, float desiredSpeed, bool limitIsMultiplier)`

**Purpose:** Executes the AdjustSpeedLimit logic.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.AdjustSpeedLimit(agent, 0, false);
```

### ParallelUpdateFormationMovement
`public unsafe void ParallelUpdateFormationMovement()`

**Purpose:** Executes the ParallelUpdateFormationMovement logic.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.ParallelUpdateFormationMovement();
```

### OnRetreating
`public override void OnRetreating()`

**Purpose:** Invoked when the retreating event is raised.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.OnRetreating();
```

### OnDismount
`public override void OnDismount(Agent mount)`

**Purpose:** Invoked when the dismount event is raised.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.OnDismount(mount);
```

### SetBehaviorValueSet
`public void SetBehaviorValueSet(HumanAIComponent.BehaviorValueSet behaviorValueSet)`

**Purpose:** Assigns a new value to behavior value set and updates the object's internal state.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.SetBehaviorValueSet(behaviorValueSet);
```

### RefreshBehaviorValues
`public void RefreshBehaviorValues(MovementOrder.MovementOrderEnum movementOrder, ArrangementOrder.ArrangementOrderEnum arrangementOrder)`

**Purpose:** Keeps the display or cache of behavior values in sync with the underlying state.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.RefreshBehaviorValues(movementOrder, arrangementOrder);
```

### ForceDisablePickUpForAgent
`public void ForceDisablePickUpForAgent()`

**Purpose:** Executes the ForceDisablePickUpForAgent logic.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
humanAIComponent.ForceDisablePickUpForAgent();
```

### GetValueAt
`public float GetValueAt(float x)`

**Purpose:** Reads and returns the value at value held by the this instance.

```csharp
// Obtain an instance of HumanAIComponent from the subsystem API first
HumanAIComponent humanAIComponent = ...;
var result = humanAIComponent.GetValueAt(0);
```

## Usage Example

The `agent.GetComponent<HumanAIComponent>()` line previously on this page is, unusually, **correct** — `HumanAIComponent` really does derive from `AgentComponent` (`HumanAIComponent.cs:11`) and `Agent.GetComponent<T>()` is constrained to exactly that (`Agent.cs:3107`). The one thing the line omits is that the component only exists on AI-controlled humans, so the result is null on the player's agent:

```csharp
var brain = someHumanAgent.GetComponent<HumanAIComponent>();   // null on the player
```

## See Also

- [ItemPickupModel — the model this component's pickup gate consults three times](../ItemPickupModel)
- [CustomBattleBannerBearersModel — the model `CanAgentPickUpAnyBanner` uses when picking a bearer item](../CustomBattleBannerBearersModel)
- [MissionGamepadEffectsView — another per-agent consumer of AgentState and collision results](../MissionGamepadEffectsView)
- [Agent — the type that owns and hosts this component](../../mission/Agent)
- [Area Index](../)