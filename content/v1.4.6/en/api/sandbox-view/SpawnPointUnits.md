---
title: "SpawnPointUnits"
description: "SpawnPointUnits: a public class in SandBox.View; 9 exposed members (0 methods, 6 properties, 0 fields). Source: SandBox.View/Missions/SandBox/SpawnPointUnits.cs."
---
# SpawnPointUnits

**Namespace:** `SandBox.View.Missions.SandBox`
**Module:** `SandBox.View`
**Type:** `public class SpawnPointUnits`
**File:** `SandBox.View/Missions/SandBox/SpawnPointUnits.cs`

## Overview

SpawnPointUnits lives in the SandBox.View module, source file SandBox.View/Missions/SandBox/SpawnPointUnits.cs. It is a public class; the inheritance chain is SpawnPointUnits. It exposes 9 public/protected members: 6 properties, 2 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SpawnPointUnits is a top-level type in SandBox.View, namespace differing from (SandBox.View.Missions.SandBox) the module directory; inheritance chain SpawnPointUnits. The surface is property-led (properties 6/9, methods 0/9), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Missions/SandBox/SpawnPointUnits.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SpName` | `public string SpName` | property |
| `Place` | `public SpawnPointUnits.SceneType Place` | property |
| `MinCount` | `public int MinCount` | property |
| `MaxCount` | `public int MaxCount` | property |
| `Type` | `public string Type` | property |
| `SpawnPointUnits` | `public SpawnPointUnits(string sp_name, SpawnPointUnits.SceneType place, int minCount, int maxCount)` | constructor |
| `SpawnPointUnits` | `public SpawnPointUnits(string sp_name, SpawnPointUnits.SceneType place, string type, int minCount, int maxCount)` | constructor |
| `SceneType` | `public enum SceneType` | property |
| `SceneType` | `public enum SceneType` | nested type |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace SpawnPointDebugView](../SpawnPointDebugView)
