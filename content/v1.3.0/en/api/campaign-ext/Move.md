---
title: "Move"
description: "Auto-generated class reference for Move."
---
# Move

**Namespace:** SandBox.BoardGames
**Module:** SandBox.BoardGames
**Type:** `public struct Move`
**Base:** none
**File:** `SandBox/BoardGames/Move.cs`

## Overview

`Move` lives in `SandBox.BoardGames` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.BoardGames` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
Move instance = ...;
```

## See Also

- [Area Index](../)