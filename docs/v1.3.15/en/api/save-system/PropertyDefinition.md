<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PropertyDefinition`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PropertyDefinition

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** class
**Area:** Save System

## Overview

> This is an auto-generated stub. `PropertyDefinition` is a class in the `TaleWorlds.SaveSystem.Definition` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `PropertyInfo` | `public PropertyInfo PropertyInfo { get; }` |
| `SaveablePropertyAttribute` | `public SaveablePropertyAttribute SaveablePropertyAttribute { get; }` |
| `GetMethod` | `public MethodInfo GetMethod { get; }` |
| `SetMethod` | `public MethodInfo SetMethod { get; }` |
| `GetPropertyValueMethod` | `public GetPropertyValueDelegate GetPropertyValueMethod { get; }` |


## Key Methods

### GetMemberType

```csharp
public override Type GetMemberType()
```

### GetValue

```csharp
public override object GetValue(object target)
```

### InitializeForAutoGeneration

```csharp
public void InitializeForAutoGeneration(GetPropertyValueDelegate getPropertyValueMethod)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)