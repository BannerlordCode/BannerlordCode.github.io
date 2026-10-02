---
title: "BattleSpawnPathSelector"
description: "BattleSpawnPathSelector: a public class in TaleWorlds.MountAndBlade; 8 exposed members (5 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade/BattleSpawnPathSelector.cs."
---
# BattleSpawnPathSelector

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BattleSpawnPathSelector`
**File:** `TaleWorlds.MountAndBlade/BattleSpawnPathSelector.cs`

## Overview

BattleSpawnPathSelector lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BattleSpawnPathSelector.cs. It is a public class; the inheritance chain is BattleSpawnPathSelector. It exposes 8 public/protected members: 5 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BattleSpawnPathSelector is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain BattleSpawnPathSelector. The surface is method-led (methods 5/8, properties 2/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BattleSpawnPathSelector.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsInitialized` | `public bool IsInitialized` | property |
| `InitialPath` | `public Path InitialPath` | property |
| `BattleSpawnPathSelector` | `public BattleSpawnPathSelector(Mission mission)` | constructor |
| `Initialize` | `public void Initialize()` | method |
| `HasPath` | `public bool HasPath(Path path)` | method |
| `GetInitialPathDataOfSide` | `public bool GetInitialPathDataOfSide(BattleSideEnum side, out SpawnPathData pathPathData)` | method |
| `MBReadOnlyList` | `public MBReadOnlyList<SpawnPathData>GetReinforcementPathsDataOfSide(BattleSideEnum side)` | method |
| `FindBestInitialPath` | `public static Path FindBestInitialPath(Mission mission, out float pathPivotOffset, out float pathLength, out bool isPathInverted)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
