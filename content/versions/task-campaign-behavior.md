---
title: "加一个 CampaignBehavior（战役常驻行为）"
description: "开发者视角总览：CampaignBehaviorBase 的挂载与回调心智模型——什么时候被调用、状态回调与日结回调的区别、以及存档同步为什么是行为自己的责任。"
extra:
  sidebar: auto
---

# 加一个 CampaignBehavior（战役常驻行为）

> **这条路径解决什么**：你要写一段「战役全程都在跑」的逻辑 —— 每日 tick、事件响应、
> 地图状态维护、给英雄加自定义标记。菜单动作是一次性的，行为是常驻的。

## 心智模型：行为 = 一组被游戏在固定时机回调的方法

`CampaignBehaviorBase` 本身几乎没有成员（跨版本对比里它的可访问成员数长期是 **2**，
见 [跨版本对比](../CampaignBehaviorBase)）。这不是它简单，而是它**薄**：
所有实际逻辑都在你重写的那二十来个回调里。

它的工作方式和菜单动作完全不同：

| | 菜单动作 | CampaignBehavior |
| --- | --- | --- |
| 什么时候跑 | 玩家点一下 | 游戏在固定阶段**主动**回调 |
| 谁能写状态 | 只有 consequence | 回调里可以，但要注意事务性 |
| 挂几个 | 一个菜单选项 | 一个实例，全程 |
| 存档 | 动作的结果要存档 | **行为自己的字段必须能存** |

所以行为不是「更方便的菜单动作」，它是**战役的订阅者**：
游戏每天、每回合、每个地图事件发生时会来敲你的门，你决定要不要响应。

## 下钻路径

| 步骤 | 做什么 | 打开 |
| --- | --- | --- |
| 1 | 读基类：有哪些回调、哪些是抽象的 | [CampaignBehaviorBase](../../v1.3.15/zh/api/campaign-ext/CampaignBehaviorBase) |
| 2 | 读接口形态（同一套回调的接口版本） | [ICampaignBehavior](../../v1.3.15/zh/api/campaign-ext/ICampaignBehavior) |
| 3 | 知道行为是谁创建、谁保证它被调用 | [CampaignBehaviorManager](../../v1.3.15/zh/api/campaign-ext/CampaignBehaviorManager) |
| 4 | 搞清注册时机与战役世界的关系 | [CampaignGameStarter](../../v1.3.15/zh/api/campaign-ext/CampaignGameStarter) |
| 5 | 状态回调与日结回调的取舍 | [Campaign](../../v1.3.15/zh/api/campaign/Campaign) |
| 6 | 行为里加了字段 → 必须走存档 | [读写存档](../task-save) |
| 7 | 行为里改算法 → 用模型，别硬改 | [接一个 GameModel](../task-gamemodel) |

## 关键类型就这几个

- [CampaignBehaviorBase](../../v1.3.15/zh/api/campaign-ext/CampaignBehaviorBase) —— **你的基类**。
- [ICampaignBehavior](../../v1.3.15/zh/api/campaign-ext/ICampaignBehavior) —— 同一套回调的接口形态。
- [CampaignBehaviorManager](../../v1.3.15/zh/api/campaign-ext/CampaignBehaviorManager) —— 谁持有并回调所有行为。
- [CampaignGameStarter](../../v1.3.15/zh/api/campaign-ext/CampaignGameStarter) —— 注册入口。
- [Campaign](../../v1.3.15/zh/api/campaign/Campaign) —— 世界状态根。

## 你要注意什么

- **回调分两类，用错代价很大。**
  - 「日结 / 周期性」回调（每日、每回合）：适合累加、结算、推进。
  - 「状态变化」回调（某事件发生了）：适合响应。
  在日结里反复轮询状态变化，逻辑会和地图事件系统打架。
- **在行为里加的字段必须能存档。** 这是行为最常见的读档 bug 来源：
  行为被重新构造了，但你没让字段进存档，于是读档后「计数器归零、标记全没」。
  走 [读写存档](../task-save)。
- **行为是全存档共享的。** 不存在「只对这个存档生效」的行为实例。
  要区分，按存档标识判。
- **多个行为之间没有顺序保证。** 行为 A 依赖行为 B 已经跑过，是不成立的假设。
  需要顺序就合并成一个行为，或者改用模型这种有明确注册序的机制。
- **战斗期间战役行为不会跑。** 战斗是独立生命周期，见
  [处理一场战斗](../task-mission-action)。在战役行为里读 `Mission.Current` 会拿到 `null`。

## 最小可运行形状

```csharp
public class MyCampaignBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents() { /* 订阅你要响应的事件 */ }

    public override void DailyTickOccured(Mission mission)
    {
        // 每日回调。具体签名以类型页为准。
    }

    // 在战役初始化期注册，一次即可。
    // starter.AddBehavior(new MyCampaignBehavior());
}
```

## 该用行为还是该用别的

| 你要做 | 用 |
| --- | --- |
| 玩家点菜单触发一次 | [做一个新的战役动作](../task-campaign-action) |
| 替换某个默认算法 | [接一个 GameModel](../task-gamemodel) |
| 全程常驻、响应事件或日结 | **行为**（本页） |
| 战斗场景内的事 | [处理一场战斗](../task-mission-action) |

## 导航

- ↑ [跨版本中枢 / 任务入口](../)
- ↑ [站点首页](../../)
- ↔ [CampaignBehaviorBase](../../v1.3.15/zh/api/campaign-ext/CampaignBehaviorBase) · [跨版本对比](../CampaignBehaviorBase)
