---
title: "VisualState__TaleWorlds_MountAndBlade_GauntletUI_Widgets"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VisualState`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VisualState

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum VisualState`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CircleLoadingAnimWidget.cs`

## Overview

`VisualState` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
VisualState example = VisualState.Value;
```

## See Also

- [Complete Class Catalog](../catalog)