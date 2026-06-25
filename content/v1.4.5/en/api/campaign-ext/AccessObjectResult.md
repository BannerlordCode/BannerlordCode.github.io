---
title: "AccessObjectResult"
description: "Auto-generated class reference for AccessObjectResult."
---
# AccessObjectResult

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public class AccessObjectResult`
**Base:** none
**File:** `bin/TaleWorlds.Diamond/TaleWorlds.Diamond/AccessObjectResult.cs`

## Overview

`AccessObjectResult` lives in `TaleWorlds.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AccessObject` | `public AccessObject AccessObject { get; set; }` |
| `Success` | `public bool Success { get; set; }` |
| `FailReason` | `public TextObject FailReason { get; set; }` |

## Key Methods

### CreateSuccess
`public static AccessObjectResult CreateSuccess(AccessObject accessObject)`

**Purpose:** Constructs a new `success` entity and returns it to the caller.

```csharp
// Static call; no instance required
AccessObjectResult.CreateSuccess(accessObject);
```

### CreateFailed
`public static AccessObjectResult CreateFailed(TextObject failReason)`

**Purpose:** Constructs a new `failed` entity and returns it to the caller.

```csharp
// Static call; no instance required
AccessObjectResult.CreateFailed(failReason);
```

## Usage Example

```csharp
AccessObjectResult.CreateSuccess(accessObject);
```

## See Also

- [Area Index](../)