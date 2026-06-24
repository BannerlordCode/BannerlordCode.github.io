<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ShadowingAgentOffenseInfo`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ShadowingAgentOffenseInfo

**命名空间:** SandBox.Missions.MissionLogics
**模块:** SandBox.Missions
**类型:** `public class ShadowingAgentOffenseInfo`
**领域:** campaign-ext

## 概述

`ShadowingAgentOffenseInfo` 位于 `SandBox.Missions.MissionLogics`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `SandBox.Missions.MissionLogics` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsInStealthMode` | `public bool IsInStealthMode { get; }` |
| `ThreatAgentInfos` | `public ReadOnlyDictionary<Agent, DisguiseMissionLogic.ShadowingAgentOffenseInfo> ThreatAgentInfos { get; }` |
| `Agent` | `public Agent Agent { get; }` |
| `CanPlayerCameraSeeTheAgent` | `public bool CanPlayerCameraSeeTheAgent { get; }` |
| `OffenseType` | `public StealthOffenseTypes OffenseType { get; }` |

## 主要方法

### OnCreated
`public override void OnCreated()`

**用途 / Purpose:** 当 `created` 事件触发时调用此方法。

### GetSpawnFrameOfPassage
`public MatrixFrame GetSpawnFrameOfPassage(Location location)`

**用途 / Purpose:** 获取 `spawn frame of passage` 的当前值。

### IsContactAgentTracked
`public bool IsContactAgentTracked(Agent agent)`

**用途 / Purpose:** 处理 `is contact agent tracked` 相关逻辑。

### CanCommonAreaFightBeTriggered
`public bool CanCommonAreaFightBeTriggered()`

**用途 / Purpose:** 判断当前对象是否可以执行 `common area fight be triggered`。

### IsOnLeftSide
`public bool IsOnLeftSide(Vec2 lineA, Vec2 lineB, Vec2 point)`

**用途 / Purpose:** 处理 `is on left side` 相关逻辑。

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**用途 / Purpose:** 当 `agent build` 事件触发时调用此方法。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### SpawnDisguiseMissionAgentInternal
`public Agent SpawnDisguiseMissionAgentInternal(CharacterObject agentCharacter, Vec3 initialPosition, Vec2 initialDirection, string actionSetId, bool isEnemy = true)`

**用途 / Purpose:** 处理 `spawn disguise mission agent internal` 相关逻辑。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### GetAgentOffenseInfo
`public DisguiseMissionLogic.ShadowingAgentOffenseInfo GetAgentOffenseInfo(Agent agent)`

**用途 / Purpose:** 获取 `agent offense info` 的当前值。

### IsAgentInDetectionRadius
`public bool IsAgentInDetectionRadius(Agent offenderAgent, Agent detectorAgent)`

**用途 / Purpose:** 处理 `is agent in detection radius` 相关逻辑。

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)`

**用途 / Purpose:** 当 `end mission request` 事件触发时调用此方法。

### OnCollectPlayerEventControlFlags
`public Agent.EventControlFlag OnCollectPlayerEventControlFlags()`

**用途 / Purpose:** 当 `collect player event control flags` 事件触发时调用此方法。

### SetCanPlayerCameraSeeTheAgent
`public void SetCanPlayerCameraSeeTheAgent(bool value)`

**用途 / Purpose:** 设置 `can player camera see the agent` 的值或状态。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 ShadowingAgentOffenseInfo 实例，再调用它的公开方法
var value = new ShadowingAgentOffenseInfo();
value.OnCreated();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
