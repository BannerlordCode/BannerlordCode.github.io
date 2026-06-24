<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ServersideSessionManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ServersideSessionManager

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public abstract class ServersideSessionManager`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Network/TaleWorlds.Network/ServersideSessionManager.cs`

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

**用途 / Purpose:** 处理 `activate` 相关逻辑。

### GetPeer
`public ServersideSession GetPeer(int peerIndex)`

**用途 / Purpose:** 获取 `peer` 的当前值。

### Tick
`public virtual void Tick()`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomServersideSessionManager();
```

## 参见

- [完整类目录](../catalog)