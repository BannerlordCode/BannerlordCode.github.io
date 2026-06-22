<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TableauView`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TableauView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class TableauView : SceneView`
**Base:** `SceneView`
**File:** `TaleWorlds.Engine/TableauView.cs`

## Overview

`TableauView` is an engine view/surface (render, texture, scene preview, etc.). Accessed via the engine view system.

## Key Methods

### CreateTableauView
```csharp
public static TableauView CreateTableauView(string viewName)
```

### SetSortingEnabled
```csharp
public void SetSortingEnabled(bool value)
```

### SetContinuousRendering
```csharp
public void SetContinuousRendering(bool value)
```

### SetDoNotRenderThisFrame
```csharp
public void SetDoNotRenderThisFrame(bool value)
```

### SetDeleteAfterRendering
```csharp
public void SetDeleteAfterRendering(bool value)
```

### AddTableau
```csharp
public static Texture AddTableau(string name, RenderTargetComponent.TextureUpdateEventHandler eventHandler, object objectRef, int tableauSizeX, int tableauSizeY)
```

## Usage Example

```csharp
// Typical usage of TableauView (View)
TableauView /* via engine view system */;
```

## See Also

- [Complete Class Catalog](../catalog)