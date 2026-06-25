---
title: "MultiplayerPracticeMissions"
description: "MultiplayerPracticeMissions 的自动生成类参考。"
---
# MultiplayerPracticeMissions

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MultiplayerPracticeMissions`
**Base:** 无
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer/MultiplayerPracticeMissions.cs`

## 概述

`MultiplayerPracticeMissions` 位于 `TaleWorlds.MountAndBlade.Multiplayer`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OpenMultiplayerPracticeMission
`public static Mission OpenMultiplayerPracticeMission(string scene, BasicCharacterObject playerCharacter, CustomBattleCombatant playerParty, CustomBattleCombatant enemyParty, bool isPlayerGeneral, BasicCharacterObject playerSideGeneralCharacter, string sceneLevels = "", string seasonString = "", float timeOfDay = 6f)`

**用途 / Purpose:** 打开「multiplayer practice mission」对应的资源或界面。

```csharp
// 静态调用，不需要实例
MultiplayerPracticeMissions.OpenMultiplayerPracticeMission("example", playerCharacter, playerParty, enemyParty, false, playerSideGeneralCharacter, "example", "example", 0);
```

## 使用示例

```csharp
MultiplayerPracticeMissions.OpenMultiplayerPracticeMission("example", playerCharacter, playerParty, enemyParty, false, playerSideGeneralCharacter, "example", "example", 0);
```

## 参见

- [本区域目录](../)