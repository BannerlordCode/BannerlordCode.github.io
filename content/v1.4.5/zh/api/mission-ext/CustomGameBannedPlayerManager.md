---
title: "CustomGameBannedPlayerManager"
description: "CustomGameBannedPlayerManager 的自动生成类参考。"
---
# CustomGameBannedPlayerManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class CustomGameBannedPlayerManager`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/CustomGameBannedPlayerManager.cs`

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

**用途 / Purpose:** 将 「banned player」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
CustomGameBannedPlayerManager.AddBannedPlayer(playerId, 0);
```

### IsUserBanned
`public static bool IsUserBanned(PlayerId playerId)`

**用途 / Purpose:** 判断当前对象是否处于 「user banned」 状态或条件。

```csharp
// 静态调用，不需要实例
CustomGameBannedPlayerManager.IsUserBanned(playerId);
```

## 使用示例

```csharp
var manager = CustomGameBannedPlayerManager.Current;
```

## 参见

- [本区域目录](../)