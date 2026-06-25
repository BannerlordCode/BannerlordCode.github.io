---
title: "MPDeathCardVM"
description: "MPDeathCardVM 的自动生成类参考。"
---
# MPDeathCardVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPDeathCardVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MPDeathCardVM.cs`

## 概述

`MPDeathCardVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; set; }` |
| `IsSelfInflicted` | `public bool IsSelfInflicted { get; set; }` |
| `KillCountsEnabled` | `public bool KillCountsEnabled { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `UsedWeaponName` | `public string UsedWeaponName { get; set; }` |
| `KillerName` | `public string KillerName { get; set; }` |
| `KillerText` | `public string KillerText { get; set; }` |
| `YouText` | `public string YouText { get; set; }` |
| `PlayerProperties` | `public MPPlayerVM PlayerProperties { get; set; }` |
| `BodyPartHit` | `public int BodyPartHit { get; set; }` |
| `NumOfTimesPlayerKilled` | `public int NumOfTimesPlayerKilled { get; set; }` |
| `NumOfTimesPlayerGotKilled` | `public int NumOfTimesPlayerGotKilled { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPDeathCardVM 实例
MPDeathCardVM mPDeathCardVM = ...;
mPDeathCardVM.RefreshValues();
```

### OnMainAgentRemoved
`public void OnMainAgentRemoved(Agent affectorAgent, KillingBlow blow)`

**用途 / Purpose:** **用途 / Purpose:** 在 main agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPDeathCardVM 实例
MPDeathCardVM mPDeathCardVM = ...;
mPDeathCardVM.OnMainAgentRemoved(affectorAgent, blow);
```

### Deactivate
`public void Deactivate()`

**用途 / Purpose:** **用途 / Purpose:** 停用当前对象对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 MPDeathCardVM 实例
MPDeathCardVM mPDeathCardVM = ...;
mPDeathCardVM.Deactivate();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPDeathCardVM mPDeathCardVM = ...;
mPDeathCardVM.RefreshValues();
```

## 参见

- [本区域目录](../)