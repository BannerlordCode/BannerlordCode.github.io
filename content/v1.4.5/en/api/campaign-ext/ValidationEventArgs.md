---
title: "ValidationEventArgs"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ValidationEventArgs`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ValidationEventArgs

**Namespace:** Newtonsoft.Json.Schema
**Module:** Newtonsoft.Json
**Type:** `public class ValidationEventArgs : EventArgs`
**Base:** `EventArgs`
**File:** `Bannerlord.Source/bin/Newtonsoft.Json/Newtonsoft.Json.Schema/ValidationEventArgs.cs`

## Overview

`ValidationEventArgs` lives in `Newtonsoft.Json.Schema` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Newtonsoft.Json.Schema` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var example = new ValidationEventArgs();
```

## See Also

- [Complete Class Catalog](../catalog)