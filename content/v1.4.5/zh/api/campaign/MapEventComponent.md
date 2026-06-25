---
title: "MapEventComponent"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapEventComponent`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MapEventComponent

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapEventComponent`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEventComponent.cs`

## 概述

`MapEventComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `MapEventComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MapEvent` | `public MapEvent MapEvent { get; }` |
| `SimulationContext` | `public abstract MapEvent.PowerCalculationContext SimulationContext { get; }` |

## 使用示例

```csharp
var implementation = new CustomMapEventComponent();
```

## 参见

- [完整类目录](../catalog)