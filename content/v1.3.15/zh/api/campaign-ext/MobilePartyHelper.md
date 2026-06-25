---
title: "MobilePartyHelper"
description: "MobilePartyHelper 的自动生成类参考。"
---
# MobilePartyHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class MobilePartyHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Helpers/MobilePartyHelper.cs`

## 概述

`MobilePartyHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `MobilePartyHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SpawnLordParty
`public static MobileParty SpawnLordParty(Hero hero, Settlement spawnSettlement)`

**用途 / Purpose:** 调用 SpawnLordParty 对应的操作。

```csharp
// 静态调用，不需要实例
MobilePartyHelper.SpawnLordParty(hero, spawnSettlement);
```

### SpawnLordParty
`public static MobileParty SpawnLordParty(Hero hero, CampaignVec2 position, float spawnRadius)`

**用途 / Purpose:** 调用 SpawnLordParty 对应的操作。

```csharp
// 静态调用，不需要实例
MobilePartyHelper.SpawnLordParty(hero, position, 0);
```

### CreateNewClanMobileParty
`public static MobileParty CreateNewClanMobileParty(Hero hero, Clan clan)`

**用途 / Purpose:** 构建一个新的 new clan mobile party 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MobilePartyHelper.CreateNewClanMobileParty(hero, clan);
```

### IsHeroAssignableForScoutInParty
`public static bool IsHeroAssignableForScoutInParty(Hero hero, MobileParty party)`

**用途 / Purpose:** 判断当前对象是否处于 hero assignable for scout in party 状态或条件。

```csharp
// 静态调用，不需要实例
MobilePartyHelper.IsHeroAssignableForScoutInParty(hero, party);
```

### IsHeroAssignableForEngineerInParty
`public static bool IsHeroAssignableForEngineerInParty(Hero hero, MobileParty party)`

**用途 / Purpose:** 判断当前对象是否处于 hero assignable for engineer in party 状态或条件。

```csharp
// 静态调用，不需要实例
MobilePartyHelper.IsHeroAssignableForEngineerInParty(hero, party);
```

### IsHeroAssignableForSurgeonInParty
`public static bool IsHeroAssignableForSurgeonInParty(Hero hero, MobileParty party)`

**用途 / Purpose:** 判断当前对象是否处于 hero assignable for surgeon in party 状态或条件。

```csharp
// 静态调用，不需要实例
MobilePartyHelper.IsHeroAssignableForSurgeonInParty(hero, party);
```

### IsHeroAssignableForQuartermasterInParty
`public static bool IsHeroAssignableForQuartermasterInParty(Hero hero, MobileParty party)`

**用途 / Purpose:** 判断当前对象是否处于 hero assignable for quartermaster in party 状态或条件。

```csharp
// 静态调用，不需要实例
MobilePartyHelper.IsHeroAssignableForQuartermasterInParty(hero, party);
```

### GetHeroWithHighestSkill
`public static Hero GetHeroWithHighestSkill(MobileParty party, SkillObject skill)`

**用途 / Purpose:** 读取并返回当前对象中 hero with highest skill 的结果。

```csharp
// 静态调用，不需要实例
MobilePartyHelper.GetHeroWithHighestSkill(party, skill);
```

### GetStrongestAndPriorTroops
`public static TroopRoster GetStrongestAndPriorTroops(MobileParty mobileParty, int maxTroopCount, bool includePlayer)`

**用途 / Purpose:** 读取并返回当前对象中 strongest and prior troops 的结果。

```csharp
// 静态调用，不需要实例
MobilePartyHelper.GetStrongestAndPriorTroops(mobileParty, 0, false);
```

### GetStrongestAndPriorTroops
`public static TroopRoster GetStrongestAndPriorTroops(FlattenedTroopRoster roster, int maxTroopCount, bool includePlayer)`

**用途 / Purpose:** 读取并返回当前对象中 strongest and prior troops 的结果。

```csharp
// 静态调用，不需要实例
MobilePartyHelper.GetStrongestAndPriorTroops(roster, 0, false);
```

### GetMaximumXpAmountPartyCanGet
`public static int GetMaximumXpAmountPartyCanGet(MobileParty party)`

**用途 / Purpose:** 读取并返回当前对象中 maximum xp amount party can get 的结果。

```csharp
// 静态调用，不需要实例
MobilePartyHelper.GetMaximumXpAmountPartyCanGet(party);
```

### PartyAddSharedXp
`public static void PartyAddSharedXp(MobileParty party, float xpToDistribute)`

**用途 / Purpose:** 调用 PartyAddSharedXp 对应的操作。

```csharp
// 静态调用，不需要实例
MobilePartyHelper.PartyAddSharedXp(party, 0);
```

### WoundNumberOfNonHeroTroopsRandomlyWithChanceOfDeath
`public static void WoundNumberOfNonHeroTroopsRandomlyWithChanceOfDeath(TroopRoster roster, int numberOfMen, float chanceOfDeathPerUnit, out int deathAmount)`

**用途 / Purpose:** 调用 WoundNumberOfNonHeroTroopsRandomlyWithChanceOfDeath 对应的操作。

```csharp
// 静态调用，不需要实例
MobilePartyHelper.WoundNumberOfNonHeroTroopsRandomlyWithChanceOfDeath(roster, 0, 0, deathAmount);
```

### CanTroopGainXp
`public static bool CanTroopGainXp(PartyBase owner, CharacterObject character, out int gainableMaxXp)`

**用途 / Purpose:** 检查当前对象是否满足 troop gain xp 的前置条件。

```csharp
// 静态调用，不需要实例
MobilePartyHelper.CanTroopGainXp(owner, character, gainableMaxXp);
```

### TryMatchPartySpeedWithItemWeight
`public static void TryMatchPartySpeedWithItemWeight(MobileParty party, float targetPartySpeed, ItemObject itemToUse = null)`

**用途 / Purpose:** 尝试获取 match party speed with item weight 的值，通常通过 out 参数返回是否成功。

```csharp
// 静态调用，不需要实例
MobilePartyHelper.TryMatchPartySpeedWithItemWeight(party, 0, null);
```

### GetMainPartySkillCounsellor
`public static Hero GetMainPartySkillCounsellor(SkillObject skill)`

**用途 / Purpose:** 读取并返回当前对象中 main party skill counsellor 的结果。

```csharp
// 静态调用，不需要实例
MobilePartyHelper.GetMainPartySkillCounsellor(skill);
```

### GetCurrentSettlementOfMobilePartyForAICalculation
`public static Settlement GetCurrentSettlementOfMobilePartyForAICalculation(MobileParty mobileParty)`

**用途 / Purpose:** 读取并返回当前对象中 current settlement of mobile party for a i calculation 的结果。

```csharp
// 静态调用，不需要实例
MobilePartyHelper.GetCurrentSettlementOfMobilePartyForAICalculation(mobileParty);
```

### GetPlayerPrisonersPlayerCanSell
`public static TroopRoster GetPlayerPrisonersPlayerCanSell()`

**用途 / Purpose:** 读取并返回当前对象中 player prisoners player can sell 的结果。

```csharp
// 静态调用，不需要实例
MobilePartyHelper.GetPlayerPrisonersPlayerCanSell();
```

### FillPartyManuallyAfterCreation
`public static void FillPartyManuallyAfterCreation(MobileParty mobileParty, PartyTemplateObject partyTemplate, int desiredMenCount)`

**用途 / Purpose:** 调用 FillPartyManuallyAfterCreation 对应的操作。

```csharp
// 静态调用，不需要实例
MobilePartyHelper.FillPartyManuallyAfterCreation(mobileParty, partyTemplate, 0);
```

### CanPartyAttackWithCurrentMorale
`public static bool CanPartyAttackWithCurrentMorale(MobileParty mobileParty)`

**用途 / Purpose:** 检查当前对象是否满足 party attack with current morale 的前置条件。

```csharp
// 静态调用，不需要实例
MobilePartyHelper.CanPartyAttackWithCurrentMorale(mobileParty);
```

### ResumePartyEscortBehaviorDelegate
`public delegate void ResumePartyEscortBehaviorDelegate()`

**用途 / Purpose:** 调用 ResumePartyEscortBehaviorDelegate 对应的操作。

```csharp
// 先通过子系统 API 拿到 MobilePartyHelper 实例
MobilePartyHelper mobilePartyHelper = ...;
mobilePartyHelper.ResumePartyEscortBehaviorDelegate();
```

## 使用示例

```csharp
MobilePartyHelper.Initialize();
```

## 参见

- [本区域目录](../)