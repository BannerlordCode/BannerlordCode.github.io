---
title: "GroupSpawnPoint"
description: "Auto-generated class reference for GroupSpawnPoint."
---
# GroupSpawnPoint

**Namespace:** SandBox.Objects
**Module:** SandBox.Objects
**Type:** `public class GroupSpawnPoint : UsablePlace`
**Base:** `UsablePlace`
**File:** `Modules.SandBox/SandBox/SandBox.Objects/GroupSpawnPoint.cs`

## Overview

`GroupSpawnPoint` lives in `SandBox.Objects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Objects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsInstant` | `public bool IsInstant { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
GroupSpawnPoint instance = ...;
```

## See Also

- [Area Index](../)