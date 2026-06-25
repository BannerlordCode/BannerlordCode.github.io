---
title: "EntityVisualManagerBase"
description: "Auto-generated class reference for EntityVisualManagerBase."
---
# EntityVisualManagerBase

**Namespace:** SandBox.View.Map.Managers
**Module:** SandBox.View
**Type:** `public abstract class EntityVisualManagerBase<TEntity> : EntityVisualManagerBase`
**Base:** `EntityVisualManagerBase`
**File:** `SandBox.View/Map/Managers/EntityVisualManagerBase.2.cs`

## Overview

`EntityVisualManagerBase` lives in `SandBox.View.Map.Managers` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Map.Managers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetVisualOfEntity
`public abstract MapEntityVisual<TEntity> GetVisualOfEntity(TEntity entity)`

**Purpose:** Reads and returns the visual of entity value held by the this instance.

```csharp
// Obtain an instance of EntityVisualManagerBase from the subsystem API first
EntityVisualManagerBase entityVisualManagerBase = ...;
var result = entityVisualManagerBase.GetVisualOfEntity(entity);
```

### GetEntityVisualManagerBase
`public static EntityVisualManagerBase<TEntity> GetEntityVisualManagerBase()`

**Purpose:** Reads and returns the entity visual manager base value held by the this instance.

```csharp
// Static call; no instance required
EntityVisualManagerBase.GetEntityVisualManagerBase();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
EntityVisualManagerBase instance = ...;
```

## See Also

- [Area Index](../)