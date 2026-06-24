<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomGameBannedPlayerManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomGameBannedPlayerManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class CustomGameBannedPlayerManager`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/CustomGameBannedPlayerManager.cs`

## 概述

`CustomGameBannedPlayerManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `CustomGameBannedPlayerManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerId` | `public PlayerId PlayerId { get; set; }` |
| `BanDueTime` | `public int BanDueTime { get; set; }` |

## 主要方法

### AddBannedPlayer
`public static void AddBannedPlayer(PlayerId playerId, int banDueTime)`

**用途 / Purpose:** 向当前集合/状态中添加 `banned player`。

### IsUserBanned
`public static bool IsUserBanned(PlayerId playerId)`

**用途 / Purpose:** 处理 `is user banned` 相关逻辑。

## 使用示例

```csharp
var manager = CustomGameBannedPlayerManager.Current;
```

## 参见

- [完整类目录](../catalog)