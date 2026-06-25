---
title: "DefaultAlleyModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultAlleyModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultAlleyModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultAlleyModel : AlleyModel`
**Base:** `AlleyModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultAlleyModel.cs`

## 概述

`DefaultAlleyModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultAlleyModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetDailyXpGainForAssignedClanMember
`public override float GetDailyXpGainForAssignedClanMember(Hero assignedHero)`

**用途 / Purpose:** 获取 `daily xp gain for assigned clan member` 的当前值。

### GetDailyXpGainForMainHero
`public override float GetDailyXpGainForMainHero()`

**用途 / Purpose:** 获取 `daily xp gain for main hero` 的当前值。

### GetInitialXpGainForMainHero
`public override float GetInitialXpGainForMainHero()`

**用途 / Purpose:** 获取 `initial xp gain for main hero` 的当前值。

### GetXpGainAfterSuccessfulAlleyDefenseForMainHero
`public override float GetXpGainAfterSuccessfulAlleyDefenseForMainHero()`

**用途 / Purpose:** 获取 `xp gain after successful alley defense for main hero` 的当前值。

### GetTroopsOfAIOwnedAlley
`public override TroopRoster GetTroopsOfAIOwnedAlley(Alley alley)`

**用途 / Purpose:** 获取 `troops of a i owned alley` 的当前值。

### GetTroopsOfAlleyForBattleMission
`public override TroopRoster GetTroopsOfAlleyForBattleMission(Alley alley)`

**用途 / Purpose:** 获取 `troops of alley for battle mission` 的当前值。

### GetTroopsToRecruitFromAlleyDependingOnAlleyRandom
`public override TroopRoster GetTroopsToRecruitFromAlleyDependingOnAlleyRandom(Alley alley, float random)`

**用途 / Purpose:** 获取 `troops to recruit from alley depending on alley random` 的当前值。

### GetDisabledReasonTextForHero
`public override TextObject GetDisabledReasonTextForHero(Hero hero, Alley alley, AlleyMemberAvailabilityDetail detail)`

**用途 / Purpose:** 获取 `disabled reason text for hero` 的当前值。

### GetAlleyAttackResponseTimeInDays
`public override float GetAlleyAttackResponseTimeInDays(TroopRoster troopRoster)`

**用途 / Purpose:** 获取 `alley attack response time in days` 的当前值。

### GetDailyIncomeOfAlley
`public override int GetDailyIncomeOfAlley(Alley alley)`

**用途 / Purpose:** 获取 `daily income of alley` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultAlleyModel>(new MyDefaultAlleyModel());
```

## 参见

- [完整类目录](../catalog)