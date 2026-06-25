---
title: "PhysicsMaterial"
description: "PhysicsMaterial 的自动生成类参考。"
---
# PhysicsMaterial

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `struct PhysicsMaterial`
**Base:** 无
**File:** `TaleWorlds.Engine/PhysicsMaterial.cs`

## 概述

`PhysicsMaterial` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |
| `Name` | `public string Name { get; }` |

## 主要方法

### GetFlags
`public PhysicsMaterialFlags GetFlags()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 flags 的结果。

```csharp
// 先通过子系统 API 拿到 PhysicsMaterial 实例
PhysicsMaterial physicsMaterial = ...;
var result = physicsMaterial.GetFlags();
```

### GetDynamicFriction
`public float GetDynamicFriction()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 dynamic friction 的结果。

```csharp
// 先通过子系统 API 拿到 PhysicsMaterial 实例
PhysicsMaterial physicsMaterial = ...;
var result = physicsMaterial.GetDynamicFriction();
```

### GetStaticFriction
`public float GetStaticFriction()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 static friction 的结果。

```csharp
// 先通过子系统 API 拿到 PhysicsMaterial 实例
PhysicsMaterial physicsMaterial = ...;
var result = physicsMaterial.GetStaticFriction();
```

### GetRestitution
`public float GetRestitution()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 restitution 的结果。

```csharp
// 先通过子系统 API 拿到 PhysicsMaterial 实例
PhysicsMaterial physicsMaterial = ...;
var result = physicsMaterial.GetRestitution();
```

### GetLinearDamping
`public float GetLinearDamping()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 linear damping 的结果。

```csharp
// 先通过子系统 API 拿到 PhysicsMaterial 实例
PhysicsMaterial physicsMaterial = ...;
var result = physicsMaterial.GetLinearDamping();
```

### GetAngularDamping
`public float GetAngularDamping()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 angular damping 的结果。

```csharp
// 先通过子系统 API 拿到 PhysicsMaterial 实例
PhysicsMaterial physicsMaterial = ...;
var result = physicsMaterial.GetAngularDamping();
```

### Equals
`public bool Equals(PhysicsMaterial m)`

**用途 / Purpose:** **用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 PhysicsMaterial 实例
PhysicsMaterial physicsMaterial = ...;
var result = physicsMaterial.Equals(m);
```

### GetMaterialCount
`public static int GetMaterialCount()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 material count 的结果。

```csharp
// 静态调用，不需要实例
PhysicsMaterial.GetMaterialCount();
```

### GetFromName
`public static PhysicsMaterial GetFromName(string id)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 from name 的结果。

```csharp
// 静态调用，不需要实例
PhysicsMaterial.GetFromName("example");
```

### GetNameAtIndex
`public static string GetNameAtIndex(int index)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 name at index 的结果。

```csharp
// 静态调用，不需要实例
PhysicsMaterial.GetNameAtIndex(0);
```

### GetFlagsAtIndex
`public static PhysicsMaterialFlags GetFlagsAtIndex(int index)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 flags at index 的结果。

```csharp
// 静态调用，不需要实例
PhysicsMaterial.GetFlagsAtIndex(0);
```

### GetRestitutionAtIndex
`public static float GetRestitutionAtIndex(int index)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 restitution at index 的结果。

```csharp
// 静态调用，不需要实例
PhysicsMaterial.GetRestitutionAtIndex(0);
```

### GetDynamicFrictionAtIndex
`public static float GetDynamicFrictionAtIndex(int index)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 dynamic friction at index 的结果。

```csharp
// 静态调用，不需要实例
PhysicsMaterial.GetDynamicFrictionAtIndex(0);
```

### GetStaticFrictionAtIndex
`public static float GetStaticFrictionAtIndex(int index)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 static friction at index 的结果。

```csharp
// 静态调用，不需要实例
PhysicsMaterial.GetStaticFrictionAtIndex(0);
```

### GetLinearDampingAtIndex
`public static float GetLinearDampingAtIndex(int index)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 linear damping at index 的结果。

```csharp
// 静态调用，不需要实例
PhysicsMaterial.GetLinearDampingAtIndex(0);
```

### GetAngularDampingAtIndex
`public static float GetAngularDampingAtIndex(int index)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 angular damping at index 的结果。

```csharp
// 静态调用，不需要实例
PhysicsMaterial.GetAngularDampingAtIndex(0);
```

### GetFromIndex
`public static PhysicsMaterial GetFromIndex(int index)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 from index 的结果。

```csharp
// 静态调用，不需要实例
PhysicsMaterial.GetFromIndex(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PhysicsMaterial physicsMaterial = ...;
physicsMaterial.GetFlags();
```

## 参见

- [本区域目录](../)