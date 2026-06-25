---
title: "GenericThreadedRestSessionProvider"
description: "Auto-generated class reference for GenericThreadedRestSessionProvider."
---
# GenericThreadedRestSessionProvider

**Namespace:** TaleWorlds.Diamond.ClientApplication
**Module:** TaleWorlds.Diamond
**Type:** `public class GenericThreadedRestSessionProvider<T> : IClientSessionProvider<T> where T : Client<T>`
**Base:** `IClientSessionProvider<T> where T : Client<T>`
**File:** `bin/TaleWorlds.Diamond/TaleWorlds.Diamond.ClientApplication/GenericThreadedRestSessionProvider.cs`

## Overview

`GenericThreadedRestSessionProvider` lives in `TaleWorlds.Diamond.ClientApplication` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond.ClientApplication` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateSession
`public IClientSession CreateSession(T client)`

**Purpose:** Constructs a new `session` entity and returns it to the caller.

```csharp
// Obtain an instance of GenericThreadedRestSessionProvider from the subsystem API first
GenericThreadedRestSessionProvider genericThreadedRestSessionProvider = ...;
var result = genericThreadedRestSessionProvider.CreateSession(client);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GenericThreadedRestSessionProvider genericThreadedRestSessionProvider = ...;
genericThreadedRestSessionProvider.CreateSession(client);
```

## See Also

- [Area Index](../)