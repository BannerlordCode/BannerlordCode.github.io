<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerTeamPlayerAvatarButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerTeamPlayerAvatarButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerTeamPlayerAvatarButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerTeamPlayerAvatarButtonWidget.cs`

## Overview

`MultiplayerTeamPlayerAvatarButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsDead` | `public bool IsDead { get; set; }` |
| `DeathAlphaFactor` | `public float DeathAlphaFactor { get; set; }` |
| `AvatarImage` | `public ImageIdentifierWidget AvatarImage { get; set; }` |

## Usage Example

```csharp
// Typical usage of MultiplayerTeamPlayerAvatarButtonWidget (Widget)
// 声明/访问一个 MultiplayerTeamPlayerAvatarButtonWidget
var widget = root.GetChild("multiplayerTeamPlayerAvatarButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)