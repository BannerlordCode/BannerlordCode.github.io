---
title: "ManagedObject"
description: "ManagedObject 的自动生成类参考。"
---
# ManagedObject

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public abstract class ManagedObject`
**Base:** 无
**File:** `bin/TaleWorlds.DotNet/TaleWorlds.DotNet/ManagedObject.cs`

## 概述

`ManagedObject` 位于 `TaleWorlds.DotNet`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.DotNet` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetManagedId
`public int GetManagedId()`

**用途 / Purpose:** 读取并返回当前对象中 「managed id」 的结果。

```csharp
// 先通过子系统 API 拿到 ManagedObject 实例
ManagedObject managedObject = ...;
var result = managedObject.GetManagedId();
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 ManagedObject 实例
ManagedObject managedObject = ...;
var result = managedObject.GetHashCode();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
ManagedObject instance = ...;
```

## 参见

- [本区域目录](../)