---
title: "Kingdom"
description: "Auto-generated class reference for Kingdom."
---
# Kingdom

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class Kingdom : MBObjectBase, IFaction`
**Base:** `MBObjectBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/Kingdom.cs`

## Overview

`Kingdom` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `InformalName` | `public TextObject InformalName { get; }` |
| `EncyclopediaText` | `public TextObject EncyclopediaText { get; }` |
| `EncyclopediaTitle` | `public TextObject EncyclopediaTitle { get; }` |
| `EncyclopediaRulerTitle` | `public TextObject EncyclopediaRulerTitle { get; }` |
| `Culture` | `public CultureObject Culture { get; }` |
| `InitialHomeSettlement` | `public Settlement InitialHomeSettlement { get; }` |
| `Color` | `public uint Color { get; }` |
| `Color2` | `public uint Color2 { get; }` |
| `PrimaryBannerColor` | `public uint PrimaryBannerColor { get; }` |
| `SecondaryBannerColor` | `public uint SecondaryBannerColor { get; }` |
| `MainHeroCrimeRating` | `public float MainHeroCrimeRating { get; set; }` |
| `Banner` | `public Banner Banner { get; set; }` |
| `IsBanditFaction` | `public bool IsBanditFaction { get; }` |
| `IsOutlaw` | `public bool IsOutlaw { get; }` |
| `RulingClan` | `public Clan RulingClan { get; set; }` |
| `CurrentTotalStrength` | `public float CurrentTotalStrength { get; }` |
| `DistanceToClosestNonAllyFortification` | `public float DistanceToClosestNonAllyFortification { get; }` |
| `LastKingdomDecisionConclusionDate` | `public CampaignTime LastKingdomDecisionConclusionDate { get; }` |
| `LastMercenaryOfferTime` | `public CampaignTime LastMercenaryOfferTime { get; set; }` |
| `NotAttackableByPlayerUntilTime` | `public CampaignTime NotAttackableByPlayerUntilTime { get; set; }` |
| `Aggressiveness` | `public float Aggressiveness { get; set; }` |
| `AllParties` | `public IEnumerable<MobileParty> AllParties { get; }` |
| `MercenaryWallet` | `public int MercenaryWallet { get; set; }` |
| `TributeWallet` | `public int TributeWallet { get; set; }` |
| `KingdomBudgetWallet` | `public int KingdomBudgetWallet { get; set; }` |
| `CallToWarWallet` | `public int CallToWarWallet { get; set; }` |

## Key Methods

### GetName
`public override TextObject GetName()`

**Purpose:** Reads and returns the `name` value held by the current object.

```csharp
// Obtain an instance of Kingdom from the subsystem API first
Kingdom kingdom = ...;
var result = kingdom.GetName();
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of Kingdom from the subsystem API first
Kingdom kingdom = ...;
var result = kingdom.ToString();
```

### UpdateFactionsAtWarWith
`public void UpdateFactionsAtWarWith()`

**Purpose:** Recalculates and stores the latest representation of `factions at war with`.

```csharp
// Obtain an instance of Kingdom from the subsystem API first
Kingdom kingdom = ...;
kingdom.UpdateFactionsAtWarWith();
```

### UpdateAlliedKingdoms
`public void UpdateAlliedKingdoms()`

**Purpose:** Recalculates and stores the latest representation of `allied kingdoms`.

```csharp
// Obtain an instance of Kingdom from the subsystem API first
Kingdom kingdom = ...;
kingdom.UpdateAlliedKingdoms();
```

### CreateKingdom
`public static Kingdom CreateKingdom(string stringID)`

**Purpose:** Constructs a new `kingdom` entity and returns it to the caller.

```csharp
// Static call; no instance required
Kingdom.CreateKingdom("example");
```

### InitializeKingdom
`public void InitializeKingdom(TextObject name, TextObject informalName, CultureObject culture, Banner banner, uint kingdomColor1, uint kingdomColor2, Settlement initialHomeSettlement, TextObject encyclopediaText, TextObject encyclopediaTitle, TextObject encyclopediaRulerTitle)`

**Purpose:** Prepares the resources, state, or bindings required by `kingdom`.

```csharp
// Obtain an instance of Kingdom from the subsystem API first
Kingdom kingdom = ...;
kingdom.InitializeKingdom(name, informalName, culture, banner, 0, 0, initialHomeSettlement, encyclopediaText, encyclopediaTitle, encyclopediaRulerTitle);
```

### ChangeKingdomName
`public void ChangeKingdomName(TextObject name, TextObject informalName)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Kingdom from the subsystem API first
Kingdom kingdom = ...;
kingdom.ChangeKingdomName(name, informalName);
```

### OnHeroChangedState
`public void OnHeroChangedState(Hero hero, Hero.CharacterStates oldState)`

**Purpose:** Invoked when the `hero changed state` event is raised.

```csharp
// Obtain an instance of Kingdom from the subsystem API first
Kingdom kingdom = ...;
kingdom.OnHeroChangedState(hero, oldState);
```

### IsAllyWith
`public bool IsAllyWith(Kingdom other)`

**Purpose:** Determines whether the current object is in the `ally with` state or condition.

```csharp
// Obtain an instance of Kingdom from the subsystem API first
Kingdom kingdom = ...;
var result = kingdom.IsAllyWith(other);
```

### IsAtWarWith
`public bool IsAtWarWith(IFaction other)`

**Purpose:** Determines whether the current object is in the `at war with` state or condition.

```csharp
// Obtain an instance of Kingdom from the subsystem API first
Kingdom kingdom = ...;
var result = kingdom.IsAtWarWith(other);
```

### IsAtConstantWarWith
`public bool IsAtConstantWarWith(IFaction other)`

**Purpose:** Determines whether the current object is in the `at constant war with` state or condition.

```csharp
// Obtain an instance of Kingdom from the subsystem API first
Kingdom kingdom = ...;
var result = kingdom.IsAtConstantWarWith(other);
```

### GetStanceWith
`public StanceLink GetStanceWith(IFaction other)`

**Purpose:** Reads and returns the `stance with` value held by the current object.

```csharp
// Obtain an instance of Kingdom from the subsystem API first
Kingdom kingdom = ...;
var result = kingdom.GetStanceWith(other);
```

### CreateArmy
`public void CreateArmy(Hero armyLeader, Settlement targetSettlement, Army.ArmyTypes selectedArmyType, MBReadOnlyList<MobileParty> partiesToCallToArmy = null)`

**Purpose:** Constructs a new `army` entity and returns it to the caller.

```csharp
// Obtain an instance of Kingdom from the subsystem API first
Kingdom kingdom = ...;
kingdom.CreateArmy(armyLeader, targetSettlement, selectedArmyType, null);
```

### AddDecision
`public void AddDecision(KingdomDecision kingdomDecision, bool ignoreInfluenceCost = false)`

**Purpose:** Adds `decision` to the current collection or state.

```csharp
// Obtain an instance of Kingdom from the subsystem API first
Kingdom kingdom = ...;
kingdom.AddDecision(kingdomDecision, false);
```

### RemoveDecision
`public void RemoveDecision(KingdomDecision kingdomDecision)`

**Purpose:** Removes `decision` from the current collection or state.

```csharp
// Obtain an instance of Kingdom from the subsystem API first
Kingdom kingdom = ...;
kingdom.RemoveDecision(kingdomDecision);
```

### OnKingdomDecisionConcluded
`public void OnKingdomDecisionConcluded()`

**Purpose:** Invoked when the `kingdom decision concluded` event is raised.

```csharp
// Obtain an instance of Kingdom from the subsystem API first
Kingdom kingdom = ...;
kingdom.OnKingdomDecisionConcluded();
```

### AddPolicy
`public void AddPolicy(PolicyObject policy)`

**Purpose:** Adds `policy` to the current collection or state.

```csharp
// Obtain an instance of Kingdom from the subsystem API first
Kingdom kingdom = ...;
kingdom.AddPolicy(policy);
```

### RemovePolicy
`public void RemovePolicy(PolicyObject policy)`

**Purpose:** Removes `policy` from the current collection or state.

```csharp
// Obtain an instance of Kingdom from the subsystem API first
Kingdom kingdom = ...;
kingdom.RemovePolicy(policy);
```

### HasPolicy
`public bool HasPolicy(PolicyObject policy)`

**Purpose:** Determines whether the current object already holds `policy`.

```csharp
// Obtain an instance of Kingdom from the subsystem API first
Kingdom kingdom = ...;
var result = kingdom.HasPolicy(policy);
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores the current object from serialized data.

```csharp
// Obtain an instance of Kingdom from the subsystem API first
Kingdom kingdom = ...;
kingdom.Deserialize(objectManager, node);
```

### OnFortificationAdded
`public void OnFortificationAdded(Town fortification)`

**Purpose:** Invoked when the `fortification added` event is raised.

```csharp
// Obtain an instance of Kingdom from the subsystem API first
Kingdom kingdom = ...;
kingdom.OnFortificationAdded(fortification);
```

### OnFortificationRemoved
`public void OnFortificationRemoved(Town fortification)`

**Purpose:** Invoked when the `fortification removed` event is raised.

```csharp
// Obtain an instance of Kingdom from the subsystem API first
Kingdom kingdom = ...;
kingdom.OnFortificationRemoved(fortification);
```

### OnHeroAdded
`public void OnHeroAdded(Hero hero)`

**Purpose:** Invoked when the `hero added` event is raised.

```csharp
// Obtain an instance of Kingdom from the subsystem API first
Kingdom kingdom = ...;
kingdom.OnHeroAdded(hero);
```

### OnHeroRemoved
`public void OnHeroRemoved(Hero hero)`

**Purpose:** Invoked when the `hero removed` event is raised.

```csharp
// Obtain an instance of Kingdom from the subsystem API first
Kingdom kingdom = ...;
kingdom.OnHeroRemoved(hero);
```

### OnWarPartyAdded
`public void OnWarPartyAdded(WarPartyComponent warPartyComponent)`

**Purpose:** Invoked when the `war party added` event is raised.

```csharp
// Obtain an instance of Kingdom from the subsystem API first
Kingdom kingdom = ...;
kingdom.OnWarPartyAdded(warPartyComponent);
```

### OnWarPartyRemoved
`public void OnWarPartyRemoved(WarPartyComponent warPartyComponent)`

**Purpose:** Invoked when the `war party removed` event is raised.

```csharp
// Obtain an instance of Kingdom from the subsystem API first
Kingdom kingdom = ...;
kingdom.OnWarPartyRemoved(warPartyComponent);
```

### CalculateMidSettlement
`public void CalculateMidSettlement()`

**Purpose:** Calculates the current value or result of `mid settlement`.

```csharp
// Obtain an instance of Kingdom from the subsystem API first
Kingdom kingdom = ...;
kingdom.CalculateMidSettlement();
```

### ReactivateKingdom
`public void ReactivateKingdom()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Kingdom from the subsystem API first
Kingdom kingdom = ...;
kingdom.ReactivateKingdom();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Kingdom kingdom = ...;
kingdom.GetName();
```

## See Also

- [Area Index](../)