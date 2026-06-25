---
title: "MultiplayerRoundController"
description: "MultiplayerRoundController 的自动生成类参考。"
---
# MultiplayerRoundController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerRoundController : MissionNetwork, IRoundComponent, IMissionBehavior`
**Base:** `MissionNetwork`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MultiplayerRoundController.cs`

## 概述

`MultiplayerRoundController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `MultiplayerRoundController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `RoundCount` | `public int RoundCount { get; set; }` |
| `RoundWinner` | `public BattleSideEnum RoundWinner { get; set; }` |
| `RoundEndReason` | `public RoundEndReason RoundEndReason { get; set; }` |
| `IsMatchEnding` | `public bool IsMatchEnding { get; }` |
| `LastRoundEndRemainingTime` | `public float LastRoundEndRemainingTime { get; }` |
| `CurrentRoundState` | `public MultiplayerRoundState CurrentRoundState { get; }` |

## 主要方法

### EnableEquipmentUpdate
`public void EnableEquipmentUpdate()`

**用途 / Purpose:** 调用 EnableEquipmentUpdate 对应的操作。

```csharp
// 先通过子系统 API 拿到 MultiplayerRoundController 实例
MultiplayerRoundController multiplayerRoundController = ...;
multiplayerRoundController.EnableEquipmentUpdate();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 MultiplayerRoundController 实例
MultiplayerRoundController multiplayerRoundController = ...;
multiplayerRoundController.AfterStart();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 在 remove behavior 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerRoundController 实例
MultiplayerRoundController multiplayerRoundController = ...;
multiplayerRoundController.OnRemoveBehavior();
```

### OnPreDisplayMissionTick
`public override void OnPreDisplayMissionTick(float dt)`

**用途 / Purpose:** 在 pre display mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerRoundController 实例
MultiplayerRoundController multiplayerRoundController = ...;
multiplayerRoundController.OnPreDisplayMissionTick(0);
```

### HandleClientEventCultureSelect
`public bool HandleClientEventCultureSelect(NetworkCommunicator peer, CultureVoteClient message)`

**用途 / Purpose:** 响应 client event culture select 事件，执行对应的处理逻辑。

```csharp
// 先通过子系统 API 拿到 MultiplayerRoundController 实例
MultiplayerRoundController multiplayerRoundController = ...;
var result = multiplayerRoundController.HandleClientEventCultureSelect(peer, message);
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<MultiplayerRoundController>();
```

## 参见

- [本区域目录](../)