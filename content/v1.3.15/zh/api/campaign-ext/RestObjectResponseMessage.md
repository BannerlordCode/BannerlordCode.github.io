---
title: "RestObjectResponseMessage"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RestObjectResponseMessage`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RestObjectResponseMessage

**Namespace:** TaleWorlds.Diamond.Rest
**Module:** TaleWorlds.Diamond
**Type:** `public class RestObjectResponseMessage : RestResponseMessage`
**Base:** `RestResponseMessage`
**File:** `TaleWorlds.Diamond/Rest/RestObjectResponseMessage.cs`

## 概述

`RestObjectResponseMessage` 位于 `TaleWorlds.Diamond.Rest`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Diamond.Rest` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetMessage
`public override Message GetMessage()`

**用途 / Purpose:** 获取 `message` 的当前值。

## 使用示例

```csharp
var value = new RestObjectResponseMessage();
value.GetMessage();
```

## 参见

- [完整类目录](../catalog)