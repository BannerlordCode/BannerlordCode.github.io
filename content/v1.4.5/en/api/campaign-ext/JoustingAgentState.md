---
title: "JoustingAgentState"
description: "Auto-generated class reference for JoustingAgentState."
---
# JoustingAgentState

**Namespace:** SandBox.Tournaments.AgentControllers
**Module:** SandBox.Tournaments
**Type:** `public enum JoustingAgentState`
**Base:** none
**File:** `Modules.SandBox/SandBox/SandBox.Tournaments.AgentControllers/JoustingAgentController.cs`

## Overview

`JoustingAgentState` lives in `SandBox.Tournaments.AgentControllers` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Tournaments.AgentControllers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
JoustingAgentState instance = ...;
```

## See Also

- [Area Index](../)