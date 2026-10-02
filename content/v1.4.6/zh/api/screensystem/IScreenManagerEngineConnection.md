---
title: "IScreenManagerEngineConnection"
description: "IScreenManagerEngineConnection：TaleWorlds.ScreenSystem 的 public 接口；公开成员 13 个（方法 9、属性 4、字段 0）。源文件 TaleWorlds.ScreenSystem/IScreenManagerEngineConnection.cs。"
---
# IScreenManagerEngineConnection

**Namespace:** `TaleWorlds.ScreenSystem`
**Module:** `TaleWorlds.ScreenSystem`
**Type:** `public interface IScreenManagerEngineConnection`
**File:** `TaleWorlds.ScreenSystem/IScreenManagerEngineConnection.cs`

## 概述

IScreenManagerEngineConnection 位于 TaleWorlds.ScreenSystem 模块，源文件 TaleWorlds.ScreenSystem/IScreenManagerEngineConnection.cs。它是一个 public 接口，继承链为 IScreenManagerEngineConnection。public/protected 成员共 13 个：9 方法、4 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IScreenManagerEngineConnection 是 TaleWorlds.ScreenSystem 的顶层类型，命名空间与模块目录一致，继承链 IScreenManagerEngineConnection。成员构成以方法为主（方法 9/13，属性 4/13），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.ScreenSystem/IScreenManagerEngineConnection.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RealScreenResolutionWidth` | `float RealScreenResolutionWidth` | 属性 |
| `RealScreenResolutionHeight` | `float RealScreenResolutionHeight` | 属性 |
| `AspectRatio` | `float AspectRatio` | 属性 |
| `DesktopResolution` | `Vec2 DesktopResolution` | 属性 |
| `ActivateMouseCursor` | `void ActivateMouseCursor(CursorType mouseId);` | 方法 |
| `SetMouseVisible` | `void SetMouseVisible(bool value);` | 方法 |
| `GetMouseVisible` | `bool GetMouseVisible();` | 方法 |
| `GetIsEnterButtonRDown` | `bool GetIsEnterButtonRDown();` | 方法 |
| `BeginDebugPanel` | `void BeginDebugPanel(string panelTitle);` | 方法 |
| `EndDebugPanel` | `void EndDebugPanel();` | 方法 |
| `DrawDebugText` | `void DrawDebugText(string text);` | 方法 |
| `DrawDebugTreeNode` | `bool DrawDebugTreeNode(string text);` | 方法 |
| `PopDebugTreeNode` | `void PopDebugTreeNode();` | 方法 |

## 参见

- [↑ screensystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CursorType](../CursorType)
- [同命名空间 GlobalLayer](../GlobalLayer)
- [同命名空间 InputRestrictions](../InputRestrictions)
- [同命名空间 ScreenComponent](../ScreenComponent)
