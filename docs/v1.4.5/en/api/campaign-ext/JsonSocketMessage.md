<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JsonSocketMessage`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JsonSocketMessage

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class JsonSocketMessage`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Network/TaleWorlds.Network/JsonSocketMessage.cs`

## Overview

`JsonSocketMessage` lives in `TaleWorlds.Network` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Network` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MessageInfo` | `public MessageInfo MessageInfo { get; }` |

## Key Methods

### GetTypeId
`public static string GetTypeId(Type messageType)`

**Purpose:** Gets the current value of `type id`.

### GetMessageDictionary
`public static Dictionary<string, Type> GetMessageDictionary()`

**Purpose:** Gets the current value of `message dictionary`.

## Usage Example

```csharp
JsonSocketMessage.GetTypeId(messageType);
```

## See Also

- [Complete Class Catalog](../catalog)