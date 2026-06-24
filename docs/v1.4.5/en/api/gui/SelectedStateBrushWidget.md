<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SelectedStateBrushWidget`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SelectedStateBrushWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class SelectedStateBrushWidget`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.BaseTypes/SelectedStateBrushWidget.cs`

## Overview

`SelectedStateBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `SelectedStateBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SelectedState` | `public string SelectedState { get; set; }` |

## Key Methods

### SelectedStateBrushWidget
`public class SelectedStateBrushWidget(UIContext context)`

**Purpose:** Handles logic related to `selected state brush widget`.

## Usage Example

```csharp
var widget = new SelectedStateBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)