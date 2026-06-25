---
title: "ArenaPracticeFightMissionController"
description: "ArenaPracticeFightMissionController 的自动生成类参考。"
---
# ArenaPracticeFightMissionController

**Namespace:** SandBox.Missions.MissionLogics.Arena
**Module:** SandBox.Missions
**Type:** `public class ArenaPracticeFightMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/Arena/ArenaPracticeFightMissionController.cs`

## 概述

`ArenaPracticeFightMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `ArenaPracticeFightMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `RemainingOpponentCountFromLastPractice` | `public int RemainingOpponentCountFromLastPractice { get; }` |
| `IsPlayerPracticing` | `public bool IsPlayerPracticing { get; }` |
| `OpponentCountBeatenByPlayer` | `public int OpponentCountBeatenByPlayer { get; }` |
| `RemainingOpponentCount` | `public int RemainingOpponentCount { get; }` |
| `IsPlayerSurvived` | `public bool IsPlayerSurvived { get; }` |
| `AfterPractice` | `public bool AfterPractice { get; set; }` |

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ArenaPracticeFightMissionController 实例
ArenaPracticeFightMissionController arenaPracticeFightMissionController = ...;
arenaPracticeFightMissionController.AfterStart();
```

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**用途 / Purpose:** 在 「score hit」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ArenaPracticeFightMissionController 实例
ArenaPracticeFightMissionController arenaPracticeFightMissionController = ...;
arenaPracticeFightMissionController.OnScoreHit(affectedAgent, affectorAgent, attackerWeapon, false, false, blow, collisionData, 0, 0, 0);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ArenaPracticeFightMissionController 实例
ArenaPracticeFightMissionController arenaPracticeFightMissionController = ...;
arenaPracticeFightMissionController.OnMissionTick(0);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** 在 「agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ArenaPracticeFightMissionController 实例
ArenaPracticeFightMissionController arenaPracticeFightMissionController = ...;
arenaPracticeFightMissionController.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### MissionEnded
`public override bool MissionEnded(ref MissionResult missionResult)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ArenaPracticeFightMissionController 实例
ArenaPracticeFightMissionController arenaPracticeFightMissionController = ...;
var result = arenaPracticeFightMissionController.MissionEnded(missionResult);
```

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)`

**用途 / Purpose:** 在 「end mission request」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ArenaPracticeFightMissionController 实例
ArenaPracticeFightMissionController arenaPracticeFightMissionController = ...;
var result = arenaPracticeFightMissionController.OnEndMissionRequest(canPlayerLeave);
```

### StartPlayerPractice
`public void StartPlayerPractice()`

**用途 / Purpose:** 启动「player practice」流程或状态机。

```csharp
// 先通过子系统 API 拿到 ArenaPracticeFightMissionController 实例
ArenaPracticeFightMissionController arenaPracticeFightMissionController = ...;
arenaPracticeFightMissionController.StartPlayerPractice();
```

### GetParticipantCharacters
`public static List<CharacterObject> GetParticipantCharacters(Settlement settlement)`

**用途 / Purpose:** 读取并返回当前对象中 「participant characters」 的结果。

```csharp
// 静态调用，不需要实例
ArenaPracticeFightMissionController.GetParticipantCharacters(settlement);
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<ArenaPracticeFightMissionController>();
```

## 参见

- [本区域目录](../)