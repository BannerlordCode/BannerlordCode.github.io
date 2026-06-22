<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SceneNotificationDescriptionTextWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SceneNotificationDescriptionTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SceneNotificationDescriptionTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/SceneNotificationDescriptionTextWidget.cs`

## Overview

`SceneNotificationDescriptionTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `MultiLineAlignment` | `public TextHorizontalAlignment MultiLineAlignment { get; set; }` |

## Usage Example

```csharp
// Typical usage of SceneNotificationDescriptionTextWidget (Widget)
// 声明/访问一个 SceneNotificationDescriptionTextWidget
var widget = root.GetChild("sceneNotificationDescriptionTextWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)