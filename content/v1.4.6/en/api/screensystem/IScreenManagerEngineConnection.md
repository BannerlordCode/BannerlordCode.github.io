---
title: "IScreenManagerEngineConnection"
description: "IScreenManagerEngineConnection: a public interface in TaleWorlds.ScreenSystem; 13 exposed members (9 methods, 4 properties, 0 fields). Source: TaleWorlds.ScreenSystem/IScreenManagerEngineConnection.cs."
---
# IScreenManagerEngineConnection

**Namespace:** `TaleWorlds.ScreenSystem`
**Module:** `TaleWorlds.ScreenSystem`
**Type:** `public interface IScreenManagerEngineConnection`
**File:** `TaleWorlds.ScreenSystem/IScreenManagerEngineConnection.cs`

## Overview

IScreenManagerEngineConnection lives in the TaleWorlds.ScreenSystem module, source file TaleWorlds.ScreenSystem/IScreenManagerEngineConnection.cs. It is a public interface; the inheritance chain is IScreenManagerEngineConnection. It exposes 13 public/protected members: 9 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IScreenManagerEngineConnection is a top-level type in TaleWorlds.ScreenSystem, namespace matching the module directory; inheritance chain IScreenManagerEngineConnection. The surface is method-led (methods 9/13, properties 4/13), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.ScreenSystem/IScreenManagerEngineConnection.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ screensystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CursorType](../CursorType)
- [same namespace GlobalLayer](../GlobalLayer)
- [same namespace InputRestrictions](../InputRestrictions)
- [same namespace ScreenComponent](../ScreenComponent)
