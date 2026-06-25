---
title: "PathReferenceAttribute"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PathReferenceAttribute`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PathReferenceAttribute

**Namespace:** JetBrains.Annotations
**Module:** JetBrains.Annotations
**Type:** `public class PathReferenceAttribute : Attribute`
**Base:** `Attribute`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/JetBrains.Annotations/PathReferenceAttribute.cs`

## Overview

`PathReferenceAttribute` is a .NET attribute used to tag a type or member so runtime code or tooling can recognize it by convention.

## Mental Model

Treat `PathReferenceAttribute` as a Attribute-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `BasePath` | `public string BasePath { get; }` |

## Usage Example

```csharp
[PathReferenceAttribute]
public class Example { }
```

## See Also

- [Complete Class Catalog](../catalog)