<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerTeamSelectComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerTeamSelectComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerTeamSelectComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MultiplayerTeamSelectComponent.cs`

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

**用途 / Purpose:** 当 `selecting team delegate` 事件触发时调用此方法。

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 当 `remove behavior` 事件触发时调用此方法。

### SelectTeam
`public void SelectTeam()`

**用途 / Purpose:** 处理 `select team` 相关逻辑。

### UpdateTeams
`public void UpdateTeams(NetworkCommunicator peer, Team oldTeam, Team newTeam)`

**用途 / Purpose:** 更新 `teams` 的状态或数据。

### GetDisabledTeams
`public List<Team> GetDisabledTeams()`

**用途 / Purpose:** 获取 `disabled teams` 的当前值。

### ChangeTeamServer
`public void ChangeTeamServer(NetworkCommunicator networkPeer, Team team)`

**用途 / Purpose:** 处理 `change team server` 相关逻辑。

### ChangeTeam
`public void ChangeTeam(Team team)`

**用途 / Purpose:** 处理 `change team` 相关逻辑。

### GetPlayerCountForTeam
`public int GetPlayerCountForTeam(Team team)`

**用途 / Purpose:** 获取 `player count for team` 的当前值。

### GetFriendsForTeam
`public IEnumerable<VirtualPlayer> GetFriendsForTeam(Team team)`

**用途 / Purpose:** 获取 `friends for team` 的当前值。

### BalanceTeams
`public void BalanceTeams()`

**用途 / Purpose:** 处理 `balance teams` 相关逻辑。

### AutoAssignTeam
`public void AutoAssignTeam(NetworkCommunicator peer)`

**用途 / Purpose:** 处理 `auto assign team` 相关逻辑。

## 使用示例

```csharp
var component = agent.GetComponent<MultiplayerTeamSelectComponent>();
```

## 参见

- [完整类目录](../catalog)