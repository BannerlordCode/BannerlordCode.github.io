---
title: "JsonSocketMessage"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `JsonSocketMessage`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# JsonSocketMessage

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class JsonSocketMessage`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Network/TaleWorlds.Network/JsonSocketMessage.cs`

## 概述

`JsonSocketMessage` 位于 `TaleWorlds.Network`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Network` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MessageInfo` | `public MessageInfo MessageInfo { get; }` |

## 主要方法

### GetTypeId
`public static string GetTypeId(Type messageType)`

**用途 / Purpose:** 获取 `type id` 的当前值。

### GetMessageDictionary
`public static Dictionary<string, Type> GetMessageDictionary()`

**用途 / Purpose:** 获取 `message dictionary` 的当前值。

## 使用示例

```csharp
JsonSocketMessage.GetTypeId(messageType);
```

## 参见

- [完整类目录](../catalog)