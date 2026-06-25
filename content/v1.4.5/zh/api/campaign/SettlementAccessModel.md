---
title: "SettlementAccessModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementAccessModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementAccessModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementAccessModel : MBGameModel<SettlementAccessModel>`
**Base:** `MBGameModel<SettlementAccessModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementAccessModel.cs`

## 概述

`SettlementAccessModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `SettlementAccessModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CanMainHeroEnterSettlement
`public abstract void CanMainHeroEnterSettlement(Settlement settlement, out AccessDetails accessDetails)`

**用途 / Purpose:** 判断当前对象是否可以执行 `main hero enter settlement`。

### CanMainHeroEnterLordsHall
`public abstract void CanMainHeroEnterLordsHall(Settlement settlement, out AccessDetails accessDetails)`

**用途 / Purpose:** 判断当前对象是否可以执行 `main hero enter lords hall`。

### CanMainHeroEnterDungeon
`public abstract void CanMainHeroEnterDungeon(Settlement settlement, out AccessDetails accessDetails)`

**用途 / Purpose:** 判断当前对象是否可以执行 `main hero enter dungeon`。

### CanMainHeroAccessLocation
`public abstract bool CanMainHeroAccessLocation(Settlement settlement, string locationId, out bool disableOption, out TextObject disabledText)`

**用途 / Purpose:** 判断当前对象是否可以执行 `main hero access location`。

### CanMainHeroDoSettlementAction
`public abstract bool CanMainHeroDoSettlementAction(Settlement settlement, SettlementAction settlementAction, out bool disableOption, out TextObject disabledText)`

**用途 / Purpose:** 判断当前对象是否可以执行 `main hero do settlement action`。

### IsRequestMeetingOptionAvailable
`public abstract bool IsRequestMeetingOptionAvailable(Settlement settlement, out bool disableOption, out TextObject disabledText)`

**用途 / Purpose:** 处理 `is request meeting option available` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomSettlementAccessModel();
```

## 参见

- [完整类目录](../catalog)