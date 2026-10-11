---
title: Network System
description: TaleWorlds.Native.dll network system class reference
---
# Network System

## Mental Model

Treat `Network System` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

The network system handles network communication in multiplayer games, including UDP sockets, server/client sessions, etc.

## Overview

The network subsystem implements MBNet, the engine's UDP-based multiplayer transport. `MBNet_udp_socket` wraps the OS socket; `Udp_session_base` and its server/client subclasses manage per-player sessions, packet broadcast, and state synchronization. Receive and completion tasks (`Socket_receive_task`, `Completion_port_task`) drive the async I/O loop, while `Watchdog` monitors connection health.

## UDP Sockets

### MBNet_udp_socket

MBNet UDP socket.

```cpp
MBNet_udp_socket::vftable
```

**Responsibilities:**
- UDP data send
- UDP data receive
- Address binding

## Network Sessions

### Udp_session_base

UDP session base class.

```cpp
Udp_session_base::vftable
```

### Serverside_udp_session

Server-side UDP session.

```cpp
Serverside_udp_session::vftable
```

**Responsibilities:**
- Player connection management
- Data broadcast
- Session state synchronization

### Clientside_udp_session

Client-side UDP session.

```cpp
Clientside_udp_session::vftable
```

**Responsibilities:**
- Connect to server
- Data send
- Latency compensation

## Task System

### Socket_receive_task

Socket receive task.

```cpp
Socket_receive_task::vftable
```

### sndbs_poll_task

SNDB poll task.

```cpp
sndbs_poll_task::vftable
```

### CompletionTask

Completion task.

```cpp
CompletionTask::vftable
```

### Completion_port_task

Completion port task.

```cpp
Completion_port_task::vftable
```

## Other Network Classes

### Watchdog

Watchdog.

```cpp
Watchdog::vftable
```

### WindowsWatchdog

Windows watchdog.

```cpp
WindowsWatchdog::vftable
```

## Usage Example

```csharp
// Example: the network system is internal to the engine's multiplayer stack.
// Modders do not call these vftables directly. Use this reference to identify
// session or socket classes when analyzing multiplayer crash logs or
// desync diagnostics.
```

---

**Last updated:** 2026-05-14  
**Source version:** TaleWorlds.Native.dll v1.3.15
