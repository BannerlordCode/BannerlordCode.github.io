---
title: "DefaultVolunteerModel"
description: "DefaultVolunteerModel 的自动生成类参考。"
---
# DefaultVolunteerModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultVolunteerModel : VolunteerModel`
**Base:** `VolunteerModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultVolunteerModel.cs`

## 概述

`DefaultVolunteerModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultVolunteerModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxVolunteerTier` | `public override int MaxVolunteerTier { get; }` |

## 主要方法

### MaximumIndexHeroCanRecruitFromHero
`public override int MaximumIndexHeroCanRecruitFromHero(Hero buyerHero, Hero sellerHero, int useValueAsRelation = -101)`

**用途 / Purpose:** **用途 / Purpose:** 调用 MaximumIndexHeroCanRecruitFromHero 对应的操作。

```csharp
// 先通过子系统 API 拿到 DefaultVolunteerModel 实例
DefaultVolunteerModel defaultVolunteerModel = ...;
var result = defaultVolunteerModel.MaximumIndexHeroCanRecruitFromHero(buyerHero, sellerHero, 0);
```

### MaximumIndexGarrisonCanRecruitFromHero
`public override int MaximumIndexGarrisonCanRecruitFromHero(Settlement settlement, Hero sellerHero)`

**用途 / Purpose:** **用途 / Purpose:** 调用 MaximumIndexGarrisonCanRecruitFromHero 对应的操作。

```csharp
// 先通过子系统 API 拿到 DefaultVolunteerModel 实例
DefaultVolunteerModel defaultVolunteerModel = ...;
var result = defaultVolunteerModel.MaximumIndexGarrisonCanRecruitFromHero(settlement, sellerHero);
```

### GetDailyVolunteerProductionProbability
`public override float GetDailyVolunteerProductionProbability(Hero hero, int index, Settlement settlement)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 daily volunteer production probability 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultVolunteerModel 实例
DefaultVolunteerModel defaultVolunteerModel = ...;
var result = defaultVolunteerModel.GetDailyVolunteerProductionProbability(hero, 0, settlement);
```

### GetBasicVolunteer
`public override CharacterObject GetBasicVolunteer(Hero sellerHero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 basic volunteer 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultVolunteerModel 实例
DefaultVolunteerModel defaultVolunteerModel = ...;
var result = defaultVolunteerModel.GetBasicVolunteer(sellerHero);
```

### CanHaveRecruits
`public override bool CanHaveRecruits(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 have recruits 的前置条件。

```csharp
// 先通过子系统 API 拿到 DefaultVolunteerModel 实例
DefaultVolunteerModel defaultVolunteerModel = ...;
var result = defaultVolunteerModel.CanHaveRecruits(hero);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultVolunteerModel>(new MyDefaultVolunteerModel());
```

## 参见

- [本区域目录](../)