---
title: "DXGI"
description: "DXGI 的自动生成类参考。"
---
# DXGI

**Namespace:** TaleWorlds.TwoDimension.Standalone.Native.Windows
**Module:** TaleWorlds.TwoDimension
**Type:** `public static class DXGI`
**Base:** 无
**File:** `TaleWorlds.TwoDimension.Standalone/Native/Windows/DXGI.cs`

## 概述

`DXGI` 位于 `TaleWorlds.TwoDimension.Standalone.Native.Windows`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension.Standalone.Native.Windows` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateDXGIFactory
`public static extern int CreateDXGIFactory(ref Guid riid, out IntPtr factory)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 d x g i factory 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
DXGI.CreateDXGIFactory(riid, factory);
```

### Equals
`public override bool Equals(object o)`

**用途 / Purpose:** **用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 DXGI 实例
DXGI dXGI = ...;
var result = dXGI.Equals(o);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 DXGI 实例
DXGI dXGI = ...;
var result = dXGI.GetHashCode();
```

## 使用示例

```csharp
DXGI.CreateDXGIFactory(riid, factory);
```

## 参见

- [本区域目录](../)