<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AssemblyLoader`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AssemblyLoader

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class AssemblyLoader`
**Area:** core-extra

## Overview

`AssemblyLoader` lives in `TaleWorlds.Library`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public static void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### LoadFrom
`public static Assembly LoadFrom(string assemblyFile, bool show_error = true)`

**Purpose:** Loads `from` data.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
AssemblyLoader.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
