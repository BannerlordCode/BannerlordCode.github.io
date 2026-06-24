<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BasicCharacterObject`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BasicCharacterObject

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class BasicCharacterObject : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/BasicCharacterObject.cs`

## Overview

`BasicCharacterObject` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `BodyPropertyRange` | `public virtual MBBodyProperty BodyPropertyRange { get; set; }` |
| `DefaultFormationGroup` | `public int DefaultFormationGroup { get; }` |
| `DefaultFormationClass` | `public FormationClass DefaultFormationClass { get; }` |
| `KnockbackResistance` | `public float KnockbackResistance { get; }` |
| `KnockdownResistance` | `public float KnockdownResistance { get; }` |
| `DismountResistance` | `public float DismountResistance { get; }` |
| `FormationPositionPreference` | `public FormationPositionPreference FormationPositionPreference { get; set; }` |
| `IsInfantry` | `public bool IsInfantry { get; }` |
| `Race` | `public int Race { get; }` |
| `IsFemale` | `public virtual bool IsFemale { get; }` |
| `FaceMeshCache` | `public bool FaceMeshCache { get; }` |
| `Equipment` | `public virtual Equipment Equipment { get; }` |
| `IsObsolete` | `public bool IsObsolete { get; }` |
| `Level` | `public virtual int Level { get; set; }` |
| `Culture` | `public BasicCultureObject Culture { get; set; }` |
| `Age` | `public virtual float Age { get; set; }` |
| `FaceDirtAmount` | `public float FaceDirtAmount { get; }` |
| `IsSoldier` | `public bool IsSoldier { get; }` |

## Key Methods

### GetName
`public override TextObject GetName()`

**Purpose:** Gets the current value of `name`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### InitializeEquipmentsOnLoad
`public void InitializeEquipmentsOnLoad(BasicCharacterObject character)`

**Purpose:** Initializes the state, resources, or bindings for `equipments on load`.

### GetFirstEquipment
`public Equipment GetFirstEquipment(Func<Equipment, bool> predicate)`

**Purpose:** Gets the current value of `first equipment`.

### GetBodyPropertiesMin
`public virtual BodyProperties GetBodyPropertiesMin(bool returnBaseValue = false)`

**Purpose:** Gets the current value of `body properties min`.

### GetBodyPropertiesMax
`public virtual BodyProperties GetBodyPropertiesMax(bool returnBaseValue = false)`

**Purpose:** Gets the current value of `body properties max`.

### GetBodyProperties
`public virtual BodyProperties GetBodyProperties(Equipment equipment, int seed = -1)`

**Purpose:** Gets the current value of `body properties`.

### UpdatePlayerCharacterBodyProperties
`public virtual void UpdatePlayerCharacterBodyProperties(BodyProperties properties, int race, bool isFemale)`

**Purpose:** Updates the state or data of `player character body properties`.

### GetDefaultFaceSeed
`public int GetDefaultFaceSeed(int rank)`

**Purpose:** Gets the current value of `default face seed`.

### GetStepSize
`public float GetStepSize()`

**Purpose:** Gets the current value of `step size`.

### HasMount
`public bool HasMount()`

**Purpose:** Checks whether the current object has/contains `mount`.

### MaxHitPoints
`public virtual int MaxHitPoints()`

**Purpose:** Handles logic related to `max hit points`.

### GetPower
`public virtual float GetPower()`

**Purpose:** Gets the current value of `power`.

### GetBattlePower
`public virtual float GetBattlePower()`

**Purpose:** Gets the current value of `battle power`.

### GetMoraleResistance
`public virtual float GetMoraleResistance()`

**Purpose:** Gets the current value of `morale resistance`.

### GetMountKeySeed
`public virtual int GetMountKeySeed()`

**Purpose:** Gets the current value of `mount key seed`.

### GetBattleTier
`public virtual int GetBattleTier()`

**Purpose:** Gets the current value of `battle tier`.

### GetDefaultCharacterSkills
`public MBCharacterSkills GetDefaultCharacterSkills()`

**Purpose:** Gets the current value of `default character skills`.

### GetSkillValue
`public virtual int GetSkillValue(SkillObject skill)`

**Purpose:** Gets the current value of `skill value`.

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

### GetFormationClass
`public virtual FormationClass GetFormationClass()`

**Purpose:** Gets the current value of `formation class`.

## Usage Example

```csharp
var value = new BasicCharacterObject();
value.GetName();
```

## See Also

- [Complete Class Catalog](../catalog)