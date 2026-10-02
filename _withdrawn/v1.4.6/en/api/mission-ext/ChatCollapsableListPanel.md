---
title: "ChatCollapsableListPanel"
description: "ChatCollapsableListPanel: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat, inheriting ListPanel; 8 exposed members (3 methods, 4 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatCollapsableListPanel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ChatCollapsableListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ChatCollapsableListPanel : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatCollapsableListPanel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ChatCollapsableListPanel lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatCollapsableListPanel.cs. It is a public class, implementing/inheriting ListPanel; the inheritance chain is ChatCollapsableListPanel → ListPanel → Container → Widget → PropertyOwnerObject. It exposes 8 public/protected members: 3 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ChatCollapsableListPanel lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat`, inheritance chain ChatCollapsableListPanel → ListPanel → Container → Widget → PropertyOwnerObject. The surface is property-led (properties 4/8, methods 3/8), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatCollapsableListPanel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ListPanel](../../gui/ListPanel/)
- [same namespace ChatLogItemWidget](../ChatLogItemWidget/)
- [same namespace ChatLogWidget](../ChatLogWidget/)
