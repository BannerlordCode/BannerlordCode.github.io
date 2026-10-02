---
title: "GauntletMenuBaseView"
description: "GauntletMenuBaseView：SandBox.GauntletUI.Menu 的 public 类，继承 MenuView；公开成员 12 个（方法 11、属性 1、字段 0）。canonical 桶 sandbox。源文件 SandBox.GauntletUI/Menu/GauntletMenuBaseView.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletMenuBaseView

**Namespace:** `SandBox.GauntletUI.Menu`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletMenuBaseView : MenuView`
**File:** `SandBox.GauntletUI/Menu/GauntletMenuBaseView.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

GauntletMenuBaseView 位于 SandBox.GauntletUI 模块，源文件 SandBox.GauntletUI/Menu/GauntletMenuBaseView.cs。它是一个 public 类，实现/继承 MenuView，继承链为 GauntletMenuBaseView → MenuView → SandboxView。public/protected 成员共 12 个：11 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GauntletMenuBaseView 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.GauntletUI.Menu`，继承链 GauntletMenuBaseView → MenuView → SandboxView。成员构成以方法为主（方法 11/12，属性 1/12），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.GauntletUI/Menu/GauntletMenuBaseView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameMenuDataSource` | `public GameMenuVM GameMenuDataSource` | 属性 |
| `OnInitialize` | `protected override void OnInitialize()` | 方法 |
| `OnActivate` | `protected override void OnActivate()` | 方法 |
| `OnDeactivate` | `protected override void OnDeactivate()` | 方法 |
| `OnResume` | `protected override void OnResume()` | 方法 |
| `OnMenuContextRefreshed` | `protected override void OnMenuContextRefreshed()` | 方法 |
| `OnFinalize` | `protected override void OnFinalize()` | 方法 |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | 方法 |
| `OnMapConversationActivated` | `protected override void OnMapConversationActivated()` | 方法 |
| `OnMapConversationDeactivated` | `protected override void OnMapConversationDeactivated()` | 方法 |
| `OnMenuContextUpdated` | `protected override void OnMenuContextUpdated(MenuContext newMenuContext)` | 方法 |
| `OnBackgroundMeshNameSet` | `protected override void OnBackgroundMeshNameSet(string name)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MenuView](../MenuView/)
- [同命名空间 GauntletMenuBackground](../GauntletMenuBackground/)
- [同命名空间 GauntletMenuOverlayBaseView](../GauntletMenuOverlayBaseView/)
- [同命名空间 GauntletMenuRecruitVolunteersView](../GauntletMenuRecruitVolunteersView/)
- [同命名空间 GauntletMenuTournamentLeaderboardView](../GauntletMenuTournamentLeaderboardView/)
