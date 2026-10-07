---
title: "MessageProxy"
description: "远程方法调用的抽象代理，把方法名与参数打包成一次调用。"
---
# MessageProxy

**命名空间：** `TaleWorlds.Network`
**模块：** `TaleWorlds.Network`
**类型：** `abstract class`
**基类：** `object`
**源文件：** `bannerlord-1.4.7/TaleWorlds.Network/MessageProxy.cs`（声明见第 7 行）

## 概述

MessageProxy 是远程方法调用的抽象基类。它只定义一个契约：给定方法名与参数数组，返回一个 Task。具体如何把这次调用编码成网络消息、发到哪个连接，由派生类决定。它是「本地调用」与「远程传输」之间的解耦点。

## 心智模型

把它想成「一个只会喊话的传令兵」：你告诉它「去叫 methodName，带上 args」，它负责把这句话送到对面，并把对面的回话带回来。它不关心路怎么走（TCP/HTTP/消息队列），只关心「说什么」和「等什么回话」。

## 怎么用

### 怎么拿到

源树路径：`bannerlord-1.4.7/TaleWorlds.Network/MessageProxy.cs`
入口：抽象方法 `Invoke(string methodName, params object[] args)`（MessageProxy.cs:10）。不能直接 new，需继承后实现 Invoke。

### 典型用法

```csharp
public class MyProxy : MessageProxy
{
    public override Task Invoke(string methodName, params object[] args)
    {
        // 编码 methodName + args，发送到远端，返回 Task
        return SendAsync(methodName, args);
    }
}
```

### 坑

- 抽象类，必须继承并实现 Invoke 才能使用。
- 返回 Task 而非 Task<T>，调用方拿不到强类型返回值，需自行约定协议。
- `params object[]` 意味着参数类型在运行时才确定，序列化失败只在运行时暴露。
- 没有内置超时与取消，长调用会一直等待。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `Invoke(string methodName, params object[] args)` | 抽象方法，执行一次远程调用并返回 Task（MessageProxy.cs:10） |

## 真实示例

```csharp
public class MyProxy : MessageProxy
{
    public override Task Invoke(string methodName, params object[] args)
    {
        return SendAsync(methodName, args);
    }
}
```

## 参见

- [MessageServiceConnection](../MessageServiceConnection)
- [RESTClient](../RESTClient)
- [../../core-extra/Game](../../core-extra/Game)

## 导航

- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
