---
title: 网络系统 / Network System
description: TaleWorlds.Native.dll 网络系统类参考
---

# 网络系统 / Network System

## 概述 / Overview

网络系统处理多人游戏中的网络通信，包括 UDP 套接字、服务器/客户端会话等。

The network system handles network communication in multiplayer games, including UDP sockets, server/client sessions, etc.

## UDP 套接字 / UDP Sockets

### MBNet_udp_socket

MBNet UDP 套接字。

```cpp
MBNet_udp_socket::vftable
```

**功能:**
- UDP 数据发送
- UDP 数据接收
- 地址绑定

## 网络会话 / Network Sessions

### Udp_session_base

UDP 会话基类。

```cpp
Udp_session_base::vftable
```

### Serverside_udp_session

服务器端 UDP 会话。

```cpp
Serverside_udp_session::vftable
```

**功能:**
- 玩家连接管理
- 数据广播
- 会话状态同步

### Clientside_udp_session

客户端 UDP 会话。

```cpp
Clientside_udp_session::vftable
```

**功能:**
- 连接服务器
- 数据发送
- 延迟补偿

## 任务系统 / Task System

### Socket_receive_task

套接字接收任务。

```cpp
Socket_receive_task::vftable
```

### sndbs_poll_task

SNDB 轮询任务。

```cpp
sndbs_poll_task::vftable
```

### CompletionTask

完成任务。

```cpp
CompletionTask::vftable
```

### Completion_port_task

完成端口任务。

```cpp
Completion_port_task::vftable
```

## 其他网络类 / Other Network Classes

### Watchdog

看门狗。

```cpp
Watchdog::vftable
```

### WindowsWatchdog

Windows 看门狗。

```cpp
WindowsWatchdog::vftable
```
