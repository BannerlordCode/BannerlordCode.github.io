<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionQuestBarVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionQuestBarVM

**Namespace:** SandBox.ViewModelCollection.Missions
**Module:** SandBox.ViewModelCollection
**Type:** `public class MissionQuestBarVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/Missions/MissionQuestBarVM.cs`

## Overview

`MissionQuestBarVM` lives in `SandBox.ViewModelCollection.Missions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Missions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HasQuestLevel` | `public bool HasQuestLevel { get; set; }` |
| `MinimumQuestLevel` | `public float MinimumQuestLevel { get; set; }` |
| `MaximumQuestLevel` | `public float MaximumQuestLevel { get; set; }` |
| `CurrentQuestLevel` | `public float CurrentQuestLevel { get; set; }` |
| `CurrentQuestLevelRatio` | `public float CurrentQuestLevelRatio { get; set; }` |

## Key Methods

### UpdateQuestValues
`public void UpdateQuestValues(float minDetectionLevel, float maxDetectionLevel, float currentDetectionLevel)`

**Purpose:** Updates the state or data of `quest values`.

## Usage Example

```csharp
var value = new MissionQuestBarVM();
value.UpdateQuestValues(0, 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)