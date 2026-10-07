---
title: "BackstoryCampaignBehavior"
description: "战役角色背景故事的行为类，在新战役创建时注入角色背景，是背景系统的入口。"
---
# BackstoryCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class BackstoryCampaignBehavior : CampaignBehaviorBase`
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviors/BackstoryCampaignBehavior.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`BackstoryCampaignBehavior` 是战役里负责**角色背景故事**的 `CampaignBehaviorBase` 子类。它在新战役创建时被调用，为角色注入背景故事相关的初始化逻辑。

文件仅 76 行，是本批最小的类之一，职责单一：在新战役创建这个时间点，把背景故事系统挂接进去。

## 心智模型

把这类想成**背景故事的初始化钩子**。

新战役创建是角色背景故事唯一合理的注入点——此时战役对象（`CampaignGameStarter`）已经就绪，但尚未开始运行。`OnNewGameCreated(CampaignGameStarter)` 就是在这个窗口被调用，让背景系统有机会读取配置、设置初始状态。

**核心心智模型**：背景故事 = 新战役创建时的一次性初始化。这个类是那个初始化的入口，逻辑应该保持轻量，避免拖慢新战役创建。

## 怎么用

### 怎么拿到

战役 Behavior 由战役引擎在启动时自动实例化并注册，**不需要手动 new**。

- 要扩展背景故事：写一个同桶的 `CampaignBehaviorBase` 子类，在 `RegisterEvents()` 里订阅新战役创建事件，或直接在 `OnNewGameCreated` 时机做扩展。

### 典型用法

1. **注入背景初始化**：在 `OnNewGameCreated` 里读取背景配置，设置角色初始属性/关系。
2. **扩展背景逻辑**：订阅新战役创建事件，在背景注入后做额外处理。

### 坑

- **时机敏感**：`OnNewGameCreated` 在新战役创建的关键路径上，重逻辑会拖慢创建流程。
- **不要手动实例化**：Behavior 生命周期由引擎管理。
- **76 行小文件**：职责单一，不要往里塞无关逻辑。

## 关键成员

- `public class BackstoryCampaignBehavior : CampaignBehaviorBase` —— `:13` 类声明，背景故事系统入口。
- `public override void RegisterEvents()` —— `:16` 挂接战役事件。
- `public override void SyncData(IDataStore dataStore)` —— `:22` 参与存档读写。
- `public void OnNewGameCreated(CampaignGameStarter campaignGameStarter)` —— `:27` 新战役创建时被调，背景注入的窗口。

## 真实示例

```csharp
// 背景故事在新战役创建时被注入
public void OnNewGameCreated(CampaignGameStarter campaignGameStarter)
{
    // campaignGameStarter 提供战役初始化上下文
}

public override void SyncData(IDataStore dataStore)
{
    dataStore.SyncData(this, "_backstoryInitialized");
}
```

## 参见

- [`MBObjectBase`](../MBObjectBase) —— 战役对象基类，背景故事涉及的角色对象派生自它。
- [`MBGUID`](../MBGUID) —— 全局唯一标识，背景故事引用角色时用到。
- [`_index`](../_index) —— 本桶索引，列出所有 campaign-ext 类页。
- [`ChangeKingdomAction`](../../campaign/ChangeKingdomAction) —— 跨桶参考，背景故事可能影响阵营归属。

## 导航

- 返回 [`_index`](../_index) 查看本桶全部类页。
- 同批类页：[`AgingCampaignBehavior`](../AgingCampaignBehavior) · [`AiArmyMemberBehavior`](../AiArmyMemberBehavior) · [`AiEngagePartyBehavior`](../AiEngagePartyBehavior) · [`AiLandBanditPatrollingBehavior`](../AiLandBanditPatrollingBehavior) · [`AiMilitaryBehavior`](../AiMilitaryBehavior) · [`AiPartyThinkBehavior`](../AiPartyThinkBehavior) · [`AiPatrollingBehavior`](../AiPatrollingBehavior) · [`AiVisitSettlementBehavior`](../AiVisitSettlementBehavior) · [`AllianceCampaignBehavior`](../AllianceCampaignBehavior)
