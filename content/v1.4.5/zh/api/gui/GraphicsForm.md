---
title: "GraphicsForm"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GraphicsForm`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GraphicsForm

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public class GraphicsForm : IMessageCommunicator`
**Base:** `IMessageCommunicator`
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension.Standalone/TaleWorlds.TwoDimension.Standalone/GraphicsForm.cs`

## 概述

`GraphicsForm` 位于 `TaleWorlds.TwoDimension.Standalone`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension.Standalone` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `GraphicsContext` | `public GraphicsContext GraphicsContext { get; }` |

## 主要方法

### CompareRecrangles
`public bool CompareRecrangles(DXGI.RECT Rect1, DXGI.RECT Rect2)`

**用途 / Purpose:** 处理 `compare recrangles` 相关逻辑。

### DecideWindowPosition
`public DXGI.RECT DecideWindowPosition()`

**用途 / Purpose:** 处理 `decide window position` 相关逻辑。

### Destroy
`public void Destroy()`

**用途 / Purpose:** 处理 `destroy` 相关逻辑。

### MinimizeWindow
`public void MinimizeWindow()`

**用途 / Purpose:** 处理 `minimize window` 相关逻辑。

### InitializeGraphicsContext
`public void InitializeGraphicsContext(ResourceDepot resourceDepot)`

**用途 / Purpose:** 初始化 `graphics context` 的状态、资源或绑定。

### BeginFrame
`public void BeginFrame()`

**用途 / Purpose:** 处理 `begin frame` 相关逻辑。

### Update
`public void Update()`

**用途 / Purpose:** 更新 `update` 的状态或数据。

### MessageLoop
`public void MessageLoop()`

**用途 / Purpose:** 处理 `message loop` 相关逻辑。

### UpdateInput
`public void UpdateInput(bool mouseOverDragArea = false)`

**用途 / Purpose:** 更新 `input` 的状态或数据。

### PostRender
`public void PostRender()`

**用途 / Purpose:** 处理 `post render` 相关逻辑。

### GetKeyDown
`public bool GetKeyDown(InputKey keyCode)`

**用途 / Purpose:** 获取 `key down` 的当前值。

### GetKey
`public bool GetKey(InputKey keyCode)`

**用途 / Purpose:** 获取 `key` 的当前值。

### GetKeyUp
`public bool GetKeyUp(InputKey keyCode)`

**用途 / Purpose:** 获取 `key up` 的当前值。

### GetMouseDeltaZ
`public float GetMouseDeltaZ()`

**用途 / Purpose:** 获取 `mouse delta z` 的当前值。

### LeftMouse
`public bool LeftMouse()`

**用途 / Purpose:** 处理 `left mouse` 相关逻辑。

### LeftMouseDown
`public bool LeftMouseDown()`

**用途 / Purpose:** 处理 `left mouse down` 相关逻辑。

### LeftMouseUp
`public bool LeftMouseUp()`

**用途 / Purpose:** 处理 `left mouse up` 相关逻辑。

### RightMouse
`public bool RightMouse()`

**用途 / Purpose:** 处理 `right mouse` 相关逻辑。

### RightMouseDown
`public bool RightMouseDown()`

**用途 / Purpose:** 处理 `right mouse down` 相关逻辑。

### RightMouseUp
`public bool RightMouseUp()`

**用途 / Purpose:** 处理 `right mouse up` 相关逻辑。

### MousePosition
`public Vector2 MousePosition()`

**用途 / Purpose:** 处理 `mouse position` 相关逻辑。

### MouseMove
`public bool MouseMove()`

**用途 / Purpose:** 处理 `mouse move` 相关逻辑。

### FillInputDataFromCurrent
`public void FillInputDataFromCurrent(InputData inputData)`

**用途 / Purpose:** 处理 `fill input data from current` 相关逻辑。

## 使用示例

```csharp
var value = new GraphicsForm();
value.CompareRecrangles(rect1, rect2);
```

## 参见

- [完整类目录](../catalog)