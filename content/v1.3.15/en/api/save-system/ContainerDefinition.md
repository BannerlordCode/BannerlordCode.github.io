---
title: "ContainerDefinition"
description: "Auto-generated class reference for ContainerDefinition."
---
# ContainerDefinition

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public class ContainerDefinition : TypeDefinitionBase`
**Base:** `TypeDefinitionBase`
**File:** `TaleWorlds.SaveSystem/Definition/ContainerDefinition.cs`

## Overview

`ContainerDefinition` lives in `TaleWorlds.SaveSystem.Definition` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

**Purpose:** Prepares the resources, state, or bindings required by `for auto generation`.

```csharp
// Obtain an instance of ContainerDefinition from the subsystem API first
ContainerDefinition containerDefinition = ...;
containerDefinition.InitializeForAutoGeneration(collectObjectsDelegate, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ContainerDefinition containerDefinition = ...;
containerDefinition.InitializeForAutoGeneration(collectObjectsDelegate, false);
```

## See Also

- [Area Index](../)