---
title: "DefaultSettlementAccessModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultSettlementAccessModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultSettlementAccessModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementAccessModel : SettlementAccessModel`
**Base:** `SettlementAccessModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementAccessModel.cs`

## 概述

`DefaultSettlementAccessModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultSettlementAccessModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CanMainHeroEnterSettlement
`public override void CanMainHeroEnterSettlement(Settlement settlement, out SettlementAccessModel.AccessDetails accessDetails)`

**用途 / Purpose:** 判断当前对象是否可以执行 `main hero enter settlement`。

### CanMainHeroEnterDungeon
`public override void CanMainHeroEnterDungeon(Settlement settlement, out SettlementAccessModel.AccessDetails accessDetails)`

**用途 / Purpose:** 判断当前对象是否可以执行 `main hero enter dungeon`。

### CanMainHeroEnterLordsHall
`public override void CanMainHeroEnterLordsHall(Settlement settlement, out SettlementAccessModel.AccessDetails accessDetails)`

**用途 / Purpose:** 判断当前对象是否可以执行 `main hero enter lords hall`。

### CanMainHeroAccessLocation
`public override bool CanMainHeroAccessLocation(Settlement settlement, string locationId, out bool disableOption, out TextObject disabledText)`

**用途 / Purpose:** 判断当前对象是否可以执行 `main hero access location`。

### IsRequestMeetingOptionAvailable
`public override bool IsRequestMeetingOptionAvailable(Settlement settlement, out bool disableOption, out TextObject disabledText)`

**用途 / Purpose:** 处理 `is request meeting option available` 相关逻辑。

### CanMainHeroDoSettlementAction
`public override bool CanMainHeroDoSettlementAction(Settlement settlement, SettlementAccessModel.SettlementAction settlementAction, out bool disableOption, out TextObject disabledText)`

**用途 / Purpose:** 判断当前对象是否可以执行 `main hero do settlement action`。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultSettlementAccessModel>(new MyDefaultSettlementAccessModel());
```

## 参见

- [完整类目录](../catalog)