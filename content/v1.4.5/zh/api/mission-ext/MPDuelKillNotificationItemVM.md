---
title: "MPDuelKillNotificationItemVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPDuelKillNotificationItemVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPDuelKillNotificationItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPDuelKillNotificationItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed/MPDuelKillNotificationItemVM.cs`

## 概述

`MPDuelKillNotificationItemVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEndOfDuel` | `public bool IsEndOfDuel { get; set; }` |
| `ArenaType` | `public int ArenaType { get; set; }` |
| `FirstPlayerScore` | `public int FirstPlayerScore { get; set; }` |
| `SecondPlayerScore` | `public int SecondPlayerScore { get; set; }` |
| `FirstPlayerName` | `public string FirstPlayerName { get; set; }` |
| `SecondPlayerName` | `public string SecondPlayerName { get; set; }` |
| `FirstPlayerCompassElement` | `public MPTeammateCompassTargetVM FirstPlayerCompassElement { get; set; }` |
| `SecondPlayerCompassElement` | `public MPTeammateCompassTargetVM SecondPlayerCompassElement { get; set; }` |

## 主要方法

### InitProperties
`public void InitProperties(MissionPeer firstPlayerPeer, MissionPeer secondPlayerPeer)`

**用途 / Purpose:** 初始化 `properties` 的状态、资源或绑定。

### ExecuteRemove
`public void ExecuteRemove()`

**用途 / Purpose:** 执行 `remove` 操作或流程。

## 使用示例

```csharp
var value = new MPDuelKillNotificationItemVM();
value.InitProperties(firstPlayerPeer, secondPlayerPeer);
```

## 参见

- [完整类目录](../catalog)