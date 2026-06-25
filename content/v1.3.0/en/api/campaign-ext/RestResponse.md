---
title: "RestResponse"
description: "Auto-generated class reference for RestResponse."
---
# RestResponse

**Namespace:** TaleWorlds.Diamond.Rest
**Module:** TaleWorlds.Diamond
**Type:** `public sealed class RestResponse : RestData`
**Base:** `RestData`
**File:** `TaleWorlds.Diamond/Rest/RestResponse.cs`

## Overview

`RestResponse` lives in `TaleWorlds.Diamond.Rest` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond.Rest` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Successful` | `public bool Successful { get; }` |
| `SuccessfulReason` | `public string SuccessfulReason { get; }` |
| `FunctionResult` | `public RestFunctionResult FunctionResult { get; set; }` |
| `UserCertificate` | `public byte UserCertificate { get; set; }` |
| `RemainingMessageCount` | `public int RemainingMessageCount { get; }` |

## Key Methods

### SetSuccessful
`public void SetSuccessful(bool successful, string successfulReason)`

**Purpose:** Assigns a new value to successful and updates the object's internal state.

```csharp
// Obtain an instance of RestResponse from the subsystem API first
RestResponse restResponse = ...;
restResponse.SetSuccessful(false, "example");
```

### Create
`public static RestResponse Create(bool successful, string successfulReason)`

**Purpose:** Creates a new instance or related entity for the this instance.

```csharp
// Static call; no instance required
RestResponse.Create(false, "example");
```

### TryDequeueMessage
`public RestResponseMessage TryDequeueMessage()`

**Purpose:** Attempts to retrieve dequeue message, usually returning success through an out parameter.

```csharp
// Obtain an instance of RestResponse from the subsystem API first
RestResponse restResponse = ...;
var result = restResponse.TryDequeueMessage();
```

### ClearMessageQueue
`public void ClearMessageQueue()`

**Purpose:** Removes all message queue from the this instance.

```csharp
// Obtain an instance of RestResponse from the subsystem API first
RestResponse restResponse = ...;
restResponse.ClearMessageQueue();
```

### EnqueueMessage
`public void EnqueueMessage(RestResponseMessage message)`

**Purpose:** Executes the EnqueueMessage logic.

```csharp
// Obtain an instance of RestResponse from the subsystem API first
RestResponse restResponse = ...;
restResponse.EnqueueMessage(message);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RestResponse restResponse = ...;
restResponse.SetSuccessful(false, "example");
```

## See Also

- [Area Index](../)