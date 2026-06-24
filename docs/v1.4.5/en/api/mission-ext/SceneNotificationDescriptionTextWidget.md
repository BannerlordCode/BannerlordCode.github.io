<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SceneNotificationDescriptionTextWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SceneNotificationDescriptionTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SceneNotificationDescriptionTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/SceneNotificationDescriptionTextWidget.cs`

## Overview

`SceneNotificationDescriptionTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `SceneNotificationDescriptionTextWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MultiLineAlignment` | `public TextHorizontalAlignment MultiLineAlignment { get; set; }` |

## Usage Example

```csharp
var widget = new SceneNotificationDescriptionTextWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)