---
title: "SaveId"
description: "SaveId: a public class in TaleWorlds.SaveSystem; 6 exposed members (6 methods, 0 properties, 0 fields). Source: TaleWorlds.SaveSystem/Definition/SaveId.cs."
---
# SaveId

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public abstract class SaveId`
**File:** `TaleWorlds.SaveSystem/Definition/SaveId.cs`

## Overview

SaveId lives in the TaleWorlds.SaveSystem module, source file TaleWorlds.SaveSystem/Definition/SaveId.cs. It is a public class (abstract); the inheritance chain is SaveId. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SaveId is a top-level type in TaleWorlds.SaveSystem, namespace differing from (TaleWorlds.SaveSystem.Definition) the module directory; inheritance chain SaveId. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.SaveSystem/Definition/SaveId.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetStringId` | `public abstract string GetStringId();` | method |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `Equals` | `public override bool Equals(object obj)` | method |
| `WriteTo` | `public abstract void WriteTo(IWriter writer);` | method |
| `ReadSaveIdFrom` | `public static SaveId ReadSaveIdFrom(IReader reader)` | method |
| `GetSizeInBytes` | `public abstract int GetSizeInBytes();` | method |

## See Also

- [↑ savesystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CollectObjectsDelegate](../CollectObjectsDelegate)
- [same namespace ContainerDefinition](../ContainerDefinition)
- [same namespace ContainerSaveId](../ContainerSaveId)
- [same namespace CustomField](../CustomField)
