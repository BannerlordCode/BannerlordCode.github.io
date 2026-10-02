---
title: "AgentVisuals"
description: "AgentVisuals: a public class in TaleWorlds.MountAndBlade.View, inheriting IAgentVisual; 50 exposed members (42 methods, 1 properties, 7 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/AgentVisuals.cs."
---
# AgentVisuals

**Namespace:** `TaleWorlds.MountAndBlade.View`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class AgentVisuals : IAgentVisual`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/AgentVisuals.cs`

## Overview

AgentVisuals lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/AgentVisuals.cs. It is a public class, implementing/inheriting IAgentVisual; the inheritance chain is AgentVisuals → IAgentVisual. It exposes 50 public/protected members: 42 methods, 1 properties, 7 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AgentVisuals is a top-level type in TaleWorlds.MountAndBlade.View, namespace matching the module directory; inheritance chain AgentVisuals → IAgentVisual. The surface is method-led (methods 42/50, properties 1/50), so it mostly exposes operations. IAgentVisual on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/AgentVisuals.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsFemale` | `public bool IsFemale` | property |
| `GetVisuals` | `public MBAgentVisuals GetVisuals()` | method |
| `Reset` | `public void Reset()` | method |
| `ResetNextFrame` | `public void ResetNextFrame()` | method |
| `GetFrame` | `public MatrixFrame GetFrame()` | method |
| `GetBodyProperties` | `public BodyProperties GetBodyProperties()` | method |
| `SetBodyProperties` | `public void SetBodyProperties(BodyProperties bodyProperties)` | method |
| `GetIsFemale` | `public bool GetIsFemale()` | method |
| `GetCharacterObjectID` | `public string GetCharacterObjectID()` | method |
| `SetCharacterObjectID` | `public void SetCharacterObjectID(string id)` | method |
| `GetEquipment` | `public Equipment GetEquipment()` | method |
| `GetCopyAgentVisualsData` | `public AgentVisualsData GetCopyAgentVisualsData()` | method |
| `GetEntity` | `public GameEntity GetEntity()` | method |
| `GetWeakEntity` | `public WeakGameEntity GetWeakEntity()` | method |
| `SetVisible` | `public void SetVisible(bool value)` | method |
| `GetGlobalStableEyePoint` | `public Vec3 GetGlobalStableEyePoint(bool isHumanoid)` | method |
| `GetGlobalStableNeckPoint` | `public Vec3 GetGlobalStableNeckPoint(bool isHumanoid)` | method |
| `AddPrefabToAgentVisualBoneByBoneType` | `public CompositeComponent AddPrefabToAgentVisualBoneByBoneType(string prefabName, HumanBone boneType)` | method |
| `AddPrefabToAgentVisualBoneByRealBoneIndex` | `public CompositeComponent AddPrefabToAgentVisualBoneByRealBoneIndex(string prefabName, sbyte realBoneIndex)` | method |
| `SetAgentLodZeroOrMax` | `public void SetAgentLodZeroOrMax(bool value)` | method |
| `GetScale` | `public float GetScale()` | method |
| `SetAction` | `public void SetAction(in ActionIndexCache actionIndex, float startProgress = 0f, bool forceFaceMorphRestart = true)` | method |
| `DoesActionContinueWithCurrentAction` | `public bool DoesActionContinueWithCurrentAction(in ActionIndexCache actionIndex)` | method |
| `GetAnimationParameterAtChannel` | `public float GetAnimationParameterAtChannel(int channelIndex)` | method |
| `Refresh` | `public void Refresh(bool needBatchedVersionForWeaponMeshes, AgentVisualsData data, bool forceUseFaceCache = false)` | method |
| `SetClothWindToWeaponAtIndex` | `public void SetClothWindToWeaponAtIndex(Vec3 localWindVector, bool isLocal, EquipmentIndex weaponIndex)` | method |
| `TickVisuals` | `public void TickVisuals()` | method |
| `Tick` | `public void Tick(AgentVisuals parentAgentVisuals, float dt, bool isEntityMoving = false, float speed = 0f)` | method |
| `Create` | `public static AgentVisuals Create(AgentVisualsData data, string name, bool isRandomProgress, bool needBatchedVersionForWeaponMeshes, bool forceUseFaceCache)` | method |
| `GetRandomGlossFactor` | `public static float GetRandomGlossFactor(Random randomGenerator)` | method |
| `GetRandomClothingColors` | `public static void GetRandomClothingColors(int seed, Color inputColor1, Color inputColor2, out Color color1, out Color color2)` | method |
| `SetFaceGenerationParams` | `public void SetFaceGenerationParams(FaceGenerationParams faceGenerationParams)` | method |
| `SetVoiceDefinitionIndex` | `public void SetVoiceDefinitionIndex(int voiceDefinitionIndex, float voicePitch)` | method |
| `StartRhubarbRecord` | `public void StartRhubarbRecord(string path, int soundId)` | method |
| `SetAgentLodZeroOrMaxExternal` | `public void SetAgentLodZeroOrMaxExternal(bool makeZero)` | method |
| `SetAgentLocalSpeed` | `public void SetAgentLocalSpeed(Vec2 speed)` | method |
| `SetLookDirection` | `public void SetLookDirection(Vec3 direction)` | method |
| `AddArmorMultiMeshesToAgentEntity` | `public void AddArmorMultiMeshesToAgentEntity(uint teamColor1, uint teamColor2)` | method |
| `MakeRandomVoiceForFacegen` | `public void MakeRandomVoiceForFacegen()` | method |
| `AddTeamColorToMesh` | `public static void AddTeamColorToMesh(MetaMesh metaMesh, uint color1, uint color2)` | method |
| `SetClothingColors` | `public void SetClothingColors(uint color1, uint color2)` | method |
| `GetClothingColors` | `public void GetClothingColors(out uint color1, out uint color2)` | method |
| `SetEntity` | `public void SetEntity(GameEntity entity)` | method |
| `RandomGlossinessRange` | `public const float RandomGlossinessRange` | field |
| `RandomClothingColor1HueRange` | `public const float RandomClothingColor1HueRange` | field |
| `RandomClothingColor1SaturationRange` | `public const float RandomClothingColor1SaturationRange` | field |
| `RandomClothingColor1BrightnessRange` | `public const float RandomClothingColor1BrightnessRange` | field |
| `RandomClothingColor2HueRange` | `public const float RandomClothingColor2HueRange` | field |
| `RandomClothingColor2SaturationRange` | `public const float RandomClothingColor2SaturationRange` | field |
| `RandomClothingColor2BrightnessRange` | `public const float RandomClothingColor2BrightnessRange` | field |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgentVisualsCreator](../AgentVisualsCreator)
- [same namespace BannerVisual](../BannerVisual)
- [same namespace BannerVisualCreator](../BannerVisualCreator)
- [same namespace BannerVisualExtensions](../BannerVisualExtensions)
