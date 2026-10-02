---
title: "PersuasionResultChanceContainerListPanel"
description: "PersuasionResultChanceContainerListPanel: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting BrushListPanel; 9 exposed members (1 methods, 7 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Conversation/PersuasionResultChanceContainerListPanel.cs."
---
# PersuasionResultChanceContainerListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Conversation`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class PersuasionResultChanceContainerListPanel : BrushListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Conversation/PersuasionResultChanceContainerListPanel.cs`

## Overview

PersuasionResultChanceContainerListPanel lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Conversation/PersuasionResultChanceContainerListPanel.cs. It is a public class, implementing/inheriting BrushListPanel; the inheritance chain is PersuasionResultChanceContainerListPanel → BrushListPanel. It exposes 9 public/protected members: 1 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PersuasionResultChanceContainerListPanel is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Conversation) the module directory; inheritance chain PersuasionResultChanceContainerListPanel → BrushListPanel. The surface is property-led (properties 7/9, methods 1/9), so it mostly exposes state for reading. BrushListPanel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Conversation/PersuasionResultChanceContainerListPanel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StayTime` | `public float StayTime` | property |
| `CritFailWidget` | `public Widget CritFailWidget` | property |
| `FailWidget` | `public Widget FailWidget` | property |
| `SuccessWidget` | `public Widget SuccessWidget` | property |
| `CritSuccessWidget` | `public Widget CritSuccessWidget` | property |
| `IsResultReady` | `public bool IsResultReady` | property |
| `PersuasionResultChanceContainerListPanel` | `public PersuasionResultChanceContainerListPanel(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `ResultIndex` | `public int ResultIndex` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ConversationItemImageWidget](../ConversationItemImageWidget)
- [same namespace ConversationNameButtonWidget](../ConversationNameButtonWidget)
- [same namespace ConversationOptionListPanel](../ConversationOptionListPanel)
- [same namespace ConversationPersuasionProgressRichTextWidget](../ConversationPersuasionProgressRichTextWidget)
