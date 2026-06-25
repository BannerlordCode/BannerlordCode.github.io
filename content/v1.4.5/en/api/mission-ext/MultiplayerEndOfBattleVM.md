---
title: "MultiplayerEndOfBattleVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerEndOfBattleVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerEndOfBattleVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerEndOfBattleVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MultiplayerEndOfBattleVM.cs`

## Overview

`MultiplayerEndOfBattleVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `HasFirstPlace` | `public bool HasFirstPlace { get; set; }` |
| `HasSecondPlace` | `public bool HasSecondPlace { get; set; }` |
| `HasThirdPlace` | `public bool HasThirdPlace { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `FirstPlacePlayer` | `public MPEndOfBattlePlayerVM FirstPlacePlayer { get; set; }` |
| `SecondPlacePlayer` | `public MPEndOfBattlePlayerVM SecondPlacePlayer { get; set; }` |
| `ThirdPlacePlayer` | `public MPEndOfBattlePlayerVM ThirdPlacePlayer { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnTick
`public void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

### OnBattleEnded
`public void OnBattleEnded()`

**Purpose:** Called when the `battle ended` event is raised.

## Usage Example

```csharp
var value = new MultiplayerEndOfBattleVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)