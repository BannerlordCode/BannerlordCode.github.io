---
title: "ContainerDefinition"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ContainerDefinition`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ContainerDefinition

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public class ContainerDefinition : TypeDefinitionBase`
**Base:** `TypeDefinitionBase`
**Area:** save-system

## Overview

`ContainerDefinition` lives in `TaleWorlds.SaveSystem.Definition`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Definition` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DefinedAssembly` | `public Assembly DefinedAssembly { get; }` |
| `CollectObjectsMethod` | `public CollectObjectsDelegate CollectObjectsMethod { get; }` |
| `HasNoChildObject` | `public bool HasNoChildObject { get; }` |

## Key Methods

### InitializeForAutoGeneration
`public void InitializeForAutoGeneration(CollectObjectsDelegate collectObjectsDelegate, bool hasNoChildObject)`

**Purpose:** Initializes the state, resources, or bindings for `for auto generation`.

## Usage Example

```csharp
// First obtain a ContainerDefinition instance from game state, then call one of its public methods
var value = new ContainerDefinition();
value.InitializeForAutoGeneration(collectObjectsDelegate, false);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)
