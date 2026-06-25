---
title: "GameServerChangeRequested_t"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameServerChangeRequested_t`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameServerChangeRequested_t

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public struct GameServerChangeRequested_t`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/GameServerChangeRequested_t.cs`

## Overview

`GameServerChangeRequested_t` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `m_rgchServer` | `public string m_rgchServer { get; set; }` |
| `m_rgchPassword` | `public string m_rgchPassword { get; set; }` |

## Usage Example

```csharp
var example = new GameServerChangeRequested_t();
```

## See Also

- [Complete Class Catalog](../catalog)