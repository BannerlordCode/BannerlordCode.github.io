<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletMenuRecruitVolunteersView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletMenuRecruitVolunteersView

**Namespace:** SandBox.GauntletUI.Menu
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMenuRecruitVolunteersView : MenuView`
**Base:** `MenuView`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Menu/GauntletMenuRecruitVolunteersView.cs`

## Overview

`GauntletMenuRecruitVolunteersView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletMenuRecruitVolunteersView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var view = new GauntletMenuRecruitVolunteersView();
```

## See Also

- [Complete Class Catalog](../catalog)