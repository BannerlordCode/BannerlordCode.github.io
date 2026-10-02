---
title: "AgentBuildData"
description: "AgentBuildData：TaleWorlds.MountAndBlade 的 public 类；公开成员 92 个（方法 41、属性 48、字段 0）。源文件 TaleWorlds.MountAndBlade/AgentBuildData.cs。"
---
# AgentBuildData

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AgentBuildData`
**File:** `TaleWorlds.MountAndBlade/AgentBuildData.cs`

## 概述

AgentBuildData 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/AgentBuildData.cs。它是一个 public 类，继承链为 AgentBuildData。public/protected 成员共 92 个：41 方法、48 属性、3 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AgentBuildData 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 AgentBuildData。成员构成以属性为主（属性 48/92，方法 41/92），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/AgentBuildData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AgentData` | `public AgentData AgentData` | 属性 |
| `AgentCharacter` | `public BasicCharacterObject AgentCharacter` | 属性 |
| `AgentMonster` | `public Monster AgentMonster` | 属性 |
| `AgentOverridenSpawnEquipment` | `public Equipment AgentOverridenSpawnEquipment` | 属性 |
| `AgentOverridenSpawnMissionEquipment` | `public MissionEquipment AgentOverridenSpawnMissionEquipment` | 属性 |
| `AgentEquipmentSeed` | `public int AgentEquipmentSeed` | 属性 |
| `AgentNoHorses` | `public bool AgentNoHorses` | 属性 |
| `AgentMountKey` | `public string AgentMountKey` | 属性 |
| `AgentNoWeapons` | `public bool AgentNoWeapons` | 属性 |
| `AgentNoArmor` | `public bool AgentNoArmor` | 属性 |
| `AgentFixedEquipment` | `public bool AgentFixedEquipment` | 属性 |
| `AgentCivilianEquipment` | `public bool AgentCivilianEquipment` | 属性 |
| `AgentClothingColor1` | `public uint AgentClothingColor1` | 属性 |
| `AgentClothingColor2` | `public uint AgentClothingColor2` | 属性 |
| `BodyPropertiesOverriden` | `public bool BodyPropertiesOverriden` | 属性 |
| `AgentBodyProperties` | `public BodyProperties AgentBodyProperties` | 属性 |
| `AgeOverriden` | `public bool AgeOverriden` | 属性 |
| `AgentAge` | `public int AgentAge` | 属性 |
| `PrepareImmediately` | `public bool PrepareImmediately` | 属性 |
| `GenderOverriden` | `public bool GenderOverriden` | 属性 |
| `AgentIsFemale` | `public bool AgentIsFemale` | 属性 |
| `AgentRace` | `public int AgentRace` | 属性 |
| `AgentOrigin` | `public IAgentOriginBase AgentOrigin` | 属性 |
| `AgentController` | `public AgentControllerType AgentController` | 属性 |
| `AgentTeam` | `public Team AgentTeam` | 属性 |
| `AgentIsReinforcement` | `public bool AgentIsReinforcement` | 属性 |
| `AgentSpawnsIntoOwnFormation` | `public bool AgentSpawnsIntoOwnFormation` | 属性 |
| `AgentSpawnsUsingOwnTroopClass` | `public bool AgentSpawnsUsingOwnTroopClass` | 属性 |
| `MakeUnitStandOutDistance` | `public float MakeUnitStandOutDistance` | 属性 |
| `AgentInitialPosition` | `public Vec3? AgentInitialPosition` | 属性 |
| `AgentInitialDirection` | `public Vec2? AgentInitialDirection` | 属性 |
| `AgentFormation` | `public Formation AgentFormation` | 属性 |
| `AgentFormationTroopSpawnCount` | `public int AgentFormationTroopSpawnCount` | 属性 |
| `AgentFormationTroopSpawnIndex` | `public int AgentFormationTroopSpawnIndex` | 属性 |
| `AgentMissionPeer` | `public MissionPeer AgentMissionPeer` | 属性 |
| `OwningAgentMissionPeer` | `public MissionPeer OwningAgentMissionPeer` | 属性 |
| `AgentIndexOverriden` | `public bool AgentIndexOverriden` | 属性 |
| `AgentIndex` | `public int AgentIndex` | 属性 |
| `AgentMountIndexOverriden` | `public bool AgentMountIndexOverriden` | 属性 |
| `AgentMountIndex` | `public int AgentMountIndex` | 属性 |
| `AgentVisualsIndex` | `public int AgentVisualsIndex` | 属性 |
| `AgentBanner` | `public Banner AgentBanner` | 属性 |
| `AgentBannerItem` | `public ItemObject AgentBannerItem` | 属性 |
| `AgentBannerReplacementWeaponItem` | `public ItemObject AgentBannerReplacementWeaponItem` | 属性 |
| `AgentCanSpawnOutsideOfMissionBoundary` | `public bool AgentCanSpawnOutsideOfMissionBoundary` | 属性 |
| `RandomizeColors` | `public bool RandomizeColors` | 属性 |
| `UseFaceCache` | `public bool UseFaceCache` | 属性 |
| `FaceCacheId` | `public int FaceCacheId` | 属性 |
| `AgentBuildData` | `public AgentBuildData(AgentData agentData) : this()` | 构造函数 |
| `AgentBuildData` | `public AgentBuildData(IAgentOriginBase agentOrigin) : this()` | 构造函数 |
| `AgentBuildData` | `public AgentBuildData(BasicCharacterObject characterObject) : this()` | 构造函数 |
| `Character` | `public AgentBuildData Character(BasicCharacterObject characterObject)` | 方法 |
| `Controller` | `public AgentBuildData Controller(AgentControllerType controller)` | 方法 |
| `Team` | `public AgentBuildData Team(Team team)` | 方法 |
| `IsReinforcement` | `public AgentBuildData IsReinforcement(bool isReinforcement)` | 方法 |
| `SpawnsIntoOwnFormation` | `public AgentBuildData SpawnsIntoOwnFormation(bool spawnIntoOwnFormation)` | 方法 |
| `SpawnsUsingOwnTroopClass` | `public AgentBuildData SpawnsUsingOwnTroopClass(bool spawnUsingOwnTroopClass)` | 方法 |
| `MakeUnitStandOutOfFormationDistance` | `public AgentBuildData MakeUnitStandOutOfFormationDistance(float makeUnitStandOutDistance)` | 方法 |
| `InitialPosition` | `public AgentBuildData InitialPosition(in Vec3 position)` | 方法 |
| `InitialDirection` | `public AgentBuildData InitialDirection(in Vec2 direction)` | 方法 |
| `InitialFrameFromSpawnPointEntity` | `public AgentBuildData InitialFrameFromSpawnPointEntity(GameEntity entity)` | 方法 |
| `InitialFrameFromSpawnPointEntity` | `public AgentBuildData InitialFrameFromSpawnPointEntity(WeakGameEntity entity)` | 方法 |
| `Formation` | `public AgentBuildData Formation(Formation formation)` | 方法 |
| `Monster` | `public AgentBuildData Monster(Monster monster)` | 方法 |
| `VisualsIndex` | `public AgentBuildData VisualsIndex(int index)` | 方法 |
| `Equipment` | `public AgentBuildData Equipment(Equipment equipment)` | 方法 |
| `MissionEquipment` | `public AgentBuildData MissionEquipment(MissionEquipment missionEquipment)` | 方法 |
| `EquipmentSeed` | `public AgentBuildData EquipmentSeed(int seed)` | 方法 |
| `NoHorses` | `public AgentBuildData NoHorses(bool noHorses)` | 方法 |
| `NoWeapons` | `public AgentBuildData NoWeapons(bool noWeapons)` | 方法 |
| `NoArmor` | `public AgentBuildData NoArmor(bool noArmor)` | 方法 |
| `FixedEquipment` | `public AgentBuildData FixedEquipment(bool fixedEquipment)` | 方法 |
| `CivilianEquipment` | `public AgentBuildData CivilianEquipment(bool civilianEquipment)` | 方法 |
| `SetPrepareImmediately` | `public AgentBuildData SetPrepareImmediately()` | 方法 |
| `ClothingColor1` | `public AgentBuildData ClothingColor1(uint color)` | 方法 |
| `ClothingColor2` | `public AgentBuildData ClothingColor2(uint color)` | 方法 |
| `MissionPeer` | `public AgentBuildData MissionPeer(MissionPeer missionPeer)` | 方法 |
| `OwningMissionPeer` | `public AgentBuildData OwningMissionPeer(MissionPeer missionPeer)` | 方法 |
| `BodyProperties` | `public AgentBuildData BodyProperties(BodyProperties bodyProperties)` | 方法 |
| `Age` | `public AgentBuildData Age(int age)` | 方法 |
| `TroopOrigin` | `public AgentBuildData TroopOrigin(IAgentOriginBase troopOrigin)` | 方法 |
| `IsFemale` | `public AgentBuildData IsFemale(bool isFemale)` | 方法 |
| `Race` | `public AgentBuildData Race(int race)` | 方法 |
| `MountKey` | `public AgentBuildData MountKey(string mountKey)` | 方法 |
| `Index` | `public AgentBuildData Index(int index)` | 方法 |
| `MountIndex` | `public AgentBuildData MountIndex(int mountIndex)` | 方法 |
| `Banner` | `public AgentBuildData Banner(Banner banner)` | 方法 |
| `BannerItem` | `public AgentBuildData BannerItem(ItemObject bannerItem)` | 方法 |
| `BannerReplacementWeaponItem` | `public AgentBuildData BannerReplacementWeaponItem(ItemObject weaponItem)` | 方法 |
| `FormationTroopSpawnCount` | `public AgentBuildData FormationTroopSpawnCount(int formationTroopCount)` | 方法 |
| `FormationTroopSpawnIndex` | `public AgentBuildData FormationTroopSpawnIndex(int formationTroopIndex)` | 方法 |
| `CanSpawnOutsideOfMissionBoundary` | `public AgentBuildData CanSpawnOutsideOfMissionBoundary(bool canSpawn)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
- [同命名空间 AgentComponent](../AgentComponent)
