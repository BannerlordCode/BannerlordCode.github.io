<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionFightHandler`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionFightHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MissionFightHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/MissionFightHandler.cs`

## 概述

`MissionFightHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MissionFightHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MinMissionEndTime` | `public float MinMissionEndTime { get; }` |

## 主要方法

### OnFightEndDelegate
`public delegate void OnFightEndDelegate(bool isPlayerSideWon)`

**用途 / Purpose:** 当 `fight end delegate` 事件触发时调用此方法。

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 处理 `early start` 相关逻辑。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### StartCustomFight
`public void StartCustomFight(List<Agent> playerSideAgents, List<Agent> opponentSideAgents, bool dropWeapons, bool isItemUseDisabled, OnFightEndDelegate onFightEndDelegate, float minimumEndTime = float.Epsilon)`

**用途 / Purpose:** 处理 `start custom fight` 相关逻辑。

### StartFistFight
`public void StartFistFight(Agent opponent, OnFightEndDelegate onFightEndDelegate, float minimumEndTime = float.Epsilon)`

**用途 / Purpose:** 处理 `start fist fight` 相关逻辑。

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)`

**用途 / Purpose:** 当 `end mission request` 事件触发时调用此方法。

### GetAgentToSpectate
`public static Agent GetAgentToSpectate()`

**用途 / Purpose:** 获取 `agent to spectate` 的当前值。

### BeginEndFight
`public void BeginEndFight()`

**用途 / Purpose:** 处理 `begin end fight` 相关逻辑。

### EndFight
`public void EndFight(bool overrideDuelWonByPlayer = false)`

**用途 / Purpose:** 处理 `end fight` 相关逻辑。

### IsThereActiveFight
`public bool IsThereActiveFight()`

**用途 / Purpose:** 处理 `is there active fight` 相关逻辑。

### AddAgentToSide
`public void AddAgentToSide(Agent agent, bool isPlayerSide)`

**用途 / Purpose:** 向当前集合/状态中添加 `agent to side`。

### GetDangerSources
`public IEnumerable<Agent> GetDangerSources(Agent ownerAgent)`

**用途 / Purpose:** 获取 `danger sources` 的当前值。

### IsAgentAggressive
`public static bool IsAgentAggressive(Agent agent)`

**用途 / Purpose:** 处理 `is agent aggressive` 相关逻辑。

### IsAgentJusticeWarrior
`public static bool IsAgentJusticeWarrior(CharacterObject character)`

**用途 / Purpose:** 处理 `is agent justice warrior` 相关逻辑。

### IsAgentVillian
`public static bool IsAgentVillian(CharacterObject character)`

**用途 / Purpose:** 处理 `is agent villian` 相关逻辑。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new MissionFightHandler());
```

## 参见

- [完整类目录](../catalog)