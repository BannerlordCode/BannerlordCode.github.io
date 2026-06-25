---
title: "TableauView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TableauView`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TableauView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class TableauView : SceneView`
**Base:** `SceneView`
**File:** `TaleWorlds.Engine/TableauView.cs`

## Overview

`TableauView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `TableauView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CreateTableauView
`public static TableauView CreateTableauView(string viewName)`

**Purpose:** Creates a new `tableau view` instance or object.

### SetSortingEnabled
`public void SetSortingEnabled(bool value)`

**Purpose:** Sets the value or state of `sorting enabled`.

### SetContinuousRendering
`public void SetContinuousRendering(bool value)`

**Purpose:** Sets the value or state of `continuous rendering`.

### SetDoNotRenderThisFrame
`public void SetDoNotRenderThisFrame(bool value)`

**Purpose:** Sets the value or state of `do not render this frame`.

### SetDeleteAfterRendering
`public void SetDeleteAfterRendering(bool value)`

**Purpose:** Sets the value or state of `delete after rendering`.

### AddTableau
`public static Texture AddTableau(string name, RenderTargetComponent.TextureUpdateEventHandler eventHandler, object objectRef, int tableauSizeX, int tableauSizeY)`

**Purpose:** Adds `tableau` to the current collection or state.

## Usage Example

```csharp
var view = new TableauView();
```

## See Also

- [Complete Class Catalog](../catalog)