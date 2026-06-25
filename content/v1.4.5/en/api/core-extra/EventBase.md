---
title: "EventBase"
description: "Auto-generated class reference for EventBase."
---
# EventBase

**Namespace:** TaleWorlds.Library.EventSystem
**Module:** TaleWorlds.Library
**Type:** `public class EventBase`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library.EventSystem/EventBase.cs`

## Overview

`EventBase` lives in `TaleWorlds.Library.EventSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library.EventSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
EventBase instance = ...;
```

## See Also

- [Area Index](../)