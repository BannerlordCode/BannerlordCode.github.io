---
title: "VisualShipFactory"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VisualShipFactory`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# VisualShipFactory

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class VisualShipFactory`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/VisualShipFactory.cs`

## 概述

`VisualShipFactory` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### InitializeShipEntityCache
`public static void InitializeShipEntityCache(Scene scene)`

**用途 / Purpose:** 初始化 `ship entity cache` 的状态、资源或绑定。

### DeregisterVisualShipCache
`public static void DeregisterVisualShipCache()`

**用途 / Purpose:** 处理 `deregister visual ship cache` 相关逻辑。

### CreateVisualShip
`public static GameEntity CreateVisualShip(string shipPrefab, Scene scene, List<ShipVisualSlotInfo> upgrades, int shipSeed, float hitPointRatio, uint sailColor1 = uint.MaxValue, uint sailColor2 = uint.MaxValue, bool createPhysics = false)`

**用途 / Purpose:** 创建一个 `visual ship` 实例或对象。

### CreateVisualShipForCampaign
`public static GameEntity CreateVisualShipForCampaign(string shipPrefab, Scene scene, List<ShipVisualSlotInfo> upgrades, int shipSeed, string shipCustomSailPatternId, uint sailColor1 = uint.MaxValue, uint sailColor2 = uint.MaxValue)`

**用途 / Purpose:** 创建一个 `visual ship for campaign` 实例或对象。

### RefreshUpgrades
`public static void RefreshUpgrades(WeakGameEntity shipEntity, List<ShipVisualSlotInfo> upgrades)`

**用途 / Purpose:** 刷新 `upgrades` 的显示或缓存。

## 使用示例

```csharp
VisualShipFactory.InitializeShipEntityCache(scene);
```

## 参见

- [完整类目录](../catalog)