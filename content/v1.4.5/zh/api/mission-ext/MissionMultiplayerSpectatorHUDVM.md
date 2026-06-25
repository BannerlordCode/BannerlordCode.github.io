---
title: "MissionMultiplayerSpectatorHUDVM"
description: "MissionMultiplayerSpectatorHUDVM 的自动生成类参考。"
---
# MissionMultiplayerSpectatorHUDVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMultiplayerSpectatorHUDVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions/MissionMultiplayerSpectatorHUDVM.cs`

## 概述

`MissionMultiplayerSpectatorHUDVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SpectatedPlayerNeutrality` | `public int SpectatedPlayerNeutrality { get; set; }` |
| `CompassElement` | `public MPTeammateCompassTargetVM CompassElement { get; set; }` |
| `IsSpectatingAgent` | `public bool IsSpectatingAgent { get; set; }` |
| `AgentHasCompassElement` | `public bool AgentHasCompassElement { get; set; }` |
| `AgentHasMount` | `public bool AgentHasMount { get; set; }` |
| `ShowAgentHealth` | `public bool ShowAgentHealth { get; set; }` |
| `AgentHasRangedWeapon` | `public bool AgentHasRangedWeapon { get; set; }` |
| `AgentHasShield` | `public bool AgentHasShield { get; set; }` |
| `CanTakeControlOfSpectatedAgent` | `public bool CanTakeControlOfSpectatedAgent { get; set; }` |
| `SpectatedPlayerName` | `public string SpectatedPlayerName { get; set; }` |
| `TakeControlText` | `public string TakeControlText { get; set; }` |
| `SpectatedPlayerHealthLimit` | `public float SpectatedPlayerHealthLimit { get; set; }` |
| `SpectatedPlayerCurrentHealth` | `public float SpectatedPlayerCurrentHealth { get; set; }` |
| `SpectatedPlayerMountCurrentHealth` | `public float SpectatedPlayerMountCurrentHealth { get; set; }` |
| `SpectatedPlayerMountHealthLimit` | `public float SpectatedPlayerMountHealthLimit { get; set; }` |
| `SpectatedPlayerShieldCurrentHealth` | `public float SpectatedPlayerShieldCurrentHealth { get; set; }` |
| `SpectatedPlayerShieldHealthLimit` | `public float SpectatedPlayerShieldHealthLimit { get; set; }` |
| `SpectatedPlayerAmmoAmount` | `public int SpectatedPlayerAmmoAmount { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerSpectatorHUDVM 实例
MissionMultiplayerSpectatorHUDVM missionMultiplayerSpectatorHUDVM = ...;
missionMultiplayerSpectatorHUDVM.RefreshValues();
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 MissionMultiplayerSpectatorHUDVM 实例
MissionMultiplayerSpectatorHUDVM missionMultiplayerSpectatorHUDVM = ...;
missionMultiplayerSpectatorHUDVM.Tick(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionMultiplayerSpectatorHUDVM missionMultiplayerSpectatorHUDVM = ...;
missionMultiplayerSpectatorHUDVM.RefreshValues();
```

## 参见

- [本区域目录](../)