---
title: "MBMapScene"
description: "MBMapScene 的自动生成类参考。"
---
# MBMapScene

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBMapScene `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/MBMapScene.cs

## 概述

`MBMapScene` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/MBMapScene.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetNearestFaceCenterForPosition
`public static Vec2 GetNearestFaceCenterForPosition(Scene mapScene,Vec2 position,bool isRegionMap0,int[] excludedFaceIds) `

### GetNearestFaceCenterForPositionWithPath
`public static Vec2 GetNearestFaceCenterForPositionWithPath(Scene mapScene,PathFaceRecord pathFaceRecord,bool targetRegionMap0,float maxDist,int[] excludedFaceIds) `

### GetAccessiblePointNearPosition
`public static Vec2 GetAccessiblePointNearPosition(Scene mapScene,Vec2 position,bool isRegionMap1,float radius) `

### RemoveZeroCornerBodies
`public static void RemoveZeroCornerBodies(Scene mapScene) `

### LoadAtmosphereData
`public static void LoadAtmosphereData(Scene mapScene) `

### TickStepSound
`public static void TickStepSound(Scene mapScene,MBAgentVisuals visuals,int terrainType,TerrainTypeSoundSlot soundType,int partySize) `

### TickAmbientSounds
`public static void TickAmbientSounds(Scene mapScene,int terrainType) `

### GetMouseVisible
`public static bool GetMouseVisible() `

### GetApplyRainColorGrade
`public static bool GetApplyRainColorGrade() `

### SendMouseKeyEvent
`public static void SendMouseKeyEvent(int mouseKeyId,bool isDown) `

### SetMousePos
`public static void SetMousePos(int posX,int posY) `

### TickVisuals
`public static void TickVisuals(Scene mapScene,float tod,Mesh[] tickedMapMeshes) `

### ValidateTerrainSoundIds
`public static void ValidateTerrainSoundIds() `

### GetGlobalIlluminationOfString
`public static void GetGlobalIlluminationOfString(Scene mapScene,string value) `

### GetColorGradeGridData
`public static void GetColorGradeGridData(Scene mapScene,byte[] gridData,string textureName) `

### GetBattleSceneIndexMap
`public static void GetBattleSceneIndexMap(Scene mapScene,ref byte[] indexData,ref int width,ref int height) `

### SetFrameForAtmosphere
`public static void SetFrameForAtmosphere(Scene mapScene,float tod,float cameraElevation,bool forceLoadTextures) `

### SetTerrainDynamicParams
`public static void SetTerrainDynamicParams(Scene mapScene,Vec3 dynamic_params) `

### SetSeasonTimeFactor
`public static void SetSeasonTimeFactor(Scene mapScene,float seasonTimeFactor) `

### GetSeasonTimeFactor
`public static float GetSeasonTimeFactor(Scene mapScene) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
