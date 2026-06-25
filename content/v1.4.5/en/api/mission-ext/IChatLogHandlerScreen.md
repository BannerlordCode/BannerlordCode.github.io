---
title: "IChatLogHandlerScreen"
description: "Auto-generated class reference for IChatLogHandlerScreen."
---
# IChatLogHandlerScreen

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface IChatLogHandlerScreen`
**Base:** none
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/IChatLogHandlerScreen.cs`

## Overview

`IChatLogHandlerScreen` lives in `TaleWorlds.MountAndBlade.View` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIChatLogHandlerScreen service = ...;
```

## See Also

- [Area Index](../)