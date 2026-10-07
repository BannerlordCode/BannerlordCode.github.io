---
title: "AiVisitSettlementBehavior"
description: "战役 AI 中决定 AI 是否、何时、以何种理由访问定居点的行为类，是访问决策的评分中枢。"
---
# AiVisitSettlementBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AiVisitSettlementBehavior : CampaignBehaviorBase`
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviors/AiBehaviors/AiVisitSettlementBehavior.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`AiVisitSettlementBehavior` 是战役 AI 里负责「访问定居点」这一动作的 `CampaignBehaviorBase` 子类。它决定一个 AI 派系/领主在什么情况下会动身去访问某个定居点（城镇、村庄、城堡），以及这次访问值不值得做。

它是本批 campaign-ext 桶里最大的文件（959 行），因为访问决策涉及大量评分因素：距离、关系、驻军、补给、当前目标等。类内用 3 个 `const float` 作为评分常数，把「这次访问到底值不值得」量化成一个可比较的分数。

作为 `CampaignBehaviorBase` 的子类，它遵循战役 mod 的标准扩展点模式：通过 `RegisterEvents()` 挂接战役事件，通过 `SyncData(IDataStore)` 参与存档读写。

## 心智模型

把这类想成**访问决策的评分中枢**。

AI 不会无缘无故去访问一个定居点。每次考虑访问时，这个 Behavior 会把各种因素折算成一个分数：

- 距离越近，分数越高（跑远路不划算）。
- 与目标定居点统治者的关系越好，分数越高。
- 目标定居点有驻军/补给等实际收益时，分数更高。
- 当分数超过 `GoodEnoughScore`（8f）时，这次访问被认为是「值得做」的。

3 个常数构成评分标尺：

- `GoodEnoughScore = 8f` —— 及格线，超过才值得跑一趟。
- `MeaningfulScoreThreshold = 0.025f` —— 有意义的微小增量阈值，低于它的因素几乎不影响决策。
- `BaseVisitScore = 1.6f` —— 基础分，任何访问都先拿到这个底分，再往上叠加各种修正。

**核心心智模型**：访问 = 基础分 + 各因素修正，与及格线比较。这让「AI 为什么突然去访问某个村庄」变得可解释、可调参。

## 怎么用

### 怎么拿到

战役 Behavior 由战役引擎在启动时自动实例化并注册，**不需要手动 new**。要读取它的状态或扩展它的行为，通过 `CampaignBehaviorBase` 的标准途径：

- 在 mod 的 campaign behavior 列表里挂接你自己的 `CampaignBehaviorBase` 子类，在 `RegisterEvents()` 里订阅相关事件，即可观察或影响访问决策。
- 评分常数是 `public const float`，可在你自己的代码里直接引用来做一致性判断。

### 典型用法

1. **观察访问决策**：订阅相关战役事件，在 AI 决定访问时读取当前评分因素，用于调试或日志。
2. **扩展评分**：写一个同桶的 `CampaignBehaviorBase` 子类，在 `RegisterEvents()` 里挂接事件，对特定派系/定居点调整访问倾向。
3. **调参**：直接引用 3 个 `const float` 作为阈值，保持你的 mod 与原生评分标尺一致。

### 坑

- **不要试图手动实例化**：Behavior 的生命周期由战役引擎管理，手动 new 出来的实例不会挂接到事件总线上。
- **评分常数是 `const`**：编译期固化，运行时改不了。要调参只能在自己的 Behavior 里做偏移。
- **959 行的大文件**：访问决策逻辑高度集中，改动前务必理解评分链路，避免破坏「及格线」语义。

## 关键成员

- `public class AiVisitSettlementBehavior : CampaignBehaviorBase` —— `:17` 类声明，访问定居点 AI 的入口。
- `public override void RegisterEvents()` —— `:62` 挂接战役事件，订阅与访问决策相关的事件源。
- `public override void SyncData(IDataStore dataStore)` —— `:119` 参与存档读写，持久化访问决策相关状态。
- `public const float GoodEnoughScore = 8f` —— `:895` 访问评分及格线，超过才值得跑一趟。
- `public const float MeaningfulScoreThreshold = 0.025f` —— `:898` 有意义的微小增量阈值。
- `public const float BaseVisitScore = 1.6f` —— `:901` 任何访问都先拿到的基础分。

## 真实示例

```csharp
// 引用原生评分常数，在自己的 Behavior 里做一致性判断
public override void SyncData(IDataStore dataStore)
{
    dataStore.SyncData(this, "_visitScore");
}

float score = AiVisitSettlementBehavior.BaseVisitScore;
if (score >= AiVisitSettlementBehavior.GoodEnoughScore)
{
    // 这次访问在原生语义里是「值得做」的
}
```

## 参见

- [`MBObjectBase`](../MBObjectBase) —— 战役对象的基类，访问决策中涉及的定居点对象都派生自它。
- [`MBObjectManager`](../MBObjectManager) —— 对象管理器，访问决策中查找定居点/派系对象时用到。
- [`_index`](../_index) —— 本桶索引，列出所有 campaign-ext 类页。
- [`ChangeKingdomAction`](../../campaign/ChangeKingdomAction) —— 跨桶参考，访问决策结果可能触发阵营变更动作。

## 导航

- 返回 [`_index`](../_index) 查看本桶全部类页。
- 同批类页：[`AgingCampaignBehavior`](../AgingCampaignBehavior) · [`AiArmyMemberBehavior`](../AiArmyMemberBehavior) · [`AiEngagePartyBehavior`](../AiEngagePartyBehavior) · [`AiLandBanditPatrollingBehavior`](../AiLandBanditPatrollingBehavior) · [`AiMilitaryBehavior`](../AiMilitaryBehavior) · [`AiPartyThinkBehavior`](../AiPartyThinkBehavior) · [`AiPatrollingBehavior`](../AiPatrollingBehavior) · [`AllianceCampaignBehavior`](../AllianceCampaignBehavior) · [`BackstoryCampaignBehavior`](../BackstoryCampaignBehavior)
