---
title: "MPAfterBattlePopupVM"
description: "Auto-generated class reference for MPAfterBattlePopupVM."
---
# MPAfterBattlePopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.AfterBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPAfterBattlePopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.AfterBattle/MPAfterBattlePopupVM.cs`

## Overview

`MPAfterBattlePopupVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.AfterBattle` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.AfterBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsShowingGeneralProgression` | `public bool IsShowingGeneralProgression { get; set; }` |
| `IsShowingNewLevel` | `public bool IsShowingNewLevel { get; set; }` |
| `IsShowingRankProgression` | `public bool IsShowingRankProgression { get; set; }` |
| `IsShowingNewRank` | `public bool IsShowingNewRank { get; set; }` |
| `HasLostRating` | `public bool HasLostRating { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `LevelText` | `public string LevelText { get; set; }` |
| `ExperienceText` | `public string ExperienceText { get; set; }` |
| `ClickToContinueText` | `public string ClickToContinueText { get; set; }` |
| `ReachedLevelText` | `public string ReachedLevelText { get; set; }` |
| `PointsText` | `public string PointsText { get; set; }` |
| `PointChangedText` | `public string PointChangedText { get; set; }` |
| `OldRankID` | `public string OldRankID { get; set; }` |
| `NewRankID` | `public string NewRankID { get; set; }` |
| `OldRankName` | `public string OldRankName { get; set; }` |
| `NewRankName` | `public string NewRankName { get; set; }` |
| `FinalRatio` | `public int FinalRatio { get; set; }` |
| `NumOfLevelUps` | `public int NumOfLevelUps { get; set; }` |
| `InitialRatio` | `public int InitialRatio { get; set; }` |
| `GainedExperience` | `public int GainedExperience { get; set; }` |
| `LevelsExperienceRequirment` | `public int LevelsExperienceRequirment { get; set; }` |
| `NextLevel` | `public int NextLevel { get; set; }` |
| `CurrentLevel` | `public int CurrentLevel { get; set; }` |
| `ShownRating` | `public int ShownRating { get; set; }` |
| `RewardsEarned` | `public MBBindingList<MPAfterBattleRewardItemVM> RewardsEarned { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPAfterBattlePopupVM from the subsystem API first
MPAfterBattlePopupVM mPAfterBattlePopupVM = ...;
mPAfterBattlePopupVM.RefreshValues();
```

### OpenWith
`public void OpenWith(int oldExperience, int newExperience, List<string> badgesEarned, int lootGained, RankBarInfo oldRankBarInfo, RankBarInfo newRankBarInfo)`

**Purpose:** **Purpose:** Opens the resource or UI associated with with.

```csharp
// Obtain an instance of MPAfterBattlePopupVM from the subsystem API first
MPAfterBattlePopupVM mPAfterBattlePopupVM = ...;
mPAfterBattlePopupVM.OpenWith(0, 0, badgesEarned, 0, oldRankBarInfo, newRankBarInfo);
```

### ExecuteClose
`public void ExecuteClose()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with close.

```csharp
// Obtain an instance of MPAfterBattlePopupVM from the subsystem API first
MPAfterBattlePopupVM mPAfterBattlePopupVM = ...;
mPAfterBattlePopupVM.ExecuteClose();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPAfterBattlePopupVM mPAfterBattlePopupVM = ...;
mPAfterBattlePopupVM.RefreshValues();
```

## See Also

- [Area Index](../)