---
title: "GraphicsForm"
description: "GraphicsForm: a public class in TaleWorlds.TwoDimension.Standalone, inheriting IMessageCommunicator; 32 exposed members (23 methods, 4 properties, 2 fields). Canonical bucket gui. Source: TaleWorlds.TwoDimension.Standalone/GraphicsForm.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GraphicsForm

**Namespace:** `TaleWorlds.TwoDimension.Standalone`
**Module:** `TaleWorlds.TwoDimension.Standalone`
**Type:** `public class GraphicsForm : IMessageCommunicator`
**File:** `TaleWorlds.TwoDimension.Standalone/GraphicsForm.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## Overview

GraphicsForm lives in the TaleWorlds.TwoDimension.Standalone module, source file TaleWorlds.TwoDimension.Standalone/GraphicsForm.cs. It is a public class, implementing/inheriting IMessageCommunicator; the inheritance chain is GraphicsForm → IMessageCommunicator. It exposes 32 public/protected members: 23 methods, 4 properties, 2 fields, 3 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GraphicsForm lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.TwoDimension`), namespace `TaleWorlds.TwoDimension.Standalone`, inheritance chain GraphicsForm → IMessageCommunicator. The surface is method-led (methods 23/32, properties 4/32), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.TwoDimension.Standalone/GraphicsForm.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GraphicsContext` | `public GraphicsContext GraphicsContext` | property |
| `GraphicsForm` | `public GraphicsForm(int width, int height, ResourceDepot resourceDepot, bool borderlessWindow = false, bool enableWindowBlur = false, bool layeredWindow = false, string name = null)` | constructor |
| `GraphicsForm` | `public GraphicsForm(int x, int y, int width, int height, ResourceDepot resourceDepot, bool borderlessWindow = false, bool enableWindowBlur = false, bool layeredWindow = false, string name = null)` | constructor |
| `GraphicsForm` | `public GraphicsForm(WindowsForm windowsForm)` | constructor |
| `CompareRecrangles` | `public bool CompareRecrangles(DXGI.RECT Rect1, DXGI.RECT Rect2)` | method |
| `DecideWindowPosition` | `public DXGI.RECT DecideWindowPosition()` | method |
| `Destroy` | `public void Destroy()` | method |
| `MinimizeWindow` | `public void MinimizeWindow()` | method |
| `InitializeGraphicsContext` | `public void InitializeGraphicsContext(ResourceDepot resourceDepot)` | method |
| `BeginFrame` | `public void BeginFrame()` | method |
| `Update` | `public void Update()` | method |
| `MessageLoop` | `public void MessageLoop()` | method |
| `UpdateInput` | `public void UpdateInput(bool mouseOverDragArea = false)` | method |
| `PostRender` | `public void PostRender()` | method |
| `GetKeyDown` | `public bool GetKeyDown(InputKey keyCode)` | method |
| `GetKey` | `public bool GetKey(InputKey keyCode)` | method |
| `GetKeyUp` | `public bool GetKeyUp(InputKey keyCode)` | method |
| `GetMouseDeltaZ` | `public float GetMouseDeltaZ()` | method |
| `LeftMouse` | `public bool LeftMouse()` | method |
| `LeftMouseDown` | `public bool LeftMouseDown()` | method |
| `LeftMouseUp` | `public bool LeftMouseUp()` | method |
| `RightMouse` | `public bool RightMouse()` | method |
| `RightMouseDown` | `public bool RightMouseDown()` | method |
| `RightMouseUp` | `public bool RightMouseUp()` | method |
| `MousePosition` | `public Vector2 MousePosition()` | method |
| `MouseMove` | `public bool MouseMove()` | method |
| `FillInputDataFromCurrent` | `public void FillInputDataFromCurrent(InputData inputData)` | method |
| `Width` | `public int Width` | property |
| `Height` | `public int Height` | property |
| `IsMinimized` | `public bool IsMinimized` | property |
| `WM_NCLBUTTONDOWN` | `public const int WM_NCLBUTTONDOWN` | field |
| `HT_CAPTION` | `public const int HT_CAPTION` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IMessageCommunicator](../IMessageCommunicator/)
- [same namespace FrameworkDomain](../FrameworkDomain/)
- [same namespace GraphicsContext](../GraphicsContext/)
- [same namespace IMessageCommunicator](../IMessageCommunicator/)
- [same namespace InputData](../InputData/)
