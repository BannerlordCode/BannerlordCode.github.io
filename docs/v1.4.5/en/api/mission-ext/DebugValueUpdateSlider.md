<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DebugValueUpdateSlider`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DebugValueUpdateSlider

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DebugValueUpdateSlider : SliderWidget`
**Base:** `SliderWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/DebugValueUpdateSlider.cs`

## Overview

`DebugValueUpdateSlider` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `WidgetToUpdate` | `public TextWidget WidgetToUpdate { get; set; }` |
| `ValueToUpdate` | `public FillBarVerticalWidget ValueToUpdate { get; set; }` |

## Usage Example

```csharp
var example = new DebugValueUpdateSlider();
```

## See Also

- [Complete Class Catalog](../catalog)