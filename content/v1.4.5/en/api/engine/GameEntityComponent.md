---
title: "GameEntityComponent"
description: "Auto-generated class reference for GameEntityComponent."
---
# GameEntityComponent

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public abstract class GameEntityComponent : NativeObject`
**Base:** `NativeObject`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/GameEntityComponent.cs`

## Overview

`GameEntityComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `GameEntityComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetEntity
`public WeakGameEntity GetEntity()`

**Purpose:** Reads and returns the entity value held by the this instance.

```csharp
// Obtain an instance of GameEntityComponent from the subsystem API first
GameEntityComponent gameEntityComponent = ...;
var result = gameEntityComponent.GetEntity();
```

### GetFirstMetaMesh
`public virtual MetaMesh GetFirstMetaMesh()`

**Purpose:** Reads and returns the first meta mesh value held by the this instance.

```csharp
// Obtain an instance of GameEntityComponent from the subsystem API first
GameEntityComponent gameEntityComponent = ...;
var result = gameEntityComponent.GetFirstMetaMesh();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
GameEntityComponent instance = ...;
```

## See Also

- [Area Index](../)