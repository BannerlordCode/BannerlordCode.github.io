<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HandlerResult`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HandlerResult

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public class HandlerResult`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Diamond/TaleWorlds.Diamond/HandlerResult.cs`

## Overview

`HandlerResult` lives in `TaleWorlds.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSuccessful` | `public bool IsSuccessful { get; }` |
| `Error` | `public string Error { get; }` |
| `NextMessage` | `public Message NextMessage { get; }` |

## Key Methods

### CreateSuccessful
`public static HandlerResult CreateSuccessful()`

**Purpose:** Creates a new `successful` instance or object.

### CreateSuccessful
`public static HandlerResult CreateSuccessful(Message nextMessage)`

**Purpose:** Creates a new `successful` instance or object.

### CreateFailed
`public static HandlerResult CreateFailed(string error)`

**Purpose:** Creates a new `failed` instance or object.

## Usage Example

```csharp
HandlerResult.CreateSuccessful();
```

## See Also

- [Complete Class Catalog](../catalog)