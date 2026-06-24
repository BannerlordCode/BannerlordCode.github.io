<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DevelopmentNameTextWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `DevelopmentNameTextWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxText` | `public string MaxText { get; set; }` |
| `MaxTextStayTime` | `public float MaxTextStayTime { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `IsInQueue` | `public bool IsInQueue { get; set; }` |

## Key Methods

### StartMaxTextAnimation
`public void StartMaxTextAnimation()`

**Purpose:** Handles logic related to `start max text animation`.

## Usage Example

```csharp
var widget = new DevelopmentNameTextWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)