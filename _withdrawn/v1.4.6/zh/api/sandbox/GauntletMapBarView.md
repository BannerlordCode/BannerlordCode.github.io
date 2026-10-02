---
title: "GauntletMapBarView"
description: "GauntletMapBarView：SandBox.GauntletUI.Map 的 public 类，继承 MapView；公开成员 7 个（方法 7、属性 0、字段 0）。canonical 桶 sandbox。源文件 SandBox.GauntletUI/Map/GauntletMapBarView.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletMapBarView

**Namespace:** `SandBox.GauntletUI.Map`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletMapBarView : MapView`
**File:** `SandBox.GauntletUI/Map/GauntletMapBarView.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

GauntletMapBarView 位于 SandBox.GauntletUI 模块，源文件 SandBox.GauntletUI/Map/GauntletMapBarView.cs。它是一个 public 类，实现/继承 MapView，继承链为 GauntletMapBarView → MapView → SandboxView。public/protected 成员共 7 个：7 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GauntletMapBarView 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.GauntletUI.Map`，继承链 GauntletMapBarView → MapView → SandboxView。成员构成以方法为主（方法 7/7，属性 0/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.GauntletUI/Map/GauntletMapBarView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnMapConversationStart` | `protected override void OnMapConversationStart()` | 方法 |
| `OnMapConversationOver` | `protected override void OnMapConversationOver()` | 方法 |
| `CreateLayout` | `protected override void CreateLayout()` | 方法 |
| `OnFinalize` | `protected override void OnFinalize()` | 方法 |
| `OnResume` | `protected override void OnResume()` | 方法 |
| `IsEscaped` | `protected override bool IsEscaped()` | 方法 |
| `GetTutorialContext` | `protected override TutorialContexts GetTutorialContext()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MapView](../MapView/)
- [同命名空间 GauntletHeirSelectionPopupView](../GauntletHeirSelectionPopupView/)
- [同命名空间 GauntletMapBarGlobalLayer](../GauntletMapBarGlobalLayer/)
- [同命名空间 GauntletMapBasicView](../GauntletMapBasicView/)
- [同命名空间 GauntletMapBattleSimulationView](../GauntletMapBattleSimulationView/)
