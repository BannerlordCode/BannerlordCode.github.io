---
title: "MissionHintInteractionItemVM"
description: "Auto-generated class reference for MissionHintInteractionItemVM."
---
# MissionHintInteractionItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal class MissionHintInteractionItemVM : MissionInteractionItemBaseVM`
**Base:** `MissionInteractionItemBaseVM`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems/MissionHintInteractionItemVM.cs`

## Overview

`MissionHintInteractionItemVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of MissionHintInteractionItemVM from the subsystem API first
MissionHintInteractionItemVM missionHintInteractionItemVM = ...;
missionHintInteractionItemVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionHintInteractionItemVM missionHintInteractionItemVM = ...;
missionHintInteractionItemVM.RefreshValues();
```

## See Also

- [Area Index](../)