---
title: "DefaultVolunteerModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultVolunteerModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 处理 `maximum index hero can recruit from hero` 相关逻辑。

### MaximumIndexGarrisonCanRecruitFromHero
`public override int MaximumIndexGarrisonCanRecruitFromHero(Settlement settlement, Hero sellerHero)`

**用途 / Purpose:** 处理 `maximum index garrison can recruit from hero` 相关逻辑。

### GetDailyVolunteerProductionProbability
`public override float GetDailyVolunteerProductionProbability(Hero hero, int index, Settlement settlement)`

**用途 / Purpose:** 获取 `daily volunteer production probability` 的当前值。

### GetBasicVolunteer
`public override CharacterObject GetBasicVolunteer(Hero sellerHero)`

**用途 / Purpose:** 获取 `basic volunteer` 的当前值。

### CanHaveRecruits
`public override bool CanHaveRecruits(Hero hero)`

**用途 / Purpose:** 判断当前对象是否可以执行 `have recruits`。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultVolunteerModel>(new MyDefaultVolunteerModel());
```

## 参见

- [完整类目录](../catalog)