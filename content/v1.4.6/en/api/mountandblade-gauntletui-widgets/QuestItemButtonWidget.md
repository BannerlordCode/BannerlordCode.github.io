---
title: "QuestItemButtonWidget"
description: "QuestItemButtonWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ButtonWidget; 15 exposed members (1 methods, 13 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Quest/QuestItemButtonWidget.cs."
---
# QuestItemButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Quest`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class QuestItemButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Quest/QuestItemButtonWidget.cs`

## Overview

QuestItemButtonWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Quest/QuestItemButtonWidget.cs. It is a public class, implementing/inheriting ButtonWidget; the inheritance chain is QuestItemButtonWidget → ButtonWidget. It exposes 15 public/protected members: 1 methods, 13 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: QuestItemButtonWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Quest) the module directory; inheritance chain QuestItemButtonWidget → ButtonWidget. The surface is property-led (properties 13/15, methods 1/15), so it mostly exposes state for reading. ButtonWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Quest/QuestItemButtonWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MainStoryLineItemBrush` | `public Brush MainStoryLineItemBrush` | property |
| `NavalStorylineItemBrush` | `public Brush NavalStorylineItemBrush` | property |
| `NormalItemBrush` | `public Brush NormalItemBrush` | property |
| `QuestItemButtonWidget` | `public QuestItemButtonWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `IsCompleted` | `public bool IsCompleted` | property |
| `IsMainStoryLineQuest` | `public bool IsMainStoryLineQuest` | property |
| `IsNavalStorylineQuest` | `public bool IsNavalStorylineQuest` | property |
| `IsRemainingDaysHidden` | `public bool IsRemainingDaysHidden` | property |
| `QuestNameText` | `public TextWidget QuestNameText` | property |
| `QuestDateText` | `public TextWidget QuestDateText` | property |
| `QuestNameYOffset` | `public int QuestNameYOffset` | property |
| `QuestNameXOffset` | `public int QuestNameXOffset` | property |
| `QuestDateYOffset` | `public int QuestDateYOffset` | property |
| `QuestDateXOffset` | `public int QuestDateXOffset` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace QuestMarkerBrushWidget](../QuestMarkerBrushWidget)
- [same namespace QuestProgressVisualWidget](../QuestProgressVisualWidget)
- [same namespace QuestStageItemWidget](../QuestStageItemWidget)
