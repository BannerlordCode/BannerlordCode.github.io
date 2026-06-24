
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CultureObject`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CultureObject

**Namespace:** TaleWorlds.CampaignSystem  
**Module:** TaleWorlds.CampaignSystem  
**Type:** sealed class (inherits `BasicCultureObject` → `MBObjectBase`)

A culture / faction template object. Each `CultureObject` describes a culture (e.g. Empire, Vlandia) or a bandit culture, defining the troops, equipment, party templates, NPC templates, name lists and cultural feats (Feat) used under that culture. Cultures are defined in XML and loaded through `MBObjectManager`.

## Overview

`CultureObject` is the runtime representation of a culture in the campaign system. Basic identity information (`Name`, `IsMainCulture`, `IsBandit`, `CanHaveSettlement`, colors and banner, etc.) is provided by the base class `BasicCultureObject` (in `TaleWorlds.Core`); this class extends it with campaign-layer data such as troop references, equipment rosters, party templates, name lists and cultural feats.

Culture objects are immutable reference data: apart from `MilitiaBonus` and `ProsperityBonus`, almost every property has a `private set` and is fixed after being read from XML during `Deserialize`. Modders typically look up a registered culture by its `StringId` via `MBObjectManager` rather than creating new instances.

## Mental Model

Treat `CultureObject` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

## Inherited Properties (from BasicCultureObject)

| Name | Type | Description |
|------|------|-------------|
| Name | TextObject | Display name of the culture |
| StringId | string | Unique string identifier (inherited from `MBObjectBase`) |
| IsMainCulture | bool | Whether this is a main culture (one that can found a kingdom) |
| IsBandit | bool | Whether this is a bandit culture |
| CanHaveSettlement | bool | Whether the culture can own settlements |
| Color | uint | Primary color (ARGB) |
| Color2 | uint | Secondary color (ARGB) |
| ClothAlternativeColor | uint | Alternative cloth primary color |
| ClothAlternativeColor2 | uint | Alternative cloth secondary color |
| BackgroundColor1 | uint | Banner background color 1 |
| ForegroundColor1 | uint | Banner foreground color 1 |
| BackgroundColor2 | uint | Banner background color 2 |
| ForegroundColor2 | uint | Banner foreground color 2 |
| Banner | Banner | Culture banner |
| EncounterBackgroundMesh | string | Encounter background mesh asset name |

## Identity and Misc Properties

| Name | Type | Description |
|------|------|-------------|
| Traits | CultureTrait[] | Array of culture trait tags |
| EncyclopediaText | TextObject | Encyclopedia entry text |
| StartingPoint | CampaignVec2 | Map starting point for this culture |
| BoardGame | BoardGameType | Board game type used by this culture |
| NavalFactor | float | Naval factor (affects maritime activity) |
| DefaultCharacterCreationBodyProperty | MBBodyProperty | Default body property for character creation |
| MilitiaBonus | int | Militia bonus (read/write, adjustable at runtime) |
| ProsperityBonus | int | Prosperity bonus (read/write, adjustable at runtime) |

## Troop Properties

All are `CharacterObject`, `private set`, resolved from XML references.

| Name | Description |
|------|-------------|
| BasicTroop | Basic troop |
| EliteBasicTroop | Elite basic troop |
| MeleeMilitiaTroop | Melee militia |
| MeleeEliteMilitiaTroop | Melee elite militia |
| RangedMilitiaTroop | Ranged militia |
| RangedEliteMilitiaTroop | Ranged elite militia |
| MilitiaVeteranArcher | Militia veteran archer |
| TournamentMaster | Tournament master |
| Villager | Villager |
| CaravanMaster | Caravan master |
| CaravanGuard | Caravan guard |
| PrisonGuard | Prison guard |
| Guard | Guard |
| Blacksmith | Blacksmith |
| Weaponsmith | Weaponsmith |
| Armorer | Armorer |
| HorseMerchant | Horse merchant |
| Barber | Barber |
| Merchant | Merchant |
| Tavernkeeper | Tavernkeeper |
| TavernGamehost | Tavern game host |
| Musician | Musician |
| TavernWench | Tavern wench |
| RansomBroker | Ransom broker |
| GangleaderBodyguard | Gangleader bodyguard |
| ShopWorker | Shop worker |
| Beggar | Male beggar |
| FemaleBeggar | Female beggar |
| FemaleDancer | Female dancer |
| Shipwright | Shipwright |
| GearDummy | Gear dummy |
| MerchantNotary | Merchant notary |
| ArtisanNotary | Artisan notary |
| PreacherNotary | Preacher notary |
| RuralNotableNotary | Rural notable notary |
| Townsman / Townswoman | Townsman / townswoman |
| TownsmanInfant / TownswomanInfant | Townsman / townswoman infant |
| TownsmanChild / TownswomanChild | Townsman / townswoman child |
| TownsmanTeenager / TownswomanTeenager | Townsman / townswoman teenager |
| VillageWoman | Village woman |
| VillagerMaleChild / VillagerFemaleChild | Villager male / female child |
| VillagerMaleTeenager / VillagerFemaleTeenager | Villager male / female teenager |
| BanditChief | Bandit chief |
| BanditRaider | Bandit raider |
| BanditBandit | Common bandit |
| BanditBoss | Bandit boss |

## NPC Templates and Lists

| Name | Type | Description |
|------|------|-------------|
| NotableTemplates | MBReadOnlyList&lt;CharacterObject&gt; | Notable templates |
| LordTemplates | MBReadOnlyList&lt;CharacterObject&gt; | Lord templates |
| RebelliousHeroTemplates | MBReadOnlyList&lt;CharacterObject&gt; | Rebellious hero templates |
| BasicMercenaryTroops | MBReadOnlyList&lt;CharacterObject&gt; | Basic mercenary troops |
| TournamentTeamTemplatesForOneParticipant | MBReadOnlyList&lt;CharacterObject&gt; | Tournament team template (one participant) |
| TournamentTeamTemplatesForTwoParticipant | MBReadOnlyList&lt;CharacterObject&gt; | Tournament team template (two participants) |
| TournamentTeamTemplatesForFourParticipant | MBReadOnlyList&lt;CharacterObject&gt; | Tournament team template (four participants) |
| MaleNameList | MBReadOnlyList&lt;TextObject&gt; | Male name list |
| FemaleNameList | MBReadOnlyList&lt;TextObject&gt; | Female name list |
| ClanNameList | MBReadOnlyList&lt;TextObject&gt; | Clan name list |
| CultureFeats | MBReadOnlyList&lt;FeatObject&gt; | Cultural feat list |
| DefaultPolicyList | MBReadOnlyList&lt;PolicyObject&gt; | Default policy list |
| PossibleClanBannerIconsIDs | MBReadOnlyList&lt;int&gt; | Available clan banner icon IDs |
| VassalRewardItems | MBReadOnlyList&lt;ItemObject&gt; | Vassal reward items |
| BannerBearerReplacementWeapons | MBReadOnlyList&lt;ItemObject&gt; | Banner bearer replacement weapons |
| AvailableShipHulls | MBList&lt;ShipHull&gt; | Available ship hulls |

## Equipment Roster Properties

All are `MBEquipmentRoster`, `private set`.

| Name | Description |
|------|-------------|
| DefaultBattleEquipmentRoster | Default battle equipment roster |
| DefaultCivilianEquipmentRoster | Default civilian equipment roster |
| DefaultStealthEquipmentRoster | Default stealth equipment roster |
| DuelPresetEquipmentRoster | Duel preset equipment roster |
| MarriageBrideEquipmentRoster | Marriage bride equipment roster |

## Party Template Properties

| Name | Type | Description |
|------|------|-------------|
| DefaultPartyTemplate | PartyTemplateObject | Default party template |
| VillagerPartyTemplate | PartyTemplateObject | Villager party template |
| FishingPartyTemplate | PartyTemplateObject | Fishing party template |
| MilitiaPartyTemplate | PartyTemplateObject | Militia party template |
| RebelsPartyTemplate | PartyTemplateObject | Rebels party template |
| BanditBossPartyTemplate | PartyTemplateObject | Bandit boss party template |
| VassalRewardTroopsPartyTemplate | PartyTemplateObject | Vassal reward troops template |
| SettlementPatrolPartyTemplateWeak | PartyTemplateObject | Settlement patrol (weak) |
| SettlementPatrolPartyTemplateModerate | PartyTemplateObject | Settlement patrol (moderate) |
| SettlementPatrolPartyTemplateStrong | PartyTemplateObject | Settlement patrol (strong) |
| SettlementPatrolPartyTemplateNaval | PartyTemplateObject | Settlement naval patrol |
| CaravanPartyTemplates | MBList&lt;PartyTemplateObject&gt; | Caravan party templates list |
| EliteCaravanPartyTemplates | MBList&lt;PartyTemplateObject&gt; | Elite caravan party templates list |

## Methods

### HasTrait

```csharp
public bool HasTrait(CultureTrait trait)
```

Determines whether the culture has the given culture trait tag.

**Parameters:**
- `trait` - The `CultureTrait` to check

**Returns:** true if `Traits` contains the tag.

### HasFeat

```csharp
public bool HasFeat(FeatObject feat)
```

Determines whether the culture has the given cultural feat.

**Parameters:**
- `feat` - The `FeatObject` to check

**Returns:** true if `CultureFeats` contains the feat.

### GetCulturalFeats

```csharp
public IEnumerable<FeatObject> GetCulturalFeats(Func<FeatObject, bool> predicate = null)
```

Returns the culture's feats, optionally filtered by a predicate. When `predicate` is null, all feats are returned.

### GetName

```csharp
public override TextObject GetName()
```

Returns `Name` (the base `BasicCultureObject.Name`).

### ToString

```csharp
public override string ToString()
```

Returns `Name.ToString()`.

### Deserialize

```csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
```

Deserializes the culture object from an XML node. Reads all properties, troop references, equipment rosters, party templates, name lists, policies, feats, etc. Modders generally do not call this directly.

## BoardGameType Enum

```csharp
public enum BoardGameType
{
    None = -1,
    Seega,
    Puluc,
    Konane,
    MuTorere,
    Tablut,
    BaghChal,
    Total
}
```

## Usage Example

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.ObjectSystem;

// Look up a culture by StringId (e.g. "vlandia", "empire")
CultureObject vlandia = MBObjectManager.Instance.GetObject<CultureObject>("vlandia");
if (vlandia != null)
{
    Debug.Print("Culture: " + vlandia.Name);
    Debug.Print("Is bandit culture: " + vlandia.IsBandit);
    Debug.Print("Basic troop: " + vlandia.BasicTroop.Name);
}

// Iterate over all cultures
foreach (CultureObject culture in MBObjectManager.Instance.GetObjectTypeList<CultureObject>())
{
    if (culture.IsMainCulture)
    {
        Debug.Print("Main culture: " + culture.Name);
    }
}

// Inspect cultural feats
foreach (FeatObject feat in vlandia.GetCulturalFeats())
{
    Debug.Print("Feat: " + feat.Name);
}

// Equivalent accessor: via Game.Current.ObjectManager
CultureObject empire = Game.Current.ObjectManager.GetObject<CultureObject>("empire");
```

## See Also

- [Settlement](./Settlement.md)
- [PartyTemplate](./PartyTemplate.md)
- [Campaign-Ext Index](./index.md)
