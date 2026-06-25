---
title: "MultiplayerTeamSelectComponent"
description: "MultiplayerTeamSelectComponent 的自动生成类参考。"
---
# MultiplayerTeamSelectComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerTeamSelectComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MultiplayerTeamSelectComponent.cs`

## 概述

`MultiplayerTeamSelectComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `MultiplayerTeamSelectComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `TeamSelectionEnabled` | `public bool TeamSelectionEnabled { get; }` |

## 主要方法

### OnSelectingTeamDelegate
`public delegate void OnSelectingTeamDelegate(List<Team> disableTeams)`

**用途 / Purpose:** 在 「selecting team delegate」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerTeamSelectComponent 实例
MultiplayerTeamSelectComponent multiplayerTeamSelectComponent = ...;
multiplayerTeamSelectComponent.OnSelectingTeamDelegate(disableTeams);
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 「behavior initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerTeamSelectComponent 实例
MultiplayerTeamSelectComponent multiplayerTeamSelectComponent = ...;
multiplayerTeamSelectComponent.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 在 「start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerTeamSelectComponent 实例
MultiplayerTeamSelectComponent multiplayerTeamSelectComponent = ...;
multiplayerTeamSelectComponent.AfterStart();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 在 「remove behavior」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerTeamSelectComponent 实例
MultiplayerTeamSelectComponent multiplayerTeamSelectComponent = ...;
multiplayerTeamSelectComponent.OnRemoveBehavior();
```

### SelectTeam
`public void SelectTeam()`

**用途 / Purpose:** 处理与 「select team」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MultiplayerTeamSelectComponent 实例
MultiplayerTeamSelectComponent multiplayerTeamSelectComponent = ...;
multiplayerTeamSelectComponent.SelectTeam();
```

### UpdateTeams
`public void UpdateTeams(NetworkCommunicator peer, Team oldTeam, Team newTeam)`

**用途 / Purpose:** 重新计算并更新 「teams」 的最新表示。

```csharp
// 先通过子系统 API 拿到 MultiplayerTeamSelectComponent 实例
MultiplayerTeamSelectComponent multiplayerTeamSelectComponent = ...;
multiplayerTeamSelectComponent.UpdateTeams(peer, oldTeam, newTeam);
```

### GetDisabledTeams
`public List<Team> GetDisabledTeams()`

**用途 / Purpose:** 读取并返回当前对象中 「disabled teams」 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerTeamSelectComponent 实例
MultiplayerTeamSelectComponent multiplayerTeamSelectComponent = ...;
var result = multiplayerTeamSelectComponent.GetDisabledTeams();
```

### ChangeTeamServer
`public void ChangeTeamServer(NetworkCommunicator networkPeer, Team team)`

**用途 / Purpose:** 处理与 「change team server」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MultiplayerTeamSelectComponent 实例
MultiplayerTeamSelectComponent multiplayerTeamSelectComponent = ...;
multiplayerTeamSelectComponent.ChangeTeamServer(networkPeer, team);
```

### ChangeTeam
`public void ChangeTeam(Team team)`

**用途 / Purpose:** 处理与 「change team」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MultiplayerTeamSelectComponent 实例
MultiplayerTeamSelectComponent multiplayerTeamSelectComponent = ...;
multiplayerTeamSelectComponent.ChangeTeam(team);
```

### GetPlayerCountForTeam
`public int GetPlayerCountForTeam(Team team)`

**用途 / Purpose:** 读取并返回当前对象中 「player count for team」 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerTeamSelectComponent 实例
MultiplayerTeamSelectComponent multiplayerTeamSelectComponent = ...;
var result = multiplayerTeamSelectComponent.GetPlayerCountForTeam(team);
```

### GetFriendsForTeam
`public IEnumerable<VirtualPlayer> GetFriendsForTeam(Team team)`

**用途 / Purpose:** 读取并返回当前对象中 「friends for team」 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerTeamSelectComponent 实例
MultiplayerTeamSelectComponent multiplayerTeamSelectComponent = ...;
var result = multiplayerTeamSelectComponent.GetFriendsForTeam(team);
```

### BalanceTeams
`public void BalanceTeams()`

**用途 / Purpose:** 处理与 「balance teams」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MultiplayerTeamSelectComponent 实例
MultiplayerTeamSelectComponent multiplayerTeamSelectComponent = ...;
multiplayerTeamSelectComponent.BalanceTeams();
```

### AutoAssignTeam
`public void AutoAssignTeam(NetworkCommunicator peer)`

**用途 / Purpose:** 处理与 「auto assign team」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MultiplayerTeamSelectComponent 实例
MultiplayerTeamSelectComponent multiplayerTeamSelectComponent = ...;
multiplayerTeamSelectComponent.AutoAssignTeam(peer);
```

## 使用示例

```csharp
var component = agent.GetComponent<MultiplayerTeamSelectComponent>();
```

## 参见

- [本区域目录](../)