---
title: "WeaponDescription"
description: "WeaponDescription: a public class in TaleWorlds.Core, inheriting MBObjectBase; 7 exposed members (1 methods, 6 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/WeaponDescription.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# WeaponDescription

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class WeaponDescription : MBObjectBase`
**File:** `TaleWorlds.Core/WeaponDescription.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

WeaponDescription lives in the TaleWorlds.Core module, source file TaleWorlds.Core/WeaponDescription.cs. It is a public class, implementing/inheriting MBObjectBase; the inheritance chain is WeaponDescription → MBObjectBase. It exposes 7 public/protected members: 1 methods, 6 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WeaponDescription lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain WeaponDescription → MBObjectBase. The surface is property-led (properties 6/7, methods 1/7), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/WeaponDescription.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `WeaponClass` | `public WeaponClass WeaponClass` | property |
| `WeaponFlags` | `public WeaponFlags WeaponFlags` | property |
| `ItemUsageFeatures` | `public string ItemUsageFeatures` | property |
| `RotatedInHand` | `public bool RotatedInHand` | property |
| `IsHiddenFromUI` | `public bool IsHiddenFromUI` | property |
| `MBReadOnlyList` | `public MBReadOnlyList<CraftingPiece>AvailablePieces` | property |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
