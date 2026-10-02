---
title: "MultiplayerScoreboardAnimatedFillBarWidget"
description: "MultiplayerScoreboardAnimatedFillBarWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard 的 public 类，继承 FillBarWidget；公开成员 12 个（方法 5、属性 4、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Scoreboard/MultiplayerScoreboardAnimatedFillBarWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerScoreboardAnimatedFillBarWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerScoreboardAnimatedFillBarWidget : FillBarWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Scoreboard/MultiplayerScoreboardAnimatedFillBarWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MultiplayerScoreboardAnimatedFillBarWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Scoreboard/MultiplayerScoreboardAnimatedFillBarWidget.cs。它是一个 public 类，实现/继承 FillBarWidget，继承链为 MultiplayerScoreboardAnimatedFillBarWidget → FillBarWidget → Widget → PropertyOwnerObject。public/protected 成员共 12 个：5 方法、4 属性、1 事件、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MultiplayerScoreboardAnimatedFillBarWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard`，继承链 MultiplayerScoreboardAnimatedFillBarWidget → FillBarWidget → Widget → PropertyOwnerObject。成员构成以方法为主（方法 5/12，属性 4/12），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Scoreboard/MultiplayerScoreboardAnimatedFillBarWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnFullFillFinished;` | `public event MultiplayerScoreboardAnimatedFillBarWidget.FullFillFinishedHandler OnFullFillFinished;` | 事件 |
| `MultiplayerScoreboardAnimatedFillBarWidget` | `public MultiplayerScoreboardAnimatedFillBarWidget(UIContext context) : base(context)` | 构造函数 |
| `StartAnimation` | `public void StartAnimation(float animationDelay = 0f)` | 方法 |
| `Reset` | `public void Reset()` | 方法 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `IsStartRequested` | `public bool IsStartRequested` | 属性 |
| `AnimationDelay` | `public float AnimationDelay` | 属性 |
| `AnimationFillSpeed` | `public float AnimationFillSpeed` | 属性 |
| `TimesOfFullFill` | `public int TimesOfFullFill` | 属性 |
| `FullFillFinishedHandler` | `public delegate void FullFillFinishedHandler(bool isPositive);` | 方法 |
| `FullFillFinishedHandler` | `public delegate void FullFillFinishedHandler(bool isPositive)` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 FillBarWidget](../../gui/FillBarWidget/)
- [同命名空间 MultiplayerScoreboardEndOfBattlePanelWidget](../MultiplayerScoreboardEndOfBattlePanelWidget/)
- [同命名空间 MultiplayerScoreboardScreenWidget](../MultiplayerScoreboardScreenWidget/)
- [同命名空间 MultiplayerScoreboardSideWidget](../MultiplayerScoreboardSideWidget/)
- [同命名空间 MultiplayerScoreboardStatsListPanel](../MultiplayerScoreboardStatsListPanel/)
