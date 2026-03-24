# Settlement / 定居点

**Namespace**: TaleWorlds.CampaignSystem.Settlements  
**File**: `bannerlord-1.3.15/TaleWorlds.CampaignSystem/Settlements/Settlement.cs`  
**Purpose**: Represents locations in the game world including towns, castles, villages, and hideouts

## Overview / 概述

Settlement is the base class for all fixed locations in Bannerlord. It can represent towns, castles, villages, and hideouts. Each settlement has a party component, can contain buildings, workshops, and is associated with an owner faction.

Settlement是霸主中所有固定位置的基类。它可以表示城镇、城堡、村庄和藏身处。每个定居点都有一个队伍组件，可以包含建筑、作坊，并与一个所有者派系关联。

## 关键属性 / Key Properties

| Property | Type | Description |
|----------|------|-------------|
| `Party` | `PartyBase` | The settlement's party |
| `Town` | `Town` | Town component (null if not a town) |
| `Village` | `Village` | Village component (null if not a village) |
| `Hideout` | `Hideout` | Hideout component (null if not a hideout) |
| `Owner` | `Hero` | Owner of the settlement |
| `OwnerClan` | `Clan` | Clan that owns the settlement |
| `MapFaction` | `IFaction` | Faction controlling the settlement |
| `Name` | `TextObject` | Settlement name |
| `Position` | `CampaignVec2` | World position |
| `GatePosition` | `CampaignVec2` | Position of the gate |
| `PortPosition` | `CampaignVec2` | Position of the port |
| `Militia` | `float` | Current militia strength |
| `ItemRoster` | `ItemRoster` | Items in settlement |
| `Parties` | `MBReadOnlyList` | Parties at this settlement |
| `HeroesWithoutParty` | `MBReadOnlyList` | Heroes without party here |
| `Notables` | `MBReadOnlyList` | Notable NPCs in settlement |
| `BoundVillages` | `MBReadOnlyList` | Villages bound to this settlement |
| `SettlementComponent` | `SettlementComponent` | Component data |
| `Alleys` | `List` | Alley data |
| `LocationComplex` | `LocationComplex` | Location complex |
| `Stash` | `ItemRoster` | Stash for items |
| `SiegeEvent` | `SiegeEvent` | Current siege event |
| `CurrentSettlement` | `static Settlement` | Settlement player is currently in |
| `IsActive` | `bool` | Is settlement active |
| `IsInspected` | `bool` | Has player inspected this |
| `HasVisited` | `bool` | Has player visited this |
| `HasPort` | `bool` | Has a port |

## 类型属性 / Type Properties (Read-only)

| Property | Description |
|----------|-------------|
| `IsTown` | True if settlement is a town |
| `IsCastle` | True if settlement is a castle |
| `IsFortification` | True if town or castle |
| `IsVillage` | True if settlement is a village |
| `IsHideout` | True if settlement is a hideout |
| `IsStarving` | True if town has no food |
| `IsRaided` | True if village is raided |
| `IsUnderRaid` | True if under raid attack |
| `IsUnderSiege` | True if under siege |
| `InRebelliousState` | True if in rebellion |

## 关键方法 / Key Methods

| Method | Description |
|--------|-------------|
| `GetSettlementValueForEnemyHero(Hero hero)` | Get settlement value for an enemy hero |
| `GetValue(Hero hero, bool countAlsoBoundedSettlements)` | Get total value |
| `IsSettlementBusy(object asker)` | Check if settlement is busy |
| `GetSettlementBusynessPriority(object asker)` | Get busyness priority |
| `SetGarrisonWagePaymentLimit(int limit)` | Set garrison wage limit |
| `SetWallSectionHitPointsRatioAtIndex(int index, float ratio)` | Set wall section HP |
| `GetPositionAsVec3()` | Get position as Vec3 |

## 使用示例 / Usage Example

```csharp
// Get current settlement
Settlement current = Settlement.CurrentSettlement;
if (current != null)
{
    Debug.Print("At: " + current.Name);
}

// Check settlement type
Settlement settlement = Campaign.Current.Settlements.First();
if (settlement.IsTown)
{
    Town town = settlement.Town;
    Debug.Print("Prosperity: " + town.Prosperity);
}
else if (settlement.IsCastle)
{
    Debug.Print("This is a castle");
}
else if (settlement.IsVillage)
{
    Village village = settlement.Village;
    Debug.Print("Village state: " + village.VillageState);
}

// Get all parties at settlement
foreach (MobileParty party in settlement.Parties)
{
    Debug.Print("Party: " + party.Name);
}

// Get militia
float militia = settlement.Militia;
Debug.Print("Militia: " + militia);

// Check siege status
if (settlement.IsUnderSiege)
{
    Debug.Print("Under siege!");
}

// Get bound villages
foreach (Village boundVillage in settlement.BoundVillages)
{
    Debug.Print("Bound: " + boundVillage.Name);
}
```

## SettlementComponent 类型 / SettlementComponent Types

The `SettlementComponent` property can be one of:

| Type | Description |
|------|-------------|
| `TownCenter` | Town center component |
| `Castle` | Castle component |
| `VillageCenter` | Village component |
| `Hideout` | Hideout component |

## 围攻属性 / Siege Properties

| Property | Type | Description |
|----------|------|-------------|
| `SiegeEvent` | `SiegeEvent` | Current siege |
| `SiegeEngines` | `SiegeEnginesContainer` | Siege engines |
| `SiegeEngineMissiles` | `MBReadOnlyList` | Engine missiles |
| `SiegeStrategy` | `SiegeStrategy` | Current strategy |
| `SettlementHitPoints` | `float` | Settlement HP |
| `MaxWallHitPoints` | `float` | Maximum wall HP |
| `WallSectionCount` | `int` | Number of wall sections |
| `SettlementTotalWallHitPoints` | `float` | Total wall HP |
