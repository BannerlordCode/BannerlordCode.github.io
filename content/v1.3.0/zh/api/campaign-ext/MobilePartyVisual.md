---
title: "MobilePartyVisual"
description: "MobilePartyVisual 的自动生成类参考。"
---
# MobilePartyVisual

**Namespace:** SandBox.View.Map.Visuals
**Module:** SandBox.View
**Type:** `public class MobilePartyVisual : MapEntityVisual<PartyBase>`
**Base:** `MapEntityVisual<PartyBase>`
**File:** `SandBox.View/Map/Visuals/MobilePartyVisual.cs`

## 概述

`MobilePartyVisual` 位于 `SandBox.View.Map.Visuals`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.View.Map.Visuals` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `BearingRotation` | `public override float BearingRotation { get; }` |
| `AttachedTo` | `public override MapEntityVisual AttachedTo { get; }` |
| `InteractionPositionForPlayer` | `public override CampaignVec2 InteractionPositionForPlayer { get; }` |
| `IsMobileEntity` | `public override bool IsMobileEntity { get; }` |
| `IsMainEntity` | `public override bool IsMainEntity { get; }` |
| `StrategicEntity` | `public GameEntity StrategicEntity { get; }` |
| `HumanAgentVisuals` | `public AgentVisuals HumanAgentVisuals { get; }` |
| `MountAgentVisuals` | `public AgentVisuals MountAgentVisuals { get; }` |
| `CaravanMountAgentVisuals` | `public AgentVisuals CaravanMountAgentVisuals { get; }` |

## 主要方法

### IsEnemyOf
`public override bool IsEnemyOf(IFaction faction)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 enemy of 状态或条件。

```csharp
// 先通过子系统 API 拿到 MobilePartyVisual 实例
MobilePartyVisual mobilePartyVisual = ...;
var result = mobilePartyVisual.IsEnemyOf(faction);
```

### IsAllyOf
`public override bool IsAllyOf(IFaction faction)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 ally of 状态或条件。

```csharp
// 先通过子系统 API 拿到 MobilePartyVisual 实例
MobilePartyVisual mobilePartyVisual = ...;
var result = mobilePartyVisual.IsAllyOf(faction);
```

### OnTrackAction
`public override void OnTrackAction()`

**用途 / Purpose:** **用途 / Purpose:** 在 track action 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MobilePartyVisual 实例
MobilePartyVisual mobilePartyVisual = ...;
mobilePartyVisual.OnTrackAction();
```

### OnMapClick
`public override bool OnMapClick(bool followModifierUsed)`

**用途 / Purpose:** **用途 / Purpose:** 在 map click 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MobilePartyVisual 实例
MobilePartyVisual mobilePartyVisual = ...;
var result = mobilePartyVisual.OnMapClick(false);
```

### OnHover
`public override void OnHover()`

**用途 / Purpose:** **用途 / Purpose:** 在 hover 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MobilePartyVisual 实例
MobilePartyVisual mobilePartyVisual = ...;
mobilePartyVisual.OnHover();
```

### GetVisualPosition
`public override Vec3 GetVisualPosition()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 visual position 的结果。

```csharp
// 先通过子系统 API 拿到 MobilePartyVisual 实例
MobilePartyVisual mobilePartyVisual = ...;
var result = mobilePartyVisual.GetVisualPosition();
```

### ReleaseResources
`public override void ReleaseResources()`

**用途 / Purpose:** **用途 / Purpose:** 调用 ReleaseResources 对应的操作。

```csharp
// 先通过子系统 API 拿到 MobilePartyVisual 实例
MobilePartyVisual mobilePartyVisual = ...;
mobilePartyVisual.ReleaseResources();
```

### IsVisibleOrFadingOut
`public override bool IsVisibleOrFadingOut()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 visible or fading out 状态或条件。

```csharp
// 先通过子系统 API 拿到 MobilePartyVisual 实例
MobilePartyVisual mobilePartyVisual = ...;
var result = mobilePartyVisual.IsVisibleOrFadingOut();
```

### OnOpenEncyclopedia
`public override void OnOpenEncyclopedia()`

**用途 / Purpose:** **用途 / Purpose:** 在 open encyclopedia 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MobilePartyVisual 实例
MobilePartyVisual mobilePartyVisual = ...;
mobilePartyVisual.OnOpenEncyclopedia();
```

### GetBannerOfCharacter
`public static MetaMesh GetBannerOfCharacter(Banner banner, string bannerMeshName)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 banner of character 的结果。

```csharp
// 静态调用，不需要实例
MobilePartyVisual.GetBannerOfCharacter(banner, "example");
```

### AddTentEntityForParty
`public void AddTentEntityForParty(GameEntity strategicEntity, PartyBase party, ref bool clearBannerComponentCache)`

**用途 / Purpose:** **用途 / Purpose:** 将 tent entity for party 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MobilePartyVisual 实例
MobilePartyVisual mobilePartyVisual = ...;
mobilePartyVisual.AddTentEntityForParty(strategicEntity, party, clearBannerComponentCache);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MobilePartyVisual mobilePartyVisual = ...;
mobilePartyVisual.IsEnemyOf(faction);
```

## 参见

- [本区域目录](../)