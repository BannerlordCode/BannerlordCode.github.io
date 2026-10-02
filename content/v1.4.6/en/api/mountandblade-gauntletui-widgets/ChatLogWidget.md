---
title: "ChatLogWidget"
description: "ChatLogWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 17 exposed members (3 methods, 13 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatLogWidget.cs."
---
# ChatLogWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ChatLogWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatLogWidget.cs`

## Overview

ChatLogWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatLogWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is ChatLogWidget → Widget. It exposes 17 public/protected members: 3 methods, 13 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ChatLogWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat) the module directory; inheritance chain ChatLogWidget → Widget. The surface is property-led (properties 13/17, methods 3/17), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatLogWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ChatLogWidget` | `public ChatLogWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `RegisterMultiLineElement` | `public void RegisterMultiLineElement(ChatCollapsableListPanel element)` | method |
| `RemoveMultiLineElement` | `public void RemoveMultiLineElement(ChatCollapsableListPanel element)` | method |
| `IsChatDisabled` | `public bool IsChatDisabled` | property |
| `FinishedResizing` | `public bool FinishedResizing` | property |
| `FullyShowChat` | `public bool FullyShowChat` | property |
| `FullyShowChatWithTyping` | `public bool FullyShowChatWithTyping` | property |
| `TextInputWidget` | `public EditableTextWidget TextInputWidget` | property |
| `Scrollbar` | `public ScrollbarWidget Scrollbar` | property |
| `ScrollablePanel` | `public ScrollablePanel ScrollablePanel` | property |
| `ResizerWidget` | `public Widget ResizerWidget` | property |
| `ResizeFrameWidget` | `public Widget ResizeFrameWidget` | property |
| `SizeX` | `public float SizeX` | property |
| `SizeY` | `public float SizeY` | property |
| `MessageHistoryList` | `public ListPanel MessageHistoryList` | property |
| `IsMPChatLog` | `public bool IsMPChatLog` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ChatCollapsableListPanel](../ChatCollapsableListPanel)
- [same namespace ChatLogItemWidget](../ChatLogItemWidget)
