---
title: "PlayerStartEngineConstructionEvent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerStartEngineConstructionEvent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PlayerStartEngineConstructionEvent

**Namespace:** SandBox.ViewModelCollection.MapSiege
**Module:** SandBox.ViewModelCollection
**Type:** `public class PlayerStartEngineConstructionEvent : EventBase`
**Base:** `EventBase`
**File:** `SandBox.ViewModelCollection/MapSiege/PlayerStartEngineConstructionEvent.cs`

## Overview

`PlayerStartEngineConstructionEvent` lives in `SandBox.ViewModelCollection.MapSiege` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.MapSiege` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Engine` | `public SiegeEngineType Engine { get; }` |

## Usage Example

```csharp
var value = new PlayerStartEngineConstructionEvent();
```

## See Also

- [Complete Class Catalog](../catalog)