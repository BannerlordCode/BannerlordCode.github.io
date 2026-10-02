---
title: "ShipSlot"
description: "ShipSlot: a public class in TaleWorlds.Core, inheriting MBObjectBase; 8 exposed members (4 methods, 3 properties, 0 fields). Source: TaleWorlds.Core/ShipSlot.cs."
---
# ShipSlot

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class ShipSlot : MBObjectBase`
**File:** `TaleWorlds.Core/ShipSlot.cs`

## Overview

ShipSlot lives in the TaleWorlds.Core module, source file TaleWorlds.Core/ShipSlot.cs. It is a public class, implementing/inheriting MBObjectBase; the inheritance chain is ShipSlot → MBObjectBase. It exposes 8 public/protected members: 4 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ShipSlot is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain ShipSlot → MBObjectBase. The surface is method-led (methods 4/8, properties 3/8), so it mostly exposes operations. MBObjectBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/ShipSlot.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
