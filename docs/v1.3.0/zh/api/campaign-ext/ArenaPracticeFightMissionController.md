<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ArenaPracticeFightMissionController`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**用途 / Purpose:** 当 `score hit` 事件触发时调用此方法。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### MissionEnded
`public override bool MissionEnded(ref MissionResult missionResult)`

**用途 / Purpose:** 处理 `mission ended` 相关逻辑。

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)`

**用途 / Purpose:** 当 `end mission request` 事件触发时调用此方法。

### StartPlayerPractice
`public void StartPlayerPractice()`

**用途 / Purpose:** 处理 `start player practice` 相关逻辑。

### GetParticipantCharacters
`public static List<CharacterObject> GetParticipantCharacters(Settlement settlement)`

**用途 / Purpose:** 获取 `participant characters` 的当前值。

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<ArenaPracticeFightMissionController>();
```

## 参见

- [完整类目录](../catalog)