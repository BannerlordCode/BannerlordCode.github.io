---
title: "MultiplayerLobbyGauntletScreen"
description: "MultiplayerLobbyGauntletScreen 的自动生成类参考。"
---
# MultiplayerLobbyGauntletScreen

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyGauntletScreen : ScreenBase, IGameStateListener, ILobbyStateHandler, IChatLogHandlerScreen`
**Base:** `ScreenBase`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/MultiplayerLobbyGauntletScreen.cs`

## 概述

`MultiplayerLobbyGauntletScreen` 位于 `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentPage` | `public MPLobbyVM.LobbyPage CurrentPage { get; }` |

## 主要方法

### OnBattleServerInformationReceived
`public void OnBattleServerInformationReceived(BattleServerInformationForClient battleServerInformation)`

**用途 / Purpose:** 在 「battle server information received」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerLobbyGauntletScreen 实例
MultiplayerLobbyGauntletScreen multiplayerLobbyGauntletScreen = ...;
multiplayerLobbyGauntletScreen.OnBattleServerInformationReceived(battleServerInformation);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MultiplayerLobbyGauntletScreen multiplayerLobbyGauntletScreen = ...;
multiplayerLobbyGauntletScreen.OnBattleServerInformationReceived(battleServerInformation);
```

## 参见

- [本区域目录](../)