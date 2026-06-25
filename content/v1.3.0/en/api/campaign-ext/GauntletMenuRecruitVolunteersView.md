---
title: "GauntletMenuRecruitVolunteersView"
description: "Auto-generated class reference for GauntletMenuRecruitVolunteersView."
---
# GauntletMenuRecruitVolunteersView

**Namespace:** SandBox.GauntletUI.Menu
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMenuRecruitVolunteersView : MenuView`
**Base:** `MenuView`
**File:** `SandBox.GauntletUI/Menu/GauntletMenuRecruitVolunteersView.cs`

## Overview

`GauntletMenuRecruitVolunteersView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletMenuRecruitVolunteersView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ShouldUpdateMenuAfterRemoved` | `public override bool ShouldUpdateMenuAfterRemoved { get; }` |

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
GauntletMenuRecruitVolunteersView view = ...;
```

## See Also

- [Area Index](../)