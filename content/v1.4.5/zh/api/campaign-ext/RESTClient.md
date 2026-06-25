---
title: "RESTClient"
description: "RESTClient 的自动生成类参考。"
---
# RESTClient

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class RESTClient`
**Base:** 无
**File:** `bin/TaleWorlds.Network/TaleWorlds.Network/RESTClient.cs`

## 概述

`RESTClient` 位于 `TaleWorlds.Network`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Network` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Get
`public async Task Get(string service, List<KeyValuePair<string, string>> headers)`

**用途 / Purpose:** **用途 / Purpose:** 读取当前对象的值或状态并返回。

```csharp
// 先通过子系统 API 拿到 RESTClient 实例
RESTClient rESTClient = ...;
var result = rESTClient.Get("example", list<KeyValuePair<string, "example");
```

### Post
`public async Task Post(string service, List<KeyValuePair<string, string>> headers, string payLoad, string contentType = "application/json")`

**用途 / Purpose:** **用途 / Purpose:** 调用 Post 对应的操作。

```csharp
// 先通过子系统 API 拿到 RESTClient 实例
RESTClient rESTClient = ...;
var result = rESTClient.Post("example", list<KeyValuePair<string, "example", "example", "example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
RESTClient rESTClient = ...;
rESTClient.Get("example", list<KeyValuePair<string, "example");
```

## 参见

- [本区域目录](../)