<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignMissionComponent`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignMissionComponent

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class CampaignMissionComponent : MissionLogic, ICampaignMission`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/CampaignMissionComponent.cs`

## 概述

`CampaignMissionComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `CampaignMissionComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `State` | `public GameState State { get; set; }` |
| `AgentSupplier` | `public IMissionTroopSupplier AgentSupplier { get; set; }` |
| `Location` | `public Location Location { get; set; }` |
| `LastVisitedAlley` | `public Alley LastVisitedAlley { get; set; }` |
| `Agent` | `public Agent Agent { get; }` |

## 主要方法

### OnAgentCreated
`public override void OnAgentCreated(Agent agent)`

**用途 / Purpose:** 当 `agent created` 事件触发时调用此方法。

### OnPreDisplayMissionTick
`public override void OnPreDisplayMissionTick(float dt)`

**用途 / Purpose:** 当 `pre display mission tick` 事件触发时调用此方法。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 处理 `early start` 相关逻辑。

### OnCreated
`public override void OnCreated()`

**用途 / Purpose:** 当 `created` 事件触发时调用此方法。

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnMissionResultReady
`public override void OnMissionResultReady(MissionResult missionResult)`

**用途 / Purpose:** 当 `mission result ready` 事件触发时调用此方法。

### PlayConversationSoundEvent
`public void PlayConversationSoundEvent(string soundPath)`

**用途 / Purpose:** 处理 `play conversation sound event` 相关逻辑。

### FadeOutCharacter
`public void FadeOutCharacter(CharacterObject characterObject)`

**用途 / Purpose:** 处理 `fade out character` 相关逻辑。

### IsChannelModified
`public bool IsChannelModified(int channelNo)`

**用途 / Purpose:** 处理 `is channel modified` 相关逻辑。

### SetChannelModified
`public void SetChannelModified(int channelNo)`

**用途 / Purpose:** 设置 `channel modified` 的值或状态。

## 使用示例

```csharp
var component = agent.GetComponent<CampaignMissionComponent>();
```

## 参见

- [完整类目录](../catalog)