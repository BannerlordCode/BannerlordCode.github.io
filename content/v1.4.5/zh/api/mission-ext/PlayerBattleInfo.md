---
title: "PlayerBattleInfo"
description: "PlayerBattleInfo 的自动生成类参考。"
---
# PlayerBattleInfo

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerBattleInfo`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/PlayerBattleInfo.cs`

## 概述

`PlayerBattleInfo` 位于 `TaleWorlds.MountAndBlade.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerId` | `public PlayerId PlayerId { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `TeamNo` | `public int TeamNo { get; set; }` |
| `JoinType` | `public BattleJoinType JoinType { get; set; }` |
| `PeerIndex` | `public int PeerIndex { get; set; }` |

## 主要方法

### Flee
`public void Flee()`

**用途 / Purpose:** **用途 / Purpose:** 调用 Flee 对应的操作。

```csharp
// 先通过子系统 API 拿到 PlayerBattleInfo 实例
PlayerBattleInfo playerBattleInfo = ...;
playerBattleInfo.Flee();
```

### Disconnect
`public void Disconnect()`

**用途 / Purpose:** **用途 / Purpose:** 调用 Disconnect 对应的操作。

```csharp
// 先通过子系统 API 拿到 PlayerBattleInfo 实例
PlayerBattleInfo playerBattleInfo = ...;
playerBattleInfo.Disconnect();
```

### Initialize
`public void Initialize(int peerIndex)`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 PlayerBattleInfo 实例
PlayerBattleInfo playerBattleInfo = ...;
playerBattleInfo.Initialize(0);
```

### RejoinBattle
`public void RejoinBattle(int teamNo)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RejoinBattle 对应的操作。

```csharp
// 先通过子系统 API 拿到 PlayerBattleInfo 实例
PlayerBattleInfo playerBattleInfo = ...;
playerBattleInfo.RejoinBattle(0);
```

### Clone
`public PlayerBattleInfo Clone()`

**用途 / Purpose:** **用途 / Purpose:** 复制当前对象的状态并返回一个新实例。

```csharp
// 先通过子系统 API 拿到 PlayerBattleInfo 实例
PlayerBattleInfo playerBattleInfo = ...;
var result = playerBattleInfo.Clone();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PlayerBattleInfo playerBattleInfo = ...;
playerBattleInfo.Flee();
```

## 参见

- [本区域目录](../)