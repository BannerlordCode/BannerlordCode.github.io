<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RestResponse`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Sets the value or state of `successful`.

### Create
`public static RestResponse Create(bool successful, string successfulReason)`

**Purpose:** Creates a new `create` instance or object.

### TryDequeueMessage
`public RestResponseMessage TryDequeueMessage()`

**Purpose:** Attempts to get `dequeue message`, usually returning the result in an out parameter.

### ClearMessageQueue
`public void ClearMessageQueue()`

**Purpose:** Handles logic related to `clear message queue`.

### EnqueueMessage
`public void EnqueueMessage(RestResponseMessage message)`

**Purpose:** Handles logic related to `enqueue message`.

## Usage Example

```csharp
var value = new RestResponse();
value.SetSuccessful(false, "example");
```

## See Also

- [Complete Class Catalog](../catalog)