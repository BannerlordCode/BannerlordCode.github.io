---
title: "HighlightElementToggledEvent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HighlightElementToggledEvent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HighlightElementToggledEvent

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HighlightElementToggledEvent : EventBase`
**Base:** `EventBase`
**Area:** mission-ext

## Overview

`HighlightElementToggledEvent` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CustomSizeSyncTarget` | `public Widget CustomSizeSyncTarget { get; set; }` |
| `DoNotOverrideWidth` | `public bool DoNotOverrideWidth { get; set; }` |
| `DoNotOverrideHeight` | `public bool DoNotOverrideHeight { get; set; }` |
| `IsHighlightEnabled` | `public bool IsHighlightEnabled { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; }` |
| `HighlightFrameWidget` | `public TutorialHighlightItemBrushWidget HighlightFrameWidget { get; }` |

## Usage Example

```csharp
var value = new HighlightElementToggledEvent();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
