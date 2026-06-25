---
title: "MultiplayerEndOfRoundVM"
description: "MultiplayerEndOfRoundVM 的自动生成类参考。"
---
# MultiplayerEndOfRoundVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.EndOfRound
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerEndOfRoundVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.EndOfRound/MultiplayerEndOfRoundVM.cs`

## 概述

`MultiplayerEndOfRoundVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.EndOfRound`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.EndOfRound` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsShown` | `public bool IsShown { get; set; }` |
| `HasAttackerMVP` | `public bool HasAttackerMVP { get; set; }` |
| `HasDefenderMVP` | `public bool HasDefenderMVP { get; set; }` |
| `Title` | `public string Title { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `CultureId` | `public string CultureId { get; set; }` |
| `IsRoundWinner` | `public bool IsRoundWinner { get; set; }` |
| `AttackerSide` | `public MultiplayerEndOfRoundSideVM AttackerSide { get; set; }` |
| `DefenderSide` | `public MultiplayerEndOfRoundSideVM DefenderSide { get; set; }` |
| `AttackerMVP` | `public MPPlayerVM AttackerMVP { get; set; }` |
| `DefenderMVP` | `public MPPlayerVM DefenderMVP { get; set; }` |
| `AttackerMVPTitleText` | `public string AttackerMVPTitleText { get; set; }` |
| `DefenderMVPTitleText` | `public string DefenderMVPTitleText { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MultiplayerEndOfRoundVM 实例
MultiplayerEndOfRoundVM multiplayerEndOfRoundVM = ...;
multiplayerEndOfRoundVM.RefreshValues();
```

### Refresh
`public void Refresh()`

**用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MultiplayerEndOfRoundVM 实例
MultiplayerEndOfRoundVM multiplayerEndOfRoundVM = ...;
multiplayerEndOfRoundVM.Refresh();
```

### OnMVPSelected
`public void OnMVPSelected(MissionPeer mvpPeer)`

**用途 / Purpose:** 在 m v p selected 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerEndOfRoundVM 实例
MultiplayerEndOfRoundVM multiplayerEndOfRoundVM = ...;
multiplayerEndOfRoundVM.OnMVPSelected(mvpPeer);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MultiplayerEndOfRoundVM multiplayerEndOfRoundVM = ...;
multiplayerEndOfRoundVM.RefreshValues();
```

## 参见

- [本区域目录](../)