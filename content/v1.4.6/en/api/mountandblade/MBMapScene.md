---
title: "MBMapScene"
description: "MBMapScene: a public class in TaleWorlds.MountAndBlade; 20 exposed members (20 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MBMapScene.cs."
---
# MBMapScene

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class MBMapScene`
**File:** `TaleWorlds.MountAndBlade/MBMapScene.cs`

## Overview

MBMapScene lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MBMapScene.cs. It is a public class; the inheritance chain is MBMapScene. It exposes 20 public/protected members: 20 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBMapScene is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MBMapScene. The surface is method-led (methods 20/20, properties 0/20), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MBMapScene.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetNearestFaceCenterForPosition` | `public static Vec2 GetNearestFaceCenterForPosition(Scene mapScene, Vec2 position, bool isRegionMap0, int[]excludedFaceIds)` | method |
| `GetNearestFaceCenterForPositionWithPath` | `public static Vec2 GetNearestFaceCenterForPositionWithPath(Scene mapScene, PathFaceRecord pathFaceRecord, bool targetRegionMap0, float maxDist, int[]excludedFaceIds)` | method |
| `GetAccessiblePointNearPosition` | `public static Vec2 GetAccessiblePointNearPosition(Scene mapScene, Vec2 position, bool isRegionMap1, float radius)` | method |
| `RemoveZeroCornerBodies` | `public static void RemoveZeroCornerBodies(Scene mapScene)` | method |
| `LoadAtmosphereData` | `public static void LoadAtmosphereData(Scene mapScene)` | method |
| `TickStepSound` | `public static void TickStepSound(Scene mapScene, MBAgentVisuals visuals, int terrainType, TerrainTypeSoundSlot soundType, int partySize)` | method |
| `TickAmbientSounds` | `public static void TickAmbientSounds(Scene mapScene, int terrainType)` | method |
| `GetMouseVisible` | `public static bool GetMouseVisible()` | method |
| `GetApplyRainColorGrade` | `public static bool GetApplyRainColorGrade()` | method |
| `SendMouseKeyEvent` | `public static void SendMouseKeyEvent(int mouseKeyId, bool isDown)` | method |
| `SetMousePos` | `public static void SetMousePos(int posX, int posY)` | method |
| `TickVisuals` | `public static void TickVisuals(Scene mapScene, float tod, Mesh[]tickedMapMeshes)` | method |
| `ValidateTerrainSoundIds` | `public static void ValidateTerrainSoundIds()` | method |
| `GetGlobalIlluminationOfString` | `public static void GetGlobalIlluminationOfString(Scene mapScene, string value)` | method |
| `GetColorGradeGridData` | `public static void GetColorGradeGridData(Scene mapScene, byte[]gridData, string textureName)` | method |
| `GetBattleSceneIndexMap` | `public static void GetBattleSceneIndexMap(Scene mapScene, ref byte[]indexData, ref int width, ref int height)` | method |
| `SetFrameForAtmosphere` | `public static void SetFrameForAtmosphere(Scene mapScene, float tod, float cameraElevation, bool forceLoadTextures)` | method |
| `SetTerrainDynamicParams` | `public static void SetTerrainDynamicParams(Scene mapScene, Vec3 dynamic_params)` | method |
| `SetSeasonTimeFactor` | `public static void SetSeasonTimeFactor(Scene mapScene, float seasonTimeFactor)` | method |
| `GetSeasonTimeFactor` | `public static float GetSeasonTimeFactor(Scene mapScene)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
