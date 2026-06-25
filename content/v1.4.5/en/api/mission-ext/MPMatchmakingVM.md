---
title: "MPMatchmakingVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPMatchmakingVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPMatchmakingVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPMatchmakingVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPMatchmakingVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### TrySetMatchmakingSubPage
`public void TrySetMatchmakingSubPage(MatchmakingSubPages newPage)`

**Purpose:** Attempts to get `set matchmaking sub page`, usually returning the result in an out parameter.

### RefreshPlayerData
`public void RefreshPlayerData(PlayerData playerData)`

**Purpose:** Refreshes the display or cache of `player data`.

### OnFindingGame
`public void OnFindingGame()`

**Purpose:** Called when the `finding game` event is raised.

### OnCancelFindingGame
`public void OnCancelFindingGame()`

**Purpose:** Called when the `cancel finding game` event is raised.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### GetSelectedGameTypesInfo
`public bool GetSelectedGameTypesInfo(out string gameTypes)`

**Purpose:** Gets the current value of `selected game types info`.

### RefreshWaitingTime
`public void RefreshWaitingTime()`

**Purpose:** Refreshes the display or cache of `waiting time`.

### ExecuteAutoFindGame
`public void ExecuteAutoFindGame()`

**Purpose:** Executes the `auto find game` operation or workflow.

### RefreshSubPageStates
`public void RefreshSubPageStates()`

**Purpose:** Refreshes the display or cache of `sub page states`.

### OnPremadeGameEligibilityStatusReceived
`public void OnPremadeGameEligibilityStatusReceived(bool isEligible)`

**Purpose:** Called when the `premade game eligibility status received` event is raised.

### OnSupportedFeaturesRefreshed
`public void OnSupportedFeaturesRefreshed(SupportedFeatures supportedFeatures)`

**Purpose:** Called when the `supported features refreshed` event is raised.

## Usage Example

```csharp
var value = new MPMatchmakingVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)