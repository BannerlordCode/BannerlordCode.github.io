---
title: "MultiplayerGame"
description: "MultiplayerGame 的自动生成类参考。"
---
# MultiplayerGame

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerGame : GameType`
**Base:** `GameType`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MultiplayerGame.cs`

## 概述

`MultiplayerGame` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### ReadDefaultEquipments
`public static Dictionary<string, Equipment> ReadDefaultEquipments(string defaultEquipmentsPath)`

**用途 / Purpose:** 从当前实例读取default equipments相关数据。

```csharp
// 静态调用，不需要实例
MultiplayerGame.ReadDefaultEquipments("example");
```

### OnDestroy
`public override void OnDestroy()`

**用途 / Purpose:** 在 destroy 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerGame 实例
MultiplayerGame multiplayerGame = ...;
multiplayerGame.OnDestroy();
```

### OnStateChanged
`public override void OnStateChanged(GameState oldState)`

**用途 / Purpose:** 在 state changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerGame 实例
MultiplayerGame multiplayerGame = ...;
multiplayerGame.OnStateChanged(oldState);
```

## 使用示例

```csharp
MultiplayerGame.ReadDefaultEquipments("example");
```

## 参见

- [本区域目录](../)