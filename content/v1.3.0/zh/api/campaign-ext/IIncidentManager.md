---
title: "IIncidentManager"
description: "IIncidentManager 的自动生成类参考。"
---
# IIncidentManager

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public interface IIncidentManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/IIncidentManager.cs`

## 概述

`IIncidentManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `IIncidentManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
// 通常通过依赖注入或工厂方法获得实现
IIIncidentManager service = ...;
```

## 参见

- [本区域目录](../)