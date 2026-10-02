---
title: "ShipVisual"
description: "ShipVisual: a public class in TaleWorlds.MountAndBlade.Objects, inheriting ScriptComponentBehavior; 6 exposed members (1 methods, 4 properties, 1 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/Objects/ShipVisual.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ShipVisual

**Namespace:** `TaleWorlds.MountAndBlade.Objects`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ShipVisual : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/Objects/ShipVisual.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ShipVisual lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Objects/ShipVisual.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is ShipVisual → ScriptComponentBehavior → DotNetObject. It exposes 6 public/protected members: 1 methods, 4 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ShipVisual lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Objects`, inheritance chain ShipVisual → ScriptComponentBehavior → DotNetObject. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Objects/ShipVisual.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Seed` | `public int Seed` | property |
| `CustomSailPatternId` | `public string CustomSailPatternId` | property |
| `List` | `public List<ScriptComponentBehavior>SailVisuals` | property |
| `Health` | `public float Health` | property |
| `Initialize` | `public void Initialize(int seed, string customSailPatternId = "")` | method |
| `uint>SailColors` | `public ValueTuple<uint, uint>SailColors` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ScriptComponentBehavior](../../engine/ScriptComponentBehavior/)
- [same namespace AnimalSpawnSettings](../AnimalSpawnSettings/)
- [same namespace AreaMarker](../AreaMarker/)
- [same namespace FightAreaMarker](../FightAreaMarker/)
- [same namespace FlagCapturePoint](../FlagCapturePoint/)
