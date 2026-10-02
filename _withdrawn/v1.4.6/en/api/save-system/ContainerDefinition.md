---
title: "ContainerDefinition"
description: "ContainerDefinition: a public class in TaleWorlds.SaveSystem.Definition, inheriting TypeDefinitionBase; 5 exposed members (1 methods, 3 properties, 0 fields). Canonical bucket save-system. Source: TaleWorlds.SaveSystem/Definition/ContainerDefinition.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ContainerDefinition

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class ContainerDefinition : TypeDefinitionBase`
**File:** `TaleWorlds.SaveSystem/Definition/ContainerDefinition.cs`
**Bucket:** `save-system` (rule:TaleWorlds.SaveSystem)

## Overview

ContainerDefinition lives in the TaleWorlds.SaveSystem module, source file TaleWorlds.SaveSystem/Definition/ContainerDefinition.cs. It is a public class, implementing/inheriting TypeDefinitionBase; the inheritance chain is ContainerDefinition → TypeDefinitionBase. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ContainerDefinition lands in canonical bucket `save-system` (matched rule `rule:TaleWorlds.SaveSystem`), namespace `TaleWorlds.SaveSystem.Definition`, inheritance chain ContainerDefinition → TypeDefinitionBase. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.SaveSystem/Definition/ContainerDefinition.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `DefinedAssembly` | `public Assembly DefinedAssembly` | property |
| `CollectObjectsMethod` | `public CollectObjectsDelegate CollectObjectsMethod` | property |
| `HasNoChildObject` | `public bool HasNoChildObject` | property |
| `ContainerDefinition` | `public ContainerDefinition(Type type, ContainerSaveId saveId, Assembly definedAssembly) : base(type, saveId)` | constructor |
| `InitializeForAutoGeneration` | `public void InitializeForAutoGeneration(CollectObjectsDelegate collectObjectsDelegate, bool hasNoChildObject)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface TypeDefinitionBase](../TypeDefinitionBase/)
- [same namespace CollectObjectsDelegate](../CollectObjectsDelegate/)
- [same namespace ContainerSaveId](../ContainerSaveId/)
- [same namespace CustomField](../CustomField/)
- [same namespace DefinitionContext](../DefinitionContext/)
