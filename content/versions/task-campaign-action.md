---
title: "做一个新的战役动作"
description: "开发者视角总览：战役世界侧新增一个玩家可触发的动作——从 GameMenuOption 到世界状态改动，含 Campaign 与 CampaignGameStarter 的心智模型与挂载点选择。"
extra:
  sidebar: auto
---

# 做一个新的战役动作

> **这条路径解决什么**：玩家在菜单里点一下你的新选项，你的代码改一次战役世界状态
> （加钱、动关系、派一支部队），并且这个动作能存档、能回放、能被 AI 复用。

## 心智模型：战役动作 = 「一个可查询的条件」+「一个改世界的后果」

Bannerlord 的战役动作不是「一个方法」。它是一个**成对**的东西：

```text
condition   (MenuCallbackArgs args) -> bool    「现在能不能做」—— 只读，不许改状态
consequence (MenuCallbackArgs args) -> void    「做了之后改什么」—— 唯一允许改状态的地方
```

这个成对结构不是风格偏好，是游戏的设计约束：

- **游戏要能在显示菜单时反复问「这个选项现在亮不亮」**。如果你把改状态的逻辑写进 condition，
  菜单每次刷新都会真的执行一遍你的改动。
- **condition 会被高频调用**（每次打开菜单、每帧 UI 更新）。在里面做重活会掉帧。
- **consequence 只在玩家真的点了之后跑一次**。真正的副作用只能写在这里。

所以你的第一个决定不是「写哪个方法」，而是「我这个动作的资格判断是什么」。

## 下钻路径

| 步骤 | 做什么 | 打开 |
| --- | --- | --- |
| 1 | 搞清战役世界是怎么组织的、谁在什么时候调用你 | [战役系统](../../v1.3.15/zh/guide/campaign-system) |
| 2 | 知道有哪些「注册器」可以往里挂东西 | [CampaignGameStarter](../../v1.3.15/zh/api/campaign-ext/CampaignGameStarter) |
| 3 | 读动作的载荷类型：菜单选项本体与回调参数 | [GameMenuOption](../../v1.3.15/zh/api/campaign-ext/GameMenuOption) · [MenuCallbackArgs](../../v1.3.15/zh/api/campaign-ext/MenuCallbackArgs) |
| 4 | 知道「世界状态」这个根对象能读能写什么 | [Campaign](../../v1.3.15/zh/api/campaign/Campaign) |
| 5 | 如果这个动作要挂在战斗里而不是菜单里 | [处理一场战斗](../task-mission-action) |
| 6 | 如果这个动作要常驻监听世界变化 | [加一个 CampaignBehavior](../task-campaign-behavior) |

## 关键类型就这几个

- [CampaignGameStarter](../../v1.3.15/zh/api/campaign-ext/CampaignGameStarter) —— **注册入口**。
  `AddGameMenuOption` 把你的动作挂到某个 `GameMenu` 下面。
- [GameMenuOption](../../v1.3.15/zh/api/campaign-ext/GameMenuOption) —— 动作的声明。
  注意 `condition` 与 `consequence` 是两个**不同类型**的委托，形状不一样。
- [MenuCallbackArgs](../../v1.3.15/zh/api/campaign-ext/MenuCallbackArgs) —— 回调参数。
  你能从它拿到当前的 `GameMenuOption` 本身。
- [Campaign](../../v1.3.15/zh/api/campaign/Campaign) —— 世界状态的根。`Campaign.Current` 是访问器。

## 你要注意什么

- **`condition` 里绝对不要改状态。** 这是本条路径唯一真正的技术陷阱。改了就是双写：
  菜单刷新一次就执行一次你的后果。
- **菜单 id 写错不会报错，只会「选项不出现」。** `AddGameMenuOption` 的第一个参数是目标菜单的标识，
  拼错的话游戏找不到那个菜单，选项被静默丢弃。排查时先确认菜单 id 拼写，再查自己的代码。
- **动作的状态必须能存档。** 你在 consequence 里改的如果是自己加的字段，
  必须走存档系统，否则读档后动作会「已经做过」或者「从没做过」的错乱状态。
  见 [读写存档](../task-save)。
- **`Campaign.Current` 在菜单阶段不一定非空。** 菜单在主菜单也会出现。
  动作里如果要读世界状态，判空后再读。
- **想让 AI 也能用这个动作**，不要写在 consequence 里 —— AI 不会点菜单。
  把它抽成一个普通方法，让菜单的 consequence 和你的 AI 调用共用同一个实现。

## 最小可运行形状

形状给到「两个委托 + 一个世界读写」，具体签名以
[GameMenuOption](../../v1.3.15/zh/api/campaign-ext/GameMenuOption) 与
[CampaignGameStarter](../../v1.3.15/zh/api/campaign-ext/CampaignGameStarter) 为准：

```csharp
// 在战役注册阶段调用一次。
starter.AddGameMenuOption(
    "town",        // 挂在哪个 GameMenu 下——写错则选项静默消失
    "my_option",   // 选项自己的标识，必须在你的选项集合里唯一
    "整备部队",     // 显示文本（本地化走 TextObject 更稳）
    args => args.IsEnabled,                 // condition：只读判断，绝不改状态
    args => { /* consequence：唯一允许改世界状态的地方 */ });
```

## 常见变体

| 你要的其实是 | 去 |
| --- | --- |
| 不需要玩家点，战役每回合自动做 | [加一个 CampaignBehavior](../task-campaign-behavior) |
| 需要按条件**替换游戏原本的算法** | [接一个 GameModel](../task-gamemodel) |
| 是战斗里发生的事，不是战役地图上 | [处理一场战斗](../task-mission-action) |
| 要让别的 mod 也能复用这个动作 | 抽成独立类，别写在 consequence 闭包里 |

## 导航

- ↑ [跨版本中枢 / 任务入口](../)
- ↑ [站点首页](../../)
- ↔ [战役系统](../../v1.3.15/zh/guide/campaign-system) · [Campaign](../../v1.3.15/zh/api/campaign/Campaign)
