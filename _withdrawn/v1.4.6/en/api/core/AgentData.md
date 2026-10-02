---
title: "AgentData"
description: "AgentData: a public class in TaleWorlds.Core; 43 exposed members (19 methods, 22 properties, 0 fields). Source: TaleWorlds.Core/AgentData.cs."
---
# AgentData

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class AgentData`
**File:** `TaleWorlds.Core/AgentData.cs`

## Overview

AgentData lives in the TaleWorlds.Core module, source file TaleWorlds.Core/AgentData.cs. It is a public class; the inheritance chain is AgentData. It exposes 43 public/protected members: 19 methods, 22 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AgentData is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain AgentData. The surface is property-led (properties 22/43, methods 19/43), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/AgentData.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AgentCharacter` | `public BasicCharacterObject AgentCharacter` | property |
| `AgentMonster` | `public Monster AgentMonster` | property |
| `AgentOwnerParty` | `public IBattleCombatant AgentOwnerParty` | property |
| `AgentOverridenEquipment` | `public Equipment AgentOverridenEquipment` | property |
| `AgentEquipmentSeed` | `public int AgentEquipmentSeed` | property |
| `AgentNoHorses` | `public bool AgentNoHorses` | property |
| `AgentMountKey` | `public string AgentMountKey` | property |
| `AgentNoWeapons` | `public bool AgentNoWeapons` | property |
| `AgentNoArmor` | `public bool AgentNoArmor` | property |
| `AgentFixedEquipment` | `public bool AgentFixedEquipment` | property |
| `AgentCivilianEquipment` | `public bool AgentCivilianEquipment` | property |
| `AgentClothingColor1` | `public uint AgentClothingColor1` | property |
| `AgentClothingColor2` | `public uint AgentClothingColor2` | property |
| `PrepareImmediately` | `public bool PrepareImmediately` | property |
| `BodyPropertiesOverriden` | `public bool BodyPropertiesOverriden` | property |
| `AgentBodyProperties` | `public BodyProperties AgentBodyProperties` | property |
| `AgeOverriden` | `public bool AgeOverriden` | property |
| `AgentAge` | `public int AgentAge` | property |
| `GenderOverriden` | `public bool GenderOverriden` | property |
| `AgentIsFemale` | `public bool AgentIsFemale` | property |
| `AgentRace` | `public int AgentRace` | property |
| `AgentOrigin` | `public IAgentOriginBase AgentOrigin` | property |
| `AgentData` | `public AgentData(IAgentOriginBase agentOrigin) : this(agentOrigin.Troop)` | constructor |
| `AgentData` | `public AgentData(BasicCharacterObject characterObject)` | constructor |
| `Character` | `public AgentData Character(BasicCharacterObject characterObject)` | method |
| `Monster` | `public AgentData Monster(Monster monster)` | method |
| `OwnerParty` | `public AgentData OwnerParty(IBattleCombatant owner)` | method |
| `Equipment` | `public AgentData Equipment(Equipment equipment)` | method |
| `EquipmentSeed` | `public AgentData EquipmentSeed(int seed)` | method |
| `NoHorses` | `public AgentData NoHorses(bool noHorses)` | method |
| `NoWeapons` | `public AgentData NoWeapons(bool noWeapons)` | method |
| `NoArmor` | `public AgentData NoArmor(bool noArmor)` | method |
| `FixedEquipment` | `public AgentData FixedEquipment(bool fixedEquipment)` | method |
| `CivilianEquipment` | `public AgentData CivilianEquipment(bool civilianEquipment)` | method |
| `SetPrepareImmediately` | `public AgentData SetPrepareImmediately()` | method |
| `ClothingColor1` | `public AgentData ClothingColor1(uint color)` | method |
| `ClothingColor2` | `public AgentData ClothingColor2(uint color)` | method |
| `BodyProperties` | `public AgentData BodyProperties(BodyProperties bodyProperties)` | method |
| `Age` | `public AgentData Age(int age)` | method |
| `TroopOrigin` | `public AgentData TroopOrigin(IAgentOriginBase troopOrigin)` | method |
| `IsFemale` | `public AgentData IsFemale(bool isFemale)` | method |
| `Race` | `public AgentData Race(int race)` | method |
| `MountKey` | `public AgentData MountKey(string mountKey)` | method |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentFlag](../AgentFlag)
