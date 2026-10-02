---
title: "LoadingWindowViewModel"
description: "LoadingWindowViewModel：TaleWorlds.MountAndBlade.GauntletUI 的 public 类，继承 ViewModel；公开成员 15 个（方法 3、属性 9、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI/LoadingWindowViewModel.cs。"
---
# LoadingWindowViewModel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class LoadingWindowViewModel : ViewModel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/LoadingWindowViewModel.cs`

## 概述

LoadingWindowViewModel 位于 TaleWorlds.MountAndBlade.GauntletUI 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI/LoadingWindowViewModel.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 LoadingWindowViewModel → ViewModel。public/protected 成员共 15 个：3 方法、9 属性、1 构造函数、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：LoadingWindowViewModel 是 TaleWorlds.MountAndBlade.GauntletUI 的顶层类型，命名空间与模块目录一致，继承链 LoadingWindowViewModel → ViewModel。成员构成以属性为主（属性 9/15，方法 3/15），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI/LoadingWindowViewModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CurrentlyShowingMultiplayer` | `public bool CurrentlyShowingMultiplayer` | 属性 |
| `LoadingWindowViewModel` | `public LoadingWindowViewModel(LoadingWindowViewModel.LoadImageDelegate loadImageDelegate, LoadingWindowViewModel.UnloadImageDelegate unloadImageDelegate)` | 构造函数 |
| `SetTotalGenericImageCount` | `public void SetTotalGenericImageCount(int totalGenericImageCount)` | 方法 |
| `Enabled` | `public bool Enabled` | 属性 |
| `IsDevelopmentMode` | `public bool IsDevelopmentMode` | 属性 |
| `TitleText` | `public string TitleText` | 属性 |
| `GameModeText` | `public string GameModeText` | 属性 |
| `DescriptionText` | `public string DescriptionText` | 属性 |
| `IsMultiplayer` | `public bool IsMultiplayer` | 属性 |
| `IsNavalDLCEnabled` | `public bool IsNavalDLCEnabled` | 属性 |
| `LoadingImageName` | `public string LoadingImageName` | 属性 |
| `UnloadImageDelegate` | `public delegate void UnloadImageDelegate(int index);` | 方法 |
| `LoadImageDelegate` | `public delegate void LoadImageDelegate(int index, out string imageName);` | 方法 |
| `UnloadImageDelegate` | `public delegate void UnloadImageDelegate(int index)` | 嵌套类型 |
| `LoadImageDelegate` | `public delegate void LoadImageDelegate(int index, out string imageName)` | 嵌套类型 |

## 参见

- [↑ mountandblade-gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ChatLogMessageManager](../ChatLogMessageManager)
- [同命名空间 GamepadCursorViewModel](../GamepadCursorViewModel)
- [同命名空间 GauntletBannerBuilderScreen](../GauntletBannerBuilderScreen)
- [同命名空间 GauntletCameraFadeView](../GauntletCameraFadeView)
