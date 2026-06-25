---
title: "RundownLineWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RundownLineWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RundownLineWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information.RundownTooltip
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RundownLineWidget : ListPanel`
**Base:** `ListPanel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information.RundownTooltip/RundownLineWidget.cs`

## Overview

`RundownLineWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `RundownLineWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `NameTextWidget` | `public TextWidget NameTextWidget { get; set; }` |
| `ValueTextWidget` | `public TextWidget ValueTextWidget { get; set; }` |
| `Value` | `public float Value { get; set; }` |

## Key Methods

### RefreshValueOffset
`public void RefreshValueOffset(float columnWidth)`

**Purpose:** Refreshes the display or cache of `value offset`.

## Usage Example

```csharp
var widget = new RundownLineWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)