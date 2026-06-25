---
title: "GauntletMapEncyclopediaView"
description: "Auto-generated class reference for GauntletMapEncyclopediaView."
---
# GauntletMapEncyclopediaView

**Namespace:** SandBox.GauntletUI.Encyclopedia
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapEncyclopediaView : MapEncyclopediaView`
**Base:** `MapEncyclopediaView`
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Encyclopedia/GauntletMapEncyclopediaView.cs`

## Overview

`GauntletMapEncyclopediaView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletMapEncyclopediaView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CloseEncyclopedia
`public override void CloseEncyclopedia()`

**Purpose:** **Purpose:** Closes the resource or UI associated with encyclopedia.

```csharp
// Obtain an instance of GauntletMapEncyclopediaView from the subsystem API first
GauntletMapEncyclopediaView gauntletMapEncyclopediaView = ...;
gauntletMapEncyclopediaView.CloseEncyclopedia();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
GauntletMapEncyclopediaView view = ...;
```

## See Also

- [Area Index](../)