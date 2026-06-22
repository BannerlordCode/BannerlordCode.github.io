<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultSkillLevelingManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSkillLevelingManager

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSkillLevelingManager : ISkillLevelingManager`
**Base:** `ISkillLevelingManager`
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultSkillLevelingManager.cs`

## 概述

`DefaultSkillLevelingManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要方法

### OnCombatHit
```csharp
public void OnCombatHit(CharacterObject affectorCharacter, CharacterObject affectedCharacter, CharacterObject captain, Hero commander, float speedBonusFromMovement, float shotDifficulty, WeaponComponentData affectorWeapon, float hitPointRatio, CombatXpModel.MissionTypeEnum missionType, bool isAffectorMounted, bool isTeamKill, bool isAffectorUnderCommand, float damageAmount, bool isFatal, bool isSiegeEngineHit, bool isHorseCharge, bool isSneakAttack)
```

### OnSiegeEngineDestroyed
```csharp
public void OnSiegeEngineDestroyed(MobileParty party, SiegeEngineType destroyedSiegeEngine)
```

### OnSimulationCombatKill
```csharp
public void OnSimulationCombatKill(CharacterObject affectorCharacter, CharacterObject affectedCharacter, PartyBase affectorParty, PartyBase commanderParty)
```

### OnTradeProfitMade
```csharp
public void OnTradeProfitMade(PartyBase party, int tradeProfit)
```

### OnTradeProfitMade
```csharp
public void OnTradeProfitMade(Hero hero, int tradeProfit)
```

### OnSettlementProjectFinished
```csharp
public void OnSettlementProjectFinished(Settlement settlement)
```

### OnSettlementGoverned
```csharp
public void OnSettlementGoverned(Hero governor, Settlement settlement)
```

### OnInfluenceSpent
```csharp
public void OnInfluenceSpent(Hero hero, float amountSpent)
```

### OnGainRelation
```csharp
public void OnGainRelation(Hero hero, Hero gainedRelationWith, float relationChange, ChangeRelationAction.ChangeRelationDetail detail = ChangeRelationAction.ChangeRelationDetail.Default)
```

### OnTroopRecruited
```csharp
public void OnTroopRecruited(Hero hero, int amount, int tier)
```

### OnBribeGiven
```csharp
public void OnBribeGiven(int amount)
```

### OnBanditsRecruited
```csharp
public void OnBanditsRecruited(MobileParty mobileParty, CharacterObject bandit, int count)
```

### OnMainHeroReleasedFromCaptivity
```csharp
public void OnMainHeroReleasedFromCaptivity(float captivityTime)
```

### OnMainHeroTortured
```csharp
public void OnMainHeroTortured()
```

### OnMainHeroDisguised
```csharp
public void OnMainHeroDisguised(bool isNotCaught)
```

### OnRaid
```csharp
public void OnRaid(MobileParty attackerParty, ItemRoster lootedItems)
```

### OnLoot
```csharp
public void OnLoot(MobileParty attackerParty, MobileParty forcedParty, ItemRoster lootedItems, bool attacked)
```

### OnPrisonerSell
```csharp
public void OnPrisonerSell(MobileParty mobileParty, in TroopRoster prisonerRoster)
```

### OnSurgeryApplied
```csharp
public void OnSurgeryApplied(MobileParty party, bool surgerySuccess, int troopTier)
```

### OnTacticsUsed
```csharp
public void OnTacticsUsed(MobileParty party, float xp)
```

### OnHideoutSpotted
```csharp
public void OnHideoutSpotted(MobileParty party, PartyBase spottedParty)
```

### OnTrackDetected
```csharp
public void OnTrackDetected(Track track)
```

### OnTravelOnFoot
```csharp
public void OnTravelOnFoot(Hero hero, float speed)
```

### OnTravelOnHorse
```csharp
public void OnTravelOnHorse(Hero hero, float speed)
```

### OnHeroHealedWhileWaiting
```csharp
public void OnHeroHealedWhileWaiting(Hero hero, int healingAmount)
```

### OnRegularTroopHealedWhileWaiting
```csharp
public void OnRegularTroopHealedWhileWaiting(MobileParty mobileParty, int healedTroopCount, float averageTier)
```

### OnLeadingArmy
```csharp
public void OnLeadingArmy(MobileParty mobileParty)
```

### OnSieging
```csharp
public void OnSieging(MobileParty mobileParty)
```

### OnSiegeEngineBuilt
```csharp
public void OnSiegeEngineBuilt(MobileParty mobileParty, SiegeEngineType siegeEngine)
```

### OnUpgradeTroops
```csharp
public void OnUpgradeTroops(PartyBase party, CharacterObject troop, CharacterObject upgrade, int numberOfTroops)
```

## 使用示例

```csharp
// DefaultSkillLevelingManager (Manager) 的典型用法
DefaultSkillLevelingManager.Current;
```

## 参见

- [完整类目录](../catalog)