---
title: "DotNetHttpDriver"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DotNetHttpDriver`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DotNetHttpDriver

**Namespace:** TaleWorlds.Library.Http
**Module:** TaleWorlds.Library
**Type:** `public class DotNetHttpDriver : IHttpDriver`
**Base:** `IHttpDriver`
**File:** `TaleWorlds.Library/Http/DotNetHttpDriver.cs`

## Overview

`DotNetHttpDriver` lives in `TaleWorlds.Library.Http` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library.Http` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var value = new DotNetHttpDriver();
```

## See Also

- [Complete Class Catalog](../catalog)