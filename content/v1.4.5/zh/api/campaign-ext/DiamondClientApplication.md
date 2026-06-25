---
title: "DiamondClientApplication"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DiamondClientApplication`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DiamondClientApplication

**Namespace:** TaleWorlds.Diamond.ClientApplication
**Module:** TaleWorlds.Diamond
**Type:** `public class DiamondClientApplication`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Diamond/TaleWorlds.Diamond.ClientApplication/DiamondClientApplication.cs`

## 概述

`DiamondClientApplication` 位于 `TaleWorlds.Diamond.ClientApplication`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Diamond.ClientApplication` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ApplicationVersion` | `public ApplicationVersion ApplicationVersion { get; }` |
| `ProxyAddressMap` | `public IReadOnlyDictionary<string, string> ProxyAddressMap { get; }` |

## 主要方法

### GetObject
`public object GetObject(string name)`

**用途 / Purpose:** 获取 `object` 的当前值。

### AddObject
`public void AddObject(string name, DiamondClientApplicationObject applicationObject)`

**用途 / Purpose:** 向当前集合/状态中添加 `object`。

### Initialize
`public void Initialize(ClientApplicationConfiguration applicationConfiguration)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### CreateClientSessionProvider
`public object CreateClientSessionProvider(string clientName, Type clientType, SessionProviderType sessionProviderType, ParameterContainer parameters)`

**用途 / Purpose:** 创建一个 `client session provider` 实例或对象。

### Update
`public void Update()`

**用途 / Purpose:** 更新 `update` 的状态或数据。

## 使用示例

```csharp
var value = new DiamondClientApplication();
value.GetObject("example");
```

## 参见

- [完整类目录](../catalog)