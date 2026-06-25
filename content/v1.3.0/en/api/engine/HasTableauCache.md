---
title: "HasTableauCache"
description: "Auto-generated class reference for HasTableauCache."
---
# HasTableauCache

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class HasTableauCache : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.Engine/HasTableauCache.cs`

## Overview

`HasTableauCache` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TableauCacheType` | `public Type TableauCacheType { get; }` |
| `MaterialCacheIDGetType` | `public Type MaterialCacheIDGetType { get; }` |

## Key Methods

### CollectTableauCacheTypes
`public static void CollectTableauCacheTypes()`

**Purpose:** Executes the CollectTableauCacheTypes logic.

```csharp
// Static call; no instance required
HasTableauCache.CollectTableauCacheTypes();
```

## Usage Example

```csharp
HasTableauCache.CollectTableauCacheTypes();
```

## See Also

- [Area Index](../)