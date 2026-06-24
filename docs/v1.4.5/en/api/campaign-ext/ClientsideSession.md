<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClientsideSession`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ClientsideSession

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public abstract class ClientsideSession : NetworkSession`
**Base:** `NetworkSession`
**File:** `Bannerlord.Source/bin/TaleWorlds.Network/TaleWorlds.Network/ClientsideSession.cs`

## Overview

`ClientsideSession` lives in `TaleWorlds.Network` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Network` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Port` | `public int Port { get; set; }` |

## Key Methods

### Connect
`public virtual void Connect(string ip, int port, bool useSessionThread = true)`

**Purpose:** Handles logic related to `connect`.

### Process
`public void Process()`

**Purpose:** Handles logic related to `process`.

### Tick
`public override void Tick()`

**Purpose:** Handles logic related to `tick`.

## Usage Example

```csharp
var implementation = new CustomClientsideSession();
```

## See Also

- [Complete Class Catalog](../catalog)