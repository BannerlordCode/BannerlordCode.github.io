---
title: "DefinitionContext"
description: "DefinitionContext: a public class in TaleWorlds.SaveSystem.Definition; 6 exposed members (3 methods, 2 properties, 0 fields). Canonical bucket save-system. Source: TaleWorlds.SaveSystem/Definition/DefinitionContext.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefinitionContext

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class DefinitionContext`
**File:** `TaleWorlds.SaveSystem/Definition/DefinitionContext.cs`
**Bucket:** `save-system` (rule:TaleWorlds.SaveSystem)

## Overview

DefinitionContext lives in the TaleWorlds.SaveSystem module, source file TaleWorlds.SaveSystem/Definition/DefinitionContext.cs. It is a public class; the inheritance chain is DefinitionContext. It exposes 6 public/protected members: 3 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefinitionContext lands in canonical bucket `save-system` (matched rule `rule:TaleWorlds.SaveSystem`), namespace `TaleWorlds.SaveSystem.Definition`, inheritance chain DefinitionContext. The surface is method-led (methods 3/6, properties 2/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.SaveSystem/Definition/DefinitionContext.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GotError` | `public bool GotError` | property |
| `IEnumerable` | `public IEnumerable<string>Errors` | property |
| `DefinitionContext` | `public DefinitionContext()` | constructor |
| `FillWithCurrentTypes` | `public void FillWithCurrentTypes()` | method |
| `TryGetTypeDefinition` | `public TypeDefinitionBase TryGetTypeDefinition(SaveId saveId)` | method |
| `GenerateCode` | `public void GenerateCode(SaveCodeGenerationContext context)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CollectObjectsDelegate](../CollectObjectsDelegate/)
- [same namespace ContainerDefinition](../ContainerDefinition/)
- [same namespace ContainerSaveId](../ContainerSaveId/)
- [same namespace CustomField](../CustomField/)
