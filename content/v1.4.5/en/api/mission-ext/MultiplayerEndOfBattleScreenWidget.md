---
title: "MultiplayerEndOfBattleScreenWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerEndOfBattleScreenWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerEndOfBattleScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerEndOfBattleScreenWidget`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer/MultiplayerEndOfBattleScreenWidget.cs`

## Overview

`MultiplayerEndOfBattleScreenWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerEndOfBattleScreenWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsShown` | `public bool IsShown { get; set; }` |
| `FadeInDuration` | `public float FadeInDuration { get; set; }` |

## Key Methods

### MultiplayerEndOfBattleScreenWidget
`public class MultiplayerEndOfBattleScreenWidget(UIContext context)`

**Purpose:** Handles logic related to `multiplayer end of battle screen widget`.

## Usage Example

```csharp
var widget = new MultiplayerEndOfBattleScreenWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)