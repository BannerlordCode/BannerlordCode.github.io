---
title: "MultiplayerTeamPlayerAvatarButtonWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerTeamPlayerAvatarButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `MultiplayerTeamPlayerAvatarButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsDead` | `public bool IsDead { get; set; }` |
| `DeathAlphaFactor` | `public float DeathAlphaFactor { get; set; }` |
| `AvatarImage` | `public ImageIdentifierWidget AvatarImage { get; set; }` |

## Usage Example

```csharp
var widget = new MultiplayerTeamPlayerAvatarButtonWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)