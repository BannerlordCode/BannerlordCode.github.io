<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AlleyModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# AlleyModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class AlleyModel : MBGameModel<AlleyModel>`
**Base:** `MBGameModel<AlleyModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/AlleyModel.cs`

## 概述

`AlleyModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `AlleyModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `DestroyAlleyAfterDaysWhenLeaderIsDeath` | `public abstract CampaignTime DestroyAlleyAfterDaysWhenLeaderIsDeath { get; }` |
| `MinimumTroopCountInPlayerOwnedAlley` | `public abstract int MinimumTroopCountInPlayerOwnedAlley { get; }` |
| `MaximumTroopCountInPlayerOwnedAlley` | `public abstract int MaximumTroopCountInPlayerOwnedAlley { get; }` |
| `GetDailyCrimeRatingOfAlley` | `public abstract float GetDailyCrimeRatingOfAlley { get; }` |

## 主要方法

### GetDailyXpGainForAssignedClanMember
`public abstract float GetDailyXpGainForAssignedClanMember(Hero assignedHero)`

**用途 / Purpose:** 获取 `daily xp gain for assigned clan member` 的当前值。

### GetDailyXpGainForMainHero
`public abstract float GetDailyXpGainForMainHero()`

**用途 / Purpose:** 获取 `daily xp gain for main hero` 的当前值。

### GetInitialXpGainForMainHero
`public abstract float GetInitialXpGainForMainHero()`

**用途 / Purpose:** 获取 `initial xp gain for main hero` 的当前值。

### GetXpGainAfterSuccessfulAlleyDefenseForMainHero
`public abstract float GetXpGainAfterSuccessfulAlleyDefenseForMainHero()`

**用途 / Purpose:** 获取 `xp gain after successful alley defense for main hero` 的当前值。

### GetTroopsOfAIOwnedAlley
`public abstract TroopRoster GetTroopsOfAIOwnedAlley(Alley alley)`

**用途 / Purpose:** 获取 `troops of a i owned alley` 的当前值。

### GetTroopsOfAlleyForBattleMission
`public abstract TroopRoster GetTroopsOfAlleyForBattleMission(Alley alley)`

**用途 / Purpose:** 获取 `troops of alley for battle mission` 的当前值。

### GetDailyIncomeOfAlley
`public abstract int GetDailyIncomeOfAlley(Alley alley)`

**用途 / Purpose:** 获取 `daily income of alley` 的当前值。

### GetClanMembersAndAvailabilityDetailsForLeadingAnAlley
`public abstract List<ValueTuple<Hero, DefaultAlleyModel.AlleyMemberAvailabilityDetail>> GetClanMembersAndAvailabilityDetailsForLeadingAnAlley(Alley alley)`

**用途 / Purpose:** 获取 `clan members and availability details for leading an alley` 的当前值。

### GetTroopsToRecruitFromAlleyDependingOnAlleyRandom
`public abstract TroopRoster GetTroopsToRecruitFromAlleyDependingOnAlleyRandom(Alley alley, float random)`

**用途 / Purpose:** 获取 `troops to recruit from alley depending on alley random` 的当前值。

### GetDisabledReasonTextForHero
`public abstract TextObject GetDisabledReasonTextForHero(Hero hero, Alley alley, DefaultAlleyModel.AlleyMemberAvailabilityDetail detail)`

**用途 / Purpose:** 获取 `disabled reason text for hero` 的当前值。

### GetAlleyAttackResponseTimeInDays
`public abstract float GetAlleyAttackResponseTimeInDays(TroopRoster troopRoster)`

**用途 / Purpose:** 获取 `alley attack response time in days` 的当前值。

## 使用示例

```csharp
var implementation = new CustomAlleyModel();
```

## 参见

- [完整类目录](../catalog)