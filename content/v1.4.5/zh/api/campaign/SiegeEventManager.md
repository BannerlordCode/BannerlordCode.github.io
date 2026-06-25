---
title: "SiegeEventManager"
description: "SiegeEventManager 的自动生成类参考。"
---
# SiegeEventManager

**Namespace:** TaleWorlds.CampaignSystem.Siege
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SiegeEventManager`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Siege/SiegeEventManager.cs`

## 概述

`SiegeEventManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `SiegeEventManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### StartSiegeEvent
`public SiegeEvent StartSiegeEvent(Settlement settlement, MobileParty besiegerParty)`

**用途 / Purpose:** 启动siege event流程或状态机。

```csharp
// 先通过子系统 API 拿到 SiegeEventManager 实例
SiegeEventManager siegeEventManager = ...;
var result = siegeEventManager.StartSiegeEvent(settlement, besiegerParty);
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 SiegeEventManager 实例
SiegeEventManager siegeEventManager = ...;
siegeEventManager.Tick(0);
```

### OnAfterLoad
`public void OnAfterLoad()`

**用途 / Purpose:** 在 after load 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SiegeEventManager 实例
SiegeEventManager siegeEventManager = ...;
siegeEventManager.OnAfterLoad();
```

## 使用示例

```csharp
var manager = SiegeEventManager.Current;
```

## 参见

- [本区域目录](../)