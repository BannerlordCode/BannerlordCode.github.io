<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TauntCircleActionSelectorWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `TauntCircleActionSelectorWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `FallbackNavigationWidget` | `public Widget FallbackNavigationWidget { get; set; }` |

## Usage Example

```csharp
var widget = new TauntCircleActionSelectorWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)