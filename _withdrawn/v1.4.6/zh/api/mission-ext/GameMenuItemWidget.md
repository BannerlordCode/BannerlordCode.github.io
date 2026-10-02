---
title: "GameMenuItemWidget"
description: "GameMenuItemWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 Widget；公开成员 23 个（方法 1、属性 21、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenuItemWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameMenuItemWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class GameMenuItemWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenuItemWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

GameMenuItemWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenuItemWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 GameMenuItemWidget → Widget → PropertyOwnerObject。public/protected 成员共 23 个：1 方法、21 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameMenuItemWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets`，继承链 GameMenuItemWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 21/23，方法 1/23），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenuItemWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DefaultTextBrush` | `public Brush DefaultTextBrush` | 属性 |
| `HoveredTextBrush` | `public Brush HoveredTextBrush` | 属性 |
| `PressedTextBrush` | `public Brush PressedTextBrush` | 属性 |
| `DisabledTextBrush` | `public Brush DisabledTextBrush` | 属性 |
| `NormalQuestBrush` | `public Brush NormalQuestBrush` | 属性 |
| `MainStoryQuestBrush` | `public Brush MainStoryQuestBrush` | 属性 |
| `ItemRichTextWidget` | `public RichTextWidget ItemRichTextWidget` | 属性 |
| `GameMenuItemWidget` | `public GameMenuItemWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `ItemType` | `public int ItemType` | 属性 |
| `QuestIconWidget` | `public BrushWidget QuestIconWidget` | 属性 |
| `IssueIconWidget` | `public BrushWidget IssueIconWidget` | 属性 |
| `LeaveType` | `public string LeaveType` | 属性 |
| `IsMainStoryQuest` | `public bool IsMainStoryQuest` | 属性 |
| `QuestType` | `public int QuestType` | 属性 |
| `IssueType` | `public int IssueType` | 属性 |
| `IsWaitActive` | `public bool IsWaitActive` | 属性 |
| `LeaveTypeIcon` | `public BrushWidget LeaveTypeIcon` | 属性 |
| `WaitStateWidget` | `public BrushWidget WaitStateWidget` | 属性 |
| `ParentButton` | `public ButtonWidget ParentButton` | 属性 |
| `GameMenuStringId` | `public string GameMenuStringId` | 属性 |
| `BattleSize` | `public int BattleSize` | 属性 |
| `IsNavalBattle` | `public bool IsNavalBattle` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AutoHideRichTextWidget](../AutoHideRichTextWidget/)
- [同命名空间 AutoHideTextWidget](../AutoHideTextWidget/)
- [同命名空间 AutoHideZeroTextWidget](../AutoHideZeroTextWidget/)
- [同命名空间 BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager/)
