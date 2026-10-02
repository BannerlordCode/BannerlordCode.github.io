---
title: "BladeData"
description: "BladeData: a public class in TaleWorlds.Core, inheriting MBObjectBase; 14 exposed members (1 methods, 12 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/BladeData.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BladeData

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public sealed class BladeData : MBObjectBase`
**File:** `TaleWorlds.Core/BladeData.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

BladeData lives in the TaleWorlds.Core module, source file TaleWorlds.Core/BladeData.cs. It is a public class (sealed), implementing/inheriting MBObjectBase; the inheritance chain is BladeData → MBObjectBase. It exposes 14 public/protected members: 1 methods, 12 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BladeData lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain BladeData → MBObjectBase. The surface is property-led (properties 12/14, methods 1/14), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/BladeData.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ThrustDamageType` | `public DamageTypes ThrustDamageType` | property |
| `ThrustDamageFactor` | `public float ThrustDamageFactor` | property |
| `SwingDamageType` | `public DamageTypes SwingDamageType` | property |
| `SwingDamageFactor` | `public float SwingDamageFactor` | property |
| `BladeLength` | `public float BladeLength` | property |
| `BladeWidth` | `public float BladeWidth` | property |
| `StackAmount` | `public short StackAmount` | property |
| `PhysicsMaterial` | `public string PhysicsMaterial` | property |
| `BodyName` | `public string BodyName` | property |
| `HolsterMeshName` | `public string HolsterMeshName` | property |
| `HolsterBodyName` | `public string HolsterBodyName` | property |
| `HolsterMeshLength` | `public float HolsterMeshLength` | property |
| `BladeData` | `public BladeData(CraftingPiece.PieceTypes pieceType, float bladeLength)` | constructor |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode childNode)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
