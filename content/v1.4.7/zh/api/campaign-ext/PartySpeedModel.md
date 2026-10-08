---
title: "PartySpeedModel"
description: "行军速度的战役组件契约：声明基础速度、最低速度与两段式速度求值入口，算法由实现类决定。"
---
# PartySpeedModel

**命名空间：** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public abstract class PartySpeedModel : MBGameModel<PartySpeedModel>`
**基类：** `MBGameModel<PartySpeedModel>`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/ComponentInterfaces/PartySpeedModel.cs`（声明见第 8 行）

## 概述

这个契约回答一个问题：**一支队伍在地图上跑多快**。它把「行军速度」抽成可替换的组件模型：游戏各处（队伍移动、招募界面预览）都来问它，而具体怎么算由实现类决定。契约只有 4 个抽象成员——两个速度属性 + 两个两段式求值方法——但这两个求值方法承载了全部算法空间。

## 心智模型

**两段式求值。** 契约把速度计算拆成两段：`CalculateBaseSpeed` 算「队伍本身有多快」（人数、骑兵比例、辎重、士气、perk），`CalculateFinalSpeed` 在基础速度上叠加「环境修正」（地形、天气、侦察 perk、军队 perk）。这个拆分不是随意的：招募界面需要预览「如果招募这些人，队伍会多慢」——它用 `additionalTroopOnFootCount` / `additionalTroopOnHorseCount` 参数调 `CalculateBaseSpeed` 算假设速度，而不需要跑最终速度的环境修正。

**替换机制。** 与 `PartySizeLimitModel` 同一条通道：`campaignGameStarter.AddModel<PartySpeedModel>(new MyModel())` 整体替换，`GetGameModel<T>()` 从列表末尾向前找、最后注册的生效。官方默认实现在 `SandBoxManager` 注册。`BaseModel` 是 `private protected`，mod 程序集拿不到——想改速度要么继承 `DefaultPartySpeedCalculatingModel` 覆写单个方法，要么整个契约自己实现。

**何时被调用。** `MobileParty` 在地图上移动时算速度并缓存（`CalculateBaseSpeed` + `CalculateFinalSpeed` 各一次）；招募界面在玩家调整招募数量时反复调 `CalculateBaseSpeed`（带假设兵力）来预览速度变化。**改这个模型 = 改整个战役的移动节奏**。

## 怎么用

**替换它：** 写一个继承 `PartySpeedModel` 的类，实现全部 4 个抽象成员，然后注册：

```csharp
campaignGameStarter.AddModel<PartySpeedModel>(new MyPartySpeedModel());
```

**真实坑：**

1. **4 个成员一个都不能少。** 两个属性 + 两个方法，少一个都编译不过。想省事就继承 `DefaultPartySpeedCalculatingModel` 只覆写一个。
2. **`CalculateFinalSpeed` 的入参是 `ExplainedNumber` 不是 `float`。** 它接收 `CalculateBaseSpeed` 的结果（或自定义值），返回修正后的 `ExplainedNumber`。你可以在上面继续 `AddFactor`，也可以整个替换。
3. **`additionalTroopOnFootCount` / `additionalTroopOnHorseCount` 是招募预览用的。** 招募界面用它们问「再多这些步兵/骑兵，速度会怎么变」。你的实现要正确处理这两个参数，否则招募界面的速度预览是错的。
4. **`MinimumSpeed` 是硬地板。** 默认实现里 `CalculateBaseSpeed` 和 `CalculateFinalSpeed` 末尾都调 `LimitMin(MinimumSpeed)`，速度不会低于它。改这个值会影响所有队伍的最低速度。

**使用点（游戏在哪里问这个模型）：**

- `GameModels.cs:24` — 模型属性 `PartySpeedCalculatingModel`
- `GameModels.cs:644` — `GetGameModel<PartySpeedModel>()` 取值
- `SandBoxManager.cs:248` — 官方默认实现的注册点
- `MobileParty.cs:823` / `MobileParty.cs:824` — 移动时算速度并缓存（带说明版）
- `MobileParty.cs:3490` / `MobileParty.cs:3499` / `MobileParty.cs:3513` — 速度重算与最终速度取值
- `RecruitmentVM.cs:146` / `RecruitmentVM.cs:147` / `RecruitmentVM.cs:148` / `RecruitmentVM.cs:149` — 招募界面用假设兵力预览速度

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `float BaseSpeed { get; }` | 基础速度常量，速度公式的起点。默认实现返回 4（`PartySpeedModel.cs:12`）。 |
| `float MinimumSpeed { get; }` | 速度硬地板，`CalculateBaseSpeed` 与 `CalculateFinalSpeed` 末尾都 `LimitMin` 到它。默认实现返回 1（`PartySpeedModel.cs:16`）。 |
| `ExplainedNumber CalculateBaseSpeed(MobileParty party, bool includeDescriptions = false, int additionalTroopOnFootCount = 0, int additionalTroopOnHorseCount = 0)` | 基础速度。`party` 为被查询队伍；`includeDescriptions` 控制是否收集加成来源；两个 `additionalTroop*` 参数用于招募预览（假设兵力）。默认实现算人数衰减、骑兵比例、辎重、士气、perk 等（`PartySpeedModel.cs:19`）。 |
| `ExplainedNumber CalculateFinalSpeed(MobileParty mobileParty, ExplainedNumber finalSpeed)` | 最终速度。`finalSpeed` 为基础速度（或自定义值），返回叠加地形、天气、侦察 perk、军队 perk 后的结果。默认实现处理森林、水域、沙漠、雪原、昼夜、侦察 perk 等（`PartySpeedModel.cs:22`）。 |

## 真实示例

```csharp
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

// 全员加速 20% 的 mod 速度模型
public class FastPartySpeedModel : PartySpeedModel
{
    public override float BaseSpeed => 4.8f; // 默认 4
    public override float MinimumSpeed => 1f;

    public override ExplainedNumber CalculateBaseSpeed(MobileParty party, bool includeDescriptions = false, int additionalTroopOnFootCount = 0, int additionalTroopOnHorseCount = 0)
    {
        ExplainedNumber speed = new ExplainedNumber(BaseSpeed, includeDescriptions, null);
        speed.AddFactor(0.2f, "{=mod}Flat speed bonus", null);
        return speed;
    }

    public override ExplainedNumber CalculateFinalSpeed(MobileParty mobileParty, ExplainedNumber finalSpeed)
    {
        finalSpeed.LimitMin(MinimumSpeed);
        return finalSpeed;
    }
}
```

## 参见

- [DefaultPartySpeedCalculatingModel](../DefaultPartySpeedCalculatingModel) — 本契约的官方默认实现
- [PartySizeLimitModel](../PartySizeLimitModel) — 同桶的队伍人数上限契约
- [CampaignGameStarter](../../campaign/CampaignGameStarter) — 模型替换的注册入口

## 导航

- ↑ [campaign-ext 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
