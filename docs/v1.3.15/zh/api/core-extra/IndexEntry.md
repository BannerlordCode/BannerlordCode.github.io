<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `IndexEntry`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IndexEntry

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** `public struct IndexEntry`
**领域:** core-extra

## 概述

`IndexEntry` 位于 `TaleWorlds.Core`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `RemainingCount` | `public ushort RemainingCount { get; }` |

## 主要方法

### Initialize
`public void Initialize(MBReadOnlyList<T> list)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### Reset
`public void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### Pack
`public void Pack()`

**用途 / Purpose:** 处理 `pack` 相关逻辑。

### SelectRandom
`public bool SelectRandom(out T selection, Predicate<T> conditions = null)`

**用途 / Purpose:** 处理 `select random` 相关逻辑。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 IndexEntry 实例，再调用它的公开方法
var value = new IndexEntry();
value.Initialize(list);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
