---
title: "ConversationScreenButtonWidget"
description: "ConversationScreenButtonWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Conversation, inheriting ButtonWidget; 6 exposed members (2 methods, 3 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Conversation/ConversationScreenButtonWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ConversationScreenButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Conversation`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ConversationScreenButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Conversation/ConversationScreenButtonWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ConversationScreenButtonWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Conversation/ConversationScreenButtonWidget.cs. It is a public class, implementing/inheriting ButtonWidget; the inheritance chain is ConversationScreenButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 6 public/protected members: 2 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ConversationScreenButtonWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Conversation`, inheritance chain ConversationScreenButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 3/6, methods 2/6), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Conversation/ConversationScreenButtonWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ConversationScreenButtonWidget` | `public ConversationScreenButtonWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `AnswerList` | `public ListPanel AnswerList` | property |
| `ContinueButton` | `public ButtonWidget ContinueButton` | property |
| `IsPersuasionActive` | `public bool IsPersuasionActive` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ButtonWidget](../../gui/ButtonWidget/)
- [same namespace ConversationItemImageWidget](../ConversationItemImageWidget/)
- [same namespace ConversationNameButtonWidget](../ConversationNameButtonWidget/)
- [same namespace ConversationOptionListPanel](../ConversationOptionListPanel/)
- [same namespace ConversationPersuasionProgressRichTextWidget](../ConversationPersuasionProgressRichTextWidget/)
