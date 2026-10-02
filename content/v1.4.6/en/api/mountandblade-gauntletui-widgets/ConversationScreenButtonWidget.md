---
title: "ConversationScreenButtonWidget"
description: "ConversationScreenButtonWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ButtonWidget; 6 exposed members (2 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Conversation/ConversationScreenButtonWidget.cs."
---
# ConversationScreenButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Conversation`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ConversationScreenButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Conversation/ConversationScreenButtonWidget.cs`

## Overview

ConversationScreenButtonWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Conversation/ConversationScreenButtonWidget.cs. It is a public class, implementing/inheriting ButtonWidget; the inheritance chain is ConversationScreenButtonWidget → ButtonWidget. It exposes 6 public/protected members: 2 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ConversationScreenButtonWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Conversation) the module directory; inheritance chain ConversationScreenButtonWidget → ButtonWidget. The surface is property-led (properties 3/6, methods 2/6), so it mostly exposes state for reading. ButtonWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Conversation/ConversationScreenButtonWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ConversationScreenButtonWidget` | `public ConversationScreenButtonWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `AnswerList` | `public ListPanel AnswerList` | property |
| `ContinueButton` | `public ButtonWidget ContinueButton` | property |
| `IsPersuasionActive` | `public bool IsPersuasionActive` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ConversationItemImageWidget](../ConversationItemImageWidget)
- [same namespace ConversationNameButtonWidget](../ConversationNameButtonWidget)
- [same namespace ConversationOptionListPanel](../ConversationOptionListPanel)
- [same namespace ConversationPersuasionProgressRichTextWidget](../ConversationPersuasionProgressRichTextWidget)
