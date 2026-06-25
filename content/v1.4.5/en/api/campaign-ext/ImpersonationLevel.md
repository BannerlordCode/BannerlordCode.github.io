---
title: "ImpersonationLevel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ImpersonationLevel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ImpersonationLevel

**Namespace:** System.Management
**Module:** System.Management
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/bin/System.Management/System.Management/ImpersonationLevel.cs`

## Overview

`ImpersonationLevel` lives in `System.Management` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `System.Management` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var value = new ImpersonationLevel();
```

## See Also

- [Complete Class Catalog](../catalog)