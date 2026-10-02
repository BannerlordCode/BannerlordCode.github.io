---
title: "DefinitionContext"
description: "DefinitionContext: a public class in TaleWorlds.SaveSystem; 6 exposed members (3 methods, 2 properties, 0 fields). Source: TaleWorlds.SaveSystem/Definition/DefinitionContext.cs."
---
# DefinitionContext

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class DefinitionContext`
**File:** `TaleWorlds.SaveSystem/Definition/DefinitionContext.cs`

## Overview

DefinitionContext lives in the TaleWorlds.SaveSystem module, source file TaleWorlds.SaveSystem/Definition/DefinitionContext.cs. It is a public class; the inheritance chain is DefinitionContext. It exposes 6 public/protected members: 3 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefinitionContext is a top-level type in TaleWorlds.SaveSystem, namespace differing from (TaleWorlds.SaveSystem.Definition) the module directory; inheritance chain DefinitionContext. The surface is method-led (methods 3/6, properties 2/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.SaveSystem/Definition/DefinitionContext.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GotError` | `public bool GotError` | property |
| `IEnumerable` | `public IEnumerable<string>Errors` | property |
| `DefinitionContext` | `public DefinitionContext()` | constructor |
| `FillWithCurrentTypes` | `public void FillWithCurrentTypes()` | method |
| `TryGetTypeDefinition` | `public TypeDefinitionBase TryGetTypeDefinition(SaveId saveId)` | method |
| `GenerateCode` | `public void GenerateCode(SaveCodeGenerationContext context)` | method |

## See Also

- [↑ savesystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CollectObjectsDelegate](../CollectObjectsDelegate)
- [same namespace ContainerDefinition](../ContainerDefinition)
- [same namespace ContainerSaveId](../ContainerSaveId)
- [same namespace CustomField](../CustomField)
