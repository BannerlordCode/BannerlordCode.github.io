---
title: "JsonSocketMessage"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JsonSocketMessage`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# JsonSocketMessage

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class JsonSocketMessage`
**Area:** campaign-ext

## Overview

`JsonSocketMessage` lives in `TaleWorlds.Network`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Network` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MessageInfo` | `public MessageInfo MessageInfo { get; }` |
| `SocketMessageTypeId` | `public string SocketMessageTypeId { get; }` |

## Key Methods

### GetTypeId
`public static string GetTypeId(Type messageType)`

**Purpose:** Gets the current value of `type id`.

### GetMessageDictionary
`public static Dictionary<string, Type> GetMessageDictionary()`

**Purpose:** Gets the current value of `message dictionary`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
JsonSocketMessage.GetTypeId(messageType);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
