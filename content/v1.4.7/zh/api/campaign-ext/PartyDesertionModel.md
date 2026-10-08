---
title: "PartyDesertionModel"
description: "战役层部队逃亡策略接口：决定每 tick 逃离党派的部队名册、单兵逃亡概率与士气阈值"
---
# PartyDesertionModel

**命名空间：** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public abstract class PartyDesertionModel : MBGameModel<PartyDesertionModel>`
**基类：** `MBGameModel<PartyDesertionModel>`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/ComponentInterfaces/PartyDesertionModel.cs`（声明见第 9 行）

## 概述

战役层「部队逃亡」策略接口：每 tick 决定一个党派中哪些部队会逃离、单个兵员的逃亡概率，以及触发逃亡的士气阈值。`DesertionCampaignBehavior` 对每个活跃党派调用它并照单减员，默认实现为 `DefaultPartyDesertionModel`（按士气、工资与党派规模抽样）。

## 心智模型

把它想成战役系统里的「逃亡裁判」：游戏每 tick 问它两个问题——「这个党派现在谁想跑？」（`GetTroopsToDesert`，直接给出想跑的部队名册）和「士气低到多少才会跑？」（`GetMoraleThresholdForTroopDesertion`）。`GetDesertionChanceForTroop` 则是默认实现内部的逐兵员概率尺子，用来按概率抽样。接口本身不存状态，一切都从 `MobileParty` 现算，因此可以整体替换而不污染存档。

## 怎么用

**替换它：** 继承 `PartyDesertionModel`（PartyDesertionModel.cs:9）并 override 三个抽象方法。注意 `GameModels.PartyDesertionModel` 的 setter 是 private（GameModels.cs:119），不能直接赋值；组件按「后注册优先」解析（GameModelsManager.cs:17 从尾到头扫描），且 Campaign 只注册一次 GameModels（Campaign.cs:1915，重复注册会在 Game.cs:89 抛异常）——所以实际替换需要 Harmony 补丁介入 GameModels 的构造/解析流程。默认组件是 `DefaultPartyDesertionModel`。

**坑：**

1. 三个方法全是 abstract（PartyDesertionModel.cs:12、15、18）——自定义实现漏 override 任何一个都编译不过。
2. `GetTroopsToDesert` 返回的名册会被原样用于减员（DesertionCampaignBehavior.cs:35-44）——每次返回新名册，不要返回缓存或共享实例，否则同一 tick 内多党派处理会互相污染。
3. `GetDesertionChanceForTroop` 收的是 `in TroopRosterElement` 只读引用（PartyDesertionModel.cs:15）——遍历 roster 的过程中不要增删元素（DefaultPartyDesertionModel.cs:94 就是在 foreach 里调它）。
4. `GetMoraleThresholdForTroopDesertion` 无参数、被 UI 高频调用（MapInfoVM.cs:107 每次地图栏刷新都调）——保持 O(1)、无副作用，不要在里面遍历 roster。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `PartyDesertionModel`（抽象类） | 战役层逃亡策略的唯一扩展点，继承 `MBGameModel<PartyDesertionModel>`，由 `Campaign.Current.Models.PartyDesertionModel` 解析（PartyDesertionModel.cs:9） |
| `GetTroopsToDesert(MobileParty)` | 返回本 tick 决定逃亡的部队名册，`DesertionCampaignBehavior` 照单减员并触发 `OnTroopsDeserted`（PartyDesertionModel.cs:12） |
| `GetDesertionChanceForTroop(MobileParty, in TroopRosterElement)` | 返回单个兵员的逃亡概率（0–1），供默认实现按概率抽样（PartyDesertionModel.cs:15） |
| `GetMoraleThresholdForTroopDesertion()` | 返回触发逃亡的士气阈值，地图栏 UI 用它显示士气警告（PartyDesertionModel.cs:18） |

## 真实示例

```csharp
// 消费端：与 DesertionCampaignBehavior.cs:35 相同——每 tick 取逃亡名册并照单减员
TroopRoster troopsToDesert = Campaign.Current.Models.PartyDesertionModel.GetTroopsToDesert(mobileParty);
if (troopsToDesert.Count > 0)
{
    foreach (TroopRosterElement troopRosterElement in troopsToDesert.GetTroopRoster())
    {
        mobileParty.MemberRoster.AddToCounts(troopRosterElement.Character, -troopRosterElement.Number, false, -troopRosterElement.WoundedNumber, 0, true, -1);
    }
    CampaignEventDispatcher.Instance.OnTroopsDeserted(mobileParty, troopsToDesert);
}

// UI 端：与 MapInfoVM.cs:107 相同——用士气阈值驱动地图栏警告
bool hasWarning = MobileParty.MainParty.Morale < (float)Campaign.Current.Models.PartyDesertionModel.GetMoraleThresholdForTroopDesertion();
```

## 参见

- [`DefaultPartyDesertionModel`](../DefaultPartyDesertionModel) — 默认实现：按士气、工资与党派规模抽样决定逃亡
- [架构总览](../../../architecture/) — 跨桶：游戏模型在战役系统中的位置

## 导航

- ↑ [campaign-ext 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
