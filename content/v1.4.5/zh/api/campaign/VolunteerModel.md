---
title: "VolunteerModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VolunteerModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# VolunteerModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class VolunteerModel : MBGameModel<VolunteerModel>`
**Base:** `MBGameModel<VolunteerModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/VolunteerModel.cs`

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

**用途 / Purpose:** 处理 `maximum index hero can recruit from hero` 相关逻辑。

### MaximumIndexGarrisonCanRecruitFromHero
`public abstract int MaximumIndexGarrisonCanRecruitFromHero(Settlement settlement, Hero sellerHero)`

**用途 / Purpose:** 处理 `maximum index garrison can recruit from hero` 相关逻辑。

### GetDailyVolunteerProductionProbability
`public abstract float GetDailyVolunteerProductionProbability(Hero hero, int index, Settlement settlement)`

**用途 / Purpose:** 获取 `daily volunteer production probability` 的当前值。

### GetBasicVolunteer
`public abstract CharacterObject GetBasicVolunteer(Hero hero)`

**用途 / Purpose:** 获取 `basic volunteer` 的当前值。

### CanHaveRecruits
`public abstract bool CanHaveRecruits(Hero hero)`

**用途 / Purpose:** 判断当前对象是否可以执行 `have recruits`。

## 使用示例

```csharp
var implementation = new CustomVolunteerModel();
```

## 参见

- [完整类目录](../catalog)