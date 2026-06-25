---
title: "TooltipMode"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TooltipMode`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TooltipMode

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core
**Type:** `public enum TooltipMode`
**Base:** none
**File:** `TaleWorlds.Core.ViewModelCollection/Information/PropertyBasedTooltipVM.cs`

## Overview

`TooltipMode` lives in `TaleWorlds.Core.ViewModelCollection.Information` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection.Information` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
TooltipMode example = TooltipMode.Value;
```

## See Also

- [Complete Class Catalog](../catalog)