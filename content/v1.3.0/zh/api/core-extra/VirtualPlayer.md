---
title: "VirtualPlayer"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VirtualPlayer`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### AddComponent
`public PeerComponent AddComponent(Type peerComponentType)`

**用途 / Purpose:** 向当前集合/状态中添加 `component`。

### AddComponent
`public PeerComponent AddComponent(uint componentId)`

**用途 / Purpose:** 向当前集合/状态中添加 `component`。

### GetComponent
`public PeerComponent GetComponent(uint componentId)`

**用途 / Purpose:** 获取 `component` 的当前值。

### GetComponent
`public PeerComponent GetComponent(Type peerComponentType)`

**用途 / Purpose:** 获取 `component` 的当前值。

### RemoveComponent
`public void RemoveComponent(PeerComponent component)`

**用途 / Purpose:** 从当前集合/状态中移除 `component`。

### OnDisconnect
`public void OnDisconnect()`

**用途 / Purpose:** 当 `disconnect` 事件触发时调用此方法。

### SynchronizeComponentsTo
`public void SynchronizeComponentsTo(VirtualPlayer peer)`

**用途 / Purpose:** 处理 `synchronize components to` 相关逻辑。

### UpdateIndexForReconnectingPlayer
`public void UpdateIndexForReconnectingPlayer(int playerIndex)`

**用途 / Purpose:** 更新 `index for reconnecting player` 的状态或数据。

## 使用示例

```csharp
VirtualPlayer.Reset();
```

## 参见

- [完整类目录](../catalog)