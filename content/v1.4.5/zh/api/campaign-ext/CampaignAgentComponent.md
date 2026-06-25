---
title: "CampaignAgentComponent"
description: "CampaignAgentComponent 的自动生成类参考。"
---
# CampaignAgentComponent

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class CampaignAgentComponent : AgentComponent`
**Base:** `AgentComponent`
**File:** `Modules.SandBox/SandBox/Sandbox/CampaignAgentComponent.cs`

## 概述

`CampaignAgentComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `CampaignAgentComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `AgentNavigator` | `public AgentNavigator AgentNavigator { get; }` |
| `OwnerParty` | `public PartyBase OwnerParty { get; }` |

## 主要方法

### CreateAgentNavigator
`public AgentNavigator CreateAgentNavigator(LocationCharacter locationCharacter)`

**用途 / Purpose:** 构建一个新的 agent navigator 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 CampaignAgentComponent 实例
CampaignAgentComponent campaignAgentComponent = ...;
var result = campaignAgentComponent.CreateAgentNavigator(locationCharacter);
```

### CreateAgentNavigator
`public AgentNavigator CreateAgentNavigator()`

**用途 / Purpose:** 构建一个新的 agent navigator 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 CampaignAgentComponent 实例
CampaignAgentComponent campaignAgentComponent = ...;
var result = campaignAgentComponent.CreateAgentNavigator();
```

### OnAgentRemoved
`public void OnAgentRemoved(Agent agent)`

**用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignAgentComponent 实例
CampaignAgentComponent campaignAgentComponent = ...;
campaignAgentComponent.OnAgentRemoved(agent);
```

### OnTick
`public override void OnTick(float dt)`

**用途 / Purpose:** 在 tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignAgentComponent 实例
CampaignAgentComponent campaignAgentComponent = ...;
campaignAgentComponent.OnTick(0);
```

### GetMoraleDecreaseConstant
`public override float GetMoraleDecreaseConstant()`

**用途 / Purpose:** 读取并返回当前对象中 morale decrease constant 的结果。

```csharp
// 先通过子系统 API 拿到 CampaignAgentComponent 实例
CampaignAgentComponent campaignAgentComponent = ...;
var result = campaignAgentComponent.GetMoraleDecreaseConstant();
```

### GetMoraleAddition
`public override float GetMoraleAddition()`

**用途 / Purpose:** 读取并返回当前对象中 morale addition 的结果。

```csharp
// 先通过子系统 API 拿到 CampaignAgentComponent 实例
CampaignAgentComponent campaignAgentComponent = ...;
var result = campaignAgentComponent.GetMoraleAddition();
```

### OnStopUsingGameObject
`public override void OnStopUsingGameObject()`

**用途 / Purpose:** 在 stop using game object 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignAgentComponent 实例
CampaignAgentComponent campaignAgentComponent = ...;
campaignAgentComponent.OnStopUsingGameObject();
```

## 使用示例

```csharp
var component = agent.GetComponent<CampaignAgentComponent>();
```

## 参见

- [本区域目录](../)