---
title: "MultiplayerEndOfRoundSideVM"
description: "MultiplayerEndOfRoundSideVM 的自动生成类参考。"
---
# MultiplayerEndOfRoundSideVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.EndOfRound
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerEndOfRoundSideVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.EndOfRound/MultiplayerEndOfRoundSideVM.cs`

## 概述

`MultiplayerEndOfRoundSideVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.EndOfRound`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.EndOfRound` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsWinner` | `public bool IsWinner { get; set; }` |
| `CultureColor1` | `public Color CultureColor1 { get; set; }` |
| `CultureColor2` | `public Color CultureColor2 { get; set; }` |
| `CultureID` | `public string CultureID { get; set; }` |
| `CultureName` | `public string CultureName { get; set; }` |
| `Score` | `public int Score { get; set; }` |

## 主要方法

### SetData
`public void SetData(BasicCultureObject culture, int score, bool isWinner, MultiplayerCultureColorInfo cultureColors)`

**用途 / Purpose:** 为 data 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MultiplayerEndOfRoundSideVM 实例
MultiplayerEndOfRoundSideVM multiplayerEndOfRoundSideVM = ...;
multiplayerEndOfRoundSideVM.SetData(culture, 0, false, cultureColors);
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MultiplayerEndOfRoundSideVM 实例
MultiplayerEndOfRoundSideVM multiplayerEndOfRoundSideVM = ...;
multiplayerEndOfRoundSideVM.RefreshValues();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MultiplayerEndOfRoundSideVM multiplayerEndOfRoundSideVM = ...;
multiplayerEndOfRoundSideVM.SetData(culture, 0, false, cultureColors);
```

## 参见

- [本区域目录](../)