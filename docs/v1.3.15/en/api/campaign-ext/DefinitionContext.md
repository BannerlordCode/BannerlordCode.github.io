<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefinitionContext`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefinitionContext

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public class DefinitionContext`
**Base:** none
**File:** `TaleWorlds.SaveSystem/Definition/DefinitionContext.cs`

## Overview

`DefinitionContext` lives in `TaleWorlds.SaveSystem.Definition` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
var value = new DefinitionContext();
value.FillWithCurrentTypes();
```

## See Also

- [Complete Class Catalog](../catalog)