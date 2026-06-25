---
title: "MonoNativeFunctionWrapperAttribute"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MonoNativeFunctionWrapperAttribute`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MonoNativeFunctionWrapperAttribute

**Namespace:** (global)
**Module:** (global)
**Type:** `public class MonoNativeFunctionWrapperAttribute : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.DotNet/MonoNativeFunctionWrapperAttribute.cs`

## Overview

`MonoNativeFunctionWrapperAttribute` is a .NET attribute used to tag a type or member so runtime code or tooling can recognize it by convention.

## Mental Model

Treat `MonoNativeFunctionWrapperAttribute` as a Attribute-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
[MonoNativeFunctionWrapperAttribute]
public class Example { }
```

## See Also

- [Complete Class Catalog](../catalog)