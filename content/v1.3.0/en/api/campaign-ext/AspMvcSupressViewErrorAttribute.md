---
title: "AspMvcSupressViewErrorAttribute"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AspMvcSupressViewErrorAttribute`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AspMvcSupressViewErrorAttribute

**Namespace:** JetBrains.Annotations
**Module:** JetBrains.Annotations
**Type:** `public sealed class AspMvcSupressViewErrorAttribute : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.MountAndBlade/JetBrains/Annotations/AspMvcSupressViewErrorAttribute.cs`

## Overview

`AspMvcSupressViewErrorAttribute` is a .NET attribute used to tag a type or member so runtime code or tooling can recognize it by convention.

## Mental Model

Treat `AspMvcSupressViewErrorAttribute` as a Attribute-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
[AspMvcSupressViewErrorAttribute]
public class Example { }
```

## See Also

- [Complete Class Catalog](../catalog)