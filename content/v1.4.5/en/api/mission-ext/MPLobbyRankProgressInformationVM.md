---
title: "MPLobbyRankProgressInformationVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPLobbyRankProgressInformationVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyRankProgressInformationVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyRankProgressInformationVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile/MPLobbyRankProgressInformationVM.cs`

## Overview

`MPLobbyRankProgressInformationVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsAtFinalRank` | `public bool IsAtFinalRank { get; set; }` |
| `IsEvaluating` | `public bool IsEvaluating { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `ClickToCloseText` | `public string ClickToCloseText { get; set; }` |
| `CurrentRankTitleText` | `public string CurrentRankTitleText { get; set; }` |
| `RatingRemainingTitleText` | `public string RatingRemainingTitleText { get; set; }` |
| `CurrentRankID` | `public string CurrentRankID { get; set; }` |
| `PreviousRankID` | `public string PreviousRankID { get; set; }` |
| `NextRankID` | `public string NextRankID { get; set; }` |
| `CurrentRating` | `public int CurrentRating { get; set; }` |
| `NextRankRating` | `public int NextRankRating { get; set; }` |
| `RatingRatio` | `public int RatingRatio { get; set; }` |
| `Player` | `public MPLobbyPlayerBaseVM Player { get; set; }` |
| `AllRanks` | `public MBBindingList<StringPairItemVM> AllRanks { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### OpenWith
`public void OpenWith(MPLobbyPlayerBaseVM player)`

**Purpose:** Handles logic related to `open with`.

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**Purpose:** Executes the `close popup` operation or workflow.

## Usage Example

```csharp
var value = new MPLobbyRankProgressInformationVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)