---
title: "GauntletBannerEditorScreen"
description: "GauntletBannerEditorScreen：SandBox.GauntletUI 的 public 类，继承 ScreenBase、IGameStateListener；公开成员 8 个（方法 7、属性 0、字段 0）。源文件 SandBox.GauntletUI/BannerEditor/GauntletBannerEditorScreen.cs。"
---
# GauntletBannerEditorScreen

**Namespace:** `SandBox.GauntletUI.BannerEditor`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletBannerEditorScreen : ScreenBase, IGameStateListener`
**File:** `SandBox.GauntletUI/BannerEditor/GauntletBannerEditorScreen.cs`

## 概述

GauntletBannerEditorScreen 位于 SandBox.GauntletUI 模块，源文件 SandBox.GauntletUI/BannerEditor/GauntletBannerEditorScreen.cs。它是一个 public 类，实现/继承 ScreenBase、IGameStateListener，继承链为 GauntletBannerEditorScreen → ScreenBase。public/protected 成员共 8 个：7 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GauntletBannerEditorScreen 是 SandBox.GauntletUI 的顶层类型，命名空间与模块目录不同（SandBox.GauntletUI.BannerEditor），继承链 GauntletBannerEditorScreen → ScreenBase。成员构成以方法为主（方法 7/8，属性 0/8），对外主要以操作入口暴露。继承链上的 ScreenBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.GauntletUI/BannerEditor/GauntletBannerEditorScreen.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GauntletBannerEditorScreen` | `public GauntletBannerEditorScreen(BannerEditorState bannerEditorState)` | 构造函数 |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | 方法 |
| `OnDone` | `public void OnDone()` | 方法 |
| `OnCancel` | `public void OnCancel()` | 方法 |
| `OnInitialize` | `protected override void OnInitialize()` | 方法 |
| `OnFinalize` | `protected override void OnFinalize()` | 方法 |
| `OnActivate` | `protected override void OnActivate()` | 方法 |
| `OnDeactivate` | `protected override void OnDeactivate()` | 方法 |

## 参见

- [↑ sandbox-gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BannerEditorView](../BannerEditorView)
