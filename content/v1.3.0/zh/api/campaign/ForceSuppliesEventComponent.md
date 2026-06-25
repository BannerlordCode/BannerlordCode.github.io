---
title: "ForceSuppliesEventComponent"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ForceSuppliesEventComponent`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ForceSuppliesEventComponent

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ForceSuppliesEventComponent : MapEventComponent`
**Base:** `MapEventComponent`
**File:** `TaleWorlds.CampaignSystem/MapEvents/ForceSuppliesEventComponent.cs`

## 概述

`ForceSuppliesEventComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `ForceSuppliesEventComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `SimulationContext` | `public override MapEvent.PowerCalculationContext SimulationContext { get; }` |

## 主要方法

### CreateForceSuppliesEvent
`public static ForceSuppliesEventComponent CreateForceSuppliesEvent(PartyBase attackerParty, PartyBase defenderParty)`

**用途 / Purpose:** 创建一个 `force supplies event` 实例或对象。

### CreateComponentForOldSaves
`public static ForceSuppliesEventComponent CreateComponentForOldSaves(MapEvent mapEvent)`

**用途 / Purpose:** 创建一个 `component for old saves` 实例或对象。

## 使用示例

```csharp
var component = agent.GetComponent<ForceSuppliesEventComponent>();
```

## 参见

- [完整类目录](../catalog)