---
title: "DecalEntity"
description: "Auto-generated class reference for DecalEntity."
---
# DecalEntity

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public struct DecalEntity`
**Base:** none
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map/MapScreen.cs`

## Overview

`DecalEntity` lives in `SandBox.View.Map` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Map` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameEntity` | `public GameEntity GameEntity { get; set; }` |
| `Decal` | `public Decal Decal { get; set; }` |

## Key Methods

### Create
`public static DecalEntity Create(Scene scene, string material, string entityName = null)`

**Purpose:** Creates a new instance or related entity for the this instance.

```csharp
// Static call; no instance required
DecalEntity.Create(scene, "example", "example");
```

## Usage Example

```csharp
DecalEntity.Create(scene, "example", "example");
```

## See Also

- [Area Index](../)