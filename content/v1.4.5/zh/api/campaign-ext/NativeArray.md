---
title: "NativeArray"
description: "NativeArray 的自动生成类参考。"
---
# NativeArray

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public sealed class NativeArray : NativeObject`
**Base:** `NativeObject`
**File:** `bin/TaleWorlds.DotNet/TaleWorlds.DotNet/NativeArray.cs`

## 概述

`NativeArray` 位于 `TaleWorlds.DotNet`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.DotNet` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Create
`public static NativeArray Create()`

**用途 / Purpose:** 创建当前对象的新实例或相关实体。

```csharp
// 静态调用，不需要实例
NativeArray.Create();
```

### AddElement
`public void AddElement(int value)`

**用途 / Purpose:** 将 「element」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 NativeArray 实例
NativeArray nativeArray = ...;
nativeArray.AddElement(0);
```

### AddElement
`public void AddElement(float value)`

**用途 / Purpose:** 将 「element」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 NativeArray 实例
NativeArray nativeArray = ...;
nativeArray.AddElement(0);
```

### Clear
`public void Clear()`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 NativeArray 实例
NativeArray nativeArray = ...;
nativeArray.Clear();
```

## 使用示例

```csharp
NativeArray.Create();
```

## 参见

- [本区域目录](../)