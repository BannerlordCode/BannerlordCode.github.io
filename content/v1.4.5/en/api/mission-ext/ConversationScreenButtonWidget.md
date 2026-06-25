---
title: "ConversationScreenButtonWidget"
description: "Auto-generated class reference for ConversationScreenButtonWidget."
---
# ConversationScreenButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Conversation
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ConversationScreenButtonWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Conversation/ConversationScreenButtonWidget.cs`

## Overview

`ConversationScreenButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ConversationScreenButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AnswerList` | `public ListPanel AnswerList { get; set; }` |
| `ContinueButton` | `public ButtonWidget ContinueButton { get; set; }` |
| `IsPersuasionActive` | `public bool IsPersuasionActive { get; set; }` |

## Key Methods

### ConversationScreenButtonWidget
`public class ConversationScreenButtonWidget(UIContext context)`

**Purpose:** Executes the ConversationScreenButtonWidget logic.

```csharp
// Obtain an instance of ConversationScreenButtonWidget from the subsystem API first
ConversationScreenButtonWidget conversationScreenButtonWidget = ...;
var result = conversationScreenButtonWidget.ConversationScreenButtonWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
ConversationScreenButtonWidget widget = ...;
```

## See Also

- [Area Index](../)