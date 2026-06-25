---
title: "GenericThreadedRestSessionProvider"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GenericThreadedRestSessionProvider`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GenericThreadedRestSessionProvider

**Namespace:** TaleWorlds.Diamond.ClientApplication
**Module:** TaleWorlds.Diamond
**Type:** `public class GenericThreadedRestSessionProvider<T> : IClientSessionProvider<T> where T : Client<T>`
**Base:** `IClientSessionProvider<T> where T : Client<T>`
**File:** `TaleWorlds.Diamond/ClientApplication/GenericThreadedRestSessionProvider.cs`

## 概述

`GenericThreadedRestSessionProvider` 位于 `TaleWorlds.Diamond.ClientApplication`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Diamond.ClientApplication` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateSession
`public IClientSession CreateSession(T client)`

**用途 / Purpose:** 创建一个 `session` 实例或对象。

## 使用示例

```csharp
var value = new GenericThreadedRestSessionProvider();
value.CreateSession(client);
```

## 参见

- [完整类目录](../catalog)