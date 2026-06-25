---
title: "BannerExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerExtensions`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerExtensions

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class BannerExtensions`
**Area:** core-extra

## Overview

`BannerExtensions` lives in `TaleWorlds.Core`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsContentsSameWith
`public static bool IsContentsSameWith(this Banner banner, Banner otherBanner)`

**Purpose:** Handles logic related to `is contents same with`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
BannerExtensions.IsContentsSameWith(banner, otherBanner);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
