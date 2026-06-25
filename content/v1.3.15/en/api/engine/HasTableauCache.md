---
title: "HasTableauCache"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HasTableauCache`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HasTableauCache

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class HasTableauCache : Attribute`
**Base:** `Attribute`
**Area:** engine

## Overview

`HasTableauCache` lives in `TaleWorlds.Engine`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TableauCacheType` | `public Type TableauCacheType { get; }` |
| `MaterialCacheIDGetType` | `public Type MaterialCacheIDGetType { get; }` |

## Key Methods

### CollectTableauCacheTypes
`public static void CollectTableauCacheTypes()`

**Purpose:** Handles logic related to `collect tableau cache types`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
HasTableauCache.CollectTableauCacheTypes();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)
