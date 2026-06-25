---
title: "DefaultDelayedTeleportationModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultDelayedTeleportationModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultDelayedTeleportationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultDelayedTeleportationModel : DelayedTeleportationModel`
**Base:** `DelayedTeleportationModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultDelayedTeleportationModel.cs`

## 概述

`DefaultDelayedTeleportationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultDelayedTeleportationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetTeleportationDelayAsHours
`public override ExplainedNumber GetTeleportationDelayAsHours(Hero teleportingHero, PartyBase target)`

**用途 / Purpose:** 获取 `teleportation delay as hours` 的当前值。

### CanPerformImmediateTeleport
`public override bool CanPerformImmediateTeleport(Hero hero, MobileParty targetMobileParty, Settlement targetSettlement)`

**用途 / Purpose:** 判断当前对象是否可以执行 `perform immediate teleport`。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultDelayedTeleportationModel>(new MyDefaultDelayedTeleportationModel());
```

## 参见

- [完整类目录](../catalog)