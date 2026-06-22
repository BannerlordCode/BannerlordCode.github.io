<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerLocalDataManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLocalDataManager

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLocalDataManager`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/MultiplayerLocalDataManager.cs`

## 概述

`MultiplayerLocalDataManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static MultiplayerLocalDataManager Instance { get; }` |
| `TauntSlotData` | `public TauntSlotDataContainer TauntSlotData { get; }` |
| `MatchHistory` | `public MatchHistoryDataContainer MatchHistory { get; }` |
| `FavoriteServers` | `public FavoriteServerDataContainer FavoriteServers { get; }` |

## 主要方法

### InitializeManager
```csharp
public static void InitializeManager()
```

### FinalizeManager
```csharp
public static void FinalizeManager()
```

### Tick
```csharp
public void Tick(float dt)
```

## 使用示例

```csharp
// MultiplayerLocalDataManager (Manager) 的典型用法
MultiplayerLocalDataManager.Current;
```

## 参见

- [完整类目录](../catalog)