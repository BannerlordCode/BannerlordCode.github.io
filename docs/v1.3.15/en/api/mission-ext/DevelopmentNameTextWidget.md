<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DevelopmentNameTextWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DevelopmentNameTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DevelopmentNameTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/DevelopmentNameTextWidget.cs`

## Overview

`DevelopmentNameTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxText` | `public string MaxText { get; set; }` |
| `MaxTextStayTime` | `public float MaxTextStayTime { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `IsInQueue` | `public bool IsInQueue { get; set; }` |

## Key Methods

### StartMaxTextAnimation
```csharp
public void StartMaxTextAnimation()
```

## Usage Example

```csharp
// Typical usage of DevelopmentNameTextWidget (Widget)
// 声明/访问一个 DevelopmentNameTextWidget
var widget = root.GetChild("developmentNameTextWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)