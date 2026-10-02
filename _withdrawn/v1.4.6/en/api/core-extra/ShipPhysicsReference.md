---
title: "ShipPhysicsReference"
description: "ShipPhysicsReference: a public class in TaleWorlds.Core, inheriting MBObjectBase; 9 exposed members (2 methods, 5 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/ShipPhysicsReference.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ShipPhysicsReference

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class ShipPhysicsReference : MBObjectBase`
**File:** `TaleWorlds.Core/ShipPhysicsReference.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

ShipPhysicsReference lives in the TaleWorlds.Core module, source file TaleWorlds.Core/ShipPhysicsReference.cs. It is a public class, implementing/inheriting MBObjectBase; the inheritance chain is ShipPhysicsReference → MBObjectBase. It exposes 9 public/protected members: 2 methods, 5 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ShipPhysicsReference lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain ShipPhysicsReference → MBObjectBase. The surface is property-led (properties 5/9, methods 2/9), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/ShipPhysicsReference.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `LinearDragTerm` | `public LinearFrictionTerm LinearDragTerm` | property |
| `LinearDampingTerm` | `public LinearFrictionTerm LinearDampingTerm` | property |
| `ConstantLinearDampingTerm` | `public LinearFrictionTerm ConstantLinearDampingTerm` | property |
| `ShipPhysicsReference` | `public ShipPhysicsReference()` | constructor |
| `ShipPhysicsReference` | `public ShipPhysicsReference(string stringId) : base(stringId)` | constructor |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | method |
| `GetDefaultWaterDensity` | `public static float GetDefaultWaterDensity()` | method |
| `Default` | `public static readonly ShipPhysicsReference Default` | property |
| `DefaultDebris` | `public static readonly ShipPhysicsReference DefaultDebris` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
