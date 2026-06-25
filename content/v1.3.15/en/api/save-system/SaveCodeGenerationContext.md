---
title: "SaveCodeGenerationContext"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SaveCodeGenerationContext`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaveCodeGenerationContext

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public class SaveCodeGenerationContext`
**Area:** save-system

## Overview

`SaveCodeGenerationContext` lives in `TaleWorlds.SaveSystem.Definition`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Definition` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddAssembly
`public void AddAssembly(Assembly assembly, string defaultNamespace, string location, string fileName)`

**Purpose:** Adds `assembly` to the current collection or state.

## Usage Example

```csharp
// First obtain a SaveCodeGenerationContext instance from game state, then call one of its public methods
var value = new SaveCodeGenerationContext();
value.AddAssembly(assembly, "example", "example", "example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)
