---
title: "PathTracker"
description: "PathTracker: a public class in TaleWorlds.MountAndBlade; 13 exposed members (6 methods, 6 properties, 0 fields). Source: TaleWorlds.MountAndBlade/PathTracker.cs."
---
# PathTracker

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class PathTracker`
**File:** `TaleWorlds.MountAndBlade/PathTracker.cs`

## Overview

PathTracker lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/PathTracker.cs. It is a public class; the inheritance chain is PathTracker. It exposes 13 public/protected members: 6 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PathTracker is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain PathTracker. The surface is method-led (methods 6/13, properties 6/13), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/PathTracker.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TotalDistanceTraveled` | `public float TotalDistanceTraveled` | property |
| `HasChanged` | `public bool HasChanged` | property |
| `IsValid` | `public bool IsValid` | property |
| `HasReachedEnd` | `public bool HasReachedEnd` | property |
| `PathTraveledPercentage` | `public float PathTraveledPercentage` | property |
| `CurrentFrame` | `public MatrixFrame CurrentFrame` | property |
| `PathTracker` | `public PathTracker(Path path, Vec3 initialScaleOfEntity)` | constructor |
| `UpdateVersion` | `public void UpdateVersion()` | method |
| `PathExists` | `public bool PathExists()` | method |
| `Advance` | `public void Advance(float deltaDistance)` | method |
| `GetPathLength` | `public float GetPathLength()` | method |
| `CurrentFrameAndColor` | `public void CurrentFrameAndColor(out MatrixFrame frame, out Vec3 color)` | method |
| `Reset` | `public void Reset()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
