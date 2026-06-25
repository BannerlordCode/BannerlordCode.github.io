---
title: "SiegeAmbushEventComponent"
description: "SiegeAmbushEventComponent 的自动生成类参考。"
---
# SiegeAmbushEventComponent

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SiegeAmbushEventComponent : MapEventComponent`
**Base:** `MapEventComponent`
**File:** `TaleWorlds.CampaignSystem/MapEvents/SiegeAmbushEventComponent.cs`

## 概述

`SiegeAmbushEventComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `SiegeAmbushEventComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `SimulationContext` | `public override MapEvent.PowerCalculationContext SimulationContext { get; }` |

## 主要方法

### CreateSiegeAmbushEvent
`public static SiegeAmbushEventComponent CreateSiegeAmbushEvent(PartyBase attackerParty, PartyBase defenderParty)`

**用途 / Purpose:** 构建一个新的 「siege ambush event」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
SiegeAmbushEventComponent.CreateSiegeAmbushEvent(attackerParty, defenderParty);
```

## 使用示例

```csharp
var component = agent.GetComponent<SiegeAmbushEventComponent>();
```

## 参见

- [本区域目录](../)