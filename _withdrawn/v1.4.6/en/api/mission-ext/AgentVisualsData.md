---
title: "AgentVisualsData"
description: "AgentVisualsData: a public class in TaleWorlds.MountAndBlade; 59 exposed members (27 methods, 30 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/AgentVisualsData.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AgentVisualsData

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AgentVisualsData`
**File:** `TaleWorlds.MountAndBlade/AgentVisualsData.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

AgentVisualsData lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/AgentVisualsData.cs. It is a public class; the inheritance chain is AgentVisualsData. It exposes 59 public/protected members: 27 methods, 30 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AgentVisualsData lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain AgentVisualsData. The surface is property-led (properties 30/59, methods 27/59), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/AgentVisualsData.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ActionSetData` | `public MBActionSet ActionSetData` | property |
| `FrameData` | `public MatrixFrame FrameData` | property |
| `BodyPropertiesData` | `public BodyProperties BodyPropertiesData` | property |
| `EquipmentData` | `public Equipment EquipmentData` | property |
| `RightWieldedItemIndexData` | `public int RightWieldedItemIndexData` | property |
| `LeftWieldedItemIndexData` | `public int LeftWieldedItemIndexData` | property |
| `SkeletonTypeData` | `public SkeletonType SkeletonTypeData` | property |
| `BannerData` | `public Banner BannerData` | property |
| `CachedWeaponSlot0Entity` | `public GameEntity CachedWeaponSlot0Entity` | property |
| `CachedWeaponSlot1Entity` | `public GameEntity CachedWeaponSlot1Entity` | property |
| `CachedWeaponSlot2Entity` | `public GameEntity CachedWeaponSlot2Entity` | property |
| `CachedWeaponSlot3Entity` | `public GameEntity CachedWeaponSlot3Entity` | property |
| `CachedWeaponSlot4Entity` | `public GameEntity CachedWeaponSlot4Entity` | property |
| `SceneData` | `public Scene SceneData` | property |
| `MonsterData` | `public Monster MonsterData` | property |
| `PrepareImmediatelyData` | `public bool PrepareImmediatelyData` | property |
| `UseScaledWeaponsData` | `public bool UseScaledWeaponsData` | property |
| `UseTranslucencyData` | `public bool UseTranslucencyData` | property |
| `UseTesselationData` | `public bool UseTesselationData` | property |
| `UseMorphAnimsData` | `public bool UseMorphAnimsData` | property |
| `ClothColor1Data` | `public uint ClothColor1Data` | property |
| `ClothColor2Data` | `public uint ClothColor2Data` | property |
| `ScaleData` | `public float ScaleData` | property |
| `CharacterObjectStringIdData` | `public string CharacterObjectStringIdData` | property |
| `ActionCodeData` | `public ActionIndexCache ActionCodeData` | property |
| `EntityData` | `public GameEntity EntityData` | property |
| `HasClippingPlaneData` | `public bool HasClippingPlaneData` | property |
| `MountCreationKeyData` | `public string MountCreationKeyData` | property |
| `AddColorRandomnessData` | `public bool AddColorRandomnessData` | property |
| `RaceData` | `public int RaceData` | property |
| `AgentVisualsData` | `public AgentVisualsData(AgentVisualsData agentVisualsData)` | constructor |
| `AgentVisualsData` | `public AgentVisualsData()` | constructor |
| `Equipment` | `public AgentVisualsData Equipment(Equipment equipment)` | method |
| `BodyProperties` | `public AgentVisualsData BodyProperties(BodyProperties bodyProperties)` | method |
| `Frame` | `public AgentVisualsData Frame(MatrixFrame frame)` | method |
| `ActionSet` | `public AgentVisualsData ActionSet(MBActionSet actionSet)` | method |
| `Scene` | `public AgentVisualsData Scene(Scene scene)` | method |
| `Monster` | `public AgentVisualsData Monster(Monster monster)` | method |
| `PrepareImmediately` | `public AgentVisualsData PrepareImmediately(bool prepareImmediately)` | method |
| `UseScaledWeapons` | `public AgentVisualsData UseScaledWeapons(bool useScaledWeapons)` | method |
| `SkeletonType` | `public AgentVisualsData SkeletonType(SkeletonType skeletonType)` | method |
| `UseMorphAnims` | `public AgentVisualsData UseMorphAnims(bool useMorphAnims)` | method |
| `ClothColor1` | `public AgentVisualsData ClothColor1(uint clothColor1)` | method |
| `ClothColor2` | `public AgentVisualsData ClothColor2(uint clothColor2)` | method |
| `Banner` | `public AgentVisualsData Banner(Banner banner)` | method |
| `Race` | `public AgentVisualsData Race(int race)` | method |
| `GetCachedWeaponEntity` | `public GameEntity GetCachedWeaponEntity(EquipmentIndex slotIndex)` | method |
| `CachedWeaponEntity` | `public AgentVisualsData CachedWeaponEntity(EquipmentIndex slotIndex, GameEntity cachedWeaponEntity)` | method |
| `Entity` | `public AgentVisualsData Entity(GameEntity entity)` | method |
| `UseTranslucency` | `public AgentVisualsData UseTranslucency(bool useTranslucency)` | method |
| `UseTesselation` | `public AgentVisualsData UseTesselation(bool useTesselation)` | method |
| `ActionCode` | `public AgentVisualsData ActionCode(in ActionIndexCache actionCode)` | method |
| `RightWieldedItemIndex` | `public AgentVisualsData RightWieldedItemIndex(int rightWieldedItemIndex)` | method |
| `LeftWieldedItemIndex` | `public AgentVisualsData LeftWieldedItemIndex(int leftWieldedItemIndex)` | method |
| `Scale` | `public AgentVisualsData Scale(float scale)` | method |
| `CharacterObjectStringId` | `public AgentVisualsData CharacterObjectStringId(string characterObjectStringId)` | method |
| `HasClippingPlane` | `public AgentVisualsData HasClippingPlane(bool hasClippingPlane)` | method |
| `MountCreationKey` | `public AgentVisualsData MountCreationKey(string mountCreationKey)` | method |
| `AddColorRandomness` | `public AgentVisualsData AddColorRandomness(bool addColorRandomness)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
