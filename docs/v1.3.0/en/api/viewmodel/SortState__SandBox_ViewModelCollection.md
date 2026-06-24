<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SortState`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SortState

**Namespace:** SandBox.ViewModelCollection
**Module:** SandBox.ViewModelCollection
**Type:** `public enum SortState`
**Base:** none
**File:** `SandBox.ViewModelCollection/SandBoxUIHelper.cs`

## Overview

`SortState` lives in `SandBox.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
SortState example = SortState.Value;
```

## See Also

- [Complete Class Catalog](../catalog)