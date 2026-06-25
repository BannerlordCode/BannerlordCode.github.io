---
title: "MenuTournamentLeaderboardView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MenuTournamentLeaderboardView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MenuTournamentLeaderboardView

**Namespace:** SandBox.View.Menu
**Module:** SandBox.View
**Type:** `public class MenuTournamentLeaderboardView : MenuView`
**Base:** `MenuView`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Menu/MenuTournamentLeaderboardView.cs`

## Overview

`MenuTournamentLeaderboardView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MenuTournamentLeaderboardView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var view = new MenuTournamentLeaderboardView();
```

## See Also

- [Complete Class Catalog](../catalog)