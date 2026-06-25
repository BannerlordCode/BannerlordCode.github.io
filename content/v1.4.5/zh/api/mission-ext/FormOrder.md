---
title: "FormOrder"
description: "FormOrder 的自动生成类参考。"
---
# FormOrder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct FormOrder`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/FormOrder.cs`

## 概述

`FormOrder` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CustomFlankWidth` | `public float CustomFlankWidth { get; set; }` |

## 主要方法

### FormOrderCustom
`public static FormOrder FormOrderCustom(float customWidth)`

**用途 / Purpose:** 处理与 「form order custom」 相关的逻辑。

```csharp
// 静态调用，不需要实例
FormOrder.FormOrderCustom(0);
```

### OnApply
`public void OnApply(Formation formation)`

**用途 / Purpose:** 在 「apply」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FormOrder 实例
FormOrder formOrder = ...;
formOrder.OnApply(formation);
```

### GetUnitCountOf
`public static int GetUnitCountOf(Formation formation)`

**用途 / Purpose:** 读取并返回当前对象中 「unit count of」 的结果。

```csharp
// 静态调用，不需要实例
FormOrder.GetUnitCountOf(formation);
```

### OnApplyToCustomArrangement
`public bool OnApplyToCustomArrangement(Formation formation, IFormationArrangement arrangement)`

**用途 / Purpose:** 在 「apply to custom arrangement」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FormOrder 实例
FormOrder formOrder = ...;
var result = formOrder.OnApplyToCustomArrangement(formation, arrangement);
```

### GetMaxFileCountStatic
`public static int? GetMaxFileCountStatic(FormOrderEnum order, int unitCount)`

**用途 / Purpose:** 读取并返回当前对象中 「max file count static」 的结果。

```csharp
// 静态调用，不需要实例
FormOrder.GetMaxFileCountStatic(order, 0);
```

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 FormOrder 实例
FormOrder formOrder = ...;
var result = formOrder.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 FormOrder 实例
FormOrder formOrder = ...;
var result = formOrder.GetHashCode();
```

## 使用示例

```csharp
FormOrder.FormOrderCustom(0);
```

## 参见

- [本区域目录](../)