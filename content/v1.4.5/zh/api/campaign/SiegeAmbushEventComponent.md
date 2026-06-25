---
title: "SiegeAmbushEventComponent"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeAmbushEventComponent`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SiegeAmbushEventComponent

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SiegeAmbushEventComponent : MapEventComponent`
**Base:** `MapEventComponent`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/SiegeAmbushEventComponent.cs`

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

**用途 / Purpose:** 创建一个 `siege ambush event` 实例或对象。

## 使用示例

```csharp
var component = agent.GetComponent<SiegeAmbushEventComponent>();
```

## 参见

- [完整类目录](../catalog)