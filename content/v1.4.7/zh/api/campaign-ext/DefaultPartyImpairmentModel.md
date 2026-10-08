---
title: "DefaultPartyImpairmentModel"
description: "默认的队伍混乱与脆弱状态模型：判定部队是否有资格陷入混乱、计算混乱与脆弱的持续时长，并给出围城战的预期脆弱时间窗口。"
---
# DefaultPartyImpairmentModel

**命名空间：** `TaleWorlds.CampaignSystem.GameComponents`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public class DefaultPartyImpairmentModel : PartyImpairmentModel`
**基类：** `PartyImpairmentModel`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/GameComponents/DefaultPartyImpairmentModel.cs`（声明见第 13 行）

## 概述

`DefaultPartyImpairmentModel` 是抽象模型 `PartyImpairmentModel` 的内置默认实现，为战役层提供三块数值判定：队伍是否有资格陷入混乱状态（disorganized）、混乱与脆弱状态各持续多久、以及围城战的预期脆弱时间窗口。混乱会削弱部队战斗力，脆弱让部队在围城/被袭时更易被击溃，两者共同构成部队状态惩罚体系的核心。

## 心智模型

把它想成"部队状态惩罚的数值裁判"：它不直接改写队伍状态，而是回答三个问题——"这支部队有没有资格陷入混乱？"（`CanGetDisorganized`）、"一旦陷入，混乱/脆弱要持续多久？"（`GetDisorganizedStateDuration` / `GetVulnerabilityStateDuration`）、"围城方大概什么时候能等到守军变脆弱？"（`GetSiegeExpectedVulnerabilityTime`）。所有时长以小时为单位返回且都带随机成分：混乱时长以 6 小时为基准叠加 perk 修正，脆弱时长是正态随机 +4 小时，围城窗口围绕日出时间做正态扰动。想调整部队状态惩罚的手感，就整体替换这个模型。

## 怎么用

替换方式：继承 `PartyImpairmentModel`（或直接继承本类）重写需要调整的方法，然后在 SubModule 的 `OnGameStart`（或任意 CampaignBehavior）中执行 `Campaign.Current.Models.PartyImpairmentModel = new MyPartyImpairmentModel();`，游戏所有相关逻辑都会走你的实现。

真实坑：

1. **6 小时基准是 private const，外部改不了。** `BaseDisorganizedStateDuration`（DefaultPartyImpairmentModel.cs:49）是 `private const float = 6f`，子类无法引用，想改基准必须整个重写 `GetDisorganizedStateDuration`。
2. **混乱门槛硬编码 10 人 + 军队条件。** `CanGetDisorganized`（DefaultPartyImpairmentModel.cs:37）要求 `TotalManCount >= 10` 且满足"无军队 / 是军队领袖 / 有附属"之一；自定义模型若放宽门槛，小股部队也会陷入混乱，破坏平衡。
3. **SwiftRegroup 只在特定地图事件下生效。** `GetDisorganizedStateDuration`（DefaultPartyImpairmentModel.cs:24）中该 perk 仅在 MapEvent 为劫掠或攻城突击、且队伍不在海上时加成；Foragers 则由 `PerkHelper` 处理海上情形，重写时容易漏掉海上分支。
4. **围城窗口是纯随机的。** `GetSiegeExpectedVulnerabilityTime`（DefaultPartyImpairmentModel.cs:16）完全基于 `MBRandom`，同一存档多次调用结果不同，不要拿它做确定性判断。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `GetSiegeExpectedVulnerabilityTime()` | 返回围城战预期脆弱时间窗口（小时），围绕日出做正态随机扰动（DefaultPartyImpairmentModel.cs:16） |
| `GetDisorganizedStateDuration(MobileParty party)` | 返回队伍陷入混乱的持续时长（小时）：6 小时基准 + SwiftRegroup/Foragers perk 修正，以 `ExplainedNumber` 返回（DefaultPartyImpairmentModel.cs:24） |
| `CanGetDisorganized(PartyBase party)` | 判定队伍是否满足进入混乱状态的门槛：激活、移动中、≥10 人、且无军队/是领袖/有附属（DefaultPartyImpairmentModel.cs:37） |
| `GetVulnerabilityStateDuration(PartyBase party)` | 返回脆弱状态持续时长（小时），正态随机 +4（DefaultPartyImpairmentModel.cs:43） |
| `BaseDisorganizedStateDuration` | private const，混乱状态 6 小时基准时长，仅本类内部使用（DefaultPartyImpairmentModel.cs:49） |
| `_settlementInvolvedMapEvent` | private static readonly TextObject，"Settlement involved map event" 本地化文本，供 UI 提示使用（DefaultPartyImpairmentModel.cs:52） |

## 真实示例

```csharp
// 通过 Campaign.Current.Models 拿到当前生效的混乱/脆弱模型
PartyImpairmentModel model = Campaign.Current.Models.PartyImpairmentModel;

// 查询主队在当前状态下会陷入混乱多久（含 perk 修正）
ExplainedNumber disorganized = model.GetDisorganizedStateDuration(MobileParty.MainParty);
float hours = disorganized.ResultNumber;

// 判断某支队伍是否满足进入混乱状态的门槛
bool eligible = model.CanGetDisorganized(MobileParty.MainParty);
```

## 参见

- [PartyImpairmentModel](../PartyImpairmentModel) —— 本类实现的抽象接口，定义混乱/脆弱模型的契约
- [MobileParty](../../campaign/MobileParty) —— 混乱与脆弱状态的实际承载者，模型方法的入参来源

## 导航
- ↑ [campaign-ext 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
