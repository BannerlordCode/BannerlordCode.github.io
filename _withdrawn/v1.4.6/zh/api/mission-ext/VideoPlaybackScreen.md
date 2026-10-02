---
title: "VideoPlaybackScreen"
description: "VideoPlaybackScreen：TaleWorlds.MountAndBlade.View.Screens 的 public 类，继承 ScreenBase、IGameStateListener；公开成员 3 个（方法 2、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/VideoPlaybackScreen.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# VideoPlaybackScreen

**Namespace:** `TaleWorlds.MountAndBlade.View.Screens`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class VideoPlaybackScreen : ScreenBase, IGameStateListener`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/VideoPlaybackScreen.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

VideoPlaybackScreen 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/VideoPlaybackScreen.cs。它是一个 public 类，实现/继承 ScreenBase、IGameStateListener，继承链为 VideoPlaybackScreen → ScreenBase。public/protected 成员共 3 个：2 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：VideoPlaybackScreen 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.View.Screens`，继承链 VideoPlaybackScreen → ScreenBase。成员构成以方法为主（方法 2/3，属性 0/3），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/VideoPlaybackScreen.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `VideoPlaybackScreen` | `public VideoPlaybackScreen(VideoPlaybackState videoPlaybackState)` | 构造函数 |
| `OnFrameTick` | `protected sealed override void OnFrameTick(float dt)` | 方法 |
| `OnVideoPlaybackTick` | `protected virtual void OnVideoPlaybackTick(float dt)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ScreenBase](../../gui/ScreenBase/)
- [基类/接口 IGameStateListener](../../core-extra/IGameStateListener/)
- [同命名空间 BannerBuilderScreen](../BannerBuilderScreen/)
- [同命名空间 BenchmarkScreen](../BenchmarkScreen/)
- [同命名空间 CreditsScreen](../CreditsScreen/)
- [同命名空间 FaceGeneratorScreen](../FaceGeneratorScreen/)
