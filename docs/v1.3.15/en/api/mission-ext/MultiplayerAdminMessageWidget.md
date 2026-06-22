<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerAdminMessageWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
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

## Key Properties

| Name | Signature |
|------|-----------|
| `MessageTextWidget` | `public TextWidget MessageTextWidget { get; set; }` |
| `MessageOnScreenStayTime` | `public float MessageOnScreenStayTime { get; }` |
| `MessageFadeInTime` | `public float MessageFadeInTime { get; }` |
| `MessageFadeOutTime` | `public float MessageFadeOutTime { get; }` |

## Usage Example

```csharp
// Typical usage of MultiplayerAdminMessageWidget (Widget)
// 声明/访问一个 MultiplayerAdminMessageWidget
var widget = root.GetChild("multiplayerAdminMessageWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)