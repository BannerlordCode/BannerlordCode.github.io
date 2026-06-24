<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ButtonWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ButtonWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ButtonWidget : ImageWidget`
**Base:** `ImageWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ButtonWidget.cs`

## Overview

`ButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ButtonType` | `public ButtonType ButtonType { get; set; }` |
| `IsToggle` | `public bool IsToggle { get; }` |
| `IsRadio` | `public bool IsRadio { get; set; }` |
| `ToggleIndicator` | `public Widget ToggleIndicator { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `DominantSelectedState` | `public bool DominantSelectedState { get; set; }` |

## Usage Example

```csharp
var widget = new ButtonWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)