---
title: "BattleSideSpawnPathSelector"
description: "BattleSideSpawnPathSelector: a public class in TaleWorlds.MountAndBlade; 5 exposed members (1 methods, 2 properties, 1 fields). Source: TaleWorlds.MountAndBlade/BattleSideSpawnPathSelector.cs."
---
# BattleSideSpawnPathSelector

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BattleSideSpawnPathSelector`
**File:** `TaleWorlds.MountAndBlade/BattleSideSpawnPathSelector.cs`

## Overview

BattleSideSpawnPathSelector lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BattleSideSpawnPathSelector.cs. It is a public class; the inheritance chain is BattleSideSpawnPathSelector. It exposes 5 public/protected members: 1 methods, 2 properties, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BattleSideSpawnPathSelector is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain BattleSideSpawnPathSelector. The surface is property-led (properties 2/5, methods 1/5), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BattleSideSpawnPathSelector.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `InitialSpawnPath` | `public SpawnPathData InitialSpawnPath` | property |
| `MBReadOnlyList` | `public MBReadOnlyList<SpawnPathData>ReinforcementPaths` | property |
| `BattleSideSpawnPathSelector` | `public BattleSideSpawnPathSelector(Mission mission, Path initialPath, float initialPivotOffset, bool initialPathIsInverted)` | constructor |
| `HasReinforcementPath` | `public bool HasReinforcementPath(Path path)` | method |
| `MaxNeighborCount` | `public const float MaxNeighborCount` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
