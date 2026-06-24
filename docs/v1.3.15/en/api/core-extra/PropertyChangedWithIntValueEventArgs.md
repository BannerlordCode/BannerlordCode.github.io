<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PropertyChangedWithIntValueEventArgs`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PropertyChangedWithIntValueEventArgs

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct PropertyChangedWithIntValueEventArgs`
**Base:** none
**File:** `TaleWorlds.Library/PropertyChangedWithIntValueEventArgs.cs`

## Overview

`PropertyChangedWithIntValueEventArgs` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PropertyName` | `public string PropertyName { get; }` |
| `Value` | `public int Value { get; }` |

## Usage Example

```csharp
var value = new PropertyChangedWithIntValueEventArgs();
```

## See Also

- [Complete Class Catalog](../catalog)