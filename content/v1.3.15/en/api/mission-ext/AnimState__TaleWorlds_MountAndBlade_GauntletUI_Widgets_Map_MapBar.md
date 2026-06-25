---
title: "AnimState__TaleWorlds_MountAndBlade_GauntletUI_Widgets_Map_MapBar"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AnimState`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AnimState

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum AnimState`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapBarUnreadBrushWidget.cs`

## Overview

`AnimState` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
AnimState example = AnimState.Value;
```

## See Also

- [Complete Class Catalog](../catalog)