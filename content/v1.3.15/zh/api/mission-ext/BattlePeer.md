---
title: "BattlePeer"
description: "BattlePeer 的自动生成类参考。"
---
# BattlePeer

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattlePeer`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Diamond/BattlePeer.cs`

## 概述

`BattlePeer` 位于 `TaleWorlds.MountAndBlade.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Index` | `public int Index { get; }` |
| `Name` | `public string Name { get; }` |
| `PlayerId` | `public PlayerId PlayerId { get; }` |
| `TeamNo` | `public int TeamNo { get; }` |
| `BattleJoinType` | `public BattleJoinType BattleJoinType { get; }` |
| `Quit` | `public bool Quit { get; }` |
| `PlayerData` | `public PlayerData PlayerData { get; }` |
| `UsedCosmetics` | `public Dictionary<string, List<string>> UsedCosmetics { get; }` |
| `SessionKey` | `public int SessionKey { get; }` |
| `QuitType` | `public BattlePeerQuitType QuitType { get; }` |

## 主要方法

### Rejoin
`public void Rejoin(int teamNo)`

**用途 / Purpose:** 处理与 「rejoin」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 BattlePeer 实例
BattlePeer battlePeer = ...;
battlePeer.Rejoin(0);
```

### InitializeSession
`public void InitializeSession(int index, int sessionKey)`

**用途 / Purpose:** 为 「session」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BattlePeer 实例
BattlePeer battlePeer = ...;
battlePeer.InitializeSession(0, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BattlePeer battlePeer = ...;
battlePeer.Rejoin(0);
```

## 参见

- [本区域目录](../)