<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerPollComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### Vote
`public void Vote(bool accepted)`

**用途 / Purpose:** 处理 `vote` 相关逻辑。

### RequestKickPlayerPoll
`public void RequestKickPlayerPoll(NetworkCommunicator peer, bool banPlayer)`

**用途 / Purpose:** 处理 `request kick player poll` 相关逻辑。

### IsCancelled
`public virtual bool IsCancelled()`

**用途 / Purpose:** 处理 `is cancelled` 相关逻辑。

### GetPollProgressReceivers
`public virtual List<NetworkCommunicator> GetPollProgressReceivers()`

**用途 / Purpose:** 获取 `poll progress receivers` 的当前值。

### Tick
`public void Tick()`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### Close
`public void Close()`

**用途 / Purpose:** 处理 `close` 相关逻辑。

### Cancel
`public void Cancel()`

**用途 / Purpose:** 判断当前对象是否可以执行 `cel`。

### ApplyVote
`public bool ApplyVote(NetworkCommunicator peer, bool accepted)`

**用途 / Purpose:** 将 `vote` 应用到当前对象。

### GotEnoughAcceptVotesToEnd
`public bool GotEnoughAcceptVotesToEnd()`

**用途 / Purpose:** 处理 `got enough accept votes to end` 相关逻辑。

### IsCancelled
`public override bool IsCancelled()`

**用途 / Purpose:** 处理 `is cancelled` 相关逻辑。

### GetPollProgressReceivers
`public override List<NetworkCommunicator> GetPollProgressReceivers()`

**用途 / Purpose:** 获取 `poll progress receivers` 的当前值。

## 使用示例

```csharp
var component = agent.GetComponent<MultiplayerPollComponent>();
```

## 参见

- [完整类目录](../catalog)