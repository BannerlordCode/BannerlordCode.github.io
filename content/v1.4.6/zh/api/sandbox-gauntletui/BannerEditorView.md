---
title: "BannerEditorView"
description: "BannerEditorView：SandBox.GauntletUI 的 public 类；公开成员 10 个（方法 5、属性 4、字段 0）。源文件 SandBox.GauntletUI/BannerEditor/BannerEditorView.cs。"
---
# BannerEditorView

**Namespace:** `SandBox.GauntletUI.BannerEditor`
**Module:** `SandBox.GauntletUI`
**Type:** `public class BannerEditorView`
**File:** `SandBox.GauntletUI/BannerEditor/BannerEditorView.cs`

## 概述

BannerEditorView 位于 SandBox.GauntletUI 模块，源文件 SandBox.GauntletUI/BannerEditor/BannerEditorView.cs。它是一个 public 类，继承链为 BannerEditorView。public/protected 成员共 10 个：5 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BannerEditorView 是 SandBox.GauntletUI 的顶层类型，命名空间与模块目录不同（SandBox.GauntletUI.BannerEditor），继承链 BannerEditorView。成员构成以方法为主（方法 5/10，属性 4/10），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.GauntletUI/BannerEditor/BannerEditorView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GauntletLayer` | `public GauntletLayer GauntletLayer` | 属性 |
| `DataSource` | `public BannerEditorVM DataSource` | 属性 |
| `Banner` | `public Banner Banner` | 属性 |
| `SceneLayer` | `public SceneLayer SceneLayer` | 属性 |
| `BannerEditorView` | `public BannerEditorView(BasicCharacterObject character, Banner banner, ControlCharacterCreationStage affirmativeAction, TextObject affirmativeActionText, ControlCharacterCreationStage negativeAction, TextObject negativeActionText, ControlCharacterCreationStage onRefresh = null, ControlCharacterCreationStageReturnInt getCurrentStageIndexAction = null, ControlCharacterCreationStageReturnInt getTotalStageCountAction = null, ControlCharacterCreationStageReturnInt getFurthestIndexAction = null, ControlCharacterCreationStageWithInt goToIndexAction = null)` | 构造函数 |
| `OnTick` | `public void OnTick(float dt)` | 方法 |
| `OnFinalize` | `public void OnFinalize()` | 方法 |
| `Exit` | `public void Exit(bool isCancel)` | 方法 |
| `OnDeactivate` | `public void OnDeactivate()` | 方法 |
| `GoToIndex` | `public void GoToIndex(int index)` | 方法 |

## 参见

- [↑ sandbox-gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 GauntletBannerEditorScreen](../GauntletBannerEditorScreen)
