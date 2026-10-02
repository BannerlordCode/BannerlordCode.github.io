---
title: "GameEntityExtensions"
description: "GameEntityExtensions: a public class in TaleWorlds.MountAndBlade; 10 exposed members (10 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/GameEntityExtensions.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameEntityExtensions

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class GameEntityExtensions`
**File:** `TaleWorlds.MountAndBlade/GameEntityExtensions.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

GameEntityExtensions lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/GameEntityExtensions.cs. It is a public class; the inheritance chain is GameEntityExtensions. It exposes 10 public/protected members: 10 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameEntityExtensions lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain GameEntityExtensions. The surface is method-led (methods 10/10, properties 0/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/GameEntityExtensions.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Instantiate` | `public static GameEntity Instantiate(Scene scene, MissionWeapon weapon, bool showHolsterWithWeapon, bool needBatchedVersion)` | method |
| `CreateSimpleSkeleton` | `public static void CreateSimpleSkeleton(this GameEntity gameEntity, string skeletonName)` | method |
| `CreateSimpleSkeleton` | `public static void CreateSimpleSkeleton(this WeakGameEntity gameEntity, string skeletonName)` | method |
| `CreateAgentSkeleton` | `public static void CreateAgentSkeleton(this GameEntity gameEntity, string skeletonName, bool isHumanoid, MBActionSet actionSet, string monsterUsageSetName, Monster monster)` | method |
| `CreateAgentSkeleton` | `public static void CreateAgentSkeleton(this WeakGameEntity gameEntity, string skeletonName, bool isHumanoid, MBActionSet actionSet, string monsterUsageSetName, Monster monster)` | method |
| `CreateSkeletonWithActionSet` | `public static void CreateSkeletonWithActionSet(this GameEntity gameEntity, ref AnimationSystemData animationSystemData)` | method |
| `CreateSkeletonWithActionSet` | `public static void CreateSkeletonWithActionSet(this WeakGameEntity gameEntity, ref AnimationSystemData animationSystemData)` | method |
| `FadeOut` | `public static void FadeOut(this GameEntity gameEntity, float interval, bool isRemovingFromScene)` | method |
| `FadeIn` | `public static void FadeIn(this GameEntity gameEntity, bool resetAlpha = true)` | method |
| `HideIfNotFadingOut` | `public static void HideIfNotFadingOut(this GameEntity gameEntity)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
