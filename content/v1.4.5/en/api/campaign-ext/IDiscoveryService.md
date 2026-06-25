---
title: "IDiscoveryService"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IDiscoveryService`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IDiscoveryService

**Namespace:** TaleWorlds.ServiceDiscovery.Client
**Module:** TaleWorlds.ServiceDiscovery
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.ServiceDiscovery.Client/TaleWorlds.ServiceDiscovery.Client/IDiscoveryService.cs`

## Overview

`IDiscoveryService` lives in `TaleWorlds.ServiceDiscovery.Client` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.ServiceDiscovery.Client` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
IDiscoveryService implementation = GetDiscoveryServiceImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)