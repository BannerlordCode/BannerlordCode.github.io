# Workshop / 作坊

**Namespace**: TaleWorlds.CampaignSystem.Settlements.Workshops  
**File**: `bannerlord-1.3.15/TaleWorlds.CampaignSystem/Settlements/Workshops/Workshop.cs`  
**Purpose**: Economic building that produces goods and generates profit

## Overview / 概述

Workshop represents a player-owned or NPC-owned workshop in a settlement. Workshops produce goods based on their type, consume resources, and generate profit. They are an important part of the game's economic system.

Workshop代表定居点中由玩家或NPC拥有的作坊。作坊根据其类型生产商品，消耗资源并产生利润。它们是游戏经济系统的重要组成部分。

## 关键属性 / Key Properties

| Property | Type | Description |
|----------|------|-------------|
| `WorkshopType` | `WorkshopType` | Type of workshop |
| `Owner` | `Hero` | Owner of the workshop |
| `Settlement` | `Settlement` | Settlement containing this workshop |
| `Name` | `TextObject` | Workshop name |
| `Capital` | `int` | Current capital |
| `InitialCapital` | `int` | Starting capital |
| `ProfitMade` | `int` | Total profit (Capital minus InitialCapital) |
| `Expense` | `int` | Daily expense |
| `LastRunCampaignTime` | `CampaignTime` | Last production run time |
| `Tag` | `string` | Workshop identifier tag |

## 关键方法 / Key Methods

| Method | Description |
|--------|-------------|
| `InitializeWorkshop(Hero owner, WorkshopType type)` | Initialize with owner and type |
| `ChangeOwnerOfWorkshop(Hero newOwner, WorkshopType type, int capital)` | Change workshop owner |
| `ChangeWorkshopProduction(WorkshopType newWorkshopType)` | Change production type |
| `ChangeGold(int goldChange)` | Adjust capital |
| `SetCustomName(TextObject customName)` | Set custom name |
| `UpdateLastRunTime()` | Update last run time |
| `GetProductionProgress(int index)` | Get production progress for input index |
| `SetProgress(int index, float value)` | Set production progress |

## 使用示例 / Usage Example

```csharp
// Get workshop from settlement
Settlement settlement = Settlement.Find("town_Epiphany");
if (settlement == null || settlement.OwnerClan == null)
{
    return;
}

// Find workshops owned by a clan
foreach (Hero hero in settlement.HeroesWithoutParty)
{
    foreach (Workshop workshop in hero.OwnedWorkshops)
    {
        Debug.Print("Workshop: " + workshop.Name);
        Debug.Print("Type: " + workshop.WorkshopType.Name);
        Debug.Print("Capital: " + workshop.Capital);
        Debug.Print("Profit: " + workshop.ProfitMade);
    }
}

// Check workshop type
WorkshopType type = workshop.WorkshopType;
Debug.Print("Productions: " + type.Productions.Count);

// Access capital info
int currentCapital = workshop.Capital;
int initialCapital = workshop.InitialCapital;
int profit = workshop.ProfitMade;

// Change workshop production
WorkshopType newType = WorkshopType.Find("workshop_type_smithy");
if (newType != null)
{
    workshop.ChangeWorkshopProduction(newType);
}

// Change owner
Hero newOwner = Hero.Find("npc_hero_1");
if (newOwner != null)
{
    workshop.ChangeOwnerOfWorkshop(newOwner, workshop.WorkshopType, workshop.Capital);
}
```

## WorkshopType

| Property | Type | Description |
|----------|------|-------------|
| `Name` | `TextObject` | Workshop type name |
| `Productions` | `List` | Production inputs/outputs |
| `Cost` | `int` | Setup cost |
| `BuildingAcceptable` | `bool` | Can be built in towns |

## WorkshopProduction

| Property | Type | Description |
|----------|------|-------------|
| `InputItem1` | `ItemObject` | First input material |
| `InputCount1` | `int` | First input count |
| `InputItem2` | `ItemObject` | Second input material |
| `InputCount2` | `int` | Second input count |
| `Output` | `ItemObject` | Output product |
| `OutputCount` | `int` | Output count |
| `ProcessTime` | `float` | Time to produce |

## 默认作坊类型 / Default Workshop Types

| Type ID | Description |
|---------|-------------|
| `workshop_type_smithy` | Weapons and armor |
| `workshop_type_horse_ranch` | Horses |
| `workshop_type_weaver` | Cloth items |
| `workshop_type_tannery` | Leather items |
| `workshop_type_brewery` | Drinks |
| `workshop_type_winery` | Wine |
| `workshop_type_oil_press` | Oil |
| `workshop_type_mill` | Grain processing |
