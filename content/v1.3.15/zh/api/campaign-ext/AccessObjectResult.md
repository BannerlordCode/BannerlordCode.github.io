---
title: "AccessObjectResult"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AccessObjectResult`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AccessObjectResult

**命名空间:** TaleWorlds.Diamond
**模块:** TaleWorlds.Diamond
**类型:** `public class AccessObjectResult`
**领域:** campaign-ext

## 概述

`AccessObjectResult` 位于 `TaleWorlds.Diamond`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AccessObject` | `public AccessObject AccessObject { get; set; }` |
| `Success` | `public bool Success { get; set; }` |
| `FailReason` | `public TextObject FailReason { get; set; }` |

## 主要方法

### CreateSuccess
`public static AccessObjectResult CreateSuccess(AccessObject accessObject)`

**用途 / Purpose:** 创建一个 `success` 实例或对象。

### CreateFailed
`public static AccessObjectResult CreateFailed(TextObject failReason)`

**用途 / Purpose:** 创建一个 `failed` 实例或对象。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
AccessObjectResult.CreateSuccess(accessObject);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
