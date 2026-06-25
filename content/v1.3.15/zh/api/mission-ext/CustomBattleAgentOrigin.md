---
title: "CustomBattleAgentOrigin"
description: "CustomBattleAgentOrigin 的自动生成类参考。"
---
# CustomBattleAgentOrigin

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleAgentOrigin : IAgentOriginBase`
**Base:** `IAgentOriginBase`
**File:** `TaleWorlds.MountAndBlade/CustomBattleAgentOrigin.cs`

## 概述

`CustomBattleAgentOrigin` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CustomBattleCombatant` | `public CustomBattleCombatant CustomBattleCombatant { get; }` |
| `Troop` | `public BasicCharacterObject Troop { get; }` |
| `Rank` | `public int Rank { get; }` |
| `Banner` | `public Banner Banner { get; }` |
| `IsUnderPlayersCommand` | `public bool IsUnderPlayersCommand { get; }` |
| `FactionColor` | `public uint FactionColor { get; }` |
| `FactionColor2` | `public uint FactionColor2 { get; }` |
| `Seed` | `public int Seed { get; }` |
| `UniqueSeed` | `public int UniqueSeed { get; }` |

## 主要方法

### SetWounded
`public void SetWounded()`

**用途 / Purpose:** 为 wounded 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CustomBattleAgentOrigin 实例
CustomBattleAgentOrigin customBattleAgentOrigin = ...;
customBattleAgentOrigin.SetWounded();
```

### SetKilled
`public void SetKilled()`

**用途 / Purpose:** 为 killed 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CustomBattleAgentOrigin 实例
CustomBattleAgentOrigin customBattleAgentOrigin = ...;
customBattleAgentOrigin.SetKilled();
```

### SetRouted
`public void SetRouted(bool isOrderRetreat)`

**用途 / Purpose:** 为 routed 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CustomBattleAgentOrigin 实例
CustomBattleAgentOrigin customBattleAgentOrigin = ...;
customBattleAgentOrigin.SetRouted(false);
```

### OnAgentRemoved
`public void OnAgentRemoved(float agentHealth)`

**用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CustomBattleAgentOrigin 实例
CustomBattleAgentOrigin customBattleAgentOrigin = ...;
customBattleAgentOrigin.OnAgentRemoved(0);
```

### SetBanner
`public void SetBanner(Banner banner)`

**用途 / Purpose:** 为 banner 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CustomBattleAgentOrigin 实例
CustomBattleAgentOrigin customBattleAgentOrigin = ...;
customBattleAgentOrigin.SetBanner(banner);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CustomBattleAgentOrigin customBattleAgentOrigin = ...;
customBattleAgentOrigin.SetWounded();
```

## 参见

- [本区域目录](../)