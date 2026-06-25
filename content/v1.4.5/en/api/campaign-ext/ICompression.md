---
title: "ICompression"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ICompression`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ICompression

**Namespace:** Jose
**Module:** Jose
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/bin/jose-jwt/Jose/ICompression.cs`

## Overview

`ICompression` lives in `Jose` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Jose` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
ICompression implementation = GetCompressionImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)