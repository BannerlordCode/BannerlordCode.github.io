---
title: "SessionProviderType"
description: "Auto-generated class reference for SessionProviderType."
---
# SessionProviderType

**Namespace:** TaleWorlds.Diamond.ClientApplication
**Module:** TaleWorlds.Diamond
**Type:** `public enum SessionProviderType`
**Base:** none
**File:** `TaleWorlds.Diamond/ClientApplication/SessionProviderType.cs`

## Overview

`SessionProviderType` lives in `TaleWorlds.Diamond.ClientApplication` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond.ClientApplication` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
SessionProviderType instance = ...;
```

## See Also

- [Area Index](../)