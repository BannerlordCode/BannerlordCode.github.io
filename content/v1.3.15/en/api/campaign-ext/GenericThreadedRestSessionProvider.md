---
title: "GenericThreadedRestSessionProvider"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GenericThreadedRestSessionProvider`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GenericThreadedRestSessionProvider

**Namespace:** TaleWorlds.Diamond.ClientApplication
**Module:** TaleWorlds.Diamond
**Type:** `public class GenericThreadedRestSessionProvider<T> : IClientSessionProvider<T> where T : Client<T>`
**Base:** `IClientSessionProvider<T> where T : Client<T>`
**File:** `TaleWorlds.Diamond/ClientApplication/GenericThreadedRestSessionProvider.cs`

## Overview

`GenericThreadedRestSessionProvider` lives in `TaleWorlds.Diamond.ClientApplication` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond.ClientApplication` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateSession
`public IClientSession CreateSession(T client)`

**Purpose:** Creates a new `session` instance or object.

## Usage Example

```csharp
var value = new GenericThreadedRestSessionProvider();
value.CreateSession(client);
```

## See Also

- [Complete Class Catalog](../catalog)