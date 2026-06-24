<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBFastRandomSelector`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MBFastRandomSelector

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBFastRandomSelector<T>`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/MBFastRandomSelector.cs`

## 概述

`MBFastRandomSelector` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `RemainingCount` | `public ushort RemainingCount { get; }` |

## 主要方法

### IndexEntry
`public struct IndexEntry(ushort index, ushort version)`

**用途 / Purpose:** 处理 `index entry` 相关逻辑。

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
var value = new MBFastRandomSelector();
value.IndexEntry(0, 0);
```

## 参见

- [完整类目录](../catalog)