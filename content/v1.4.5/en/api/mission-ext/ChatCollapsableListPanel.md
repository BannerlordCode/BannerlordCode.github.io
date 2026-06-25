---
title: "ChatCollapsableListPanel"
description: "Auto-generated class reference for ChatCollapsableListPanel."
---
# ChatCollapsableListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ChatCollapsableListPanel : ListPanel`
**Base:** `ListPanel`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat/ChatCollapsableListPanel.cs`

## Overview

`ChatCollapsableListPanel` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsLinesVisible` | `public bool IsLinesVisible { get; }` |
| `Alpha` | `public float Alpha { get; set; }` |
| `LineColor` | `public Color LineColor { get; set; }` |
| `ParentChatLogWidget` | `public ChatLogWidget ParentChatLogWidget { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
ChatCollapsableListPanel instance = ...;
```

## See Also

- [Area Index](../)