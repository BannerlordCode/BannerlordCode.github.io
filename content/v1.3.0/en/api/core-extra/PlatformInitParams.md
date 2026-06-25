---
title: "PlatformInitParams"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlatformInitParams`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PlatformInitParams

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class PlatformInitParams : Dictionary<string, object>`
**Base:** `Dictionary<string`
**File:** `TaleWorlds.Library/PlatformInitParams.cs`

## Overview

`PlatformInitParams` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var example = new PlatformInitParams();
```

## See Also

- [Complete Class Catalog](../catalog)