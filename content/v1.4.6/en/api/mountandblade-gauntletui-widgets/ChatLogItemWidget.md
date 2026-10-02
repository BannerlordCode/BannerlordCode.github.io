---
title: "ChatLogItemWidget"
description: "ChatLogItemWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 8 exposed members (1 methods, 5 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatLogItemWidget.cs."
---
# ChatLogItemWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ChatLogItemWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatLogItemWidget.cs`

## Overview

ChatLogItemWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatLogItemWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is ChatLogItemWidget → Widget. It exposes 8 public/protected members: 1 methods, 5 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ChatLogItemWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat) the module directory; inheritance chain ChatLogItemWidget → Widget. The surface is property-led (properties 5/8, methods 1/8), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatLogItemWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ChatLogItemWidget` | `public ChatLogItemWidget(UIContext context) : base(context)` | constructor |
| `OnParallelUpdate` | `protected override void OnParallelUpdate(float dt)` | method |
| `OneLineTextWidget` | `public RichTextWidget OneLineTextWidget` | property |
| `CollapsableWidget` | `public ChatCollapsableListPanel CollapsableWidget` | property |
| `ChatLine` | `public string ChatLine` | property |
| `ChatLogWidget` | `public ChatLogWidget ChatLogWidget` | property |
| `ChatMultiLineElement` | `public struct ChatMultiLineElement` | property |
| `ChatMultiLineElement` | `public struct ChatMultiLineElement` | nested type |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ChatCollapsableListPanel](../ChatCollapsableListPanel)
- [same namespace ChatLogWidget](../ChatLogWidget)
