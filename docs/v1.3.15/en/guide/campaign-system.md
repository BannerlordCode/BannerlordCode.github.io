---
title: Campaign System
description: Complete guide to MobileParty, Kingdom, Clan, Settlement
---

# Campaign System

**Namespace**: TaleWorlds.CampaignSystem
**Key Classes**: `Campaign`, `CampaignGameStarter`, `MobileParty`, `Kingdom`, `Clan`, `Settlement`, `Hero`

## Overview

Bannerlord's Campaign is the macro level of the game, containing various activities on the world map. You need to understand core concepts like `MobileParty` (moving parties), `Kingdom` (kingdoms), `Clan` (clans), and `Settlement` (settlements).

## Core Concepts

| Concept | Class | Description |
|---------|-------|-------------|
| Campaign | `Campaign` | Global campaign manager |
| Game Starter | `CampaignGameStarter` | Campaign initialization |
| Mobile Party | `MobileParty` | Moving units on map (armies, caravans) |
| Kingdom | `Kingdom` | Political entity |
| Clan | `Clan` | Family/faction |
| Settlement | `Settlement` | Towns, castles, villages |
| Hero | `Hero` | Important characters (player, NPCs) |

## Contents

1. [CampaignGameStarter](#campaigngamestarter)
2. [MobileParty System](#obileparty-system)
3. [Settlement and Kingdom](#settlement-and-kingdom)
4. [Clan and Hero](#clan-and-hero)
5. [Campaign Events](#campaign-events)
6. [Save Integration](#save-integration)
7. [Related API](#related-api)

---

## CampaignGameStarter

### Add Custom Behavior

```csharp
public class MyCampaignBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // Register event listeners
        CampaignEvents.OnGameLoaded.AddNonSerializedListener(this, OnGameLoaded);
        CampaignEvents.HeroKilled.AddNonSerializedListener(this, OnHeroKilled);
    }
    
    public override void SyncData(IDataStore dataStore)
    {
        // Sync save data
    }
    
    private void OnGameLoaded(CampaignGameStarter starter)
    {
        // Game loaded
    }
    
    private void OnHeroKilled(Hero hero, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification)
    {
        // Hero killed event
    }
}
```

### Register Behavior

```csharp
// In SubModule
protected override void OnGameStart(Game game, IGameStarter gameStarter)
{
    base.OnGameStart(game, gameStarter);
    
    if (game.GameType is Campaign)
    {
        // Add campaign behavior
        gameStarter.AddBehavior(new MyCampaignBehavior());
    }
}
```

### Lifecycle

```
Game Start (Campaign)
    │
    ├─► CampaignGameStarter.Initialize()  ← Initialize
    │
    ├─► CampaignBehaviorBase.RegisterEvents() ← Register events
    │
    ├─► CampaignBehaviorBase.OnGameLoaded() ← Game loaded
    │
    ├─► CampaignBehaviorBase.OnNewGameCreated() ← New game created
    │
    └─► CampaignBehaviorBase.SyncData() ← Save sync
```

---

## MobileParty System

### MobileParty Overview

`MobileParty` is a unit that moves on the map, including player armies, AI armies, caravans, etc.

### Create MobileParty

```csharp
// Create new party
MobileParty newParty = MobileParty.CreateParty("MyParty", 
    new PartyTemplateLogic("my_party_template"), out bool success);

if (success)
{
    // Set position
    newParty.Position2D = new Vec2(x, y);
    
    // Set members
    newParty.AddMembers(newParty.AddedMembersToRoster(hero, 1));
    
    // Set inventory
    newParty.Party.AddItemToRoster(item, 10);
}
```

### Party Movement

```csharp
// Set movement target
newParty.SetMoveGoToParty(targetSettlement);

// Stop movement
newParty.Stop();


// Party AI
newParty.DefaultBehaviour = PartyAIState.PartyAIStateFlags.DoNotMakeAIOfficerRequests;
newParty.Ai.SetDoNotAdvanceEnemyLastTargetedPosition();
```

### Party Properties

```csharp
// Members
int memberCount = party.MemberCount;
int prisonerCount = party.PrisonerCount;

// Combat power
float militaryPower = party.MilitaryPower;

// Gold
party.PartyTradeGold = 1000;

// Speed
float speed = party.Speed;
```

---

## Settlement and Kingdom

### Settlement Types

```csharp
// Get all settlements
List<Settlement> allSettlements = Settlement.All;

// Filter by type
List<Town> towns = Settlement.All.Where(s => s.IsTown).Cast<Town>().ToList();
List<Castle> castles = Settlement.All.Where(s => s.IsCastle).Cast<Castle>().ToList();
List<Village> villages = Settlement.All.Where(s => s.IsVillage).Cast<Village>().ToList();

// Find nearest settlement
Settlement nearest = Settlement.FindNearestToPosition(position);
```

### Settlement Properties

```csharp
Town town = settlement as Town;
if (town != null)
{
    // Prosperity
    float prosperity = townProsperity;
    
    // Garrison
    int garrison = town.GarrisonParty.MemberCount;
    
    // Trade
    float tradeBonus = town.TradeBonus;
    
    // Owner
    Kingdom owner = town.Kingdom;
}
```

### Kingdom

```csharp
// Get all kingdoms
List<Kingdom> kingdoms = Kingdom.All;

// Create new kingdom
Kingdom newKingdom = Kingdom.CreateKingdom("MyKingdom");

// Policies
newKingdom.AddPolicy("my_policy");

// Declare war / make peace
newKingdom.DeclareWar(otherKingdom);
newKingdom.MakePeace(otherKingdom);
```

---

## Clan and Hero

### Clan

```csharp
// Get player's clan
Clan playerClan = Clan.PlayerClan;

// Influence
float influence = playerClan.Influence;

// Members
Hero leader = playerClan.Leader;
List<Hero> members = playerClan.Heroes;

// Relations
float relation = playerClan.GetRelationWithClan(otherClan);
```

### Hero

```csharp
// Get player hero
Hero playerHero = Hero.MainHero;

// Attributes
int level = playerHero.Level;
CharacterObject character = playerHero.CharacterObject;

// Skills
SkillObject skill = Skills.All.FirstOrDefault(s => s.Name == "OneHanded");
int skillValue = playerHero.GetSkillValue(skill);

// Equipment
ItemObject weapon = playerHero.Equipment[EquipmentIndex.WeaponItemPrimarySlot];

// Modify hero
playerHero.AddSkillXp("OneHanded", 100);
playerHero.ChangeHeroGold(500);
```

### Create New Hero

```csharp
// Create new hero
Hero newHero = Hero.CreateHero("Name", culture, gender);

// Set attributes
newHero.Level = 1;
newHero.HeroDeveloper.DevelopCharacterStats(newCharacterObject, 10, false);

// Add to clan
newHero.Clan = playerClan;
```

---

## Campaign Events

### Common Events

```csharp
public override void RegisterEvents()
{
    // Unit related
    CampaignEvents.OnUnitJoinedParty.AddNonSerializedListener(this, OnUnitJoined);
    CampaignEvents.OnUnitLeftParty.AddNonSerializedListener(this, OnUnitLeft);
    
    // Battle related
    CampaignEvents.BattleEnded.AddNonSerializedListener(this, OnBattleEnded);
    CampaignEvents.MobilePartyCreated.AddNonSerializedListener(this, OnPartyCreated);
    
    // Hero related
    CampaignEvents.HeroKilled.AddNonSerializedListener(this, OnHeroKilled);
    CampaignEvents.HeroLevelledUp.AddNonSerializedListener(this, OnHeroLevelled);
    
    // Trade related
    CampaignEvents.PlayerTradeGoodsPurchased.AddNonSerializedListener(this, OnTrade);
    
    // Periodic triggers
    CampaignEvents.DailyTickParty.AddNonSerializedListener(this, OnDailyTick);
    CampaignEvents.WeeklyTick.AddNonSerializedListener(this, OnWeeklyTick);
}

private void OnBattleEnded(MapEvent mapEvent, bool isPlayerWinner)
{
    // Battle ended
}

private void OnHeroKilled(Hero hero, Hero killer, ...)
{
    // Hero killed
}
```

### CampaignEventType List

| Event | Description |
|-------|-------------|
| `OnGameLoaded` | Game loaded |
| `OnNewGameCreated` | New game created |
| `OnUnitJoinedParty` | Unit joined party |
| `OnUnitLeftParty` | Unit left party |
| `BattleEnded` | Battle ended |
| `MobilePartyCreated` | Party created |
| `HeroKilled` | Hero killed |
| `HeroLevelledUp` | Hero leveled up |
| `DailyTickParty` | Daily party update |
| `WeeklyTick` | Weekly update |

---

## Save Integration

### Ensure Data Can Be Saved

```csharp
[SaveableClass(1)]
public class MyCampaignData : CampaignBehaviorBase
{
    [SaveableField(1)]
    private int _myCustomValue;
    
    [SaveableField(2)]
    private string _myCustomString;
    
    public override void SyncData(IDataStore dataStore)
    {
        // Manual sync (v1.3.0 style)
        dataStore.SyncData("MyCustomValue", ref _myCustomValue);
        dataStore.SyncData("MyCustomString", ref _myCustomString);
    }
}
```

### v1.3.15 SaveSystem Integration

```csharp
// In v1.3.15, TaleWorlds.SaveSystem is recommended
[SaveableClass(1, 100)]
public class MySaveableData
{
    [SaveableField(1)]
    public int Score;
}
```

---

## Related API

- [Campaign API](../api/campaign-ext/Campaign.md)
- [MobileParty API](../api/campaign/MobileParty.md)
- [Kingdom API](../api/campaign/Kingdom.md)
- [Clan API](../api/campaign/Clan.md)
- [Settlement API](../api/campaign-ext/Settlement.md)

---

## Next Section

- [Save System](./save-system-guide.md) - Ensure your data saves correctly
- [Mission System](./mission-system.md) - Customize battles
