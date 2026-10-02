---
title: "SpawnPathData"
description: "SpawnPathData: a public class in TaleWorlds.MountAndBlade; 18 exposed members (11 methods, 4 properties, 1 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/SpawnPathData.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SpawnPathData

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SpawnPathData`
**File:** `TaleWorlds.MountAndBlade/SpawnPathData.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

SpawnPathData lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/SpawnPathData.cs. It is a public class; the inheritance chain is SpawnPathData. It exposes 18 public/protected members: 11 methods, 4 properties, 1 fields, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SpawnPathData lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain SpawnPathData. The surface is method-led (methods 11/18, properties 4/18), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/SpawnPathData.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsValid` | `public bool IsValid` | property |
| `FreeSegmentCount` | `public int FreeSegmentCount` | property |
| `Invert` | `public SpawnPathData Invert()` | method |
| `ClampPathOffset` | `public void ClampPathOffset(ref float relativePathOffset)` | method |
| `ConvertPointToRelativePathOffset` | `public float ConvertPointToRelativePathOffset(int pointIndex)` | method |
| `ConvertRelativePathOffsetToPathDistance` | `public float ConvertRelativePathOffsetToPathDistance(float relativePathOffset)` | method |
| `GetNodeIndexAtPathDistance` | `public int GetNodeIndexAtPathDistance(float pathDistance)` | method |
| `GetBaseOffset` | `public float GetBaseOffset()` | method |
| `IsPathOffsetValid` | `public bool IsPathOffsetValid(float relativePathOffset)` | method |
| `GetOffsetOverflow` | `public float GetOffsetOverflow(float relativePathOffset)` | method |
| `GetSpawnFrame` | `public MatrixFrame GetSpawnFrame(float relativePathOffset, bool searchNearestValidFrame = false, SpawnPathData.SearchDirection searchDirection = SpawnPathData.SearchDirection.Backward)` | method |
| `GetSpawnPathFrameFacingTarget` | `public void GetSpawnPathFrameFacingTarget(float basePathOffset, float targetPathOffset, bool useTangentDirection, out Vec2 spawnPathPosition, out Vec2 spawnPathDirection, bool decideDirectionDynamically = false, float dynamicDistancePercentage = 0.2f)` | method |
| `Create` | `public static SpawnPathData Create(Scene scene, Path path, float pivotOffset, bool isInverted = false, SpawnPathData.SnapMethod snapType = SpawnPathData.SnapMethod.DontSnap)` | method |
| `MinimumSpawnPathOffset` | `public const float MinimumSpawnPathOffset` | field |
| `SnapMethod` | `public enum SnapMethod` | property |
| `SearchDirection` | `public enum SearchDirection` | property |
| `SnapMethod` | `public enum SnapMethod` | nested type |
| `SearchDirection` | `public enum SearchDirection` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
