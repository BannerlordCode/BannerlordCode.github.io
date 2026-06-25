---
title: "MissionResult"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionResult`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionResult

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MissionResult`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/MissionResult.cs`

## 概述

`MissionResult` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `BattleState` | `public BattleState BattleState { get; }` |
| `BattleResolved` | `public bool BattleResolved { get; }` |
| `PlayerVictory` | `public bool PlayerVictory { get; }` |
| `PlayerDefeated` | `public bool PlayerDefeated { get; }` |
| `EnemyRetreated` | `public bool EnemyRetreated { get; }` |

## 主要方法

### CreateSuccessful
`public static MissionResult CreateSuccessful(IMission mission, bool enemyRetreated = false)`

**用途 / Purpose:** 创建一个 `successful` 实例或对象。

### CreateDefeated
`public static MissionResult CreateDefeated(IMission mission)`

**用途 / Purpose:** 创建一个 `defeated` 实例或对象。

### CreateDefenderPushedBack
`public static MissionResult CreateDefenderPushedBack()`

**用途 / Purpose:** 创建一个 `defender pushed back` 实例或对象。

## 使用示例

```csharp
MissionResult.CreateSuccessful(mission, false);
```

## 参见

- [完整类目录](../catalog)