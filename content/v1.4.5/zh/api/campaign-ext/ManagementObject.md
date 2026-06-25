---
title: "ManagementObject"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ManagementObject`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ManagementObject

**Namespace:** System.Management
**Module:** System.Management
**Type:** `public class ManagementObject : ManagementBaseObject, ICloneable`
**Base:** `ManagementBaseObject`
**File:** `Bannerlord.Source/bin/System.Management/System.Management/ManagementObject.cs`

## 概述

`ManagementObject` 位于 `System.Management`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `System.Management` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ClassPath` | `public override ManagementPath ClassPath { get; }` |
| `Options` | `public ObjectGetOptions Options { get; set; }` |
| `Path` | `public virtual ManagementPath Path { get; set; }` |
| `Scope` | `public ManagementScope Scope { get; set; }` |

## 主要方法

### Clone
`public override object Clone()`

**用途 / Purpose:** 处理 `clone` 相关逻辑。

### CopyTo
`public void CopyTo(ManagementOperationObserver watcher, ManagementPath path)`

**用途 / Purpose:** 处理 `copy to` 相关逻辑。

### CopyTo
`public void CopyTo(ManagementOperationObserver watcher, ManagementPath path, PutOptions options)`

**用途 / Purpose:** 处理 `copy to` 相关逻辑。

### CopyTo
`public void CopyTo(ManagementOperationObserver watcher, string path)`

**用途 / Purpose:** 处理 `copy to` 相关逻辑。

### CopyTo
`public void CopyTo(ManagementOperationObserver watcher, string path, PutOptions options)`

**用途 / Purpose:** 处理 `copy to` 相关逻辑。

### CopyTo
`public ManagementPath CopyTo(ManagementPath path)`

**用途 / Purpose:** 处理 `copy to` 相关逻辑。

### CopyTo
`public ManagementPath CopyTo(ManagementPath path, PutOptions options)`

**用途 / Purpose:** 处理 `copy to` 相关逻辑。

### CopyTo
`public ManagementPath CopyTo(string path)`

**用途 / Purpose:** 处理 `copy to` 相关逻辑。

### CopyTo
`public ManagementPath CopyTo(string path, PutOptions options)`

**用途 / Purpose:** 处理 `copy to` 相关逻辑。

### Delete
`public void Delete()`

**用途 / Purpose:** 处理 `delete` 相关逻辑。

### Delete
`public void Delete(DeleteOptions options)`

**用途 / Purpose:** 处理 `delete` 相关逻辑。

### Delete
`public void Delete(ManagementOperationObserver watcher)`

**用途 / Purpose:** 处理 `delete` 相关逻辑。

### Delete
`public void Delete(ManagementOperationObserver watcher, DeleteOptions options)`

**用途 / Purpose:** 处理 `delete` 相关逻辑。

### Dispose
`public new void Dispose()`

**用途 / Purpose:** 处理 `dispose` 相关逻辑。

### Get
`public void Get()`

**用途 / Purpose:** 获取 `get` 的当前值。

### Get
`public void Get(ManagementOperationObserver watcher)`

**用途 / Purpose:** 获取 `get` 的当前值。

### GetMethodParameters
`public ManagementBaseObject GetMethodParameters(string methodName)`

**用途 / Purpose:** 获取 `method parameters` 的当前值。

### GetRelated
`public ManagementObjectCollection GetRelated()`

**用途 / Purpose:** 获取 `related` 的当前值。

### GetRelated
`public void GetRelated(ManagementOperationObserver watcher)`

**用途 / Purpose:** 获取 `related` 的当前值。

### GetRelated
`public void GetRelated(ManagementOperationObserver watcher, string relatedClass)`

**用途 / Purpose:** 获取 `related` 的当前值。

### GetRelated
`public void GetRelated(ManagementOperationObserver watcher, string relatedClass, string relationshipClass, string relationshipQualifier, string relatedQualifier, string relatedRole, string thisRole, bool classDefinitionsOnly, EnumerationOptions options)`

**用途 / Purpose:** 获取 `related` 的当前值。

### GetRelated
`public ManagementObjectCollection GetRelated(string relatedClass)`

**用途 / Purpose:** 获取 `related` 的当前值。

### GetRelated
`public ManagementObjectCollection GetRelated(string relatedClass, string relationshipClass, string relationshipQualifier, string relatedQualifier, string relatedRole, string thisRole, bool classDefinitionsOnly, EnumerationOptions options)`

**用途 / Purpose:** 获取 `related` 的当前值。

### GetRelationships
`public ManagementObjectCollection GetRelationships()`

**用途 / Purpose:** 获取 `relationships` 的当前值。

### GetRelationships
`public void GetRelationships(ManagementOperationObserver watcher)`

**用途 / Purpose:** 获取 `relationships` 的当前值。

### GetRelationships
`public void GetRelationships(ManagementOperationObserver watcher, string relationshipClass)`

**用途 / Purpose:** 获取 `relationships` 的当前值。

### GetRelationships
`public void GetRelationships(ManagementOperationObserver watcher, string relationshipClass, string relationshipQualifier, string thisRole, bool classDefinitionsOnly, EnumerationOptions options)`

**用途 / Purpose:** 获取 `relationships` 的当前值。

### GetRelationships
`public ManagementObjectCollection GetRelationships(string relationshipClass)`

**用途 / Purpose:** 获取 `relationships` 的当前值。

### GetRelationships
`public ManagementObjectCollection GetRelationships(string relationshipClass, string relationshipQualifier, string thisRole, bool classDefinitionsOnly, EnumerationOptions options)`

**用途 / Purpose:** 获取 `relationships` 的当前值。

### InvokeMethod
`public void InvokeMethod(ManagementOperationObserver watcher, string methodName, ManagementBaseObject inParameters, InvokeMethodOptions options)`

**用途 / Purpose:** 处理 `invoke method` 相关逻辑。

### InvokeMethod
`public void InvokeMethod(ManagementOperationObserver watcher, string methodName, object args)`

**用途 / Purpose:** 处理 `invoke method` 相关逻辑。

### InvokeMethod
`public ManagementBaseObject InvokeMethod(string methodName, ManagementBaseObject inParameters, InvokeMethodOptions options)`

**用途 / Purpose:** 处理 `invoke method` 相关逻辑。

### InvokeMethod
`public object InvokeMethod(string methodName, object args)`

**用途 / Purpose:** 处理 `invoke method` 相关逻辑。

### Put
`public ManagementPath Put()`

**用途 / Purpose:** 处理 `put` 相关逻辑。

### Put
`public void Put(ManagementOperationObserver watcher)`

**用途 / Purpose:** 处理 `put` 相关逻辑。

### Put
`public void Put(ManagementOperationObserver watcher, PutOptions options)`

**用途 / Purpose:** 处理 `put` 相关逻辑。

### Put
`public ManagementPath Put(PutOptions options)`

**用途 / Purpose:** 处理 `put` 相关逻辑。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

## 使用示例

```csharp
var value = new ManagementObject();
value.Clone();
```

## 参见

- [完整类目录](../catalog)