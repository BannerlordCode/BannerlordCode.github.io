<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GraphicsForm`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GraphicsForm

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `GraphicsForm` is a class in the `TaleWorlds.TwoDimension.Standalone` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `GraphicsContext` | `public GraphicsContext GraphicsContext { get; }` |
| `Width` | `public int Width { get; }` |
| `Height` | `public int Height { get; }` |


## Key Methods

### CompareRecrangles

```csharp
public bool CompareRecrangles(DXGI.RECT Rect1, DXGI.RECT Rect2)
```

### DecideWindowPosition

```csharp
public DXGI.RECT DecideWindowPosition()
```

### Destroy

```csharp
public void Destroy()
```

### MinimizeWindow

```csharp
public void MinimizeWindow()
```

### InitializeGraphicsContext

```csharp
public void InitializeGraphicsContext(ResourceDepot resourceDepot)
```

### BeginFrame

```csharp
public void BeginFrame()
```

### Update

```csharp
public void Update()
```

### MessageLoop

```csharp
public void MessageLoop()
```

### UpdateInput

```csharp
public void UpdateInput(bool mouseOverDragArea = false)
```

### PostRender

```csharp
public void PostRender()
```

### GetKeyDown

```csharp
public bool GetKeyDown(InputKey keyCode)
```

### GetKey

```csharp
public bool GetKey(InputKey keyCode)
```

### GetKeyUp

```csharp
public bool GetKeyUp(InputKey keyCode)
```

### GetMouseDeltaZ

```csharp
public float GetMouseDeltaZ()
```

### LeftMouse

```csharp
public bool LeftMouse()
```

### LeftMouseDown

```csharp
public bool LeftMouseDown()
```

### LeftMouseUp

```csharp
public bool LeftMouseUp()
```

### RightMouse

```csharp
public bool RightMouse()
```

### RightMouseDown

```csharp
public bool RightMouseDown()
```

### RightMouseUp

```csharp
public bool RightMouseUp()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)