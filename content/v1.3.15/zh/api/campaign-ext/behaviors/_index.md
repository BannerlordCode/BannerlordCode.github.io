---
title: "Behaviors 家族"
description: "CampaignBehavior 的生命周期、事件订阅、tick 所有权与存档同步。"
---

# Behaviors 家族

**一句话职责：** Campaign Behavior 是长寿命协调器，订阅战役事件、安排工作，并拥有相关 Issue 或 Quest 的生命周期。

## 心智模型与阅读顺序

先读 [CampaignBehaviorBase](../CampaignBehaviorBase)、[CampaignEventReceiver](../CampaignEventReceiver) 与 [CampaignEvents](../CampaignEvents)，再用 [CampaignGameStarter](../CampaignGameStarter) 理解注册，最后阅读 [AgingCampaignBehavior](../AgingCampaignBehavior) 这类具体实现。

## 何时使用

需要覆盖战役生命周期的协调逻辑时使用 Behavior；一次变更使用 Action，单次计算使用 Model。不要用静态单例保存 Behavior 状态，也不要在 tick 中重复订阅。

## 依赖关系

- 上游：[Campaign](../../campaign/Campaign) 与 `CampaignGameStarter` 注册。
- 下游：Events、Actions、Models、Issues、Quests 与存档同步。
- 同级：[Actions](../actions)、[Issues](../issues)、[Quests](../quests)。

## 最小真实入口

```csharp
public sealed class MyBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents() { /* 只订阅一次 */ }
    public override void SyncData(IDataStore dataStore) { /* 同步状态 */ }
}
```

从模块的战役启动钩子注册 Behavior；注册后由引擎负责构造和事件时机。

## 风险边界

在销毁阶段解除或保护事件处理器，保持 `SyncData` 对旧存档兼容，并且不要在模块加载时假设 `Campaign.Current` 已存在。重复注册会产生重复奖励和难以复现的存档漂移。

## 导航

- [上级：Campaign-Ext](..)
- [同级：Actions](../actions) · [Issues](../issues) · [Quests](../quests)
- [相关：CampaignEvents](../CampaignEvents)
