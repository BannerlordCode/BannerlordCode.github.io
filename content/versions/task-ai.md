---
title: "改 AI 决策"
description: "开发者视角总览：Bannerlord 的 AI 分地图侧与战斗侧两套体系——MobilePartyAIModel 与 AiBehavior 一族、Agent 的 AI 逻辑，以及两者的边界与替换方式。"
extra:
  sidebar: auto
---

# 改 AI 决策

> **这条路径解决什么**：地图上的部队该怎么走、战斗里的人该怎么打。
> 这两件事在 Bannerlord 里是**两套完全独立的 AI**，先分清你在改哪一个。

## 心智模型：先分清「地图侧」还是「战斗侧」

```text
地图侧（Campaign）
  部队 AI ── 往哪走、打谁、什么时候驻扎
    模型层   MobilePartyAIModel      ← 「做什么决定」：一个可替换的算法模型
    行为层   AiBehavior 一族        ← 「怎么走完这个决定」：状态机式的行为
    入口     MobilePartyAi          ← 把决定与行为接起来

战斗侧（Mission）
  Agent AI ── 在这一场仗里干什么
    AgentHumanAILogic              ← 人类玩家的 Agent
    AgentCommonAILogic             ← 所有 Agent 共用的部分
```

**换算法 vs 换行为**是两种不同的改法：

- 要改「这个决定的内容」——比如「劫匪优先劫商队而不是玩家」→ 换 **模型**。
- 要改「决定怎么一步步执行」——比如「被追时先绕后包抄」→ 加/改 **行为**。

模型层是装饰器机制（见 [接一个 GameModel](../task-gamemodel)），行为层是类继承。
**别在行为里重算决定，也别在模型里写状态机** —— 这是这条路径最容易走偏的地方。

## 下钻路径

| 步骤 | 做什么 | 打开 |
| --- | --- | --- |
| 1 | 搞清两套 AI 的分界 | [战役系统](../../v1.3.15/zh/guide/campaign-system) · [任务系统](../../v1.3.15/zh/guide/mission-system) |
| 2 | 地图侧：看模型层长什么样 | [MobilePartyAIModel](../../v1.3.15/zh/api/campaign-ext/MobilePartyAIModel) |
| 3 | 地图侧：看行为层 | [AiBehavior](../../v1.3.15/zh/api/campaign-ext/AiBehavior) · [MobilePartyAi](../../v1.3.15/zh/api/campaign-ext/MobilePartyAi) |
| 4 | 战斗侧：看 Agent 的 AI 逻辑 | [AgentHumanAILogic](../../v1.3.15/zh/api/mission-ext/AgentHumanAILogic) · [AgentCommonAILogic](../../v1.3.15/zh/api/mission-ext/AgentCommonAILogic) |
| 5 | 战斗侧：看战斗整体 | [Mission](../../v1.3.15/zh/api/mission/Mission) · [Agent](../../v1.3.15/zh/api/mission/Agent) |
| 6 | 改数值而不是决策 | [AgentStatCalculateModel](../../v1.3.15/zh/api/mission-ext/AgentStatCalculateModel) |
| 7 | 换模型的机制细节 | [接一个 GameModel](../task-gamemodel) |
| 8 | 让 AI 也能触发你的战役动作 | [做一个新的战役动作](../task-campaign-action) |

## 关键类型就这几个

- [MobilePartyAIModel](../../v1.3.15/zh/api/campaign-ext/MobilePartyAIModel) —— 地图侧的**决策模型**。
  可替换，走 `AddModel` 注册。
- [MobilePartyAi](../../v1.3.15/zh/api/campaign-ext/MobilePartyAi) —— 把模型的决定与行为接起来的入口。
- [AiBehavior](../../v1.3.15/zh/api/campaign-ext/AiBehavior) —— 行为层的基类。
  同族还有 `AiPartyThinkBehavior`、`AiMilitaryBehavior`、`AiEngagePartyBehavior` 等。
- [AgentHumanAILogic](../../v1.3.15/zh/api/mission-ext/AgentHumanAILogic) —— 战斗侧，玩家 Agent 的 AI。
- [AgentCommonAILogic](../../v1.3.15/zh/api/mission-ext/AgentCommonAILogic) —— 战斗侧，所有 Agent 共享的部分。

## 你要注意什么

- **地图侧 AI 在战斗期间不跑。** 战斗是独立生命周期。见
  [处理一场战斗](../task-mission-action)。
- **换模型必须在战役初始化期注册。** 跑起来以后没有「换模型」这个入口。
- **行为是有状态的。** 自定义行为要能在「决定变了」时正确重置状态，
  否则会出现「AI 卡在半路」这类难复现的问题。
- **地图侧行为改动会影响平衡性。** 战斗侧 AI 通常只影响单场体验，地图侧 AI 影响整个战役节奏。
  两者的风险量级不同。
- **别在 AI 决策里做存档敏感的事。** AI 的中间状态常常不被存档；
  读档后 AI 从当前世界状态重新决策。依赖 AI 中间状态的 mod 会出问题。

## 选型速查

| 你想改的 | 改哪一层 |
| --- | --- |
| 「谁该被打」「目标优先级」 | 模型层 · [MobilePartyAIModel](../../v1.3.15/zh/api/campaign-ext/MobilePartyAIModel) |
| 「被追时怎么跑」「什么时候驻扎」 | 行为层 · [AiBehavior](../../v1.3.15/zh/api/campaign-ext/AiBehavior) |
| 「战斗中该往哪躲」 | 战斗侧 · [AgentHumanAILogic](../../v1.3.15/zh/api/mission-ext/AgentHumanAILogic) |
| 「某人血量低于 X 就撤退」 | 多半是**数值**不是决策 · [AgentStatCalculateModel](../../v1.3.15/zh/api/mission-ext/AgentStatCalculateModel) |
| 「AI 要不要用我的新功能」 | 把功能抽成独立方法让 AI 调用，见 [做一个新的战役动作](../task-campaign-action) |

## 导航

- ↑ [跨版本中枢 / 任务入口](../)
- ↑ [站点首页](../../)
- ↔ [MobilePartyAIModel](../../v1.3.15/zh/api/campaign-ext/MobilePartyAIModel) · [AiBehavior](../../v1.3.15/zh/api/campaign-ext/AiBehavior)
