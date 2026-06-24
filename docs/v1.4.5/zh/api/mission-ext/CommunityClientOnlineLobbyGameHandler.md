<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CommunityClientOnlineLobbyGameHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CommunityClientOnlineLobbyGameHandler

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CommunityClientOnlineLobbyGameHandler : ICommunityClientHandler`
**Base:** `ICommunityClientHandler`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/CommunityClientOnlineLobbyGameHandler.cs`

## 概述

`CommunityClientOnlineLobbyGameHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `CommunityClientOnlineLobbyGameHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `LobbyState` | `public LobbyState LobbyState { get; }` |

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new CommunityClientOnlineLobbyGameHandler());
```

## 参见

- [完整类目录](../catalog)