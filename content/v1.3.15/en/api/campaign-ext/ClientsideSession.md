---
title: "ClientsideSession"
description: "Auto-generated class reference for ClientsideSession."
---
# ClientsideSession

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public abstract class ClientsideSession : NetworkSession`
**Base:** `NetworkSession`
**File:** `TaleWorlds.Network/ClientsideSession.cs`

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

**Purpose:** **Purpose:** Executes the Connect logic.

```csharp
// Obtain an instance of ClientsideSession from the subsystem API first
ClientsideSession clientsideSession = ...;
clientsideSession.Connect("example", 0, false);
```

### Process
`public void Process()`

**Purpose:** **Purpose:** Executes the Process logic.

```csharp
// Obtain an instance of ClientsideSession from the subsystem API first
ClientsideSession clientsideSession = ...;
clientsideSession.Process();
```

### Tick
`public override void Tick()`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of ClientsideSession from the subsystem API first
ClientsideSession clientsideSession = ...;
clientsideSession.Tick();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ClientsideSession instance = ...;
```

## See Also

- [Area Index](../)