---
title: "GameMenuItemWidget"
description: "GameMenuItemWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 23 exposed members (1 methods, 21 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenuItemWidget.cs."
---
# GameMenuItemWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class GameMenuItemWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenuItemWidget.cs`

## Overview

GameMenuItemWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenuItemWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is GameMenuItemWidget → Widget. It exposes 23 public/protected members: 1 methods, 21 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameMenuItemWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace matching the module directory; inheritance chain GameMenuItemWidget → Widget. The surface is property-led (properties 21/23, methods 1/23), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenuItemWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DefaultTextBrush` | `public Brush DefaultTextBrush` | property |
| `HoveredTextBrush` | `public Brush HoveredTextBrush` | property |
| `PressedTextBrush` | `public Brush PressedTextBrush` | property |
| `DisabledTextBrush` | `public Brush DisabledTextBrush` | property |
| `NormalQuestBrush` | `public Brush NormalQuestBrush` | property |
| `MainStoryQuestBrush` | `public Brush MainStoryQuestBrush` | property |
| `ItemRichTextWidget` | `public RichTextWidget ItemRichTextWidget` | property |
| `GameMenuItemWidget` | `public GameMenuItemWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `ItemType` | `public int ItemType` | property |
| `QuestIconWidget` | `public BrushWidget QuestIconWidget` | property |
| `IssueIconWidget` | `public BrushWidget IssueIconWidget` | property |
| `LeaveType` | `public string LeaveType` | property |
| `IsMainStoryQuest` | `public bool IsMainStoryQuest` | property |
| `QuestType` | `public int QuestType` | property |
| `IssueType` | `public int IssueType` | property |
| `IsWaitActive` | `public bool IsWaitActive` | property |
| `LeaveTypeIcon` | `public BrushWidget LeaveTypeIcon` | property |
| `WaitStateWidget` | `public BrushWidget WaitStateWidget` | property |
| `ParentButton` | `public ButtonWidget ParentButton` | property |
| `GameMenuStringId` | `public string GameMenuStringId` | property |
| `BattleSize` | `public int BattleSize` | property |
| `IsNavalBattle` | `public bool IsNavalBattle` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
