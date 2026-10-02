---
title: "ChatCollapsableListPanel"
description: "ChatCollapsableListPanel: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ListPanel; 8 exposed members (3 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatCollapsableListPanel.cs."
---
# ChatCollapsableListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ChatCollapsableListPanel : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatCollapsableListPanel.cs`

## Overview

ChatCollapsableListPanel lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatCollapsableListPanel.cs. It is a public class, implementing/inheriting ListPanel; the inheritance chain is ChatCollapsableListPanel → ListPanel. It exposes 8 public/protected members: 3 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ChatCollapsableListPanel is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat) the module directory; inheritance chain ChatCollapsableListPanel → ListPanel. The surface is property-led (properties 4/8, methods 3/8), so it mostly exposes state for reading. ListPanel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatCollapsableListPanel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsLinesVisible` | `public bool IsLinesVisible` | property |
| `ChatCollapsableListPanel` | `public ChatCollapsableListPanel(UIContext context) : base(context)` | constructor |
| `OnMousePressed` | `protected override void OnMousePressed()` | method |
| `OnPreviewMousePressed` | `protected override bool OnPreviewMousePressed()` | method |
| `OnChildAdded` | `protected override void OnChildAdded(Widget child)` | method |
| `Alpha` | `public float Alpha` | property |
| `LineColor` | `public Color LineColor` | property |
| `ParentChatLogWidget` | `public ChatLogWidget ParentChatLogWidget` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ChatLogItemWidget](../ChatLogItemWidget)
- [same namespace ChatLogWidget](../ChatLogWidget)
