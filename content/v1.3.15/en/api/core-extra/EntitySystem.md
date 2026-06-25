---
title: "EntitySystem"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EntitySystem`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EntitySystem

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class EntitySystem<T>`
**Base:** none
**File:** `TaleWorlds.Core/EntitySystem.cs`

## Overview

`EntitySystem` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Components` | `public MBReadOnlyList<T> Components { get; }` |

## Key Methods

### AddComponent
`public T AddComponent(Type componentType)`

**Purpose:** Adds `component` to the current collection or state.

### GetComponent
`public T GetComponent(Type componentType)`

**Purpose:** Gets the current value of `component`.

### GetComponents
`public MBList<T> GetComponents()`

**Purpose:** Gets the current value of `components`.

### Finalize
`public void Finalize(T component)`

**Purpose:** Handles logic related to `finalize`.

### RemoveComponent
`public void RemoveComponent(T component)`

**Purpose:** Removes `component` from the current collection or state.

## Usage Example

```csharp
var value = new EntitySystem();
value.AddComponent(componentType);
```

## See Also

- [Complete Class Catalog](../catalog)