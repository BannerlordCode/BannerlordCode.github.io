---
title: "AgentVisualsData"
description: "AgentVisualsData：TaleWorlds.MountAndBlade 的 public 类；公开成员 59 个（方法 27、属性 30、字段 0）。源文件 TaleWorlds.MountAndBlade/AgentVisualsData.cs。"
---
# AgentVisualsData

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AgentVisualsData`
**File:** `TaleWorlds.MountAndBlade/AgentVisualsData.cs`

## 概述

AgentVisualsData 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/AgentVisualsData.cs。它是一个 public 类，继承链为 AgentVisualsData。public/protected 成员共 59 个：27 方法、30 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AgentVisualsData 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 AgentVisualsData。成员构成以属性为主（属性 30/59，方法 27/59），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/AgentVisualsData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ActionSetData` | `public MBActionSet ActionSetData` | 属性 |
| `FrameData` | `public MatrixFrame FrameData` | 属性 |
| `BodyPropertiesData` | `public BodyProperties BodyPropertiesData` | 属性 |
| `EquipmentData` | `public Equipment EquipmentData` | 属性 |
| `RightWieldedItemIndexData` | `public int RightWieldedItemIndexData` | 属性 |
| `LeftWieldedItemIndexData` | `public int LeftWieldedItemIndexData` | 属性 |
| `SkeletonTypeData` | `public SkeletonType SkeletonTypeData` | 属性 |
| `BannerData` | `public Banner BannerData` | 属性 |
| `CachedWeaponSlot0Entity` | `public GameEntity CachedWeaponSlot0Entity` | 属性 |
| `CachedWeaponSlot1Entity` | `public GameEntity CachedWeaponSlot1Entity` | 属性 |
| `CachedWeaponSlot2Entity` | `public GameEntity CachedWeaponSlot2Entity` | 属性 |
| `CachedWeaponSlot3Entity` | `public GameEntity CachedWeaponSlot3Entity` | 属性 |
| `CachedWeaponSlot4Entity` | `public GameEntity CachedWeaponSlot4Entity` | 属性 |
| `SceneData` | `public Scene SceneData` | 属性 |
| `MonsterData` | `public Monster MonsterData` | 属性 |
| `PrepareImmediatelyData` | `public bool PrepareImmediatelyData` | 属性 |
| `UseScaledWeaponsData` | `public bool UseScaledWeaponsData` | 属性 |
| `UseTranslucencyData` | `public bool UseTranslucencyData` | 属性 |
| `UseTesselationData` | `public bool UseTesselationData` | 属性 |
| `UseMorphAnimsData` | `public bool UseMorphAnimsData` | 属性 |
| `ClothColor1Data` | `public uint ClothColor1Data` | 属性 |
| `ClothColor2Data` | `public uint ClothColor2Data` | 属性 |
| `ScaleData` | `public float ScaleData` | 属性 |
| `CharacterObjectStringIdData` | `public string CharacterObjectStringIdData` | 属性 |
| `ActionCodeData` | `public ActionIndexCache ActionCodeData` | 属性 |
| `EntityData` | `public GameEntity EntityData` | 属性 |
| `HasClippingPlaneData` | `public bool HasClippingPlaneData` | 属性 |
| `MountCreationKeyData` | `public string MountCreationKeyData` | 属性 |
| `AddColorRandomnessData` | `public bool AddColorRandomnessData` | 属性 |
| `RaceData` | `public int RaceData` | 属性 |
| `AgentVisualsData` | `public AgentVisualsData(AgentVisualsData agentVisualsData)` | 构造函数 |
| `AgentVisualsData` | `public AgentVisualsData()` | 构造函数 |
| `Equipment` | `public AgentVisualsData Equipment(Equipment equipment)` | 方法 |
| `BodyProperties` | `public AgentVisualsData BodyProperties(BodyProperties bodyProperties)` | 方法 |
| `Frame` | `public AgentVisualsData Frame(MatrixFrame frame)` | 方法 |
| `ActionSet` | `public AgentVisualsData ActionSet(MBActionSet actionSet)` | 方法 |
| `Scene` | `public AgentVisualsData Scene(Scene scene)` | 方法 |
| `Monster` | `public AgentVisualsData Monster(Monster monster)` | 方法 |
| `PrepareImmediately` | `public AgentVisualsData PrepareImmediately(bool prepareImmediately)` | 方法 |
| `UseScaledWeapons` | `public AgentVisualsData UseScaledWeapons(bool useScaledWeapons)` | 方法 |
| `SkeletonType` | `public AgentVisualsData SkeletonType(SkeletonType skeletonType)` | 方法 |
| `UseMorphAnims` | `public AgentVisualsData UseMorphAnims(bool useMorphAnims)` | 方法 |
| `ClothColor1` | `public AgentVisualsData ClothColor1(uint clothColor1)` | 方法 |
| `ClothColor2` | `public AgentVisualsData ClothColor2(uint clothColor2)` | 方法 |
| `Banner` | `public AgentVisualsData Banner(Banner banner)` | 方法 |
| `Race` | `public AgentVisualsData Race(int race)` | 方法 |
| `GetCachedWeaponEntity` | `public GameEntity GetCachedWeaponEntity(EquipmentIndex slotIndex)` | 方法 |
| `CachedWeaponEntity` | `public AgentVisualsData CachedWeaponEntity(EquipmentIndex slotIndex, GameEntity cachedWeaponEntity)` | 方法 |
| `Entity` | `public AgentVisualsData Entity(GameEntity entity)` | 方法 |
| `UseTranslucency` | `public AgentVisualsData UseTranslucency(bool useTranslucency)` | 方法 |
| `UseTesselation` | `public AgentVisualsData UseTesselation(bool useTesselation)` | 方法 |
| `ActionCode` | `public AgentVisualsData ActionCode(in ActionIndexCache actionCode)` | 方法 |
| `RightWieldedItemIndex` | `public AgentVisualsData RightWieldedItemIndex(int rightWieldedItemIndex)` | 方法 |
| `LeftWieldedItemIndex` | `public AgentVisualsData LeftWieldedItemIndex(int leftWieldedItemIndex)` | 方法 |
| `Scale` | `public AgentVisualsData Scale(float scale)` | 方法 |
| `CharacterObjectStringId` | `public AgentVisualsData CharacterObjectStringId(string characterObjectStringId)` | 方法 |
| `HasClippingPlane` | `public AgentVisualsData HasClippingPlane(bool hasClippingPlane)` | 方法 |
| `MountCreationKey` | `public AgentVisualsData MountCreationKey(string mountCreationKey)` | 方法 |
| `AddColorRandomness` | `public AgentVisualsData AddColorRandomness(bool addColorRandomness)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
