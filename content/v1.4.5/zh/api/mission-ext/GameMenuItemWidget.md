---
title: "GameMenuItemWidget"
description: "GameMenuItemWidget 的自动生成类参考。"
---
# GameMenuItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameMenuItemWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenuItemWidget.cs`

## 概述

`GameMenuItemWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `GameMenuItemWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `DefaultTextBrush` | `public Brush DefaultTextBrush { get; set; }` |
| `HoveredTextBrush` | `public Brush HoveredTextBrush { get; set; }` |
| `PressedTextBrush` | `public Brush PressedTextBrush { get; set; }` |
| `DisabledTextBrush` | `public Brush DisabledTextBrush { get; set; }` |
| `NormalQuestBrush` | `public Brush NormalQuestBrush { get; set; }` |
| `MainStoryQuestBrush` | `public Brush MainStoryQuestBrush { get; set; }` |
| `ItemRichTextWidget` | `public RichTextWidget ItemRichTextWidget { get; set; }` |
| `ItemType` | `public int ItemType { get; set; }` |
| `QuestIconWidget` | `public BrushWidget QuestIconWidget { get; set; }` |
| `IssueIconWidget` | `public BrushWidget IssueIconWidget { get; set; }` |
| `LeaveType` | `public string LeaveType { get; set; }` |
| `IsMainStoryQuest` | `public bool IsMainStoryQuest { get; set; }` |
| `QuestType` | `public int QuestType { get; set; }` |
| `IssueType` | `public int IssueType { get; set; }` |
| `IsWaitActive` | `public bool IsWaitActive { get; set; }` |
| `LeaveTypeIcon` | `public BrushWidget LeaveTypeIcon { get; set; }` |
| `WaitStateWidget` | `public BrushWidget WaitStateWidget { get; set; }` |
| `ParentButton` | `public ButtonWidget ParentButton { get; set; }` |
| `GameMenuStringId` | `public string GameMenuStringId { get; set; }` |
| `BattleSize` | `public int BattleSize { get; set; }` |
| `IsNavalBattle` | `public bool IsNavalBattle { get; set; }` |

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
GameMenuItemWidget widget = ...;
```

## 参见

- [本区域目录](../)