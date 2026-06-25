---
title: "BasicCharacterObject"
description: "Auto-generated class reference for BasicCharacterObject."
---
# BasicCharacterObject

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class BasicCharacterObject : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/BasicCharacterObject.cs`

## Overview

`BasicCharacterObject` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public virtual TextObject Name { get; }` |
| `BodyPropertyRange` | `public virtual MBBodyProperty BodyPropertyRange { get; set; }` |
| `DefaultFormationGroup` | `public int DefaultFormationGroup { get; }` |
| `DefaultFormationClass` | `public FormationClass DefaultFormationClass { get; }` |
| `KnockbackResistance` | `public float KnockbackResistance { get; }` |
| `KnockdownResistance` | `public float KnockdownResistance { get; }` |
| `DismountResistance` | `public float DismountResistance { get; }` |
| `FormationPositionPreference` | `public FormationPositionPreference FormationPositionPreference { get; set; }` |
| `IsInfantry` | `public bool IsInfantry { get; }` |
| `IsMounted` | `public virtual bool IsMounted { get; }` |
| `IsRanged` | `public virtual bool IsRanged { get; }` |
| `SkillFactor` | `public float SkillFactor { get; set; }` |
| `Race` | `public int Race { get; }` |
| `IsFemale` | `public virtual bool IsFemale { get; }` |
| `FaceMeshCache` | `public bool FaceMeshCache { get; }` |
| `Equipment` | `public virtual Equipment Equipment { get; }` |
| `BattleEquipments` | `public virtual IEnumerable<Equipment> BattleEquipments { get; }` |
| `FirstBattleEquipment` | `public virtual Equipment FirstBattleEquipment { get; }` |
| `RandomBattleEquipment` | `public virtual Equipment RandomBattleEquipment { get; }` |
| `CivilianEquipments` | `public virtual IEnumerable<Equipment> CivilianEquipments { get; }` |
| `FirstCivilianEquipment` | `public virtual Equipment FirstCivilianEquipment { get; }` |
| `RandomCivilianEquipment` | `public virtual Equipment RandomCivilianEquipment { get; }` |
| `GetRandomEquipment` | `public virtual Equipment GetRandomEquipment { get; }` |
| `IsObsolete` | `public bool IsObsolete { get; }` |
| `Level` | `public virtual int Level { get; set; }` |
| `Culture` | `public BasicCultureObject Culture { get; set; }` |
| `IsPlayerCharacter` | `public virtual bool IsPlayerCharacter { get; set; }` |
| `Age` | `public virtual float Age { get; set; }` |
| `HitPoints` | `public virtual int HitPoints { get; }` |
| `FaceDirtAmount` | `public float FaceDirtAmount { get; }` |
| `IsHero` | `public virtual bool IsHero { get; }` |
| `IsSoldier` | `public bool IsSoldier { get; }` |

## Key Methods

### GetName
`public override TextObject GetName()`

**Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of BasicCharacterObject from the subsystem API first
BasicCharacterObject basicCharacterObject = ...;
var result = basicCharacterObject.GetName();
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of BasicCharacterObject from the subsystem API first
BasicCharacterObject basicCharacterObject = ...;
var result = basicCharacterObject.ToString();
```

### InitializeEquipmentsOnLoad
`public void InitializeEquipmentsOnLoad(BasicCharacterObject character)`

**Purpose:** Prepares the resources, state, or bindings required by equipments on load.

```csharp
// Obtain an instance of BasicCharacterObject from the subsystem API first
BasicCharacterObject basicCharacterObject = ...;
basicCharacterObject.InitializeEquipmentsOnLoad(character);
```

### GetFirstEquipment
`public Equipment GetFirstEquipment(Func<Equipment, bool> predicate)`

**Purpose:** Reads and returns the first equipment value held by the this instance.

```csharp
// Obtain an instance of BasicCharacterObject from the subsystem API first
BasicCharacterObject basicCharacterObject = ...;
var result = basicCharacterObject.GetFirstEquipment(func<Equipment, false);
```

### GetBodyPropertiesMin
`public virtual BodyProperties GetBodyPropertiesMin(bool returnBaseValue = false)`

**Purpose:** Reads and returns the body properties min value held by the this instance.

```csharp
// Obtain an instance of BasicCharacterObject from the subsystem API first
BasicCharacterObject basicCharacterObject = ...;
var result = basicCharacterObject.GetBodyPropertiesMin(false);
```

### GetBodyPropertiesMax
`public virtual BodyProperties GetBodyPropertiesMax(bool returnBaseValue = false)`

**Purpose:** Reads and returns the body properties max value held by the this instance.

```csharp
// Obtain an instance of BasicCharacterObject from the subsystem API first
BasicCharacterObject basicCharacterObject = ...;
var result = basicCharacterObject.GetBodyPropertiesMax(false);
```

### GetBodyProperties
`public virtual BodyProperties GetBodyProperties(Equipment equipment, int seed = -1)`

**Purpose:** Reads and returns the body properties value held by the this instance.

```csharp
// Obtain an instance of BasicCharacterObject from the subsystem API first
BasicCharacterObject basicCharacterObject = ...;
var result = basicCharacterObject.GetBodyProperties(equipment, 0);
```

### UpdatePlayerCharacterBodyProperties
`public virtual void UpdatePlayerCharacterBodyProperties(BodyProperties properties, int race, bool isFemale)`

**Purpose:** Recalculates and stores the latest representation of player character body properties.

```csharp
// Obtain an instance of BasicCharacterObject from the subsystem API first
BasicCharacterObject basicCharacterObject = ...;
basicCharacterObject.UpdatePlayerCharacterBodyProperties(properties, 0, false);
```

### GetDefaultFaceSeed
`public int GetDefaultFaceSeed(int rank)`

**Purpose:** Reads and returns the default face seed value held by the this instance.

```csharp
// Obtain an instance of BasicCharacterObject from the subsystem API first
BasicCharacterObject basicCharacterObject = ...;
var result = basicCharacterObject.GetDefaultFaceSeed(0);
```

### GetStepSize
`public float GetStepSize()`

**Purpose:** Reads and returns the step size value held by the this instance.

```csharp
// Obtain an instance of BasicCharacterObject from the subsystem API first
BasicCharacterObject basicCharacterObject = ...;
var result = basicCharacterObject.GetStepSize();
```

### HasMount
`public bool HasMount()`

**Purpose:** Determines whether the this instance already holds mount.

```csharp
// Obtain an instance of BasicCharacterObject from the subsystem API first
BasicCharacterObject basicCharacterObject = ...;
var result = basicCharacterObject.HasMount();
```

### MaxHitPoints
`public virtual int MaxHitPoints()`

**Purpose:** Executes the MaxHitPoints logic.

```csharp
// Obtain an instance of BasicCharacterObject from the subsystem API first
BasicCharacterObject basicCharacterObject = ...;
var result = basicCharacterObject.MaxHitPoints();
```

### GetPower
`public virtual float GetPower()`

**Purpose:** Reads and returns the power value held by the this instance.

```csharp
// Obtain an instance of BasicCharacterObject from the subsystem API first
BasicCharacterObject basicCharacterObject = ...;
var result = basicCharacterObject.GetPower();
```

### GetBattlePower
`public virtual float GetBattlePower()`

**Purpose:** Reads and returns the battle power value held by the this instance.

```csharp
// Obtain an instance of BasicCharacterObject from the subsystem API first
BasicCharacterObject basicCharacterObject = ...;
var result = basicCharacterObject.GetBattlePower();
```

### GetMoraleResistance
`public virtual float GetMoraleResistance()`

**Purpose:** Reads and returns the morale resistance value held by the this instance.

```csharp
// Obtain an instance of BasicCharacterObject from the subsystem API first
BasicCharacterObject basicCharacterObject = ...;
var result = basicCharacterObject.GetMoraleResistance();
```

### GetMountKeySeed
`public virtual int GetMountKeySeed()`

**Purpose:** Reads and returns the mount key seed value held by the this instance.

```csharp
// Obtain an instance of BasicCharacterObject from the subsystem API first
BasicCharacterObject basicCharacterObject = ...;
var result = basicCharacterObject.GetMountKeySeed();
```

### GetBattleTier
`public virtual int GetBattleTier()`

**Purpose:** Reads and returns the battle tier value held by the this instance.

```csharp
// Obtain an instance of BasicCharacterObject from the subsystem API first
BasicCharacterObject basicCharacterObject = ...;
var result = basicCharacterObject.GetBattleTier();
```

### GetDefaultCharacterSkills
`public MBCharacterSkills GetDefaultCharacterSkills()`

**Purpose:** Reads and returns the default character skills value held by the this instance.

```csharp
// Obtain an instance of BasicCharacterObject from the subsystem API first
BasicCharacterObject basicCharacterObject = ...;
var result = basicCharacterObject.GetDefaultCharacterSkills();
```

### GetSkillValue
`public virtual int GetSkillValue(SkillObject skill)`

**Purpose:** Reads and returns the skill value value held by the this instance.

```csharp
// Obtain an instance of BasicCharacterObject from the subsystem API first
BasicCharacterObject basicCharacterObject = ...;
var result = basicCharacterObject.GetSkillValue(skill);
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of BasicCharacterObject from the subsystem API first
BasicCharacterObject basicCharacterObject = ...;
basicCharacterObject.Deserialize(objectManager, node);
```

### GetFormationClass
`public virtual FormationClass GetFormationClass()`

**Purpose:** Reads and returns the formation class value held by the this instance.

```csharp
// Obtain an instance of BasicCharacterObject from the subsystem API first
BasicCharacterObject basicCharacterObject = ...;
var result = basicCharacterObject.GetFormationClass();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BasicCharacterObject basicCharacterObject = ...;
basicCharacterObject.GetName();
```

## See Also

- [Area Index](../)