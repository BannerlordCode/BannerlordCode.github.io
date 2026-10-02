---
title: "SceneEditorLayer"
description: "SceneEditorLayer：TaleWorlds.MountAndBlade.View 的 public 类，继承 ScreenLayer；公开成员 5 个（方法 4、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/SceneEditorLayer.cs。"
---
# SceneEditorLayer

**Namespace:** `TaleWorlds.MountAndBlade.View.Screens`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class SceneEditorLayer : ScreenLayer`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/SceneEditorLayer.cs`

## 概述

SceneEditorLayer 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/SceneEditorLayer.cs。它是一个 public 类，实现/继承 ScreenLayer，继承链为 SceneEditorLayer → ScreenLayer。public/protected 成员共 5 个：4 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SceneEditorLayer 是 TaleWorlds.MountAndBlade.View 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.View.Screens），继承链 SceneEditorLayer → ScreenLayer。成员构成以方法为主（方法 4/5，属性 0/5），对外主要以操作入口暴露。继承链上的 ScreenLayer 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/SceneEditorLayer.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SceneEditorLayer` | `public SceneEditorLayer() : base(" ", -100)` | 构造函数 |
| `OnActivate` | `protected override void OnActivate()` | 方法 |
| `Tick` | `protected override void Tick(float dt)` | 方法 |
| `OnDeactivate` | `protected override void OnDeactivate()` | 方法 |
| `RefreshGlobalOrder` | `protected override void RefreshGlobalOrder(ref int currentOrder)` | 方法 |

## 参见

- [↑ mountandblade-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BannerBuilderScreen](../BannerBuilderScreen)
- [同命名空间 BenchmarkScreen](../BenchmarkScreen)
- [同命名空间 CreditsScreen](../CreditsScreen)
- [同命名空间 FaceGeneratorScreen](../FaceGeneratorScreen)
