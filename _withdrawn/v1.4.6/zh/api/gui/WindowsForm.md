---
title: "WindowsForm"
description: "WindowsForm：TaleWorlds.TwoDimension.Standalone 的 public 类；公开成员 13 个（方法 5、属性 5、字段 0）。canonical 桶 gui。源文件 TaleWorlds.TwoDimension.Standalone/WindowsForm.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# WindowsForm

**Namespace:** `TaleWorlds.TwoDimension.Standalone`
**Module:** `TaleWorlds.TwoDimension.Standalone`
**Type:** `public class WindowsForm`
**File:** `TaleWorlds.TwoDimension.Standalone/WindowsForm.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## 概述

WindowsForm 位于 TaleWorlds.TwoDimension.Standalone 模块，源文件 TaleWorlds.TwoDimension.Standalone/WindowsForm.cs。它是一个 public 类，继承链为 WindowsForm。public/protected 成员共 13 个：5 方法、5 属性、3 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：WindowsForm 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.TwoDimension`），命名空间 `TaleWorlds.TwoDimension.Standalone`，继承链 WindowsForm。成员构成以方法为主（方法 5/13，属性 5/13），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.TwoDimension.Standalone/WindowsForm.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Width` | `public int Width` | 属性 |
| `Height` | `public int Height` | 属性 |
| `Text` | `public string Text` | 属性 |
| `Handle` | `public IntPtr Handle` | 属性 |
| `IsMinimized` | `public bool IsMinimized` | 属性 |
| `WindowsForm` | `public WindowsForm(int x, int y, int width, int height, ResourceDepot resourceDepot, bool borderlessWindow = false, bool enableWindowBlur = false, string name = null) : this(x, y, width, height, resourceDepot, IntPtr.Zero, borderlessWindow, enableWindowBlur, name)` | 构造函数 |
| `WindowsForm` | `public WindowsForm(int x, int y, int width, int height, ResourceDepot resourceDepot, IntPtr parent, bool borderlessWindow = false, bool enableWindowBlur = false, string name = null)` | 构造函数 |
| `WindowsForm` | `public WindowsForm(int width, int height, ResourceDepot resourceDepot) : this(100, 100, width, height, resourceDepot, false, false, null)` | 构造函数 |
| `SetParent` | `public void SetParent(IntPtr parentHandle)` | 方法 |
| `Show` | `public void Show()` | 方法 |
| `Hide` | `public void Hide()` | 方法 |
| `Destroy` | `public void Destroy()` | 方法 |
| `AddMessageHandler` | `public void AddMessageHandler(WindowsFormMessageHandler messageHandler)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 FrameworkDomain](../FrameworkDomain/)
- [同命名空间 GraphicsContext](../GraphicsContext/)
- [同命名空间 GraphicsForm](../GraphicsForm/)
- [同命名空间 IMessageCommunicator](../IMessageCommunicator/)
