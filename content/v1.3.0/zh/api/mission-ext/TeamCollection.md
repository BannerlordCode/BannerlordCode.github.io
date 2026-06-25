---
title: "TeamCollection"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TeamCollection`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TeamCollection

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class TeamCollection : List<Team>`
**Base:** `List<Team>`
**File:** `TaleWorlds.MountAndBlade/Mission.cs`

## 概述

`TeamCollection` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Attacker` | `public Team Attacker { get; }` |
| `Defender` | `public Team Defender { get; }` |
| `AttackerAlly` | `public Team AttackerAlly { get; }` |
| `DefenderAlly` | `public Team DefenderAlly { get; }` |
| `Player` | `public Team Player { get; set; }` |
| `PlayerEnemy` | `public Team PlayerEnemy { get; }` |
| `PlayerAlly` | `public Team PlayerAlly { get; }` |

## 主要方法

### Add
`public new void Add(Team t)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### Add
`public Team Add(BattleSideEnum side, uint color = 4294967295U, uint color2 = 4294967295U, Banner banner = null, bool isPlayerGeneral = true, bool isPlayerSergeant = false, bool isSettingRelations = true)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### Find
`public Team Find(MBTeam mbTeam)`

**用途 / Purpose:** 处理 `find` 相关逻辑。

### ClearResources
`public void ClearResources()`

**用途 / Purpose:** 处理 `clear resources` 相关逻辑。

### Clear
`public new void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

## 使用示例

```csharp
var value = new TeamCollection();
value.Add(t);
```

## 参见

- [完整类目录](../catalog)