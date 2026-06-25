---
title: "MissionInteractionItemBaseVM"
description: "Auto-generated class reference for MissionInteractionItemBaseVM."
---
# MissionInteractionItemBaseVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionInteractionItemBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems/MissionInteractionItemBaseVM.cs`

## Overview

`MissionInteractionItemBaseVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Interaction.InteractionItems` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsDisplayed` | `public bool IsDisplayed { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `Message` | `public string Message { get; set; }` |

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MissionInteractionItemBaseVM instance = ...;
```

## See Also

- [Area Index](../)