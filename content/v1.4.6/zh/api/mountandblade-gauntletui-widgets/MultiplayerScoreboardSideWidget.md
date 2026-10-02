---
title: "MultiplayerScoreboardSideWidget"
description: "MultiplayerScoreboardSideWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 Widget；公开成员 6 个（方法 0、属性 5、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Scoreboard/MultiplayerScoreboardSideWidget.cs。"
---
# MultiplayerScoreboardSideWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerScoreboardSideWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Scoreboard/MultiplayerScoreboardSideWidget.cs`

## 概述

MultiplayerScoreboardSideWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Scoreboard/MultiplayerScoreboardSideWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 MultiplayerScoreboardSideWidget → Widget。public/protected 成员共 6 个：5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MultiplayerScoreboardSideWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard），继承链 MultiplayerScoreboardSideWidget → Widget。成员构成以属性为主（属性 5/6，方法 0/6），对外主要以状态读取接口暴露。继承链上的 Widget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Scoreboard/MultiplayerScoreboardSideWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MultiplayerScoreboardSideWidget` | `public MultiplayerScoreboardSideWidget(UIContext context) : base(context)` | 构造函数 |
| `CultureColor` | `public Color CultureColor` | 属性 |
| `CultureId` | `public string CultureId` | 属性 |
| `UseSecondary` | `public bool UseSecondary` | 属性 |
| `NameColumnWidthRatio` | `public float NameColumnWidthRatio` | 属性 |
| `TitlesListPanel` | `public ListPanel TitlesListPanel` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MultiplayerScoreboardAnimatedFillBarWidget](../MultiplayerScoreboardAnimatedFillBarWidget)
- [同命名空间 MultiplayerScoreboardEndOfBattlePanelWidget](../MultiplayerScoreboardEndOfBattlePanelWidget)
- [同命名空间 MultiplayerScoreboardScreenWidget](../MultiplayerScoreboardScreenWidget)
- [同命名空间 MultiplayerScoreboardStatsListPanel](../MultiplayerScoreboardStatsListPanel)
