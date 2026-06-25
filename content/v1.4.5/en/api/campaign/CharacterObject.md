---
title: "CharacterObject"
description: "Auto-generated class reference for CharacterObject."
---
# CharacterObject

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class CharacterObject : BasicCharacterObject, ICharacterData`
**Base:** `BasicCharacterObject`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CharacterObject.cs`

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

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of CharacterObject from the subsystem API first
CharacterObject characterObject = ...;
var result = characterObject.ToString();
```

### MaxHitPoints
`public override int MaxHitPoints()`

**Purpose:** **Purpose:** Executes the MaxHitPoints logic.

```csharp
// Obtain an instance of CharacterObject from the subsystem API first
CharacterObject characterObject = ...;
var result = characterObject.MaxHitPoints();
```

### CreateFrom
`public static CharacterObject CreateFrom(CharacterObject character, StaticBodyProperties? staticBodyProperties = null)`

**Purpose:** **Purpose:** Constructs a new from entity and returns it to the caller.

```csharp
// Static call; no instance required
CharacterObject.CreateFrom(character, null);
```

### AfterRegister
`public override void AfterRegister()`

**Purpose:** **Purpose:** Executes the AfterRegister logic.

```csharp
// Obtain an instance of CharacterObject from the subsystem API first
CharacterObject characterObject = ...;
characterObject.AfterRegister();
```

### GetBodyPropertiesMin
`public override BodyProperties GetBodyPropertiesMin(bool returnBaseValue = false)`

**Purpose:** **Purpose:** Reads and returns the body properties min value held by the this instance.

```csharp
// Obtain an instance of CharacterObject from the subsystem API first
CharacterObject characterObject = ...;
var result = characterObject.GetBodyPropertiesMin(false);
```

### GetBodyPropertiesMax
`public override BodyProperties GetBodyPropertiesMax(bool returnBaseValue = false)`

**Purpose:** **Purpose:** Reads and returns the body properties max value held by the this instance.

```csharp
// Obtain an instance of CharacterObject from the subsystem API first
CharacterObject characterObject = ...;
var result = characterObject.GetBodyPropertiesMax(false);
```

### UpdatePlayerCharacterBodyProperties
`public override void UpdatePlayerCharacterBodyProperties(BodyProperties properties, int race, bool isFemale)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of player character body properties.

```csharp
// Obtain an instance of CharacterObject from the subsystem API first
CharacterObject characterObject = ...;
characterObject.UpdatePlayerCharacterBodyProperties(properties, 0, false);
```

### GetDefaultOccupation
`public Occupation GetDefaultOccupation()`

**Purpose:** **Purpose:** Reads and returns the default occupation value held by the this instance.

```csharp
// Obtain an instance of CharacterObject from the subsystem API first
CharacterObject characterObject = ...;
var result = characterObject.GetDefaultOccupation();
```

### HasThrowingWeapon
`public bool HasThrowingWeapon()`

**Purpose:** **Purpose:** Determines whether the this instance already holds throwing weapon.

```csharp
// Obtain an instance of CharacterObject from the subsystem API first
CharacterObject characterObject = ...;
var result = characterObject.HasThrowingWeapon();
```

### GetUpgradeXpCost
`public int GetUpgradeXpCost(PartyBase party, int index)`

**Purpose:** **Purpose:** Reads and returns the upgrade xp cost value held by the this instance.

```csharp
// Obtain an instance of CharacterObject from the subsystem API first
CharacterObject characterObject = ...;
var result = characterObject.GetUpgradeXpCost(party, 0);
```

### GetUpgradeGoldCost
`public int GetUpgradeGoldCost(PartyBase party, int index)`

**Purpose:** **Purpose:** Reads and returns the upgrade gold cost value held by the this instance.

```csharp
// Obtain an instance of CharacterObject from the subsystem API first
CharacterObject characterObject = ...;
var result = characterObject.GetUpgradeGoldCost(party, 0);
```

### InitializeHeroCharacterOnAfterLoad
`public void InitializeHeroCharacterOnAfterLoad()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by hero character on after load.

```csharp
// Obtain an instance of CharacterObject from the subsystem API first
CharacterObject characterObject = ...;
characterObject.InitializeHeroCharacterOnAfterLoad();
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** **Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of CharacterObject from the subsystem API first
CharacterObject characterObject = ...;
characterObject.Deserialize(objectManager, node);
```

### GetPower
`public override float GetPower()`

**Purpose:** **Purpose:** Reads and returns the power value held by the this instance.

```csharp
// Obtain an instance of CharacterObject from the subsystem API first
CharacterObject characterObject = ...;
var result = characterObject.GetPower();
```

### GetBattlePower
`public override float GetBattlePower()`

**Purpose:** **Purpose:** Reads and returns the battle power value held by the this instance.

```csharp
// Obtain an instance of CharacterObject from the subsystem API first
CharacterObject characterObject = ...;
var result = characterObject.GetBattlePower();
```

### GetMoraleResistance
`public override float GetMoraleResistance()`

**Purpose:** **Purpose:** Reads and returns the morale resistance value held by the this instance.

```csharp
// Obtain an instance of CharacterObject from the subsystem API first
CharacterObject characterObject = ...;
var result = characterObject.GetMoraleResistance();
```

### GetSimulationAttackPower
`public void GetSimulationAttackPower(out float attackPoints, out float defencePoints, Equipment equipment = null)`

**Purpose:** **Purpose:** Reads and returns the simulation attack power value held by the this instance.

```csharp
// Obtain an instance of CharacterObject from the subsystem API first
CharacterObject characterObject = ...;
characterObject.GetSimulationAttackPower(attackPoints, defencePoints, null);
```

### GetHeadArmorSum
`public float GetHeadArmorSum(Equipment.EquipmentType equipmentType = Equipment.EquipmentType.Battle)`

**Purpose:** **Purpose:** Reads and returns the head armor sum value held by the this instance.

```csharp
// Obtain an instance of CharacterObject from the subsystem API first
CharacterObject characterObject = ...;
var result = characterObject.GetHeadArmorSum(equipment.EquipmentType.Battle);
```

### GetBodyArmorSum
`public float GetBodyArmorSum(Equipment.EquipmentType equipmentType = Equipment.EquipmentType.Battle)`

**Purpose:** **Purpose:** Reads and returns the body armor sum value held by the this instance.

```csharp
// Obtain an instance of CharacterObject from the subsystem API first
CharacterObject characterObject = ...;
var result = characterObject.GetBodyArmorSum(equipment.EquipmentType.Battle);
```

### GetLegArmorSum
`public float GetLegArmorSum(Equipment.EquipmentType equipmentType = Equipment.EquipmentType.Battle)`

**Purpose:** **Purpose:** Reads and returns the leg armor sum value held by the this instance.

```csharp
// Obtain an instance of CharacterObject from the subsystem API first
CharacterObject characterObject = ...;
var result = characterObject.GetLegArmorSum(equipment.EquipmentType.Battle);
```

### GetArmArmorSum
`public float GetArmArmorSum(Equipment.EquipmentType equipmentType = Equipment.EquipmentType.Battle)`

**Purpose:** **Purpose:** Reads and returns the arm armor sum value held by the this instance.

```csharp
// Obtain an instance of CharacterObject from the subsystem API first
CharacterObject characterObject = ...;
var result = characterObject.GetArmArmorSum(equipment.EquipmentType.Battle);
```

### GetHorseArmorSum
`public float GetHorseArmorSum(Equipment.EquipmentType equipmentType = Equipment.EquipmentType.Battle)`

**Purpose:** **Purpose:** Reads and returns the horse armor sum value held by the this instance.

```csharp
// Obtain an instance of CharacterObject from the subsystem API first
CharacterObject characterObject = ...;
var result = characterObject.GetHorseArmorSum(equipment.EquipmentType.Battle);
```

### GetTotalArmorSum
`public float GetTotalArmorSum(Equipment.EquipmentType equipmentType = Equipment.EquipmentType.Battle)`

**Purpose:** **Purpose:** Reads and returns the total armor sum value held by the this instance.

```csharp
// Obtain an instance of CharacterObject from the subsystem API first
CharacterObject characterObject = ...;
var result = characterObject.GetTotalArmorSum(equipment.EquipmentType.Battle);
```

### GetBodyProperties
`public override BodyProperties GetBodyProperties(Equipment equipment, int seed = -1)`

**Purpose:** **Purpose:** Reads and returns the body properties value held by the this instance.

```csharp
// Obtain an instance of CharacterObject from the subsystem API first
CharacterObject characterObject = ...;
var result = characterObject.GetBodyProperties(equipment, 0);
```

### SetTransferableInPartyScreen
`public void SetTransferableInPartyScreen(bool isTransferable)`

**Purpose:** **Purpose:** Assigns a new value to transferable in party screen and updates the object's internal state.

```csharp
// Obtain an instance of CharacterObject from the subsystem API first
CharacterObject characterObject = ...;
characterObject.SetTransferableInPartyScreen(false);
```

### SetTransferableInHideouts
`public void SetTransferableInHideouts(bool isTransferable)`

**Purpose:** **Purpose:** Assigns a new value to transferable in hideouts and updates the object's internal state.

```csharp
// Obtain an instance of CharacterObject from the subsystem API first
CharacterObject characterObject = ...;
characterObject.SetTransferableInHideouts(false);
```

### ClearAttributes
`public void ClearAttributes()`

**Purpose:** **Purpose:** Removes all attributes from the this instance.

```csharp
// Obtain an instance of CharacterObject from the subsystem API first
CharacterObject characterObject = ...;
characterObject.ClearAttributes();
```

### GetTraitLevel
`public int GetTraitLevel(TraitObject trait)`

**Purpose:** **Purpose:** Reads and returns the trait level value held by the this instance.

```csharp
// Obtain an instance of CharacterObject from the subsystem API first
CharacterObject characterObject = ...;
var result = characterObject.GetTraitLevel(trait);
```

### GetPerkValue
`public bool GetPerkValue(PerkObject perk)`

**Purpose:** **Purpose:** Reads and returns the perk value value held by the this instance.

```csharp
// Obtain an instance of CharacterObject from the subsystem API first
CharacterObject characterObject = ...;
var result = characterObject.GetPerkValue(perk);
```

### GetSkillValue
`public override int GetSkillValue(SkillObject skill)`

**Purpose:** **Purpose:** Reads and returns the skill value value held by the this instance.

```csharp
// Obtain an instance of CharacterObject from the subsystem API first
CharacterObject characterObject = ...;
var result = characterObject.GetSkillValue(skill);
```

### GetPersona
`public TraitObject GetPersona()`

**Purpose:** **Purpose:** Reads and returns the persona value held by the this instance.

```csharp
// Obtain an instance of CharacterObject from the subsystem API first
CharacterObject characterObject = ...;
var result = characterObject.GetPersona();
```

### GetMountKeySeed
`public override int GetMountKeySeed()`

**Purpose:** **Purpose:** Reads and returns the mount key seed value held by the this instance.

```csharp
// Obtain an instance of CharacterObject from the subsystem API first
CharacterObject characterObject = ...;
var result = characterObject.GetMountKeySeed();
```

### GetFormationClass
`public override FormationClass GetFormationClass()`

**Purpose:** **Purpose:** Reads and returns the formation class value held by the this instance.

```csharp
// Obtain an instance of CharacterObject from the subsystem API first
CharacterObject characterObject = ...;
var result = characterObject.GetFormationClass();
```

### Find
`public static CharacterObject Find(string idString)`

**Purpose:** **Purpose:** Finds the matching entry in the current collection or scope.

```csharp
// Static call; no instance required
CharacterObject.Find("example");
```

### FindFirst
`public static CharacterObject FindFirst(Predicate<CharacterObject> predicate)`

**Purpose:** **Purpose:** Looks up the matching first in the current collection or scope.

```csharp
// Static call; no instance required
CharacterObject.FindFirst(predicate);
```

### FindAll
`public static IEnumerable<CharacterObject> FindAll(Predicate<CharacterObject> predicate)`

**Purpose:** **Purpose:** Looks up the matching all in the current collection or scope.

```csharp
// Static call; no instance required
CharacterObject.FindAll(predicate);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CharacterObject characterObject = ...;
characterObject.ToString();
```

## See Also

- [Area Index](../)