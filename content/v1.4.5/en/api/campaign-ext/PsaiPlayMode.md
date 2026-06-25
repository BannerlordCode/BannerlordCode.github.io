---
title: "PsaiPlayMode"
description: "Auto-generated class reference for PsaiPlayMode."
---
# PsaiPlayMode

**Namespace:** psai.net
**Module:** psai.net
**Type:** `public enum PsaiPlayMode`
**Base:** none
**File:** `bin/TaleWorlds.PSAI/psai.net/PsaiPlayMode.cs`

## Overview

`PsaiPlayMode` lives in `psai.net` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `psai.net` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
PsaiPlayMode instance = ...;
```

## See Also

- [Area Index](../)