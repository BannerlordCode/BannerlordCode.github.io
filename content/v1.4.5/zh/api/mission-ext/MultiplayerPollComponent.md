---
title: "MultiplayerPollComponent"
description: "MultiplayerPollComponent 的自动生成类参考。"
---
# MultiplayerPollComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPollComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerPollComponent.cs`

## 概述

`MultiplayerPollComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `MultiplayerPollComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `PollType` | `public MultiplayerPollComponent.MultiplayerPoll.Type PollType { get; }` |
| `IsOpen` | `public bool IsOpen { get; }` |
| `ParticipantsToVote` | `public List<NetworkCommunicator> ParticipantsToVote { get; }` |
| `TargetPeer` | `public NetworkCommunicator TargetPeer { get; }` |
| `TargetPeer` | `public NetworkCommunicator TargetPeer { get; }` |
| `GameType` | `public string GameType { get; }` |
| `MapName` | `public string MapName { get; }` |

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerPollComponent 实例
MultiplayerPollComponent multiplayerPollComponent = ...;
multiplayerPollComponent.OnBehaviorInitialize();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerPollComponent 实例
MultiplayerPollComponent multiplayerPollComponent = ...;
multiplayerPollComponent.OnMissionTick(0);
```

### Vote
`public void Vote(bool accepted)`

**用途 / Purpose:** 调用 Vote 对应的操作。

```csharp
// 先通过子系统 API 拿到 MultiplayerPollComponent 实例
MultiplayerPollComponent multiplayerPollComponent = ...;
multiplayerPollComponent.Vote(false);
```

### RequestKickPlayerPoll
`public void RequestKickPlayerPoll(NetworkCommunicator peer, bool banPlayer)`

**用途 / Purpose:** 调用 RequestKickPlayerPoll 对应的操作。

```csharp
// 先通过子系统 API 拿到 MultiplayerPollComponent 实例
MultiplayerPollComponent multiplayerPollComponent = ...;
multiplayerPollComponent.RequestKickPlayerPoll(peer, false);
```

### IsCancelled
`public virtual bool IsCancelled()`

**用途 / Purpose:** 判断当前对象是否处于 cancelled 状态或条件。

```csharp
// 先通过子系统 API 拿到 MultiplayerPollComponent 实例
MultiplayerPollComponent multiplayerPollComponent = ...;
var result = multiplayerPollComponent.IsCancelled();
```

### GetPollProgressReceivers
`public virtual List<NetworkCommunicator> GetPollProgressReceivers()`

**用途 / Purpose:** 读取并返回当前对象中 poll progress receivers 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerPollComponent 实例
MultiplayerPollComponent multiplayerPollComponent = ...;
var result = multiplayerPollComponent.GetPollProgressReceivers();
```

### Tick
`public void Tick()`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 MultiplayerPollComponent 实例
MultiplayerPollComponent multiplayerPollComponent = ...;
multiplayerPollComponent.Tick();
```

### Close
`public void Close()`

**用途 / Purpose:** 关闭当前对象代表的资源或界面。

```csharp
// 先通过子系统 API 拿到 MultiplayerPollComponent 实例
MultiplayerPollComponent multiplayerPollComponent = ...;
multiplayerPollComponent.Close();
```

### Cancel
`public void Cancel()`

**用途 / Purpose:** 检查当前对象是否满足 cel 的前置条件。

```csharp
// 先通过子系统 API 拿到 MultiplayerPollComponent 实例
MultiplayerPollComponent multiplayerPollComponent = ...;
multiplayerPollComponent.Cancel();
```

### ApplyVote
`public bool ApplyVote(NetworkCommunicator peer, bool accepted)`

**用途 / Purpose:** 将 vote 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 MultiplayerPollComponent 实例
MultiplayerPollComponent multiplayerPollComponent = ...;
var result = multiplayerPollComponent.ApplyVote(peer, false);
```

### GotEnoughAcceptVotesToEnd
`public bool GotEnoughAcceptVotesToEnd()`

**用途 / Purpose:** 调用 GotEnoughAcceptVotesToEnd 对应的操作。

```csharp
// 先通过子系统 API 拿到 MultiplayerPollComponent 实例
MultiplayerPollComponent multiplayerPollComponent = ...;
var result = multiplayerPollComponent.GotEnoughAcceptVotesToEnd();
```

### IsCancelled
`public override bool IsCancelled()`

**用途 / Purpose:** 判断当前对象是否处于 cancelled 状态或条件。

```csharp
// 先通过子系统 API 拿到 MultiplayerPollComponent 实例
MultiplayerPollComponent multiplayerPollComponent = ...;
var result = multiplayerPollComponent.IsCancelled();
```

### GetPollProgressReceivers
`public override List<NetworkCommunicator> GetPollProgressReceivers()`

**用途 / Purpose:** 读取并返回当前对象中 poll progress receivers 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerPollComponent 实例
MultiplayerPollComponent multiplayerPollComponent = ...;
var result = multiplayerPollComponent.GetPollProgressReceivers();
```

## 使用示例

```csharp
var component = agent.GetComponent<MultiplayerPollComponent>();
```

## 参见

- [本区域目录](../)