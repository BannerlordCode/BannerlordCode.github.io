---
title: "CampaignBehaviorManager"
description: "CampaignBehaviorManager 的自动生成类参考。"
---
# CampaignBehaviorManager

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignBehaviorManager : ICampaignBehaviorManager`
**Base:** `ICampaignBehaviorManager`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/CampaignBehaviorManager.cs`

## 概述

`CampaignBehaviorManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `CampaignBehaviorManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### InitializeCampaignBehaviors
`public void InitializeCampaignBehaviors(IEnumerable<CampaignBehaviorBase> inputComponents)`

**用途 / Purpose:** 为 campaign behaviors 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 CampaignBehaviorManager 实例
CampaignBehaviorManager campaignBehaviorManager = ...;
campaignBehaviorManager.InitializeCampaignBehaviors(inputComponents);
```

### RegisterEvents
`public void RegisterEvents()`

**用途 / Purpose:** 将events注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 CampaignBehaviorManager 实例
CampaignBehaviorManager campaignBehaviorManager = ...;
campaignBehaviorManager.RegisterEvents();
```

### LoadBehaviorData
`public void LoadBehaviorData()`

**用途 / Purpose:** 从持久化存储或流中读取 behavior data。

```csharp
// 先通过子系统 API 拿到 CampaignBehaviorManager 实例
CampaignBehaviorManager campaignBehaviorManager = ...;
campaignBehaviorManager.LoadBehaviorData();
```

### AddBehavior
`public void AddBehavior(CampaignBehaviorBase campaignBehavior)`

**用途 / Purpose:** 将 behavior 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 CampaignBehaviorManager 实例
CampaignBehaviorManager campaignBehaviorManager = ...;
campaignBehaviorManager.AddBehavior(campaignBehavior);
```

### ClearBehaviors
`public void ClearBehaviors()`

**用途 / Purpose:** 清空当前对象中的behaviors。

```csharp
// 先通过子系统 API 拿到 CampaignBehaviorManager 实例
CampaignBehaviorManager campaignBehaviorManager = ...;
campaignBehaviorManager.ClearBehaviors();
```

## 使用示例

```csharp
var manager = CampaignBehaviorManager.Current;
```

## 参见

- [本区域目录](../)