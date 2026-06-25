---
title: "MultiplayerGameManager"
description: "MultiplayerGameManager 的自动生成类参考。"
---
# MultiplayerGameManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerGameManager : MBGameManager`
**Base:** `MBGameManager`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MultiplayerGameManager.cs`

## 概述

`MultiplayerGameManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `MultiplayerGameManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnLoadFinished
`public override void OnLoadFinished()`

**用途 / Purpose:** 在 load finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerGameManager 实例
MultiplayerGameManager multiplayerGameManager = ...;
multiplayerGameManager.OnLoadFinished();
```

### OnAfterCampaignStart
`public override void OnAfterCampaignStart(Game game)`

**用途 / Purpose:** 在 after campaign start 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerGameManager 实例
MultiplayerGameManager multiplayerGameManager = ...;
multiplayerGameManager.OnAfterCampaignStart(game);
```

### OnNewCampaignStart
`public override void OnNewCampaignStart(Game game, object starterObject)`

**用途 / Purpose:** 在 new campaign start 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerGameManager 实例
MultiplayerGameManager multiplayerGameManager = ...;
multiplayerGameManager.OnNewCampaignStart(game, starterObject);
```

### OnSessionInvitationAccepted
`public override void OnSessionInvitationAccepted(SessionInvitationType sessionInvitationType)`

**用途 / Purpose:** 在 session invitation accepted 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerGameManager 实例
MultiplayerGameManager multiplayerGameManager = ...;
multiplayerGameManager.OnSessionInvitationAccepted(sessionInvitationType);
```

### OnPlatformRequestedMultiplayer
`public override void OnPlatformRequestedMultiplayer()`

**用途 / Purpose:** 在 platform requested multiplayer 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerGameManager 实例
MultiplayerGameManager multiplayerGameManager = ...;
multiplayerGameManager.OnPlatformRequestedMultiplayer();
```

## 使用示例

```csharp
var manager = MultiplayerGameManager.Current;
```

## 参见

- [本区域目录](../)