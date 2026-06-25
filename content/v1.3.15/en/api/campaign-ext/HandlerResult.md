---
title: "HandlerResult"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HandlerResult`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HandlerResult

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public class HandlerResult`
**Area:** campaign-ext

## Overview

`HandlerResult` lives in `TaleWorlds.Diamond`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// Prepare the required context, then call the static entry point directly
HandlerResult.CreateSuccessful();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
