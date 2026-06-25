---
title: "Base64Url"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Base64Url`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Base64Url

**Namespace:** Jose
**Module:** Jose
**Type:** `public static class Base64Url`
**Area:** campaign-ext

## Overview

`Base64Url` lives in `Jose`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `Jose` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Encode
`public static string Encode(byte input)`

**Purpose:** Handles logic related to `encode`.

### Decode
`public static byte Decode(string input)`

**Purpose:** Handles logic related to `decode`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
Base64Url.Encode(0);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
