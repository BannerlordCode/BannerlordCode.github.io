<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaListItemButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaListItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EncyclopediaListItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaListItemButtonWidget.cs`

## Overview

`EncyclopediaListItemButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ListItemNameTextWidget` | `public TextWidget ListItemNameTextWidget { get; set; }` |
| `ListComparedValueTextWidget` | `public TextWidget ListComparedValueTextWidget { get; set; }` |
| `InfoAvailableItemNameBrush` | `public Brush InfoAvailableItemNameBrush { get; set; }` |
| `InfoUnvailableItemNameBrush` | `public Brush InfoUnvailableItemNameBrush { get; set; }` |
| `IsInfoAvailable` | `public bool IsInfoAvailable { get; set; }` |
| `ListItemId` | `public string ListItemId { get; set; }` |

## Key Methods

### OnThisLateUpdate
```csharp
public void OnThisLateUpdate(float dt)
```

## Usage Example

```csharp
// Typical usage of EncyclopediaListItemButtonWidget (Widget)
// 声明/访问一个 EncyclopediaListItemButtonWidget
var widget = root.GetChild("encyclopediaListItemButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)