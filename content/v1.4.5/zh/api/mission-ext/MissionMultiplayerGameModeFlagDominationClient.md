---
title: "MissionMultiplayerGameModeFlagDominationClient"
description: "MissionMultiplayerGameModeFlagDominationClient 的自动生成类参考。"
---
# MissionMultiplayerGameModeFlagDominationClient

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerGameModeFlagDominationClient : MissionMultiplayerGameModeBaseClient, ICommanderInfo, IMissionBehavior`
**Base:** `MissionMultiplayerGameModeBaseClient`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionMultiplayerGameModeFlagDominationClient.cs`

## 概述

`MissionMultiplayerGameModeFlagDominationClient` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AllCapturePoints` | `public IEnumerable<FlagCapturePoint> AllCapturePoints { get; }` |

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** **用途 / Purpose:** 在 behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeFlagDominationClient 实例
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
missionMultiplayerGameModeFlagDominationClient.OnBehaviorInitialize();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** **用途 / Purpose:** 在 remove behavior 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeFlagDominationClient 实例
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
missionMultiplayerGameModeFlagDominationClient.OnRemoveBehavior();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** **用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeFlagDominationClient 实例
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
missionMultiplayerGameModeFlagDominationClient.AfterStart();
```

### OnPreparationEnded
`public void OnPreparationEnded()`

**用途 / Purpose:** **用途 / Purpose:** 在 preparation ended 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeFlagDominationClient 实例
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
missionMultiplayerGameModeFlagDominationClient.OnPreparationEnded();
```

### GetMissionCameraLockMode
`public override SpectatorCameraTypes GetMissionCameraLockMode(bool lockedToMainPlayer)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 mission camera lock mode 的结果。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeFlagDominationClient 实例
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
var result = missionMultiplayerGameModeFlagDominationClient.GetMissionCameraLockMode(false);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** **用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeFlagDominationClient 实例
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
missionMultiplayerGameModeFlagDominationClient.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnClearScene
`public override void OnClearScene()`

**用途 / Purpose:** **用途 / Purpose:** 在 clear scene 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeFlagDominationClient 实例
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
missionMultiplayerGameModeFlagDominationClient.OnClearScene();
```

### GetFlagOwner
`public Team GetFlagOwner(FlagCapturePoint flag)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 flag owner 的结果。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeFlagDominationClient 实例
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
var result = missionMultiplayerGameModeFlagDominationClient.GetFlagOwner(flag);
```

### OnTeamPowerChanged
`public void OnTeamPowerChanged(BattleSideEnum teamSide, float power)`

**用途 / Purpose:** **用途 / Purpose:** 在 team power changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeFlagDominationClient 实例
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
missionMultiplayerGameModeFlagDominationClient.OnTeamPowerChanged(teamSide, 0);
```

### OnMoraleChanged
`public void OnMoraleChanged(float morale)`

**用途 / Purpose:** **用途 / Purpose:** 在 morale changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeFlagDominationClient 实例
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
missionMultiplayerGameModeFlagDominationClient.OnMoraleChanged(0);
```

### OnGoldAmountChangedForRepresentative
`public override void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative, int goldAmount)`

**用途 / Purpose:** **用途 / Purpose:** 在 gold amount changed for representative 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeFlagDominationClient 实例
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
missionMultiplayerGameModeFlagDominationClient.OnGoldAmountChangedForRepresentative(representative, 0);
```

### OnNumberOfFlagsChanged
`public void OnNumberOfFlagsChanged()`

**用途 / Purpose:** **用途 / Purpose:** 在 number of flags changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeFlagDominationClient 实例
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
missionMultiplayerGameModeFlagDominationClient.OnNumberOfFlagsChanged();
```

### OnBotsControlledChanged
`public void OnBotsControlledChanged(MissionPeer missionPeer, int botAliveCount, int botTotalCount)`

**用途 / Purpose:** **用途 / Purpose:** 在 bots controlled changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeFlagDominationClient 实例
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
missionMultiplayerGameModeFlagDominationClient.OnBotsControlledChanged(missionPeer, 0, 0);
```

### OnCapturePointOwnerChanged
`public void OnCapturePointOwnerChanged(FlagCapturePoint flagCapturePoint, Team ownerTeam)`

**用途 / Purpose:** **用途 / Purpose:** 在 capture point owner changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeFlagDominationClient 实例
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
missionMultiplayerGameModeFlagDominationClient.OnCapturePointOwnerChanged(flagCapturePoint, ownerTeam);
```

### OnRequestForfeitSpawn
`public void OnRequestForfeitSpawn()`

**用途 / Purpose:** **用途 / Purpose:** 在 request forfeit spawn 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeFlagDominationClient 实例
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
missionMultiplayerGameModeFlagDominationClient.OnRequestForfeitSpawn();
```

### GetCompassTargets
`public override List<CompassItemUpdateParams> GetCompassTargets()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 compass targets 的结果。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeFlagDominationClient 实例
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
var result = missionMultiplayerGameModeFlagDominationClient.GetCompassTargets();
```

### GetGoldAmount
`public override int GetGoldAmount()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 gold amount 的结果。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeFlagDominationClient 实例
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
var result = missionMultiplayerGameModeFlagDominationClient.GetGoldAmount();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerGameModeFlagDominationClient 实例
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
missionMultiplayerGameModeFlagDominationClient.OnMissionTick(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionMultiplayerGameModeFlagDominationClient missionMultiplayerGameModeFlagDominationClient = ...;
missionMultiplayerGameModeFlagDominationClient.OnBehaviorInitialize();
```

## 参见

- [本区域目录](../)