<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerRoundController`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerRoundController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerRoundController : MissionNetwork, IRoundComponent, IMissionBehavior`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerRoundController.cs`

## 概述

`MultiplayerRoundController` 是一个任务控制器，驱动某个任务子系统（部署、高光、援兵等）。经 Mission.Current 或作为任务行为访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `RoundCount` | `public int RoundCount { get { return this._roundCount; }` |
| `RoundWinner` | `public BattleSideEnum RoundWinner { get { return this._roundWinner; }` |
| `RoundEndReason` | `public RoundEndReason RoundEndReason { get { return this._roundEndReason; }` |
| `RemainingRoundTime` | `public float RemainingRoundTime { get { return this._gameModeServer.TimerComponent.GetRemainingTime(false); }` |
| `IsRoundInProgress` | `public bool IsRoundInProgress { get { return this.CurrentRoundState == MultiplayerRoundState.InProgress; }` |

## 主要方法

### EnableEquipmentUpdate
```csharp
public void EnableEquipmentUpdate()
```

### AfterStart
```csharp
public override void AfterStart()
```

### OnRemoveBehavior
```csharp
public override void OnRemoveBehavior()
```

### OnPreDisplayMissionTick
```csharp
public override void OnPreDisplayMissionTick(float dt)
```

### HandleClientEventCultureSelect
```csharp
public bool HandleClientEventCultureSelect(NetworkCommunicator peer, CultureVoteClient message)
```

## 使用示例

```csharp
// MultiplayerRoundController (Controller) 的典型用法
Mission.Current.GetMissionBehavior<MultiplayerRoundController>();
```

## 参见

- [完整类目录](../catalog)