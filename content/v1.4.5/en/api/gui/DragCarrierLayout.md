---
title: "DragCarrierLayout"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DragCarrierLayout`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DragCarrierLayout

**Namespace:** TaleWorlds.GauntletUI.Layout
**Module:** TaleWorlds.GauntletUI
**Type:** `public class DragCarrierLayout : ILayout`
**Base:** `ILayout`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.Layout/DragCarrierLayout.cs`

## Overview

`DragCarrierLayout` lives in `TaleWorlds.GauntletUI.Layout` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.Layout` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var example = new DragCarrierLayout();
```

## See Also

- [Complete Class Catalog](../catalog)