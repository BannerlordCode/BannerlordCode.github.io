---
title: "ConspiracyQuestMapNotificationItemVM"
description: "Auto-generated class reference for ConspiracyQuestMapNotificationItemVM."
---
# ConspiracyQuestMapNotificationItemVM

**Namespace:** StoryMode.ViewModelCollection.Map
**Module:** StoryMode.ViewModelCollection
**Type:** `public class ConspiracyQuestMapNotificationItemVM : MapNotificationItemBaseVM`
**Base:** `MapNotificationItemBaseVM`
**File:** `Modules.StoryMode/StoryMode.ViewModelCollection/StoryMode.ViewModelCollection.Map/ConspiracyQuestMapNotificationItemVM.cs`

## Overview

`ConspiracyQuestMapNotificationItemVM` lives in `StoryMode.ViewModelCollection.Map` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.ViewModelCollection.Map` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Quest` | `public QuestBase Quest { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
ConspiracyQuestMapNotificationItemVM instance = ...;
```

## See Also

- [Area Index](../)