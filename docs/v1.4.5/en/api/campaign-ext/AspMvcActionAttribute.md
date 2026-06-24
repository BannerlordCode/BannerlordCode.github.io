<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AspMvcActionAttribute`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AspMvcActionAttribute

**Namespace:** JetBrains.Annotations
**Module:** JetBrains.Annotations
**Type:** `public sealed class AspMvcActionAttribute : Attribute`
**Base:** `Attribute`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/JetBrains.Annotations/AspMvcActionAttribute.cs`

## Overview

`AspMvcActionAttribute` is a .NET attribute used to tag a type or member so runtime code or tooling can recognize it by convention.

## Mental Model

Treat `AspMvcActionAttribute` as a Attribute-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AnonymousProperty` | `public string AnonymousProperty { get; }` |

## Usage Example

```csharp
[AspMvcActionAttribute]
public class Example { }
```

## See Also

- [Complete Class Catalog](../catalog)