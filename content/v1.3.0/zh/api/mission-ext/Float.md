---
title: "Float"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Float`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Float

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct Float`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/CompressionInfo.cs`

## 概述

`Float` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `FullPrecision` | `public static CompressionInfo.Float FullPrecision { get; }` |

## 主要方法

### GetNumBits
`public int GetNumBits()`

**用途 / Purpose:** 获取 `num bits` 的当前值。

### GetMaximumValue
`public float GetMaximumValue()`

**用途 / Purpose:** 获取 `maximum value` 的当前值。

### GetMinimumValue
`public float GetMinimumValue()`

**用途 / Purpose:** 获取 `minimum value` 的当前值。

### GetPrecision
`public float GetPrecision()`

**用途 / Purpose:** 获取 `precision` 的当前值。

## 使用示例

```csharp
var value = new Float();
value.GetNumBits();
```

## 参见

- [完整类目录](../catalog)