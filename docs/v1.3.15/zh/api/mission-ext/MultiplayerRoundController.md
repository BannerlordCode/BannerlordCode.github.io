<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerRoundController`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerRoundController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerRoundController : MissionNetwork, IRoundComponent, IMissionBehavior`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerRoundController.cs`

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
| `RemainingRoundTime` | `public float RemainingRoundTime { get; }` |
| `CurrentRoundState` | `public MultiplayerRoundState CurrentRoundState { get; }` |
| `IsRoundInProgress` | `public bool IsRoundInProgress { get; }` |

## 主要方法

### EnableEquipmentUpdate
`public void EnableEquipmentUpdate()`

**用途 / Purpose:** 处理 `enable equipment update` 相关逻辑。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 当 `remove behavior` 事件触发时调用此方法。

### OnPreDisplayMissionTick
`public override void OnPreDisplayMissionTick(float dt)`

**用途 / Purpose:** 当 `pre display mission tick` 事件触发时调用此方法。

### HandleClientEventCultureSelect
`public bool HandleClientEventCultureSelect(NetworkCommunicator peer, CultureVoteClient message)`

**用途 / Purpose:** 处理 `client event culture select` 事件或回调。

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<MultiplayerRoundController>();
```

## 参见

- [完整类目录](../catalog)