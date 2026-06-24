<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSiegeEventModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultSiegeEventModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSiegeEventModel : SiegeEventModel`
**Base:** `SiegeEventModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultSiegeEventModel.cs`

## Overview

`DefaultSiegeEventModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultSiegeEventModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSiegeEngineMapPrefabName
`public override string GetSiegeEngineMapPrefabName(SiegeEngineType type, int wallLevel, BattleSideEnum side)`

**Purpose:** Gets the current value of `siege engine map prefab name`.

### GetSiegeEngineMapProjectilePrefabName
`public override string GetSiegeEngineMapProjectilePrefabName(SiegeEngineType type)`

**Purpose:** Gets the current value of `siege engine map projectile prefab name`.

### GetSiegeEngineMapReloadAnimationName
`public override string GetSiegeEngineMapReloadAnimationName(SiegeEngineType type, BattleSideEnum side)`

**Purpose:** Gets the current value of `siege engine map reload animation name`.

### GetSiegeEngineMapFireAnimationName
`public override string GetSiegeEngineMapFireAnimationName(SiegeEngineType type, BattleSideEnum side)`

**Purpose:** Gets the current value of `siege engine map fire animation name`.

### GetSiegeEngineMapProjectileBoneIndex
`public override sbyte GetSiegeEngineMapProjectileBoneIndex(SiegeEngineType type, BattleSideEnum side)`

**Purpose:** Gets the current value of `siege engine map projectile bone index`.

### GetEffectiveSiegePartyForSide
`public override MobileParty GetEffectiveSiegePartyForSide(SiegeEvent siegeEvent, BattleSideEnum battleSide)`

**Purpose:** Gets the current value of `effective siege party for side`.

### GetCasualtyChance
`public override float GetCasualtyChance(MobileParty siegeParty, SiegeEvent siegeEvent, BattleSideEnum side)`

**Purpose:** Gets the current value of `casualty chance`.

### GetSiegeEngineDestructionCasualties
`public override int GetSiegeEngineDestructionCasualties(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType destroyedSiegeEngine)`

**Purpose:** Gets the current value of `siege engine destruction casualties`.

### GetColleteralDamageCasualties
`public override int GetColleteralDamageCasualties(SiegeEngineType siegeEngineType, MobileParty party)`

**Purpose:** Gets the current value of `colleteral damage casualties`.

### GetSiegeEngineHitChance
`public override float GetSiegeEngineHitChance(SiegeEngineType siegeEngineType, BattleSideEnum battleSide, SiegeBombardTargets target, Town town)`

**Purpose:** Gets the current value of `siege engine hit chance`.

### GetSiegeStrategyScore
`public override float GetSiegeStrategyScore(SiegeEvent siege, BattleSideEnum side, SiegeStrategy strategy)`

**Purpose:** Gets the current value of `siege strategy score`.

### GetConstructionProgressPerHour
`public override float GetConstructionProgressPerHour(SiegeEngineType type, SiegeEvent siegeEvent, ISiegeEventSide side)`

**Purpose:** Gets the current value of `construction progress per hour`.

### GetAvailableManDayPower
`public override float GetAvailableManDayPower(ISiegeEventSide side)`

**Purpose:** Gets the current value of `available man day power`.

### GetPrebuiltSiegeEnginesOfSettlement
`public override IEnumerable<SiegeEngineType> GetPrebuiltSiegeEnginesOfSettlement(Settlement settlement)`

**Purpose:** Gets the current value of `prebuilt siege engines of settlement`.

### GetPrebuiltSiegeEnginesOfSiegeCamp
`public override IEnumerable<SiegeEngineType> GetPrebuiltSiegeEnginesOfSiegeCamp(BesiegerCamp besiegerCamp)`

**Purpose:** Gets the current value of `prebuilt siege engines of siege camp`.

### GetSiegeEngineHitPoints
`public override float GetSiegeEngineHitPoints(SiegeEvent siegeEvent, SiegeEngineType siegeEngine, BattleSideEnum battleSide)`

**Purpose:** Gets the current value of `siege engine hit points`.

### GetSiegeEngineDamage
`public override float GetSiegeEngineDamage(SiegeEvent siegeEvent, BattleSideEnum battleSide, SiegeEngineType siegeEngine, SiegeBombardTargets target)`

**Purpose:** Gets the current value of `siege engine damage`.

### GetRangedSiegeEngineReloadTime
`public override int GetRangedSiegeEngineReloadTime(SiegeEvent siegeEvent, BattleSideEnum side, SiegeEngineType siegeEngine)`

**Purpose:** Gets the current value of `ranged siege engine reload time`.

### GetAvailableAttackerRangedSiegeEngines
`public override IEnumerable<SiegeEngineType> GetAvailableAttackerRangedSiegeEngines(PartyBase party)`

**Purpose:** Gets the current value of `available attacker ranged siege engines`.

### GetAvailableDefenderSiegeEngines
`public override IEnumerable<SiegeEngineType> GetAvailableDefenderSiegeEngines(PartyBase party)`

**Purpose:** Gets the current value of `available defender siege engines`.

### GetAvailableAttackerRamSiegeEngines
`public override IEnumerable<SiegeEngineType> GetAvailableAttackerRamSiegeEngines(PartyBase party)`

**Purpose:** Gets the current value of `available attacker ram siege engines`.

### GetAvailableAttackerTowerSiegeEngines
`public override IEnumerable<SiegeEngineType> GetAvailableAttackerTowerSiegeEngines(PartyBase party)`

**Purpose:** Gets the current value of `available attacker tower siege engines`.

### GetPriorityTroopsForSallyOutAmbush
`public override FlattenedTroopRoster GetPriorityTroopsForSallyOutAmbush()`

**Purpose:** Gets the current value of `priority troops for sally out ambush`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultSiegeEventModel>(new MyDefaultSiegeEventModel());
```

## See Also

- [Complete Class Catalog](../catalog)