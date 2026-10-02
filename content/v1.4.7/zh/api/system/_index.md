---
title: "System — 系统层：输入与托管运行时长尾"
description: "TaleWorlds.InputSystem 加上少量放行的托管运行时命名空间所在目录，约 20 个类型，目前一个页面都没有。"
---
# System — 系统层：输入与托管运行时长尾

这个桶装 `TaleWorlds.InputSystem`，加上噪声闸门放行的少量托管运行时命名空间。1.4.7 源码树里约 20 个类型。

规模很小，但它站在一条关键路径上：**键鼠与手柄输入进入游戏的第一站**。你想知道"玩家按了 E，游戏怎么知道" —— `GameKey` 是键位定义，`HotKey` 是组合键判定，`GameKeyContext` / `EmptyInputContext` 是"当前这一帧有哪些键被按住了"的读数，`EmptyInputManager` 是没有输入设备时的空实现。

目录名沿用 1.4.5 的 `system` 而不是新造 `inputsystem`，原因是它原本就存在，而且除了输入之外还收了几个运行时辅助类型；这两个职责共用一个桶是历史结果，不是设计。

## 本区页面（0）

本目录收录 `TaleWorlds.InputSystem` 及本桶放行的其他命名空间的全部类型，约 20 个。**本区当前没有页面**（撰写进度：0/20）。

## 尚未收录

输入这一族全部没有页面：`GameKey`、`GameAxisKey`（轴输入）、`HotKey`、`GameKeyContext`、`EmptyInputContext`、`EmptyInputManager`。此外还有若干输入相关的枚举与结构体，以及桶里那几个不属于 `InputSystem` 的运行时辅助类型。

这个缺口的后果比它的规模看起来大：输入是几乎每个交互式模组都要碰的一层，而"怎么正确读一次按键、怎么等一个键按下"这种问题现在只能在源码里找答案。[gui](../gui/) 里的界面栈有一节讲输入限制，接的是这个桶，但底层细节目前缺页。

## 相邻目录

[core](../core/) · [core-extra](../core-extra/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [save-system](../save-system/) · [gui](../gui/) · [viewmodel](../viewmodel/) · [engine](../engine/) · [custombattle](../custombattle/) · [sandbox](../sandbox/) · [modulemanager](../modulemanager/) · [network](../network/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

## 参见

- ↑ [版本首页](../../)
- ↑ [API 参考](../)
- ↔ [架构总览](../../architecture/)
- ↘ [界面栈](../../architecture/ui-stack)