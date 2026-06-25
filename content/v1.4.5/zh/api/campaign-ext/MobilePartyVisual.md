---
title: "MobilePartyVisual"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MobilePartyVisual`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MobilePartyVisual

**Namespace:** SandBox.View.Map.Visuals
**Module:** SandBox.View
**Type:** `public class MobilePartyVisual : MapEntityVisual<PartyBase>`
**Base:** `MapEntityVisual<PartyBase>`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Map.Visuals/MobilePartyVisual.cs`

## 概述

`MobilePartyVisual` 位于 `SandBox.View.Map.Visuals`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.View.Map.Visuals` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AttachedTo` | `public override MapEntityVisual AttachedTo { get; }` |
| `StrategicEntity` | `public GameEntity StrategicEntity { get; }` |
| `HumanAgentVisuals` | `public AgentVisuals HumanAgentVisuals { get; }` |
| `MountAgentVisuals` | `public AgentVisuals MountAgentVisuals { get; }` |
| `CaravanMountAgentVisuals` | `public AgentVisuals CaravanMountAgentVisuals { get; }` |

## 主要方法

### IsEnemyOf
`public override bool IsEnemyOf(IFaction faction)`

**用途 / Purpose:** 处理 `is enemy of` 相关逻辑。

### IsInSameFaction
`public override bool IsInSameFaction(IFaction faction)`

**用途 / Purpose:** 处理 `is in same faction` 相关逻辑。

### IsAllyOf
`public override bool IsAllyOf(IFaction faction)`

**用途 / Purpose:** 处理 `is ally of` 相关逻辑。

### OnTrackAction
`public override void OnTrackAction()`

**用途 / Purpose:** 当 `track action` 事件触发时调用此方法。

### OnMapClick
`public override bool OnMapClick(bool followModifierUsed)`

**用途 / Purpose:** 当 `map click` 事件触发时调用此方法。

### OnHover
`public override void OnHover()`

**用途 / Purpose:** 当 `hover` 事件触发时调用此方法。

### GetVisualPosition
`public override Vec3 GetVisualPosition()`

**用途 / Purpose:** 获取 `visual position` 的当前值。

### ReleaseResources
`public override void ReleaseResources()`

**用途 / Purpose:** 处理 `release resources` 相关逻辑。

### IsVisibleOrFadingOut
`public override bool IsVisibleOrFadingOut()`

**用途 / Purpose:** 处理 `is visible or fading out` 相关逻辑。

### OnOpenEncyclopedia
`public override void OnOpenEncyclopedia()`

**用途 / Purpose:** 当 `open encyclopedia` 事件触发时调用此方法。

### GetBannerOfCharacter
`public static MetaMesh GetBannerOfCharacter(Banner banner, string bannerMeshName)`

**用途 / Purpose:** 获取 `banner of character` 的当前值。

### AddTentEntityForParty
`public void AddTentEntityForParty(GameEntity strategicEntity, PartyBase party, ref bool clearBannerComponentCache)`

**用途 / Purpose:** 向当前集合/状态中添加 `tent entity for party`。

## 使用示例

```csharp
var value = new MobilePartyVisual();
value.IsEnemyOf(faction);
```

## 参见

- [完整类目录](../catalog)