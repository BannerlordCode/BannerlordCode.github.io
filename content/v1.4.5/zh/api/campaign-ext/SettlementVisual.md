---
title: "SettlementVisual"
description: "SettlementVisual 的自动生成类参考。"
---
# SettlementVisual

**Namespace:** SandBox.View.Map.Visuals
**Module:** SandBox.View
**Type:** `public class SettlementVisual : MapEntityVisual<PartyBase>`
**Base:** `MapEntityVisual<PartyBase>`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map.Visuals/SettlementVisual.cs`

## 概述

`SettlementVisual` 位于 `SandBox.View.Map.Visuals`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.View.Map.Visuals` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `StrategicEntity` | `public GameEntity StrategicEntity { get; }` |

## 主要方法

### IsEnemyOf
`public override bool IsEnemyOf(IFaction faction)`

**用途 / Purpose:** 判断当前对象是否处于 「enemy of」 状态或条件。

```csharp
// 先通过子系统 API 拿到 SettlementVisual 实例
SettlementVisual settlementVisual = ...;
var result = settlementVisual.IsEnemyOf(faction);
```

### IsInSameFaction
`public override bool IsInSameFaction(IFaction faction)`

**用途 / Purpose:** 判断当前对象是否处于 「in same faction」 状态或条件。

```csharp
// 先通过子系统 API 拿到 SettlementVisual 实例
SettlementVisual settlementVisual = ...;
var result = settlementVisual.IsInSameFaction(faction);
```

### IsAllyOf
`public override bool IsAllyOf(IFaction faction)`

**用途 / Purpose:** 判断当前对象是否处于 「ally of」 状态或条件。

```csharp
// 先通过子系统 API 拿到 SettlementVisual 实例
SettlementVisual settlementVisual = ...;
var result = settlementVisual.IsAllyOf(faction);
```

### GetVisualPosition
`public override Vec3 GetVisualPosition()`

**用途 / Purpose:** 读取并返回当前对象中 「visual position」 的结果。

```csharp
// 先通过子系统 API 拿到 SettlementVisual 实例
SettlementVisual settlementVisual = ...;
var result = settlementVisual.GetVisualPosition();
```

### IsVisibleOrFadingOut
`public override bool IsVisibleOrFadingOut()`

**用途 / Purpose:** 判断当前对象是否处于 「visible or fading out」 状态或条件。

```csharp
// 先通过子系统 API 拿到 SettlementVisual 实例
SettlementVisual settlementVisual = ...;
var result = settlementVisual.IsVisibleOrFadingOut();
```

### OnHover
`public override void OnHover()`

**用途 / Purpose:** 在 「hover」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SettlementVisual 实例
SettlementVisual settlementVisual = ...;
settlementVisual.OnHover();
```

### OnTrackAction
`public override void OnTrackAction()`

**用途 / Purpose:** 在 「track action」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SettlementVisual 实例
SettlementVisual settlementVisual = ...;
settlementVisual.OnTrackAction();
```

### OnMapClick
`public override bool OnMapClick(bool followModifierUsed)`

**用途 / Purpose:** 在 「map click」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SettlementVisual 实例
SettlementVisual settlementVisual = ...;
var result = settlementVisual.OnMapClick(false);
```

### OnOpenEncyclopedia
`public override void OnOpenEncyclopedia()`

**用途 / Purpose:** 在 「open encyclopedia」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SettlementVisual 实例
SettlementVisual settlementVisual = ...;
settlementVisual.OnOpenEncyclopedia();
```

### ReleaseResources
`public override void ReleaseResources()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SettlementVisual 实例
SettlementVisual settlementVisual = ...;
settlementVisual.ReleaseResources();
```

### GetBannerPositionForParty
`public Vec3 GetBannerPositionForParty(MobileParty mobileParty)`

**用途 / Purpose:** 读取并返回当前对象中 「banner position for party」 的结果。

```csharp
// 先通过子系统 API 拿到 SettlementVisual 实例
SettlementVisual settlementVisual = ...;
var result = settlementVisual.GetBannerPositionForParty(mobileParty);
```

### GetAttackerTowerSiegeEngineFrames
`public MatrixFrame GetAttackerTowerSiegeEngineFrames()`

**用途 / Purpose:** 读取并返回当前对象中 「attacker tower siege engine frames」 的结果。

```csharp
// 先通过子系统 API 拿到 SettlementVisual 实例
SettlementVisual settlementVisual = ...;
var result = settlementVisual.GetAttackerTowerSiegeEngineFrames();
```

### GetAttackerBatteringRamSiegeEngineFrames
`public MatrixFrame GetAttackerBatteringRamSiegeEngineFrames()`

**用途 / Purpose:** 读取并返回当前对象中 「attacker battering ram siege engine frames」 的结果。

```csharp
// 先通过子系统 API 拿到 SettlementVisual 实例
SettlementVisual settlementVisual = ...;
var result = settlementVisual.GetAttackerBatteringRamSiegeEngineFrames();
```

### GetAttackerRangedSiegeEngineFrames
`public MatrixFrame GetAttackerRangedSiegeEngineFrames()`

**用途 / Purpose:** 读取并返回当前对象中 「attacker ranged siege engine frames」 的结果。

```csharp
// 先通过子系统 API 拿到 SettlementVisual 实例
SettlementVisual settlementVisual = ...;
var result = settlementVisual.GetAttackerRangedSiegeEngineFrames();
```

### GetDefenderRangedSiegeEngineFrames
`public MatrixFrame GetDefenderRangedSiegeEngineFrames()`

**用途 / Purpose:** 读取并返回当前对象中 「defender ranged siege engine frames」 的结果。

```csharp
// 先通过子系统 API 拿到 SettlementVisual 实例
SettlementVisual settlementVisual = ...;
var result = settlementVisual.GetDefenderRangedSiegeEngineFrames();
```

### GetBreachableWallFrames
`public MatrixFrame GetBreachableWallFrames()`

**用途 / Purpose:** 读取并返回当前对象中 「breachable wall frames」 的结果。

```csharp
// 先通过子系统 API 拿到 SettlementVisual 实例
SettlementVisual settlementVisual = ...;
var result = settlementVisual.GetBreachableWallFrames();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SettlementVisual settlementVisual = ...;
settlementVisual.IsEnemyOf(faction);
```

## 参见

- [本区域目录](../)