---
title: "VirtualPlayer"
description: "VirtualPlayer 的自动生成类参考。"
---
# VirtualPlayer

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class VirtualPlayer`
**Base:** 无
**File:** `TaleWorlds.Core/VirtualPlayer.cs`

## 概述

`VirtualPlayer` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PeerComponents` | `public static Dictionary<Type, object> PeerComponents { get; }` |
| `BannerCode` | `public string BannerCode { get; set; }` |
| `BodyProperties` | `public BodyProperties BodyProperties { get; }` |
| `Race` | `public int Race { get; }` |
| `IsFemale` | `public bool IsFemale { get; }` |
| `Id` | `public PlayerId Id { get; }` |
| `Index` | `public int Index { get; }` |
| `IsMine` | `public bool IsMine { get; }` |
| `UserName` | `public string UserName { get; }` |
| `ChosenBadgeIndex` | `public int ChosenBadgeIndex { get; set; }` |

## 主要方法

### Reset
`public static void Reset()`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 静态调用，不需要实例
VirtualPlayer.Reset();
```

### AddComponent
`public PeerComponent AddComponent(Type peerComponentType)`

**用途 / Purpose:** **用途 / Purpose:** 将 component 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 VirtualPlayer 实例
VirtualPlayer virtualPlayer = ...;
var result = virtualPlayer.AddComponent(peerComponentType);
```

### AddComponent
`public PeerComponent AddComponent(uint componentId)`

**用途 / Purpose:** **用途 / Purpose:** 将 component 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 VirtualPlayer 实例
VirtualPlayer virtualPlayer = ...;
var result = virtualPlayer.AddComponent(0);
```

### GetComponent
`public PeerComponent GetComponent(uint componentId)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 component 的结果。

```csharp
// 先通过子系统 API 拿到 VirtualPlayer 实例
VirtualPlayer virtualPlayer = ...;
var result = virtualPlayer.GetComponent(0);
```

### GetComponent
`public PeerComponent GetComponent(Type peerComponentType)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 component 的结果。

```csharp
// 先通过子系统 API 拿到 VirtualPlayer 实例
VirtualPlayer virtualPlayer = ...;
var result = virtualPlayer.GetComponent(peerComponentType);
```

### RemoveComponent
`public void RemoveComponent(PeerComponent component)`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除 component。

```csharp
// 先通过子系统 API 拿到 VirtualPlayer 实例
VirtualPlayer virtualPlayer = ...;
virtualPlayer.RemoveComponent(component);
```

### OnDisconnect
`public void OnDisconnect()`

**用途 / Purpose:** **用途 / Purpose:** 在 disconnect 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 VirtualPlayer 实例
VirtualPlayer virtualPlayer = ...;
virtualPlayer.OnDisconnect();
```

### SynchronizeComponentsTo
`public void SynchronizeComponentsTo(VirtualPlayer peer)`

**用途 / Purpose:** **用途 / Purpose:** 将hronize components to同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 VirtualPlayer 实例
VirtualPlayer virtualPlayer = ...;
virtualPlayer.SynchronizeComponentsTo(peer);
```

### UpdateIndexForReconnectingPlayer
`public void UpdateIndexForReconnectingPlayer(int playerIndex)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 index for reconnecting player 的最新表示。

```csharp
// 先通过子系统 API 拿到 VirtualPlayer 实例
VirtualPlayer virtualPlayer = ...;
virtualPlayer.UpdateIndexForReconnectingPlayer(0);
```

## 使用示例

```csharp
VirtualPlayer.Reset();
```

## 参见

- [本区域目录](../)