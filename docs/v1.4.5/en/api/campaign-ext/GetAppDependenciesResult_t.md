<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GetAppDependenciesResult_t`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GetAppDependenciesResult_t

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public struct GetAppDependenciesResult_t`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/GetAppDependenciesResult_t.cs`

## Overview

`GetAppDependenciesResult_t` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var example = new GetAppDependenciesResult_t();
```

## See Also

- [Complete Class Catalog](../catalog)