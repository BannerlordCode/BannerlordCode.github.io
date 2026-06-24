<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerIntermissionVotingManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerIntermissionVotingManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerIntermissionVotingManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MultiplayerIntermissionVotingManager.cs`

## Overview

`MultiplayerIntermissionVotingManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MultiplayerIntermissionVotingManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static MultiplayerIntermissionVotingManager Instance { get; }` |
| `MapVoteItems` | `public List<IntermissionVoteItem> MapVoteItems { get; }` |
| `CultureVoteItems` | `public List<IntermissionVoteItem> CultureVoteItems { get; }` |
| `UsableMaps` | `public List<CustomGameUsableMap> UsableMaps { get; }` |

## Key Methods

### AddMapItem
`public void AddMapItem(string mapID)`

**Purpose:** Adds `map item` to the current collection or state.

### AddUsableMap
`public void AddUsableMap(CustomGameUsableMap usableMap)`

**Purpose:** Adds `usable map` to the current collection or state.

### GetUsableMaps
`public List<string> GetUsableMaps(string gameType)`

**Purpose:** Gets the current value of `usable maps`.

### AddCultureItem
`public void AddCultureItem(string cultureID)`

**Purpose:** Adds `culture item` to the current collection or state.

### AddVote
`public void AddVote(PlayerId voterID, string itemID, int voteCount)`

**Purpose:** Adds `vote` to the current collection or state.

### SetVotesOfMap
`public void SetVotesOfMap(int mapItemIndex, int voteCount)`

**Purpose:** Sets the value or state of `votes of map`.

### SetVotesOfCulture
`public void SetVotesOfCulture(int cultureItemIndex, int voteCount)`

**Purpose:** Sets the value or state of `votes of culture`.

### ClearVotes
`public void ClearVotes()`

**Purpose:** Handles logic related to `clear votes`.

### ClearItems
`public void ClearItems()`

**Purpose:** Handles logic related to `clear items`.

### IsCultureItem
`public bool IsCultureItem(string itemID)`

**Purpose:** Handles logic related to `is culture item`.

### IsMapItem
`public bool IsMapItem(string itemID)`

**Purpose:** Handles logic related to `is map item`.

### HandlePlayerDisconnect
`public void HandlePlayerDisconnect(PlayerId playerID)`

**Purpose:** Handles the `player disconnect` event or callback.

### SelectRandomCultures
`public void SelectRandomCultures(MultiplayerOptions.MultiplayerOptionsAccessMode accessMode)`

**Purpose:** Handles logic related to `select random cultures`.

### IsPeerVotedForItem
`public bool IsPeerVotedForItem(NetworkCommunicator peer, string itemID)`

**Purpose:** Handles logic related to `is peer voted for item`.

### SortVotesAndPickBest
`public void SortVotesAndPickBest()`

**Purpose:** Handles logic related to `sort votes and pick best`.

### MapItemAddedDelegate
`public delegate void MapItemAddedDelegate(string mapId)`

**Purpose:** Handles logic related to `map item added delegate`.

### CultureItemAddedDelegate
`public delegate void CultureItemAddedDelegate(string cultureId)`

**Purpose:** Handles logic related to `culture item added delegate`.

### MapItemVoteCountChangedDelegate
`public delegate void MapItemVoteCountChangedDelegate(int mapItemIndex, int voteCount)`

**Purpose:** Handles logic related to `map item vote count changed delegate`.

### CultureItemVoteCountChangedDelegate
`public delegate void CultureItemVoteCountChangedDelegate(int cultureItemIndex, int voteCount)`

**Purpose:** Handles logic related to `culture item vote count changed delegate`.

## Usage Example

```csharp
var manager = MultiplayerIntermissionVotingManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)