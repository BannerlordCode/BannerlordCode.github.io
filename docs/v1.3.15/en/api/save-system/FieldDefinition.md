<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FieldDefinition`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FieldDefinition

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** class
**Area:** Save System

## Overview

> This is an auto-generated stub. `FieldDefinition` is a class in the `TaleWorlds.SaveSystem.Definition` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `FieldInfo` | `public FieldInfo FieldInfo { get; }` |
| `SaveableFieldAttribute` | `public SaveableFieldAttribute SaveableFieldAttribute { get; }` |
| `GetFieldValueMethod` | `public GetFieldValueDelegate GetFieldValueMethod { get; }` |


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
public void InitializeForAutoGeneration(GetFieldValueDelegate getFieldValueMethod)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)