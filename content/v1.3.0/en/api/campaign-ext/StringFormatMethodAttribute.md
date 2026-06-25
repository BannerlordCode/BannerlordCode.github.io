---
title: "StringFormatMethodAttribute"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StringFormatMethodAttribute`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StringFormatMethodAttribute

**Namespace:** JetBrains.Annotations
**Module:** JetBrains.Annotations
**Type:** `public sealed class StringFormatMethodAttribute : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.MountAndBlade/JetBrains/Annotations/StringFormatMethodAttribute.cs`

## Overview

`StringFormatMethodAttribute` is a .NET attribute used to tag a type or member so runtime code or tooling can recognize it by convention.

## Mental Model

Treat `StringFormatMethodAttribute` as a Attribute-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `FormatParameterName` | `public string FormatParameterName { get; }` |

## Usage Example

```csharp
[StringFormatMethodAttribute]
public class Example { }
```

## See Also

- [Complete Class Catalog](../catalog)