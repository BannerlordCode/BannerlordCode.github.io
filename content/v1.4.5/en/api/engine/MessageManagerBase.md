---
title: "MessageManagerBase"
description: "Auto-generated class reference for MessageManagerBase."
---
# MessageManagerBase

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public abstract class MessageManagerBase : DotNetObject`
**Base:** `DotNetObject`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/MessageManagerBase.cs`

## Overview

`MessageManagerBase` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MessageManagerBase instance = ...;
```

## See Also

- [Area Index](../)