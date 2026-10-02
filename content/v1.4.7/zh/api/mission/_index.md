---
title: "Mission 任务系统 — 只放入口类"
description: "按名字从 mission-ext 切出的 4 个任务侧入口类。目前 4 页，均在中文树。"
---
# Mission 任务系统 — 只放入口类

这个目录只放 4 个类：`Mission`、`MissionState`、`MissionBehavior`、`Agent`。它们是从 [mission-ext](../mission-ext/)（669 个 `.cs`）里**按名字**切出来的，不是按命名空间 —— 目的是让"我要改战斗"这件事点到就到，不用先在一个 669 页的目录里翻。

`Formation` 按同一条规则也属于这个桶，但中英文两棵树都没有它的页面。

## 本区页面（4）

| 页面 | 讲的是什么 |
| --- | --- |
| [Mission](./Mission) | 战斗场景对象；通过对应的 mission logic 创建，不是自己 new |
| [MissionState](./MissionState) | 任务结束时所处的状态枚举 |
| [MissionBehavior](./MissionBehavior) | 注册到任务上的抽象行为基类 |
| [Agent](./Agent) | 战场上的一个士兵或马 |

4 页合起来是一个模组作者的最小可用集：继承 `MissionBehavior` 挂到任务上，在里面拿到 `Mission` 的引用，需要时读 `MissionState` 判断阶段，需要时通过 `Mission` 遍历 `Agent`。

需要注意的是，创建 `Mission` 的方式不是 `new Mission()` —— 游戏通过 `MissionLogic` 那一族创建，逻辑在 mission-ext 里，而那一族目前没有页面。

## 尚未收录

`Formation`。除此之外没有别的：`mission-ext/` 里剩下的约 665 个类不在这个桶。

## 相邻目录

[mission-ext](../mission-ext/) · [campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [core](../core/) · [core-extra](../core-extra/) · [gui](../gui/) · [viewmodel](../viewmodel/) · [engine](../engine/) · [sandbox](../sandbox/) · [custombattle](../custombattle/) · [system](../system/) · [network](../network/) · [modulemanager](../modulemanager/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

英文树里没有本区页面，对应的 4 页在 [zh/api/mission/](../../../zh/api/mission/)。

## 参见

- ↑ [版本首页](../../)
- ↑ [API 参考](../)
- ↔ [架构总览](../../architecture/)
- ↘ [界面栈](../../architecture/ui-stack)