---
title: "MultiplayerReportPlayerManager"
description: "MultiplayerReportPlayerManager 的自动生成类参考。"
---
# MultiplayerReportPlayerManager

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MultiplayerReportPlayerManager`
**Base:** 无
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/MultiplayerReportPlayerManager.cs`

## 概述

`MultiplayerReportPlayerManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `MultiplayerReportPlayerManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### RequestReportPlayer
`public static void RequestReportPlayer(string gameId, PlayerId playerId, string playerName, bool isRequestedFromMission)`

**用途 / Purpose:** 调用 RequestReportPlayer 对应的操作。

```csharp
// 静态调用，不需要实例
MultiplayerReportPlayerManager.RequestReportPlayer("example", playerId, "example", false);
```

### OnPlayerReported
`public static void OnPlayerReported(PlayerId playerId)`

**用途 / Purpose:** 在 player reported 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
MultiplayerReportPlayerManager.OnPlayerReported(playerId);
```

### IsPlayerReportedOverLimit
`public static bool IsPlayerReportedOverLimit(PlayerId player)`

**用途 / Purpose:** 判断当前对象是否处于 player reported over limit 状态或条件。

```csharp
// 静态调用，不需要实例
MultiplayerReportPlayerManager.IsPlayerReportedOverLimit(player);
```

## 使用示例

```csharp
var manager = MultiplayerReportPlayerManager.Current;
```

## 参见

- [本区域目录](../)