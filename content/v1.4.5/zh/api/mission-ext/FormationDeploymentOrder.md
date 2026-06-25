---
title: "FormationDeploymentOrder"
description: "FormationDeploymentOrder 的自动生成类参考。"
---
# FormationDeploymentOrder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct FormationDeploymentOrder`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/FormationDeploymentOrder.cs`

## 概述

`FormationDeploymentOrder` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Key` | `public int Key { get; }` |
| `Offset` | `public int Offset { get; }` |

## 主要方法

### Compare
`public int Compare(FormationDeploymentOrder a, FormationDeploymentOrder b)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 FormationDeploymentOrder 实例
FormationDeploymentOrder formationDeploymentOrder = ...;
var result = formationDeploymentOrder.Compare(a, b);
```

### GetDeploymentOrder
`public static FormationDeploymentOrder GetDeploymentOrder(FormationClass fClass, int offset = 0)`

**用途 / Purpose:** 读取并返回当前对象中 deployment order 的结果。

```csharp
// 静态调用，不需要实例
FormationDeploymentOrder.GetDeploymentOrder(fClass, 0);
```

### GetComparer
`public static DeploymentOrderComparer GetComparer()`

**用途 / Purpose:** 读取并返回当前对象中 comparer 的结果。

```csharp
// 静态调用，不需要实例
FormationDeploymentOrder.GetComparer();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
FormationDeploymentOrder formationDeploymentOrder = ...;
formationDeploymentOrder.Compare(a, b);
```

## 参见

- [本区域目录](../)