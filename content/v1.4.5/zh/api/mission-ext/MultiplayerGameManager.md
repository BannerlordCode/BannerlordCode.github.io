---
title: "MultiplayerGameManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerGameManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerGameManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerGameManager : MBGameManager`
**Base:** `MBGameManager`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MultiplayerGameManager.cs`

## 概述

`MultiplayerGameManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `MultiplayerGameManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnLoadFinished
`public override void OnLoadFinished()`

**用途 / Purpose:** 当 `load finished` 事件触发时调用此方法。

### OnAfterCampaignStart
`public override void OnAfterCampaignStart(Game game)`

**用途 / Purpose:** 当 `after campaign start` 事件触发时调用此方法。

### OnNewCampaignStart
`public override void OnNewCampaignStart(Game game, object starterObject)`

**用途 / Purpose:** 当 `new campaign start` 事件触发时调用此方法。

### OnSessionInvitationAccepted
`public override void OnSessionInvitationAccepted(SessionInvitationType sessionInvitationType)`

**用途 / Purpose:** 当 `session invitation accepted` 事件触发时调用此方法。

### OnPlatformRequestedMultiplayer
`public override void OnPlatformRequestedMultiplayer()`

**用途 / Purpose:** 当 `platform requested multiplayer` 事件触发时调用此方法。

## 使用示例

```csharp
var manager = MultiplayerGameManager.Current;
```

## 参见

- [完整类目录](../catalog)