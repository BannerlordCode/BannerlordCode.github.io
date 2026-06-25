---
title: "Message"
description: "Auto-generated class reference for Message."
---
# Message

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public abstract class Message`
**Base:** none
**File:** `bin/TaleWorlds.Diamond/TaleWorlds.Diamond/Message.cs`

## Overview

`Message` lives in `TaleWorlds.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
Message instance = ...;
```

## See Also

- [Area Index](../)