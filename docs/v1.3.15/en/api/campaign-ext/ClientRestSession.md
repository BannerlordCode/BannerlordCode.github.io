<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClientRestSession`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClientRestSession

**Namespace:** TaleWorlds.Diamond.Rest
**Module:** TaleWorlds.Diamond
**Type:** `public class ClientRestSession : IClientSession`
**Base:** `IClientSession`
**File:** `TaleWorlds.Diamond/Rest/ClientRestSession.cs`

## Overview

`ClientRestSession` lives in `TaleWorlds.Diamond.Rest` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond.Rest` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsConnected` | `public bool IsConnected { get; }` |
| `Client` | `public IClient Client { get; }` |

## Key Methods

### Connect
`public void Connect()`

**Purpose:** Handles logic related to `connect`.

### Disconnect
`public void Disconnect()`

**Purpose:** Handles logic related to `disconnect`.

## Usage Example

```csharp
var value = new ClientRestSession();
value.Connect();
```

## See Also

- [Complete Class Catalog](../catalog)