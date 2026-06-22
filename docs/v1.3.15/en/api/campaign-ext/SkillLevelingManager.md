<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SkillLevelingManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SkillLevelingManager

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class SkillLevelingManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/SkillLevelingManager.cs`

## Overview

`SkillLevelingManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Methods

### OnCombatHit
```csharp
public static void OnCombatHit(CharacterObject affectorCharacter, CharacterObject affectedCharacter, CharacterObject captain, Hero commander, float speedBonusFromMovement, float shotDifficulty, WeaponComponentData affectorWeapon, float hitPointRatio, CombatXpModel.MissionTypeEnum missionType, bool isAffectorMounted, bool isTeamKill, bool isAffectorUnderCommand, float damageAmount, bool isFatal, bool isSiegeEngineHit, bool isHorseCharge, bool isSneakAttack)
```

### OnSiegeEngineDestroyed
```csharp
public static void OnSiegeEngineDestroyed(MobileParty party, SiegeEngineType destroyedSiegeEngine)
```

### OnWallBreached
```csharp
public static void OnWallBreached(MobileParty party)
```

### OnSimulationCombatKill
```csharp
public static void OnSimulationCombatKill(CharacterObject affectorCharacter, CharacterObject affectedCharacter, PartyBase affectorParty, PartyBase commanderParty)
```

### OnTradeProfitMade
```csharp
public static void OnTradeProfitMade(PartyBase party, int tradeProfit)
```

### OnTradeProfitMade
```csharp
public static void OnTradeProfitMade(Hero hero, int tradeProfit)
```

### OnSettlementProjectFinished
```csharp
public static void OnSettlementProjectFinished(Settlement settlement)
```

### OnSettlementGoverned
```csharp
public static void OnSettlementGoverned(Hero governor, Settlement settlement)
```

### OnInfluenceSpent
```csharp
public static void OnInfluenceSpent(Hero hero, float amountSpent)
```

### OnGainRelation
```csharp
public static void OnGainRelation(Hero hero, Hero gainedRelationWith, float relationChange, ChangeRelationAction.ChangeRelationDetail detail = ChangeRelationAction.ChangeRelationDetail.Default)
```

### OnTroopRecruited
```csharp
public static void OnTroopRecruited(Hero hero, int amount, int tier)
```

### OnBribeGiven
```csharp
public static void OnBribeGiven(int amount)
```

### OnBanditsRecruited
```csharp
public static void OnBanditsRecruited(MobileParty mobileParty, CharacterObject bandit, int count)
```

### OnMainHeroReleasedFromCaptivity
```csharp
public static void OnMainHeroReleasedFromCaptivity(float captivityTime)
```

### OnMainHeroTortured
```csharp
public static void OnMainHeroTortured()
```

### OnMainHeroDisguised
```csharp
public static void OnMainHeroDisguised(bool isNotCaught)
```

### OnRaid
```csharp
public static void OnRaid(MobileParty attackerParty, ItemRoster lootedItems)
```

### OnLoot
```csharp
public static void OnLoot(MobileParty attackerParty, MobileParty forcedParty, ItemRoster lootedItems, bool attacked)
```

### OnForceVolunteers
```csharp
public static void OnForceVolunteers(MobileParty attackerParty, PartyBase forcedParty)
```

### OnForceSupplies
```csharp
public static void OnForceSupplies(MobileParty attackerParty, ItemRoster lootedItems, bool attacked)
```

### OnPrisonerSell
```csharp
public static void OnPrisonerSell(MobileParty mobileParty, in TroopRoster prisonerRoster)
```

### OnSurgeryApplied
```csharp
public static void OnSurgeryApplied(MobileParty party, bool surgerySuccess, int troopTier)
```

### OnTacticsUsed
```csharp
public static void OnTacticsUsed(MobileParty party, float xp)
```

### OnHideoutSpotted
```csharp
public static void OnHideoutSpotted(MobileParty party, PartyBase spottedParty)
```

### OnTrackDetected
```csharp
public static void OnTrackDetected(Track track)
```

### OnTravelOnFoot
```csharp
public static void OnTravelOnFoot(Hero hero, float speed)
```

### OnTravelOnHorse
```csharp
public static void OnTravelOnHorse(Hero hero, float speed)
```

### OnTravelOnWater
```csharp
public static void OnTravelOnWater(Hero hero, float speed)
```

### OnAIPartiesTravel
```csharp
public static void OnAIPartiesTravel(Hero hero, bool isCaravanParty, TerrainType currentTerrainType)
```

### OnTraverseTerrain
```csharp
public static void OnTraverseTerrain(MobileParty mobileParty, TerrainType currentTerrainType)
```

## Usage Example

```csharp
// Typical usage of SkillLevelingManager (Manager)
SkillLevelingManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)