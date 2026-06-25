---
title: "BattleViewModel"
description: "Auto-generated class reference for BattleViewModel."
---
# BattleViewModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleViewModel`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BattleViewModel.cs`

## Overview

`BattleViewModel` is a Gauntlet ViewModel — the data-binding bridge between C# logic and UI. Mods typically use it to expose state, commands, and list items to the screen.

## Mental Model

Treat `BattleViewModel` as a ViewModel-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MyData` | `public ObservableCollection<TroopMissionInfo> MyData { get; set; }` |

## Usage Example

```csharp
// Bind the instance as the view-model of a movie or view
BattleViewModel vm = ...;
movie.SetViewModel(vm);
```

## See Also

- [Area Index](../)