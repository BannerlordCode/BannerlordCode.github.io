---
title: "HandlerResult"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HandlerResult`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HandlerResult

**命名空间:** TaleWorlds.Diamond
**模块:** TaleWorlds.Diamond
**类型:** `public class HandlerResult`
**领域:** campaign-ext

## 概述

`HandlerResult` 位于 `TaleWorlds.Diamond`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsSuccessful` | `public bool IsSuccessful { get; }` |
| `Error` | `public string Error { get; }` |
| `NextMessage` | `public Message NextMessage { get; }` |

## 主要方法

### CreateSuccessful
`public static HandlerResult CreateSuccessful()`

**用途 / Purpose:** 创建一个 `successful` 实例或对象。

### CreateSuccessful
`public static HandlerResult CreateSuccessful(Message nextMessage)`

**用途 / Purpose:** 创建一个 `successful` 实例或对象。

### CreateFailed
`public static HandlerResult CreateFailed(string error)`

**用途 / Purpose:** 创建一个 `failed` 实例或对象。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
HandlerResult.CreateSuccessful();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
