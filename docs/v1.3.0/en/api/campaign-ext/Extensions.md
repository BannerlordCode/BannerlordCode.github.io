<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Extensions`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Extensions

**Namespace:** TaleWorlds.ModuleManager
**Module:** TaleWorlds.ModuleManager
**Type:** `public static class Extensions`
**Base:** none
**File:** `TaleWorlds.ModuleManager/Extensions.cs`

## Overview

`Extensions` lives in `TaleWorlds.ModuleManager` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.ModuleManager` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetActiveReferencingGameAssembliesSafe
`public static Assembly GetActiveReferencingGameAssembliesSafe(this Assembly assembly)`

**Purpose:** Gets the current value of `active referencing game assemblies safe`.

## Usage Example

```csharp
Extensions.GetActiveReferencingGameAssembliesSafe(assembly);
```

## See Also

- [Complete Class Catalog](../catalog)