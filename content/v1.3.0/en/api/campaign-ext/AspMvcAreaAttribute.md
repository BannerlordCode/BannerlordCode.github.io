---
title: "AspMvcAreaAttribute"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AspMvcAreaAttribute`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AspMvcAreaAttribute

**Namespace:** JetBrains.Annotations
**Module:** JetBrains.Annotations
**Type:** `public sealed class AspMvcAreaAttribute : PathReferenceAttribute`
**Base:** `PathReferenceAttribute`
**File:** `TaleWorlds.MountAndBlade/JetBrains/Annotations/AspMvcAreaAttribute.cs`

## Overview

`AspMvcAreaAttribute` is a .NET attribute used to tag a type or member so runtime code or tooling can recognize it by convention.

## Mental Model

Treat `AspMvcAreaAttribute` as a Attribute-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AnonymousProperty` | `public string AnonymousProperty { get; }` |

## Usage Example

```csharp
[AspMvcAreaAttribute]
public class Example { }
```

## See Also

- [Complete Class Catalog](../catalog)