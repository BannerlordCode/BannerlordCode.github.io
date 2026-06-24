<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AssemblyLoader`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AssemblyLoader

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class AssemblyLoader`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/AssemblyLoader.cs`

## Overview

`AssemblyLoader` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public static void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### LoadFrom
`public static Assembly LoadFrom(string assemblyFile, bool showError = true)`

**Purpose:** Loads `from` data.

### LoadFrom
`public static Assembly LoadFrom(string assemblyFile, out AssemblyLoadResult result, bool showError = true)`

**Purpose:** Loads `from` data.

## Usage Example

```csharp
AssemblyLoader.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)