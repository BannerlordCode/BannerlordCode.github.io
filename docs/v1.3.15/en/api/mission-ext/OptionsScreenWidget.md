<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OptionsScreenWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OptionsScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OptionsScreenWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsScreenWidget.cs`

## Overview

`OptionsScreenWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `VideoMemoryUsageWidget` | `public Widget VideoMemoryUsageWidget { get; set; }` |
| `CurrentOptionDescriptionWidget` | `public RichTextWidget CurrentOptionDescriptionWidget { get; set; }` |
| `CurrentOptionNameWidget` | `public RichTextWidget CurrentOptionNameWidget { get; set; }` |
| `CurrentOptionImageWidget` | `public Widget CurrentOptionImageWidget { get; set; }` |
| `PerformanceTabToggle` | `public TabToggleWidget PerformanceTabToggle { get; set; }` |

## Key Methods

### SetCurrentOption
```csharp
public void SetCurrentOption(Widget currentOptionWidget, Sprite newgraphicsSprite)
```

## Usage Example

```csharp
// Typical usage of OptionsScreenWidget (Widget)
// 声明/访问一个 OptionsScreenWidget
var widget = root.GetChild("optionsScreenWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)