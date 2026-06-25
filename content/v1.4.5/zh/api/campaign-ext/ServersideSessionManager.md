---
title: "ServersideSessionManager"
description: "ServersideSessionManager 的自动生成类参考。"
---
# ServersideSessionManager

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public abstract class ServersideSessionManager`
**Base:** 无
**File:** `bin/TaleWorlds.Network/TaleWorlds.Network/ServersideSessionManager.cs`

## 概述

`ServersideSessionManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `ServersideSessionManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `PeerAliveCoeff` | `public float PeerAliveCoeff { get; set; }` |

## 主要方法

### Activate
`public void Activate(ushort port, ThreadType threadType = ThreadType.Single, int readWriteThreadCount = 1)`

**用途 / Purpose:** 激活当前对象对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 ServersideSessionManager 实例
ServersideSessionManager serversideSessionManager = ...;
serversideSessionManager.Activate(0, threadType.Single, 0);
```

### GetPeer
`public ServersideSession GetPeer(int peerIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「peer」 的结果。

```csharp
// 先通过子系统 API 拿到 ServersideSessionManager 实例
ServersideSessionManager serversideSessionManager = ...;
var result = serversideSessionManager.GetPeer(0);
```

### Tick
`public virtual void Tick()`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 ServersideSessionManager 实例
ServersideSessionManager serversideSessionManager = ...;
serversideSessionManager.Tick();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
ServersideSessionManager instance = ...;
```

## 参见

- [本区域目录](../)