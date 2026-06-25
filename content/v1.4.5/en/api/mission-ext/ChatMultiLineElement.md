---
title: "ChatMultiLineElement"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ChatMultiLineElement`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ChatMultiLineElement

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct ChatMultiLineElement`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat/ChatLogItemWidget.cs`

## Overview

`ChatMultiLineElement` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ChatMultiLineElement
`public struct ChatMultiLineElement(string line, int identModifier)`

**Purpose:** Handles logic related to `chat multi line element`.

## Usage Example

```csharp
var value = new ChatMultiLineElement();
value.ChatMultiLineElement("example", 0);
```

## See Also

- [Complete Class Catalog](../catalog)