---
title: "GraphicsForm"
description: "GraphicsForm：TaleWorlds.TwoDimension.Standalone 的 public 类，继承 IMessageCommunicator；公开成员 32 个（方法 23、属性 4、字段 2）。canonical 桶 gui。源文件 TaleWorlds.TwoDimension.Standalone/GraphicsForm.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GraphicsForm

**Namespace:** `TaleWorlds.TwoDimension.Standalone`
**Module:** `TaleWorlds.TwoDimension.Standalone`
**Type:** `public class GraphicsForm : IMessageCommunicator`
**File:** `TaleWorlds.TwoDimension.Standalone/GraphicsForm.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## 概述

GraphicsForm 位于 TaleWorlds.TwoDimension.Standalone 模块，源文件 TaleWorlds.TwoDimension.Standalone/GraphicsForm.cs。它是一个 public 类，实现/继承 IMessageCommunicator，继承链为 GraphicsForm → IMessageCommunicator。public/protected 成员共 32 个：23 方法、4 属性、2 字段、3 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GraphicsForm 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.TwoDimension`），命名空间 `TaleWorlds.TwoDimension.Standalone`，继承链 GraphicsForm → IMessageCommunicator。成员构成以方法为主（方法 23/32，属性 4/32），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.TwoDimension.Standalone/GraphicsForm.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GraphicsContext` | `public GraphicsContext GraphicsContext` | 属性 |
| `GraphicsForm` | `public GraphicsForm(int width, int height, ResourceDepot resourceDepot, bool borderlessWindow = false, bool enableWindowBlur = false, bool layeredWindow = false, string name = null)` | 构造函数 |
| `GraphicsForm` | `public GraphicsForm(int x, int y, int width, int height, ResourceDepot resourceDepot, bool borderlessWindow = false, bool enableWindowBlur = false, bool layeredWindow = false, string name = null)` | 构造函数 |
| `GraphicsForm` | `public GraphicsForm(WindowsForm windowsForm)` | 构造函数 |
| `CompareRecrangles` | `public bool CompareRecrangles(DXGI.RECT Rect1, DXGI.RECT Rect2)` | 方法 |
| `DecideWindowPosition` | `public DXGI.RECT DecideWindowPosition()` | 方法 |
| `Destroy` | `public void Destroy()` | 方法 |
| `MinimizeWindow` | `public void MinimizeWindow()` | 方法 |
| `InitializeGraphicsContext` | `public void InitializeGraphicsContext(ResourceDepot resourceDepot)` | 方法 |
| `BeginFrame` | `public void BeginFrame()` | 方法 |
| `Update` | `public void Update()` | 方法 |
| `MessageLoop` | `public void MessageLoop()` | 方法 |
| `UpdateInput` | `public void UpdateInput(bool mouseOverDragArea = false)` | 方法 |
| `PostRender` | `public void PostRender()` | 方法 |
| `GetKeyDown` | `public bool GetKeyDown(InputKey keyCode)` | 方法 |
| `GetKey` | `public bool GetKey(InputKey keyCode)` | 方法 |
| `GetKeyUp` | `public bool GetKeyUp(InputKey keyCode)` | 方法 |
| `GetMouseDeltaZ` | `public float GetMouseDeltaZ()` | 方法 |
| `LeftMouse` | `public bool LeftMouse()` | 方法 |
| `LeftMouseDown` | `public bool LeftMouseDown()` | 方法 |
| `LeftMouseUp` | `public bool LeftMouseUp()` | 方法 |
| `RightMouse` | `public bool RightMouse()` | 方法 |
| `RightMouseDown` | `public bool RightMouseDown()` | 方法 |
| `RightMouseUp` | `public bool RightMouseUp()` | 方法 |
| `MousePosition` | `public Vector2 MousePosition()` | 方法 |
| `MouseMove` | `public bool MouseMove()` | 方法 |
| `FillInputDataFromCurrent` | `public void FillInputDataFromCurrent(InputData inputData)` | 方法 |
| `Width` | `public int Width` | 属性 |
| `Height` | `public int Height` | 属性 |
| `IsMinimized` | `public bool IsMinimized` | 属性 |
| `WM_NCLBUTTONDOWN` | `public const int WM_NCLBUTTONDOWN` | 字段 |
| `HT_CAPTION` | `public const int HT_CAPTION` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IMessageCommunicator](../IMessageCommunicator/)
- [同命名空间 FrameworkDomain](../FrameworkDomain/)
- [同命名空间 GraphicsContext](../GraphicsContext/)
- [同命名空间 IMessageCommunicator](../IMessageCommunicator/)
- [同命名空间 InputData](../InputData/)
