---
title: "Extensions"
description: "Extensions 的自动生成类参考。"
---
# Extensions

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class Extensions`
**Base:** 无
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/Extensions.cs`

## 概述

`Extensions` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetTypesSafe
`public static List<Type> GetTypesSafe(this Assembly assembly, Func<Type, bool> func = null)`

**用途 / Purpose:** 读取并返回当前对象中 types safe 的结果。

```csharp
// 静态调用，不需要实例
Extensions.GetTypesSafe(assembly, func<Type, false);
```

### GetReferencingAssembliesSafe
`public static Assembly GetReferencingAssembliesSafe(this Assembly baseAssembly, Func<Assembly, bool> func = null)`

**用途 / Purpose:** 读取并返回当前对象中 referencing assemblies safe 的结果。

```csharp
// 静态调用，不需要实例
Extensions.GetReferencingAssembliesSafe(baseAssembly, func<Assembly, false);
```

### GetCustomAttributesSafe
`public static object GetCustomAttributesSafe(this Type type, Type attributeType, bool inherit)`

**用途 / Purpose:** 读取并返回当前对象中 custom attributes safe 的结果。

```csharp
// 静态调用，不需要实例
Extensions.GetCustomAttributesSafe(type, attributeType, false);
```

### GetCustomAttributesSafe
`public static object GetCustomAttributesSafe(this Type type, bool inherit)`

**用途 / Purpose:** 读取并返回当前对象中 custom attributes safe 的结果。

```csharp
// 静态调用，不需要实例
Extensions.GetCustomAttributesSafe(type, false);
```

### GetCustomAttributesSafe
`public static IEnumerable<Attribute> GetCustomAttributesSafe(this Type type, Type attributeType)`

**用途 / Purpose:** 读取并返回当前对象中 custom attributes safe 的结果。

```csharp
// 静态调用，不需要实例
Extensions.GetCustomAttributesSafe(type, attributeType);
```

### GetCustomAttributesSafe
`public static object GetCustomAttributesSafe(this PropertyInfo property, Type attributeType, bool inherit)`

**用途 / Purpose:** 读取并返回当前对象中 custom attributes safe 的结果。

```csharp
// 静态调用，不需要实例
Extensions.GetCustomAttributesSafe(property, attributeType, false);
```

### GetCustomAttributesSafe
`public static object GetCustomAttributesSafe(this PropertyInfo property, bool inherit)`

**用途 / Purpose:** 读取并返回当前对象中 custom attributes safe 的结果。

```csharp
// 静态调用，不需要实例
Extensions.GetCustomAttributesSafe(property, false);
```

### GetCustomAttributesSafe
`public static IEnumerable<Attribute> GetCustomAttributesSafe(this PropertyInfo property, Type attributeType)`

**用途 / Purpose:** 读取并返回当前对象中 custom attributes safe 的结果。

```csharp
// 静态调用，不需要实例
Extensions.GetCustomAttributesSafe(property, attributeType);
```

### GetCustomAttributesSafe
`public static object GetCustomAttributesSafe(this FieldInfo field, Type attributeType, bool inherit)`

**用途 / Purpose:** 读取并返回当前对象中 custom attributes safe 的结果。

```csharp
// 静态调用，不需要实例
Extensions.GetCustomAttributesSafe(field, attributeType, false);
```

### GetCustomAttributesSafe
`public static object GetCustomAttributesSafe(this FieldInfo field, bool inherit)`

**用途 / Purpose:** 读取并返回当前对象中 custom attributes safe 的结果。

```csharp
// 静态调用，不需要实例
Extensions.GetCustomAttributesSafe(field, false);
```

### GetCustomAttributesSafe
`public static IEnumerable<Attribute> GetCustomAttributesSafe(this FieldInfo field, Type attributeType)`

**用途 / Purpose:** 读取并返回当前对象中 custom attributes safe 的结果。

```csharp
// 静态调用，不需要实例
Extensions.GetCustomAttributesSafe(field, attributeType);
```

### GetCustomAttributesSafe
`public static object GetCustomAttributesSafe(this MethodInfo method, Type attributeType, bool inherit)`

**用途 / Purpose:** 读取并返回当前对象中 custom attributes safe 的结果。

```csharp
// 静态调用，不需要实例
Extensions.GetCustomAttributesSafe(method, attributeType, false);
```

### GetCustomAttributesSafe
`public static object GetCustomAttributesSafe(this MethodInfo method, bool inherit)`

**用途 / Purpose:** 读取并返回当前对象中 custom attributes safe 的结果。

```csharp
// 静态调用，不需要实例
Extensions.GetCustomAttributesSafe(method, false);
```

### GetCustomAttributesSafe
`public static IEnumerable<Attribute> GetCustomAttributesSafe(this MethodInfo method, Type attributeType)`

**用途 / Purpose:** 读取并返回当前对象中 custom attributes safe 的结果。

```csharp
// 静态调用，不需要实例
Extensions.GetCustomAttributesSafe(method, attributeType);
```

### GetCustomAttributesSafe
`public static object GetCustomAttributesSafe(this Assembly assembly, Type attributeType, bool inherit)`

**用途 / Purpose:** 读取并返回当前对象中 custom attributes safe 的结果。

```csharp
// 静态调用，不需要实例
Extensions.GetCustomAttributesSafe(assembly, attributeType, false);
```

### GetCustomAttributesSafe
`public static object GetCustomAttributesSafe(this Assembly assembly, bool inherit)`

**用途 / Purpose:** 读取并返回当前对象中 custom attributes safe 的结果。

```csharp
// 静态调用，不需要实例
Extensions.GetCustomAttributesSafe(assembly, false);
```

### GetCustomAttributesSafe
`public static IEnumerable<Attribute> GetCustomAttributesSafe(this Assembly assembly, Type attributeType)`

**用途 / Purpose:** 读取并返回当前对象中 custom attributes safe 的结果。

```csharp
// 静态调用，不需要实例
Extensions.GetCustomAttributesSafe(assembly, attributeType);
```

### GetDeterministicHashCode
`public static int GetDeterministicHashCode(this string text)`

**用途 / Purpose:** 读取并返回当前对象中 deterministic hash code 的结果。

```csharp
// 静态调用，不需要实例
Extensions.GetDeterministicHashCode(text);
```

## 使用示例

```csharp
Extensions.GetTypesSafe(assembly, func<Type, false);
```

## 参见

- [本区域目录](../)