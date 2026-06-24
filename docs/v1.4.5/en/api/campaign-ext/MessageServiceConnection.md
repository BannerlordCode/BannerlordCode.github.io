<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MessageServiceConnection`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MessageServiceConnection

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public abstract class MessageServiceConnection`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Network/TaleWorlds.Network/MessageServiceConnection.cs`

## Overview

`MessageServiceConnection` lives in `TaleWorlds.Network` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Network` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Address` | `public string Address { get; set; }` |

## Key Methods

### ClosedDelegate
`public delegate Task ClosedDelegate()`

**Purpose:** Handles logic related to `closed delegate`.

### StateChangedDelegate
`public delegate void StateChangedDelegate(ConnectionState oldState, ConnectionState newState)`

**Purpose:** Handles logic related to `state changed delegate`.

### SendAsync
`public abstract Task SendAsync(string text)`

**Purpose:** Handles logic related to `send async`.

### Init
`public abstract void Init(string address, string token)`

**Purpose:** Initializes the state, resources, or bindings for `init`.

### RegisterProxyClient
`public abstract void RegisterProxyClient(string name, IMessageProxyClient playerClient)`

**Purpose:** Handles logic related to `register proxy client`.

### StartAsync
`public abstract Task StartAsync()`

**Purpose:** Handles logic related to `start async`.

### StopAsync
`public abstract Task StopAsync()`

**Purpose:** Handles logic related to `stop async`.

## Usage Example

```csharp
var implementation = new CustomMessageServiceConnection();
```

## See Also

- [Complete Class Catalog](../catalog)