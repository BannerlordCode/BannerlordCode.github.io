---
title: "Activitysystem — 活动：战役侧的小游戏"
description: "TaleWorlds.ActivitySystem 所在目录，5 个 .cs。活动定义与生命周期。目前 0 页。"
---
# Activitysystem — 活动：战役侧的小游戏

`TaleWorlds.ActivitySystem`，5 个 `.cs`：`Activity`、`ActivityManager`、`ActivityOutcome`、`ActivityTransition`、`IActivityService`。它是整个分类法里第二小的桶。

"活动"在游戏里的含义很具体：一场由战役触发的、有胜负结果的小型遭遇 —— 决斗、比武、护送遭遇。它是**战役侧的内容**：活动的定义属于这个命名空间，但活动真正打起来用的战斗逻辑在 [mission-ext](../mission-ext/)，界面在 [gui](../gui/)。

这个桶的 4 个非接口类型正好对应活动的生命周期：`Activity` 是定义，`ActivityManager` 管当前是哪个活动，`ActivityTransition` 管活动之间怎么切，`ActivityOutcome` 是结束时的结果（用于结算影响或声望）。

按前缀规则还有一个桶也归到这个领域：`StoryMode`（剧情模式，18 个 `.cs`）。它同样是战役侧的剧情内容，同样会开出任务。1.4.5 那个混合的 `gameplay/` 目录被拆成了 `sandbox` 与 storymode 两处，**storymode 这个目录在本版本的文档树里不存在**，也无法按目录链接 —— 1.4.5 的树里有那些页面，本版本没有。

## 本区页面（0）

本区还没有任何页面。

## 尚未收录

5 个类型，全部没有页面：`Activity`（活动定义）、`ActivityManager`（当前活动）、`ActivityTransition`（活动切换）、`ActivityOutcome`（结束结果）、`IActivityService`（服务接口）。

规模极小，但注意结论：如果一个模组要挂一个自定义活动，现有文档树里没有任何一页能告诉你从哪开始 —— 定义在这个没页面的桶里，战斗逻辑在同样没页面的 mission-ext 里。

## 相邻目录

[campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [sandbox](../sandbox/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [core](../core/) · [core-extra](../core-extra/) · [gui](../gui/) · [viewmodel](../viewmodel/) · [engine](../engine/) · [custombattle](../custombattle/) · [system](../system/) · [network](../network/) · [save-system](../save-system/) · [modulemanager](../modulemanager/) · [achievementsystem](../achievementsystem/)

## 参见

- ↑ [版本首页](../../)
- ↑ [API 参考](../)
- ↔ [架构总览](../../architecture/)
- ↘ [模块系统](../../architecture/module-system)