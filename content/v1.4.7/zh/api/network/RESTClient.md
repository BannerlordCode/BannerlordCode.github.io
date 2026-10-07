---
title: "RESTClient"
description: "向服务端发起 HTTP 请求的 REST 客户端，支持 GET 与 POST。"
---
# RESTClient

**命名空间：** `TaleWorlds.Network`
**模块：** `TaleWorlds.Network`
**类型：** `class`
**基类：** `object`
**源文件：** `bannerlord-1.4.7/TaleWorlds.Network/RESTClient.cs`（声明见第 14 行）

## 概述

RESTClient 是网络模块对外的 HTTP 客户端封装。它把「服务地址 + 服务名 + 头 + 可选负载」组合成一次请求，并把响应反序列化为调用方指定的类型。构造时绑定一个服务地址，之后所有 Get/Post 都相对该地址发起。四个方法均为 async，返回 Task 或 Task<TResult>。

## 心智模型

把它想成「一个只会说 HTTP 的邮差」：你给它一个服务地址当邮局，之后每次调用告诉它去哪个柜台（service）、带什么证件（headers）、寄什么信（payLoad），它就把回信（JSON）拆好交给你。它不关心连接复用、重试、缓存——那些是调用方或更上层框架的职责。泛型版本负责「拆信」，非泛型版本只负责「寄出去」。

## 怎么用

### 怎么拿到

源树路径：`bannerlord-1.4.7/TaleWorlds.Network/RESTClient.cs`
入口：构造函数 `RESTClient(string serviceAddress)`（RESTClient.cs:17）。直接 new 即可，无需从游戏系统获取。

### 典型用法

```csharp
var client = new RESTClient("https://api.example.com");
var headers = new List<KeyValuePair<string, string>>
{
    new KeyValuePair<string, string>("Authorization", "Bearer " + token)
};
var result = await client.Get<MyDto>("profile", headers);
```

POST 时把负载与内容类型一起传入：

```csharp
await client.Post("submit", headers, json, "application/json");
```

### 坑

- 四个方法都是 async，忘记 await 会得到未完成的 Task 而非结果。
- `Post` 的 `contentType` 有默认值 `application/json`，传 null 或空串可能让服务端拒绝。
- 构造函数只接受一个地址，切换服务地址需要新建实例。
- 没有内置超时与重试，调用方需自行处理网络异常。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `RESTClient(string serviceAddress)` | 构造函数，绑定服务地址（RESTClient.cs:17） |
| `Get<TResult>(string service, List<KeyValuePair<string,string>> headers)` | 异步 GET 并反序列化为 TResult（RESTClient.cs:60） |
| `Get(string service, List<KeyValuePair<string,string>> headers)` | 异步 GET，不关心响应体（RESTClient.cs:92） |
| `Post<TResult>(string service, List<KeyValuePair<string,string>> headers, string payLoad, string contentType = "application/json")` | 异步 POST 并反序列化为 TResult（RESTClient.cs:114） |
| `Post(string service, List<KeyValuePair<string,string>> headers, string payLoad, string contentType = "application/json")` | 异步 POST，不关心响应体（RESTClient.cs:156） |

## 真实示例

```csharp
var client = new RESTClient("https://api.example.com");
var headers = new List<KeyValuePair<string, string>>
{
    new KeyValuePair<string, string>("Authorization", "Bearer " + token)
};
var dto = await client.Get<MyDto>("profile", headers);
await client.Post("submit", headers, json, "application/json");
```

## 参见

- [MessageProxy](../MessageProxy)
- [MessageServiceConnection](../MessageServiceConnection)
- [../../core-extra/Game](../../core-extra/Game)

## 导航

- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
