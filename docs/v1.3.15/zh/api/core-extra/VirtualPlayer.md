<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VirtualPlayer`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VirtualPlayer

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** `public class VirtualPlayer`
**领域:** core-extra

## 概述

`VirtualPlayer` 位于 `TaleWorlds.Core`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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
// 先准备该类型需要的上下文，然后直接调用静态入口
VirtualPlayer.Reset();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
