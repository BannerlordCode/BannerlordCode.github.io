---
title: "SpawnPointDebugView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SpawnPointDebugView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SpawnPointDebugView

**Namespace:** SandBox.View.Missions.SandBox
**Module:** SandBox.View
**Type:** `public class SpawnPointDebugView : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Missions.SandBox/SpawnPointDebugView.cs`

## Overview

`SpawnPointDebugView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `SpawnPointDebugView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**Purpose:** Gets the current value of `tick requirement`.

## Usage Example

```csharp
var view = new SpawnPointDebugView();
```

## See Also

- [Complete Class Catalog](../catalog)