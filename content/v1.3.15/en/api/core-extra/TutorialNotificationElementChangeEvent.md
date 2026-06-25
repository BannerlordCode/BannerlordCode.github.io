---
title: "TutorialNotificationElementChangeEvent"
description: "Auto-generated class reference for TutorialNotificationElementChangeEvent."
---
# TutorialNotificationElementChangeEvent

**Namespace:** TaleWorlds.Core.ViewModelCollection.Tutorial
**Module:** TaleWorlds.Core
**Type:** `public class TutorialNotificationElementChangeEvent : EventBase`
**Base:** `EventBase`
**File:** `TaleWorlds.Core.ViewModelCollection/Tutorial/TutorialNotificationElementChangeEvent.cs`

## Overview

`TutorialNotificationElementChangeEvent` lives in `TaleWorlds.Core.ViewModelCollection.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NewNotificationElementID` | `public string NewNotificationElementID { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
TutorialNotificationElementChangeEvent instance = ...;
```

## See Also

- [Area Index](../)