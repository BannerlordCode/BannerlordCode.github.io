---
title: "GameMenuItemWidget"
description: "Auto-generated class reference for GameMenuItemWidget."
---
# GameMenuItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameMenuItemWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenuItemWidget.cs`

## Overview

`GameMenuItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `GameMenuItemWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

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

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
GameMenuItemWidget widget = ...;
```

## See Also

- [Area Index](../)