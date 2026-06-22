<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TauntCircleActionSelectorWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TauntCircleActionSelectorWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TauntCircleActionSelectorWidget : CircleActionSelectorWidget`
**Base:** `CircleActionSelectorWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/TauntCircleActionSelectorWidget.cs`

## Overview

`TauntCircleActionSelectorWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `FallbackNavigationWidget` | `public Widget FallbackNavigationWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of TauntCircleActionSelectorWidget (Widget)
// 声明/访问一个 TauntCircleActionSelectorWidget
var widget = root.GetChild("tauntCircleActionSelectorWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)