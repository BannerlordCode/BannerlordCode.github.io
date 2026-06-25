---
title: "AspMvcPartialViewAttribute"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AspMvcPartialViewAttribute`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AspMvcPartialViewAttribute

**Namespace:** JetBrains.Annotations
**Module:** JetBrains.Annotations
**Type:** `public sealed class AspMvcPartialViewAttribute : PathReferenceAttribute`
**Base:** `PathReferenceAttribute`
**File:** `TaleWorlds.MountAndBlade/JetBrains/Annotations/AspMvcPartialViewAttribute.cs`

## Overview

`AspMvcPartialViewAttribute` is a .NET attribute used to tag a type or member so runtime code or tooling can recognize it by convention.

## Mental Model

Treat `AspMvcPartialViewAttribute` as a Attribute-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
[AspMvcPartialViewAttribute]
public class Example { }
```

## See Also

- [Complete Class Catalog](../catalog)