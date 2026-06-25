---
title: "MPMatchmakingVM"
description: "Auto-generated class reference for MPMatchmakingVM."
---
# MPMatchmakingVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPMatchmakingVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPMatchmakingVM.cs`

## Overview

`MPMatchmakingVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `HasUnofficialModulesLoaded` | `public bool HasUnofficialModulesLoaded { get; set; }` |
| `IsCustomGameStageFindEnabled` | `public bool IsCustomGameStageFindEnabled { get; set; }` |
| `IsRankedGamesEnabled` | `public bool IsRankedGamesEnabled { get; set; }` |
| `IsCustomGamesEnabled` | `public bool IsCustomGamesEnabled { get; set; }` |
| `IsQuickplayGamesEnabled` | `public bool IsQuickplayGamesEnabled { get; set; }` |
| `IsCustomServerListEnabled` | `public bool IsCustomServerListEnabled { get; set; }` |
| `IsPremadeGamesEnabled` | `public bool IsPremadeGamesEnabled { get; set; }` |
| `IsCustomServerFeatureSupported` | `public bool IsCustomServerFeatureSupported { get; set; }` |
| `IsClansFeatureSupported` | `public bool IsClansFeatureSupported { get; set; }` |
| `CustomServer` | `public MPCustomGameVM CustomServer { get; set; }` |
| `PremadeMatches` | `public MPCustomGameVM PremadeMatches { get; set; }` |
| `IsRanked` | `public bool IsRanked { get; set; }` |
| `RankedGameTypes` | `public MBBindingList<MPMatchmakingItemVM> RankedGameTypes { get; set; }` |
| `QuickplayGameTypes` | `public MBBindingList<MPMatchmakingItemVM> QuickplayGameTypes { get; set; }` |
| `CustomGameTypes` | `public MBBindingList<MPMatchmakingItemVM> CustomGameTypes { get; set; }` |
| `Regions` | `public SelectorVM<MPMatchmakingRegionSelectorItemVM> Regions { get; set; }` |
| `SelectionInfo` | `public MPMatchmakingSelectionInfoVM SelectionInfo { get; set; }` |
| `IsMatchFindPossible` | `public bool IsMatchFindPossible { get; set; }` |
| `IsFindingMatch` | `public bool IsFindingMatch { get; set; }` |
| `PlayText` | `public string PlayText { get; set; }` |
| `QuickPlayText` | `public string QuickPlayText { get; set; }` |
| `CustomGameText` | `public string CustomGameText { get; set; }` |
| `CommunityGameText` | `public string CommunityGameText { get; set; }` |
| `CustomServerListText` | `public string CustomServerListText { get; set; }` |
| `AutoFindText` | `public string AutoFindText { get; set; }` |
| `MatchFindNotPossibleText` | `public string MatchFindNotPossibleText { get; set; }` |
| `RankedText` | `public string RankedText { get; set; }` |
| `CasualText` | `public string CasualText { get; set; }` |
| `SelectionInfoText` | `public string SelectionInfoText { get; set; }` |
| `SelectedSubPageIndex` | `public int SelectedSubPageIndex { get; set; }` |
| `TeamMatchesText` | `public string TeamMatchesText { get; set; }` |
| `RegionsHint` | `public HintViewModel RegionsHint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MPMatchmakingVM from the subsystem API first
MPMatchmakingVM mPMatchmakingVM = ...;
mPMatchmakingVM.RefreshValues();
```

### TrySetMatchmakingSubPage
`public void TrySetMatchmakingSubPage(MatchmakingSubPages newPage)`

**Purpose:** Attempts to retrieve set matchmaking sub page, usually returning success through an out parameter.

```csharp
// Obtain an instance of MPMatchmakingVM from the subsystem API first
MPMatchmakingVM mPMatchmakingVM = ...;
mPMatchmakingVM.TrySetMatchmakingSubPage(newPage);
```

### RefreshPlayerData
`public void RefreshPlayerData(PlayerData playerData)`

**Purpose:** Keeps the display or cache of player data in sync with the underlying state.

```csharp
// Obtain an instance of MPMatchmakingVM from the subsystem API first
MPMatchmakingVM mPMatchmakingVM = ...;
mPMatchmakingVM.RefreshPlayerData(playerData);
```

### OnFindingGame
`public void OnFindingGame()`

**Purpose:** Invoked when the finding game event is raised.

```csharp
// Obtain an instance of MPMatchmakingVM from the subsystem API first
MPMatchmakingVM mPMatchmakingVM = ...;
mPMatchmakingVM.OnFindingGame();
```

### OnCancelFindingGame
`public void OnCancelFindingGame()`

**Purpose:** Invoked when the cancel finding game event is raised.

```csharp
// Obtain an instance of MPMatchmakingVM from the subsystem API first
MPMatchmakingVM mPMatchmakingVM = ...;
mPMatchmakingVM.OnCancelFindingGame();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MPMatchmakingVM from the subsystem API first
MPMatchmakingVM mPMatchmakingVM = ...;
mPMatchmakingVM.OnFinalize();
```

### GetSelectedGameTypesInfo
`public bool GetSelectedGameTypesInfo(out string gameTypes)`

**Purpose:** Reads and returns the selected game types info value held by the this instance.

```csharp
// Obtain an instance of MPMatchmakingVM from the subsystem API first
MPMatchmakingVM mPMatchmakingVM = ...;
var result = mPMatchmakingVM.GetSelectedGameTypesInfo(gameTypes);
```

### RefreshWaitingTime
`public void RefreshWaitingTime()`

**Purpose:** Keeps the display or cache of waiting time in sync with the underlying state.

```csharp
// Obtain an instance of MPMatchmakingVM from the subsystem API first
MPMatchmakingVM mPMatchmakingVM = ...;
mPMatchmakingVM.RefreshWaitingTime();
```

### ExecuteAutoFindGame
`public void ExecuteAutoFindGame()`

**Purpose:** Runs the operation or workflow associated with auto find game.

```csharp
// Obtain an instance of MPMatchmakingVM from the subsystem API first
MPMatchmakingVM mPMatchmakingVM = ...;
mPMatchmakingVM.ExecuteAutoFindGame();
```

### RefreshSubPageStates
`public void RefreshSubPageStates()`

**Purpose:** Keeps the display or cache of sub page states in sync with the underlying state.

```csharp
// Obtain an instance of MPMatchmakingVM from the subsystem API first
MPMatchmakingVM mPMatchmakingVM = ...;
mPMatchmakingVM.RefreshSubPageStates();
```

### OnPremadeGameEligibilityStatusReceived
`public void OnPremadeGameEligibilityStatusReceived(bool isEligible)`

**Purpose:** Invoked when the premade game eligibility status received event is raised.

```csharp
// Obtain an instance of MPMatchmakingVM from the subsystem API first
MPMatchmakingVM mPMatchmakingVM = ...;
mPMatchmakingVM.OnPremadeGameEligibilityStatusReceived(false);
```

### OnSupportedFeaturesRefreshed
`public void OnSupportedFeaturesRefreshed(SupportedFeatures supportedFeatures)`

**Purpose:** Invoked when the supported features refreshed event is raised.

```csharp
// Obtain an instance of MPMatchmakingVM from the subsystem API first
MPMatchmakingVM mPMatchmakingVM = ...;
mPMatchmakingVM.OnSupportedFeaturesRefreshed(supportedFeatures);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPMatchmakingVM mPMatchmakingVM = ...;
mPMatchmakingVM.RefreshValues();
```

## See Also

- [Area Index](../)