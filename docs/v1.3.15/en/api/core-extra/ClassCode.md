<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClassCode`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClassCode

**Namespace:** TaleWorlds.Library.CodeGeneration
**Module:** TaleWorlds.Library
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `ClassCode` is a class in the `TaleWorlds.Library.CodeGeneration` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `IsGeneric` | `public bool IsGeneric { get; set; }` |
| `GenericTypeCount` | `public int GenericTypeCount { get; set; }` |
| `IsPartial` | `public bool IsPartial { get; }` |
| `AccessModifier` | `public ClassCodeAccessModifier AccessModifier { get; }` |
| `IsClass` | `public bool IsClass { get; }` |
| `InheritedInterfaces` | `public List<string> InheritedInterfaces { get; }` |
| `NestedClasses` | `public List<ClassCode> NestedClasses { get; }` |
| `Methods` | `public List<MethodCode> Methods { get; }` |
| `Constructors` | `public List<ConstructorCode> Constructors { get; }` |
| `Variables` | `public List<VariableCode> Variables { get; }` |
| `CommentSection` | `public CommentSection CommentSection { get; set; }` |


## Key Methods

### GenerateInto

```csharp
public void GenerateInto(CodeGenerationFile codeGenerationFile)
```

### AddVariable

```csharp
public void AddVariable(VariableCode variableCode)
```

### AddNestedClass

```csharp
public void AddNestedClass(ClassCode clasCode)
```

### AddMethod

```csharp
public void AddMethod(MethodCode methodCode)
```

### AddConsturctor

```csharp
public void AddConsturctor(ConstructorCode constructorCode)
```

### AddInterface

```csharp
public void AddInterface(string interfaceName)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)