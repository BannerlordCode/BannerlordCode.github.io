---
title: "StanceTypes"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StanceTypes`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StanceTypes

**Namespace:** TaleWorlds.Core.ViewModelCollection
**Module:** TaleWorlds.Core
**Type:** `public enum StanceTypes`
**Base:** none
**File:** `TaleWorlds.Core.ViewModelCollection/CharacterViewModel.cs`

## Overview

`StanceTypes` lives in `TaleWorlds.Core.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
StanceTypes example = StanceTypes.Value;
```

## See Also

- [Complete Class Catalog](../catalog)