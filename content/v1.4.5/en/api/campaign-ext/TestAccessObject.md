---
title: "TestAccessObject"
description: "Auto-generated class reference for TestAccessObject."
---
# TestAccessObject

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public class TestAccessObject : AccessObject`
**Base:** `AccessObject`
**File:** `bin/TaleWorlds.Diamond/TaleWorlds.Diamond/TestAccessObject.cs`

## Overview

`TestAccessObject` lives in `TaleWorlds.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `UserName` | `public string UserName { get; }` |
| `Password` | `public string Password { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
TestAccessObject instance = ...;
```

## See Also

- [Area Index](../)