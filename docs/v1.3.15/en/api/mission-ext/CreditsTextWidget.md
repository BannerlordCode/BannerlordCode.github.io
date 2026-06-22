<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CreditsTextWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CreditsTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Credits
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CreditsTextWidget : RichTextWidget`
**Base:** `RichTextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Credits/CreditsTextWidget.cs`

## Overview

`CreditsTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `OverrideFont` | `public string OverrideFont { get; set; }` |

## Usage Example

```csharp
// Typical usage of CreditsTextWidget (Widget)
// 声明/访问一个 CreditsTextWidget
var widget = root.GetChild("creditsTextWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)