---
title: "FactoredNumber"
description: "FactoredNumber 的自动生成类参考。"
---
# FactoredNumber

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct FactoredNumber`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/FactoredNumber.cs`

## 概述

`FactoredNumber` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `BaseNumber` | `public float BaseNumber { get; }` |

## 主要方法

### Add
`public void Add(float value)`

**用途 / Purpose:** 向当前容器或状态添加项。

```csharp
// 先通过子系统 API 拿到 FactoredNumber 实例
FactoredNumber factoredNumber = ...;
factoredNumber.Add(0);
```

### AddFactor
`public void AddFactor(float value)`

**用途 / Purpose:** 将 factor 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 FactoredNumber 实例
FactoredNumber factoredNumber = ...;
factoredNumber.AddFactor(0);
```

### LimitMin
`public void LimitMin(float minValue)`

**用途 / Purpose:** 调用 LimitMin 对应的操作。

```csharp
// 先通过子系统 API 拿到 FactoredNumber 实例
FactoredNumber factoredNumber = ...;
factoredNumber.LimitMin(0);
```

### LimitMax
`public void LimitMax(float maxValue)`

**用途 / Purpose:** 调用 LimitMax 对应的操作。

```csharp
// 先通过子系统 API 拿到 FactoredNumber 实例
FactoredNumber factoredNumber = ...;
factoredNumber.LimitMax(0);
```

### Clamp
`public void Clamp(float minValue, float maxValue)`

**用途 / Purpose:** 调用 Clamp 对应的操作。

```csharp
// 先通过子系统 API 拿到 FactoredNumber 实例
FactoredNumber factoredNumber = ...;
factoredNumber.Clamp(0, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
FactoredNumber factoredNumber = ...;
factoredNumber.Add(0);
```

## 参见

- [本区域目录](../)