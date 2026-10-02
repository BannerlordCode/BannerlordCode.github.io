---
title: "PhotoModeVM"
description: "PhotoModeVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 20 个（方法 11、属性 8、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/PhotoModeVM.cs。"
---
# PhotoModeVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class PhotoModeVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/PhotoModeVM.cs`

## 概述

PhotoModeVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/PhotoModeVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 PhotoModeVM → ViewModel。public/protected 成员共 20 个：11 方法、8 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PhotoModeVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录一致，继承链 PhotoModeVM → ViewModel。成员构成以方法为主（方法 11/20，属性 8/20），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/PhotoModeVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PhotoModeVM` | `public PhotoModeVM(Scene missionScene, Func<bool>getVignetteOn, Func<bool>getHideAgentsOn)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `AddTakePictureKey` | `public void AddTakePictureKey(GameKey key)` | 方法 |
| `AddFasterCameraKey` | `public void AddFasterCameraKey(HotKey hotkey)` | 方法 |
| `AddKey` | `public void AddKey(GameKey key)` | 方法 |
| `AddHotkey` | `public void AddHotkey(HotKey hotkey)` | 方法 |
| `AddHotkeyWithForcedName` | `public void AddHotkeyWithForcedName(HotKey hotkey, TextObject forcedName)` | 方法 |
| `AddConsoleTakePictureKey` | `public void AddConsoleTakePictureKey(string keyID, TextObject forcedName)` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `Reset` | `public void Reset()` | 方法 |
| `UpdateTakePictureKeyVisibility` | `public void UpdateTakePictureKeyVisibility(bool canTakePicture)` | 方法 |
| `UpdateFasterCameraKeyVisibility` | `public void UpdateFasterCameraKeyVisibility(bool canMoveCamera)` | 方法 |
| `MBBindingList` | `public MBBindingList<InputKeyItemVM>Keys` | 属性 |
| `SelectorVM` | `public SelectorVM<SelectorItemVM>ColorGradeSelector` | 属性 |
| `SelectorVM` | `public SelectorVM<SelectorItemVM>OverlaySelector` | 属性 |
| `FocusEndValueOption` | `public PhotoModeValueOptionVM FocusEndValueOption` | 属性 |
| `FocusStartValueOption` | `public PhotoModeValueOptionVM FocusStartValueOption` | 属性 |
| `FocusValueOption` | `public PhotoModeValueOptionVM FocusValueOption` | 属性 |
| `ExposureOption` | `public PhotoModeValueOptionVM ExposureOption` | 属性 |
| `VerticalFovOption` | `public PhotoModeValueOptionVM VerticalFovOption` | 属性 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BoundaryCrossingVM](../BoundaryCrossingVM)
- [同命名空间 FullScreenNoticeVM](../FullScreenNoticeVM)
- [同命名空间 GameVersionVM](../GameVersionVM)
- [同命名空间 IMissionScreen](../IMissionScreen)
