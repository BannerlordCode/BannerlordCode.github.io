---
title: "MBSceneUtilities"
description: "MBSceneUtilities: a public class in TaleWorlds.MountAndBlade; 22 exposed members (13 methods, 0 properties, 9 fields). Source: TaleWorlds.MountAndBlade/MBSceneUtilities.cs."
---
# MBSceneUtilities

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class MBSceneUtilities`
**File:** `TaleWorlds.MountAndBlade/MBSceneUtilities.cs`

## Overview

MBSceneUtilities lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MBSceneUtilities.cs. It is a public class; the inheritance chain is MBSceneUtilities. It exposes 22 public/protected members: 13 methods, 9 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBSceneUtilities is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MBSceneUtilities. The surface is method-led (methods 13/22, properties 0/22), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MBSceneUtilities.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBList` | `public static MBList<Path>GetAllSpawnPaths(Scene scene)` | method |
| `MBList` | `public static MBList<Vec2>GetSoftBoundaryPoints(Scene scene)` | method |
| `MBList` | `public static MBList<Vec2>GetHardBoundaryPoints(Scene scene)` | method |
| `MBList` | `public static MBList<Vec2>GetSceneLimitPoints(Scene scene, out Vec2 sceneLimitMin, out Vec2 sceneLimitMax)` | method |
| `bool>>GetDeploymentBoundaries` | `public static MBList<ValueTuple<string, MBList<Vec2>, bool>>GetDeploymentBoundaries(BattleSideEnum battleSide)` | method |
| `GetAxisAlignedBoundaryRectangle` | `public static void GetAxisAlignedBoundaryRectangle(List<Vec2>boundaryPoints, out Vec2 boundsMin, out Vec2 boundsMax)` | method |
| `FindConvexHull` | `public static void FindConvexHull(ref MBList<Vec2>boundary)` | method |
| `RadialSortBoundary` | `public static void RadialSortBoundary(ref MBList<Vec2>boundary)` | method |
| `RadialSortBoundary` | `public static void RadialSortBoundary(ref MBList<Vec3>boundary)` | method |
| `IsConvexAndRadiallySorted` | `public static bool IsConvexAndRadiallySorted(MBList<Vec2>boundary)` | method |
| `IsPointInsideBoundaries` | `public static bool IsPointInsideBoundaries(in Vec2 point, MBList<Vec2>boundaries, float acceptanceThreshold = 0.05f)` | method |
| `FindClosestPointToBoundaries` | `public static float FindClosestPointToBoundaries(in Vec2 position, MBList<Vec2>boundaries, out Vec2 closestPoint)` | method |
| `FindClosestPointToBoundariesReturnDistanceSquared` | `public static float FindClosestPointToBoundariesReturnDistanceSquared(in Vec2 position, MBList<Vec2>boundaries, out Vec2 closestPoint, out bool isPositionInsideBoundaries)` | method |
| `MaxNumberOfSpawnPaths` | `public const int MaxNumberOfSpawnPaths` | field |
| `SpawnPathPrefix` | `public const string SpawnPathPrefix` | field |
| `SoftBorderVertexTag` | `public const string SoftBorderVertexTag` | field |
| `HardBorderVertexTag` | `public const string HardBorderVertexTag` | field |
| `SoftBoundaryName` | `public const string SoftBoundaryName` | field |
| `SceneBoundaryName` | `public const string SceneBoundaryName` | field |
| `SceneToHardBoundaryMargin` | `public const float SceneToHardBoundaryMargin` | field |
| `DefenderDeploymentReferencePositionTag` | `public const string DefenderDeploymentReferencePositionTag` | field |
| `AttackerDeploymentReferencePositionTag` | `public const string AttackerDeploymentReferencePositionTag` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
