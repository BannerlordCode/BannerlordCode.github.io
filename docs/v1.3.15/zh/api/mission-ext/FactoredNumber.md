<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FactoredNumber`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FactoredNumber

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct FactoredNumber`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/FactoredNumber.cs`

## 概述

`FactoredNumber` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ResultNumber` | `public float ResultNumber { get; }` |
| `BaseNumber` | `public float BaseNumber { get; }` |
| `LimitMinValue` | `public float LimitMinValue { get; }` |
| `LimitMaxValue` | `public float LimitMaxValue { get; }` |

## 主要方法

### Add
`public void Add(float value)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### AddFactor
`public void AddFactor(float value)`

**用途 / Purpose:** 向当前集合/状态中添加 `factor`。

### LimitMin
`public void LimitMin(float minValue)`

**用途 / Purpose:** 处理 `limit min` 相关逻辑。

### LimitMax
`public void LimitMax(float maxValue)`

**用途 / Purpose:** 处理 `limit max` 相关逻辑。

### Clamp
`public void Clamp(float minValue, float maxValue)`

**用途 / Purpose:** 处理 `clamp` 相关逻辑。

## 使用示例

```csharp
var value = new FactoredNumber();
value.Add(0);
```

## 参见

- [完整类目录](../catalog)