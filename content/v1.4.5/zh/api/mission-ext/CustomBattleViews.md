---
title: "CustomBattleViews"
description: "CustomBattleViews 的自动生成类参考。"
---
# CustomBattleViews

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleViews`
**Base:** 无
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/CustomBattleViews.cs`

## 概述

`CustomBattleViews` 位于 `TaleWorlds.MountAndBlade.CustomBattle`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.CustomBattle` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OpenCustomBattleMission
`public static MissionView OpenCustomBattleMission(Mission mission)`

**用途 / Purpose:** 打开「custom battle mission」对应的资源或界面。

```csharp
// 静态调用，不需要实例
CustomBattleViews.OpenCustomBattleMission(mission);
```

### OpenCustomSiegeBattleMission
`public static MissionView OpenCustomSiegeBattleMission(Mission mission)`

**用途 / Purpose:** 打开「custom siege battle mission」对应的资源或界面。

```csharp
// 静态调用，不需要实例
CustomBattleViews.OpenCustomSiegeBattleMission(mission);
```

### OpenCustomBattleLordsHallMission
`public static MissionView OpenCustomBattleLordsHallMission(Mission mission)`

**用途 / Purpose:** 打开「custom battle lords hall mission」对应的资源或界面。

```csharp
// 静态调用，不需要实例
CustomBattleViews.OpenCustomBattleLordsHallMission(mission);
```

## 使用示例

```csharp
CustomBattleViews.OpenCustomBattleMission(mission);
```

## 参见

- [本区域目录](../)