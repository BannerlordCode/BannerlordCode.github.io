---
title: "SaveableBasicTypeDefiner"
description: "SaveableBasicTypeDefiner: a public class in TaleWorlds.SaveSystem, inheriting SaveableTypeDefiner; 7 exposed members (6 methods, 0 properties, 0 fields). Source: TaleWorlds.SaveSystem/SaveableBasicTypeDefiner.cs."
---
# SaveableBasicTypeDefiner

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class SaveableBasicTypeDefiner : SaveableTypeDefiner`
**File:** `TaleWorlds.SaveSystem/SaveableBasicTypeDefiner.cs`

## Overview

SaveableBasicTypeDefiner lives in the TaleWorlds.SaveSystem module, source file TaleWorlds.SaveSystem/SaveableBasicTypeDefiner.cs. It is a public class, implementing/inheriting SaveableTypeDefiner; the inheritance chain is SaveableBasicTypeDefiner → SaveableTypeDefiner. It exposes 7 public/protected members: 6 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SaveableBasicTypeDefiner is a top-level type in TaleWorlds.SaveSystem, namespace matching the module directory; inheritance chain SaveableBasicTypeDefiner → SaveableTypeDefiner. The surface is method-led (methods 6/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.SaveSystem/SaveableBasicTypeDefiner.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SaveableBasicTypeDefiner` | `public SaveableBasicTypeDefiner() : base(30000)` | constructor |
| `DefineBasicTypes` | `protected internal override void DefineBasicTypes()` | method |
| `DefineClassTypes` | `protected internal override void DefineClassTypes()` | method |
| `DefineStructTypes` | `protected internal override void DefineStructTypes()` | method |
| `DefineGenericStructDefinitions` | `protected internal override void DefineGenericStructDefinitions()` | method |
| `DefineGenericClassDefinitions` | `protected internal override void DefineGenericClassDefinitions()` | method |
| `DefineContainerDefinitions` | `protected internal override void DefineContainerDefinitions()` | method |

## See Also

- [↑ savesystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AsyncFileSaveDriver](../AsyncFileSaveDriver)
- [same namespace ContainerType](../ContainerType)
- [same namespace EntryId](../EntryId)
- [same namespace FileDriver](../FileDriver)
