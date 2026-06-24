<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CheckpointUsePoint`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CheckpointUsePoint

**Namespace:** SandBox.Objects.Usables
**Module:** SandBox.Objects
**Type:** `public class CheckpointUsePoint : UsableMachine`
**Base:** `UsableMachine`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Objects.Usables/CheckpointUsePoint.cs`

## Overview

`CheckpointUsePoint` lives in `SandBox.Objects.Usables` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Objects.Usables` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SpawnPoint` | `public GameEntity SpawnPoint { get; }` |

## Key Methods

### AfterMissionStart
`public override void AfterMissionStart()`

**Purpose:** Handles logic related to `after mission start`.

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**Purpose:** Gets the current value of `action text for standing point`.

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Gets the current value of `description text`.

## Usage Example

```csharp
var value = new CheckpointUsePoint();
value.AfterMissionStart();
```

## See Also

- [Complete Class Catalog](../catalog)