<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionScoreboardSideVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionScoreboardSideVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionScoreboardSideVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard/MissionScoreboardSideVM.cs`

## Overview

`MissionScoreboardSideVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Players` | `public MBBindingList<MissionScoreboardPlayerVM> Players { get; set; }` |
| `EntryProperties` | `public MBBindingList<MissionScoreboardHeaderItemVM> EntryProperties { get; set; }` |
| `PlayerSortController` | `public MissionScoreboardPlayerSortControllerVM PlayerSortController { get; set; }` |
| `IsSingleSide` | `public bool IsSingleSide { get; set; }` |
| `CultureColor1` | `public Color CultureColor1 { get; set; }` |
| `CultureColor2` | `public Color CultureColor2 { get; set; }` |
| `IsSecondSide` | `public bool IsSecondSide { get; set; }` |
| `ShowAttackerOrDefenderIcons` | `public bool ShowAttackerOrDefenderIcons { get; set; }` |
| `IsAttacker` | `public bool IsAttacker { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `PlayersText` | `public string PlayersText { get; set; }` |
| `CultureId` | `public string CultureId { get; set; }` |
| `RoundsWon` | `public int RoundsWon { get; set; }` |
| `TeamColor` | `public string TeamColor { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### UpdateRoundAttributes
`public void UpdateRoundAttributes()`

**Purpose:** Updates the state or data of `round attributes`.

### UpdateBotAttributes
`public void UpdateBotAttributes()`

**Purpose:** Updates the state or data of `bot attributes`.

### UpdatePlayerAttributes
`public void UpdatePlayerAttributes(MissionPeer player)`

**Purpose:** Updates the state or data of `player attributes`.

### RemovePlayer
`public void RemovePlayer(MissionPeer peer)`

**Purpose:** Removes `player` from the current collection or state.

### AddPlayer
`public void AddPlayer(MissionPeer peer)`

**Purpose:** Adds `player` to the current collection or state.

## Usage Example

```csharp
var value = new MissionScoreboardSideVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)