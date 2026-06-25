---
title: "Collections"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Collections`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Collections

**Namespace:** Jose
**Module:** Jose
**Type:** `public class Collections`
**Area:** campaign-ext

## Overview

`Collections` lives in `Jose`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `Jose` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Union
`public static string Union(string src, object other)`

**Purpose:** Handles logic related to `union`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
Collections.Union("example", other);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
