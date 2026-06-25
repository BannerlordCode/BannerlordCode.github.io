---
title: "EntitySystem"
description: "Auto-generated class reference for EntitySystem."
---
# EntitySystem

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class EntitySystem<T>`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/EntitySystem.cs`

## Overview

`EntitySystem` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddComponent
`public T AddComponent(Type componentType)`

**Purpose:** **Purpose:** Adds component to the current collection or state.

```csharp
// Obtain an instance of EntitySystem from the subsystem API first
EntitySystem entitySystem = ...;
var result = entitySystem.AddComponent(componentType);
```

### GetComponent
`public T GetComponent(Type componentType)`

**Purpose:** **Purpose:** Reads and returns the component value held by the this instance.

```csharp
// Obtain an instance of EntitySystem from the subsystem API first
EntitySystem entitySystem = ...;
var result = entitySystem.GetComponent(componentType);
```

### GetComponents
`public MBList<T> GetComponents()`

**Purpose:** **Purpose:** Reads and returns the components value held by the this instance.

```csharp
// Obtain an instance of EntitySystem from the subsystem API first
EntitySystem entitySystem = ...;
var result = entitySystem.GetComponents();
```

### Finalize
`public void Finalize(T component)`

**Purpose:** **Purpose:** Performs cleanup work when the object is garbage collected (usually for unmanaged resources).

```csharp
// Obtain an instance of EntitySystem from the subsystem API first
EntitySystem entitySystem = ...;
entitySystem.Finalize(component);
```

### RemoveComponent
`public void RemoveComponent(T component)`

**Purpose:** **Purpose:** Removes component from the current collection or state.

```csharp
// Obtain an instance of EntitySystem from the subsystem API first
EntitySystem entitySystem = ...;
entitySystem.RemoveComponent(component);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EntitySystem entitySystem = ...;
entitySystem.AddComponent(componentType);
```

## See Also

- [Area Index](../)