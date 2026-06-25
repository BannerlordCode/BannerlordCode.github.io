---
title: "MissionSiegeEngineMarkerTargetVM"
description: "MissionSiegeEngineMarkerTargetVM 的自动生成类参考。"
---
# MissionSiegeEngineMarkerTargetVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionSiegeEngineMarkerTargetVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker/MissionSiegeEngineMarkerTargetVM.cs`

## 概述

`MissionSiegeEngineMarkerTargetVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Engine` | `public SiegeWeapon Engine { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsEnemy` | `public bool IsEnemy { get; set; }` |
| `EngineType` | `public string EngineType { get; set; }` |
| `IsBehind` | `public bool IsBehind { get; set; }` |
| `ScreenPosition` | `public Vec2 ScreenPosition { get; set; }` |
| `Distance` | `public float Distance { get; set; }` |
| `HitPoints` | `public int HitPoints { get; set; }` |

## 主要方法

### Refresh
`public void Refresh()`

**用途 / Purpose:** **用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MissionSiegeEngineMarkerTargetVM 实例
MissionSiegeEngineMarkerTargetVM missionSiegeEngineMarkerTargetVM = ...;
missionSiegeEngineMarkerTargetVM.Refresh();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionSiegeEngineMarkerTargetVM missionSiegeEngineMarkerTargetVM = ...;
missionSiegeEngineMarkerTargetVM.Refresh();
```

## 参见

- [本区域目录](../)