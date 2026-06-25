---
title: "EntryId"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EntryId`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EntryId

**命名空间:** TaleWorlds.SaveSystem
**模块:** TaleWorlds.SaveSystem
**类型:** `public struct EntryId : IEquatable<EntryId>`
**Base:** `IEquatable<EntryId>`
**领域:** save-system

## 概述

`EntryId` 位于 `TaleWorlds.SaveSystem`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public int Id { get; }` |
| `Extension` | `public SaveEntryExtension Extension { get; }` |

## 主要方法

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### Equals
`public bool Equals(EntryId other)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 EntryId 实例，再调用它的公开方法
var value = new EntryId();
value.Equals(obj);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-save)
