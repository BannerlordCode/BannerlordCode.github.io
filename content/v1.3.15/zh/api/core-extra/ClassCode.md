---
title: "ClassCode"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClassCode`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClassCode

**Namespace:** TaleWorlds.Library.CodeGeneration
**Module:** TaleWorlds.Library
**Type:** `public class ClassCode`
**Base:** 无
**File:** `TaleWorlds.Library/CodeGeneration/ClassCode.cs`

## 概述

`ClassCode` 位于 `TaleWorlds.Library.CodeGeneration`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library.CodeGeneration` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
`public void GenerateInto(CodeGenerationFile codeGenerationFile)`

**用途 / Purpose:** 处理 `generate into` 相关逻辑。

### AddVariable
`public void AddVariable(VariableCode variableCode)`

**用途 / Purpose:** 向当前集合/状态中添加 `variable`。

### AddNestedClass
`public void AddNestedClass(ClassCode clasCode)`

**用途 / Purpose:** 向当前集合/状态中添加 `nested class`。

### AddMethod
`public void AddMethod(MethodCode methodCode)`

**用途 / Purpose:** 向当前集合/状态中添加 `method`。

### AddConsturctor
`public void AddConsturctor(ConstructorCode constructorCode)`

**用途 / Purpose:** 向当前集合/状态中添加 `consturctor`。

### AddInterface
`public void AddInterface(string interfaceName)`

**用途 / Purpose:** 向当前集合/状态中添加 `interface`。

## 使用示例

```csharp
var value = new ClassCode();
value.GenerateInto(codeGenerationFile);
```

## 参见

- [完整类目录](../catalog)