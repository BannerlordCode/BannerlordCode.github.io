---
title: "ChatMultiLineElement"
description: "Auto-generated class reference for ChatMultiLineElement."
---
# ChatMultiLineElement

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct ChatMultiLineElement`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat/ChatLogItemWidget.cs`

## Overview

`ChatMultiLineElement` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ChatMultiLineElement
`public struct ChatMultiLineElement(string line, int identModifier)`

**Purpose:** **Purpose:** Executes the ChatMultiLineElement logic.

```csharp
// Obtain an instance of ChatMultiLineElement from the subsystem API first
ChatMultiLineElement chatMultiLineElement = ...;
var result = chatMultiLineElement.ChatMultiLineElement("example", 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ChatMultiLineElement chatMultiLineElement = ...;
chatMultiLineElement.ChatMultiLineElement("example", 0);
```

## See Also

- [Area Index](../)