---
title: "AgentVisuals"
description: "Auto-generated class reference for AgentVisuals."
---
# AgentVisuals

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade.View
**Type:** `public class AgentVisuals : IAgentVisual `
**Base:** IAgentVisual
**Source:** TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/AgentVisuals.cs

## Overview

Auto-generated stub for `AgentVisuals`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetVisuals
`public MBAgentVisuals GetVisuals()`

### Reset
`public void Reset()`

### ResetNextFrame
`public void ResetNextFrame()`

### GetFrame
`public MatrixFrame GetFrame()`

### GetBodyProperties
`public BodyProperties GetBodyProperties()`

### SetBodyProperties
`public void SetBodyProperties(BodyProperties bodyProperties)`

### GetIsFemale
`public bool GetIsFemale()`

### GetCharacterObjectID
`public string GetCharacterObjectID()`

### SetCharacterObjectID
`public void SetCharacterObjectID(string id)`

### GetEquipment
`public Equipment GetEquipment()`

### GetCopyAgentVisualsData
`public AgentVisualsData GetCopyAgentVisualsData()`

### GetEntity
`public GameEntity GetEntity()`

### GetWeakEntity
`public WeakGameEntity GetWeakEntity()`

### SetVisible
`public void SetVisible(bool value)`

### GetGlobalStableEyePoint
`public Vec3 GetGlobalStableEyePoint(bool isHumanoid)`

### GetGlobalStableNeckPoint
`public Vec3 GetGlobalStableNeckPoint(bool isHumanoid)`

### AddPrefabToAgentVisualBoneByBoneType
`public CompositeComponent AddPrefabToAgentVisualBoneByBoneType(string prefabName,HumanBone boneType)`

### AddPrefabToAgentVisualBoneByRealBoneIndex
`public CompositeComponent AddPrefabToAgentVisualBoneByRealBoneIndex(string prefabName,sbyte realBoneIndex)`

### SetAgentLodZeroOrMax
`public void SetAgentLodZeroOrMax(bool value)`

### GetScale
`public float GetScale()`

### SetAction
`public void SetAction(in ActionIndexCache actionIndex,float startProgress = 0f,bool forceFaceMorphRestart = true)`

### DoesActionContinueWithCurrentAction
`public bool DoesActionContinueWithCurrentAction(in ActionIndexCache actionIndex)`

### GetAnimationParameterAtChannel
`public float GetAnimationParameterAtChannel(int channelIndex)`

### Refresh
`public void Refresh(bool needBatchedVersionForWeaponMeshes,AgentVisualsData data,bool forceUseFaceCache = false)`

### SetClothWindToWeaponAtIndex
`public void SetClothWindToWeaponAtIndex(Vec3 localWindVector,bool isLocal,EquipmentIndex weaponIndex)`

### TickVisuals
`public void TickVisuals()`

### Tick
`public void Tick(AgentVisuals parentAgentVisuals,float dt,bool isEntityMoving = false,float speed = 0f)`

### Create
`public static AgentVisuals Create(AgentVisualsData data,string name,bool isRandomProgress,bool needBatchedVersionForWeaponMeshes,bool forceUseFaceCache)`

### GetRandomGlossFactor
`public static float GetRandomGlossFactor(Random randomGenerator)`

### GetRandomClothingColors
`public static void GetRandomClothingColors(int seed,Color inputColor1,Color inputColor2,out Color color1,out Color color2)`

### SetFaceGenerationParams
`public void SetFaceGenerationParams(FaceGenerationParams faceGenerationParams)`

### SetVoiceDefinitionIndex
`public void SetVoiceDefinitionIndex(int voiceDefinitionIndex,float voicePitch)`

### StartRhubarbRecord
`public void StartRhubarbRecord(string path,int soundId)`

### SetAgentLodZeroOrMaxExternal
`public void SetAgentLodZeroOrMaxExternal(bool makeZero)`

### SetAgentLocalSpeed
`public void SetAgentLocalSpeed(Vec2 speed)`

### SetLookDirection
`public void SetLookDirection(Vec3 direction)`

### AddArmorMultiMeshesToAgentEntity
`public void AddArmorMultiMeshesToAgentEntity(uint teamColor1,uint teamColor2)`

### MakeRandomVoiceForFacegen
`public void MakeRandomVoiceForFacegen()`

### AddTeamColorToMesh
`public static void AddTeamColorToMesh(MetaMesh metaMesh,uint color1,uint color2)`

### SetClothingColors
`public void SetClothingColors(uint color1,uint color2)`

### GetClothingColors
`public void GetClothingColors(out uint color1,out uint color2)`

### SetEntity
`public void SetEntity(GameEntity entity)`

## See Also

- [Section index](../)
