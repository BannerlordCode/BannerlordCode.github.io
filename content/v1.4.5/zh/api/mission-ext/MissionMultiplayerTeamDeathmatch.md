---
title: "MissionMultiplayerTeamDeathmatch"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionMultiplayerTeamDeathmatch`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionMultiplayerTeamDeathmatch

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerTeamDeathmatch : MissionMultiplayerGameModeBase`
**Base:** `MissionMultiplayerGameModeBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionMultiplayerTeamDeathmatch.cs`

## 概述

`MissionMultiplayerTeamDeathmatch` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetMissionType
`public override MultiplayerGameType GetMissionType()`

**用途 / Purpose:** 获取 `mission type` 的当前值。

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnPeerChangedTeam
`public override void OnPeerChangedTeam(NetworkCommunicator peer, Team oldTeam, Team newTeam)`

**用途 / Purpose:** 当 `peer changed team` 事件触发时调用此方法。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### CheckForMatchEnd
`public override bool CheckForMatchEnd()`

**用途 / Purpose:** 处理 `check for match end` 相关逻辑。

### GetWinnerTeam
`public override Team GetWinnerTeam()`

**用途 / Purpose:** 获取 `winner team` 的当前值。

## 使用示例

```csharp
var value = new MissionMultiplayerTeamDeathmatch();
value.GetMissionType();
```

## 参见

- [完整类目录](../catalog)