---
title: "System — 系统层：输入与托管运行时长尾"
description: "TaleWorlds.InputSystem 加上少量放行的托管运行时命名空间所在目录，约 20 个类型，已收录 12 页。"
---
# System — 系统层：输入与托管运行时长尾

这个桶装 `TaleWorlds.InputSystem`，加上噪声闸门放行的少量托管运行时命名空间。1.4.7 源码树里约 20 个类型。

规模很小，但它站在一条关键路径上：**键鼠与手柄输入进入游戏的第一站**。你想知道"玩家按了 E，游戏怎么知道" —— `GameKey` 是键位定义，`HotKey` 是组合键判定，`GameKeyContext` / `EmptyInputContext` 是"当前这一帧有哪些键被按住了"的读数，`EmptyInputManager` 是没有输入设备时的空实现。

目录名沿用 1.4.5 的 `system` 而不是新造 `inputsystem`，原因是它原本就存在，而且除了输入之外还收了几个运行时辅助类型；这两个职责共用一个桶是历史结果，不是设计。

## 本区页面（12）

本目录收录 `TaleWorlds.InputSystem` 及本桶放行的其他命名空间的全部类型，约 20 个。撰写进度：12/20（由 3 个 worker 共同完成）。

| 页面 | 类型 | 说明 |
| --- | --- | --- |
| [GameKey](GameKey) | `class` | 键位定义：ID、默认键盘/手柄键、IsDown/IsPressed/IsReleased 判定 |
| [HotKey](HotKey) | `class` | 组合键判定：多键列表、修饰键、双击检测 |
| [Key](Key) | `class` | 单个键的封装：InputKey + IsKeyboard/IsMouse/IsController 标志 |
| [Input](Input) | `static class` | 输入静态入口：InputState、DebugInput、InputManager |
| [GameKeyContext](GameKeyContext) | `abstract class` | 键位上下文基类：注册 GameKey/HotKey/GameAxisKey |
| [InputContext](InputContext) | `class` | IInputContext 的实现：管理键位注册与输入过滤 |
| [InputState](InputState) | `class` | 输入状态：鼠标位置（归一化/像素）、分辨率 |
| [HotKeyManager](HotKeyManager) | `static class` | 键位管理器：类别字典、OnKeybindsChanged 事件、Tick |
| [EmptyInputContext](EmptyInputContext) | `sealed class` | IInputContext 的空实现，屏幕键盘激活时返回全零读数 |
| [EmptyInputManager](EmptyInputManager) | `internal class` | IInputManager 的空实现，屏幕键盘激活时返回全零设备状态 |
| [IInputContext](IInputContext) | `interface` | 输入上下文契约，定义当前帧按键读数接口 |
| [IInputManager](IInputManager) | `interface` | 输入管理器契约，定义输入设备状态查询接口 |

## 尚未收录

已收录 12/20 页。尚未收录的包括：`GameAxisKey`（轴输入）、`AxisType`、`ControllerTypes`、`GameKeyContextType`、`InputKey`、`Modifiers`、`VirtualKeyCode` 等枚举，以及桶里那几个不属于 `InputSystem` 的运行时辅助类型。

这个缺口的后果比它的规模看起来大：输入是几乎每个交互式模组都要碰的一层，而"怎么正确读一次按键、怎么等一个键按下"这种问题现在只能在源码里找答案。[gui](../gui/) 里的界面栈有一节讲输入限制，接的是这个桶，但底层细节目前缺页。

## 相邻目录

[core](../core/) · [core-extra](../core-extra/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [save-system](../save-system/) · [gui](../gui/) · [viewmodel](../viewmodel/) · [engine](../engine/) · [custombattle](../custombattle/) · [sandbox](../sandbox/) · [modulemanager](../modulemanager/) · [network](../network/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

## 参见

- ↑ [版本首页](../../)
- ↑ [API 参考](../)
- ↔ [架构总览](../../architecture/)
- ↘ [界面栈](../../architecture/ui-stack)