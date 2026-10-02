---
title: "TutorialScreen"
description: "TutorialScreen：SandBox.View.Menu 的 public 类，继承 ScreenBase、IGameStateListener；公开成员 7 个（方法 5、属性 1、字段 0）。canonical 桶 sandbox。源文件 SandBox.View/Menu/TutorialScreen.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TutorialScreen

**Namespace:** `SandBox.View.Menu`
**Module:** `SandBox.View`
**Type:** `public class TutorialScreen : ScreenBase, IGameStateListener`
**File:** `SandBox.View/Menu/TutorialScreen.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

TutorialScreen 位于 SandBox.View 模块，源文件 SandBox.View/Menu/TutorialScreen.cs。它是一个 public 类，实现/继承 ScreenBase、IGameStateListener，继承链为 TutorialScreen → ScreenBase。public/protected 成员共 7 个：5 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TutorialScreen 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.View.Menu`，继承链 TutorialScreen → ScreenBase。成员构成以方法为主（方法 5/7，属性 1/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/Menu/TutorialScreen.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MenuViewContext` | `public MenuViewContext MenuViewContext` | 属性 |
| `TutorialScreen` | `public TutorialScreen(TutorialState tutorialState)` | 构造函数 |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | 方法 |
| `OnActivate` | `protected override void OnActivate()` | 方法 |
| `OnDeactivate` | `protected override void OnDeactivate()` | 方法 |
| `OnInitialize` | `protected override void OnInitialize()` | 方法 |
| `OnFinalize` | `protected override void OnFinalize()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ScreenBase](../../gui/ScreenBase/)
- [基类/接口 IGameStateListener](../../core-extra/IGameStateListener/)
- [同命名空间 MenuBackgroundView](../MenuBackgroundView/)
- [同命名空间 MenuBaseView](../MenuBaseView/)
- [同命名空间 MenuOverlayBaseView](../MenuOverlayBaseView/)
- [同命名空间 MenuRecruitVolunteersView](../MenuRecruitVolunteersView/)
