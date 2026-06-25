---
title: "MissionScoreboardStatItemVM"
description: "Auto-generated class reference for MissionScoreboardStatItemVM."
---
# MissionScoreboardStatItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionScoreboardStatItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard/MissionScoreboardStatItemVM.cs`

## Overview

`MissionScoreboardStatItemVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Item` | `public string Item { get; set; }` |
| `HeaderID` | `public string HeaderID { get; set; }` |
| `BelongedPlayer` | `public MissionScoreboardPlayerVM BelongedPlayer { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
MissionScoreboardStatItemVM instance = ...;
```

## See Also

- [Area Index](../)