---
title: "Win64_Shipping_Client"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Win64_Shipping_Client`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Win64_Shipping_Client

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class Win64_Shipping_Client`
**Area:** core-extra

## Overview

`Win64_Shipping_Client` lives in `TaleWorlds.Library`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetFileContent
`public static string GetFileContent(string filePath, Type type = null)`

**Purpose:** Gets the current value of `file content`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
Win64_Shipping_Client.GetFileContent("example", null);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
