<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RundownColumnDividerCollectionWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RundownColumnDividerCollectionWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information.RundownTooltip
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RundownColumnDividerCollectionWidget : ListPanel`
**Base:** `ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/RundownTooltip/RundownColumnDividerCollectionWidget.cs`

## Overview

`RundownColumnDividerCollectionWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `DividerWidth` | `public float DividerWidth { get; set; }` |
| `DividerSprite` | `public Sprite DividerSprite { get; set; }` |
| `DividerColor` | `public Color DividerColor { get; set; }` |

## Key Methods

### Refresh
```csharp
public void Refresh(IReadOnlyList<float> columnWidths)
```

## Usage Example

```csharp
// Typical usage of RundownColumnDividerCollectionWidget (Widget)
// 声明/访问一个 RundownColumnDividerCollectionWidget
var widget = root.GetChild("rundownColumnDividerCollectionWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)