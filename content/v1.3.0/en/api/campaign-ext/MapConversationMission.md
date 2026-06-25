---
title: "MapConversationMission"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapConversationMission`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapConversationMission

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapConversationMission : ICampaignMission`
**Base:** `ICampaignMission`
**File:** `SandBox.View/Map/MapConversationMission.cs`

## Overview

`MapConversationMission` lives in `SandBox.View.Map` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Map` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ConversationTableau` | `public MapConversationTableau ConversationTableau { get; }` |

## Key Methods

### SetConversationTableau
`public void SetConversationTableau(MapConversationTableau tableau)`

**Purpose:** Sets the value or state of `conversation tableau`.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### OnFinalize
`public void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
var value = new MapConversationMission();
value.SetConversationTableau(tableau);
```

## See Also

- [Complete Class Catalog](../catalog)