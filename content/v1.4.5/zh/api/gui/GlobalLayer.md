---
title: "GlobalLayer"
description: "GlobalLayer 的自动生成类参考。"
---
# GlobalLayer

**Namespace:** TaleWorlds.ScreenSystem
**Module:** TaleWorlds.ScreenSystem
**Type:** `public class GlobalLayer : IComparable`
**Base:** `IComparable`
**File:** `bin/TaleWorlds.ScreenSystem/TaleWorlds.ScreenSystem/GlobalLayer.cs`

## 概述

`GlobalLayer` 位于 `TaleWorlds.ScreenSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.ScreenSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Layer` | `public ScreenLayer Layer { get; set; }` |

## 主要方法

### CompareTo
`public int CompareTo(object obj)`

**用途 / Purpose:** 将当前对象与传入实例比较大小或顺序。

```csharp
// 先通过子系统 API 拿到 GlobalLayer 实例
GlobalLayer globalLayer = ...;
var result = globalLayer.CompareTo(obj);
```

### UpdateLayout
`public virtual void UpdateLayout()`

**用途 / Purpose:** 重新计算并更新 layout 的最新表示。

```csharp
// 先通过子系统 API 拿到 GlobalLayer 实例
GlobalLayer globalLayer = ...;
globalLayer.UpdateLayout();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GlobalLayer globalLayer = ...;
globalLayer.CompareTo(obj);
```

## 参见

- [本区域目录](../)