---
title: "UniqueSceneId"
description: "Auto-generated class reference for UniqueSceneId."
---
# UniqueSceneId

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class UniqueSceneId`
**Base:** none
**File:** `TaleWorlds.Library/UniqueSceneId.cs`

## Overview

`UniqueSceneId` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `UniqueToken` | `public string UniqueToken { get; }` |
| `Revision` | `public string Revision { get; }` |

## Key Methods

### Serialize
`public string Serialize()`

**Purpose:** Serializes the this instance into a storable or transmittable format.

```csharp
// Obtain an instance of UniqueSceneId from the subsystem API first
UniqueSceneId uniqueSceneId = ...;
var result = uniqueSceneId.Serialize();
```

### TryParse
`public static bool TryParse(string uniqueMapId, out UniqueSceneId identifiers)`

**Purpose:** Attempts to retrieve parse, usually returning success through an out parameter.

```csharp
// Static call; no instance required
UniqueSceneId.TryParse("example", identifiers);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
UniqueSceneId uniqueSceneId = ...;
uniqueSceneId.Serialize();
```

## See Also

- [Area Index](../)