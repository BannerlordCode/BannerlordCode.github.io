---
title: "GauntletGamepadNavigationContext"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletGamepadNavigationContext`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletGamepadNavigationContext

**Namespace:** (global)
**Module:** (global)
**Type:** `public class GauntletGamepadNavigationContext : IGamepadNavigationContext`
**Base:** `IGamepadNavigationContext`
**File:** `TaleWorlds.GauntletUI/GauntletGamepadNavigationContext.cs`

## Overview

`GauntletGamepadNavigationContext` lives in `(global)` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `(global)` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var example = new GauntletGamepadNavigationContext();
```

## See Also

- [Complete Class Catalog](../catalog)