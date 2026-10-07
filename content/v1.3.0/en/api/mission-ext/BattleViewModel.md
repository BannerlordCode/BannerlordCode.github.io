---
title: "BattleViewModel"
description: "Auto-generated class reference for BattleViewModel."
---
# BattleViewModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleViewModel`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/BattleViewModel.cs`

## Overview

In 1.3.0 `BattleViewModel` is a shell that nothing uses. The entire type is one auto-property: `public ObservableCollection<TroopMissionInfo> MyData { get; set; }` (`BattleViewModel.cs:12`), declared inside an otherwise empty class body (`BattleViewModel.cs:7`). There is no constructor, no command, no notification plumbing, and no base class.

Its element type is no more substantial: `TroopMissionInfo` is a class with an empty body (`TroopMissionInfo.cs:6`). So `MyData` is a collection of objects that carry no data, and the collection itself is never populated by any shipped code.

That is the finding that matters here. Grep the 1.3.0 tree for `BattleViewModel` and there is not one reference outside its own file — no screen, no view-model collection, no XML binding instantiates it. Unlike most Gauntlet view-models there is nothing to bind it to, because no layer knows it exists.

## Mental Model

Read this as a reserved slot, not as an API. The typical Bannerlord view-model is discovered through `ViewModelCollection`, instantiated by the framework, and its properties bound by name in a prefab; `BattleViewModel` participates in none of that. If you instantiate it yourself and populate `MyData`, you get a list of empty objects and a property nobody is watching — no `PropertyChanged` notification is raised on assignment, and `ObservableCollection<T>` only notifies on *collection* mutation, not on the property being replaced.

The property has a full public setter (`BattleViewModel.cs:12`), so you can assign it — but doing so has no observable effect anywhere in the game, because there is no consumer.

Two boundaries are worth stating because they are easy to get wrong from the name. This is not a `BaseViewModel` and not a `ViewModel` base — it inherits `object`, so none of the framework's binding machinery, change notification, or lifecycle applies. And `MyData` is `ObservableCollection<TroopMissionInfo>`, not a mission-side collection: `TroopMissionInfo` has no members to hang agent counts or formation data on, so there is no field you can populate to make it useful.

If you need battle data in a UI, the working pattern in 1.3.0 is to build your own view-model class holding the real mission types (`Formation`, `Team`, `Agent`) and register it the way the game's own view-models are registered, or to read it from a `MissionLogic` and push it into your own screen.

## How to use

**Getting one.** There is no registration path and no entry point that hands you this type — instantiate it directly with `new BattleViewModel()`, or, more usefully, do not use it. Reach mission data through `Mission.Current` from a behaviour instead.

**Typical use** — the shape that actually binds in 1.3.0, for comparison with this type:

```csharp
using System.Collections.Generic;
using System.Collections.ObjectModel;
using TaleWorlds.MountAndBlade;

public class MyBattleViewModel
{
    // Real mission types, not empty info shells.
    public ObservableCollection<string> Lines { get; } = new ObservableCollection<string>();

    public void Refresh(Mission mission)
    {
        Lines.Clear();

        // PlayerTeam.ActiveAgents is what the shipped CustomBattleInitializationModel
        // walks (CustomBattleInitializationModel.cs:15).
        foreach (Agent agent in mission.PlayerTeam.ActiveAgents)
        {
            if (agent.IsActive())
            {
                Lines.Add($"{agent.NameTextObject} ({agent.Formation?.RepresentativeClass})");
            }
        }
    }
}
```

`ObservableCollection<T>` is the collection type this game binds against, and `Team.ActiveAgents` is the player-team collection the shipped models walk (`CustomBattleInitializationModel.cs:15`). `Formation.RepresentativeClass` is declared on `Formation` (`Formation.cs:71`).

**Most common mistake:** binding a screen to `BattleViewModel.MyData` and waiting for it to fill.

```csharp
// Compiles, binds, and stays empty forever.
public class MyBattleVM : BattleViewModel { }
```

Nothing populates `MyData`, and `TroopMissionInfo` has no fields to populate even if something did, so the bound list renders zero rows and the screen looks broken with no exception to debug from. There is also no `OnBattleStarted`-style hook on this class to fill it in — it has no methods at all. Build your own view-model over real mission types, as above, and drive it from a `MissionLogic`.

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
- [TroopMissionInfo — the empty element type of `MyData`](../TroopMissionInfo)
- [中文页面](../../../../zh/api/mission-ext/BattleViewModel)