<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Integer`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Integer

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public struct Integer`
**领域:** mission-ext

## 概述

`Integer` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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
`public int GetMaximumValue()`

**用途 / Purpose:** 获取 `maximum value` 的当前值。

### GetNumBits
`public int GetNumBits()`

**用途 / Purpose:** 获取 `num bits` 的当前值。

### GetNumBits
`public int GetNumBits()`

**用途 / Purpose:** 获取 `num bits` 的当前值。

### GetNumBits
`public int GetNumBits()`

**用途 / Purpose:** 获取 `num bits` 的当前值。

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

### ClampValueAccordingToLimits
`public void ClampValueAccordingToLimits(ref float x)`

**用途 / Purpose:** 处理 `clamp value according to limits` 相关逻辑。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 Integer 实例，再调用它的公开方法
var value = new Integer();
value.GetNumBits();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
