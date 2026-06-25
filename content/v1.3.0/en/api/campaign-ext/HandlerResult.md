---
title: "HandlerResult"
description: "Auto-generated class reference for HandlerResult."
---
# HandlerResult

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public class HandlerResult`
**Base:** none
**File:** `TaleWorlds.Diamond/HandlerResult.cs`

## Overview

`HandlerResult` lives in `TaleWorlds.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSuccessful` | `public bool IsSuccessful { get; }` |
| `Error` | `public string Error { get; }` |
| `NextMessage` | `public Message NextMessage { get; }` |

## Key Methods

### CreateSuccessful
`public static HandlerResult CreateSuccessful()`

**Purpose:** **Purpose:** Constructs a new successful entity and returns it to the caller.

```csharp
// Static call; no instance required
HandlerResult.CreateSuccessful();
```

### CreateSuccessful
`public static HandlerResult CreateSuccessful(Message nextMessage)`

**Purpose:** **Purpose:** Constructs a new successful entity and returns it to the caller.

```csharp
// Static call; no instance required
HandlerResult.CreateSuccessful(nextMessage);
```

### CreateFailed
`public static HandlerResult CreateFailed(string error)`

**Purpose:** **Purpose:** Constructs a new failed entity and returns it to the caller.

```csharp
// Static call; no instance required
HandlerResult.CreateFailed("example");
```

## Usage Example

```csharp
HandlerResult.CreateSuccessful();
```

## See Also

- [Area Index](../)