---
title: "AlleyModel"
description: "AlleyModel 的自动生成类参考。"
---
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

**用途 / Purpose:** 读取并返回当前对象中 daily xp gain for assigned clan member 的结果。

```csharp
// 先通过子系统 API 拿到 AlleyModel 实例
AlleyModel alleyModel = ...;
var result = alleyModel.GetDailyXpGainForAssignedClanMember(assignedHero);
```

### GetDailyXpGainForMainHero
`public abstract float GetDailyXpGainForMainHero()`

**用途 / Purpose:** 读取并返回当前对象中 daily xp gain for main hero 的结果。

```csharp
// 先通过子系统 API 拿到 AlleyModel 实例
AlleyModel alleyModel = ...;
var result = alleyModel.GetDailyXpGainForMainHero();
```

### GetInitialXpGainForMainHero
`public abstract float GetInitialXpGainForMainHero()`

**用途 / Purpose:** 读取并返回当前对象中 initial xp gain for main hero 的结果。

```csharp
// 先通过子系统 API 拿到 AlleyModel 实例
AlleyModel alleyModel = ...;
var result = alleyModel.GetInitialXpGainForMainHero();
```

### GetXpGainAfterSuccessfulAlleyDefenseForMainHero
`public abstract float GetXpGainAfterSuccessfulAlleyDefenseForMainHero()`

**用途 / Purpose:** 读取并返回当前对象中 xp gain after successful alley defense for main hero 的结果。

```csharp
// 先通过子系统 API 拿到 AlleyModel 实例
AlleyModel alleyModel = ...;
var result = alleyModel.GetXpGainAfterSuccessfulAlleyDefenseForMainHero();
```

### GetTroopsOfAIOwnedAlley
`public abstract TroopRoster GetTroopsOfAIOwnedAlley(Alley alley)`

**用途 / Purpose:** 读取并返回当前对象中 troops of a i owned alley 的结果。

```csharp
// 先通过子系统 API 拿到 AlleyModel 实例
AlleyModel alleyModel = ...;
var result = alleyModel.GetTroopsOfAIOwnedAlley(alley);
```

### GetTroopsOfAlleyForBattleMission
`public abstract TroopRoster GetTroopsOfAlleyForBattleMission(Alley alley)`

**用途 / Purpose:** 读取并返回当前对象中 troops of alley for battle mission 的结果。

```csharp
// 先通过子系统 API 拿到 AlleyModel 实例
AlleyModel alleyModel = ...;
var result = alleyModel.GetTroopsOfAlleyForBattleMission(alley);
```

### GetDailyIncomeOfAlley
`public abstract int GetDailyIncomeOfAlley(Alley alley)`

**用途 / Purpose:** 读取并返回当前对象中 daily income of alley 的结果。

```csharp
// 先通过子系统 API 拿到 AlleyModel 实例
AlleyModel alleyModel = ...;
var result = alleyModel.GetDailyIncomeOfAlley(alley);
```

### GetClanMembersAndAvailabilityDetailsForLeadingAnAlley
`public abstract List<ValueTuple<Hero, DefaultAlleyModel.AlleyMemberAvailabilityDetail>> GetClanMembersAndAvailabilityDetailsForLeadingAnAlley(Alley alley)`

**用途 / Purpose:** 读取并返回当前对象中 clan members and availability details for leading an alley 的结果。

```csharp
// 先通过子系统 API 拿到 AlleyModel 实例
AlleyModel alleyModel = ...;
var result = alleyModel.GetClanMembersAndAvailabilityDetailsForLeadingAnAlley(alley);
```

### GetTroopsToRecruitFromAlleyDependingOnAlleyRandom
`public abstract TroopRoster GetTroopsToRecruitFromAlleyDependingOnAlleyRandom(Alley alley, float random)`

**用途 / Purpose:** 读取并返回当前对象中 troops to recruit from alley depending on alley random 的结果。

```csharp
// 先通过子系统 API 拿到 AlleyModel 实例
AlleyModel alleyModel = ...;
var result = alleyModel.GetTroopsToRecruitFromAlleyDependingOnAlleyRandom(alley, 0);
```

### GetDisabledReasonTextForHero
`public abstract TextObject GetDisabledReasonTextForHero(Hero hero, Alley alley, DefaultAlleyModel.AlleyMemberAvailabilityDetail detail)`

**用途 / Purpose:** 读取并返回当前对象中 disabled reason text for hero 的结果。

```csharp
// 先通过子系统 API 拿到 AlleyModel 实例
AlleyModel alleyModel = ...;
var result = alleyModel.GetDisabledReasonTextForHero(hero, alley, detail);
```

### GetAlleyAttackResponseTimeInDays
`public abstract float GetAlleyAttackResponseTimeInDays(TroopRoster troopRoster)`

**用途 / Purpose:** 读取并返回当前对象中 alley attack response time in days 的结果。

```csharp
// 先通过子系统 API 拿到 AlleyModel 实例
AlleyModel alleyModel = ...;
var result = alleyModel.GetAlleyAttackResponseTimeInDays(troopRoster);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
AlleyModel instance = ...;
```

## 参见

- [本区域目录](../)