---
title: "GauntletBannerBuilderScreen"
description: "GauntletBannerBuilderScreen：TaleWorlds.MountAndBlade.GauntletUI 的 public 类，继承 ScreenBase、IGameStateListener；公开成员 6 个（方法 4、属性 1、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI/GauntletBannerBuilderScreen.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletBannerBuilderScreen

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class GauntletBannerBuilderScreen : ScreenBase, IGameStateListener`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletBannerBuilderScreen.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

GauntletBannerBuilderScreen 位于 TaleWorlds.MountAndBlade.GauntletUI 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI/GauntletBannerBuilderScreen.cs。它是一个 public 类，实现/继承 ScreenBase、IGameStateListener，继承链为 GauntletBannerBuilderScreen → ScreenBase。public/protected 成员共 6 个：4 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GauntletBannerBuilderScreen 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI`，继承链 GauntletBannerBuilderScreen → ScreenBase。成员构成以方法为主（方法 4/6，属性 1/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI/GauntletBannerBuilderScreen.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SceneLayer` | `public SceneLayer SceneLayer` | 属性 |
| `GauntletBannerBuilderScreen` | `public GauntletBannerBuilderScreen(BannerBuilderState state)` | 构造函数 |
| `OnInitialize` | `protected override void OnInitialize()` | 方法 |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | 方法 |
| `OnFinalize` | `protected override void OnFinalize()` | 方法 |
| `Exit` | `public void Exit(bool isCancel)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ScreenBase](../../gui/ScreenBase/)
- [基类/接口 IGameStateListener](../../core-extra/IGameStateListener/)
- [同命名空间 ChatLogMessageManager](../ChatLogMessageManager/)
- [同命名空间 GamepadCursorViewModel](../GamepadCursorViewModel/)
- [同命名空间 GauntletCameraFadeView](../GauntletCameraFadeView/)
- [同命名空间 GauntletChatLogView](../GauntletChatLogView/)
