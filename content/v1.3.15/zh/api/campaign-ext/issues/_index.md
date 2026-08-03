---
title: "Issues 家族"
description: "战役 Issue 的发现、解决选项、Behavior 所有权与 Quest 交接。"
---

# Issues 家族

**一句话职责：** Issue 是带有资格条件、玩家决策和解决路径的战役问题，解决过程可能创建或完成 Quest。

## 心智模型与阅读顺序

先读 [IssueBase](../IssueBase)，再看具体实现 [ArmyNeedsSuppliesIssue](../ArmyNeedsSuppliesIssue)。如果存在对应 Behavior 和 Quest，沿着同名组件继续读；Issue 本身是问题描述，不是调度器。

## 何时使用

需要资格判断和玩家解决的持久战役问题使用 Issue；一次性状态变更使用 Event 或 Action。不要每个 tick 新建 Issue，也不要从 UI 直接改 Issue 字段，生命周期由所属 Behavior 管理。

## 依赖关系

- 上游：Campaign Behaviors、贵族/据点状态与 `CampaignEvents`。
- 下游：Issue 菜单、[QuestBase](../QuestBase)、通知与存档。
- 同级：[Quests](../quests)、[Behaviors](../behaviors)。

## 最小真实入口

```csharp
IssueBase issue = ...; // 由所属 CampaignBehavior 提供
bool eligible = issue.CanBeShown();
```

以具体 Issue 的源码生命周期方法为准，不把 Issue 当作普通 DTO。

## 风险边界

资格判断应可在读档前后保持稳定且不产生副作用。通过 Issue 支持的 Action 或 Quest 交接解决问题，确保通知与清理链路完整。

## 导航

- [上级：Campaign-Ext](..)
- [同级：Quests](../quests) · [Behaviors](../behaviors)
- [相关：CampaignEvents](../CampaignEvents)
