---
title: "ConnectionState"
description: "TaleWorlds.Network 中表示连接生命周期阶段的枚举，用于描述会话当前处于哪一步。"
---
# ConnectionState

**命名空间：** `TaleWorlds.Network`
**模块：** `TaleWorlds.Network`
**类型：** `public enum ConnectionState`
**基类：** `无（枚举类型）`
**源文件：** `TaleWorlds.Network/ConnectionState.cs`（声明见第 6 行）

## 概述

`ConnectionState` 是一个很小的枚举，作用是把“连接现在处于什么阶段”这件事变成一个可以比较、可以分支的离散值。会话对象在建立、可用、结束这几个时点之间迁移，外部代码需要判断“现在能不能发消息”“是不是该清理了”，这些判断就落在它身上。

它本身没有行为，价值在于给状态迁移提供一个共同词汇，避免各处用布尔量拼凑连接状态。

## 心智模型

把它想成会话身上的一枚状态标签，而不是一把锁：

- 标签描述的是阶段，不是权限。读到“已连接”意味着链路可用，但并不意味着对端已经处理好你发的每一条消息。
- 阶段是有序推进的：从尚未连接到连接进行中，再到可用，最后进入断开与结束。任何时刻只应有一个标签生效。
- 它是只读的观测结果。你通过它来分支，而不是通过修改它来改变网络行为——改变行为要靠会话上的动作（连接、发送、断开）。

所以使用姿势是：在需要做“现在能不能做某事”的判断时读它，然后据此选择分支，而不是把它当成命令。

## 怎么用

### 怎么拿到

源码路径：`C:/WorkSpace/Bannerlord/bannerlord-1.4.7/TaleWorlds.Network/ConnectionState.cs`，枚举声明见 `ConnectionState.cs:6`（整个文件 15 行，取值集中在该声明之后的若干行内）。

它随 `TaleWorlds.Network` 一起编译，属于公开类型，直接引用即可；具体取值与顺序以 `ConnectionState.cs:6` 起的声明为准。会话侧的两个方向分别是 `ClientsideSession`（`ClientsideSession.cs:9`）与 `ServersideSession`（`ServersideSession.cs:6`），它们的连接动作与断开动作正是驱动这个状态迁移的来源。

### 典型用法

1. 在需要对外暴露连接进度的地方，用一个 `ConnectionState` 字段记录当前阶段。
2. 在 `Connect(...)`（`ClientsideSession.cs:34`）之后、以及 `SendDisconnectMessage()`（`NetworkSession.cs:15`）之后更新这个字段。
3. 在发送消息或做 UI 提示之前先读它：只有处于可用阶段才走发送分支（`NetworkSession.cs:75`）。
4. 不要在分支里假设“不是已连接就一定是断开中”，枚举可能有多个中间阶段，写全分支或用 `switch` 的默认分支兜底。

### 坑

- 枚举是可变的普通字段，多个地方各自维护副本就会不一致；应当由会话对象作为唯一写入方。
- 状态是观测值，不是同步原语。读到可用阶段之后对端仍可能刚好断开，真正的失败处理还是要靠消息路径上的结果。
- 不同版本可能增删取值，比较时不要依赖取值的整数大小，用名字比较。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| 取值集合（`ConnectionState.cs:6`） | 描述连接生命周期中的各个阶段，供上层做状态判断与分支处理。 |
| 未连接阶段（`ConnectionState.cs:6`） | 会话尚未与对端建立可用链路，此时不应发送业务消息。 |
| 连接进行中阶段（`ConnectionState.cs:6`） | 正在建立链路，尚未可收发业务消息，适合显示进度或等待。 |
| 已连接阶段（`ConnectionState.cs:6`） | 链路可用，可以正常收发消息。 |
| 断开与收尾阶段（`ConnectionState.cs:6`） | 会话正在结束或已经结束，应停止发送并释放资源。 |

## 真实示例

```csharp
public sealed class SessionStatus
{
    public ConnectionState State { get; private set; }

    public void OnConnected()
    {
        State = ConnectionState.Connected;
    }

    public void OnDisconnected()
    {
        State = ConnectionState.Disconnected;
    }

    public bool CanSend()
    {
        return State == ConnectionState.Connected;
    }
}
```

## 参见

- [NetworkSession](../NetworkSession)
- [ClientsideSession](../ClientsideSession)
- [ServersideSession](../ServersideSession)

## 导航

- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
