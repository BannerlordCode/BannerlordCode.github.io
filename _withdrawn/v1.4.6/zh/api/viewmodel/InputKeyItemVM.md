---
title: "InputKeyItemVM"
description: "InputKeyItemVM：TaleWorlds.MountAndBlade.ViewModelCollection.Input 的 public 类，继承 ViewModel；公开成员 13 个（方法 8、属性 5、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Input/InputKeyItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# InputKeyItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Input`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class InputKeyItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Input/InputKeyItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

InputKeyItemVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Input/InputKeyItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 InputKeyItemVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 13 个：8 方法、5 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：InputKeyItemVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Input`，继承链 InputKeyItemVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 8/13，属性 5/13），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/Input/InputKeyItemVM.cs 的方法体或该类型的深写页确认。

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

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
