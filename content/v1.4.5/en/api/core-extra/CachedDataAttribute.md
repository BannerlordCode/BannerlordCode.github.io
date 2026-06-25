---
title: "CachedDataAttribute"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CachedDataAttribute`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CachedDataAttribute

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class CachedDataAttribute : Attribute`
**Base:** `Attribute`
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/CachedDataAttribute.cs`

## Overview

`CachedDataAttribute` is a .NET attribute used to tag a type or member so runtime code or tooling can recognize it by convention.

## Mental Model

Treat `CachedDataAttribute` as a Attribute-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
[CachedDataAttribute]
public class Example { }
```

## See Also

- [Complete Class Catalog](../catalog)