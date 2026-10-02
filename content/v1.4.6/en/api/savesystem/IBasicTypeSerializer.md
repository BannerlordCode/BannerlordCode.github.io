---
title: "IBasicTypeSerializer"
description: "IBasicTypeSerializer: a public interface in TaleWorlds.SaveSystem; 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.SaveSystem/Definition/IBasicTypeSerializer.cs."
---
# IBasicTypeSerializer

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public interface IBasicTypeSerializer`
**File:** `TaleWorlds.SaveSystem/Definition/IBasicTypeSerializer.cs`

## Overview

IBasicTypeSerializer lives in the TaleWorlds.SaveSystem module, source file TaleWorlds.SaveSystem/Definition/IBasicTypeSerializer.cs. It is a public interface; the inheritance chain is IBasicTypeSerializer. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IBasicTypeSerializer is a top-level type in TaleWorlds.SaveSystem, namespace differing from (TaleWorlds.SaveSystem.Definition) the module directory; inheritance chain IBasicTypeSerializer. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.SaveSystem/Definition/IBasicTypeSerializer.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Serialize` | `void Serialize(IWriter writer, object value);` | method |
| `Deserialize` | `object Deserialize(IReader reader);` | method |
| `GetSizeInBytes` | `int GetSizeInBytes();` | method |

## See Also

- [↑ savesystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CollectObjectsDelegate](../CollectObjectsDelegate)
- [same namespace ContainerDefinition](../ContainerDefinition)
- [same namespace ContainerSaveId](../ContainerSaveId)
- [same namespace CustomField](../CustomField)
