<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CreditsItemWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CreditsItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Credits
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CreditsItemWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Credits/CreditsItemWidget.cs`

## Overview

`CreditsItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ItemType` | `public string ItemType { get; set; }` |
| `CategoryWidget` | `public Widget CategoryWidget { get; set; }` |
| `ImageWidget` | `public Widget ImageWidget { get; set; }` |
| `SectionWidget` | `public Widget SectionWidget { get; set; }` |
| `EntryWidget` | `public Widget EntryWidget { get; set; }` |
| `EmptyLineWidget` | `public Widget EmptyLineWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of CreditsItemWidget (Widget)
// 声明/访问一个 CreditsItemWidget
var widget = root.GetChild("creditsItemWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)