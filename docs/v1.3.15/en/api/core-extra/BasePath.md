<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BasePath`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BasePath

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class BasePath`
**Base:** none
**File:** `TaleWorlds.Library/BasePath.cs`

## Overview

`BasePath` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public static string Name { get; }` |

## Usage Example

```csharp
var value = new BasePath();
```

## See Also

- [Complete Class Catalog](../catalog)