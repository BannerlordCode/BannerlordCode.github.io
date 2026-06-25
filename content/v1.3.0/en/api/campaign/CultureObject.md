---
title: "CultureObject"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CultureObject`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CultureObject

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class CultureObject : BasicCultureObject`
**Base:** `BasicCultureObject`
**File:** `TaleWorlds.CampaignSystem/CultureObject.cs`

## Overview

`CultureObject` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Traits` | `public CultureTrait Traits { get; }` |
| `BasicTroop` | `public CharacterObject BasicTroop { get; }` |
| `EliteBasicTroop` | `public CharacterObject EliteBasicTroop { get; }` |
| `MeleeMilitiaTroop` | `public CharacterObject MeleeMilitiaTroop { get; }` |
| `MeleeEliteMilitiaTroop` | `public CharacterObject MeleeEliteMilitiaTroop { get; }` |
| `RangedEliteMilitiaTroop` | `public CharacterObject RangedEliteMilitiaTroop { get; }` |
| `RangedMilitiaTroop` | `public CharacterObject RangedMilitiaTroop { get; }` |
| `TournamentMaster` | `public CharacterObject TournamentMaster { get; }` |
| `Villager` | `public CharacterObject Villager { get; }` |
| `CaravanMaster` | `public CharacterObject CaravanMaster { get; }` |
| `CaravanGuard` | `public CharacterObject CaravanGuard { get; }` |
| `PrisonGuard` | `public CharacterObject PrisonGuard { get; }` |
| `Guard` | `public CharacterObject Guard { get; }` |
| `Blacksmith` | `public CharacterObject Blacksmith { get; }` |
| `Weaponsmith` | `public CharacterObject Weaponsmith { get; }` |
| `Townswoman` | `public CharacterObject Townswoman { get; }` |
| `TownswomanInfant` | `public CharacterObject TownswomanInfant { get; }` |
| `TownswomanChild` | `public CharacterObject TownswomanChild { get; }` |
| `TownswomanTeenager` | `public CharacterObject TownswomanTeenager { get; }` |
| `VillageWoman` | `public CharacterObject VillageWoman { get; }` |
| `VillagerMaleChild` | `public CharacterObject VillagerMaleChild { get; }` |
| `VillagerMaleTeenager` | `public CharacterObject VillagerMaleTeenager { get; }` |
| `VillagerFemaleChild` | `public CharacterObject VillagerFemaleChild { get; }` |
| `VillagerFemaleTeenager` | `public CharacterObject VillagerFemaleTeenager { get; }` |
| `Townsman` | `public CharacterObject Townsman { get; }` |
| `TownsmanInfant` | `public CharacterObject TownsmanInfant { get; }` |
| `TownsmanChild` | `public CharacterObject TownsmanChild { get; }` |
| `TownsmanTeenager` | `public CharacterObject TownsmanTeenager { get; }` |
| `RansomBroker` | `public CharacterObject RansomBroker { get; }` |
| `GangleaderBodyguard` | `public CharacterObject GangleaderBodyguard { get; }` |
| `MerchantNotary` | `public CharacterObject MerchantNotary { get; }` |
| `ArtisanNotary` | `public CharacterObject ArtisanNotary { get; }` |
| `PreacherNotary` | `public CharacterObject PreacherNotary { get; }` |
| `RuralNotableNotary` | `public CharacterObject RuralNotableNotary { get; }` |
| `ShopWorker` | `public CharacterObject ShopWorker { get; }` |
| `Tavernkeeper` | `public CharacterObject Tavernkeeper { get; }` |
| `TavernGamehost` | `public CharacterObject TavernGamehost { get; }` |
| `Musician` | `public CharacterObject Musician { get; }` |
| `TavernWench` | `public CharacterObject TavernWench { get; }` |
| `Armorer` | `public CharacterObject Armorer { get; }` |
| `HorseMerchant` | `public CharacterObject HorseMerchant { get; }` |
| `Barber` | `public CharacterObject Barber { get; }` |
| `Merchant` | `public CharacterObject Merchant { get; }` |
| `Beggar` | `public CharacterObject Beggar { get; }` |
| `FemaleBeggar` | `public CharacterObject FemaleBeggar { get; }` |
| `FemaleDancer` | `public CharacterObject FemaleDancer { get; }` |
| `Shipwright` | `public CharacterObject Shipwright { get; }` |
| `MilitiaVeteranArcher` | `public CharacterObject MilitiaVeteranArcher { get; }` |
| `GearDummy` | `public CharacterObject GearDummy { get; }` |
| `DefaultBattleEquipmentRoster` | `public MBEquipmentRoster DefaultBattleEquipmentRoster { get; }` |
| `DefaultCivilianEquipmentRoster` | `public MBEquipmentRoster DefaultCivilianEquipmentRoster { get; }` |
| `DefaultStealthEquipmentRoster` | `public MBEquipmentRoster DefaultStealthEquipmentRoster { get; }` |
| `DuelPresetEquipmentRoster` | `public MBEquipmentRoster DuelPresetEquipmentRoster { get; }` |
| `MarriageBrideEquipmentRoster` | `public MBEquipmentRoster MarriageBrideEquipmentRoster { get; }` |
| `BanditChief` | `public CharacterObject BanditChief { get; }` |
| `BanditRaider` | `public CharacterObject BanditRaider { get; }` |
| `BanditBandit` | `public CharacterObject BanditBandit { get; }` |
| `BanditBoss` | `public CharacterObject BanditBoss { get; }` |
| `DefaultCharacterCreationBodyProperty` | `public MBBodyProperty DefaultCharacterCreationBodyProperty { get; }` |
| `EncyclopediaText` | `public TextObject EncyclopediaText { get; }` |
| `StartingPoint` | `public CampaignVec2 StartingPoint { get; }` |
| `DefaultPartyTemplate` | `public PartyTemplateObject DefaultPartyTemplate { get; }` |
| `VillagerPartyTemplate` | `public PartyTemplateObject VillagerPartyTemplate { get; }` |
| `FishingPartyTemplate` | `public PartyTemplateObject FishingPartyTemplate { get; }` |
| `MilitiaPartyTemplate` | `public PartyTemplateObject MilitiaPartyTemplate { get; }` |
| `RebelsPartyTemplate` | `public PartyTemplateObject RebelsPartyTemplate { get; }` |
| `CaravanPartyTemplates` | `public MBList<PartyTemplateObject> CaravanPartyTemplates { get; }` |
| `EliteCaravanPartyTemplates` | `public MBList<PartyTemplateObject> EliteCaravanPartyTemplates { get; }` |
| `AvailableShipHulls` | `public MBList<ShipHull> AvailableShipHulls { get; }` |
| `BanditBossPartyTemplate` | `public PartyTemplateObject BanditBossPartyTemplate { get; }` |
| `VassalRewardTroopsPartyTemplate` | `public PartyTemplateObject VassalRewardTroopsPartyTemplate { get; }` |
| `SettlementPatrolPartyTemplateWeak` | `public PartyTemplateObject SettlementPatrolPartyTemplateWeak { get; }` |
| `SettlementPatrolPartyTemplateModerate` | `public PartyTemplateObject SettlementPatrolPartyTemplateModerate { get; }` |
| `SettlementPatrolPartyTemplateStrong` | `public PartyTemplateObject SettlementPatrolPartyTemplateStrong { get; }` |
| `VassalRewardItems` | `public MBReadOnlyList<ItemObject> VassalRewardItems { get; }` |
| `BannerBearerReplacementWeapons` | `public MBReadOnlyList<ItemObject> BannerBearerReplacementWeapons { get; }` |
| `MaleNameList` | `public MBReadOnlyList<TextObject> MaleNameList { get; }` |
| `FemaleNameList` | `public MBReadOnlyList<TextObject> FemaleNameList { get; }` |
| `ClanNameList` | `public MBReadOnlyList<TextObject> ClanNameList { get; }` |
| `CultureFeats` | `public MBReadOnlyList<FeatObject> CultureFeats { get; }` |
| `DefaultPolicyList` | `public MBReadOnlyList<PolicyObject> DefaultPolicyList { get; }` |
| `PossibleClanBannerIconsIDs` | `public MBReadOnlyList<int> PossibleClanBannerIconsIDs { get; }` |
| `NotableTemplates` | `public MBReadOnlyList<CharacterObject> NotableTemplates { get; }` |
| `RebelliousHeroTemplates` | `public MBReadOnlyList<CharacterObject> RebelliousHeroTemplates { get; }` |
| `LordTemplates` | `public MBReadOnlyList<CharacterObject> LordTemplates { get; }` |
| `TournamentTeamTemplatesForOneParticipant` | `public MBReadOnlyList<CharacterObject> TournamentTeamTemplatesForOneParticipant { get; }` |
| `TournamentTeamTemplatesForTwoParticipant` | `public MBReadOnlyList<CharacterObject> TournamentTeamTemplatesForTwoParticipant { get; }` |
| `TournamentTeamTemplatesForFourParticipant` | `public MBReadOnlyList<CharacterObject> TournamentTeamTemplatesForFourParticipant { get; }` |
| `BasicMercenaryTroops` | `public MBReadOnlyList<CharacterObject> BasicMercenaryTroops { get; }` |
| `MilitiaBonus` | `public int MilitiaBonus { get; }` |
| `ProsperityBonus` | `public int ProsperityBonus { get; }` |
| `BoardGame` | `public CultureObject.BoardGameType BoardGame { get; }` |
| `NavalFactor` | `public float NavalFactor { get; }` |

## Key Methods

### HasTrait
`public bool HasTrait(CultureTrait trait)`

**Purpose:** Checks whether the current object has/contains `trait`.

### HasFeat
`public bool HasFeat(FeatObject feat)`

**Purpose:** Checks whether the current object has/contains `feat`.

### GetCulturalFeats
`public IEnumerable<FeatObject> GetCulturalFeats(Func<FeatObject, bool> predicate = null)`

**Purpose:** Gets the current value of `cultural feats`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

### GetName
`public override TextObject GetName()`

**Purpose:** Gets the current value of `name`.

## Usage Example

```csharp
var value = new CultureObject();
value.HasTrait(trait);
```

## See Also

- [Complete Class Catalog](../catalog)