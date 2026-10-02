---
title: "GraphicsForm"
description: "GraphicsForm — class in TaleWorlds.TwoDimension.Standalone. 32 public members (0 static)."
---

<!-- v147-skeleton -->
# GraphicsForm

**Namespace:** `TaleWorlds.TwoDimension.Standalone`  
**Module:** `TaleWorlds.TwoDimension.Standalone`  
**Type:** `public class GraphicsForm : IMessageCommunicator`  
**Base:** `IMessageCommunicator`  
**Source:** `TaleWorlds.TwoDimension.Standalone/GraphicsForm.cs`

## Overview

`GraphicsForm` is a named type in the TaleWorlds.TwoDimension.Standalone namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends IMessageCommunicator, so the members it does not redeclare are inherited from there. 4 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (3): `GraphicsForm`, `GraphicsForm`, `GraphicsForm`.
- **Instance members** (27): `GraphicsContext`, `CompareRecrangles`, `DecideWindowPosition`, `Destroy`, `MinimizeWindow`, `InitializeGraphicsContext`, ….
- **Data and constants** (2): `WM_NCLBUTTONDOWN`, `HT_CAPTION`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `BeginFrame` | method | Instance entry point. Takes no arguments. |
| `CompareRecrangles` | method | Instance entry point. Takes 2 arguments: `DXGI.RECT Rect1`, `DXGI.RECT Rect2`. Returns `bool`. |
| `DecideWindowPosition` | method | Instance entry point. Takes no arguments. Returns `DXGI.RECT`. |
| `Destroy` | method | Instance entry point. Takes no arguments. |
| `FillInputDataFromCurrent` | method | Instance entry point. Takes 1 argument: `InputData inputData`. |
| `GetKey` | method | Instance entry point. Takes 1 argument: `InputKey keyCode`. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `GetKeyDown` | method | Instance entry point. Takes 1 argument: `InputKey keyCode`. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `GetKeyUp` | method | Instance entry point. Takes 1 argument: `InputKey keyCode`. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `GetMouseDeltaZ` | method | Instance entry point. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GraphicsContext` | property | Instance entry point `GraphicsContext` property. Read it for current state; a declared setter writes that state in place. |
| `Height` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `InitializeGraphicsContext` | method | Instance entry point. Takes 1 argument: `ResourceDepot resourceDepot`. |
| `IsMinimized` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `LeftMouse` | method | Instance entry point. Takes no arguments. Returns `bool`. |
| `LeftMouseDown` | method | Instance entry point. Takes no arguments. Returns `bool`. |
| `LeftMouseUp` | method | Instance entry point. Takes no arguments. Returns `bool`. |
| `MessageLoop` | method | Instance entry point. Takes no arguments. |
| `MinimizeWindow` | method | Instance entry point. Takes no arguments. |
| `MouseMove` | method | Instance entry point. Takes no arguments. Returns `bool`. |
| `MousePosition` | method | Instance entry point. Takes no arguments. Returns `Vector2`. |
| `PostRender` | method | Instance entry point. Takes no arguments. |
| `RightMouse` | method | Instance entry point. Takes no arguments. Returns `bool`. |
| `RightMouseDown` | method | Instance entry point. Takes no arguments. Returns `bool`. |
| `RightMouseUp` | method | Instance entry point. Takes no arguments. Returns `bool`. |

- Constructed as `public GraphicsForm(int width, int height, ResourceDepot resourceDepot, bool borderlessWindow = false, bool enableWindowBlur = false, bool layeredWindow = false, string name = null)`.
- Constructed as `public GraphicsForm(int x, int y, int width, int height, ResourceDepot resourceDepot, bool borderlessWindow = false, bool enableWindowBlur = false, bool layeredWindow = false, string name = null)`.
- Constructed as `public GraphicsForm(WindowsForm windowsForm)`.

8 further public members follow the same patterns.
## Usage Example

```csharp
var graphicsForm = new GraphicsForm(width, height, resourceDepot, borderlessWindow, enableWindowBlur, layeredWindow, name);
graphicsForm.CompareRecrangles(Rect1, Rect2);
// Read current state through graphicsForm.GraphicsContext.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.TwoDimension.Standalone/GraphicsForm.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [IMessageCommunicator](../IMessageCommunicator/) — `TaleWorlds.TwoDimension.Standalone`.
- [GraphicsContext](../GraphicsContext/) — `TaleWorlds.TwoDimension.Standalone`.
- [DXGI](../DXGI/) — `TaleWorlds.TwoDimension.Standalone.Native.Windows`.
- [InputData](../InputData/) — `TaleWorlds.TwoDimension.Standalone`.
- [LayeredWindowController](../LayeredWindowController/) — `TaleWorlds.TwoDimension.Standalone`.
- [User32](../User32/) — `TaleWorlds.TwoDimension.Standalone.Native.Windows`.

Section: [api/gui/](../) — the other types in this bucket.
