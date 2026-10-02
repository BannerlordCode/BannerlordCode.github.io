---
title: "IScreenManagerEngineConnection"
description: "IScreenManagerEngineConnection: a public interface in TaleWorlds.ScreenSystem; 13 exposed members (9 methods, 4 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.ScreenSystem/IScreenManagerEngineConnection.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IScreenManagerEngineConnection

**Namespace:** `TaleWorlds.ScreenSystem`
**Module:** `TaleWorlds.ScreenSystem`
**Type:** `public interface IScreenManagerEngineConnection`
**File:** `TaleWorlds.ScreenSystem/IScreenManagerEngineConnection.cs`
**Bucket:** `gui` (rule:TaleWorlds.ScreenSystem)

## Overview

IScreenManagerEngineConnection lives in the TaleWorlds.ScreenSystem module, source file TaleWorlds.ScreenSystem/IScreenManagerEngineConnection.cs. It is a public interface; the inheritance chain is IScreenManagerEngineConnection. It exposes 13 public/protected members: 9 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IScreenManagerEngineConnection lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.ScreenSystem`), namespace `TaleWorlds.ScreenSystem`, inheritance chain IScreenManagerEngineConnection. The surface is method-led (methods 9/13, properties 4/13), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.ScreenSystem/IScreenManagerEngineConnection.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RealScreenResolutionWidth` | `float RealScreenResolutionWidth` | property |
| `RealScreenResolutionHeight` | `float RealScreenResolutionHeight` | property |
| `AspectRatio` | `float AspectRatio` | property |
| `DesktopResolution` | `Vec2 DesktopResolution` | property |
| `ActivateMouseCursor` | `void ActivateMouseCursor(CursorType mouseId);` | method |
| `SetMouseVisible` | `void SetMouseVisible(bool value);` | method |
| `GetMouseVisible` | `bool GetMouseVisible();` | method |
| `GetIsEnterButtonRDown` | `bool GetIsEnterButtonRDown();` | method |
| `BeginDebugPanel` | `void BeginDebugPanel(string panelTitle);` | method |
| `EndDebugPanel` | `void EndDebugPanel();` | method |
| `DrawDebugText` | `void DrawDebugText(string text);` | method |
| `DrawDebugTreeNode` | `bool DrawDebugTreeNode(string text);` | method |
| `PopDebugTreeNode` | `void PopDebugTreeNode();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CursorType](../CursorType/)
- [same namespace GlobalLayer](../GlobalLayer/)
- [same namespace InputRestrictions](../InputRestrictions/)
- [same namespace ScreenComponent](../ScreenComponent/)
