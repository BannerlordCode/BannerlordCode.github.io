---
title: "Achievementsystem — 成就解锁"
description: "TaleWorlds.AchievementSystem 所在目录，4 个 .cs，最小的桶。目前 0 页。"
---
# Achievementsystem — 成就解锁

`TaleWorlds.AchievementSystem`，4 个 `.cs`：`Achievement`、`AchievementManager`、`IAchievementService`。它是整套分类法里最小的桶。

结构简单到可以一句话说完：`Achievement` 是成就定义，`AchievementManager` 判定解锁并发放，`IAchievementService` 是服务接口。成就的统计项（stat key）由 `AchievementManager` 读取，模组可以往里贡献自己的计数。

这个桶是 1.4.7 才出现的（1.4.5 的树里没有对应目录），因为 `TaleWorlds.AchievementSystem` 是后加的命名空间。

## 本区页面（0）

本区还没有任何页面。

## 尚未收录

4 个类型，全部没有页面：`Achievement`（成就定义）、`AchievementManager`（解锁判定与发放）、`IAchievementService`（服务接口），以及 `TestAchievementService`。

结论很直接：**在一个 mod 里增加一个成就，目前这套文档没有任何一页能告诉你怎么做**。这是全树最小的缺口，但它是完整的一块功能 —— 不是长尾里的一根头发。

## 相邻目录

[campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [sandbox](../sandbox/) · [activitysystem](../activitysystem/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [core](../core/) · [core-extra](../core-extra/) · [gui](../gui/) · [viewmodel](../viewmodel/) · [engine](../engine/) · [custombattle](../custombattle/) · [system](../system/) · [network](../network/) · [save-system](../save-system/) · [modulemanager](../modulemanager/)

## 参见

- ↑ [版本首页](../../)
- ↑ [API 参考](../)
- ↔ [架构总览](../../architecture/)
- ↘ [模块系统](../../architecture/module-system)