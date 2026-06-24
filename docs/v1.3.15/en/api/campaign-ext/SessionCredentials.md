<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SessionCredentials`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SessionCredentials

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public sealed class SessionCredentials`
**Base:** none
**File:** `TaleWorlds.Diamond/SessionCredentials.cs`

## Overview

`SessionCredentials` lives in `TaleWorlds.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PeerId` | `public PeerId PeerId { get; }` |
| `SessionKey` | `public SessionKey SessionKey { get; }` |

## Usage Example

```csharp
var value = new SessionCredentials();
```

## See Also

- [Complete Class Catalog](../catalog)