<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ContainerDefinition`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Initializes the state, resources, or bindings for `for auto generation`.

## Usage Example

```csharp
var value = new ContainerDefinition();
value.InitializeForAutoGeneration(collectObjectsDelegate, false);
```

## See Also

- [Complete Class Catalog](../catalog)