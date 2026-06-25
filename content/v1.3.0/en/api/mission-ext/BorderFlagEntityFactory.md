---
title: "BorderFlagEntityFactory"
description: "Auto-generated class reference for BorderFlagEntityFactory."
---
# BorderFlagEntityFactory

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BorderFlagEntityFactory : IEntityFactory`
**Base:** `IEntityFactory`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/BorderFlagEntityFactory.cs`

## Overview

`BorderFlagEntityFactory` lives in `TaleWorlds.MountAndBlade.View` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### MakeEntity
`public GameEntity MakeEntity(params object paramObjects)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BorderFlagEntityFactory from the subsystem API first
BorderFlagEntityFactory borderFlagEntityFactory = ...;
var result = borderFlagEntityFactory.MakeEntity(paramObjects);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BorderFlagEntityFactory borderFlagEntityFactory = ...;
borderFlagEntityFactory.MakeEntity(paramObjects);
```

## See Also

- [Area Index](../)