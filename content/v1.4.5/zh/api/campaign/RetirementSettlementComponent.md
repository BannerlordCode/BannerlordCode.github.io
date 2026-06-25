---
title: "RetirementSettlementComponent"
description: "RetirementSettlementComponent 的自动生成类参考。"
---
# RetirementSettlementComponent

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RetirementSettlementComponent : SettlementComponent, ISpottable`
**Base:** `SettlementComponent`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements/RetirementSettlementComponent.cs`

## 概述

`RetirementSettlementComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `RetirementSettlementComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsSpotted` | `public bool IsSpotted { get; set; }` |

## 主要方法

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 RetirementSettlementComponent 实例
RetirementSettlementComponent retirementSettlementComponent = ...;
retirementSettlementComponent.Deserialize(objectManager, node);
```

## 使用示例

```csharp
var component = agent.GetComponent<RetirementSettlementComponent>();
```

## 参见

- [本区域目录](../)