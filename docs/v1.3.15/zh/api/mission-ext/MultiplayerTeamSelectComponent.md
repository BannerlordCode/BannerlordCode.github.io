<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerTeamSelectComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerTeamSelectComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerTeamSelectComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerTeamSelectComponent.cs`

## 概述

`MultiplayerTeamSelectComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<MultiplayerTeamSelectComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要方法

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### AfterStart
```csharp
public override void AfterStart()
```

### OnRemoveBehavior
```csharp
public override void OnRemoveBehavior()
```

### SelectTeam
```csharp
public void SelectTeam()
```

### UpdateTeams
```csharp
public void UpdateTeams(NetworkCommunicator peer, Team oldTeam, Team newTeam)
```

### GetDisabledTeams
```csharp
public List<Team> GetDisabledTeams()
```

### ChangeTeamServer
```csharp
public void ChangeTeamServer(NetworkCommunicator networkPeer, Team team)
```

### ChangeTeam
```csharp
public void ChangeTeam(Team team)
```

### GetPlayerCountForTeam
```csharp
public int GetPlayerCountForTeam(Team team)
```

### GetFriendsForTeam
```csharp
public IEnumerable<VirtualPlayer> GetFriendsForTeam(Team team)
```

### BalanceTeams
```csharp
public void BalanceTeams()
```

### AutoAssignTeam
```csharp
public void AutoAssignTeam(NetworkCommunicator peer)
```

### OnSelectingTeamDelegate
```csharp
public delegate void OnSelectingTeamDelegate(List<Team> disableTeams)
```

## 使用示例

```csharp
// MultiplayerTeamSelectComponent (Component) 的典型用法
agent.GetComponent<MultiplayerTeamSelectComponent>();
```

## 参见

- [完整类目录](../catalog)