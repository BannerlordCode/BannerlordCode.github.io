<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Follower`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Follower

**Namespace:** psai.net
**Module:** psai.net
**Type:** `public struct Follower`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.PSAI/psai.net/Follower.cs`

## Overview

`Follower` lives in `psai.net` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `psai.net` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `compatibility` | `public float compatibility { get; }` |
| `snippetId` | `public int snippetId { get; }` |

## Usage Example

```csharp
var example = new Follower();
```

## See Also

- [Complete Class Catalog](../catalog)