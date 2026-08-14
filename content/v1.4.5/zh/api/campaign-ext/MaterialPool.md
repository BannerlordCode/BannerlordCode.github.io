---
title: "MaterialPool"
description: "MaterialPool 的自动生成类参考。"
---
# MaterialPool

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class MaterialPool<T>`
**Base:** 无
**File:** `TaleWorlds.TwoDimension/MaterialPool.cs`

## 概述

`MaterialPool` 位于 `TaleWorlds.TwoDimension`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### New
`public T New()`

**用途 / Purpose:** 调用 New 对应的操作。

```csharp
// 先通过子系统 API 拿到 MaterialPool 实例
MaterialPool materialPool = ...;
var result = materialPool.New();
```

### ResetAll
`public void ResetAll()`

**用途 / Purpose:** 将 all 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 MaterialPool 实例
MaterialPool materialPool = ...;
materialPool.ResetAll();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MaterialPool materialPool = ...;
materialPool.New();
```

## 参见

- [本区域目录](../)