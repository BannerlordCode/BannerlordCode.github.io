---
title: "CampaignPeriodicEventManager"
description: "CampaignPeriodicEventManager 的自动生成类参考。"
---
# CampaignPeriodicEventManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignPeriodicEventManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CampaignPeriodicEventManager.cs`

## 概述

`CampaignPeriodicEventManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `CampaignPeriodicEventManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CreatePeriodicEvent
`public static MBCampaignEvent CreatePeriodicEvent(CampaignTime triggerPeriod, CampaignTime initialWait)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 periodic event 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
CampaignPeriodicEventManager.CreatePeriodicEvent(triggerPeriod, initialWait);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 CampaignPeriodicEventManager 实例
CampaignPeriodicEventManager campaignPeriodicEventManager = ...;
var result = campaignPeriodicEventManager.ToString();
```

## 使用示例

```csharp
var manager = CampaignPeriodicEventManager.Current;
```

## 参见

- [本区域目录](../)