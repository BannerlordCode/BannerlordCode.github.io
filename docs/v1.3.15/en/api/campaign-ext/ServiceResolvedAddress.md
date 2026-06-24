<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ServiceResolvedAddress`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ServiceResolvedAddress

**Namespace:** TaleWorlds.ServiceDiscovery.Client
**Module:** TaleWorlds.ServiceDiscovery
**Type:** `public class ServiceResolvedAddress`
**Base:** none
**File:** `TaleWorlds.ServiceDiscovery.Client/ServiceResolvedAddress.cs`

## Overview

`ServiceResolvedAddress` lives in `TaleWorlds.ServiceDiscovery.Client` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.ServiceDiscovery.Client` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Address` | `public string Address { get; }` |
| `Tags` | `public string Tags { get; }` |

## Usage Example

```csharp
var value = new ServiceResolvedAddress();
```

## See Also

- [Complete Class Catalog](../catalog)