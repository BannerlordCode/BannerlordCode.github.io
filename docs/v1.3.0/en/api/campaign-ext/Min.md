<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Min`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Min

**Namespace:** TaleWorlds.LinQuick
**Module:** TaleWorlds.LinQuick
**Type:** `public class Min`
**Base:** none
**File:** `TaleWorlds.LinQuick/Min.cs`

## Overview

`Min` lives in `TaleWorlds.LinQuick` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.LinQuick` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var example = new Min();
```

## See Also

- [Complete Class Catalog](../catalog)