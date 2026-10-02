---
title: "MBBodyProperty"
description: "MBBodyProperty: a public class in TaleWorlds.Core, inheriting MBObjectBase; 10 exposed members (3 methods, 5 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/MBBodyProperty.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBBodyProperty

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class MBBodyProperty : MBObjectBase`
**File:** `TaleWorlds.Core/MBBodyProperty.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

MBBodyProperty lives in the TaleWorlds.Core module, source file TaleWorlds.Core/MBBodyProperty.cs. It is a public class, implementing/inheriting MBObjectBase; the inheritance chain is MBBodyProperty → MBObjectBase. It exposes 10 public/protected members: 3 methods, 5 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBBodyProperty lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain MBBodyProperty → MBObjectBase. The surface is property-led (properties 5/10, methods 3/10), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/MBBodyProperty.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `HairTags` | `public string HairTags` | property |
| `BeardTags` | `public string BeardTags` | property |
| `TattooTags` | `public string TattooTags` | property |
| `BodyPropertyMin` | `public BodyProperties BodyPropertyMin` | property |
| `BodyPropertyMax` | `public BodyProperties BodyPropertyMax` | property |
| `MBBodyProperty` | `public MBBodyProperty(string stringId) : base(stringId)` | constructor |
| `MBBodyProperty` | `public MBBodyProperty()` | constructor |
| `CreateFrom` | `public static MBBodyProperty CreateFrom(MBBodyProperty bodyProperty)` | method |
| `Init` | `public void Init(BodyProperties bodyPropertyMin, BodyProperties bodyPropertyMax)` | method |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
