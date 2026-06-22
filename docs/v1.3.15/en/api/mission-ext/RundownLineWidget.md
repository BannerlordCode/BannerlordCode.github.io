<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RundownLineWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RundownLineWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information.RundownTooltip
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RundownLineWidget : ListPanel`
**Base:** `ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/RundownTooltip/RundownLineWidget.cs`

## Overview

`RundownLineWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `NameTextWidget` | `public TextWidget NameTextWidget { get; set; }` |
| `ValueTextWidget` | `public TextWidget ValueTextWidget { get; set; }` |
| `Value` | `public float Value { get; set; }` |

## Key Methods

### RefreshValueOffset
```csharp
public void RefreshValueOffset(float columnWidth)
```

## Usage Example

```csharp
// Typical usage of RundownLineWidget (Widget)
// 声明/访问一个 RundownLineWidget
var widget = root.GetChild("rundownLineWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)