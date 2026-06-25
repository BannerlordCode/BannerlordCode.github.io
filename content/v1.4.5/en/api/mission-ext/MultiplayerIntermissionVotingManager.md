---
title: "MultiplayerIntermissionVotingManager"
description: "Auto-generated class reference for MultiplayerIntermissionVotingManager."
---
# MultiplayerIntermissionVotingManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerIntermissionVotingManager`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MultiplayerIntermissionVotingManager.cs`

## Overview

`MultiplayerIntermissionVotingManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MultiplayerIntermissionVotingManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MapVoteItems` | `public List<IntermissionVoteItem> MapVoteItems { get; }` |
| `CultureVoteItems` | `public List<IntermissionVoteItem> CultureVoteItems { get; }` |
| `UsableMaps` | `public List<CustomGameUsableMap> UsableMaps { get; }` |

## Key Methods

### MapItemAddedDelegate
`public delegate void MapItemAddedDelegate(string mapId)`

**Purpose:** **Purpose:** Executes the MapItemAddedDelegate logic.

```csharp
// Obtain an instance of MultiplayerIntermissionVotingManager from the subsystem API first
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
multiplayerIntermissionVotingManager.MapItemAddedDelegate("example");
```

### CultureItemAddedDelegate
`public delegate void CultureItemAddedDelegate(string cultureId)`

**Purpose:** **Purpose:** Executes the CultureItemAddedDelegate logic.

```csharp
// Obtain an instance of MultiplayerIntermissionVotingManager from the subsystem API first
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
multiplayerIntermissionVotingManager.CultureItemAddedDelegate("example");
```

### MapItemVoteCountChangedDelegate
`public delegate void MapItemVoteCountChangedDelegate(int mapItemIndex, int voteCount)`

**Purpose:** **Purpose:** Executes the MapItemVoteCountChangedDelegate logic.

```csharp
// Obtain an instance of MultiplayerIntermissionVotingManager from the subsystem API first
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
multiplayerIntermissionVotingManager.MapItemVoteCountChangedDelegate(0, 0);
```

### CultureItemVoteCountChangedDelegate
`public delegate void CultureItemVoteCountChangedDelegate(int cultureItemIndex, int voteCount)`

**Purpose:** **Purpose:** Executes the CultureItemVoteCountChangedDelegate logic.

```csharp
// Obtain an instance of MultiplayerIntermissionVotingManager from the subsystem API first
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
multiplayerIntermissionVotingManager.CultureItemVoteCountChangedDelegate(0, 0);
```

### AddMapItem
`public void AddMapItem(string mapID)`

**Purpose:** **Purpose:** Adds map item to the current collection or state.

```csharp
// Obtain an instance of MultiplayerIntermissionVotingManager from the subsystem API first
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
multiplayerIntermissionVotingManager.AddMapItem("example");
```

### AddUsableMap
`public void AddUsableMap(CustomGameUsableMap usableMap)`

**Purpose:** **Purpose:** Adds usable map to the current collection or state.

```csharp
// Obtain an instance of MultiplayerIntermissionVotingManager from the subsystem API first
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
multiplayerIntermissionVotingManager.AddUsableMap(usableMap);
```

### GetUsableMaps
`public List<string> GetUsableMaps(string gameType)`

**Purpose:** **Purpose:** Reads and returns the usable maps value held by the this instance.

```csharp
// Obtain an instance of MultiplayerIntermissionVotingManager from the subsystem API first
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
var result = multiplayerIntermissionVotingManager.GetUsableMaps("example");
```

### AddCultureItem
`public void AddCultureItem(string cultureID)`

**Purpose:** **Purpose:** Adds culture item to the current collection or state.

```csharp
// Obtain an instance of MultiplayerIntermissionVotingManager from the subsystem API first
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
multiplayerIntermissionVotingManager.AddCultureItem("example");
```

### AddVote
`public void AddVote(PlayerId voterID, string itemID, int voteCount)`

**Purpose:** **Purpose:** Adds vote to the current collection or state.

```csharp
// Obtain an instance of MultiplayerIntermissionVotingManager from the subsystem API first
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
multiplayerIntermissionVotingManager.AddVote(voterID, "example", 0);
```

### SetVotesOfMap
`public void SetVotesOfMap(int mapItemIndex, int voteCount)`

**Purpose:** **Purpose:** Assigns a new value to votes of map and updates the object's internal state.

```csharp
// Obtain an instance of MultiplayerIntermissionVotingManager from the subsystem API first
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
multiplayerIntermissionVotingManager.SetVotesOfMap(0, 0);
```

### SetVotesOfCulture
`public void SetVotesOfCulture(int cultureItemIndex, int voteCount)`

**Purpose:** **Purpose:** Assigns a new value to votes of culture and updates the object's internal state.

```csharp
// Obtain an instance of MultiplayerIntermissionVotingManager from the subsystem API first
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
multiplayerIntermissionVotingManager.SetVotesOfCulture(0, 0);
```

### ClearVotes
`public void ClearVotes()`

**Purpose:** **Purpose:** Removes all votes from the this instance.

```csharp
// Obtain an instance of MultiplayerIntermissionVotingManager from the subsystem API first
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
multiplayerIntermissionVotingManager.ClearVotes();
```

### ClearItems
`public void ClearItems()`

**Purpose:** **Purpose:** Removes all items from the this instance.

```csharp
// Obtain an instance of MultiplayerIntermissionVotingManager from the subsystem API first
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
multiplayerIntermissionVotingManager.ClearItems();
```

### IsCultureItem
`public bool IsCultureItem(string itemID)`

**Purpose:** **Purpose:** Determines whether the this instance is in the culture item state or condition.

```csharp
// Obtain an instance of MultiplayerIntermissionVotingManager from the subsystem API first
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
var result = multiplayerIntermissionVotingManager.IsCultureItem("example");
```

### IsMapItem
`public bool IsMapItem(string itemID)`

**Purpose:** **Purpose:** Determines whether the this instance is in the map item state or condition.

```csharp
// Obtain an instance of MultiplayerIntermissionVotingManager from the subsystem API first
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
var result = multiplayerIntermissionVotingManager.IsMapItem("example");
```

### HandlePlayerDisconnect
`public void HandlePlayerDisconnect(PlayerId playerID)`

**Purpose:** **Purpose:** Executes the response logic associated with player disconnect.

```csharp
// Obtain an instance of MultiplayerIntermissionVotingManager from the subsystem API first
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
multiplayerIntermissionVotingManager.HandlePlayerDisconnect(playerID);
```

### SelectRandomCultures
`public void SelectRandomCultures(MultiplayerOptions.MultiplayerOptionsAccessMode accessMode)`

**Purpose:** **Purpose:** Executes the SelectRandomCultures logic.

```csharp
// Obtain an instance of MultiplayerIntermissionVotingManager from the subsystem API first
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
multiplayerIntermissionVotingManager.SelectRandomCultures(accessMode);
```

### IsPeerVotedForItem
`public bool IsPeerVotedForItem(NetworkCommunicator peer, string itemID)`

**Purpose:** **Purpose:** Determines whether the this instance is in the peer voted for item state or condition.

```csharp
// Obtain an instance of MultiplayerIntermissionVotingManager from the subsystem API first
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
var result = multiplayerIntermissionVotingManager.IsPeerVotedForItem(peer, "example");
```

### SortVotesAndPickBest
`public void SortVotesAndPickBest()`

**Purpose:** **Purpose:** Executes the SortVotesAndPickBest logic.

```csharp
// Obtain an instance of MultiplayerIntermissionVotingManager from the subsystem API first
MultiplayerIntermissionVotingManager multiplayerIntermissionVotingManager = ...;
multiplayerIntermissionVotingManager.SortVotesAndPickBest();
```

## Usage Example

```csharp
var manager = MultiplayerIntermissionVotingManager.Current;
```

## See Also

- [Area Index](../)