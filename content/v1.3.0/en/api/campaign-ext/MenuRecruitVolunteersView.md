---
title: "MenuRecruitVolunteersView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MenuRecruitVolunteersView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MenuRecruitVolunteersView

**Namespace:** SandBox.View.Menu
**Module:** SandBox.View
**Type:** `public class MenuRecruitVolunteersView : MenuView`
**Base:** `MenuView`
**File:** `SandBox.View/Menu/MenuRecruitVolunteersView.cs`

## Overview

`MenuRecruitVolunteersView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MenuRecruitVolunteersView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var view = new MenuRecruitVolunteersView();
```

## See Also

- [Complete Class Catalog](../catalog)