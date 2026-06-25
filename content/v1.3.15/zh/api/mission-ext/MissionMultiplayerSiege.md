---
title: "MissionMultiplayerSiege"
description: "MissionMultiplayerSiege 的自动生成类参考。"
---
# MissionMultiplayerSiege

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerSiege : MissionMultiplayerGameModeBase, IAnalyticsFlagInfo, IMissionBehavior`
**Base:** `MissionMultiplayerGameModeBase`
**File:** `TaleWorlds.MountAndBlade/MissionMultiplayerSiege.cs`

## 概述

`MissionMultiplayerSiege` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsGameModeHidingAllAgentVisuals` | `public override bool IsGameModeHidingAllAgentVisuals { get; }` |
| `IsGameModeUsingOpposingTeams` | `public override bool IsGameModeUsingOpposingTeams { get; }` |
| `AllCapturePoints` | `public MBReadOnlyList<FlagCapturePoint> AllCapturePoints { get; }` |
| `Contribution` | `public float Contribution { get; }` |

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 「behavior initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerSiege 实例
MissionMultiplayerSiege missionMultiplayerSiege = ...;
missionMultiplayerSiege.OnBehaviorInitialize();
```

### GetMissionType
`public override MultiplayerGameType GetMissionType()`

**用途 / Purpose:** 读取并返回当前对象中 「mission type」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerSiege 实例
MissionMultiplayerSiege missionMultiplayerSiege = ...;
var result = missionMultiplayerSiege.GetMissionType();
```

### UseRoundController
`public override bool UseRoundController()`

**用途 / Purpose:** 处理与 「use round controller」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerSiege 实例
MissionMultiplayerSiege missionMultiplayerSiege = ...;
var result = missionMultiplayerSiege.UseRoundController();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 在 「start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerSiege 实例
MissionMultiplayerSiege missionMultiplayerSiege = ...;
missionMultiplayerSiege.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerSiege 实例
MissionMultiplayerSiege missionMultiplayerSiege = ...;
missionMultiplayerSiege.OnMissionTick(0);
```

### CheckForMatchEnd
`public override bool CheckForMatchEnd()`

**用途 / Purpose:** 检查「for match end」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerSiege 实例
MissionMultiplayerSiege missionMultiplayerSiege = ...;
var result = missionMultiplayerSiege.CheckForMatchEnd();
```

### GetWinnerTeam
`public override Team GetWinnerTeam()`

**用途 / Purpose:** 读取并返回当前对象中 「winner team」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerSiege 实例
MissionMultiplayerSiege missionMultiplayerSiege = ...;
var result = missionMultiplayerSiege.GetWinnerTeam();
```

### GetFlagOwnerTeam
`public Team GetFlagOwnerTeam(FlagCapturePoint flag)`

**用途 / Purpose:** 读取并返回当前对象中 「flag owner team」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerSiege 实例
MissionMultiplayerSiege missionMultiplayerSiege = ...;
var result = missionMultiplayerSiege.GetFlagOwnerTeam(flag);
```

### CheckForWarmupEnd
`public override bool CheckForWarmupEnd()`

**用途 / Purpose:** 检查「for warmup end」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerSiege 实例
MissionMultiplayerSiege missionMultiplayerSiege = ...;
var result = missionMultiplayerSiege.CheckForWarmupEnd();
```

### OnPeerChangedTeam
`public override void OnPeerChangedTeam(NetworkCommunicator peer, Team oldTeam, Team newTeam)`

**用途 / Purpose:** 在 「peer changed team」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerSiege 实例
MissionMultiplayerSiege missionMultiplayerSiege = ...;
missionMultiplayerSiege.OnPeerChangedTeam(peer, oldTeam, newTeam);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 在 「agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerSiege 实例
MissionMultiplayerSiege missionMultiplayerSiege = ...;
missionMultiplayerSiege.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 在 「remove behavior」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerSiege 实例
MissionMultiplayerSiege missionMultiplayerSiege = ...;
missionMultiplayerSiege.OnRemoveBehavior();
```

### OnClearScene
`public override void OnClearScene()`

**用途 / Purpose:** 在 「clear scene」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerSiege 实例
MissionMultiplayerSiege missionMultiplayerSiege = ...;
missionMultiplayerSiege.OnClearScene();
```

### RegisterObjective
`public bool RegisterObjective(GameEntity entity)`

**用途 / Purpose:** 将「objective」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerSiege 实例
MissionMultiplayerSiege missionMultiplayerSiege = ...;
var result = missionMultiplayerSiege.RegisterObjective(entity);
```

### AddContributionForObjective
`public void AddContributionForObjective(GameEntity objectiveEntity, MissionPeer contributorPeer, float contribution)`

**用途 / Purpose:** 将 「contribution for objective」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerSiege 实例
MissionMultiplayerSiege missionMultiplayerSiege = ...;
missionMultiplayerSiege.AddContributionForObjective(objectiveEntity, contributorPeer, 0);
```

### GetAllContributorsForSideAndClear
`public List<KeyValuePair<MissionPeer, float>> GetAllContributorsForSideAndClear(GameEntity objectiveEntity, BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 「all contributors for side and clear」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerSiege 实例
MissionMultiplayerSiege missionMultiplayerSiege = ...;
var result = missionMultiplayerSiege.GetAllContributorsForSideAndClear(objectiveEntity, side);
```

### IncreaseAmount
`public void IncreaseAmount(float deltaContribution)`

**用途 / Purpose:** 处理与 「increase amount」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerSiege 实例
MissionMultiplayerSiege missionMultiplayerSiege = ...;
missionMultiplayerSiege.IncreaseAmount(0);
```

### OnDestructableComponentDestroyedDelegate
`public delegate void OnDestructableComponentDestroyedDelegate(DestructableComponent destructableComponent, ScriptComponentBehavior attackerScriptComponentBehaviour, MissionPeer contributors)`

**用途 / Purpose:** 在 「destructable component destroyed delegate」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerSiege 实例
MissionMultiplayerSiege missionMultiplayerSiege = ...;
missionMultiplayerSiege.OnDestructableComponentDestroyedDelegate(destructableComponent, attackerScriptComponentBehaviour, contributors);
```

### OnObjectiveGoldGainedDelegate
`public delegate void OnObjectiveGoldGainedDelegate(MissionPeer peer, int goldGain)`

**用途 / Purpose:** 在 「objective gold gained delegate」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerSiege 实例
MissionMultiplayerSiege missionMultiplayerSiege = ...;
missionMultiplayerSiege.OnObjectiveGoldGainedDelegate(peer, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionMultiplayerSiege missionMultiplayerSiege = ...;
missionMultiplayerSiege.OnBehaviorInitialize();
```

## 参见

- [本区域目录](../)