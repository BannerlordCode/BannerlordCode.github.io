---
title: "GauntletMapBattleSimulationView"
description: "GauntletMapBattleSimulationView：SandBox.GauntletUI.Map 的 public 类，继承 MapView；公开成员 6 个（方法 5、属性 0、字段 0）。canonical 桶 sandbox。源文件 SandBox.GauntletUI/Map/GauntletMapBattleSimulationView.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletMapBattleSimulationView

**Namespace:** `SandBox.GauntletUI.Map`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletMapBattleSimulationView : MapView`
**File:** `SandBox.GauntletUI/Map/GauntletMapBattleSimulationView.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

GauntletMapBattleSimulationView 位于 SandBox.GauntletUI 模块，源文件 SandBox.GauntletUI/Map/GauntletMapBattleSimulationView.cs。它是一个 public 类，实现/继承 MapView，继承链为 GauntletMapBattleSimulationView → MapView → SandboxView。public/protected 成员共 6 个：5 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GauntletMapBattleSimulationView 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.GauntletUI.Map`，继承链 GauntletMapBattleSimulationView → MapView → SandboxView。成员构成以方法为主（方法 5/6，属性 0/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.GauntletUI/Map/GauntletMapBattleSimulationView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GauntletMapBattleSimulationView` | `public GauntletMapBattleSimulationView(SPScoreboardVM dataSource)` | 构造函数 |
| `OnMapConversationStart` | `protected override void OnMapConversationStart()` | 方法 |
| `OnMapConversationOver` | `protected override void OnMapConversationOver()` | 方法 |
| `CreateLayout` | `protected override void CreateLayout()` | 方法 |
| `OnFinalize` | `protected override void OnFinalize()` | 方法 |
| `OnMapScreenUpdate` | `protected override void OnMapScreenUpdate(float dt)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MapView](../MapView/)
- [同命名空间 GauntletHeirSelectionPopupView](../GauntletHeirSelectionPopupView/)
- [同命名空间 GauntletMapBarGlobalLayer](../GauntletMapBarGlobalLayer/)
- [同命名空间 GauntletMapBarView](../GauntletMapBarView/)
- [同命名空间 GauntletMapBasicView](../GauntletMapBasicView/)
