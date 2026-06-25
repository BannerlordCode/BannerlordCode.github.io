---
title: "BrushRendererAnimationState"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BrushRendererAnimationState`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BrushRendererAnimationState

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public enum BrushRendererAnimationState`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/BrushRenderer.cs`

## Overview

`BrushRendererAnimationState` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
BrushRendererAnimationState example = BrushRendererAnimationState.Value;
```

## See Also

- [Complete Class Catalog](../catalog)