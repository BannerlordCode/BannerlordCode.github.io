<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomGameBannedPlayerManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomGameBannedPlayerManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class CustomGameBannedPlayerManager`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/CustomGameBannedPlayerManager.cs`

## 概述

`CustomGameBannedPlayerManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerId` | `public PlayerId PlayerId { get; set; }` |
| `BanDueTime` | `public int BanDueTime { get; set; }` |

## 主要方法

### AddBannedPlayer
```csharp
public static void AddBannedPlayer(PlayerId playerId, int banDueTime)
```

### IsUserBanned
```csharp
public static bool IsUserBanned(PlayerId playerId)
```

## 使用示例

```csharp
// CustomGameBannedPlayerManager (Manager) 的典型用法
CustomGameBannedPlayerManager.Current;
```

## 参见

- [完整类目录](../catalog)