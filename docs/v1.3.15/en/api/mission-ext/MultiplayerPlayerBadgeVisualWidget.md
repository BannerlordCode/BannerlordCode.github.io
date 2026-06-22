<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerPlayerBadgeVisualWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerPlayerBadgeVisualWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPlayerBadgeVisualWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerPlayerBadgeVisualWidget.cs`

## Overview

`MultiplayerPlayerBadgeVisualWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `BadgeId` | `public string BadgeId { get; set; }` |

## Key Methods

### SetForcedSize
```csharp
public void SetForcedSize(float width, float height)
```

## Usage Example

```csharp
// Typical usage of MultiplayerPlayerBadgeVisualWidget (Widget)
// 声明/访问一个 MultiplayerPlayerBadgeVisualWidget
var widget = root.GetChild("multiplayerPlayerBadgeVisualWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)