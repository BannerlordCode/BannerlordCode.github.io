---
title: "ClientRestSessionTask"
description: "Auto-generated class reference for ClientRestSessionTask."
---
# ClientRestSessionTask

**Namespace:** TaleWorlds.Diamond.Rest
**Module:** TaleWorlds.Diamond
**Type:** `internal class ClientRestSessionTask`
**Base:** none
**File:** `TaleWorlds.Diamond/Rest/ClientRestSessionTask.cs`

## Overview

`ClientRestSessionTask` lives in `TaleWorlds.Diamond.Rest` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond.Rest` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RestRequestMessage` | `public RestRequestMessage RestRequestMessage { get; }` |
| `Finished` | `public bool Finished { get; }` |
| `Successful` | `public bool Successful { get; }` |
| `Request` | `public IHttpRequestTask Request { get; }` |
| `RestResponse` | `public RestResponse RestResponse { get; }` |
| `IsCompletelyFinished` | `public bool IsCompletelyFinished { get; }` |

## Key Methods

### SetRequestData
`public void SetRequestData(byte userCertificate, string address, IHttpDriver networkClient)`

**Purpose:** **Purpose:** Assigns a new value to request data and updates the object's internal state.

```csharp
// Obtain an instance of ClientRestSessionTask from the subsystem API first
ClientRestSessionTask clientRestSessionTask = ...;
clientRestSessionTask.SetRequestData(0, "example", networkClient);
```

### Tick
`public void Tick()`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of ClientRestSessionTask from the subsystem API first
ClientRestSessionTask clientRestSessionTask = ...;
clientRestSessionTask.Tick();
```

### WaitUntilFinished
`public async Task WaitUntilFinished()`

**Purpose:** **Purpose:** Pauses the current flow until the until finished condition is met.

```csharp
// Obtain an instance of ClientRestSessionTask from the subsystem API first
ClientRestSessionTask clientRestSessionTask = ...;
var result = clientRestSessionTask.WaitUntilFinished();
```

### SetFinishedAsSuccessful
`public void SetFinishedAsSuccessful(RestResponse restResponse)`

**Purpose:** **Purpose:** Assigns a new value to finished as successful and updates the object's internal state.

```csharp
// Obtain an instance of ClientRestSessionTask from the subsystem API first
ClientRestSessionTask clientRestSessionTask = ...;
clientRestSessionTask.SetFinishedAsSuccessful(restResponse);
```

### SetFinishedAsFailed
`public void SetFinishedAsFailed()`

**Purpose:** **Purpose:** Assigns a new value to finished as failed and updates the object's internal state.

```csharp
// Obtain an instance of ClientRestSessionTask from the subsystem API first
ClientRestSessionTask clientRestSessionTask = ...;
clientRestSessionTask.SetFinishedAsFailed();
```

### SetFinishedAsFailed
`public void SetFinishedAsFailed(RestResponse restResponse)`

**Purpose:** **Purpose:** Assigns a new value to finished as failed and updates the object's internal state.

```csharp
// Obtain an instance of ClientRestSessionTask from the subsystem API first
ClientRestSessionTask clientRestSessionTask = ...;
clientRestSessionTask.SetFinishedAsFailed(restResponse);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ClientRestSessionTask clientRestSessionTask = ...;
clientRestSessionTask.SetRequestData(0, "example", networkClient);
```

## See Also

- [Area Index](../)