---
title: "DefaultSettlementAccessModel"
description: "DefaultSettlementAccessModel 的自动生成类参考。"
---
# DefaultSettlementAccessModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementAccessModel : SettlementAccessModel`
**Base:** `SettlementAccessModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementAccessModel.cs`

## 概述

`DefaultSettlementAccessModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultSettlementAccessModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CanMainHeroEnterSettlement
`public override void CanMainHeroEnterSettlement(Settlement settlement, out AccessDetails accessDetails)`

**用途 / Purpose:** 检查当前对象是否满足 「main hero enter settlement」 的前置条件。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementAccessModel 实例
DefaultSettlementAccessModel defaultSettlementAccessModel = ...;
defaultSettlementAccessModel.CanMainHeroEnterSettlement(settlement, accessDetails);
```

### CanMainHeroEnterDungeon
`public override void CanMainHeroEnterDungeon(Settlement settlement, out AccessDetails accessDetails)`

**用途 / Purpose:** 检查当前对象是否满足 「main hero enter dungeon」 的前置条件。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementAccessModel 实例
DefaultSettlementAccessModel defaultSettlementAccessModel = ...;
defaultSettlementAccessModel.CanMainHeroEnterDungeon(settlement, accessDetails);
```

### CanMainHeroEnterLordsHall
`public override void CanMainHeroEnterLordsHall(Settlement settlement, out AccessDetails accessDetails)`

**用途 / Purpose:** 检查当前对象是否满足 「main hero enter lords hall」 的前置条件。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementAccessModel 实例
DefaultSettlementAccessModel defaultSettlementAccessModel = ...;
defaultSettlementAccessModel.CanMainHeroEnterLordsHall(settlement, accessDetails);
```

### CanMainHeroAccessLocation
`public override bool CanMainHeroAccessLocation(Settlement settlement, string locationId, out bool disableOption, out TextObject disabledText)`

**用途 / Purpose:** 检查当前对象是否满足 「main hero access location」 的前置条件。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementAccessModel 实例
DefaultSettlementAccessModel defaultSettlementAccessModel = ...;
var result = defaultSettlementAccessModel.CanMainHeroAccessLocation(settlement, "example", disableOption, disabledText);
```

### IsRequestMeetingOptionAvailable
`public override bool IsRequestMeetingOptionAvailable(Settlement settlement, out bool disableOption, out TextObject disabledText)`

**用途 / Purpose:** 判断当前对象是否处于 「request meeting option available」 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementAccessModel 实例
DefaultSettlementAccessModel defaultSettlementAccessModel = ...;
var result = defaultSettlementAccessModel.IsRequestMeetingOptionAvailable(settlement, disableOption, disabledText);
```

### CanMainHeroDoSettlementAction
`public override bool CanMainHeroDoSettlementAction(Settlement settlement, SettlementAction settlementAction, out bool disableOption, out TextObject disabledText)`

**用途 / Purpose:** 检查当前对象是否满足 「main hero do settlement action」 的前置条件。

```csharp
// 先通过子系统 API 拿到 DefaultSettlementAccessModel 实例
DefaultSettlementAccessModel defaultSettlementAccessModel = ...;
var result = defaultSettlementAccessModel.CanMainHeroDoSettlementAction(settlement, settlementAction, disableOption, disabledText);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultSettlementAccessModel>(new MyDefaultSettlementAccessModel());
```

## 参见

- [本区域目录](../)