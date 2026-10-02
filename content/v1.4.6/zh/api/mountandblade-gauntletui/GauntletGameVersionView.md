---
title: "GauntletGameVersionView"
description: "GauntletGameVersionView：TaleWorlds.MountAndBlade.GauntletUI 的 public 类，继承 GlobalLayer；公开成员 7 个（方法 5、属性 1、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI/GauntletGameVersionView.cs。"
---
# GauntletGameVersionView

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class GauntletGameVersionView : GlobalLayer`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletGameVersionView.cs`

## 概述

GauntletGameVersionView 位于 TaleWorlds.MountAndBlade.GauntletUI 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI/GauntletGameVersionView.cs。它是一个 public 类，实现/继承 GlobalLayer，继承链为 GauntletGameVersionView → GlobalLayer。public/protected 成员共 7 个：5 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GauntletGameVersionView 是 TaleWorlds.MountAndBlade.GauntletUI 的顶层类型，命名空间与模块目录一致，继承链 GauntletGameVersionView → GlobalLayer。成员构成以方法为主（方法 5/7，属性 1/7），对外主要以操作入口暴露。继承链上的 GlobalLayer 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI/GauntletGameVersionView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Current` | `public static GauntletGameVersionView Current` | 属性 |
| `GauntletGameVersionView` | `public GauntletGameVersionView()` | 构造函数 |
| `Initialize` | `public static void Initialize()` | 方法 |
| `Refresh` | `public static void Refresh()` | 方法 |
| `AddModuleVersionInfo` | `public static void AddModuleVersionInfo(string title, string versionStr)` | 方法 |
| `RemoveModuleVersionInfo` | `public static void RemoveModuleVersionInfo(string title)` | 方法 |
| `OnTick` | `protected override void OnTick(float dt)` | 方法 |

## 参见

- [↑ mountandblade-gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ChatLogMessageManager](../ChatLogMessageManager)
- [同命名空间 GamepadCursorViewModel](../GamepadCursorViewModel)
- [同命名空间 GauntletBannerBuilderScreen](../GauntletBannerBuilderScreen)
- [同命名空间 GauntletCameraFadeView](../GauntletCameraFadeView)
