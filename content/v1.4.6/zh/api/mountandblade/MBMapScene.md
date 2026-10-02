---
title: "MBMapScene"
description: "MBMapScene：TaleWorlds.MountAndBlade 的 public 类；公开成员 20 个（方法 20、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade/MBMapScene.cs。"
---
# MBMapScene

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class MBMapScene`
**File:** `TaleWorlds.MountAndBlade/MBMapScene.cs`

## 概述

MBMapScene 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MBMapScene.cs。它是一个 public 类，继承链为 MBMapScene。public/protected 成员共 20 个：20 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MBMapScene 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 MBMapScene。成员构成以方法为主（方法 20/20，属性 0/20），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MBMapScene.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetNearestFaceCenterForPosition` | `public static Vec2 GetNearestFaceCenterForPosition(Scene mapScene, Vec2 position, bool isRegionMap0, int[]excludedFaceIds)` | 方法 |
| `GetNearestFaceCenterForPositionWithPath` | `public static Vec2 GetNearestFaceCenterForPositionWithPath(Scene mapScene, PathFaceRecord pathFaceRecord, bool targetRegionMap0, float maxDist, int[]excludedFaceIds)` | 方法 |
| `GetAccessiblePointNearPosition` | `public static Vec2 GetAccessiblePointNearPosition(Scene mapScene, Vec2 position, bool isRegionMap1, float radius)` | 方法 |
| `RemoveZeroCornerBodies` | `public static void RemoveZeroCornerBodies(Scene mapScene)` | 方法 |
| `LoadAtmosphereData` | `public static void LoadAtmosphereData(Scene mapScene)` | 方法 |
| `TickStepSound` | `public static void TickStepSound(Scene mapScene, MBAgentVisuals visuals, int terrainType, TerrainTypeSoundSlot soundType, int partySize)` | 方法 |
| `TickAmbientSounds` | `public static void TickAmbientSounds(Scene mapScene, int terrainType)` | 方法 |
| `GetMouseVisible` | `public static bool GetMouseVisible()` | 方法 |
| `GetApplyRainColorGrade` | `public static bool GetApplyRainColorGrade()` | 方法 |
| `SendMouseKeyEvent` | `public static void SendMouseKeyEvent(int mouseKeyId, bool isDown)` | 方法 |
| `SetMousePos` | `public static void SetMousePos(int posX, int posY)` | 方法 |
| `TickVisuals` | `public static void TickVisuals(Scene mapScene, float tod, Mesh[]tickedMapMeshes)` | 方法 |
| `ValidateTerrainSoundIds` | `public static void ValidateTerrainSoundIds()` | 方法 |
| `GetGlobalIlluminationOfString` | `public static void GetGlobalIlluminationOfString(Scene mapScene, string value)` | 方法 |
| `GetColorGradeGridData` | `public static void GetColorGradeGridData(Scene mapScene, byte[]gridData, string textureName)` | 方法 |
| `GetBattleSceneIndexMap` | `public static void GetBattleSceneIndexMap(Scene mapScene, ref byte[]indexData, ref int width, ref int height)` | 方法 |
| `SetFrameForAtmosphere` | `public static void SetFrameForAtmosphere(Scene mapScene, float tod, float cameraElevation, bool forceLoadTextures)` | 方法 |
| `SetTerrainDynamicParams` | `public static void SetTerrainDynamicParams(Scene mapScene, Vec3 dynamic_params)` | 方法 |
| `SetSeasonTimeFactor` | `public static void SetSeasonTimeFactor(Scene mapScene, float seasonTimeFactor)` | 方法 |
| `GetSeasonTimeFactor` | `public static float GetSeasonTimeFactor(Scene mapScene)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
