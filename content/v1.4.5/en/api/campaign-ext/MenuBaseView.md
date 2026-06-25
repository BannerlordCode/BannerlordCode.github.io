---
title: "MenuBaseView"
description: "Auto-generated class reference for MenuBaseView."
---
# MenuBaseView

**Namespace:** SandBox.View.Menu
**Module:** SandBox.View
**Type:** `public class MenuBaseView : MenuView`
**Base:** `MenuView`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Menu/MenuBaseView.cs`

## Overview

`MenuBaseView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MenuBaseView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MenuBaseView view = ...;
```

## See Also

- [Area Index](../)