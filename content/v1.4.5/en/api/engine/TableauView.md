---
title: "TableauView"
description: "Auto-generated class reference for TableauView."
---
# TableauView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class TableauView : SceneView`
**Base:** `SceneView`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/TableauView.cs`

## Overview

`TableauView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `TableauView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CreateTableauView
`public static TableauView CreateTableauView(string viewName)`

**Purpose:** **Purpose:** Constructs a new tableau view entity and returns it to the caller.

```csharp
// Static call; no instance required
TableauView.CreateTableauView("example");
```

### SetSortingEnabled
`public void SetSortingEnabled(bool value)`

**Purpose:** **Purpose:** Assigns a new value to sorting enabled and updates the object's internal state.

```csharp
// Obtain an instance of TableauView from the subsystem API first
TableauView tableauView = ...;
tableauView.SetSortingEnabled(false);
```

### SetContinuousRendering
`public void SetContinuousRendering(bool value)`

**Purpose:** **Purpose:** Assigns a new value to continuous rendering and updates the object's internal state.

```csharp
// Obtain an instance of TableauView from the subsystem API first
TableauView tableauView = ...;
tableauView.SetContinuousRendering(false);
```

### SetDoNotRenderThisFrame
`public void SetDoNotRenderThisFrame(bool value)`

**Purpose:** **Purpose:** Assigns a new value to do not render this frame and updates the object's internal state.

```csharp
// Obtain an instance of TableauView from the subsystem API first
TableauView tableauView = ...;
tableauView.SetDoNotRenderThisFrame(false);
```

### SetDeleteAfterRendering
`public void SetDeleteAfterRendering(bool value)`

**Purpose:** **Purpose:** Assigns a new value to delete after rendering and updates the object's internal state.

```csharp
// Obtain an instance of TableauView from the subsystem API first
TableauView tableauView = ...;
tableauView.SetDeleteAfterRendering(false);
```

### AddTableau
`public static Texture AddTableau(string name, RenderTargetComponent.TextureUpdateEventHandler eventHandler, object objectRef, int tableauSizeX, int tableauSizeY)`

**Purpose:** **Purpose:** Adds tableau to the current collection or state.

```csharp
// Static call; no instance required
TableauView.AddTableau("example", eventHandler, objectRef, 0, 0);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
TableauView view = ...;
```

## See Also

- [Area Index](../)