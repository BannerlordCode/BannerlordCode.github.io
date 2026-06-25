---
title: "GraphicsForm"
description: "GraphicsForm 的自动生成类参考。"
---
# GraphicsForm

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public class GraphicsForm : IMessageCommunicator`
**Base:** `IMessageCommunicator`
**File:** `TaleWorlds.TwoDimension.Standalone/GraphicsForm.cs`

## 概述

`GraphicsForm` 位于 `TaleWorlds.TwoDimension.Standalone`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension.Standalone` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `GraphicsContext` | `public GraphicsContext GraphicsContext { get; }` |
| `Width` | `public int Width { get; }` |
| `Height` | `public int Height { get; }` |

## 主要方法

### CompareRecrangles
`public bool CompareRecrangles(DXGI.RECT Rect1, DXGI.RECT Rect2)`

**用途 / Purpose:** 比较两个「recrangles」对象并返回大小/顺序结果。

```csharp
// 先通过子系统 API 拿到 GraphicsForm 实例
GraphicsForm graphicsForm = ...;
var result = graphicsForm.CompareRecrangles(rect1, rect2);
```

### DecideWindowPosition
`public DXGI.RECT DecideWindowPosition()`

**用途 / Purpose:** 处理与 「decide window position」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 GraphicsForm 实例
GraphicsForm graphicsForm = ...;
var result = graphicsForm.DecideWindowPosition();
```

### Destroy
`public void Destroy()`

**用途 / Purpose:** 处理与 「destroy」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 GraphicsForm 实例
GraphicsForm graphicsForm = ...;
graphicsForm.Destroy();
```

### MinimizeWindow
`public void MinimizeWindow()`

**用途 / Purpose:** 处理与 「minimize window」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 GraphicsForm 实例
GraphicsForm graphicsForm = ...;
graphicsForm.MinimizeWindow();
```

### InitializeGraphicsContext
`public void InitializeGraphicsContext(ResourceDepot resourceDepot)`

**用途 / Purpose:** 为 「graphics context」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 GraphicsForm 实例
GraphicsForm graphicsForm = ...;
graphicsForm.InitializeGraphicsContext(resourceDepot);
```

### BeginFrame
`public void BeginFrame()`

**用途 / Purpose:** 处理与 「begin frame」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 GraphicsForm 实例
GraphicsForm graphicsForm = ...;
graphicsForm.BeginFrame();
```

### Update
`public void Update()`

**用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 先通过子系统 API 拿到 GraphicsForm 实例
GraphicsForm graphicsForm = ...;
graphicsForm.Update();
```

### MessageLoop
`public void MessageLoop()`

**用途 / Purpose:** 处理与 「message loop」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 GraphicsForm 实例
GraphicsForm graphicsForm = ...;
graphicsForm.MessageLoop();
```

### UpdateInput
`public void UpdateInput(bool mouseOverDragArea = false)`

**用途 / Purpose:** 重新计算并更新 「input」 的最新表示。

```csharp
// 先通过子系统 API 拿到 GraphicsForm 实例
GraphicsForm graphicsForm = ...;
graphicsForm.UpdateInput(false);
```

### PostRender
`public void PostRender()`

**用途 / Purpose:** 处理与 「post render」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 GraphicsForm 实例
GraphicsForm graphicsForm = ...;
graphicsForm.PostRender();
```

### GetKeyDown
`public bool GetKeyDown(InputKey keyCode)`

**用途 / Purpose:** 读取并返回当前对象中 「key down」 的结果。

```csharp
// 先通过子系统 API 拿到 GraphicsForm 实例
GraphicsForm graphicsForm = ...;
var result = graphicsForm.GetKeyDown(keyCode);
```

### GetKey
`public bool GetKey(InputKey keyCode)`

**用途 / Purpose:** 读取并返回当前对象中 「key」 的结果。

```csharp
// 先通过子系统 API 拿到 GraphicsForm 实例
GraphicsForm graphicsForm = ...;
var result = graphicsForm.GetKey(keyCode);
```

### GetKeyUp
`public bool GetKeyUp(InputKey keyCode)`

**用途 / Purpose:** 读取并返回当前对象中 「key up」 的结果。

```csharp
// 先通过子系统 API 拿到 GraphicsForm 实例
GraphicsForm graphicsForm = ...;
var result = graphicsForm.GetKeyUp(keyCode);
```

### GetMouseDeltaZ
`public float GetMouseDeltaZ()`

**用途 / Purpose:** 读取并返回当前对象中 「mouse delta z」 的结果。

```csharp
// 先通过子系统 API 拿到 GraphicsForm 实例
GraphicsForm graphicsForm = ...;
var result = graphicsForm.GetMouseDeltaZ();
```

### LeftMouse
`public bool LeftMouse()`

**用途 / Purpose:** 处理与 「left mouse」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 GraphicsForm 实例
GraphicsForm graphicsForm = ...;
var result = graphicsForm.LeftMouse();
```

### LeftMouseDown
`public bool LeftMouseDown()`

**用途 / Purpose:** 处理与 「left mouse down」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 GraphicsForm 实例
GraphicsForm graphicsForm = ...;
var result = graphicsForm.LeftMouseDown();
```

### LeftMouseUp
`public bool LeftMouseUp()`

**用途 / Purpose:** 处理与 「left mouse up」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 GraphicsForm 实例
GraphicsForm graphicsForm = ...;
var result = graphicsForm.LeftMouseUp();
```

### RightMouse
`public bool RightMouse()`

**用途 / Purpose:** 处理与 「right mouse」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 GraphicsForm 实例
GraphicsForm graphicsForm = ...;
var result = graphicsForm.RightMouse();
```

### RightMouseDown
`public bool RightMouseDown()`

**用途 / Purpose:** 处理与 「right mouse down」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 GraphicsForm 实例
GraphicsForm graphicsForm = ...;
var result = graphicsForm.RightMouseDown();
```

### RightMouseUp
`public bool RightMouseUp()`

**用途 / Purpose:** 处理与 「right mouse up」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 GraphicsForm 实例
GraphicsForm graphicsForm = ...;
var result = graphicsForm.RightMouseUp();
```

### MousePosition
`public Vector2 MousePosition()`

**用途 / Purpose:** 处理与 「mouse position」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 GraphicsForm 实例
GraphicsForm graphicsForm = ...;
var result = graphicsForm.MousePosition();
```

### MouseMove
`public bool MouseMove()`

**用途 / Purpose:** 处理与 「mouse move」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 GraphicsForm 实例
GraphicsForm graphicsForm = ...;
var result = graphicsForm.MouseMove();
```

### FillInputDataFromCurrent
`public void FillInputDataFromCurrent(InputData inputData)`

**用途 / Purpose:** 处理与 「fill input data from current」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 GraphicsForm 实例
GraphicsForm graphicsForm = ...;
graphicsForm.FillInputDataFromCurrent(inputData);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GraphicsForm graphicsForm = ...;
graphicsForm.CompareRecrangles(rect1, rect2);
```

## 参见

- [本区域目录](../)