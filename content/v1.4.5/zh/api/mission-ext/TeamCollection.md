---
title: "TeamCollection"
description: "TeamCollection 的自动生成类参考。"
---
# TeamCollection

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class TeamCollection : List<Team>`
**Base:** `List<Team>`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Mission.cs`

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
| `Player` | `public Team Player { get; }` |
| `PlayerEnemy` | `public Team PlayerEnemy { get; }` |
| `PlayerAlly` | `public Team PlayerAlly { get; }` |

## 主要方法

### Add
`public new void Add(Team t)`

**用途 / Purpose:** 向当前容器或状态添加项。

```csharp
// 先通过子系统 API 拿到 TeamCollection 实例
TeamCollection teamCollection = ...;
teamCollection.Add(t);
```

### Add
`public Team Add(BattleSideEnum side, uint color = uint.MaxValue, uint color2 = uint.MaxValue, Banner banner = null, bool isPlayerGeneral = true, bool isPlayerSergeant = false, bool isSettingRelations = true)`

**用途 / Purpose:** 向当前容器或状态添加项。

```csharp
// 先通过子系统 API 拿到 TeamCollection 实例
TeamCollection teamCollection = ...;
var result = teamCollection.Add(side, 0, 0, null, false, false, false);
```

### Find
`public Team Find(MBTeam mbTeam)`

**用途 / Purpose:** 在当前集合/范围内查找匹配项。

```csharp
// 先通过子系统 API 拿到 TeamCollection 实例
TeamCollection teamCollection = ...;
var result = teamCollection.Find(mbTeam);
```

### ClearResources
`public void ClearResources()`

**用途 / Purpose:** 清空当前对象中的resources。

```csharp
// 先通过子系统 API 拿到 TeamCollection 实例
TeamCollection teamCollection = ...;
teamCollection.ClearResources();
```

### Clear
`public new void Clear()`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 TeamCollection 实例
TeamCollection teamCollection = ...;
teamCollection.Clear();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TeamCollection teamCollection = ...;
teamCollection.Add(t);
```

## 参见

- [本区域目录](../)