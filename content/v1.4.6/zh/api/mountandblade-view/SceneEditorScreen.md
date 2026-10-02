---
title: "SceneEditorScreen"
description: "SceneEditorScreen：TaleWorlds.MountAndBlade.View 的 public 类，继承 ScreenBase、IGameStateListener；公开成员 5 个（方法 4、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/SceneEditorScreen.cs。"
---
# SceneEditorScreen

**Namespace:** `TaleWorlds.MountAndBlade.View.Screens`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class SceneEditorScreen : ScreenBase, IGameStateListener`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/SceneEditorScreen.cs`

## 概述

SceneEditorScreen 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/SceneEditorScreen.cs。它是一个 public 类，实现/继承 ScreenBase、IGameStateListener，继承链为 SceneEditorScreen → ScreenBase。public/protected 成员共 5 个：4 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SceneEditorScreen 是 TaleWorlds.MountAndBlade.View 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.View.Screens），继承链 SceneEditorScreen → ScreenBase。成员构成以方法为主（方法 4/5，属性 0/5），对外主要以操作入口暴露。继承链上的 ScreenBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/SceneEditorScreen.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SceneEditorScreen` | `public SceneEditorScreen(EditorState editorState)` | 构造函数 |
| `OnInitialize` | `protected override void OnInitialize()` | 方法 |
| `OnActivate` | `protected override void OnActivate()` | 方法 |
| `OnDeactivate` | `protected override void OnDeactivate()` | 方法 |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | 方法 |

## 参见

- [↑ mountandblade-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BannerBuilderScreen](../BannerBuilderScreen)
- [同命名空间 BenchmarkScreen](../BenchmarkScreen)
- [同命名空间 CreditsScreen](../CreditsScreen)
- [同命名空间 FaceGeneratorScreen](../FaceGeneratorScreen)
