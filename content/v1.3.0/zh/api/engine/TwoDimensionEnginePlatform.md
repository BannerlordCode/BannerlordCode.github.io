---
title: "TwoDimensionEnginePlatform"
description: "TwoDimensionEnginePlatform 的自动生成类参考。"
---
# TwoDimensionEnginePlatform

**Namespace:** TaleWorlds.Engine.GauntletUI
**Module:** TaleWorlds.Engine
**Type:** `public class TwoDimensionEnginePlatform : ITwoDimensionPlatform`
**Base:** `ITwoDimensionPlatform`
**File:** `TaleWorlds.Engine.GauntletUI/TwoDimensionEnginePlatform.cs`

## 概述

`TwoDimensionEnginePlatform` 位于 `TaleWorlds.Engine.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Reset
`public void Reset()`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 TwoDimensionEnginePlatform 实例
TwoDimensionEnginePlatform twoDimensionEnginePlatform = ...;
twoDimensionEnginePlatform.Reset();
```

### Equals
`public bool Equals(TwoDimensionEnginePlatform.MaterialTuple other)`

**用途 / Purpose:** **用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 TwoDimensionEnginePlatform 实例
TwoDimensionEnginePlatform twoDimensionEnginePlatform = ...;
var result = twoDimensionEnginePlatform.Equals(other);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 TwoDimensionEnginePlatform 实例
TwoDimensionEnginePlatform twoDimensionEnginePlatform = ...;
var result = twoDimensionEnginePlatform.GetHashCode();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TwoDimensionEnginePlatform twoDimensionEnginePlatform = ...;
twoDimensionEnginePlatform.Reset();
```

## 参见

- [本区域目录](../)