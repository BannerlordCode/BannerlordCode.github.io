---
title: "MBEquipmentRoster"
description: "MBEquipmentRoster: a public class in TaleWorlds.Core, inheriting MBObjectBase; 11 exposed members (6 methods, 4 properties, 1 fields). Source: TaleWorlds.Core/MBEquipmentRoster.cs."
---
# MBEquipmentRoster

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class MBEquipmentRoster : MBObjectBase`
**File:** `TaleWorlds.Core/MBEquipmentRoster.cs`

## Overview

MBEquipmentRoster lives in the TaleWorlds.Core module, source file TaleWorlds.Core/MBEquipmentRoster.cs. It is a public class, implementing/inheriting MBObjectBase; the inheritance chain is MBEquipmentRoster → MBObjectBase. It exposes 11 public/protected members: 6 methods, 4 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBEquipmentRoster is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain MBEquipmentRoster → MBObjectBase. The surface is method-led (methods 6/11, properties 4/11), so it mostly exposes operations. MBObjectBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/MBEquipmentRoster.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EquipmentCulture` | `public BasicCultureObject EquipmentCulture` | property |
| `EquipmentCategories` | `public EquipmentCategories EquipmentCategories` | property |
| `MBReadOnlyList` | `public MBReadOnlyList<Equipment>AllEquipments` | property |
| `DefaultEquipment` | `public Equipment DefaultEquipment` | property |
| `Init` | `public void Init(MBObjectManager objectManager, XmlNode node)` | method |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | method |
| `AddEquipmentRoster` | `public void AddEquipmentRoster(MBEquipmentRoster equipmentRoster, Equipment.EquipmentType equipmentType)` | method |
| `AddOverriddenEquipments` | `public void AddOverriddenEquipments(MBObjectManager objectManager, List<XmlNode>overridenEquipmentSlots)` | method |
| `OrderEquipments` | `public void OrderEquipments()` | method |
| `InitializeDefaultEquipment` | `public void InitializeDefaultEquipment(string equipmentName)` | method |
| `EmptyEquipment` | `public static readonly Equipment EmptyEquipment` | field |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
