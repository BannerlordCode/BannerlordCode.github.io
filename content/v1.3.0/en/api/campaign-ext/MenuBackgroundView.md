---
title: "MenuBackgroundView"
description: "Auto-generated class reference for MenuBackgroundView."
---
# MenuBackgroundView

**Namespace:** SandBox.View.Menu
**Module:** SandBox.View
**Type:** `public class MenuBackgroundView : MenuView`
**Base:** `MenuView`
**File:** `SandBox.View/Menu/MenuBackgroundView.cs`

## Overview

`MenuBackgroundView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MenuBackgroundView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MenuBackgroundView view = ...;
```

## See Also

- [Area Index](../)