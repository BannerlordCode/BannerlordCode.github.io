---
title: "CampaignStoryMode"
description: "剧情战役的 GameType 入口：把 StoryModeManager 挂到通用 Campaign 上，并在加载阶段驱动剧情对象初始化。"
---
# CampaignStoryMode

**命名空间：** `StoryMode`
**模块：** `StoryMode`
**类型：** `public class CampaignStoryMode : Campaign`
**基类：** `Campaign`（`TaleWorlds.CampaignSystem.Campaign`）
**源文件：** `bannerlord-1.4.7/StoryMode/CampaignStoryMode.cs`（声明见第 13 行）

## 概述

`CampaignStoryMode` 是「剧情模式」这一整套玩法的 `GameType` 子类。它把剧情专用的 `StoryModeManager` 挂到普通 `Campaign` 之上，并在游戏类型的加载状态机里安排剧情对象（剧情英雄、旗帜效果）的创建时机，最后把教程用村庄挂进地图场景。它处在 GameType 层而非 Behavior 层：角色创建、新手教程、阴谋任务等剧情行为都不直接继承它，而是通过它暴露的 `StoryMode` 管理器间接协作。与它相邻的是父类 `Campaign`（提供地图、移动、存档等通用战役能力）以及 `StoryModeManager`（它唯一新增的剧情状态根）。

## 心智模型

把它想成「剧情模式的电源开关与总装线」，而不是「剧情逻辑本身」。它不推进任何一条任务线，也不保存主角、家族或阴谋进度；它只做两件事：构造时创建 `StoryModeManager`，并在 `DoLoadingForGameType` 的各加载阶段把管理器里的剧情对象按顺序初始化、把训练场村庄加入地图场景。状态来源于 `StoryModeManager`，改状态的也是管理器内部，`CampaignStoryMode` 自身几乎无状态——除了一个被存档序列化的 `StoryMode` 引用。一旦 `Game.Current.GameType` 不是它，剧情 API 全部返回空，剧情事件也不会被触发。它随存档保存的是「引用」而非「数据」，读档时由引擎恢复同一个管理器。

## 怎么用

- 不要自行 `new` 它。构造函数需要一个 `CampaignGameMode`，并且由引擎在进入战役时调用；mod 侧只应接收实例（`CampaignStoryMode.cs:22`）。
- 拿到实例的常规方式是 `Game.Current.GameType as CampaignStoryMode`，判空后再取 `StoryMode`：沙盒模式与自定义模式返回 `null`（`CampaignStoryMode.cs:19`）。
- `StoryMode` 在构造时就被赋值，因此拿到实例后它本身非空；但管理器里的 `StoryModeHeroes`、`StoryModeBannerEffects` 要到加载阶段才填充，在 mod 初始化早期读取会拿到空引用（`CampaignStoryMode.cs:19`）。
- 该类型参与存档：`StoryMode` 带 `[SaveableProperty(9999)]`，读档时由引擎恢复，不要在初始化阶段手工替换它，否则会与存档里的旧管理器脱钩（`CampaignStoryMode.cs:13`）。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `class CampaignStoryMode : Campaign` | 类型声明。剧情模式的 `GameType` 子类，继承通用战役的全部能力，仅额外持有一个剧情管理器；通过它可以把「当前是否剧情模式」与「通用战役」区分开。`CampaignStoryMode.cs:13` |
| `StoryModeManager StoryMode { get; private set; }` | 剧情状态根。构造时创建、随存档序列化（`[SaveableProperty(9999)]`）；读取前先确认 `GameType` 是剧情模式，非剧情模式下不会有该实例。只读（`private set`），mod 无法替换。`CampaignStoryMode.cs:19` |
| `CampaignStoryMode(CampaignGameMode gameMode)` | 构造函数。先转调 `base(gameMode)` 完成通用战役初始化，随后立即 `new StoryModeManager()`；由引擎在进入战役时调用，副作用是创建整个剧情状态树，mod 不应自行调用。`CampaignStoryMode.cs:22` |

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using StoryMode;

CampaignStoryMode storyMode = Game.Current.GameType as CampaignStoryMode;
if (storyMode != null)
{
    StoryModeManager manager = storyMode.StoryMode;
    // 广播一次「剧情教程结束」；订阅方通过 StoryModeEvents 的静态事件收到通知
    manager.StoryModeEvents.OnStoryModeTutorialEnded();
}
```

## 参见

- [StoryModeManager](../StoryModeManager) —— 剧情状态根，本类型唯一的剧情字段。
- [StoryModeEvents](../StoryModeEvents) —— 剧情全局事件总线，由管理器持有。
- [Campaign](../../campaign/Campaign) —— 父类，提供地图、移动与存档等通用战役能力。

## 导航

- ↑ [storymode 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
