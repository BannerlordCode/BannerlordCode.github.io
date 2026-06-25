---
title: "MissionGenericInteractionItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionGenericInteractionItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionGenericInteractionItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGenericInteractionItemVM : MissionInteractionItemBaseVM`
**Base:** `MissionInteractionItemBaseVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems/MissionGenericInteractionItemVM.cs`

## Overview

`MissionGenericInteractionItemVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### SetData
`public void SetData(TextObject message, bool isDisabled = false)`

**Purpose:** Sets the value or state of `data`.

### ResetData
`public void ResetData()`

**Purpose:** Resets `data` to its initial state.

## Usage Example

```csharp
var value = new MissionGenericInteractionItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)