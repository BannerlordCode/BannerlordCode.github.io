---
title: "MobilePartyHelper"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MobilePartyHelper`
- [← 本领域 / 返回 system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MobilePartyHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class MobilePartyHelper`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/Helpers/MobilePartyHelper.cs`

## 概述

`MobilePartyHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `MobilePartyHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### ResumePartyEscortBehaviorDelegate
`public delegate void ResumePartyEscortBehaviorDelegate()`

**用途 / Purpose:** 处理 `resume party escort behavior delegate` 相关逻辑。

### SpawnLordParty
`public static MobileParty SpawnLordParty(Hero hero, Settlement spawnSettlement)`

**用途 / Purpose:** 处理 `spawn lord party` 相关逻辑。

### SpawnLordParty
`public static MobileParty SpawnLordParty(Hero hero, CampaignVec2 position, float spawnRadius)`

**用途 / Purpose:** 处理 `spawn lord party` 相关逻辑。

### CreateNewClanMobileParty
`public static MobileParty CreateNewClanMobileParty(Hero hero, Clan clan)`

**用途 / Purpose:** 创建一个 `new clan mobile party` 实例或对象。

### GetHeroWithHighestSkill
`public static Hero GetHeroWithHighestSkill(MobileParty party, SkillObject skill)`

**用途 / Purpose:** 获取 `hero with highest skill` 的当前值。

### GetStrongestAndPriorTroops
`public static TroopRoster GetStrongestAndPriorTroops(MobileParty mobileParty, int maxTroopCount, bool includePlayer)`

**用途 / Purpose:** 获取 `strongest and prior troops` 的当前值。

### GetStrongestAndPriorTroops
`public static TroopRoster GetStrongestAndPriorTroops(FlattenedTroopRoster roster, int maxTroopCount, bool includePlayer)`

**用途 / Purpose:** 获取 `strongest and prior troops` 的当前值。

### GetMaximumXpAmountPartyCanGet
`public static int GetMaximumXpAmountPartyCanGet(MobileParty party)`

**用途 / Purpose:** 获取 `maximum xp amount party can get` 的当前值。

### PartyAddSharedXp
`public static void PartyAddSharedXp(MobileParty party, float xpToDistribute)`

**用途 / Purpose:** 处理 `party add shared xp` 相关逻辑。

### WoundNumberOfNonHeroTroopsRandomlyWithChanceOfDeath
`public static void WoundNumberOfNonHeroTroopsRandomlyWithChanceOfDeath(TroopRoster roster, int numberOfMen, float chanceOfDeathPerUnit, out int deathAmount)`

**用途 / Purpose:** 处理 `wound number of non hero troops randomly with chance of death` 相关逻辑。

### CanTroopGainXp
`public static bool CanTroopGainXp(PartyBase owner, CharacterObject character, out int gainableMaxXp)`

**用途 / Purpose:** 判断当前对象是否可以执行 `troop gain xp`。

### TryMatchPartySpeedWithItemWeight
`public static void TryMatchPartySpeedWithItemWeight(MobileParty party, float targetPartySpeed, ItemObject itemToUse = null)`

**用途 / Purpose:** 尝试获取 `match party speed with item weight`，通常以 out 参数返回结果。

### GetMainPartySkillCounsellor
`public static Hero GetMainPartySkillCounsellor(SkillObject skill)`

**用途 / Purpose:** 获取 `main party skill counsellor` 的当前值。

### GetCurrentSettlementOfMobilePartyForAICalculation
`public static Settlement GetCurrentSettlementOfMobilePartyForAICalculation(MobileParty mobileParty)`

**用途 / Purpose:** 获取 `current settlement of mobile party for a i calculation` 的当前值。

### GetPlayerPrisonersPlayerCanSell
`public static TroopRoster GetPlayerPrisonersPlayerCanSell()`

**用途 / Purpose:** 获取 `player prisoners player can sell` 的当前值。

### FillPartyManuallyAfterCreation
`public static void FillPartyManuallyAfterCreation(MobileParty mobileParty, PartyTemplateObject partyTemplate, int desiredMenCount)`

**用途 / Purpose:** 处理 `fill party manually after creation` 相关逻辑。

### CanPartyAttackWithCurrentMorale
`public static bool CanPartyAttackWithCurrentMorale(MobileParty mobileParty)`

**用途 / Purpose:** 判断当前对象是否可以执行 `party attack with current morale`。

## 使用示例

```csharp
MobilePartyHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)