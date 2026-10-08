---
title: "StoryModeManager"
description: "剧情模式的存档状态根：聚合事件总线、主线剧情、剧情英雄与旗帜效果，并提供 Current 静态入口。"
---
# StoryModeManager

**命名空间：** `StoryMode`
**模块：** `StoryMode`
**类型：** `public class StoryModeManager`
**基类：** 无
**源文件：** `bannerlord-1.4.7/StoryMode/StoryModeManager.cs`（声明见第 10 行）

## 概述

`StoryModeManager` 是剧情模式的状态根：它把四块彼此独立的剧情数据聚合成一个可被存档序列化的对象——事件总线 `StoryModeEvents`、主线剧情 `MainStoryLine`、剧情英雄 `StoryModeHeroes`、旗帜效果 `StoryModeBannerEffects`。它位于 `CampaignStoryMode` 之下、各剧情 Behavior 之上，由 `CampaignStoryMode` 在构造时创建，并在游戏类型加载阶段调用内部初始化方法补齐后两块数据。它不继承 `CampaignBehaviorBase`，也不订阅任何战役事件，只负责「持有并初始化」，因此可以安全地作为静态门面被全局访问。

## 心智模型

把它想成「剧情模式的存档容器 + 单例入口」，而不是「剧情调度器」。它自己不推进任何任务线，只负责创建、持有并在读档时重建四个子对象。状态由构造函数写入一部分（事件总线、主线剧情），由加载阶段的初始化补齐另一部分（剧情英雄、旗帜效果）；`Current` 是静态门面，每次调用都从 `Game.Current.GameType` 反查 `CampaignStoryMode` 再取它的 `StoryMode`，所以在非剧情模式下返回 `null`，在换局/读档后也始终指向当前那一局。谁改它？只有 `CampaignStoryMode` 的加载流程和引擎的存档恢复逻辑；mod 只应读取。何时失效？当 `GameType` 不是 `CampaignStoryMode` 时整个管理器不存在，所有下游访问都会拿到 `null`。

## 怎么用

- 永远通过 `StoryModeManager.Current` 获取，不要缓存：`Current` 每次从 `Game.Current.GameType` 反查，跨读档、换局后依然正确；缓存下来的旧引用在重新开局后会指向已废弃的对象（`StoryModeManager.cs:32`）。
- `Current` 可能返回 `null`（沙盒模式或自定义模式），任何访问前都要判空，否则下一行就会抛 `NullReferenceException`（`StoryModeManager.cs:32`）。
- `StoryModeEvents` 在构造函数的初始化里就已就绪，可以放心订阅；但 `StoryModeHeroes` 与 `StoryModeBannerEffects` 只在加载阶段才被填充，在 mod 初始化早期读取会得到 `null`（`StoryModeManager.cs:60`、`StoryModeManager.cs:65`）。
- `MainStoryLine` 带 `[SaveableProperty(1)]`，是存档数据的一部分；读档时由引擎恢复，不要手工 `new` 覆盖，否则会丢掉已推进的主线进度（`StoryModeManager.cs:55`）。
- 构造函数由 `CampaignStoryMode` 调用并额外创建主线剧情，mod 不要自行 `new StoryModeManager()`，否则会得到一个脱离存档的孤立状态树（`StoryModeManager.cs:68`）。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `class StoryModeManager` | 类型声明。剧情模式的根状态对象，不继承任何基类；本身不注册为 Behavior，靠 `CampaignStoryMode` 持有。`StoryModeManager.cs:10` |
| `static StoryModeManager Current { get; }` | 静态门面。从 `Game.Current` 取 `GameType`，转成 `CampaignStoryMode` 后返回其 `StoryMode`；任一环节为空则返回 `null`，因此调用方必须判空。这是 mod 唯一推荐的入口。`StoryModeManager.cs:32` |
| `StoryModeEvents StoryModeEvents { get; private set; }` | 剧情全局事件总线。构造时由内部初始化方法创建，用于订阅/触发剧情节点事件；只读，非剧情模式下整个管理器为 `null`。`StoryModeManager.cs:49` |
| `MainStoryLine MainStoryLine { get; private set; }` | 主线剧情状态。带 `[SaveableProperty(1)]` 随存档序列化，由构造函数创建；读档时引擎恢复同一实例，mod 不应替换。`StoryModeManager.cs:55` |
| `StoryModeHeroes StoryModeHeroes { get; private set; }` | 剧情英雄集合。仅在游戏类型加载阶段（`InitializeStoryModeObjects`）填充，构造完成后、加载完成前读取会得到 `null`。`StoryModeManager.cs:60` |
| `StoryModeBannerEffects StoryModeBannerEffects { get; private set; }` | 旗帜效果集合。与剧情英雄同批初始化，同样是加载阶段才可用，早读为 `null`。`StoryModeManager.cs:65` |
| `StoryModeManager()` | 构造函数。先执行内部初始化创建事件总线，再创建 `MainStoryLine`；副作用是建立事件总线与主线状态，由 `CampaignStoryMode` 在进入战役时调用。`StoryModeManager.cs:68` |

## 真实示例

```csharp
using TaleWorlds.Core;
using StoryMode;

StoryModeManager story = StoryModeManager.Current;
if (story != null)
{
    StoryModeEvents events = story.StoryModeEvents;
    // 广播一次「旗帜碎片已收集」，订阅方通过静态事件收到通知
    events.OnBannerPieceCollected();
}
```

## 参见

- [CampaignStoryMode](../CampaignStoryMode) —— 创建并持有本管理器的 `GameType`。
- [StoryModeEvents](../StoryModeEvents) —— 管理器持有的事件总线，剧情节点的订阅入口。
- [Game](../../core-extra/Game) —— `Current` 反查所依赖的全局游戏对象。

## 导航

- ↑ [storymode 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
