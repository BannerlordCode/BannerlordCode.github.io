<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StandingPoint`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StandingPoint

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class StandingPoint : UsableMissionObject`
**Base:** `UsableMissionObject`
**File:** `TaleWorlds.MountAndBlade/StandingPoint.cs`

## Overview

`StandingPoint` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DisableScriptedFrameFlags` | `public virtual Agent.AIScriptedFrameFlags DisableScriptedFrameFlags { get; }` |
| `DisableCombatActionsOnUse` | `public override bool DisableCombatActionsOnUse { get; set; }` |
| `FavoredUser` | `public Agent FavoredUser { get; set; }` |
| `PlayerStopsUsingWhenInteractsWithOther` | `public virtual bool PlayerStopsUsingWhenInteractsWithOther { get; }` |
| `UseOwnPositionInsteadOfWorldPosition` | `public bool UseOwnPositionInsteadOfWorldPosition { get; }` |
| `CustomPlayerInteractionDistance` | `public float CustomPlayerInteractionDistance { get; }` |
| `this` | `public StandingPoint this { get; }` |

## Key Methods

### OnParentMachinePhysicsStateChanged
`public void OnParentMachinePhysicsStateChanged()`

**Purpose:** Called when the `parent machine physics state changed` event is raised.

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**Purpose:** Handles logic related to `is disabled for agent`.

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Gets the current value of `tick requirement`.

### OnUse
`public override void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**Purpose:** Called when the `use` event is raised.

### OnUseStopped
`public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**Purpose:** Called when the `use stopped` event is raised.

### GetUserFrameForAgent
`public override WorldFrame GetUserFrameForAgent(Agent agent)`

**Purpose:** Gets the current value of `user frame for agent`.

### HasAlternative
`public virtual bool HasAlternative()`

**Purpose:** Checks whether the current object has/contains `alternative`.

### GetUsageScoreForAgent
`public virtual float GetUsageScoreForAgent(Agent agent)`

**Purpose:** Gets the current value of `usage score for agent`.

### GetUsageScoreForAgent
`public virtual float GetUsageScoreForAgent(ValueTuple<Agent, float> agentPair)`

**Purpose:** Gets the current value of `usage score for agent`.

### SetupOnUsingStoppedBehavior
`public void SetupOnUsingStoppedBehavior(bool autoAttach, Action<Agent, bool> action)`

**Purpose:** Sets the value or state of `up on using stopped behavior`.

### OnEndMission
`public override void OnEndMission()`

**Purpose:** Called when the `end mission` event is raised.

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Gets the current value of `description text`.

### IsUsableByAgent
`public override bool IsUsableByAgent(Agent userAgent)`

**Purpose:** Handles logic related to `is usable by agent`.

### SetUsableByAIOnly
`public void SetUsableByAIOnly()`

**Purpose:** Sets the value or state of `usable by a i only`.

### SetUsableByPlayerOnly
`public void SetUsableByPlayerOnly()`

**Purpose:** Sets the value or state of `usable by player only`.

### SetUsableByPlayerOrAI
`public void SetUsableByPlayerOrAI()`

**Purpose:** Sets the value or state of `usable by player or a i`.

## Usage Example

```csharp
var value = new StandingPoint();
value.OnParentMachinePhysicsStateChanged();
```

## See Also

- [Complete Class Catalog](../catalog)