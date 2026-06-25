---
title: "CampaignMissionComponent"
description: "CampaignMissionComponent 的自动生成类参考。"
---
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

**用途 / Purpose:** 在 「agent created」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignMissionComponent 实例
CampaignMissionComponent campaignMissionComponent = ...;
campaignMissionComponent.OnAgentCreated(agent);
```

### OnPreDisplayMissionTick
`public override void OnPreDisplayMissionTick(float dt)`

**用途 / Purpose:** 在 「pre display mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignMissionComponent 实例
CampaignMissionComponent campaignMissionComponent = ...;
campaignMissionComponent.OnPreDisplayMissionTick(0);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignMissionComponent 实例
CampaignMissionComponent campaignMissionComponent = ...;
campaignMissionComponent.OnMissionTick(0);
```

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 CampaignMissionComponent 实例
CampaignMissionComponent campaignMissionComponent = ...;
campaignMissionComponent.EarlyStart();
```

### OnCreated
`public override void OnCreated()`

**用途 / Purpose:** 在 「created」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignMissionComponent 实例
CampaignMissionComponent campaignMissionComponent = ...;
campaignMissionComponent.OnCreated();
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 「behavior initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignMissionComponent 实例
CampaignMissionComponent campaignMissionComponent = ...;
campaignMissionComponent.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 CampaignMissionComponent 实例
CampaignMissionComponent campaignMissionComponent = ...;
campaignMissionComponent.AfterStart();
```

### OnMissionResultReady
`public override void OnMissionResultReady(MissionResult missionResult)`

**用途 / Purpose:** 在 「mission result ready」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignMissionComponent 实例
CampaignMissionComponent campaignMissionComponent = ...;
campaignMissionComponent.OnMissionResultReady(missionResult);
```

### PlayConversationSoundEvent
`public void PlayConversationSoundEvent(string soundPath)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 CampaignMissionComponent 实例
CampaignMissionComponent campaignMissionComponent = ...;
campaignMissionComponent.PlayConversationSoundEvent("example");
```

### FadeOutCharacter
`public void FadeOutCharacter(CharacterObject characterObject)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 CampaignMissionComponent 实例
CampaignMissionComponent campaignMissionComponent = ...;
campaignMissionComponent.FadeOutCharacter(characterObject);
```

### IsChannelModified
`public bool IsChannelModified(int channelNo)`

**用途 / Purpose:** 判断当前对象是否处于 「channel modified」 状态或条件。

```csharp
// 先通过子系统 API 拿到 CampaignMissionComponent 实例
CampaignMissionComponent campaignMissionComponent = ...;
var result = campaignMissionComponent.IsChannelModified(0);
```

### SetChannelModified
`public void SetChannelModified(int channelNo)`

**用途 / Purpose:** 为 「channel modified」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CampaignMissionComponent 实例
CampaignMissionComponent campaignMissionComponent = ...;
campaignMissionComponent.SetChannelModified(0);
```

## 使用示例

```csharp
var component = agent.GetComponent<CampaignMissionComponent>();
```

## 参见

- [本区域目录](../)