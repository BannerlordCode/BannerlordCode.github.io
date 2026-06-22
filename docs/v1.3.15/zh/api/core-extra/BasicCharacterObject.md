<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BasicCharacterObject`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BasicCharacterObject

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`BasicCharacterObject` 是 `TaleWorlds.Core` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)