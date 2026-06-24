<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MeansImplicitUseAttribute`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MeansImplicitUseAttribute

**Namespace:** JetBrains.Annotations
**Module:** JetBrains.Annotations
**Type:** `public sealed class MeansImplicitUseAttribute : Attribute`
**Base:** `Attribute`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/JetBrains.Annotations/MeansImplicitUseAttribute.cs`

## Overview

`MeansImplicitUseAttribute` is a .NET attribute used to tag a type or member so runtime code or tooling can recognize it by convention.

## Mental Model

Treat `MeansImplicitUseAttribute` as a Attribute-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `UseKindFlags` | `public ImplicitUseKindFlags UseKindFlags { get; }` |
| `TargetFlags` | `public ImplicitUseTargetFlags TargetFlags { get; }` |

## Usage Example

```csharp
[MeansImplicitUseAttribute]
public class Example { }
```

## See Also

- [Complete Class Catalog](../catalog)