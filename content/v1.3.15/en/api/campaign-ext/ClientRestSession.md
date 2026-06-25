---
title: "ClientRestSession"
description: "Auto-generated class reference for ClientRestSession."
---
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

**Purpose:** Executes the Connect logic.

```csharp
// Obtain an instance of ClientRestSession from the subsystem API first
ClientRestSession clientRestSession = ...;
clientRestSession.Connect();
```

### Disconnect
`public void Disconnect()`

**Purpose:** Executes the Disconnect logic.

```csharp
// Obtain an instance of ClientRestSession from the subsystem API first
ClientRestSession clientRestSession = ...;
clientRestSession.Disconnect();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ClientRestSession clientRestSession = ...;
clientRestSession.Connect();
```

## See Also

- [Area Index](../)