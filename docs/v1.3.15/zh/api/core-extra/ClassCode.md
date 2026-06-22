<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClassCode`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClassCode

**命名空间:** TaleWorlds.Library.CodeGeneration
**模块:** TaleWorlds.Library
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`ClassCode` 是 `TaleWorlds.Library.CodeGeneration` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)