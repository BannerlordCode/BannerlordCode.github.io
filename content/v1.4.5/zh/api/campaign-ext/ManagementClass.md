---
title: "ManagementClass"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ManagementClass`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ManagementClass

**Namespace:** System.Management
**Module:** System.Management
**Type:** `public class ManagementClass : ManagementObject`
**Base:** `ManagementObject`
**File:** `Bannerlord.Source/bin/System.Management/System.Management/ManagementClass.cs`

## 概述

`ManagementClass` 位于 `System.Management`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `System.Management` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Derivation` | `public StringCollection Derivation { get; }` |
| `Methods` | `public MethodDataCollection Methods { get; }` |
| `Path` | `public override ManagementPath Path { get; set; }` |

## 主要方法

### Clone
`public override object Clone()`

**用途 / Purpose:** 处理 `clone` 相关逻辑。

### CreateInstance
`public ManagementObject CreateInstance()`

**用途 / Purpose:** 创建一个 `instance` 实例或对象。

### Derive
`public ManagementClass Derive(string newClassName)`

**用途 / Purpose:** 处理 `derive` 相关逻辑。

### GetInstances
`public ManagementObjectCollection GetInstances()`

**用途 / Purpose:** 获取 `instances` 的当前值。

### GetInstances
`public ManagementObjectCollection GetInstances(EnumerationOptions options)`

**用途 / Purpose:** 获取 `instances` 的当前值。

### GetInstances
`public void GetInstances(ManagementOperationObserver watcher)`

**用途 / Purpose:** 获取 `instances` 的当前值。

### GetInstances
`public void GetInstances(ManagementOperationObserver watcher, EnumerationOptions options)`

**用途 / Purpose:** 获取 `instances` 的当前值。

### GetRelatedClasses
`public ManagementObjectCollection GetRelatedClasses()`

**用途 / Purpose:** 获取 `related classes` 的当前值。

### GetRelatedClasses
`public void GetRelatedClasses(ManagementOperationObserver watcher)`

**用途 / Purpose:** 获取 `related classes` 的当前值。

### GetRelatedClasses
`public void GetRelatedClasses(ManagementOperationObserver watcher, string relatedClass)`

**用途 / Purpose:** 获取 `related classes` 的当前值。

### GetRelatedClasses
`public void GetRelatedClasses(ManagementOperationObserver watcher, string relatedClass, string relationshipClass, string relationshipQualifier, string relatedQualifier, string relatedRole, string thisRole, EnumerationOptions options)`

**用途 / Purpose:** 获取 `related classes` 的当前值。

### GetRelatedClasses
`public ManagementObjectCollection GetRelatedClasses(string relatedClass)`

**用途 / Purpose:** 获取 `related classes` 的当前值。

### GetRelatedClasses
`public ManagementObjectCollection GetRelatedClasses(string relatedClass, string relationshipClass, string relationshipQualifier, string relatedQualifier, string relatedRole, string thisRole, EnumerationOptions options)`

**用途 / Purpose:** 获取 `related classes` 的当前值。

### GetRelationshipClasses
`public ManagementObjectCollection GetRelationshipClasses()`

**用途 / Purpose:** 获取 `relationship classes` 的当前值。

### GetRelationshipClasses
`public void GetRelationshipClasses(ManagementOperationObserver watcher)`

**用途 / Purpose:** 获取 `relationship classes` 的当前值。

### GetRelationshipClasses
`public void GetRelationshipClasses(ManagementOperationObserver watcher, string relationshipClass)`

**用途 / Purpose:** 获取 `relationship classes` 的当前值。

### GetRelationshipClasses
`public void GetRelationshipClasses(ManagementOperationObserver watcher, string relationshipClass, string relationshipQualifier, string thisRole, EnumerationOptions options)`

**用途 / Purpose:** 获取 `relationship classes` 的当前值。

### GetRelationshipClasses
`public ManagementObjectCollection GetRelationshipClasses(string relationshipClass)`

**用途 / Purpose:** 获取 `relationship classes` 的当前值。

### GetRelationshipClasses
`public ManagementObjectCollection GetRelationshipClasses(string relationshipClass, string relationshipQualifier, string thisRole, EnumerationOptions options)`

**用途 / Purpose:** 获取 `relationship classes` 的当前值。

### GetStronglyTypedClassCode
`public CodeTypeDeclaration GetStronglyTypedClassCode(bool includeSystemClassInClassDef, bool systemPropertyClass)`

**用途 / Purpose:** 获取 `strongly typed class code` 的当前值。

### GetStronglyTypedClassCode
`public bool GetStronglyTypedClassCode(CodeLanguage lang, string filePath, string classNamespace)`

**用途 / Purpose:** 获取 `strongly typed class code` 的当前值。

### GetSubclasses
`public ManagementObjectCollection GetSubclasses()`

**用途 / Purpose:** 获取 `subclasses` 的当前值。

### GetSubclasses
`public ManagementObjectCollection GetSubclasses(EnumerationOptions options)`

**用途 / Purpose:** 获取 `subclasses` 的当前值。

### GetSubclasses
`public void GetSubclasses(ManagementOperationObserver watcher)`

**用途 / Purpose:** 获取 `subclasses` 的当前值。

### GetSubclasses
`public void GetSubclasses(ManagementOperationObserver watcher, EnumerationOptions options)`

**用途 / Purpose:** 获取 `subclasses` 的当前值。

## 使用示例

```csharp
var value = new ManagementClass();
value.Clone();
```

## 参见

- [完整类目录](../catalog)