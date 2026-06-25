---
title: "MPIntermissionVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPIntermissionVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPIntermissionVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Intermission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPIntermissionVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Intermission/MPIntermissionVM.cs`

## Overview

`MPIntermissionVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Intermission` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Intermission` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ConnectedPlayersCountValueText` | `public string ConnectedPlayersCountValueText { get; set; }` |
| `MaxNumPlayersValueText` | `public string MaxNumPlayersValueText { get; set; }` |
| `IsFactionAValid` | `public bool IsFactionAValid { get; set; }` |
| `IsFactionBValid` | `public bool IsFactionBValid { get; set; }` |
| `IsMissionTimerEnabled` | `public bool IsMissionTimerEnabled { get; set; }` |
| `IsEndGameTimerEnabled` | `public bool IsEndGameTimerEnabled { get; set; }` |
| `IsNextMapInfoEnabled` | `public bool IsNextMapInfoEnabled { get; set; }` |
| `IsMapVoteEnabled` | `public bool IsMapVoteEnabled { get; set; }` |
| `IsCultureVoteEnabled` | `public bool IsCultureVoteEnabled { get; set; }` |
| `IsPlayerCountEnabled` | `public bool IsPlayerCountEnabled { get; set; }` |
| `NextMapID` | `public string NextMapID { get; set; }` |
| `NextFactionACultureID` | `public string NextFactionACultureID { get; set; }` |
| `NextFactionACultureColor1` | `public Color NextFactionACultureColor1 { get; set; }` |
| `NextFactionACultureColor2` | `public Color NextFactionACultureColor2 { get; set; }` |
| `NextFactionBCultureID` | `public string NextFactionBCultureID { get; set; }` |
| `NextFactionBCultureColor1` | `public Color NextFactionBCultureColor1 { get; set; }` |
| `NextFactionBCultureColor2` | `public Color NextFactionBCultureColor2 { get; set; }` |
| `PlayersLabel` | `public string PlayersLabel { get; set; }` |
| `MapVoteText` | `public string MapVoteText { get; set; }` |
| `CultureVoteText` | `public string CultureVoteText { get; set; }` |
| `NextGameStateTimerLabel` | `public string NextGameStateTimerLabel { get; set; }` |
| `NextGameStateTimerValue` | `public string NextGameStateTimerValue { get; set; }` |
| `WelcomeMessage` | `public string WelcomeMessage { get; set; }` |
| `ServerName` | `public string ServerName { get; set; }` |
| `NextGameType` | `public string NextGameType { get; set; }` |
| `NextMapName` | `public string NextMapName { get; set; }` |
| `AvailableMaps` | `public MBBindingList<MPIntermissionMapItemVM> AvailableMaps { get; set; }` |
| `AvailableCultures` | `public MBBindingList<MPIntermissionCultureItemVM> AvailableCultures { get; set; }` |
| `QuitText` | `public string QuitText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### Tick
`public void Tick()`

**Purpose:** Handles logic related to `tick`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### ExecuteQuitServer
`public void ExecuteQuitServer()`

**Purpose:** Executes the `quit server` operation or workflow.

## Usage Example

```csharp
var value = new MPIntermissionVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)