<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBGUID`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBGUID

**命名空间:** TaleWorlds.ObjectSystem
**模块:** TaleWorlds.ObjectSystem
**类型:** `public struct MBGUID : IComparable, IEquatable<MBGUID>`
**Base:** `IComparable`
**领域:** campaign-ext

## 概述

`MBGUID` 位于 `TaleWorlds.ObjectSystem`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.ObjectSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `InternalValue` | `public uint InternalValue { get; }` |
| `SubId` | `public uint SubId { get; }` |

## 主要方法

### GetHash2
`public static long GetHash2(MBGUID id1, MBGUID id2)`

**用途 / Purpose:** 获取 `hash2` 的当前值。

### CompareTo
`public int CompareTo(object a)`

**用途 / Purpose:** 处理 `compare to` 相关逻辑。

### GetTypeIndex
`public uint GetTypeIndex()`

**用途 / Purpose:** 获取 `type index` 的当前值。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### Equals
`public bool Equals(MBGUID other)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
MBGUID.GetHash2(id1, id2);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
