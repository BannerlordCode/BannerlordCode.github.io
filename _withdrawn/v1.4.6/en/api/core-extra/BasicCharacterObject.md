---
title: "BasicCharacterObject"
description: "BasicCharacterObject: a public class in TaleWorlds.Core, inheriting MBObjectBase; 65 exposed members (26 methods, 33 properties, 5 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/BasicCharacterObject.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BasicCharacterObject

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class BasicCharacterObject : MBObjectBase`
**File:** `TaleWorlds.Core/BasicCharacterObject.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

BasicCharacterObject lives in the TaleWorlds.Core module, source file TaleWorlds.Core/BasicCharacterObject.cs. It is a public class, implementing/inheriting MBObjectBase; the inheritance chain is BasicCharacterObject → MBObjectBase. It exposes 65 public/protected members: 26 methods, 33 properties, 5 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BasicCharacterObject lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain BasicCharacterObject → MBObjectBase. The surface is property-led (properties 33/65, methods 26/65), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/BasicCharacterObject.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Name` | `public virtual TextObject Name` | property |
| `GetName` | `public override TextObject GetName()` | method |
| `ToString` | `public override string ToString()` | method |
| `BodyPropertyRange` | `public virtual MBBodyProperty BodyPropertyRange` | property |
| `DefaultFormationGroup` | `public int DefaultFormationGroup` | property |
| `DefaultFormationClass` | `public FormationClass DefaultFormationClass` | property |
| `KnockbackResistance` | `public float KnockbackResistance` | property |
| `KnockdownResistance` | `public float KnockdownResistance` | property |
| `DismountResistance` | `public float DismountResistance` | property |
| `FormationPositionPreference` | `public FormationPositionPreference FormationPositionPreference` | property |
| `IsInfantry` | `public bool IsInfantry` | property |
| `IsMounted` | `public virtual bool IsMounted` | property |
| `IsRanged` | `public virtual bool IsRanged` | property |
| `SkillFactor` | `public float SkillFactor` | property |
| `Race` | `public int Race` | property |
| `IsFemale` | `public virtual bool IsFemale` | property |
| `FaceMeshCache` | `public bool FaceMeshCache` | property |
| `MBReadOnlyList` | `protected virtual MBReadOnlyList<Equipment>AllEquipments` | property |
| `Equipment` | `public virtual Equipment Equipment` | property |
| `IEnumerable` | `public virtual IEnumerable<Equipment>BattleEquipments` | property |
| `FirstBattleEquipment` | `public virtual Equipment FirstBattleEquipment` | property |
| `RandomBattleEquipment` | `public virtual Equipment RandomBattleEquipment` | property |
| `IEnumerable` | `public virtual IEnumerable<Equipment>CivilianEquipments` | property |
| `FirstCivilianEquipment` | `public virtual Equipment FirstCivilianEquipment` | property |
| `RandomCivilianEquipment` | `public virtual Equipment RandomCivilianEquipment` | property |
| `GetRandomEquipment` | `public virtual Equipment GetRandomEquipment` | property |
| `IsObsolete` | `public bool IsObsolete` | property |
| `InitializeEquipmentsOnLoad` | `public void InitializeEquipmentsOnLoad(BasicCharacterObject character)` | method |
| `GetFirstEquipment` | `public Equipment GetFirstEquipment(Func<Equipment, bool>predicate)` | method |
| `Level` | `public virtual int Level` | property |
| `Culture` | `public BasicCultureObject Culture` | property |
| `IsPlayerCharacter` | `public virtual bool IsPlayerCharacter` | property |
| `Age` | `public virtual float Age` | property |
| `HitPoints` | `public virtual int HitPoints` | property |
| `GetBodyPropertiesMin` | `public virtual BodyProperties GetBodyPropertiesMin(bool returnBaseValue = false)` | method |
| `FillFrom` | `protected void FillFrom(BasicCharacterObject character)` | method |
| `GetBodyPropertiesMax` | `public virtual BodyProperties GetBodyPropertiesMax(bool returnBaseValue = false)` | method |
| `GetBodyProperties` | `public virtual BodyProperties GetBodyProperties(Equipment equipment, int seed = -1)` | method |
| `UpdatePlayerCharacterBodyProperties` | `public virtual void UpdatePlayerCharacterBodyProperties(BodyProperties properties, int race, bool isFemale)` | method |
| `FaceDirtAmount` | `public float FaceDirtAmount` | property |
| `IsHero` | `public virtual bool IsHero` | property |
| `IsSoldier` | `public bool IsSoldier` | property |
| `BasicCharacterObject` | `public BasicCharacterObject()` | constructor |
| `GetDefaultFaceSeed` | `public int GetDefaultFaceSeed(int rank)` | method |
| `GetStepSize` | `public float GetStepSize()` | method |
| `HasMount` | `public bool HasMount()` | method |
| `MaxHitPoints` | `public virtual int MaxHitPoints()` | method |
| `GetPower` | `public virtual float GetPower()` | method |
| `GetBattlePower` | `public virtual float GetBattlePower()` | method |
| `GetMoraleResistance` | `public virtual float GetMoraleResistance()` | method |
| `GetMountKeySeed` | `public virtual int GetMountKeySeed()` | method |
| `GetBattleTier` | `public virtual int GetBattleTier()` | method |
| `GetDefaultCharacterSkills` | `public MBCharacterSkills GetDefaultCharacterSkills()` | method |
| `GetSkillValue` | `public virtual int GetSkillValue(SkillObject skill)` | method |
| `InitializeHeroBasicCharacterOnAfterLoad` | `protected void InitializeHeroBasicCharacterOnAfterLoad(BasicCharacterObject originCharacter)` | method |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | method |
| `AddEquipment` | `protected void AddEquipment(MBEquipmentRoster equipmentRoster, Equipment.EquipmentType equipmentType)` | method |
| `FetchDefaultFormationGroup` | `protected int FetchDefaultFormationGroup(string innerText)` | method |
| `GetFormationClass` | `public virtual FormationClass GetFormationClass()` | method |
| `AutoGeneratedInstanceCollectObjects` | `protected override void AutoGeneratedInstanceCollectObjects(List<object>collectedObjects)` | method |
| `SkillAffectingMaxLevel` | `public static readonly int SkillAffectingMaxLevel` | field |
| `DefaultKnockbackResistance` | `public const float DefaultKnockbackResistance` | field |
| `DefaultKnockdownResistance` | `public const float DefaultKnockdownResistance` | field |
| `DefaultDismountResistance` | `public const float DefaultDismountResistance` | field |
| `MaxBattleTier` | `public const int MaxBattleTier` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
