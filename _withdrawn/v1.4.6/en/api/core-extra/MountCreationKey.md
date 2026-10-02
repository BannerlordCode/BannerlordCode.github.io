---
title: "MountCreationKey"
description: "MountCreationKey: a public class in TaleWorlds.Core; 11 exposed members (4 methods, 6 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/MountCreationKey.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MountCreationKey

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class MountCreationKey`
**File:** `TaleWorlds.Core/MountCreationKey.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

MountCreationKey lives in the TaleWorlds.Core module, source file TaleWorlds.Core/MountCreationKey.cs. It is a public class; the inheritance chain is MountCreationKey. It exposes 11 public/protected members: 4 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MountCreationKey lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain MountCreationKey. The surface is property-led (properties 6/11, methods 4/11), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/MountCreationKey.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `_leftFrontLegColorIndex` | `public byte _leftFrontLegColorIndex` | property |
| `_rightFrontLegColorIndex` | `public byte _rightFrontLegColorIndex` | property |
| `_leftBackLegColorIndex` | `public byte _leftBackLegColorIndex` | property |
| `_rightBackLegColorIndex` | `public byte _rightBackLegColorIndex` | property |
| `MaterialIndex` | `public byte MaterialIndex` | property |
| `MeshMultiplierIndex` | `public byte MeshMultiplierIndex` | property |
| `MountCreationKey` | `public MountCreationKey(byte leftFrontLegColorIndex, byte rightFrontLegColorIndex, byte leftBackLegColorIndex, byte rightBackLegColorIndex, byte materialIndex, byte meshMultiplierIndex)` | constructor |
| `FromString` | `public static MountCreationKey FromString(string str)` | method |
| `ToString` | `public override string ToString()` | method |
| `GetRandomMountKeyString` | `public static string GetRandomMountKeyString(ItemObject mountItem, int randomSeed)` | method |
| `GetRandomMountKey` | `public static MountCreationKey GetRandomMountKey(ItemObject mountItem, int randomSeed)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
