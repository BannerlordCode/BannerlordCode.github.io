<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HighlightElementToggledEvent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HighlightElementToggledEvent

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HighlightElementToggledEvent : EventBase`
**Base:** `EventBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial/TutorialHighlightItemBrushWidget.cs`

## Overview

`HighlightElementToggledEvent` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; }` |
| `HighlightFrameWidget` | `public TutorialHighlightItemBrushWidget HighlightFrameWidget { get; }` |

## Usage Example

```csharp
var example = new HighlightElementToggledEvent();
```

## See Also

- [Complete Class Catalog](../catalog)