---
title: "HttpRequestTaskState"
description: "Auto-generated class reference for HttpRequestTaskState."
---
# HttpRequestTaskState

**Namespace:** TaleWorlds.Library.Http
**Module:** TaleWorlds.Library
**Type:** `public enum HttpRequestTaskState`
**Base:** none
**File:** `TaleWorlds.Library/Http/HttpRequestTaskState.cs`

## Overview

`HttpRequestTaskState` lives in `TaleWorlds.Library.Http` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library.Http` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
HttpRequestTaskState instance = ...;
```

## See Also

- [Area Index](../)