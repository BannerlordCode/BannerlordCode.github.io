<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerIntermissionVotingManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerIntermissionVotingManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerIntermissionVotingManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MultiplayerIntermissionVotingManager.cs`

## Overview

`MultiplayerIntermissionVotingManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Methods

### AddMapItem
```csharp
public void AddMapItem(string mapID)
```

### AddUsableMap
```csharp
public void AddUsableMap(CustomGameUsableMap usableMap)
```

### GetUsableMaps
```csharp
public List<string> GetUsableMaps(string gameType)
```

### AddCultureItem
```csharp
public void AddCultureItem(string cultureID)
```

### AddVote
```csharp
public void AddVote(PlayerId voterID, string itemID, int voteCount)
```

### SetVotesOfMap
```csharp
public void SetVotesOfMap(int mapItemIndex, int voteCount)
```

### SetVotesOfCulture
```csharp
public void SetVotesOfCulture(int cultureItemIndex, int voteCount)
```

### ClearVotes
```csharp
public void ClearVotes()
```

### ClearItems
```csharp
public void ClearItems()
```

### IsCultureItem
```csharp
public bool IsCultureItem(string itemID)
```

### IsMapItem
```csharp
public bool IsMapItem(string itemID)
```

### HandlePlayerDisconnect
```csharp
public void HandlePlayerDisconnect(PlayerId playerID)
```

### SelectRandomCultures
```csharp
public void SelectRandomCultures(MultiplayerOptions.MultiplayerOptionsAccessMode accessMode)
```

### IsPeerVotedForItem
```csharp
public bool IsPeerVotedForItem(NetworkCommunicator peer, string itemID)
```

### SortVotesAndPickBest
```csharp
public void SortVotesAndPickBest()
```

### MapItemAddedDelegate
```csharp
public delegate void MapItemAddedDelegate(string mapId)
```

### CultureItemAddedDelegate
```csharp
public delegate void CultureItemAddedDelegate(string cultureId)
```

### MapItemVoteCountChangedDelegate
```csharp
public delegate void MapItemVoteCountChangedDelegate(int mapItemIndex, int voteCount)
```

### CultureItemVoteCountChangedDelegate
```csharp
public delegate void CultureItemVoteCountChangedDelegate(int cultureItemIndex, int voteCount)
```

## Usage Example

```csharp
// Typical usage of MultiplayerIntermissionVotingManager (Manager)
MultiplayerIntermissionVotingManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)