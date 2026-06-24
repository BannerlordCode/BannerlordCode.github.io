<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ThreadedClient`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ThreadedClient

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public class ThreadedClient : IClient`
**Base:** `IClient`
**File:** `TaleWorlds.Diamond/ThreadedClient.cs`

## Overview

`ThreadedClient` lives in `TaleWorlds.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AccessProvider` | `public ILoginAccessProvider AccessProvider { get; }` |
| `IsInCriticalState` | `public bool IsInCriticalState { get; }` |
| `AliveCheckTimeInMiliSeconds` | `public long AliveCheckTimeInMiliSeconds { get; }` |

## Key Methods

### Tick
`public void Tick()`

**Purpose:** Handles logic related to `tick`.

### CheckConnection
`public Task<bool> CheckConnection()`

**Purpose:** Handles logic related to `check connection`.

## Usage Example

```csharp
var value = new ThreadedClient();
value.Tick();
```

## See Also

- [Complete Class Catalog](../catalog)