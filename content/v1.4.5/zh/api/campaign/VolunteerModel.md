---
title: "VolunteerModel"
description: "VolunteerModel 的自动生成类参考。"
---
# VolunteerModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class VolunteerModel : MBGameModel<VolunteerModel>`
**Base:** `MBGameModel<VolunteerModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/VolunteerModel.cs`

## 概述

`VolunteerModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `VolunteerModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxVolunteerTier` | `public abstract int MaxVolunteerTier { get; }` |

## 主要方法

### MaximumIndexHeroCanRecruitFromHero
`public abstract int MaximumIndexHeroCanRecruitFromHero(Hero buyerHero, Hero sellerHero, int useValueAsRelation = -101)`

**用途 / Purpose:** **用途 / Purpose:** 调用 MaximumIndexHeroCanRecruitFromHero 对应的操作。

```csharp
// 先通过子系统 API 拿到 VolunteerModel 实例
VolunteerModel volunteerModel = ...;
var result = volunteerModel.MaximumIndexHeroCanRecruitFromHero(buyerHero, sellerHero, 0);
```

### MaximumIndexGarrisonCanRecruitFromHero
`public abstract int MaximumIndexGarrisonCanRecruitFromHero(Settlement settlement, Hero sellerHero)`

**用途 / Purpose:** **用途 / Purpose:** 调用 MaximumIndexGarrisonCanRecruitFromHero 对应的操作。

```csharp
// 先通过子系统 API 拿到 VolunteerModel 实例
VolunteerModel volunteerModel = ...;
var result = volunteerModel.MaximumIndexGarrisonCanRecruitFromHero(settlement, sellerHero);
```

### GetDailyVolunteerProductionProbability
`public abstract float GetDailyVolunteerProductionProbability(Hero hero, int index, Settlement settlement)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 daily volunteer production probability 的结果。

```csharp
// 先通过子系统 API 拿到 VolunteerModel 实例
VolunteerModel volunteerModel = ...;
var result = volunteerModel.GetDailyVolunteerProductionProbability(hero, 0, settlement);
```

### GetBasicVolunteer
`public abstract CharacterObject GetBasicVolunteer(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 basic volunteer 的结果。

```csharp
// 先通过子系统 API 拿到 VolunteerModel 实例
VolunteerModel volunteerModel = ...;
var result = volunteerModel.GetBasicVolunteer(hero);
```

### CanHaveRecruits
`public abstract bool CanHaveRecruits(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 have recruits 的前置条件。

```csharp
// 先通过子系统 API 拿到 VolunteerModel 实例
VolunteerModel volunteerModel = ...;
var result = volunteerModel.CanHaveRecruits(hero);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
VolunteerModel instance = ...;
```

## 参见

- [本区域目录](../)