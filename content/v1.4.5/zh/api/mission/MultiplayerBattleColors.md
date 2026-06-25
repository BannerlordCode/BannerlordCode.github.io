---
title: "MultiplayerBattleColors"
description: "MultiplayerBattleColors 的自动生成类参考。"
---
# MultiplayerBattleColors

**Namespace:** TaleWorlds.MountAndBlade.Missions.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `struct MultiplayerBattleColors`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Missions.Multiplayer/MultiplayerBattleColors.cs`

## 概述

`MultiplayerBattleColors` 位于 `TaleWorlds.MountAndBlade.Missions.Multiplayer`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Missions.Multiplayer` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### MultiplayerCultureColorInfo
`public readonly struct MultiplayerCultureColorInfo(BasicCultureObject culture, bool swapColors)`

**用途 / Purpose:** 获取或维护 「multiplayer culture color info」 数据。

```csharp
// 先通过子系统 API 拿到 MultiplayerBattleColors 实例
MultiplayerBattleColors multiplayerBattleColors = ...;
var result = multiplayerBattleColors.MultiplayerCultureColorInfo(culture, false);
```

### CreateWith
`public static MultiplayerBattleColors CreateWith(BasicCultureObject attackerCulture, BasicCultureObject defenderCulture)`

**用途 / Purpose:** 构建一个新的 「with」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MultiplayerBattleColors.CreateWith(attackerCulture, defenderCulture);
```

### GetPeerColors
`public MultiplayerCultureColorInfo GetPeerColors(MissionPeer peer)`

**用途 / Purpose:** 读取并返回当前对象中 「peer colors」 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerBattleColors 实例
MultiplayerBattleColors multiplayerBattleColors = ...;
var result = multiplayerBattleColors.GetPeerColors(peer);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MultiplayerBattleColors multiplayerBattleColors = ...;
multiplayerBattleColors.MultiplayerCultureColorInfo(culture, false);
```

## 参见

- [本区域目录](../)