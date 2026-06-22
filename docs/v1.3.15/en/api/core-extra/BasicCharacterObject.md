<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BasicCharacterObject`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BasicCharacterObject

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `BasicCharacterObject` is a class in the `TaleWorlds.Core` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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


## Key Methods

### GetName

```csharp
public override TextObject GetName()
```

### ToString

```csharp
public override string ToString()
```

### InitializeEquipmentsOnLoad

```csharp
public void InitializeEquipmentsOnLoad(BasicCharacterObject character)
```

### GetFirstEquipment

```csharp
public Equipment GetFirstEquipment(Func<Equipment, bool> predicate)
```

### GetBodyPropertiesMin

```csharp
public virtual BodyProperties GetBodyPropertiesMin(bool returnBaseValue = false)
```

### GetBodyPropertiesMax

```csharp
public virtual BodyProperties GetBodyPropertiesMax(bool returnBaseValue = false)
```

### GetBodyProperties

```csharp
public virtual BodyProperties GetBodyProperties(Equipment equipment, int seed = -1)
```

### UpdatePlayerCharacterBodyProperties

```csharp
public virtual void UpdatePlayerCharacterBodyProperties(BodyProperties properties, int race, bool isFemale)
```

### GetDefaultFaceSeed

```csharp
public int GetDefaultFaceSeed(int rank)
```

### GetStepSize

```csharp
public float GetStepSize()
```

### HasMount

```csharp
public bool HasMount()
```

### MaxHitPoints

```csharp
public virtual int MaxHitPoints()
```

### GetPower

```csharp
public virtual float GetPower()
```

### GetBattlePower

```csharp
public virtual float GetBattlePower()
```

### GetMoraleResistance

```csharp
public virtual float GetMoraleResistance()
```

### GetMountKeySeed

```csharp
public virtual int GetMountKeySeed()
```

### GetBattleTier

```csharp
public virtual int GetBattleTier()
```

### GetDefaultCharacterSkills

```csharp
public MBCharacterSkills GetDefaultCharacterSkills()
```

### GetSkillValue

```csharp
public virtual int GetSkillValue(SkillObject skill)
```

### Deserialize

```csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)