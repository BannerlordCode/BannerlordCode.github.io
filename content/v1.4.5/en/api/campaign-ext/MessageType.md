---
title: "MessageType"
description: "Auto-generated class reference for MessageType."
---
# MessageType

**Namespace:** TaleWorlds.Diamond.Rest
**Module:** TaleWorlds.Diamond
**Type:** `public enum MessageType`
**Base:** none
**File:** `bin/TaleWorlds.Diamond/TaleWorlds.Diamond.Rest/MessageType.cs`

## Overview

`MessageType` lives in `TaleWorlds.Diamond.Rest` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond.Rest` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
MessageType instance = ...;
```

## See Also

- [Area Index](../)