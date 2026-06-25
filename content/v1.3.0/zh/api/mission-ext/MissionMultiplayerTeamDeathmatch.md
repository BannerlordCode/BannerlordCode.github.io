---
title: "MissionMultiplayerTeamDeathmatch"
description: "MissionMultiplayerTeamDeathmatch 的自动生成类参考。"
---
# MissionMultiplayerTeamDeathmatch

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerTeamDeathmatch : MissionMultiplayerGameModeBase`
**Base:** `MissionMultiplayerGameModeBase`
**File:** `TaleWorlds.MountAndBlade/MissionMultiplayerTeamDeathmatch.cs`

## 概述

`MissionMultiplayerTeamDeathmatch` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsGameModeHidingAllAgentVisuals` | `public override bool IsGameModeHidingAllAgentVisuals { get; }` |
| `IsGameModeUsingOpposingTeams` | `public override bool IsGameModeUsingOpposingTeams { get; }` |

## 主要方法

### GetMissionType
`public override MultiplayerGameType GetMissionType()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 mission type 的结果。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerTeamDeathmatch 实例
MissionMultiplayerTeamDeathmatch missionMultiplayerTeamDeathmatch = ...;
var result = missionMultiplayerTeamDeathmatch.GetMissionType();
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** **用途 / Purpose:** 在 behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerTeamDeathmatch 实例
MissionMultiplayerTeamDeathmatch missionMultiplayerTeamDeathmatch = ...;
missionMultiplayerTeamDeathmatch.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** **用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerTeamDeathmatch 实例
MissionMultiplayerTeamDeathmatch missionMultiplayerTeamDeathmatch = ...;
missionMultiplayerTeamDeathmatch.AfterStart();
```

### OnPeerChangedTeam
`public override void OnPeerChangedTeam(NetworkCommunicator peer, Team oldTeam, Team newTeam)`

**用途 / Purpose:** **用途 / Purpose:** 在 peer changed team 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerTeamDeathmatch 实例
MissionMultiplayerTeamDeathmatch missionMultiplayerTeamDeathmatch = ...;
missionMultiplayerTeamDeathmatch.OnPeerChangedTeam(peer, oldTeam, newTeam);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** **用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerTeamDeathmatch 实例
MissionMultiplayerTeamDeathmatch missionMultiplayerTeamDeathmatch = ...;
missionMultiplayerTeamDeathmatch.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### CheckForMatchEnd
`public override bool CheckForMatchEnd()`

**用途 / Purpose:** **用途 / Purpose:** 检查for match end在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerTeamDeathmatch 实例
MissionMultiplayerTeamDeathmatch missionMultiplayerTeamDeathmatch = ...;
var result = missionMultiplayerTeamDeathmatch.CheckForMatchEnd();
```

### GetWinnerTeam
`public override Team GetWinnerTeam()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 winner team 的结果。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerTeamDeathmatch 实例
MissionMultiplayerTeamDeathmatch missionMultiplayerTeamDeathmatch = ...;
var result = missionMultiplayerTeamDeathmatch.GetWinnerTeam();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionMultiplayerTeamDeathmatch missionMultiplayerTeamDeathmatch = ...;
missionMultiplayerTeamDeathmatch.GetMissionType();
```

## 参见

- [本区域目录](../)