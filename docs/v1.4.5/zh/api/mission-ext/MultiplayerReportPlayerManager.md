<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerReportPlayerManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerReportPlayerManager

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MultiplayerReportPlayerManager`
**Base:** 无
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/MultiplayerReportPlayerManager.cs`

## 概述

`MultiplayerReportPlayerManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `MultiplayerReportPlayerManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### RequestReportPlayer
`public static void RequestReportPlayer(string gameId, PlayerId playerId, string playerName, bool isRequestedFromMission)`

**用途 / Purpose:** 处理 `request report player` 相关逻辑。

### OnPlayerReported
`public static void OnPlayerReported(PlayerId playerId)`

**用途 / Purpose:** 当 `player reported` 事件触发时调用此方法。

### IsPlayerReportedOverLimit
`public static bool IsPlayerReportedOverLimit(PlayerId player)`

**用途 / Purpose:** 处理 `is player reported over limit` 相关逻辑。

## 使用示例

```csharp
var manager = MultiplayerReportPlayerManager.Current;
```

## 参见

- [完整类目录](../catalog)