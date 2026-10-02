---
title: "GauntletMapBarGlobalLayer"
description: "GauntletMapBarGlobalLayer：SandBox.GauntletUI.Map 的 public 类，继承 GlobalLayer；公开成员 11 个（方法 8、属性 1、字段 1）。canonical 桶 sandbox。源文件 SandBox.GauntletUI/Map/GauntletMapBarGlobalLayer.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletMapBarGlobalLayer

**Namespace:** `SandBox.GauntletUI.Map`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletMapBarGlobalLayer : GlobalLayer`
**File:** `SandBox.GauntletUI/Map/GauntletMapBarGlobalLayer.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

GauntletMapBarGlobalLayer 位于 SandBox.GauntletUI 模块，源文件 SandBox.GauntletUI/Map/GauntletMapBarGlobalLayer.cs。它是一个 public 类，实现/继承 GlobalLayer，继承链为 GauntletMapBarGlobalLayer → GlobalLayer → IComparable。public/protected 成员共 11 个：8 方法、1 属性、1 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GauntletMapBarGlobalLayer 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.GauntletUI.Map`，继承链 GauntletMapBarGlobalLayer → GlobalLayer → IComparable。成员构成以方法为主（方法 8/11，属性 1/11），对外主要以操作入口暴露。继承链上的 IComparable 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.GauntletUI/Map/GauntletMapBarGlobalLayer.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsInArmyManagement` | `public bool IsInArmyManagement` | 属性 |
| `GauntletMapBarGlobalLayer` | `public GauntletMapBarGlobalLayer(MapScreen mapScreen, INavigationHandler navigationHandler, float contextAlphaModifider)` | 构造函数 |
| `Initialize` | `public void Initialize(MapBarVM dataSource)` | 方法 |
| `OnFinalize` | `public void OnFinalize()` | 方法 |
| `OnMapConversationStarted` | `public void OnMapConversationStarted()` | 方法 |
| `OnMapConversationOver` | `public void OnMapConversationOver()` | 方法 |
| `Refresh` | `public void Refresh()` | 方法 |
| `OnTick` | `protected override void OnTick(float dt)` | 方法 |
| `HandlePanelSwitchingInput` | `protected virtual bool HandlePanelSwitchingInput(InputContext inputContext)` | 方法 |
| `IsEscaped` | `public bool IsEscaped()` | 方法 |
| `_contextAlphaTarget` | `protected float _contextAlphaTarget` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 GlobalLayer](../../gui/GlobalLayer/)
- [同命名空间 GauntletHeirSelectionPopupView](../GauntletHeirSelectionPopupView/)
- [同命名空间 GauntletMapBarView](../GauntletMapBarView/)
- [同命名空间 GauntletMapBasicView](../GauntletMapBasicView/)
- [同命名空间 GauntletMapBattleSimulationView](../GauntletMapBattleSimulationView/)
