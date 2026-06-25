---
title: "CharacterObject"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterObject`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterObject

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class CharacterObject : BasicCharacterObject, ICharacterData`
**Base:** `BasicCharacterObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CharacterObject.cs`

## Overview

`CharacterObject` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public override TextObject Name { get; }` |
| `EncyclopediaLink` | `public string EncyclopediaLink { get; }` |
| `EncyclopediaLinkWithName` | `public TextObject EncyclopediaLinkWithName { get; }` |
| `HiddenInEncyclopedia` | `public bool HiddenInEncyclopedia { get; set; }` |
| `HeroObject` | `public Hero HeroObject { get; set; }` |
| `Equipment` | `public override Equipment Equipment { get; }` |
| `BattleEquipments` | `public override IEnumerable<Equipment> BattleEquipments { get; }` |
| `CivilianEquipments` | `public override IEnumerable<Equipment> CivilianEquipments { get; }` |
| `StealthEquipments` | `public IEnumerable<Equipment> StealthEquipments { get; }` |
| `FirstBattleEquipment` | `public override Equipment FirstBattleEquipment { get; }` |
| `FirstCivilianEquipment` | `public override Equipment FirstCivilianEquipment { get; }` |
| `FirstStealthEquipment` | `public Equipment FirstStealthEquipment { get; }` |
| `RandomBattleEquipment` | `public override Equipment RandomBattleEquipment { get; }` |
| `RandomCivilianEquipment` | `public override Equipment RandomCivilianEquipment { get; }` |
| `HitPoints` | `public override int HitPoints { get; }` |
| `RandomStealthEquipment` | `public Equipment RandomStealthEquipment { get; }` |
| `Level` | `public override int Level { get; }` |
| `Culture` | `public new CultureObject Culture { get; }` |
| `IsFemale` | `public override bool IsFemale { get; }` |
| `IsBasicTroop` | `public bool IsBasicTroop { get; }` |
| `IsTemplate` | `public bool IsTemplate { get; }` |
| `IsChildTemplate` | `public bool IsChildTemplate { get; }` |
| `Occupation` | `public Occupation Occupation { get; }` |
| `UpgradeTargets` | `public CharacterObject UpgradeTargets { get; }` |
| `UpgradeRequiresItemFromCategory` | `public ItemCategory UpgradeRequiresItemFromCategory { get; }` |
| `IsMounted` | `public override bool IsMounted { get; }` |
| `IsRanged` | `public override bool IsRanged { get; }` |
| `TroopWage` | `public int TroopWage { get; }` |

## Key Methods

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### MaxHitPoints
`public override int MaxHitPoints()`

**Purpose:** Handles logic related to `max hit points`.

### CreateFrom
`public static CharacterObject CreateFrom(CharacterObject character, StaticBodyProperties? staticBodyProperties = null)`

**Purpose:** Creates a new `from` instance or object.

### AfterRegister
`public override void AfterRegister()`

**Purpose:** Handles logic related to `after register`.

### GetBodyPropertiesMin
`public override BodyProperties GetBodyPropertiesMin(bool returnBaseValue = false)`

**Purpose:** Gets the current value of `body properties min`.

### GetBodyPropertiesMax
`public override BodyProperties GetBodyPropertiesMax(bool returnBaseValue = false)`

**Purpose:** Gets the current value of `body properties max`.

### UpdatePlayerCharacterBodyProperties
`public override void UpdatePlayerCharacterBodyProperties(BodyProperties properties, int race, bool isFemale)`

**Purpose:** Updates the state or data of `player character body properties`.

### GetDefaultOccupation
`public Occupation GetDefaultOccupation()`

**Purpose:** Gets the current value of `default occupation`.

### HasThrowingWeapon
`public bool HasThrowingWeapon()`

**Purpose:** Checks whether the current object has/contains `throwing weapon`.

### GetUpgradeXpCost
`public int GetUpgradeXpCost(PartyBase party, int index)`

**Purpose:** Gets the current value of `upgrade xp cost`.

### GetUpgradeGoldCost
`public int GetUpgradeGoldCost(PartyBase party, int index)`

**Purpose:** Gets the current value of `upgrade gold cost`.

### InitializeHeroCharacterOnAfterLoad
`public void InitializeHeroCharacterOnAfterLoad()`

**Purpose:** Initializes the state, resources, or bindings for `hero character on after load`.

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

### GetPower
`public override float GetPower()`

**Purpose:** Gets the current value of `power`.

### GetBattlePower
`public override float GetBattlePower()`

**Purpose:** Gets the current value of `battle power`.

### GetMoraleResistance
`public override float GetMoraleResistance()`

**Purpose:** Gets the current value of `morale resistance`.

### GetSimulationAttackPower
`public void GetSimulationAttackPower(out float attackPoints, out float defencePoints, Equipment equipment = null)`

**Purpose:** Gets the current value of `simulation attack power`.

### GetHeadArmorSum
`public float GetHeadArmorSum(Equipment.EquipmentType equipmentType = Equipment.EquipmentType.Battle)`

**Purpose:** Gets the current value of `head armor sum`.

### GetBodyArmorSum
`public float GetBodyArmorSum(Equipment.EquipmentType equipmentType = Equipment.EquipmentType.Battle)`

**Purpose:** Gets the current value of `body armor sum`.

### GetLegArmorSum
`public float GetLegArmorSum(Equipment.EquipmentType equipmentType = Equipment.EquipmentType.Battle)`

**Purpose:** Gets the current value of `leg armor sum`.

### GetArmArmorSum
`public float GetArmArmorSum(Equipment.EquipmentType equipmentType = Equipment.EquipmentType.Battle)`

**Purpose:** Gets the current value of `arm armor sum`.

### GetHorseArmorSum
`public float GetHorseArmorSum(Equipment.EquipmentType equipmentType = Equipment.EquipmentType.Battle)`

**Purpose:** Gets the current value of `horse armor sum`.

### GetTotalArmorSum
`public float GetTotalArmorSum(Equipment.EquipmentType equipmentType = Equipment.EquipmentType.Battle)`

**Purpose:** Gets the current value of `total armor sum`.

### GetBodyProperties
`public override BodyProperties GetBodyProperties(Equipment equipment, int seed = -1)`

**Purpose:** Gets the current value of `body properties`.

### SetTransferableInPartyScreen
`public void SetTransferableInPartyScreen(bool isTransferable)`

**Purpose:** Sets the value or state of `transferable in party screen`.

### SetTransferableInHideouts
`public void SetTransferableInHideouts(bool isTransferable)`

**Purpose:** Sets the value or state of `transferable in hideouts`.

### ClearAttributes
`public void ClearAttributes()`

**Purpose:** Handles logic related to `clear attributes`.

### GetTraitLevel
`public int GetTraitLevel(TraitObject trait)`

**Purpose:** Gets the current value of `trait level`.

### GetPerkValue
`public bool GetPerkValue(PerkObject perk)`

**Purpose:** Gets the current value of `perk value`.

### GetSkillValue
`public override int GetSkillValue(SkillObject skill)`

**Purpose:** Gets the current value of `skill value`.

### GetPersona
`public TraitObject GetPersona()`

**Purpose:** Gets the current value of `persona`.

### GetMountKeySeed
`public override int GetMountKeySeed()`

**Purpose:** Gets the current value of `mount key seed`.

### GetFormationClass
`public override FormationClass GetFormationClass()`

**Purpose:** Gets the current value of `formation class`.

### Find
`public static CharacterObject Find(string idString)`

**Purpose:** Handles logic related to `find`.

### FindFirst
`public static CharacterObject FindFirst(Predicate<CharacterObject> predicate)`

**Purpose:** Handles logic related to `find first`.

### FindAll
`public static IEnumerable<CharacterObject> FindAll(Predicate<CharacterObject> predicate)`

**Purpose:** Handles logic related to `find all`.

## Usage Example

```csharp
var value = new CharacterObject();
value.ToString();
```

## See Also

- [Complete Class Catalog](../catalog)