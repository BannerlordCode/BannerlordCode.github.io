---
title: "CampaignAgentComponent"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignAgentComponent`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignAgentComponent

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class CampaignAgentComponent : AgentComponent`
**Base:** `AgentComponent`
**File:** `SandBox/CampaignAgentComponent.cs`

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

**用途 / Purpose:** 创建一个 `agent navigator` 实例或对象。

### CreateAgentNavigator
`public AgentNavigator CreateAgentNavigator()`

**用途 / Purpose:** 创建一个 `agent navigator` 实例或对象。

### OnAgentRemoved
`public void OnAgentRemoved(Agent agent)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### OnTick
`public override void OnTick(float dt)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### GetMoraleDecreaseConstant
`public override float GetMoraleDecreaseConstant()`

**用途 / Purpose:** 获取 `morale decrease constant` 的当前值。

### GetMoraleAddition
`public override float GetMoraleAddition()`

**用途 / Purpose:** 获取 `morale addition` 的当前值。

### OnStopUsingGameObject
`public override void OnStopUsingGameObject()`

**用途 / Purpose:** 当 `stop using game object` 事件触发时调用此方法。

## 使用示例

```csharp
var component = agent.GetComponent<CampaignAgentComponent>();
```

## 参见

- [完整类目录](../catalog)