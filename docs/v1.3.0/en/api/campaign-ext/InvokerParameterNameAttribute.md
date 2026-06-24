<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InvokerParameterNameAttribute`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# InvokerParameterNameAttribute

**Namespace:** JetBrains.Annotations
**Module:** JetBrains.Annotations
**Type:** `public sealed class InvokerParameterNameAttribute : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.MountAndBlade/JetBrains/Annotations/InvokerParameterNameAttribute.cs`

## Overview

`InvokerParameterNameAttribute` is a .NET attribute used to tag a type or member so runtime code or tooling can recognize it by convention.

## Mental Model

Treat `InvokerParameterNameAttribute` as a Attribute-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
[InvokerParameterNameAttribute]
public class Example { }
```

## See Also

- [Complete Class Catalog](../catalog)