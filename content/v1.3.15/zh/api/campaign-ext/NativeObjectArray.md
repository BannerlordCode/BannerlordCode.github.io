---
title: "NativeObjectArray"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NativeObjectArray`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NativeObjectArray

**命名空间:** TaleWorlds.DotNet
**模块:** TaleWorlds.DotNet
**类型:** `public sealed class NativeObjectArray : NativeObject, IEnumerable<NativeObject>, IEnumerable`
**Base:** `NativeObject`
**领域:** campaign-ext

## 概述

`NativeObjectArray` 位于 `TaleWorlds.DotNet`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.DotNet` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Count` | `public int Count { get; }` |

## 主要方法

### Create
`public static NativeObjectArray Create()`

**用途 / Purpose:** 创建一个 `create` 实例或对象。

### GetElementAt
`public NativeObject GetElementAt(int index)`

**用途 / Purpose:** 获取 `element at` 的当前值。

### AddElement
`public void AddElement(NativeObject nativeObject)`

**用途 / Purpose:** 向当前集合/状态中添加 `element`。

### Clear
`public void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

## 使用示例

```csharp
NativeObjectArray example = NativeObjectArray.Count;
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
