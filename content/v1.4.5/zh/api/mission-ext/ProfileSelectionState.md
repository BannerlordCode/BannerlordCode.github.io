---
title: "ProfileSelectionState"
description: "ProfileSelectionState 的自动生成类参考。"
---
# ProfileSelectionState

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ProfileSelectionState : GameState`
**Base:** `GameState`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/ProfileSelectionState.cs`

## 概述

`ProfileSelectionState` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsDirectPlayPossible` | `public bool IsDirectPlayPossible { get; }` |

## 主要方法

### OnProfileSelectionEvent
`public delegate void OnProfileSelectionEvent()`

**用途 / Purpose:** **用途 / Purpose:** 在 profile selection event 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ProfileSelectionState 实例
ProfileSelectionState profileSelectionState = ...;
profileSelectionState.OnProfileSelectionEvent();
```

### OnProfileSelected
`public void OnProfileSelected()`

**用途 / Purpose:** **用途 / Purpose:** 在 profile selected 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ProfileSelectionState 实例
ProfileSelectionState profileSelectionState = ...;
profileSelectionState.OnProfileSelected();
```

### StartGame
`public void StartGame()`

**用途 / Purpose:** **用途 / Purpose:** 启动game流程或状态机。

```csharp
// 先通过子系统 API 拿到 ProfileSelectionState 实例
ProfileSelectionState profileSelectionState = ...;
profileSelectionState.StartGame();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ProfileSelectionState profileSelectionState = ...;
profileSelectionState.OnProfileSelectionEvent();
```

## 参见

- [本区域目录](../)