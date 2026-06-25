---
title: "CampaignBehaviorManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignBehaviorManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 初始化 `campaign behaviors` 的状态、资源或绑定。

### RegisterEvents
`public void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### LoadBehaviorData
`public void LoadBehaviorData()`

**用途 / Purpose:** 加载 `behavior data` 数据。

### AddBehavior
`public void AddBehavior(CampaignBehaviorBase campaignBehavior)`

**用途 / Purpose:** 向当前集合/状态中添加 `behavior`。

### ClearBehaviors
`public void ClearBehaviors()`

**用途 / Purpose:** 处理 `clear behaviors` 相关逻辑。

## 使用示例

```csharp
var manager = CampaignBehaviorManager.Current;
```

## 参见

- [完整类目录](../catalog)