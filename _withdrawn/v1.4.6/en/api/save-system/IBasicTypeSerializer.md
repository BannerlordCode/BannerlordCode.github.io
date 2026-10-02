---
title: "IBasicTypeSerializer"
description: "IBasicTypeSerializer: a public interface in TaleWorlds.SaveSystem.Definition; 3 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket save-system. Source: TaleWorlds.SaveSystem/Definition/IBasicTypeSerializer.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IBasicTypeSerializer

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public interface IBasicTypeSerializer`
**File:** `TaleWorlds.SaveSystem/Definition/IBasicTypeSerializer.cs`
**Bucket:** `save-system` (rule:TaleWorlds.SaveSystem)

## Overview

IBasicTypeSerializer lives in the TaleWorlds.SaveSystem module, source file TaleWorlds.SaveSystem/Definition/IBasicTypeSerializer.cs. It is a public interface; the inheritance chain is IBasicTypeSerializer. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IBasicTypeSerializer lands in canonical bucket `save-system` (matched rule `rule:TaleWorlds.SaveSystem`), namespace `TaleWorlds.SaveSystem.Definition`, inheritance chain IBasicTypeSerializer. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.SaveSystem/Definition/IBasicTypeSerializer.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Serialize` | `void Serialize(IWriter writer, object value);` | method |
| `Deserialize` | `object Deserialize(IReader reader);` | method |
| `GetSizeInBytes` | `int GetSizeInBytes();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CollectObjectsDelegate](../CollectObjectsDelegate/)
- [same namespace ContainerDefinition](../ContainerDefinition/)
- [same namespace ContainerSaveId](../ContainerSaveId/)
- [same namespace CustomField](../CustomField/)
