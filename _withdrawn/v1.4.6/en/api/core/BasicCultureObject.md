---
title: "BasicCultureObject"
description: "BasicCultureObject: a public class in TaleWorlds.Core, inheriting MBObjectBase; 16 exposed members (2 methods, 14 properties, 0 fields). Source: TaleWorlds.Core/BasicCultureObject.cs."
---
# BasicCultureObject

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class BasicCultureObject : MBObjectBase`
**File:** `TaleWorlds.Core/BasicCultureObject.cs`

## Overview

BasicCultureObject lives in the TaleWorlds.Core module, source file TaleWorlds.Core/BasicCultureObject.cs. It is a public class, implementing/inheriting MBObjectBase; the inheritance chain is BasicCultureObject → MBObjectBase. It exposes 16 public/protected members: 2 methods, 14 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BasicCultureObject is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain BasicCultureObject → MBObjectBase. The surface is property-led (properties 14/16, methods 2/16), so it mostly exposes state for reading. MBObjectBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/BasicCultureObject.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Name` | `public TextObject Name` | property |
| `IsMainCulture` | `public bool IsMainCulture` | property |
| `IsBandit` | `public bool IsBandit` | property |
| `CanHaveSettlement` | `public bool CanHaveSettlement` | property |
| `Color` | `public uint Color` | property |
| `Color2` | `public uint Color2` | property |
| `ClothAlternativeColor` | `public uint ClothAlternativeColor` | property |
| `ClothAlternativeColor2` | `public uint ClothAlternativeColor2` | property |
| `BackgroundColor1` | `public uint BackgroundColor1` | property |
| `ForegroundColor1` | `public uint ForegroundColor1` | property |
| `BackgroundColor2` | `public uint BackgroundColor2` | property |
| `ForegroundColor2` | `public uint ForegroundColor2` | property |
| `EncounterBackgroundMesh` | `public string EncounterBackgroundMesh` | property |
| `Banner` | `public Banner Banner` | property |
| `ToString` | `public override string ToString()` | method |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | method |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
