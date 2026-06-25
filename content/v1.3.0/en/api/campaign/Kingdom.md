---
title: "Kingdom"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Kingdom`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
- [🔀 Cross-Version Compare /versions/Kingdom](/versions/Kingdom)
<!-- END BREADCRUMB -->
# Kingdom

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class Kingdom : MBObjectBase, IFaction`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/Kingdom.cs`

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
| `EncyclopediaLink` | `public string EncyclopediaLink { get; }` |
| `EncyclopediaLinkWithName` | `public TextObject EncyclopediaLinkWithName { get; }` |
| `UnresolvedDecisions` | `public MBReadOnlyList<KingdomDecision> UnresolvedDecisions { get; }` |
| `Culture` | `public CultureObject Culture { get; }` |
| `InitialHomeSettlement` | `public Settlement InitialHomeSettlement { get; }` |
| `IsMapFaction` | `public bool IsMapFaction { get; }` |
| `HasNavalNavigationCapability` | `public bool HasNavalNavigationCapability { get; }` |
| `Color` | `public uint Color { get; }` |
| `Color2` | `public uint Color2 { get; }` |
| `PrimaryBannerColor` | `public uint PrimaryBannerColor { get; }` |
| `SecondaryBannerColor` | `public uint SecondaryBannerColor { get; }` |
| `MainHeroCrimeRating` | `public float MainHeroCrimeRating { get; set; }` |
| `FactionsAtWarWith` | `public MBReadOnlyList<IFaction> FactionsAtWarWith { get; }` |
| `AlliedKingdoms` | `public MBReadOnlyList<Kingdom> AlliedKingdoms { get; }` |
| `Fiefs` | `public MBReadOnlyList<Town> Fiefs { get; }` |
| `Villages` | `public MBReadOnlyList<Village> Villages { get; }` |
| `Settlements` | `public MBReadOnlyList<Settlement> Settlements { get; }` |
| `Heroes` | `public MBReadOnlyList<Hero> Heroes { get; }` |
| `AliveLords` | `public MBReadOnlyList<Hero> AliveLords { get; }` |
| `DeadLords` | `public MBReadOnlyList<Hero> DeadLords { get; }` |
| `WarPartyComponents` | `public MBReadOnlyList<WarPartyComponent> WarPartyComponents { get; }` |
| `DailyCrimeRatingChange` | `public float DailyCrimeRatingChange { get; }` |
| `DailyCrimeRatingChangeExplained` | `public ExplainedNumber DailyCrimeRatingChangeExplained { get; }` |
| `BasicTroop` | `public CharacterObject BasicTroop { get; }` |
| `Leader` | `public Hero Leader { get; set; }` |
| `Banner` | `public Banner Banner { get; set; }` |
| `IsBanditFaction` | `public bool IsBanditFaction { get; }` |
| `IsMinorFaction` | `public bool IsMinorFaction { get; }` |
| `IsRebelClan` | `public bool IsRebelClan { get; }` |
| `IsClan` | `public bool IsClan { get; }` |
| `IsOutlaw` | `public bool IsOutlaw { get; }` |
| `Clans` | `public MBReadOnlyList<Clan> Clans { get; set; }` |
| `RulingClan` | `public Clan RulingClan { get; }` |
| `LastArmyCreationDay` | `public int LastArmyCreationDay { get; }` |
| `Armies` | `public MBReadOnlyList<Army> Armies { get; }` |
| `CurrentTotalStrength` | `public float CurrentTotalStrength { get; }` |
| `FactionMidSettlement` | `public Settlement FactionMidSettlement { get; }` |
| `DistanceToClosestNonAllyFortification` | `public float DistanceToClosestNonAllyFortification { get; }` |
| `ActivePolicies` | `public IList<PolicyObject> ActivePolicies { get; }` |
| `All` | `public static MBReadOnlyList<Kingdom> All { get; }` |
| `LastKingdomDecisionConclusionDate` | `public CampaignTime LastKingdomDecisionConclusionDate { get; }` |
| `IsEliminated` | `public bool IsEliminated { get; set; }` |
| `LastMercenaryOfferTime` | `public CampaignTime LastMercenaryOfferTime { get; set; }` |
| `MapFaction` | `public IFaction MapFaction { get; set; }` |
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

**Purpose:** Gets the current value of `name`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### UpdateFactionsAtWarWith
`public void UpdateFactionsAtWarWith()`

**Purpose:** Updates the state or data of `factions at war with`.

### UpdateAlliedKingdoms
`public void UpdateAlliedKingdoms()`

**Purpose:** Updates the state or data of `allied kingdoms`.

### CreateKingdom
`public static Kingdom CreateKingdom(string stringID)`

**Purpose:** Creates a new `kingdom` instance or object.

### InitializeKingdom
`public void InitializeKingdom(TextObject name, TextObject informalName, CultureObject culture, Banner banner, uint kingdomColor1, uint kingdomColor2, Settlement initialHomeSettlement, TextObject encyclopediaText, TextObject encyclopediaTitle, TextObject encyclopediaRulerTitle)`

**Purpose:** Initializes the state, resources, or bindings for `kingdom`.

### ChangeKingdomName
`public void ChangeKingdomName(TextObject name, TextObject informalName)`

**Purpose:** Handles logic related to `change kingdom name`.

### OnHeroChangedState
`public void OnHeroChangedState(Hero hero, Hero.CharacterStates oldState)`

**Purpose:** Called when the `hero changed state` event is raised.

### IsAllyWith
`public bool IsAllyWith(Kingdom other)`

**Purpose:** Handles logic related to `is ally with`.

### HasCalledToWar
`public bool HasCalledToWar(Kingdom other)`

**Purpose:** Checks whether the current object has/contains `called to war`.

### IsAtWarWith
`public bool IsAtWarWith(IFaction other)`

**Purpose:** Handles logic related to `is at war with`.

### IsAtConstantWarWith
`public bool IsAtConstantWarWith(IFaction other)`

**Purpose:** Handles logic related to `is at constant war with`.

### GetStanceWith
`public StanceLink GetStanceWith(IFaction other)`

**Purpose:** Gets the current value of `stance with`.

### CreateArmy
`public void CreateArmy(Hero armyLeader, Settlement targetSettlement, Army.ArmyTypes selectedArmyType, MBReadOnlyList<MobileParty> partiesToCallToArmy = null)`

**Purpose:** Creates a new `army` instance or object.

### AddDecision
`public void AddDecision(KingdomDecision kingdomDecision, bool ignoreInfluenceCost = false)`

**Purpose:** Adds `decision` to the current collection or state.

### RemoveDecision
`public void RemoveDecision(KingdomDecision kingdomDecision)`

**Purpose:** Removes `decision` from the current collection or state.

### OnKingdomDecisionConcluded
`public void OnKingdomDecisionConcluded()`

**Purpose:** Called when the `kingdom decision concluded` event is raised.

### AddPolicy
`public void AddPolicy(PolicyObject policy)`

**Purpose:** Adds `policy` to the current collection or state.

### RemovePolicy
`public void RemovePolicy(PolicyObject policy)`

**Purpose:** Removes `policy` from the current collection or state.

### HasPolicy
`public bool HasPolicy(PolicyObject policy)`

**Purpose:** Checks whether the current object has/contains `policy`.

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

### OnFortificationAdded
`public void OnFortificationAdded(Town fortification)`

**Purpose:** Called when the `fortification added` event is raised.

### OnFortificationRemoved
`public void OnFortificationRemoved(Town fortification)`

**Purpose:** Called when the `fortification removed` event is raised.

### OnHeroAdded
`public void OnHeroAdded(Hero hero)`

**Purpose:** Called when the `hero added` event is raised.

### OnHeroRemoved
`public void OnHeroRemoved(Hero hero)`

**Purpose:** Called when the `hero removed` event is raised.

### OnWarPartyAdded
`public void OnWarPartyAdded(WarPartyComponent warPartyComponent)`

**Purpose:** Called when the `war party added` event is raised.

### OnWarPartyRemoved
`public void OnWarPartyRemoved(WarPartyComponent warPartyComponent)`

**Purpose:** Called when the `war party removed` event is raised.

### CalculateMidSettlement
`public void CalculateMidSettlement()`

**Purpose:** Handles logic related to `calculate mid settlement`.

### ReactivateKingdom
`public void ReactivateKingdom()`

**Purpose:** Handles logic related to `reactivate kingdom`.

## Usage Example

```csharp
var value = new Kingdom();
value.GetName();
```

## See Also

- [Complete Class Catalog](../catalog)