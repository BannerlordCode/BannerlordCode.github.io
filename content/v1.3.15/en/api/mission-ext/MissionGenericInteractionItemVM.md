---
title: "MissionGenericInteractionItemVM"
description: "Auto-generated class reference for MissionGenericInteractionItemVM."
---
# MissionGenericInteractionItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGenericInteractionItemVM : MissionInteractionItemBaseVM`
**Base:** `MissionInteractionItemBaseVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Interaction/InteractionItems/MissionGenericInteractionItemVM.cs`

## Overview

`MissionGenericInteractionItemVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of MissionGenericInteractionItemVM from the subsystem API first
MissionGenericInteractionItemVM missionGenericInteractionItemVM = ...;
missionGenericInteractionItemVM.RefreshValues();
```

### SetData
`public void SetData(TextObject message, bool isDisabled = false)`

**Purpose:** Assigns a new value to `data` and updates the object's internal state.

```csharp
// Obtain an instance of MissionGenericInteractionItemVM from the subsystem API first
MissionGenericInteractionItemVM missionGenericInteractionItemVM = ...;
missionGenericInteractionItemVM.SetData(message, false);
```

### ResetData
`public void ResetData()`

**Purpose:** Returns `data` to its default or initial condition.

```csharp
// Obtain an instance of MissionGenericInteractionItemVM from the subsystem API first
MissionGenericInteractionItemVM missionGenericInteractionItemVM = ...;
missionGenericInteractionItemVM.ResetData();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionGenericInteractionItemVM missionGenericInteractionItemVM = ...;
missionGenericInteractionItemVM.RefreshValues();
```

## See Also

- [Area Index](../)