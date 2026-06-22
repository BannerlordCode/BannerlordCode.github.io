<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerIntermissionVotingManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerIntermissionVotingManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerIntermissionVotingManager`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MultiplayerIntermissionVotingManager.cs`

## 概述

`MultiplayerIntermissionVotingManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要方法

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

## 使用示例

```csharp
// MultiplayerIntermissionVotingManager (Manager) 的典型用法
MultiplayerIntermissionVotingManager.Current;
```

## 参见

- [完整类目录](../catalog)