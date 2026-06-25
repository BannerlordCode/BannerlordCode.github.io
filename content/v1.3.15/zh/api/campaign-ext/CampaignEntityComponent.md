---
title: "CampaignEntityComponent"
description: "CampaignEntityComponent 的自动生成类参考。"
---
# CampaignEntityComponent

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignEntityComponent : IEntityComponent`
**Base:** `IEntityComponent`
**File:** `TaleWorlds.CampaignSystem/CampaignEntityComponent.cs`

## 概述

`CampaignEntityComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `CampaignEntityComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnTick
`public virtual void OnTick(float realDt, float dt)`

**用途 / Purpose:** 在 「tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CampaignEntityComponent 实例
CampaignEntityComponent campaignEntityComponent = ...;
campaignEntityComponent.OnTick(0, 0);
```

## 使用示例

```csharp
var component = agent.GetComponent<CampaignEntityComponent>();
```

## 参见

- [本区域目录](../)