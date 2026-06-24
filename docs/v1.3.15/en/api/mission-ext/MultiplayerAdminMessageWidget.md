<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerAdminMessageWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerAdminMessageWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.AdminMessage
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerAdminMessageWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/AdminMessage/MultiplayerAdminMessageWidget.cs`

## Overview

`MultiplayerAdminMessageWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerAdminMessageWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MessageTextWidget` | `public TextWidget MessageTextWidget { get; set; }` |
| `MessageOnScreenStayTime` | `public float MessageOnScreenStayTime { get; }` |
| `MessageFadeInTime` | `public float MessageFadeInTime { get; }` |
| `MessageFadeOutTime` | `public float MessageFadeOutTime { get; }` |

## Usage Example

```csharp
var widget = new MultiplayerAdminMessageWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)