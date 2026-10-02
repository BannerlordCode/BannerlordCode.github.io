---
title: "ShipVisual"
description: "ShipVisual: a public class in TaleWorlds.MountAndBlade, inheriting ScriptComponentBehavior; 6 exposed members (1 methods, 4 properties, 1 fields). Source: TaleWorlds.MountAndBlade/Objects/ShipVisual.cs."
---
# ShipVisual

**Namespace:** `TaleWorlds.MountAndBlade.Objects`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ShipVisual : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/Objects/ShipVisual.cs`

## Overview

ShipVisual lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Objects/ShipVisual.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is ShipVisual → ScriptComponentBehavior. It exposes 6 public/protected members: 1 methods, 4 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ShipVisual is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.Objects) the module directory; inheritance chain ShipVisual → ScriptComponentBehavior. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Objects/ShipVisual.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Seed` | `public int Seed` | property |
| `CustomSailPatternId` | `public string CustomSailPatternId` | property |
| `List` | `public List<ScriptComponentBehavior>SailVisuals` | property |
| `Health` | `public float Health` | property |
| `Initialize` | `public void Initialize(int seed, string customSailPatternId = "")` | method |
| `uint>SailColors` | `public ValueTuple<uint, uint>SailColors` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimalSpawnSettings](../AnimalSpawnSettings)
- [same namespace AreaMarker](../AreaMarker)
- [same namespace FightAreaMarker](../FightAreaMarker)
- [same namespace FlagCapturePoint](../FlagCapturePoint)
