---
title: "AgentVisuals"
description: "AgentVisuals：TaleWorlds.MountAndBlade.View 的 public 类，继承 IAgentVisual；公开成员 50 个（方法 42、属性 1、字段 7）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/AgentVisuals.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AgentVisuals

**Namespace:** `TaleWorlds.MountAndBlade.View`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class AgentVisuals : IAgentVisual`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/AgentVisuals.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

AgentVisuals 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/AgentVisuals.cs。它是一个 public 类，实现/继承 IAgentVisual，继承链为 AgentVisuals → IAgentVisual。public/protected 成员共 50 个：42 方法、1 属性、7 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AgentVisuals 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.View`，继承链 AgentVisuals → IAgentVisual。成员构成以方法为主（方法 42/50，属性 1/50），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/AgentVisuals.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsFemale` | `public bool IsFemale` | 属性 |
| `GetVisuals` | `public MBAgentVisuals GetVisuals()` | 方法 |
| `Reset` | `public void Reset()` | 方法 |
| `ResetNextFrame` | `public void ResetNextFrame()` | 方法 |
| `GetFrame` | `public MatrixFrame GetFrame()` | 方法 |
| `GetBodyProperties` | `public BodyProperties GetBodyProperties()` | 方法 |
| `SetBodyProperties` | `public void SetBodyProperties(BodyProperties bodyProperties)` | 方法 |
| `GetIsFemale` | `public bool GetIsFemale()` | 方法 |
| `GetCharacterObjectID` | `public string GetCharacterObjectID()` | 方法 |
| `SetCharacterObjectID` | `public void SetCharacterObjectID(string id)` | 方法 |
| `GetEquipment` | `public Equipment GetEquipment()` | 方法 |
| `GetCopyAgentVisualsData` | `public AgentVisualsData GetCopyAgentVisualsData()` | 方法 |
| `GetEntity` | `public GameEntity GetEntity()` | 方法 |
| `GetWeakEntity` | `public WeakGameEntity GetWeakEntity()` | 方法 |
| `SetVisible` | `public void SetVisible(bool value)` | 方法 |
| `GetGlobalStableEyePoint` | `public Vec3 GetGlobalStableEyePoint(bool isHumanoid)` | 方法 |
| `GetGlobalStableNeckPoint` | `public Vec3 GetGlobalStableNeckPoint(bool isHumanoid)` | 方法 |
| `AddPrefabToAgentVisualBoneByBoneType` | `public CompositeComponent AddPrefabToAgentVisualBoneByBoneType(string prefabName, HumanBone boneType)` | 方法 |
| `AddPrefabToAgentVisualBoneByRealBoneIndex` | `public CompositeComponent AddPrefabToAgentVisualBoneByRealBoneIndex(string prefabName, sbyte realBoneIndex)` | 方法 |
| `SetAgentLodZeroOrMax` | `public void SetAgentLodZeroOrMax(bool value)` | 方法 |
| `GetScale` | `public float GetScale()` | 方法 |
| `SetAction` | `public void SetAction(in ActionIndexCache actionIndex, float startProgress = 0f, bool forceFaceMorphRestart = true)` | 方法 |
| `DoesActionContinueWithCurrentAction` | `public bool DoesActionContinueWithCurrentAction(in ActionIndexCache actionIndex)` | 方法 |
| `GetAnimationParameterAtChannel` | `public float GetAnimationParameterAtChannel(int channelIndex)` | 方法 |
| `Refresh` | `public void Refresh(bool needBatchedVersionForWeaponMeshes, AgentVisualsData data, bool forceUseFaceCache = false)` | 方法 |
| `SetClothWindToWeaponAtIndex` | `public void SetClothWindToWeaponAtIndex(Vec3 localWindVector, bool isLocal, EquipmentIndex weaponIndex)` | 方法 |
| `TickVisuals` | `public void TickVisuals()` | 方法 |
| `Tick` | `public void Tick(AgentVisuals parentAgentVisuals, float dt, bool isEntityMoving = false, float speed = 0f)` | 方法 |
| `Create` | `public static AgentVisuals Create(AgentVisualsData data, string name, bool isRandomProgress, bool needBatchedVersionForWeaponMeshes, bool forceUseFaceCache)` | 方法 |
| `GetRandomGlossFactor` | `public static float GetRandomGlossFactor(Random randomGenerator)` | 方法 |
| `GetRandomClothingColors` | `public static void GetRandomClothingColors(int seed, Color inputColor1, Color inputColor2, out Color color1, out Color color2)` | 方法 |
| `SetFaceGenerationParams` | `public void SetFaceGenerationParams(FaceGenerationParams faceGenerationParams)` | 方法 |
| `SetVoiceDefinitionIndex` | `public void SetVoiceDefinitionIndex(int voiceDefinitionIndex, float voicePitch)` | 方法 |
| `StartRhubarbRecord` | `public void StartRhubarbRecord(string path, int soundId)` | 方法 |
| `SetAgentLodZeroOrMaxExternal` | `public void SetAgentLodZeroOrMaxExternal(bool makeZero)` | 方法 |
| `SetAgentLocalSpeed` | `public void SetAgentLocalSpeed(Vec2 speed)` | 方法 |
| `SetLookDirection` | `public void SetLookDirection(Vec3 direction)` | 方法 |
| `AddArmorMultiMeshesToAgentEntity` | `public void AddArmorMultiMeshesToAgentEntity(uint teamColor1, uint teamColor2)` | 方法 |
| `MakeRandomVoiceForFacegen` | `public void MakeRandomVoiceForFacegen()` | 方法 |
| `AddTeamColorToMesh` | `public static void AddTeamColorToMesh(MetaMesh metaMesh, uint color1, uint color2)` | 方法 |
| `SetClothingColors` | `public void SetClothingColors(uint color1, uint color2)` | 方法 |
| `GetClothingColors` | `public void GetClothingColors(out uint color1, out uint color2)` | 方法 |
| `SetEntity` | `public void SetEntity(GameEntity entity)` | 方法 |
| `RandomGlossinessRange` | `public const float RandomGlossinessRange` | 字段 |
| `RandomClothingColor1HueRange` | `public const float RandomClothingColor1HueRange` | 字段 |
| `RandomClothingColor1SaturationRange` | `public const float RandomClothingColor1SaturationRange` | 字段 |
| `RandomClothingColor1BrightnessRange` | `public const float RandomClothingColor1BrightnessRange` | 字段 |
| `RandomClothingColor2HueRange` | `public const float RandomClothingColor2HueRange` | 字段 |
| `RandomClothingColor2SaturationRange` | `public const float RandomClothingColor2SaturationRange` | 字段 |
| `RandomClothingColor2BrightnessRange` | `public const float RandomClothingColor2BrightnessRange` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IAgentVisual](../IAgentVisual/)
- [同命名空间 AgentVisualsCreator](../AgentVisualsCreator/)
- [同命名空间 BannerVisual](../BannerVisual/)
- [同命名空间 BannerVisualCreator](../BannerVisualCreator/)
- [同命名空间 BannerVisualExtensions](../BannerVisualExtensions/)
