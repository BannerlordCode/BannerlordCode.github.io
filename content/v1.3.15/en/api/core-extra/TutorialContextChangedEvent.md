---
title: "TutorialContextChangedEvent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TutorialContextChangedEvent`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TutorialContextChangedEvent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class TutorialContextChangedEvent : EventBase`
**Base:** `EventBase`
**File:** `TaleWorlds.Core/TutorialContextChangedEvent.cs`

## Overview

`TutorialContextChangedEvent` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NewContext` | `public TutorialContexts NewContext { get; }` |

## Usage Example

```csharp
var value = new TutorialContextChangedEvent();
```

## See Also

- [Complete Class Catalog](../catalog)