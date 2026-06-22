<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GraphicsForm`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GraphicsForm

**命名空间:** TaleWorlds.TwoDimension.Standalone
**模块:** TaleWorlds.TwoDimension
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`GraphicsForm` 是 `TaleWorlds.TwoDimension.Standalone` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `GraphicsContext` | `public GraphicsContext GraphicsContext { get; }` |
| `Width` | `public int Width { get; }` |
| `Height` | `public int Height { get; }` |


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)