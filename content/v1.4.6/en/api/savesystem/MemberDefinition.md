---
title: "MemberDefinition"
description: "MemberDefinition: a public class in TaleWorlds.SaveSystem; 5 exposed members (2 methods, 2 properties, 0 fields). Source: TaleWorlds.SaveSystem/Definition/MemberDefinition.cs."
---
# MemberDefinition

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public abstract class MemberDefinition`
**File:** `TaleWorlds.SaveSystem/Definition/MemberDefinition.cs`

## Overview

MemberDefinition lives in the TaleWorlds.SaveSystem module, source file TaleWorlds.SaveSystem/Definition/MemberDefinition.cs. It is a public class (abstract); the inheritance chain is MemberDefinition. It exposes 5 public/protected members: 2 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MemberDefinition is a top-level type in TaleWorlds.SaveSystem, namespace differing from (TaleWorlds.SaveSystem.Definition) the module directory; inheritance chain MemberDefinition. The surface is method-led (methods 2/5, properties 2/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.SaveSystem/Definition/MemberDefinition.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Id` | `public MemberTypeId Id` | property |
| `MemberInfo` | `public MemberInfo MemberInfo` | property |
| `MemberDefinition` | `protected MemberDefinition(MemberInfo memberInfo, MemberTypeId id)` | constructor |
| `GetMemberType` | `public abstract Type GetMemberType();` | method |
| `GetValue` | `public abstract object GetValue(object target);` | method |

## See Also

- [↑ savesystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CollectObjectsDelegate](../CollectObjectsDelegate)
- [same namespace ContainerDefinition](../ContainerDefinition)
- [same namespace ContainerSaveId](../ContainerSaveId)
- [same namespace CustomField](../CustomField)
