<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StackArray6Bool`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StackArray6Bool

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public struct StackArray6Bool`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/StackArray.cs`

## Overview

`StackArray6Bool` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `this` | `public bool this { get; set; }` |

## Usage Example

```csharp
var example = new StackArray6Bool();
```

## See Also

- [Complete Class Catalog](../catalog)