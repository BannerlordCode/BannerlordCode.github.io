---
title: "LocalizationRequiredAttribute"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LocalizationRequiredAttribute`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LocalizationRequiredAttribute

**Namespace:** JetBrains.Annotations
**Module:** JetBrains.Annotations
**Type:** `public sealed class LocalizationRequiredAttribute : Attribute`
**Base:** `Attribute`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/JetBrains.Annotations/LocalizationRequiredAttribute.cs`

## Overview

`LocalizationRequiredAttribute` is a .NET attribute used to tag a type or member so runtime code or tooling can recognize it by convention.

## Mental Model

Treat `LocalizationRequiredAttribute` as a Attribute-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Required` | `public bool Required { get; set; }` |

## Key Methods

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

## Usage Example

```csharp
[LocalizationRequiredAttribute]
public class Example { }
```

## See Also

- [Complete Class Catalog](../catalog)