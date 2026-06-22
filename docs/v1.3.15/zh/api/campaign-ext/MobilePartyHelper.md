<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MobilePartyHelper`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MobilePartyHelper

**命名空间:** Helpers
**模块:** Helpers
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`MobilePartyHelper` 是 `Helpers` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### SpawnLordParty

```csharp
public static MobileParty SpawnLordParty(Hero hero, Settlement spawnSettlement)
```

### SpawnLordParty

```csharp
public static MobileParty SpawnLordParty(Hero hero, CampaignVec2 position, float spawnRadius)
```

### CreateNewClanMobileParty

```csharp
public static MobileParty CreateNewClanMobileParty(Hero hero, Clan clan)
```

### IsHeroAssignableForScoutInParty

```csharp
public static bool IsHeroAssignableForScoutInParty(Hero hero, MobileParty party)
```

### IsHeroAssignableForEngineerInParty

```csharp
public static bool IsHeroAssignableForEngineerInParty(Hero hero, MobileParty party)
```

### IsHeroAssignableForSurgeonInParty

```csharp
public static bool IsHeroAssignableForSurgeonInParty(Hero hero, MobileParty party)
```

### IsHeroAssignableForQuartermasterInParty

```csharp
public static bool IsHeroAssignableForQuartermasterInParty(Hero hero, MobileParty party)
```

### GetHeroWithHighestSkill

```csharp
public static Hero GetHeroWithHighestSkill(MobileParty party, SkillObject skill)
```

### GetStrongestAndPriorTroops

```csharp
public static TroopRoster GetStrongestAndPriorTroops(MobileParty mobileParty, int maxTroopCount, bool includePlayer)
```

### GetStrongestAndPriorTroops

```csharp
public static TroopRoster GetStrongestAndPriorTroops(FlattenedTroopRoster roster, int maxTroopCount, bool includePlayer)
```

### GetMaximumXpAmountPartyCanGet

```csharp
public static int GetMaximumXpAmountPartyCanGet(MobileParty party)
```

### PartyAddSharedXp

```csharp
public static void PartyAddSharedXp(MobileParty party, float xpToDistribute)
```

### WoundNumberOfNonHeroTroopsRandomlyWithChanceOfDeath

```csharp
public static void WoundNumberOfNonHeroTroopsRandomlyWithChanceOfDeath(TroopRoster roster, int numberOfMen, float chanceOfDeathPerUnit, out int deathAmount)
```

### CanTroopGainXp

```csharp
public static bool CanTroopGainXp(PartyBase owner, CharacterObject character, out int gainableMaxXp)
```

### TryMatchPartySpeedWithItemWeight

```csharp
public static void TryMatchPartySpeedWithItemWeight(MobileParty party, float targetPartySpeed, ItemObject itemToUse = null)
```

### GetMainPartySkillCounsellor

```csharp
public static Hero GetMainPartySkillCounsellor(SkillObject skill)
```

### GetCurrentSettlementOfMobilePartyForAICalculation

```csharp
public static Settlement GetCurrentSettlementOfMobilePartyForAICalculation(MobileParty mobileParty)
```

### GetPlayerPrisonersPlayerCanSell

```csharp
public static TroopRoster GetPlayerPrisonersPlayerCanSell()
```

### FillPartyManuallyAfterCreation

```csharp
public static void FillPartyManuallyAfterCreation(MobileParty mobileParty, PartyTemplateObject partyTemplate, int desiredMenCount)
```

### CanPartyAttackWithCurrentMorale

```csharp
public static bool CanPartyAttackWithCurrentMorale(MobileParty mobileParty)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)