---
title: "ShipSlot"
description: "ShipSlot: a public class in TaleWorlds.Core, inheriting MBObjectBase; 8 exposed members (4 methods, 3 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/ShipSlot.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ShipSlot

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class ShipSlot : MBObjectBase`
**File:** `TaleWorlds.Core/ShipSlot.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

ShipSlot lives in the TaleWorlds.Core module, source file TaleWorlds.Core/ShipSlot.cs. It is a public class, implementing/inheriting MBObjectBase; the inheritance chain is ShipSlot → MBObjectBase. It exposes 8 public/protected members: 4 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ShipSlot lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain ShipSlot → MBObjectBase. The surface is method-led (methods 4/8, properties 3/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/ShipSlot.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TypeId` | `public string TypeId` | property |
| `MainPrefabId` | `public string MainPrefabId` | property |
| `MBReadOnlyList` | `public MBReadOnlyList<ShipUpgradePiece>MatchingPieces` | property |
| `ShipSlot` | `public ShipSlot()` | constructor |
| `AfterRegister` | `public override void AfterRegister()` | method |
| `AddMatchingPiece` | `public void AddMatchingPiece(ShipUpgradePiece upgradePiece)` | method |
| `GetSlotTypeName` | `public TextObject GetSlotTypeName()` | method |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
