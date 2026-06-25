---
title: "Clan"
description: "Auto-generated class reference for Clan."
---
# Clan

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class Clan : MBObjectBase, IFaction`
**Base:** `MBObjectBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/Clan.cs`

## Overview

`Clan` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `InformalName` | `public TextObject InformalName { get; }` |
| `Culture` | `public CultureObject Culture { get; set; }` |
| `LastFactionChangeTime` | `public CampaignTime LastFactionChangeTime { get; set; }` |
| `DefaultPartyTemplate` | `public PartyTemplateObject DefaultPartyTemplate { get; }` |
| `AutoRecruitmentExpenses` | `public int AutoRecruitmentExpenses { get; }` |
| `EncyclopediaText` | `public TextObject EncyclopediaText { get; }` |
| `IsNoble` | `public bool IsNoble { get; set; }` |
| `Kingdom` | `public Kingdom Kingdom { get; set; }` |
| `DungeonPrisonersOfClan` | `public IEnumerable<CharacterObject> DungeonPrisonersOfClan { get; }` |
| `Influence` | `public float Influence { get; set; }` |
| `CurrentTotalStrength` | `public float CurrentTotalStrength { get; }` |
| `MercenaryAwardMultiplier` | `public int MercenaryAwardMultiplier { get; }` |
| `InitialHomeSettlement` | `public Settlement InitialHomeSettlement { get; }` |
| `IsRebelClan` | `public bool IsRebelClan { get; }` |
| `IsMinorFaction` | `public bool IsMinorFaction { get; }` |
| `IsOutlaw` | `public bool IsOutlaw { get; }` |
| `IsNomad` | `public bool IsNomad { get; }` |
| `IsMafia` | `public bool IsMafia { get; }` |
| `IsClanTypeMercenary` | `public bool IsClanTypeMercenary { get; }` |
| `IsSect` | `public bool IsSect { get; }` |
| `IsUnderMercenaryService` | `public bool IsUnderMercenaryService { get; }` |
| `ShouldStayInKingdomUntil` | `public CampaignTime ShouldStayInKingdomUntil { get; set; }` |
| `Color` | `public uint Color { get; set; }` |
| `Color2` | `public uint Color2 { get; set; }` |
| `BasicTroop` | `public CharacterObject BasicTroop { get; set; }` |
| `Banner` | `public Banner Banner { get; set; }` |
| `IsBanditFaction` | `public bool IsBanditFaction { get; }` |
| `Renown` | `public float Renown { get; set; }` |
| `MainHeroCrimeRating` | `public float MainHeroCrimeRating { get; set; }` |
| `Tier` | `public int Tier { get; }` |
| `MapFaction` | `public IFaction MapFaction { get; set; }` |
| `NotAttackableByPlayerUntilTime` | `public CampaignTime NotAttackableByPlayerUntilTime { get; set; }` |
| `Aggressiveness` | `public float Aggressiveness { get; set; }` |
| `TributeWallet` | `public int TributeWallet { get; }` |
| `HomeSettlement` | `public Settlement HomeSettlement { get; }` |
| `DebtToKingdom` | `public int DebtToKingdom { get; set; }` |
| `DistanceToClosestNonAllyFortification` | `public float DistanceToClosestNonAllyFortification { get; }` |
| `NonBanditFactions` | `public static IEnumerable<Clan> NonBanditFactions { get; }` |
| `BanditFactions` | `public static IEnumerable<Clan> BanditFactions { get; }` |

## Key Methods

### UpdateFactionsAtWarWith
`public void UpdateFactionsAtWarWith()`

**Purpose:** Recalculates and stores the latest representation of `factions at war with`.

```csharp
// Obtain an instance of Clan from the subsystem API first
Clan clan = ...;
clan.UpdateFactionsAtWarWith();
```

### UpdateCurrentStrength
`public void UpdateCurrentStrength()`

**Purpose:** Recalculates and stores the latest representation of `current strength`.

```csharp
// Obtain an instance of Clan from the subsystem API first
Clan clan = ...;
clan.UpdateCurrentStrength();
```

### IsAtWarWith
`public bool IsAtWarWith(IFaction other)`

**Purpose:** Determines whether the current object is in the `at war with` state or condition.

```csharp
// Obtain an instance of Clan from the subsystem API first
Clan clan = ...;
var result = clan.IsAtWarWith(other);
```

### CreateClan
`public static Clan CreateClan(string stringID)`

**Purpose:** Constructs a new `clan` entity and returns it to the caller.

```csharp
// Static call; no instance required
Clan.CreateClan("example");
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores the current object from serialized data.

```csharp
// Obtain an instance of Clan from the subsystem API first
Clan clan = ...;
clan.Deserialize(objectManager, node);
```

### GetRelationWithClan
`public int GetRelationWithClan(Clan other)`

**Purpose:** Reads and returns the `relation with clan` value held by the current object.

```csharp
// Obtain an instance of Clan from the subsystem API first
Clan clan = ...;
var result = clan.GetRelationWithClan(other);
```

### SetLeader
`public void SetLeader(Hero leader)`

**Purpose:** Assigns a new value to `leader` and updates the object's internal state.

```csharp
// Obtain an instance of Clan from the subsystem API first
Clan clan = ...;
clan.SetLeader(leader);
```

### SetInitialHomeSettlement
`public void SetInitialHomeSettlement(Settlement initialHomeSettlement)`

**Purpose:** Assigns a new value to `initial home settlement` and updates the object's internal state.

```csharp
// Obtain an instance of Clan from the subsystem API first
Clan clan = ...;
clan.SetInitialHomeSettlement(initialHomeSettlement);
```

### ConsiderAndUpdateHomeSettlement
`public void ConsiderAndUpdateHomeSettlement()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Clan from the subsystem API first
Clan clan = ...;
clan.ConsiderAndUpdateHomeSettlement();
```

### GetName
`public override TextObject GetName()`

**Purpose:** Reads and returns the `name` value held by the current object.

```csharp
// Obtain an instance of Clan from the subsystem API first
Clan clan = ...;
var result = clan.GetName();
```

### ChangeClanName
`public void ChangeClanName(TextObject name, TextObject informalName)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Clan from the subsystem API first
Clan clan = ...;
clan.ChangeClanName(name, informalName);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of Clan from the subsystem API first
Clan clan = ...;
var result = clan.ToString();
```

### GetStanceWith
`public StanceLink GetStanceWith(IFaction other)`

**Purpose:** Reads and returns the `stance with` value held by the current object.

```csharp
// Obtain an instance of Clan from the subsystem API first
Clan clan = ...;
var result = clan.GetStanceWith(other);
```

### ClanLeaveKingdom
`public void ClanLeaveKingdom(bool giveBackFiefs = false)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Clan from the subsystem API first
Clan clan = ...;
clan.ClanLeaveKingdom(false);
```

### CalculateTotalSettlementBaseValue
`public float CalculateTotalSettlementBaseValue()`

**Purpose:** Calculates the current value or result of `total settlement base value`.

```csharp
// Obtain an instance of Clan from the subsystem API first
Clan clan = ...;
var result = clan.CalculateTotalSettlementBaseValue();
```

### StartMercenaryService
`public void StartMercenaryService()`

**Purpose:** Starts the `mercenary service` flow or state machine.

```csharp
// Obtain an instance of Clan from the subsystem API first
Clan clan = ...;
clan.StartMercenaryService();
```

### ResetPlayerHomeAndFactionMidSettlement
`public void ResetPlayerHomeAndFactionMidSettlement()`

**Purpose:** Returns `player home and faction mid settlement` to its default or initial condition.

```csharp
// Obtain an instance of Clan from the subsystem API first
Clan clan = ...;
clan.ResetPlayerHomeAndFactionMidSettlement();
```

### FindFirst
`public static Clan FindFirst(Predicate<Clan> predicate)`

**Purpose:** Looks up the matching `first` in the current collection or scope.

```csharp
// Static call; no instance required
Clan.FindFirst(predicate);
```

### EndMercenaryService
`public void EndMercenaryService(bool isByLeavingKingdom)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Clan from the subsystem API first
Clan clan = ...;
clan.EndMercenaryService(false);
```

### FindAll
`public static IEnumerable<Clan> FindAll(Predicate<Clan> predicate)`

**Purpose:** Looks up the matching `all` in the current collection or scope.

```csharp
// Static call; no instance required
Clan.FindAll(predicate);
```

### CalculateTotalSettlementValueForFaction
`public float CalculateTotalSettlementValueForFaction(Kingdom kingdom)`

**Purpose:** Calculates the current value or result of `total settlement value for faction`.

```csharp
// Obtain an instance of Clan from the subsystem API first
Clan clan = ...;
var result = clan.CalculateTotalSettlementValueForFaction(kingdom);
```

### OnHeroChangedState
`public void OnHeroChangedState(Hero hero, Hero.CharacterStates oldState)`

**Purpose:** Invoked when the `hero changed state` event is raised.

```csharp
// Obtain an instance of Clan from the subsystem API first
Clan clan = ...;
clan.OnHeroChangedState(hero, oldState);
```

### AddRenown
`public void AddRenown(float value, bool shouldNotify = true)`

**Purpose:** Adds `renown` to the current collection or state.

```csharp
// Obtain an instance of Clan from the subsystem API first
Clan clan = ...;
clan.AddRenown(0, false);
```

### ResetClanRenown
`public void ResetClanRenown()`

**Purpose:** Returns `clan renown` to its default or initial condition.

```csharp
// Obtain an instance of Clan from the subsystem API first
Clan clan = ...;
clan.ResetClanRenown();
```

### OnSupportedByClan
`public void OnSupportedByClan(Clan supporterClan)`

**Purpose:** Invoked when the `supported by clan` event is raised.

```csharp
// Obtain an instance of Clan from the subsystem API first
Clan clan = ...;
clan.OnSupportedByClan(supporterClan);
```

### CreateSettlementRebelClan
`public static Clan CreateSettlementRebelClan(Settlement settlement, Hero owner, int iconMeshId = -1)`

**Purpose:** Constructs a new `settlement rebel clan` entity and returns it to the caller.

```csharp
// Static call; no instance required
Clan.CreateSettlementRebelClan(settlement, owner, 0);
```

### CalculateMidSettlement
`public void CalculateMidSettlement()`

**Purpose:** Calculates the current value or result of `mid settlement`.

```csharp
// Obtain an instance of Clan from the subsystem API first
Clan clan = ...;
clan.CalculateMidSettlement();
```

### CreateCompanionToLordClan
`public static Clan CreateCompanionToLordClan(Hero hero, Settlement settlement, TextObject clanName, int newClanIconId)`

**Purpose:** Constructs a new `companion to lord clan` entity and returns it to the caller.

```csharp
// Static call; no instance required
Clan.CreateCompanionToLordClan(hero, settlement, clanName, 0);
```

### GetHeirApparents
`public Dictionary<Hero, int> GetHeirApparents()`

**Purpose:** Reads and returns the `heir apparents` value held by the current object.

```csharp
// Obtain an instance of Clan from the subsystem API first
Clan clan = ...;
var result = clan.GetHeirApparents();
```

### UpdateBannerColor
`public void UpdateBannerColor(uint backgroundColor, uint iconColor)`

**Purpose:** Recalculates and stores the latest representation of `banner color`.

```csharp
// Obtain an instance of Clan from the subsystem API first
Clan clan = ...;
clan.UpdateBannerColor(0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Clan clan = ...;
clan.UpdateFactionsAtWarWith();
```

## See Also

- [Area Index](../)