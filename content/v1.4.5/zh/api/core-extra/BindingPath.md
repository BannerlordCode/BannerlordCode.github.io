---
title: "BindingPath"
description: "BindingPath 的自动生成类参考。"
---
# BindingPath

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class BindingPath`
**Base:** 无
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/BindingPath.cs`

## 概述

`BindingPath` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Nodes` | `public string Nodes { get; }` |
| `LastNode` | `public string LastNode { get; }` |
| `SubPath` | `public BindingPath SubPath { get; }` |
| `ParentPath` | `public BindingPath ParentPath { get; }` |

## 主要方法

### CreateFromProperty
`public static BindingPath CreateFromProperty(string propertyName)`

**用途 / Purpose:** 构建一个新的 from property 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
BindingPath.CreateFromProperty("example");
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 BindingPath 实例
BindingPath bindingPath = ...;
var result = bindingPath.GetHashCode();
```

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 BindingPath 实例
BindingPath bindingPath = ...;
var result = bindingPath.Equals(obj);
```

### IsRelatedWithPathAsString
`public static bool IsRelatedWithPathAsString(string path, string referencePath)`

**用途 / Purpose:** 判断当前对象是否处于 related with path as string 状态或条件。

```csharp
// 静态调用，不需要实例
BindingPath.IsRelatedWithPathAsString("example", "example");
```

### IsRelatedWithPath
`public static bool IsRelatedWithPath(string path, BindingPath referencePath)`

**用途 / Purpose:** 判断当前对象是否处于 related with path 状态或条件。

```csharp
// 静态调用，不需要实例
BindingPath.IsRelatedWithPath("example", referencePath);
```

### IsRelatedWith
`public bool IsRelatedWith(BindingPath referencePath)`

**用途 / Purpose:** 判断当前对象是否处于 related with 状态或条件。

```csharp
// 先通过子系统 API 拿到 BindingPath 实例
BindingPath bindingPath = ...;
var result = bindingPath.IsRelatedWith(referencePath);
```

### DecrementIfRelatedWith
`public void DecrementIfRelatedWith(BindingPath path, int startIndex)`

**用途 / Purpose:** 调用 DecrementIfRelatedWith 对应的操作。

```csharp
// 先通过子系统 API 拿到 BindingPath 实例
BindingPath bindingPath = ...;
bindingPath.DecrementIfRelatedWith(path, 0);
```

### Simplify
`public BindingPath Simplify()`

**用途 / Purpose:** 调用 Simplify 对应的操作。

```csharp
// 先通过子系统 API 拿到 BindingPath 实例
BindingPath bindingPath = ...;
var result = bindingPath.Simplify();
```

### Append
`public BindingPath Append(BindingPath bindingPath)`

**用途 / Purpose:** 将append追加到当前集合或序列末尾。

```csharp
// 先通过子系统 API 拿到 BindingPath 实例
BindingPath bindingPath = ...;
var result = bindingPath.Append(bindingPath);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 BindingPath 实例
BindingPath bindingPath = ...;
var result = bindingPath.ToString();
```

## 使用示例

```csharp
BindingPath.CreateFromProperty("example");
```

## 参见

- [本区域目录](../)