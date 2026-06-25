---
title: "DefinitionContext"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefinitionContext`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefinitionContext

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public class DefinitionContext`
**Area:** save-system

## Overview

`DefinitionContext` lives in `TaleWorlds.SaveSystem.Definition`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Definition` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GotError` | `public bool GotError { get; }` |
| `Errors` | `public IEnumerable<string> Errors { get; }` |

## Key Methods

### FillWithCurrentTypes
`public void FillWithCurrentTypes()`

**Purpose:** Handles logic related to `fill with current types`.

### TryGetTypeDefinition
`public TypeDefinitionBase TryGetTypeDefinition(SaveId saveId)`

**Purpose:** Attempts to get `get type definition`, usually returning the result in an out parameter.

### GenerateCode
`public void GenerateCode(SaveCodeGenerationContext context)`

**Purpose:** Handles logic related to `generate code`.

## Usage Example

```csharp
// First obtain a DefinitionContext instance from game state, then call one of its public methods
var value = new DefinitionContext();
value.FillWithCurrentTypes();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)
