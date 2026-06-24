<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Arrays`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Arrays

**命名空间:** Jose
**模块:** Jose
**类型:** `public class Arrays`
**领域:** campaign-ext

## 概述

`Arrays` 位于 `Jose`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `Jose` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### FirstHalf
`public static byte FirstHalf(byte arr)`

**用途 / Purpose:** 处理 `first half` 相关逻辑。

### SecondHalf
`public static byte SecondHalf(byte arr)`

**用途 / Purpose:** 处理 `second half` 相关逻辑。

### Concat
`public static byte Concat(params byte arrays)`

**用途 / Purpose:** 处理 `concat` 相关逻辑。

### Slice
`public static byte Slice(byte array, int count)`

**用途 / Purpose:** 处理 `slice` 相关逻辑。

### Xor
`public static byte Xor(byte left, long right)`

**用途 / Purpose:** 处理 `xor` 相关逻辑。

### Xor
`public static byte Xor(byte left, byte right)`

**用途 / Purpose:** 处理 `xor` 相关逻辑。

### ConstantTimeEquals
`public static bool ConstantTimeEquals(byte expected, byte actual)`

**用途 / Purpose:** 处理 `constant time equals` 相关逻辑。

### Dump
`public static string Dump(byte arr, string label = "")`

**用途 / Purpose:** 处理 `dump` 相关逻辑。

### Random
`public static byte Random(int sizeBits = 128)`

**用途 / Purpose:** 处理 `random` 相关逻辑。

### IntToBytes
`public static byte IntToBytes(int value)`

**用途 / Purpose:** 处理 `int to bytes` 相关逻辑。

### LongToBytes
`public static byte LongToBytes(long value)`

**用途 / Purpose:** 处理 `long to bytes` 相关逻辑。

### BytesToLong
`public static long BytesToLong(byte array)`

**用途 / Purpose:** 处理 `bytes to long` 相关逻辑。

### LeftmostBits
`public static byte LeftmostBits(byte data, int lengthBits)`

**用途 / Purpose:** 处理 `leftmost bits` 相关逻辑。

### RightmostBits
`public static byte RightmostBits(byte data, int lengthBits)`

**用途 / Purpose:** 处理 `rightmost bits` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
Arrays.FirstHalf(0);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
