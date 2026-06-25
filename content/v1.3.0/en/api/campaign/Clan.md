---
title: "Clan"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Clan`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
- [🔀 Cross-Version Compare /versions/Clan](/versions/Clan)
<!-- END BREADCRUMB -->
# Clan

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class Clan : MBObjectBase, IFaction`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/Clan.cs`

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
| `HasNavalNavigationCapability` | `public bool HasNavalNavigationCapability { get; set; }` |
| `AutoRecruitmentExpenses` | `public int AutoRecruitmentExpenses { get; }` |
| `EncyclopediaText` | `public TextObject EncyclopediaText { get; }` |
| `IsNoble` | `public bool IsNoble { get; set; }` |
| `IsEliminated` | `public bool IsEliminated { get; }` |
| `MinorFactionCharacterTemplates` | `public IList<CharacterObject> MinorFactionCharacterTemplates { get; }` |
| `EncyclopediaLink` | `public string EncyclopediaLink { get; }` |
| `EncyclopediaLinkWithName` | `public TextObject EncyclopediaLinkWithName { get; set; }` |
| `Kingdom` | `public Kingdom Kingdom { get; set; }` |
| `DungeonPrisonersOfClan` | `public IEnumerable<CharacterObject> DungeonPrisonersOfClan { get; }` |
| `Fiefs` | `public MBReadOnlyList<Town> Fiefs { get; }` |
| `Villages` | `public MBReadOnlyList<Village> Villages { get; }` |
| `Settlements` | `public MBReadOnlyList<Settlement> Settlements { get; }` |
| `SupporterNotables` | `public MBReadOnlyList<Hero> SupporterNotables { get; }` |
| `AliveLords` | `public MBReadOnlyList<Hero> AliveLords { get; }` |
| `DeadLords` | `public MBReadOnlyList<Hero> DeadLords { get; }` |
| `Heroes` | `public MBReadOnlyList<Hero> Heroes { get; }` |
| `Companions` | `public MBReadOnlyList<Hero> Companions { get; }` |
| `WarPartyComponents` | `public MBReadOnlyList<WarPartyComponent> WarPartyComponents { get; set; }` |
| `Influence` | `public float Influence { get; set; }` |
| `InfluenceChangeExplained` | `public ExplainedNumber InfluenceChangeExplained { get; }` |
| `CurrentTotalStrength` | `public float CurrentTotalStrength { get; }` |
| `MercenaryAwardMultiplier` | `public int MercenaryAwardMultiplier { get; }` |
| `IsMapFaction` | `public bool IsMapFaction { get; }` |
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
| `FactionMidSettlement` | `public Settlement FactionMidSettlement { get; set; }` |
| `BasicTroop` | `public CharacterObject BasicTroop { get; set; }` |
| `PlayerClan` | `public static Clan PlayerClan { get; }` |
| `Leader` | `public Hero Leader { get; }` |
| `Gold` | `public int Gold { get; }` |
| `Banner` | `public Banner Banner { get; set; }` |
| `ClanOriginalBanner` | `public Banner ClanOriginalBanner { get; }` |
| `IsBanditFaction` | `public bool IsBanditFaction { get; }` |
| `IsClan` | `public bool IsClan { get; set; }` |
| `Renown` | `public float Renown { get; set; }` |
| `MainHeroCrimeRating` | `public float MainHeroCrimeRating { get; set; }` |
| `DailyCrimeRatingChange` | `public float DailyCrimeRatingChange { get; }` |
| `DailyCrimeRatingChangeExplained` | `public ExplainedNumber DailyCrimeRatingChangeExplained { get; }` |
| `Tier` | `public int Tier { get; }` |
| `MapFaction` | `public IFaction MapFaction { get; set; }` |
| `NotAttackableByPlayerUntilTime` | `public CampaignTime NotAttackableByPlayerUntilTime { get; set; }` |
| `Aggressiveness` | `public float Aggressiveness { get; set; }` |
| `TributeWallet` | `public int TributeWallet { get; }` |
| `HomeSettlement` | `public Settlement HomeSettlement { get; }` |
| `DebtToKingdom` | `public int DebtToKingdom { get; set; }` |
| `FactionsAtWarWith` | `public MBReadOnlyList<IFaction> FactionsAtWarWith { get; }` |
| `RenownRequirementForNextTier` | `public int RenownRequirementForNextTier { get; }` |
| `CompanionLimit` | `public int CompanionLimit { get; }` |
| `DistanceToClosestNonAllyFortification` | `public float DistanceToClosestNonAllyFortification { get; }` |
| `CommanderLimit` | `public int CommanderLimit { get; }` |
| `All` | `public static MBReadOnlyList<Clan> All { get; }` |
| `NonBanditFactions` | `public static IEnumerable<Clan> NonBanditFactions { get; }` |
| `BanditFactions` | `public static IEnumerable<Clan> BanditFactions { get; }` |

## Key Methods

### UpdateFactionsAtWarWith
`public void UpdateFactionsAtWarWith()`

**Purpose:** Updates the state or data of `factions at war with`.

### UpdateCurrentStrength
`public void UpdateCurrentStrength()`

**Purpose:** Updates the state or data of `current strength`.

### IsAtWarWith
`public bool IsAtWarWith(IFaction other)`

**Purpose:** Handles logic related to `is at war with`.

### CreateClan
`public static Clan CreateClan(string stringID)`

**Purpose:** Creates a new `clan` instance or object.

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

### GetRelationWithClan
`public int GetRelationWithClan(Clan other)`

**Purpose:** Gets the current value of `relation with clan`.

### SetLeader
`public void SetLeader(Hero leader)`

**Purpose:** Sets the value or state of `leader`.

### SetInitialHomeSettlement
`public void SetInitialHomeSettlement(Settlement initialHomeSettlement)`

**Purpose:** Sets the value or state of `initial home settlement`.

### ConsiderAndUpdateHomeSettlement
`public void ConsiderAndUpdateHomeSettlement()`

**Purpose:** Handles logic related to `consider and update home settlement`.

### GetName
`public override TextObject GetName()`

**Purpose:** Gets the current value of `name`.

### ChangeClanName
`public void ChangeClanName(TextObject name, TextObject informalName)`

**Purpose:** Handles logic related to `change clan name`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### GetStanceWith
`public StanceLink GetStanceWith(IFaction other)`

**Purpose:** Gets the current value of `stance with`.

### ClanLeaveKingdom
`public void ClanLeaveKingdom(bool giveBackFiefs = false)`

**Purpose:** Handles logic related to `clan leave kingdom`.

### CalculateTotalSettlementBaseValue
`public float CalculateTotalSettlementBaseValue()`

**Purpose:** Handles logic related to `calculate total settlement base value`.

### StartMercenaryService
`public void StartMercenaryService()`

**Purpose:** Handles logic related to `start mercenary service`.

### ResetPlayerHomeAndFactionMidSettlement
`public void ResetPlayerHomeAndFactionMidSettlement()`

**Purpose:** Resets `player home and faction mid settlement` to its initial state.

### FindFirst
`public static Clan FindFirst(Predicate<Clan> predicate)`

**Purpose:** Handles logic related to `find first`.

### EndMercenaryService
`public void EndMercenaryService(bool isByLeavingKingdom)`

**Purpose:** Handles logic related to `end mercenary service`.

### FindAll
`public static IEnumerable<Clan> FindAll(Predicate<Clan> predicate)`

**Purpose:** Handles logic related to `find all`.

### CalculateTotalSettlementValueForFaction
`public float CalculateTotalSettlementValueForFaction(Kingdom kingdom)`

**Purpose:** Handles logic related to `calculate total settlement value for faction`.

### OnHeroChangedState
`public void OnHeroChangedState(Hero hero, Hero.CharacterStates oldState)`

**Purpose:** Called when the `hero changed state` event is raised.

### AddRenown
`public void AddRenown(float value, bool shouldNotify = true)`

**Purpose:** Adds `renown` to the current collection or state.

### ResetClanRenown
`public void ResetClanRenown()`

**Purpose:** Resets `clan renown` to its initial state.

### OnSupportedByClan
`public void OnSupportedByClan(Clan supporterClan)`

**Purpose:** Called when the `supported by clan` event is raised.

### CreateSettlementRebelClan
`public static Clan CreateSettlementRebelClan(Settlement settlement, Hero owner, int iconMeshId = -1)`

**Purpose:** Creates a new `settlement rebel clan` instance or object.

### CalculateMidSettlement
`public void CalculateMidSettlement()`

**Purpose:** Handles logic related to `calculate mid settlement`.

### CreateCompanionToLordClan
`public static Clan CreateCompanionToLordClan(Hero hero, Settlement settlement, TextObject clanName, int newClanIconId)`

**Purpose:** Creates a new `companion to lord clan` instance or object.

### GetHeirApparents
`public Dictionary<Hero, int> GetHeirApparents()`

**Purpose:** Gets the current value of `heir apparents`.

### UpdateBannerColor
`public void UpdateBannerColor(uint backgroundColor, uint iconColor)`

**Purpose:** Updates the state or data of `banner color`.

## Usage Example

```csharp
var value = new Clan();
value.UpdateFactionsAtWarWith();
```

## See Also

- [Complete Class Catalog](../catalog)