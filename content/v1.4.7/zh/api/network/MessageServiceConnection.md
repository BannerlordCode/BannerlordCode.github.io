---
title: "MessageServiceConnection"
description: "管理与后端消息服务之间连接生命周期的抽象连接。"
---
# MessageServiceConnection

**命名空间：** `TaleWorlds.Network`
**模块：** `TaleWorlds.Network`
**类型：** `abstract class`
**基类：** `object`
**源文件：** `bannerlord-1.4.7/TaleWorlds.Network/MessageServiceConnection.cs`（声明见第 7 行）

## 概述

MessageServiceConnection 是连接生命周期的抽象基类。它把「连上—注册代理—启动—停止—关闭」这一串动作抽象成五个方法，并定义了两个委托用于通知状态变化与连接关闭。派生类负责真正的传输实现（如 WebSocket、TCP），本类只负责契约。

## 心智模型

把它想成「一个电话总机的抽象规范」：它规定「先拨号（Init）、再登记分机（RegisterProxyClient）、然后开机（StartAsync）、用完关机（StopAsync）、断线时通知（ClosedDelegate）」。它不关心用的是光纤还是铜线，只关心「流程对不对、状态变没变」。

## 怎么用

### 怎么拿到

源树路径：`bannerlord-1.4.7/TaleWorlds.Network/MessageServiceConnection.cs`
入口：抽象方法 `Init(string address, string token)`（MessageServiceConnection.cs:18）。不能直接 new，需继承后实现五个抽象方法。

### 典型用法

```csharp
public class MyConnection : MessageServiceConnection
{
    public override Task Init(string address, string token)
    {
        // 用 address 与 token 建立底层连接
        return Task.CompletedTask;
    }
    public override Task SendAsync(string text)
    {
        // 把 text 写到连接
        return Task.CompletedTask;
    }
}
```

### 坑

- 抽象类，五个方法全部必须实现，漏一个编译不过。
- `Init` 与 `StartAsync` 是两步：Init 建连，StartAsync 才开始收发，顺序不能反。
- `StateChangedDelegate` 与 `ClosedDelegate` 由派生类触发，调用方订阅后需处理重入。
- 没有内置重连，断线后需调用方决定重建。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `SendAsync(string text)` | 抽象，发送一条文本消息（MessageServiceConnection.cs:15） |
| `Init(string address, string token)` | 抽象，用地址与令牌建立连接（MessageServiceConnection.cs:18） |
| `RegisterProxyClient(string name, IMessageProxyClient)` | 抽象，注册一个代理客户端（MessageServiceConnection.cs:36） |
| `StartAsync()` | 抽象，启动连接（MessageServiceConnection.cs:39） |
| `StopAsync()` | 抽象，停止连接（MessageServiceConnection.cs:42） |
| `ClosedDelegate` | 委托，连接关闭时回调（MessageServiceConnection.cs:76） |
| `StateChangedDelegate(ConnectionState oldState, ConnectionState newState)` | 委托，状态变化时回调（MessageServiceConnection.cs:80） |

## 真实示例

```csharp
public class MyConnection : MessageServiceConnection
{
    public override Task Init(string address, string token)
    {
        // 用 address 与 token 建立底层连接
        return Task.CompletedTask;
    }
    public override Task SendAsync(string text)
    {
        // 把 text 写到连接
        return Task.CompletedTask;
    }
}
```

## 参见

- [MessageProxy](../MessageProxy)
- [RESTClient](../RESTClient)
- [../../core-extra/Game](../../core-extra/Game)

## 导航

- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
