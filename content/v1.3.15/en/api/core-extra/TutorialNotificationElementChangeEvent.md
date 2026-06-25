---
title: "TutorialNotificationElementChangeEvent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TutorialNotificationElementChangeEvent`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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
var value = new TutorialNotificationElementChangeEvent();
```

## See Also

- [Complete Class Catalog](../catalog)