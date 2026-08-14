---
title: "EncounterGameMenuModel — 遭遇菜单判定模型"
description: "基于 v1.4.5 源码说明 EncounterGameMenuModel 的获取方式、默认 menu id 逻辑、startBattle/joinBattle 判定、PlayerEncounter 与攻城/城镇菜单调用点，以及 Model 计算与 Actions 变更的边界。"
---
# EncounterGameMenuModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public abstract class EncounterGameMenuModel : MBGameModel<EncounterGameMenuModel>`  
**Base:** `MBGameModel<EncounterGameMenuModel>`  
**Source path:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/EncounterGameMenuModel.cs`

## 概述

它是遭遇菜单的计算模型：读取当前 party、settlement、raid、siege、MapEvent 和玩家等待状态，返回一个已注册的 menu id，并通过 `out` 参数告诉调用者是否需要先开战或加入战斗。它本身不移动 party、不创建 MapEvent、也不改变攻城状态；真正的变更发生在 PlayerEncounter、Actions 或攻城系统中。

## 一句话职责

为玩家当前遭遇选择要打开的 campaign game menu id，并告诉遭遇流程在打开菜单前是否应开战或加入战斗。

## 心智模型

这是 campaign [Model](../GameModels)，不是 Action。它根据当前 party、settlement、siege、raid 和 encounter 状态计算菜单结果。活动实现通过 `Campaign.Current.Models.EncounterGameMenuModel` 获取；该属性由 `GameModels.GetSpecificGameBehaviors()` 在模型注册后填充。Sandbox 默认实现是 [DefaultEncounterGameMenuModel](../DefaultEncounterGameMenuModel)，由 `SandBoxManager` 通过 `gameStarter.AddModel(new DefaultEncounterGameMenuModel())` 安装。

最重要的调用点是 `PlayerEncounter.Init`：它调用 `GetEncounterMenu(attackerParty, defenderParty, out startBattle, out joinBattle)`。如果 `startBattle` 为 true，`PlayerEncounter.StartBattle()` 才改变战斗状态；如果 `joinBattle` 为 true，`PlayerEncounter.JoinBattle(BattleSideEnum.Attacker)` 或 `PlayerEncounter.JoinBattle(BattleSideEnum.Defender)` 才把玩家接入一侧。最后 `GameMenu.ActivateGameMenu(encounterMenu)` 打开模型返回的 menu id。模型只计算决定，`PlayerEncounter` 执行状态变更。

## 何时使用 / 何时不要使用

当你的 mod 需要改变村庄劫掠、城镇/城堡外部菜单、攻城策略菜单、加入已有遭遇、新 party 加入打断，或 generic state interruption 打开的菜单时，使用这个模型。

不要用它创建或终结 [MapEvent](../MapEvent)、移动 party side、结束攻城或宣和。状态变更应使用 [StartBattleAction](../../campaign-ext/StartBattleAction)、PlayerEncounter 方法、攻城系统，或带原因的 campaign [Actions](../../campaign-ext/MakePeaceAction)。也不要在 `Campaign.Current` 与 `Campaign.Current.Models` 尚不存在时调用它。

## 依赖

| 关系 | 源码确认的含义 |
|------|----------------|
| 获取 | 从 [GameModels](../GameModels) 的 `Campaign.Current.Models.EncounterGameMenuModel` 读取。 |
| 默认实现 | [DefaultEncounterGameMenuModel](../DefaultEncounterGameMenuModel) 返回真实 id，例如 `camp`、`encounter`、`join_encounter`、`menu_siege_strategies`、`town_outside`、`castle_outside`、`raiding_village`、`village_loot_complete`。 |
| 主要消费者 | [PlayerEncounter](../PlayerEncounter).`Init` 读取 menu id 和两个 `out` bool，然后在打开 [GameMenu](../GameMenu) 前执行开战或加入战斗。 |
| Generic menu 消费者 | [EncounterGameMenuBehavior](../EncounterGameMenuBehavior)、`PlayerTownVisitCampaignBehavior`、`PlayerArmyWaitBehavior`、[Campaign](../Campaign) 以及 [SiegeEventManager](../SiegeEventManager) 相邻的 siege behavior 使用 `GetGenericStateMenu()`。 |
| UI 消费者 | `GameMenuVM` 用 `IsPlunderMenu(MenuContext.GameMenu.StringId)` 判断劫掠 UI 状态。 |
| 存档边界 | [CampaignBehaviorBase](../CampaignBehaviorBase).`SyncData` 保存 behavior 状态；这个 Model 在启动时重新安装/计算，不应存 campaign 进度。 |

## 崩溃、生命周期、线程与空引用风险

- 如果 [GameModels](../GameModels) 构造前没有注册模型，`Campaign.Current.Models.EncounterGameMenuModel` 可以为 null。原版 sandbox 会注册默认实现；全转化开局仍需要自己安装。
- `GetEncounterMenu` 可以返回 null 或空字符串。`PlayerEncounter.Init` 只有在结果非空时才打开菜单。
- `out` 值本身没有副作用，副作用来自 `PlayerEncounter` 消费它们。对无法开战的上下文返回 `startBattle = true` 可能触发断言或破坏遭遇流程。
- `GetGenericStateMenu()` 会在菜单 tick 和打断检查中调用。返回错误 menu id 会把玩家错误切出城镇、攻城或等待菜单。
- `IsPlunderMenu` 接收 UI 传入的 menu id 字符串。menu id 必须是精确的引擎 id；自造 id 不会匹配已注册的 game menu。

## 关键公开成员

| 成员 | 用途、副作用与时机 |
|------|--------------------|
| `GetEncounterMenu(PartyBase attackerParty, PartyBase defenderParty, out bool startBattle, out bool joinBattle)` | 主要遭遇判定。计算 menu id 和两个决定。Model 内不直接变更；`PlayerEncounter.Init` 在 bool 为 true 时变更。 |
| `GetRaidCompleteMenu()` | 劫掠完成后的 menu id。默认返回 `village_loot_complete`。 |
| `GetNewPartyJoinMenu(MobileParty newParty)` | 新 party 加入当前遭遇时的可选打断菜单。默认在 raid 场景返回 `encounter` 或 `join_encounter`，否则 null。 |
| `GetGenericStateMenu()` | 根据当前玩家状态重新计算合适菜单：encounter、siege strategy、army wait、town outside、village wait 等打断状态。 |
| `IsPlunderMenu(string menuId)` | UI/分类辅助。默认只有 `raiding_village` 为 true。 |

## 真实 C# 示例

### 像源码调用点一样读取活动模型

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;

public sealed class EncounterMenuProbe
{
    public string GetMainPartyEncounterMenu(PartyBase defenderParty, out bool startBattle, out bool joinBattle)
    {
        EncounterGameMenuModel model = Campaign.Current.Models.EncounterGameMenuModel;
        return model.GetEncounterMenu(PartyBase.MainParty, defenderParty, out startBattle, out joinBattle);
    }
}
```

只有调用者应该响应 `startBattle` 和 `joinBattle`。模型方法本身只返回决定。

### 安装替换模型，同时保留默认 id

```csharp
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;

public sealed class RaidMenuModel : DefaultEncounterGameMenuModel
{
    public override bool IsPlunderMenu(string menuId)
    {
        return menuId == "raiding_village";
    }
}

public sealed class RaidMenuSubModule : MBSubModuleBase
{
    protected override void OnGameStart(Game game, IGameStarter gameStarterObject)
    {
        if (gameStarterObject is CampaignGameStarter campaignGameStarter)
        {
            campaignGameStarter.AddModel(new RaidMenuModel());
        }
    }
}
```

示例保留了原版 menu id。若返回自定义 id，必须在任何调用点尝试打开它前注册对应 game menu。

## 导航

**Parent**

- [Campaign API index](../)
- [Campaign](../Campaign)

**Sibling**

- [DefaultEncounterGameMenuModel](../DefaultEncounterGameMenuModel)
- [EncounterGameMenuBehavior](../EncounterGameMenuBehavior)
- [PlayerEncounter](../PlayerEncounter)
- [GameMenu](../GameMenu)
- [GameModels](../GameModels)

**Related / Children**

- [MapEvent](../MapEvent)
- [SiegeEventManager](../SiegeEventManager)
- [StartBattleAction](../../campaign-ext/StartBattleAction)
- [MakePeaceAction](../../campaign-ext/MakePeaceAction)
- [CampaignBehaviorBase](../CampaignBehaviorBase)
