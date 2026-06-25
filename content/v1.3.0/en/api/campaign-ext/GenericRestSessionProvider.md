---
title: "GenericRestSessionProvider"
description: "Auto-generated class reference for GenericRestSessionProvider."
---
# GenericRestSessionProvider

**Namespace:** TaleWorlds.Diamond.ClientApplication
**Module:** TaleWorlds.Diamond
**Type:** `public class GenericRestSessionProvider<T> : IClientSessionProvider<T> where T : Client<T>`
**Base:** `IClientSessionProvider<T> where T : Client<T>`
**File:** `TaleWorlds.Diamond/ClientApplication/GenericRestSessionProvider.cs`

## Overview

`GenericRestSessionProvider` lives in `TaleWorlds.Diamond.ClientApplication` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond.ClientApplication` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateSession
`public IClientSession CreateSession(T session)`

**Purpose:** Constructs a new session entity and returns it to the caller.

```csharp
// Obtain an instance of GenericRestSessionProvider from the subsystem API first
GenericRestSessionProvider genericRestSessionProvider = ...;
var result = genericRestSessionProvider.CreateSession(session);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GenericRestSessionProvider genericRestSessionProvider = ...;
genericRestSessionProvider.CreateSession(session);
```

## See Also

- [Area Index](../)