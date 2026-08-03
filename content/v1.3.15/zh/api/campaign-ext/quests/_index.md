---
title: "Quests 家族"
description: "Quest 状态机、Issue 交接、目标完成与可存档的战役生命周期。"
---

# Quests 家族

**一句话职责：** Quest 持有跨多个 tick 和存档的战役叙事状态，包括目标、参与者与完成结果。

## 心智模型与阅读顺序

从 [QuestBase](../QuestBase) 开始，再对比 [ArmyNeedsSuppliesIssueQuest](../ArmyNeedsSuppliesIssueQuest) 的 Issue 与 Behavior。按创建、目标更新、完成、清理的顺序追踪。

## 何时使用

需要持久、面向玩家的多步骤流程时使用 Quest；提示通知使用 CampaignEvent，原子世界变更使用 Action。不要从 UI 回调直接推进目标而不检查 Quest 所有权和生命周期。

## 依赖关系

- 上游：Issue 解决、Campaign Behaviors、Hero、Party 与 Settlement。
- 下游：Menus、Conversations、通知、奖励 Action 与存档。
- 同级：[Issues](../issues)、[Dialogs](../dialogs)、[Actions](../actions)。

## 最小真实入口

```csharp
QuestBase quest = ...; // 由 CampaignBehavior 或 Issue 创建
// 目标进度由具体 Quest 支持的回调/事件推进
```

使用具体 Quest 的源码方法，不臆造 `Advance()` 之类接口。

## 风险边界

Quest 状态会进入存档。事件订阅只注册一次，清理时解除，并让完成逻辑幂等。参与者查找失败后仍保留悬空引用会污染存档。

## 导航

- [上级：Campaign-Ext](..)
- [同级：Issues](../issues) · [Dialogs](../dialogs)
- [相关：CampaignEvents](../CampaignEvents)
