<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionPrimaryInteractionItemVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionPrimaryInteractionItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionPrimaryInteractionItemVM : MissionGenericInteractionItemVM`
**Base:** `MissionGenericInteractionItemVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Interaction/InteractionItems/MissionPrimaryInteractionItemVM.cs`

## Overview

`MissionPrimaryInteractionItemVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FocusTypeString` | `public string FocusTypeString { get; set; }` |

## Usage Example

```csharp
var value = new MissionPrimaryInteractionItemVM();
```

## See Also

- [Complete Class Catalog](../catalog)