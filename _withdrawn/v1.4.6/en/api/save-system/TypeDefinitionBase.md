---
title: "TypeDefinitionBase"
description: "TypeDefinitionBase: a public class in TaleWorlds.SaveSystem.Definition; 5 exposed members (1 methods, 3 properties, 0 fields). Canonical bucket save-system. Source: TaleWorlds.SaveSystem/Definition/TypeDefinitionBase.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TypeDefinitionBase

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class TypeDefinitionBase`
**File:** `TaleWorlds.SaveSystem/Definition/TypeDefinitionBase.cs`
**Bucket:** `save-system` (rule:TaleWorlds.SaveSystem)

## Overview

TypeDefinitionBase lives in the TaleWorlds.SaveSystem module, source file TaleWorlds.SaveSystem/Definition/TypeDefinitionBase.cs. It is a public class; the inheritance chain is TypeDefinitionBase. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TypeDefinitionBase lands in canonical bucket `save-system` (matched rule `rule:TaleWorlds.SaveSystem`), namespace `TaleWorlds.SaveSystem.Definition`, inheritance chain TypeDefinitionBase. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.SaveSystem/Definition/TypeDefinitionBase.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SaveId` | `public SaveId SaveId` | property |
| `Type` | `public Type Type` | property |
| `TypeLevel` | `public byte TypeLevel` | property |
| `TypeDefinitionBase` | `protected TypeDefinitionBase(Type type, SaveId saveId)` | constructor |
| `GetClassLevel` | `public static byte GetClassLevel(Type type)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CollectObjectsDelegate](../CollectObjectsDelegate/)
- [same namespace ContainerDefinition](../ContainerDefinition/)
- [same namespace ContainerSaveId](../ContainerSaveId/)
- [same namespace CustomField](../CustomField/)
