<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerPollComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerPollComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPollComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerPollComponent.cs`

## 概述

`MultiplayerPollComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<MultiplayerPollComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要属性

| Name | Signature |
|------|-----------|
| `PollType` | `public MultiplayerPollComponent.MultiplayerPoll.Type PollType { get; }` |
| `ParticipantsToVote` | `public List<NetworkCommunicator> ParticipantsToVote { get { return this._participantsToVote; }` |
| `TargetPeer` | `public NetworkCommunicator TargetPeer { get; }` |
| `TargetPeer` | `public NetworkCommunicator TargetPeer { get; }` |
| `GameType` | `public string GameType { get; }` |
| `MapName` | `public string MapName { get; }` |

## 主要方法

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### OnMissionTick
```csharp
public override void OnMissionTick(float dt)
```

### Vote
```csharp
public void Vote(bool accepted)
```

### RequestKickPlayerPoll
```csharp
public void RequestKickPlayerPoll(NetworkCommunicator peer, bool banPlayer)
```

### IsCancelled
```csharp
public virtual bool IsCancelled()
```

### GetPollProgressReceivers
```csharp
public virtual List<NetworkCommunicator> GetPollProgressReceivers()
```

### Tick
```csharp
public void Tick()
```

### Close
```csharp
public void Close()
```

### Cancel
```csharp
public void Cancel()
```

### ApplyVote
```csharp
public bool ApplyVote(NetworkCommunicator peer, bool accepted)
```

### GotEnoughAcceptVotesToEnd
```csharp
public bool GotEnoughAcceptVotesToEnd()
```

### IsCancelled
```csharp
public override bool IsCancelled()
```

### GetPollProgressReceivers
```csharp
public override List<NetworkCommunicator> GetPollProgressReceivers()
```

## 使用示例

```csharp
// MultiplayerPollComponent (Component) 的典型用法
agent.GetComponent<MultiplayerPollComponent>();
```

## 参见

- [完整类目录](../catalog)