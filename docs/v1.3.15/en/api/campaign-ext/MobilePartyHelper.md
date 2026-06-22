<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MobilePartyHelper`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MobilePartyHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `MobilePartyHelper` is a class in the `Helpers` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)