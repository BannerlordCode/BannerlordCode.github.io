<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ImageWidget`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ImageWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ImageWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.BaseTypes/ImageWidget.cs`

## Overview

`ImageWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ImageWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `OverrideDefaultStateSwitchingEnabled` | `public bool OverrideDefaultStateSwitchingEnabled { get; set; }` |
| `OverrideDefaultStateSwitchingDisabled` | `public bool OverrideDefaultStateSwitchingDisabled { get; set; }` |

## Usage Example

```csharp
var widget = new ImageWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)