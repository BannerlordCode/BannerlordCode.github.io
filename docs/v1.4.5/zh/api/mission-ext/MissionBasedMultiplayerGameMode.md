<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionBasedMultiplayerGameMode`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionBasedMultiplayerGameMode

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionBasedMultiplayerGameMode : MultiplayerGameMode`
**Base:** `MultiplayerGameMode`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/MissionBasedMultiplayerGameMode.cs`

## 概述

`MissionBasedMultiplayerGameMode` 位于 `TaleWorlds.MountAndBlade.Multiplayer`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### JoinCustomGame
`public override void JoinCustomGame(JoinGameData joinGameData)`

**用途 / Purpose:** 处理 `join custom game` 相关逻辑。

### StartMultiplayerGame
`public override void StartMultiplayerGame(string scene)`

**用途 / Purpose:** 处理 `start multiplayer game` 相关逻辑。

## 使用示例

```csharp
var value = new MissionBasedMultiplayerGameMode();
value.JoinCustomGame(joinGameData);
```

## 参见

- [完整类目录](../catalog)