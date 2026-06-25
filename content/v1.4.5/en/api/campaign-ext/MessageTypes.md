---
title: "MessageTypes"
description: "Auto-generated class reference for MessageTypes."
---
# MessageTypes

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public enum MessageTypes : byte`
**Base:** `byte`
**File:** `bin/TaleWorlds.Network/TaleWorlds.Network/MessageTypes.cs`

## Overview

`MessageTypes` lives in `TaleWorlds.Network` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Network` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
MessageTypes instance = ...;
```

## See Also

- [Area Index](../)