---
title: "DefaultAlleyModel"
description: "DefaultAlleyModel 的自动生成类参考。"
---
# DefaultAlleyModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultAlleyModel : AlleyModel`
**Base:** `AlleyModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultAlleyModel.cs`

## 概述

`DefaultAlleyModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultAlleyModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetDailyXpGainForAssignedClanMember
`public override float GetDailyXpGainForAssignedClanMember(Hero assignedHero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 daily xp gain for assigned clan member 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultAlleyModel 实例
DefaultAlleyModel defaultAlleyModel = ...;
var result = defaultAlleyModel.GetDailyXpGainForAssignedClanMember(assignedHero);
```

### GetDailyXpGainForMainHero
`public override float GetDailyXpGainForMainHero()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 daily xp gain for main hero 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultAlleyModel 实例
DefaultAlleyModel defaultAlleyModel = ...;
var result = defaultAlleyModel.GetDailyXpGainForMainHero();
```

### GetInitialXpGainForMainHero
`public override float GetInitialXpGainForMainHero()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 initial xp gain for main hero 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultAlleyModel 实例
DefaultAlleyModel defaultAlleyModel = ...;
var result = defaultAlleyModel.GetInitialXpGainForMainHero();
```

### GetXpGainAfterSuccessfulAlleyDefenseForMainHero
`public override float GetXpGainAfterSuccessfulAlleyDefenseForMainHero()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 xp gain after successful alley defense for main hero 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultAlleyModel 实例
DefaultAlleyModel defaultAlleyModel = ...;
var result = defaultAlleyModel.GetXpGainAfterSuccessfulAlleyDefenseForMainHero();
```

### GetTroopsOfAIOwnedAlley
`public override TroopRoster GetTroopsOfAIOwnedAlley(Alley alley)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 troops of a i owned alley 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultAlleyModel 实例
DefaultAlleyModel defaultAlleyModel = ...;
var result = defaultAlleyModel.GetTroopsOfAIOwnedAlley(alley);
```

### GetTroopsOfAlleyForBattleMission
`public override TroopRoster GetTroopsOfAlleyForBattleMission(Alley alley)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 troops of alley for battle mission 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultAlleyModel 实例
DefaultAlleyModel defaultAlleyModel = ...;
var result = defaultAlleyModel.GetTroopsOfAlleyForBattleMission(alley);
```

### GetTroopsToRecruitFromAlleyDependingOnAlleyRandom
`public override TroopRoster GetTroopsToRecruitFromAlleyDependingOnAlleyRandom(Alley alley, float random)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 troops to recruit from alley depending on alley random 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultAlleyModel 实例
DefaultAlleyModel defaultAlleyModel = ...;
var result = defaultAlleyModel.GetTroopsToRecruitFromAlleyDependingOnAlleyRandom(alley, 0);
```

### GetDisabledReasonTextForHero
`public override TextObject GetDisabledReasonTextForHero(Hero hero, Alley alley, AlleyMemberAvailabilityDetail detail)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 disabled reason text for hero 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultAlleyModel 实例
DefaultAlleyModel defaultAlleyModel = ...;
var result = defaultAlleyModel.GetDisabledReasonTextForHero(hero, alley, detail);
```

### GetAlleyAttackResponseTimeInDays
`public override float GetAlleyAttackResponseTimeInDays(TroopRoster troopRoster)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 alley attack response time in days 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultAlleyModel 实例
DefaultAlleyModel defaultAlleyModel = ...;
var result = defaultAlleyModel.GetAlleyAttackResponseTimeInDays(troopRoster);
```

### GetDailyIncomeOfAlley
`public override int GetDailyIncomeOfAlley(Alley alley)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 daily income of alley 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultAlleyModel 实例
DefaultAlleyModel defaultAlleyModel = ...;
var result = defaultAlleyModel.GetDailyIncomeOfAlley(alley);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultAlleyModel>(new MyDefaultAlleyModel());
```

## 参见

- [本区域目录](../)