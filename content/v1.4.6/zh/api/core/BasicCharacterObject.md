---
title: "BasicCharacterObject"
description: "BasicCharacterObject：TaleWorlds.Core 的 public 类，继承 MBObjectBase；公开成员 65 个（方法 26、属性 33、字段 5）。源文件 TaleWorlds.Core/BasicCharacterObject.cs。"
---
# BasicCharacterObject

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class BasicCharacterObject : MBObjectBase`
**File:** `TaleWorlds.Core/BasicCharacterObject.cs`

## 概述

BasicCharacterObject 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/BasicCharacterObject.cs。它是一个 public 类，实现/继承 MBObjectBase，继承链为 BasicCharacterObject → MBObjectBase。public/protected 成员共 65 个：26 方法、33 属性、5 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BasicCharacterObject 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 BasicCharacterObject → MBObjectBase。成员构成以属性为主（属性 33/65，方法 26/65），对外主要以状态读取接口暴露。继承链上的 MBObjectBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/BasicCharacterObject.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Name` | `public virtual TextObject Name` | 属性 |
| `GetName` | `public override TextObject GetName()` | 方法 |
| `ToString` | `public override string ToString()` | 方法 |
| `BodyPropertyRange` | `public virtual MBBodyProperty BodyPropertyRange` | 属性 |
| `DefaultFormationGroup` | `public int DefaultFormationGroup` | 属性 |
| `DefaultFormationClass` | `public FormationClass DefaultFormationClass` | 属性 |
| `KnockbackResistance` | `public float KnockbackResistance` | 属性 |
| `KnockdownResistance` | `public float KnockdownResistance` | 属性 |
| `DismountResistance` | `public float DismountResistance` | 属性 |
| `FormationPositionPreference` | `public FormationPositionPreference FormationPositionPreference` | 属性 |
| `IsInfantry` | `public bool IsInfantry` | 属性 |
| `IsMounted` | `public virtual bool IsMounted` | 属性 |
| `IsRanged` | `public virtual bool IsRanged` | 属性 |
| `SkillFactor` | `public float SkillFactor` | 属性 |
| `Race` | `public int Race` | 属性 |
| `IsFemale` | `public virtual bool IsFemale` | 属性 |
| `FaceMeshCache` | `public bool FaceMeshCache` | 属性 |
| `MBReadOnlyList` | `protected virtual MBReadOnlyList<Equipment>AllEquipments` | 属性 |
| `Equipment` | `public virtual Equipment Equipment` | 属性 |
| `IEnumerable` | `public virtual IEnumerable<Equipment>BattleEquipments` | 属性 |
| `FirstBattleEquipment` | `public virtual Equipment FirstBattleEquipment` | 属性 |
| `RandomBattleEquipment` | `public virtual Equipment RandomBattleEquipment` | 属性 |
| `IEnumerable` | `public virtual IEnumerable<Equipment>CivilianEquipments` | 属性 |
| `FirstCivilianEquipment` | `public virtual Equipment FirstCivilianEquipment` | 属性 |
| `RandomCivilianEquipment` | `public virtual Equipment RandomCivilianEquipment` | 属性 |
| `GetRandomEquipment` | `public virtual Equipment GetRandomEquipment` | 属性 |
| `IsObsolete` | `public bool IsObsolete` | 属性 |
| `InitializeEquipmentsOnLoad` | `public void InitializeEquipmentsOnLoad(BasicCharacterObject character)` | 方法 |
| `GetFirstEquipment` | `public Equipment GetFirstEquipment(Func<Equipment, bool>predicate)` | 方法 |
| `Level` | `public virtual int Level` | 属性 |
| `Culture` | `public BasicCultureObject Culture` | 属性 |
| `IsPlayerCharacter` | `public virtual bool IsPlayerCharacter` | 属性 |
| `Age` | `public virtual float Age` | 属性 |
| `HitPoints` | `public virtual int HitPoints` | 属性 |
| `GetBodyPropertiesMin` | `public virtual BodyProperties GetBodyPropertiesMin(bool returnBaseValue = false)` | 方法 |
| `FillFrom` | `protected void FillFrom(BasicCharacterObject character)` | 方法 |
| `GetBodyPropertiesMax` | `public virtual BodyProperties GetBodyPropertiesMax(bool returnBaseValue = false)` | 方法 |
| `GetBodyProperties` | `public virtual BodyProperties GetBodyProperties(Equipment equipment, int seed = -1)` | 方法 |
| `UpdatePlayerCharacterBodyProperties` | `public virtual void UpdatePlayerCharacterBodyProperties(BodyProperties properties, int race, bool isFemale)` | 方法 |
| `FaceDirtAmount` | `public float FaceDirtAmount` | 属性 |
| `IsHero` | `public virtual bool IsHero` | 属性 |
| `IsSoldier` | `public bool IsSoldier` | 属性 |
| `BasicCharacterObject` | `public BasicCharacterObject()` | 构造函数 |
| `GetDefaultFaceSeed` | `public int GetDefaultFaceSeed(int rank)` | 方法 |
| `GetStepSize` | `public float GetStepSize()` | 方法 |
| `HasMount` | `public bool HasMount()` | 方法 |
| `MaxHitPoints` | `public virtual int MaxHitPoints()` | 方法 |
| `GetPower` | `public virtual float GetPower()` | 方法 |
| `GetBattlePower` | `public virtual float GetBattlePower()` | 方法 |
| `GetMoraleResistance` | `public virtual float GetMoraleResistance()` | 方法 |
| `GetMountKeySeed` | `public virtual int GetMountKeySeed()` | 方法 |
| `GetBattleTier` | `public virtual int GetBattleTier()` | 方法 |
| `GetDefaultCharacterSkills` | `public MBCharacterSkills GetDefaultCharacterSkills()` | 方法 |
| `GetSkillValue` | `public virtual int GetSkillValue(SkillObject skill)` | 方法 |
| `InitializeHeroBasicCharacterOnAfterLoad` | `protected void InitializeHeroBasicCharacterOnAfterLoad(BasicCharacterObject originCharacter)` | 方法 |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | 方法 |
| `AddEquipment` | `protected void AddEquipment(MBEquipmentRoster equipmentRoster, Equipment.EquipmentType equipmentType)` | 方法 |
| `FetchDefaultFormationGroup` | `protected int FetchDefaultFormationGroup(string innerText)` | 方法 |
| `GetFormationClass` | `public virtual FormationClass GetFormationClass()` | 方法 |
| `AutoGeneratedInstanceCollectObjects` | `protected override void AutoGeneratedInstanceCollectObjects(List<object>collectedObjects)` | 方法 |
| `SkillAffectingMaxLevel` | `public static readonly int SkillAffectingMaxLevel` | 字段 |
| `DefaultKnockbackResistance` | `public const float DefaultKnockbackResistance` | 字段 |
| `DefaultKnockdownResistance` | `public const float DefaultKnockdownResistance` | 字段 |
| `DefaultDismountResistance` | `public const float DefaultDismountResistance` | 字段 |
| `MaxBattleTier` | `public const int MaxBattleTier` | 字段 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
