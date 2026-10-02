---
title: "ChatLogWidget"
description: "ChatLogWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat, inheriting Widget; 17 exposed members (3 methods, 13 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatLogWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ChatLogWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ChatLogWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatLogWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ChatLogWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatLogWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is ChatLogWidget → Widget → PropertyOwnerObject. It exposes 17 public/protected members: 3 methods, 13 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ChatLogWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat`, inheritance chain ChatLogWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 13/17, methods 3/17), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatLogWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ChatCollapsableListPanel](../ChatCollapsableListPanel/)
- [same namespace ChatLogItemWidget](../ChatLogItemWidget/)
