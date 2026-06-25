---
title: "NativeObjectArray"
description: "NativeObjectArray 的自动生成类参考。"
---
# NativeObjectArray

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public sealed class NativeObjectArray : NativeObject, IEnumerable<NativeObject>, IEnumerable`
**Base:** `NativeObject`
**File:** `bin/TaleWorlds.DotNet/TaleWorlds.DotNet/NativeObjectArray.cs`

## 概述

`NativeObjectArray` 位于 `TaleWorlds.DotNet`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.DotNet` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Create
`public static NativeObjectArray Create()`

**用途 / Purpose:** **用途 / Purpose:** 创建当前对象的新实例或相关实体。

```csharp
// 静态调用，不需要实例
NativeObjectArray.Create();
```

### GetElementAt
`public NativeObject GetElementAt(int index)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 element at 的结果。

```csharp
// 先通过子系统 API 拿到 NativeObjectArray 实例
NativeObjectArray nativeObjectArray = ...;
var result = nativeObjectArray.GetElementAt(0);
```

### AddElement
`public void AddElement(NativeObject nativeObject)`

**用途 / Purpose:** **用途 / Purpose:** 将 element 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 NativeObjectArray 实例
NativeObjectArray nativeObjectArray = ...;
nativeObjectArray.AddElement(nativeObject);
```

### Clear
`public void Clear()`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 NativeObjectArray 实例
NativeObjectArray nativeObjectArray = ...;
nativeObjectArray.Clear();
```

## 使用示例

```csharp
NativeObjectArray.Create();
```

## 参见

- [本区域目录](../)