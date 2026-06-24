<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Ensure`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Ensure

**命名空间:** Jose
**模块:** Jose
**类型:** `public class Ensure`
**领域:** campaign-ext

## 概述

`Ensure` 位于 `Jose`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `Jose` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### IsEmpty
`public static void IsEmpty(byte arr, string msg, params object args)`

**用途 / Purpose:** 处理 `is empty` 相关逻辑。

### IsNull
`public static void IsNull(object key, string msg, params object args)`

**用途 / Purpose:** 处理 `is null` 相关逻辑。

### BitSize
`public static void BitSize(byte array, long expectedSize, string msg, params object args)`

**用途 / Purpose:** 处理 `bit size` 相关逻辑。

### BitSize
`public static void BitSize(int actualSize, int expectedSize, string msg)`

**用途 / Purpose:** 处理 `bit size` 相关逻辑。

### IsNotEmpty
`public static void IsNotEmpty(string arg, string msg, params object args)`

**用途 / Purpose:** 处理 `is not empty` 相关逻辑。

### Divisible
`public static void Divisible(int arg, int divisor, string msg, params object args)`

**用途 / Purpose:** 处理 `divisible` 相关逻辑。

### MinValue
`public static void MinValue(long arg, long min, string msg, params object args)`

**用途 / Purpose:** 处理 `min value` 相关逻辑。

### MaxValue
`public static void MaxValue(int arg, long max, string msg, params object args)`

**用途 / Purpose:** 处理 `max value` 相关逻辑。

### MinBitSize
`public static void MinBitSize(byte arr, long minBitSize, string msg, params object args)`

**用途 / Purpose:** 处理 `min bit size` 相关逻辑。

### Contains
`public static void Contains(IDictionary<string, object> dict, string keys, string msg, params object args)`

**用途 / Purpose:** 处理 `contains` 相关逻辑。

### SameSize
`public static void SameSize(byte left, byte right, string msg, params object args)`

**用途 / Purpose:** 处理 `same size` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
Ensure.IsEmpty(0, "example", args);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
