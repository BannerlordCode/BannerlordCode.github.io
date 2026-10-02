---
title: "ContainerSaveId"
description: "ContainerSaveId: a public class in TaleWorlds.SaveSystem, inheriting SaveId; 9 exposed members (4 methods, 3 properties, 0 fields). Source: TaleWorlds.SaveSystem/Definition/ContainerSaveId.cs."
---
# ContainerSaveId

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class ContainerSaveId : SaveId`
**File:** `TaleWorlds.SaveSystem/Definition/ContainerSaveId.cs`

## Overview

ContainerSaveId lives in the TaleWorlds.SaveSystem module, source file TaleWorlds.SaveSystem/Definition/ContainerSaveId.cs. It is a public class, implementing/inheriting SaveId; the inheritance chain is ContainerSaveId → SaveId. It exposes 9 public/protected members: 4 methods, 3 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ContainerSaveId is a top-level type in TaleWorlds.SaveSystem, namespace differing from (TaleWorlds.SaveSystem.Definition) the module directory; inheritance chain ContainerSaveId → SaveId. The surface is method-led (methods 4/9, properties 3/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.SaveSystem/Definition/ContainerSaveId.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ContainerType` | `public ContainerType ContainerType` | property |
| `KeyId` | `public SaveId KeyId` | property |
| `ValueId` | `public SaveId ValueId` | property |
| `ContainerSaveId` | `public ContainerSaveId(ContainerType containerType, SaveId elementId)` | constructor |
| `ContainerSaveId` | `public ContainerSaveId(ContainerType containerType, SaveId keyId, SaveId valueId)` | constructor |
| `GetStringId` | `public override string GetStringId()` | method |
| `WriteTo` | `public override void WriteTo(IWriter writer)` | method |
| `ReadFrom` | `public static ContainerSaveId ReadFrom(IReader reader)` | method |
| `GetSizeInBytes` | `public override int GetSizeInBytes()` | method |

## See Also

- [↑ savesystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface SaveId](../SaveId)
- [same namespace CollectObjectsDelegate](../CollectObjectsDelegate)
- [same namespace ContainerDefinition](../ContainerDefinition)
- [same namespace CustomField](../CustomField)
- [same namespace DefinitionContext](../DefinitionContext)
