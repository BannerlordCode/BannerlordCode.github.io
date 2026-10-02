---
title: "InputKeyItemVM"
description: "InputKeyItemVM：SandBox.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 13 个（方法 8、属性 5、字段 0）。源文件 SandBox.ViewModelCollection/Input/InputKeyItemVM.cs。"
---
# InputKeyItemVM

**Namespace:** `SandBox.ViewModelCollection.Input`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class InputKeyItemVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Input/InputKeyItemVM.cs`

## 概述

InputKeyItemVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Input/InputKeyItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 InputKeyItemVM → ViewModel。public/protected 成员共 13 个：8 方法、5 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：InputKeyItemVM 是 SandBox.ViewModelCollection 的顶层类型，命名空间与模块目录不同（SandBox.ViewModelCollection.Input），继承链 InputKeyItemVM → ViewModel。成员构成以方法为主（方法 8/13，属性 5/13），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Input/InputKeyItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameKey` | `public GameKey GameKey` | 属性 |
| `HotKey` | `public HotKey HotKey` | 属性 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `SetForcedVisibility` | `public void SetForcedVisibility(bool? isVisible)` | 方法 |
| `CreateFromGameKey` | `public static InputKeyItemVM CreateFromGameKey(GameKey gameKey, bool isConsoleOnly)` | 方法 |
| `CreateFromHotKey` | `public static InputKeyItemVM CreateFromHotKey(HotKey hotKey, bool isConsoleOnly)` | 方法 |
| `CreateFromHotKeyWithForcedName` | `public static InputKeyItemVM CreateFromHotKeyWithForcedName(HotKey hotKey, TextObject forcedName, bool isConsoleOnly)` | 方法 |
| `CreateFromGameKeyWithForcedName` | `public static InputKeyItemVM CreateFromGameKeyWithForcedName(GameKey gameKey, TextObject forcedName, bool isConsoleOnly)` | 方法 |
| `CreateFromForcedID` | `public static InputKeyItemVM CreateFromForcedID(string forcedID, TextObject forcedName, bool isConsoleOnly)` | 方法 |
| `KeyID` | `public string KeyID` | 属性 |
| `KeyName` | `public string KeyName` | 属性 |
| `IsVisible` | `public bool IsVisible` | 属性 |

## 参见

- [↑ sandbox-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
