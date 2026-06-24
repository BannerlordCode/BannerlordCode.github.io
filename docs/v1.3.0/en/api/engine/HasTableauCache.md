<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HasTableauCache`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HasTableauCache

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class HasTableauCache : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.Engine/HasTableauCache.cs`

## Overview

`HasTableauCache` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
HasTableauCache.CollectTableauCacheTypes();
```

## See Also

- [Complete Class Catalog](../catalog)