---
title: "WeaponDescription"
description: "WeaponDescription: a public class in TaleWorlds.Core, inheriting MBObjectBase; 7 exposed members (1 methods, 6 properties, 0 fields). Source: TaleWorlds.Core/WeaponDescription.cs."
---
# WeaponDescription

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class WeaponDescription : MBObjectBase`
**File:** `TaleWorlds.Core/WeaponDescription.cs`

## Overview

WeaponDescription lives in the TaleWorlds.Core module, source file TaleWorlds.Core/WeaponDescription.cs. It is a public class, implementing/inheriting MBObjectBase; the inheritance chain is WeaponDescription → MBObjectBase. It exposes 7 public/protected members: 1 methods, 6 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WeaponDescription is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain WeaponDescription → MBObjectBase. The surface is property-led (properties 6/7, methods 1/7), so it mostly exposes state for reading. MBObjectBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/WeaponDescription.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `WeaponClass` | `public WeaponClass WeaponClass` | property |
| `WeaponFlags` | `public WeaponFlags WeaponFlags` | property |
| `ItemUsageFeatures` | `public string ItemUsageFeatures` | property |
| `RotatedInHand` | `public bool RotatedInHand` | property |
| `IsHiddenFromUI` | `public bool IsHiddenFromUI` | property |
| `MBReadOnlyList` | `public MBReadOnlyList<CraftingPiece>AvailablePieces` | property |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | method |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
