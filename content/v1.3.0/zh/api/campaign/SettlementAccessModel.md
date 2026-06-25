---
title: "SettlementAccessModel"
description: "SettlementAccessModel 的自动生成类参考。"
---
# SettlementAccessModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementAccessModel : MBGameModel<SettlementAccessModel>`
**Base:** `MBGameModel<SettlementAccessModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementAccessModel.cs`

## 概述

`SettlementAccessModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `SettlementAccessModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CanMainHeroEnterSettlement
`public abstract void CanMainHeroEnterSettlement(Settlement settlement, out SettlementAccessModel.AccessDetails accessDetails)`

**用途 / Purpose:** 检查当前对象是否满足 「main hero enter settlement」 的前置条件。

```csharp
// 先通过子系统 API 拿到 SettlementAccessModel 实例
SettlementAccessModel settlementAccessModel = ...;
settlementAccessModel.CanMainHeroEnterSettlement(settlement, accessDetails);
```

### CanMainHeroEnterLordsHall
`public abstract void CanMainHeroEnterLordsHall(Settlement settlement, out SettlementAccessModel.AccessDetails accessDetails)`

**用途 / Purpose:** 检查当前对象是否满足 「main hero enter lords hall」 的前置条件。

```csharp
// 先通过子系统 API 拿到 SettlementAccessModel 实例
SettlementAccessModel settlementAccessModel = ...;
settlementAccessModel.CanMainHeroEnterLordsHall(settlement, accessDetails);
```

### CanMainHeroEnterDungeon
`public abstract void CanMainHeroEnterDungeon(Settlement settlement, out SettlementAccessModel.AccessDetails accessDetails)`

**用途 / Purpose:** 检查当前对象是否满足 「main hero enter dungeon」 的前置条件。

```csharp
// 先通过子系统 API 拿到 SettlementAccessModel 实例
SettlementAccessModel settlementAccessModel = ...;
settlementAccessModel.CanMainHeroEnterDungeon(settlement, accessDetails);
```

### CanMainHeroAccessLocation
`public abstract bool CanMainHeroAccessLocation(Settlement settlement, string locationId, out bool disableOption, out TextObject disabledText)`

**用途 / Purpose:** 检查当前对象是否满足 「main hero access location」 的前置条件。

```csharp
// 先通过子系统 API 拿到 SettlementAccessModel 实例
SettlementAccessModel settlementAccessModel = ...;
var result = settlementAccessModel.CanMainHeroAccessLocation(settlement, "example", disableOption, disabledText);
```

### CanMainHeroDoSettlementAction
`public abstract bool CanMainHeroDoSettlementAction(Settlement settlement, SettlementAccessModel.SettlementAction settlementAction, out bool disableOption, out TextObject disabledText)`

**用途 / Purpose:** 检查当前对象是否满足 「main hero do settlement action」 的前置条件。

```csharp
// 先通过子系统 API 拿到 SettlementAccessModel 实例
SettlementAccessModel settlementAccessModel = ...;
var result = settlementAccessModel.CanMainHeroDoSettlementAction(settlement, settlementAction, disableOption, disabledText);
```

### IsRequestMeetingOptionAvailable
`public abstract bool IsRequestMeetingOptionAvailable(Settlement settlement, out bool disableOption, out TextObject disabledText)`

**用途 / Purpose:** 判断当前对象是否处于 「request meeting option available」 状态或条件。

```csharp
// 先通过子系统 API 拿到 SettlementAccessModel 实例
SettlementAccessModel settlementAccessModel = ...;
var result = settlementAccessModel.IsRequestMeetingOptionAvailable(settlement, disableOption, disabledText);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
SettlementAccessModel instance = ...;
```

## 参见

- [本区域目录](../)