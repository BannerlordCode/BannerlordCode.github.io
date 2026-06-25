---
title: "SaveId"
description: "SaveId 的自动生成类参考。"
---
# SaveId

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public abstract class SaveId`
**Base:** 无
**File:** `TaleWorlds.SaveSystem/Definition/SaveId.cs`

## 概述

`SaveId` 位于 `TaleWorlds.SaveSystem.Definition`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem.Definition` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetStringId
`public abstract string GetStringId()`

**用途 / Purpose:** 读取并返回当前对象中 string id 的结果。

```csharp
// 先通过子系统 API 拿到 SaveId 实例
SaveId saveId = ...;
var result = saveId.GetStringId();
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 SaveId 实例
SaveId saveId = ...;
var result = saveId.GetHashCode();
```

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 SaveId 实例
SaveId saveId = ...;
var result = saveId.Equals(obj);
```

### WriteTo
`public abstract void WriteTo(IWriter writer)`

**用途 / Purpose:** 将to写入目标位置。

```csharp
// 先通过子系统 API 拿到 SaveId 实例
SaveId saveId = ...;
saveId.WriteTo(writer);
```

### ReadSaveIdFrom
`public static SaveId ReadSaveIdFrom(IReader reader)`

**用途 / Purpose:** 从当前实例读取save id from相关数据。

```csharp
// 静态调用，不需要实例
SaveId.ReadSaveIdFrom(reader);
```

### GetSizeInBytes
`public abstract int GetSizeInBytes()`

**用途 / Purpose:** 读取并返回当前对象中 size in bytes 的结果。

```csharp
// 先通过子系统 API 拿到 SaveId 实例
SaveId saveId = ...;
var result = saveId.GetSizeInBytes();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
SaveId instance = ...;
```

## 参见

- [本区域目录](../)