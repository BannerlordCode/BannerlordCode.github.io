<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GenderBasedSelectedValue`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GenderBasedSelectedValue

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct GenderBasedSelectedValue`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator/FaceGenVM.cs`

## Overview

`GenderBasedSelectedValue` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Reset
`public void Reset()`

**Purpose:** Resets `reset` to its initial state.

## Usage Example

```csharp
var value = new GenderBasedSelectedValue();
value.Reset();
```

## See Also

- [Complete Class Catalog](../catalog)