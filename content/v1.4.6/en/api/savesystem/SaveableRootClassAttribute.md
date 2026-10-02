---
title: "SaveableRootClassAttribute"
description: "SaveableRootClassAttribute: a public class in TaleWorlds.SaveSystem, inheriting Attribute; 2 exposed members (0 methods, 1 properties, 0 fields). Source: TaleWorlds.SaveSystem/SaveableRootClassAttribute.cs."
---
# SaveableRootClassAttribute

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class SaveableRootClassAttribute : Attribute`
**File:** `TaleWorlds.SaveSystem/SaveableRootClassAttribute.cs`

## Overview

SaveableRootClassAttribute lives in the TaleWorlds.SaveSystem module, source file TaleWorlds.SaveSystem/SaveableRootClassAttribute.cs. It is a public class, implementing/inheriting Attribute; the inheritance chain is SaveableRootClassAttribute → Attribute. It exposes 2 public/protected members: 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SaveableRootClassAttribute is a top-level type in TaleWorlds.SaveSystem, namespace matching the module directory; inheritance chain SaveableRootClassAttribute → Attribute. The surface is property-led (properties 1/2, methods 0/2), so it mostly exposes state for reading. Attribute on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.SaveSystem/SaveableRootClassAttribute.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SaveId` | `public int SaveId` | property |
| `SaveableRootClassAttribute` | `public SaveableRootClassAttribute(int saveId)` | constructor |

## See Also

- [↑ savesystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AsyncFileSaveDriver](../AsyncFileSaveDriver)
- [same namespace ContainerType](../ContainerType)
- [same namespace EntryId](../EntryId)
- [same namespace FileDriver](../FileDriver)
