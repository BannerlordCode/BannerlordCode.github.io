<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GenericGameKeyContext`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GenericGameKeyContext

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class GenericGameKeyContext : GameKeyContext`
**Base:** `GameKeyContext`
**File:** `TaleWorlds.MountAndBlade/GenericGameKeyContext.cs`

## Overview

`GenericGameKeyContext` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public static GenericGameKeyContext Current { get; }` |

## Usage Example

```csharp
var example = new GenericGameKeyContext();
```

## See Also

- [Complete Class Catalog](../catalog)