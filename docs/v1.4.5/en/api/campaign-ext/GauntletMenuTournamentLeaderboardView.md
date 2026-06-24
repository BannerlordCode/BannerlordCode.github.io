<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletMenuTournamentLeaderboardView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletMenuTournamentLeaderboardView

**Namespace:** SandBox.GauntletUI.Menu
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMenuTournamentLeaderboardView : MenuView`
**Base:** `MenuView`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Menu/GauntletMenuTournamentLeaderboardView.cs`

## Overview

`GauntletMenuTournamentLeaderboardView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletMenuTournamentLeaderboardView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var view = new GauntletMenuTournamentLeaderboardView();
```

## See Also

- [Complete Class Catalog](../catalog)