---
title: "TypeSaveId"
description: "TypeSaveId: a public class in TaleWorlds.SaveSystem.Definition, inheriting SaveId; 6 exposed members (4 methods, 1 properties, 0 fields). Canonical bucket save-system. Source: TaleWorlds.SaveSystem/Definition/TypeSaveId.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TypeSaveId

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class TypeSaveId : SaveId`
**File:** `TaleWorlds.SaveSystem/Definition/TypeSaveId.cs`
**Bucket:** `save-system` (rule:TaleWorlds.SaveSystem)

## Overview

TypeSaveId lives in the TaleWorlds.SaveSystem module, source file TaleWorlds.SaveSystem/Definition/TypeSaveId.cs. It is a public class, implementing/inheriting SaveId; the inheritance chain is TypeSaveId → SaveId. It exposes 6 public/protected members: 4 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TypeSaveId lands in canonical bucket `save-system` (matched rule `rule:TaleWorlds.SaveSystem`), namespace `TaleWorlds.SaveSystem.Definition`, inheritance chain TypeSaveId → SaveId. The surface is method-led (methods 4/6, properties 1/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.SaveSystem/Definition/TypeSaveId.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Id` | `public int Id` | property |
| `TypeSaveId` | `public TypeSaveId(int id)` | constructor |
| `GetStringId` | `public override string GetStringId()` | method |
| `WriteTo` | `public override void WriteTo(IWriter writer)` | method |
| `ReadFrom` | `public static TypeSaveId ReadFrom(IReader reader)` | method |
| `GetSizeInBytes` | `public override int GetSizeInBytes()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SaveId](../SaveId/)
- [same namespace CollectObjectsDelegate](../CollectObjectsDelegate/)
- [same namespace ContainerDefinition](../ContainerDefinition/)
- [same namespace ContainerSaveId](../ContainerSaveId/)
- [same namespace CustomField](../CustomField/)
