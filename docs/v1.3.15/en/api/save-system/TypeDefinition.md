<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TypeDefinition`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TypeDefinition

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** class
**Area:** Save System

## Overview

> This is an auto-generated stub. `TypeDefinition` is a class in the `TaleWorlds.SaveSystem.Definition` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `MemberDefinitions` | `public List<MemberDefinition> MemberDefinitions { get; }` |
| `InitializationCallbacks` | `public IEnumerable<MethodInfo> InitializationCallbacks { get; }` |
| `LateInitializationCallbacks` | `public IEnumerable<MethodInfo> LateInitializationCallbacks { get; }` |
| `Errors` | `public IEnumerable<string> Errors { get; }` |
| `IsClassDefinition` | `public bool IsClassDefinition { get; }` |
| `CustomFields` | `public List<CustomField> CustomFields { get; }` |
| `CollectObjectsMethod` | `public CollectObjectsDelegate CollectObjectsMethod { get; }` |
| `PropertyDefinitions` | `public Dictionary<MemberTypeId, PropertyDefinition>.ValueCollection PropertyDefinitions { get; }` |
| `FieldDefinitions` | `public Dictionary<MemberTypeId, FieldDefinition>.ValueCollection FieldDefinitions { get; }` |


## Key Methods

### CheckIfRequiresAdvancedResolving

```csharp
public bool CheckIfRequiresAdvancedResolving(object originalObject)
```

### ResolveObject

```csharp
public object ResolveObject(object originalObject)
```

### AdvancedResolveObject

```csharp
public object AdvancedResolveObject(object originalObject, MetaData metaData, ObjectLoadData objectLoadData)
```

### CollectInitializationCallbacks

```csharp
public void CollectInitializationCallbacks()
```

### CollectProperties

```csharp
public void CollectProperties()
```

### CollectFields

```csharp
public void CollectFields()
```

### AddCustomField

```csharp
public void AddCustomField(string fieldName, short saveId)
```

### GetPropertyDefinitionWithId

```csharp
public PropertyDefinition GetPropertyDefinitionWithId(MemberTypeId id)
```

### GetFieldDefinitionWithId

```csharp
public FieldDefinition GetFieldDefinitionWithId(MemberTypeId id)
```

### InitializeForAutoGeneration

```csharp
public void InitializeForAutoGeneration(CollectObjectsDelegate collectObjectsDelegate)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)