<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClimbingMachine`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ClimbingMachine

**Namespace:** TaleWorlds.MountAndBlade.Objects.Usables
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClimbingMachine : UsableMachine`
**Base:** `UsableMachine`
**File:** `TaleWorlds.MountAndBlade/Objects/Usables/ClimbingMachine.cs`

## Overview

`ClimbingMachine` lives in `TaleWorlds.MountAndBlade.Objects.Usables` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Objects.Usables` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SinkingReferenceOffset` | `public override float SinkingReferenceOffset { get; }` |

## Key Methods

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**Purpose:** Gets the current value of `action text for standing point`.

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Gets the current value of `description text`.

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Gets the current value of `tick requirement`.

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**Purpose:** Called when the `deployment finished` event is raised.

## Usage Example

```csharp
var value = new ClimbingMachine();
value.GetActionTextForStandingPoint(usableGameObject);
```

## See Also

- [Complete Class Catalog](../catalog)