<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerPermissionHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerPermissionHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPermissionHandler : UdpNetworkComponent`
**Base:** `UdpNetworkComponent`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MultiplayerPermissionHandler.cs`

## 概述

`MultiplayerPermissionHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MultiplayerPermissionHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnUdpNetworkHandlerClose
`public override void OnUdpNetworkHandlerClose()`

**用途 / Purpose:** 当 `udp network handler close` 事件触发时调用此方法。

### OnPlayerDisconnectedFromServer
`public override void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)`

**用途 / Purpose:** 当 `player disconnected from server` 事件触发时调用此方法。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new MultiplayerPermissionHandler());
```

## 参见

- [完整类目录](../catalog)