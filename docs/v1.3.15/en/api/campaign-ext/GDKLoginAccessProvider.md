<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GDKLoginAccessProvider`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GDKLoginAccessProvider

**Namespace:** TaleWorlds.Diamond.AccessProvider.GDK
**Module:** TaleWorlds.Diamond
**Type:** `public class GDKLoginAccessProvider : ILoginAccessProvider`
**Base:** `ILoginAccessProvider`
**File:** `TaleWorlds.Diamond.AccessProvider.GDK/GDKLoginAccessProvider.cs`

## Overview

`GDKLoginAccessProvider` lives in `TaleWorlds.Diamond.AccessProvider.GDK` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond.AccessProvider.GDK` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var value = new GDKLoginAccessProvider();
```

## See Also

- [Complete Class Catalog](../catalog)