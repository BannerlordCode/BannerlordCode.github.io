---
title: "ApplicationVersion"
description: "ApplicationVersion 的自动生成类参考。"
---
# ApplicationVersion

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct ApplicationVersion`
**Base:** 无
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/ApplicationVersion.cs`

## 概述

`ApplicationVersion` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ApplicationVersionType` | `public ApplicationVersionType ApplicationVersionType { get; }` |
| `Major` | `public int Major { get; }` |
| `Minor` | `public int Minor { get; }` |
| `Revision` | `public int Revision { get; }` |
| `ChangeSet` | `public int ChangeSet { get; }` |

## 主要方法

### FromParametersFile
`public static ApplicationVersion FromParametersFile(string customParameterFilePath = null)`

**用途 / Purpose:** 调用 FromParametersFile 对应的操作。

```csharp
// 静态调用，不需要实例
ApplicationVersion.FromParametersFile("example");
```

### FromString
`public static ApplicationVersion FromString(string versionAsString, int defaultChangeSet = 0)`

**用途 / Purpose:** 调用 FromString 对应的操作。

```csharp
// 静态调用，不需要实例
ApplicationVersion.FromString("example", 0);
```

### IsSame
`public bool IsSame(ApplicationVersion other, bool checkChangeSet)`

**用途 / Purpose:** 判断当前对象是否处于 same 状态或条件。

```csharp
// 先通过子系统 API 拿到 ApplicationVersion 实例
ApplicationVersion applicationVersion = ...;
var result = applicationVersion.IsSame(other, false);
```

### IsOlderThan
`public bool IsOlderThan(ApplicationVersion other)`

**用途 / Purpose:** 判断当前对象是否处于 older than 状态或条件。

```csharp
// 先通过子系统 API 拿到 ApplicationVersion 实例
ApplicationVersion applicationVersion = ...;
var result = applicationVersion.IsOlderThan(other);
```

### IsNewerThan
`public bool IsNewerThan(ApplicationVersion other)`

**用途 / Purpose:** 判断当前对象是否处于 newer than 状态或条件。

```csharp
// 先通过子系统 API 拿到 ApplicationVersion 实例
ApplicationVersion applicationVersion = ...;
var result = applicationVersion.IsNewerThan(other);
```

### ApplicationVersionTypeFromString
`public static ApplicationVersionType ApplicationVersionTypeFromString(string applicationVersionTypeAsString)`

**用途 / Purpose:** 调用 ApplicationVersionTypeFromString 对应的操作。

```csharp
// 静态调用，不需要实例
ApplicationVersion.ApplicationVersionTypeFromString("example");
```

### GetPrefix
`public static string GetPrefix(ApplicationVersionType applicationVersionType)`

**用途 / Purpose:** 读取并返回当前对象中 prefix 的结果。

```csharp
// 静态调用，不需要实例
ApplicationVersion.GetPrefix(applicationVersionType);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 ApplicationVersion 实例
ApplicationVersion applicationVersion = ...;
var result = applicationVersion.ToString();
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 ApplicationVersion 实例
ApplicationVersion applicationVersion = ...;
var result = applicationVersion.GetHashCode();
```

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 ApplicationVersion 实例
ApplicationVersion applicationVersion = ...;
var result = applicationVersion.Equals(obj);
```

## 使用示例

```csharp
ApplicationVersion.FromParametersFile("example");
```

## 参见

- [本区域目录](../)