---
title: "BasicCharacterObject"
description: "BasicCharacterObject 的自动生成类参考。"
---
# BasicCharacterObject

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class BasicCharacterObject : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/BasicCharacterObject.cs`

## 概述

`BasicCharacterObject` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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

## 主要方法

### GetName
`public override TextObject GetName()`

**用途 / Purpose:** 读取并返回当前对象中 「name」 的结果。

```csharp
// 先通过子系统 API 拿到 BasicCharacterObject 实例
BasicCharacterObject basicCharacterObject = ...;
var result = basicCharacterObject.GetName();
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 BasicCharacterObject 实例
BasicCharacterObject basicCharacterObject = ...;
var result = basicCharacterObject.ToString();
```

### InitializeEquipmentsOnLoad
`public void InitializeEquipmentsOnLoad(BasicCharacterObject character)`

**用途 / Purpose:** 为 「equipments on load」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BasicCharacterObject 实例
BasicCharacterObject basicCharacterObject = ...;
basicCharacterObject.InitializeEquipmentsOnLoad(character);
```

### GetFirstEquipment
`public Equipment GetFirstEquipment(Func<Equipment, bool> predicate)`

**用途 / Purpose:** 读取并返回当前对象中 「first equipment」 的结果。

```csharp
// 先通过子系统 API 拿到 BasicCharacterObject 实例
BasicCharacterObject basicCharacterObject = ...;
var result = basicCharacterObject.GetFirstEquipment(func<Equipment, false);
```

### GetBodyPropertiesMin
`public virtual BodyProperties GetBodyPropertiesMin(bool returnBaseValue = false)`

**用途 / Purpose:** 读取并返回当前对象中 「body properties min」 的结果。

```csharp
// 先通过子系统 API 拿到 BasicCharacterObject 实例
BasicCharacterObject basicCharacterObject = ...;
var result = basicCharacterObject.GetBodyPropertiesMin(false);
```

### GetBodyPropertiesMax
`public virtual BodyProperties GetBodyPropertiesMax(bool returnBaseValue = false)`

**用途 / Purpose:** 读取并返回当前对象中 「body properties max」 的结果。

```csharp
// 先通过子系统 API 拿到 BasicCharacterObject 实例
BasicCharacterObject basicCharacterObject = ...;
var result = basicCharacterObject.GetBodyPropertiesMax(false);
```

### GetBodyProperties
`public virtual BodyProperties GetBodyProperties(Equipment equipment, int seed = -1)`

**用途 / Purpose:** 读取并返回当前对象中 「body properties」 的结果。

```csharp
// 先通过子系统 API 拿到 BasicCharacterObject 实例
BasicCharacterObject basicCharacterObject = ...;
var result = basicCharacterObject.GetBodyProperties(equipment, 0);
```

### UpdatePlayerCharacterBodyProperties
`public virtual void UpdatePlayerCharacterBodyProperties(BodyProperties properties, int race, bool isFemale)`

**用途 / Purpose:** 重新计算并更新 「player character body properties」 的最新表示。

```csharp
// 先通过子系统 API 拿到 BasicCharacterObject 实例
BasicCharacterObject basicCharacterObject = ...;
basicCharacterObject.UpdatePlayerCharacterBodyProperties(properties, 0, false);
```

### GetDefaultFaceSeed
`public int GetDefaultFaceSeed(int rank)`

**用途 / Purpose:** 读取并返回当前对象中 「default face seed」 的结果。

```csharp
// 先通过子系统 API 拿到 BasicCharacterObject 实例
BasicCharacterObject basicCharacterObject = ...;
var result = basicCharacterObject.GetDefaultFaceSeed(0);
```

### GetStepSize
`public float GetStepSize()`

**用途 / Purpose:** 读取并返回当前对象中 「step size」 的结果。

```csharp
// 先通过子系统 API 拿到 BasicCharacterObject 实例
BasicCharacterObject basicCharacterObject = ...;
var result = basicCharacterObject.GetStepSize();
```

### HasMount
`public bool HasMount()`

**用途 / Purpose:** 判断当前对象是否已经持有 「mount」。

```csharp
// 先通过子系统 API 拿到 BasicCharacterObject 实例
BasicCharacterObject basicCharacterObject = ...;
var result = basicCharacterObject.HasMount();
```

### MaxHitPoints
`public virtual int MaxHitPoints()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 BasicCharacterObject 实例
BasicCharacterObject basicCharacterObject = ...;
var result = basicCharacterObject.MaxHitPoints();
```

### GetPower
`public virtual float GetPower()`

**用途 / Purpose:** 读取并返回当前对象中 「power」 的结果。

```csharp
// 先通过子系统 API 拿到 BasicCharacterObject 实例
BasicCharacterObject basicCharacterObject = ...;
var result = basicCharacterObject.GetPower();
```

### GetBattlePower
`public virtual float GetBattlePower()`

**用途 / Purpose:** 读取并返回当前对象中 「battle power」 的结果。

```csharp
// 先通过子系统 API 拿到 BasicCharacterObject 实例
BasicCharacterObject basicCharacterObject = ...;
var result = basicCharacterObject.GetBattlePower();
```

### GetMoraleResistance
`public virtual float GetMoraleResistance()`

**用途 / Purpose:** 读取并返回当前对象中 「morale resistance」 的结果。

```csharp
// 先通过子系统 API 拿到 BasicCharacterObject 实例
BasicCharacterObject basicCharacterObject = ...;
var result = basicCharacterObject.GetMoraleResistance();
```

### GetMountKeySeed
`public virtual int GetMountKeySeed()`

**用途 / Purpose:** 读取并返回当前对象中 「mount key seed」 的结果。

```csharp
// 先通过子系统 API 拿到 BasicCharacterObject 实例
BasicCharacterObject basicCharacterObject = ...;
var result = basicCharacterObject.GetMountKeySeed();
```

### GetBattleTier
`public virtual int GetBattleTier()`

**用途 / Purpose:** 读取并返回当前对象中 「battle tier」 的结果。

```csharp
// 先通过子系统 API 拿到 BasicCharacterObject 实例
BasicCharacterObject basicCharacterObject = ...;
var result = basicCharacterObject.GetBattleTier();
```

### GetDefaultCharacterSkills
`public MBCharacterSkills GetDefaultCharacterSkills()`

**用途 / Purpose:** 读取并返回当前对象中 「default character skills」 的结果。

```csharp
// 先通过子系统 API 拿到 BasicCharacterObject 实例
BasicCharacterObject basicCharacterObject = ...;
var result = basicCharacterObject.GetDefaultCharacterSkills();
```

### GetSkillValue
`public virtual int GetSkillValue(SkillObject skill)`

**用途 / Purpose:** 读取并返回当前对象中 「skill value」 的结果。

```csharp
// 先通过子系统 API 拿到 BasicCharacterObject 实例
BasicCharacterObject basicCharacterObject = ...;
var result = basicCharacterObject.GetSkillValue(skill);
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 BasicCharacterObject 实例
BasicCharacterObject basicCharacterObject = ...;
basicCharacterObject.Deserialize(objectManager, node);
```

### GetFormationClass
`public virtual FormationClass GetFormationClass()`

**用途 / Purpose:** 读取并返回当前对象中 「formation class」 的结果。

```csharp
// 先通过子系统 API 拿到 BasicCharacterObject 实例
BasicCharacterObject basicCharacterObject = ...;
var result = basicCharacterObject.GetFormationClass();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BasicCharacterObject basicCharacterObject = ...;
basicCharacterObject.GetName();
```

## 参见

- [本区域目录](../)