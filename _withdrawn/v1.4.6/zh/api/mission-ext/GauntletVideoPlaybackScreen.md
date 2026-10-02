---
title: "GauntletVideoPlaybackScreen"
description: "GauntletVideoPlaybackScreen：TaleWorlds.MountAndBlade.GauntletUI 的 public 类，继承 VideoPlaybackScreen；公开成员 3 个（方法 2、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI/GauntletVideoPlaybackScreen.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletVideoPlaybackScreen

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class GauntletVideoPlaybackScreen : VideoPlaybackScreen`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletVideoPlaybackScreen.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

GauntletVideoPlaybackScreen 位于 TaleWorlds.MountAndBlade.GauntletUI 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI/GauntletVideoPlaybackScreen.cs。它是一个 public 类，实现/继承 VideoPlaybackScreen，继承链为 GauntletVideoPlaybackScreen → VideoPlaybackScreen → ScreenBase。public/protected 成员共 3 个：2 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GauntletVideoPlaybackScreen 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI`，继承链 GauntletVideoPlaybackScreen → VideoPlaybackScreen → ScreenBase。成员构成以方法为主（方法 2/3，属性 0/3），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI/GauntletVideoPlaybackScreen.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GauntletVideoPlaybackScreen` | `public GauntletVideoPlaybackScreen(VideoPlaybackState videoPlaybackState) : base(videoPlaybackState)` | 构造函数 |
| `OnInitialize` | `protected override void OnInitialize()` | 方法 |
| `OnVideoPlaybackTick` | `protected override void OnVideoPlaybackTick(float dt)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 VideoPlaybackScreen](../VideoPlaybackScreen/)
- [同命名空间 ChatLogMessageManager](../ChatLogMessageManager/)
- [同命名空间 GamepadCursorViewModel](../GamepadCursorViewModel/)
- [同命名空间 GauntletBannerBuilderScreen](../GauntletBannerBuilderScreen/)
- [同命名空间 GauntletCameraFadeView](../GauntletCameraFadeView/)
