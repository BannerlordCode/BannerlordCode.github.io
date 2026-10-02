---
title: "AgentData"
description: "AgentData：TaleWorlds.Core 的 public 类；公开成员 43 个（方法 19、属性 22、字段 0）。源文件 TaleWorlds.Core/AgentData.cs。"
---
# AgentData

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class AgentData`
**File:** `TaleWorlds.Core/AgentData.cs`

## 概述

AgentData 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/AgentData.cs。它是一个 public 类，继承链为 AgentData。public/protected 成员共 43 个：19 方法、22 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AgentData 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 AgentData。成员构成以属性为主（属性 22/43，方法 19/43），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/AgentData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AgentCharacter` | `public BasicCharacterObject AgentCharacter` | 属性 |
| `AgentMonster` | `public Monster AgentMonster` | 属性 |
| `AgentOwnerParty` | `public IBattleCombatant AgentOwnerParty` | 属性 |
| `AgentOverridenEquipment` | `public Equipment AgentOverridenEquipment` | 属性 |
| `AgentEquipmentSeed` | `public int AgentEquipmentSeed` | 属性 |
| `AgentNoHorses` | `public bool AgentNoHorses` | 属性 |
| `AgentMountKey` | `public string AgentMountKey` | 属性 |
| `AgentNoWeapons` | `public bool AgentNoWeapons` | 属性 |
| `AgentNoArmor` | `public bool AgentNoArmor` | 属性 |
| `AgentFixedEquipment` | `public bool AgentFixedEquipment` | 属性 |
| `AgentCivilianEquipment` | `public bool AgentCivilianEquipment` | 属性 |
| `AgentClothingColor1` | `public uint AgentClothingColor1` | 属性 |
| `AgentClothingColor2` | `public uint AgentClothingColor2` | 属性 |
| `PrepareImmediately` | `public bool PrepareImmediately` | 属性 |
| `BodyPropertiesOverriden` | `public bool BodyPropertiesOverriden` | 属性 |
| `AgentBodyProperties` | `public BodyProperties AgentBodyProperties` | 属性 |
| `AgeOverriden` | `public bool AgeOverriden` | 属性 |
| `AgentAge` | `public int AgentAge` | 属性 |
| `GenderOverriden` | `public bool GenderOverriden` | 属性 |
| `AgentIsFemale` | `public bool AgentIsFemale` | 属性 |
| `AgentRace` | `public int AgentRace` | 属性 |
| `AgentOrigin` | `public IAgentOriginBase AgentOrigin` | 属性 |
| `AgentData` | `public AgentData(IAgentOriginBase agentOrigin) : this(agentOrigin.Troop)` | 构造函数 |
| `AgentData` | `public AgentData(BasicCharacterObject characterObject)` | 构造函数 |
| `Character` | `public AgentData Character(BasicCharacterObject characterObject)` | 方法 |
| `Monster` | `public AgentData Monster(Monster monster)` | 方法 |
| `OwnerParty` | `public AgentData OwnerParty(IBattleCombatant owner)` | 方法 |
| `Equipment` | `public AgentData Equipment(Equipment equipment)` | 方法 |
| `EquipmentSeed` | `public AgentData EquipmentSeed(int seed)` | 方法 |
| `NoHorses` | `public AgentData NoHorses(bool noHorses)` | 方法 |
| `NoWeapons` | `public AgentData NoWeapons(bool noWeapons)` | 方法 |
| `NoArmor` | `public AgentData NoArmor(bool noArmor)` | 方法 |
| `FixedEquipment` | `public AgentData FixedEquipment(bool fixedEquipment)` | 方法 |
| `CivilianEquipment` | `public AgentData CivilianEquipment(bool civilianEquipment)` | 方法 |
| `SetPrepareImmediately` | `public AgentData SetPrepareImmediately()` | 方法 |
| `ClothingColor1` | `public AgentData ClothingColor1(uint color)` | 方法 |
| `ClothingColor2` | `public AgentData ClothingColor2(uint color)` | 方法 |
| `BodyProperties` | `public AgentData BodyProperties(BodyProperties bodyProperties)` | 方法 |
| `Age` | `public AgentData Age(int age)` | 方法 |
| `TroopOrigin` | `public AgentData TroopOrigin(IAgentOriginBase troopOrigin)` | 方法 |
| `IsFemale` | `public AgentData IsFemale(bool isFemale)` | 方法 |
| `Race` | `public AgentData Race(int race)` | 方法 |
| `MountKey` | `public AgentData MountKey(string mountKey)` | 方法 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentFlag](../AgentFlag)
