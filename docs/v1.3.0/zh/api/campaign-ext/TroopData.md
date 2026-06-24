<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TroopData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TroopData

**命名空间:** SandBox.Missions.MissionLogics.Hideout
**模块:** SandBox.Missions
**类型:** `public class TroopData`
**领域:** campaign-ext

## 概述

`TroopData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `TroopData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsReadyForCallTroopsCinematic` | `public bool IsReadyForCallTroopsCinematic { get; }` |

## 主要方法

### OnCreated
`public override void OnCreated()`

**用途 / Purpose:** 当 `created` 事件触发时调用此方法。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### OnObjectUsed
`public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)`

**用途 / Purpose:** 当 `object used` 事件触发时调用此方法。

### SetOverriddenHideoutBossCharacterObject
`public void SetOverriddenHideoutBossCharacterObject(CharacterObject characterObject)`

**用途 / Purpose:** 设置 `overridden hideout boss character object` 的值或状态。

### SpawnRemainingTroopsForBossFight
`public void SpawnRemainingTroopsForBossFight(List<MatrixFrame> spawnFrames)`

**用途 / Purpose:** 处理 `spawn remaining troops for boss fight` 相关逻辑。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**用途 / Purpose:** 当 `agent build` 事件触发时调用此方法。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### OnStealthMissionCounterFailed
`public void OnStealthMissionCounterFailed(OnStealthMissionCounterFailedEvent obj)`

**用途 / Purpose:** 当 `stealth mission counter failed` 事件触发时调用此方法。

### IsSideDepleted
`public bool IsSideDepleted(BattleSideEnum side)`

**用途 / Purpose:** 处理 `is side depleted` 相关逻辑。

### OnAgentsShouldBeEnabled
`public void OnAgentsShouldBeEnabled()`

**用途 / Purpose:** 当 `agents should be enabled` 事件触发时调用此方法。

### StartBossFightDuelMode
`public static void StartBossFightDuelMode()`

**用途 / Purpose:** 处理 `start boss fight duel mode` 相关逻辑。

### StartBossFightBattleMode
`public static void StartBossFightBattleMode()`

**用途 / Purpose:** 处理 `start boss fight battle mode` 相关逻辑。

### KillAllSentries
`public static string KillAllSentries(List<string> strings)`

**用途 / Purpose:** 处理 `kill all sentries` 相关逻辑。

## 使用示例

```csharp
var value = new TroopData();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
