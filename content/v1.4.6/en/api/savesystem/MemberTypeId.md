---
title: "MemberTypeId"
description: "MemberTypeId: a public struct in TaleWorlds.SaveSystem; 8 exposed members (5 methods, 2 properties, 0 fields). Source: TaleWorlds.SaveSystem/Definition/MemberTypeId.cs."
---
# MemberTypeId

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public struct MemberTypeId`
**File:** `TaleWorlds.SaveSystem/Definition/MemberTypeId.cs`

## Overview

MemberTypeId lives in the TaleWorlds.SaveSystem module, source file TaleWorlds.SaveSystem/Definition/MemberTypeId.cs. It is a public struct; the inheritance chain is MemberTypeId. It exposes 8 public/protected members: 5 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MemberTypeId is a top-level type in TaleWorlds.SaveSystem, namespace differing from (TaleWorlds.SaveSystem.Definition) the module directory; inheritance chain MemberTypeId. The surface is method-led (methods 5/8, properties 2/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.SaveSystem/Definition/MemberTypeId.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SaveId` | `public short SaveId` | property |
| `Invalid` | `public static MemberTypeId Invalid` | property |
| `ToString` | `public override string ToString()` | method |
| `MemberTypeId` | `public MemberTypeId(byte typeLevel, short localSaveId)` | constructor |
| `Equals` | `public override bool Equals(object obj)` | method |
| `operator` | `public static bool operator` | operator |
| `!` | `public static bool operator !` | operator |
| `GetHashCode` | `public override int GetHashCode()` | method |

## See Also

- [↑ savesystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CollectObjectsDelegate](../CollectObjectsDelegate)
- [same namespace ContainerDefinition](../ContainerDefinition)
- [same namespace ContainerSaveId](../ContainerSaveId)
- [same namespace CustomField](../CustomField)
