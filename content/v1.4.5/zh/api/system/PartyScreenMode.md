---
title: "PartyScreenMode"
description: "v1.4.5 中保存于 PartyState、用于普通、战利品、赎金、部队、俘虏和任务转移界面的模式枚举。"
---
# PartyScreenMode

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public enum PartyScreenMode`  
**Owner:** [PartyScreenHelper](../PartyScreenHelper)  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/PartyScreenHelper.cs`

## 职责

`PartyScreenMode` 标记 [PartyScreenHelper](../PartyScreenHelper) 写入 [PartyState](../../campaign/PartyState) 的部队界面工作流。它告诉 [PartyScreenLogic](../../campaign/PartyScreenLogic) 当前展示契约，但不会单独授权部队或俘虏移动。

## 心智模型

辅助类构造状态和初始化数据时选择模式：

```
PartyScreenHelper 入口 -> PartyState.PartyScreenMode -> PartyScreenLogic 转移展示
```

转移状态、容量限制和回调是独立输入。因此模式表示工作流，不表示完整的 mutation policy。

## 枚举值

| 值 | 源码工作流 |
| --- | --- |
| `Normal` | 普通 party 管理和主 party 默认流程。 |
| `Shared` | 专用转移逻辑使用的共享 party 展示。 |
| `Loot` | 从战利品 roster 中取得部队或俘虏。 |
| `Ransom` | 使用源码赎金初始化流程赎回俘虏。 |
| `PrisonerManage` | 管理或捐献俘虏。 |
| `TroopsManage` | 管理、接收、捐献或转移部队。 |
| `QuestTroopManage` | 带有任务回调和容量的任务部队选择。 |

## 真实使用

界面活动时，可以从活动 party 状态读取模式：

```csharp
Game game = Game.Current;
PartyState state = PartyScreenHelper.GetActivePartyState();
bool isQuestTransfer = state != null
    && state.PartyScreenMode == PartyScreenHelper.PartyScreenMode.QuestTroopManage;
```

`OpenScreenAsLoot`、`OpenScreenAsRansom`、`OpenScreenAsQuest` 和 `OpenScreenWithCondition` 等入口会在压入 `PartyState` 前设置该值。

## 依赖关系

- [PartyScreenHelper](../PartyScreenHelper) 拥有枚举声明并负责赋值。
- [PartyState](../../campaign/PartyState) 保存活动模式。
- [PartyScreenLogic](../../campaign/PartyScreenLogic) 在转移和按钮处理中消费模式。
- [GameStateManager](../../core-extra/GameStateManager) 通过状态栈使该状态活动。

## 风险与版本边界

`PartyScreenMode` 不能替代 `PartyScreenLogic.TransferState`。`TroopsManage` 仍可能把一侧设置为不可转移，`Loot` 仍然依赖传入 roster 和回调。本文记录的值按 v1.4.5 编写，不是存档 schema 契约。

## 导航

- [↑ API system 索引](../)
- [所有者：PartyScreenHelper](../PartyScreenHelper)
- [相关：PartyState](../../campaign/PartyState)
- [相关：PartyScreenLogic](../../campaign/PartyScreenLogic)
- [English page](../../../../en/api/system/PartyScreenMode)
