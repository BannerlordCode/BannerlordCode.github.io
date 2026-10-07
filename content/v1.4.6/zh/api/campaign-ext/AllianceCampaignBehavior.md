---
title: "AllianceCampaignBehavior"
description: "战役联盟系统的行为类，处理联盟提议、响应与战争号召协议，是本批唯一同时实现接口的类。"
---
# AllianceCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AllianceCampaignBehavior : CampaignBehaviorBase, IAllianceCampaignBehavior`
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviors/AllianceCampaignBehavior.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述

`AllianceCampaignBehavior` 是战役里负责**联盟系统**的 `CampaignBehaviorBase` 子类。它处理派系之间结盟、拒绝、以及「号召参战」协议等外交动作。

它是本批 campaign-ext 桶里**唯一同时实现接口**的类：除了继承 `CampaignBehaviorBase`，还实现了 `IAllianceCampaignBehavior`。这意味着它既是一个可被引擎自动注册的战役 Behavior，又通过接口对外暴露联盟相关的方法，供其他系统（如外交 UI、AI 决策）以接口方式调用。

文件 883 行，包含联盟提议、响应、战争号召等完整流程。

## 心智模型

把这类想成**联盟外交的事件中枢 + 接口门面**。

两个身份：

1. **Behavior 身份**：通过 `RegisterEvents()` 挂接战役事件，在联盟状态变化时响应；通过 `SyncData(IDataStore)` 参与存档读写。
2. **接口身份**：通过 `IAllianceCampaignBehavior` 把联盟相关操作暴露成可被其他系统调用的方法，实现「事件驱动」与「接口调用」两种访问方式的统一。

**核心心智模型**：联盟是派系间的外交契约，这个类既监听联盟事件（被动），又提供接口方法主动触发联盟流程（主动）。双实现让它在事件总线和接口调用两条路径上都能工作。

## 怎么用

### 怎么拿到

战役 Behavior 由战役引擎在启动时自动实例化并注册，**不需要手动 new**。

- 要扩展联盟行为：写一个同桶的 `CampaignBehaviorBase` 子类，在 `RegisterEvents()` 里订阅联盟相关事件。
- 要以接口方式调用联盟方法：通过 `IAllianceCampaignBehavior` 接口引用，而不是直接引用具体类。

### 典型用法

1. **监听联盟事件**：在自己的 Behavior 里订阅联盟提议/响应事件，做日志或自定义逻辑。
2. **接口调用**：通过 `IAllianceCampaignBehavior` 接口触发联盟流程，保持解耦。
3. **扩展存档**：在 `SyncData` 里追加自定义字段时，注意与原生联盟状态字段不冲突。

### 坑

- **双实现的耦合**：改接口方法签名会影响所有调用方，务必保持向后兼容。
- **不要手动实例化**：Behavior 生命周期由引擎管理。
- **联盟状态有存档依赖**：`SyncData` 里漏写字段会导致读档后联盟状态丢失。

## 关键成员

- `public class AllianceCampaignBehavior : CampaignBehaviorBase, IAllianceCampaignBehavior` —— `:18` 类声明，本批唯一双实现类。
- `public override void RegisterEvents()` —— `:21` 挂接联盟相关战役事件。
- `public override void SyncData(IDataStore dataStore)` —— `:33` 参与联盟状态存档读写。
- `public void OnAllianceOfferedToPlayer(Kingdom offeringKingdom)` —— `:40` 当有派系向玩家提出联盟时触发。
- `public void OnAllianceOfferedToPlayerKingdom(Kingdom offeringKingdom)` —— `:69` 当有派系向玩家的王国提出联盟时触发。
- `public void OnCallToWarAgreementProposedToPlayer(Kingdom proposerKingdom, Kingdom kingdomToCallToWarAgainst)` —— `:82` 当有派系向玩家提出「号召参战」协议时触发。

## 真实示例

```csharp
// 通过接口引用调用联盟方法，保持解耦
IAllianceCampaignBehavior allianceBehavior = /* 从战役系统获取 */;
allianceBehavior.OnAllianceOfferedToPlayer(offeringKingdom);

// 在自己的 Behavior 里监听联盟事件做扩展
public override void RegisterEvents()
{
    // 订阅联盟提议事件，记录日志或触发自定义逻辑
}
```

## 参见

- [`MBObjectBase`](../MBObjectBase) —— 战役对象基类，联盟涉及的 `Kingdom` 对象派生自它。
- [`MBObjectManager`](../MBObjectManager) —— 对象管理器，查找派系/王国对象时用到。
- [`_index`](../_index) —— 本桶索引，列出所有 campaign-ext 类页。
- [`ChangeKingdomAction`](../../campaign/ChangeKingdomAction) —— 跨桶参考，联盟变化可能触发阵营变更动作。

## 导航

- 返回 [`_index`](../_index) 查看本桶全部类页。
- 同批类页：[`AgingCampaignBehavior`](../AgingCampaignBehavior) · [`AiArmyMemberBehavior`](../AiArmyMemberBehavior) · [`AiEngagePartyBehavior`](../AiEngagePartyBehavior) · [`AiLandBanditPatrollingBehavior`](../AiLandBanditPatrollingBehavior) · [`AiMilitaryBehavior`](../AiMilitaryBehavior) · [`AiPartyThinkBehavior`](../AiPartyThinkBehavior) · [`AiPatrollingBehavior`](../AiPatrollingBehavior) · [`AiVisitSettlementBehavior`](../AiVisitSettlementBehavior) · [`BackstoryCampaignBehavior`](../BackstoryCampaignBehavior)
