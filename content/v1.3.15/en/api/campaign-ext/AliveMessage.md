---
title: "AliveMessage"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AliveMessage`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AliveMessage

**Namespace:** TaleWorlds.Diamond.Rest
**Module:** TaleWorlds.Diamond
**Type:** `public class AliveMessage : RestRequestMessage`
**Base:** `RestRequestMessage`
**File:** `TaleWorlds.Diamond/Rest/AliveMessage.cs`

## Overview

`AliveMessage` lives in `TaleWorlds.Diamond.Rest` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond.Rest` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SessionCredentials` | `public SessionCredentials SessionCredentials { get; }` |

## Usage Example

```csharp
var value = new AliveMessage();
```

## See Also

- [Complete Class Catalog](../catalog)