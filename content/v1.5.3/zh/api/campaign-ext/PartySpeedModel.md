---
title: "PartySpeedModel"
description: "抽象契约：规定部队基础速度、最低速度与最终速度的两段组装方式，mod 通过替换它来改变行军速度"
---

# PartySpeedModel

**命名空间：** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Type:** `public abstract class PartySpeedModel : MBGameModel<PartySpeedModel>`
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartySpeedModel.cs`

## 概述

这个抽象契约在游戏里规定部队行军速度的完整计算流程：先由 `CalculateBaseSpeed` 给出基础速度，再由 `CalculateFinalSpeed` 在其上叠加地形、货物、伤员、士气等修正，得到最终速度；`MinimumSpeed` 则兜底，防止任何修正把速度压到不合理的地步。它被部队每日行军结算与地图移动调用，是「部队一天能走多远」这条链路的唯一入口。它与 `PartyMoraleModel`（士气高低直接进最终速度）、`PartySizeLimitModel`（超编拖累速度）是相邻的曲线：三者共同决定一支部队在地图上的实际位移效率。想改行军速度的 mod 几乎都要替换这个模型，而不是去改 `MobileParty` 上的零散字段。

## 心智模型

`CalculateBaseSpeed`（第 19 行）给基础速度，`CalculateFinalSpeed`（第 22 行）在它之上叠加地形/货物/伤员/士气等修正；两个方法**顺序调用**、不能合并。`CalculateFinalSpeed` 接收的是**已经算好的** `ExplainedNumber finalSpeed`，它在其上继续改 —— 这是最容易误解的一点：覆写者拿到的 `finalSpeed` 参数已经是基础速度（甚至已被前序模型改过），在其上乘系数才是正确姿势，把它清零重算会丢掉基础速度。`BaseSpeed` 属性（第 12 行）是静态常量式的基准值，`MinimumSpeed`（第 16 行）是最终速度的下限。常见误用：只覆写 `BaseSpeed` 属性就以为改了最终速度（其实 `CalculateFinalSpeed` 里的乘数会覆盖大部分差异）；或者覆写 `CalculateFinalSpeed` 时忽略传入参数、从零开始算。`GetSkeletalCrewCount`（第 25 行）则服务于「船员/乘员」这类特殊计数，供默认实现内部使用。

## 怎么用

### 怎么拿到它

通过 Campaign 的 `GameModels` 聚合取到：`Campaign.Current?.GameModels?.GetGameModel<PartySpeedModel>()` 即可拿到当前生效的速度模型实例；在 mod 的 `SubModule` 里则用 `GameModels.AddGameModel<PartySpeedModel>(new MySpeedModel())` 在加载期替换默认实现。

### 典型用法

- 全局加速：覆写 `CalculateFinalSpeed`，在传入的 `finalSpeed` 上乘一个系数（如 ×1.3），让所有部队统一提速。
- 地形惩罚：在 `CalculateFinalSpeed` 里读 `party.CurrentSettlement` 或地形信息，给山地/雪地行军额外减速。
- 超编拖累：结合 `PartySizeLimitModel` 的判定，在 `CalculateFinalSpeed` 里对超编部队按比例扣速。
- 士气联动：士气低时减速，把 `PartyMoraleModel` 的当前士气映射成速度系数乘进去。
- 调试说明：给 `CalculateBaseSpeed` 传 `includeDescriptions: true`，从 `ExplainedNumber` 里读出每一项修正的说明文本，直接显示在悬浮提示里。

### 最容易踩的坑

- 只覆写 `BaseSpeed` 属性就以为改了最终速度 —— `CalculateFinalSpeed` 的乘数会覆盖大部分差异（见第 12、22 行）。
- 覆写 `CalculateFinalSpeed` 时忽略传入的 `finalSpeed` 参数、从零重算，导致基础速度丢失（见第 22 行）。
- 把 `MinimumSpeed` 设得比正常速度还高，导致减速修正全部失效（见第 16 行）。
- 在 `CalculateBaseSpeed` 里做昂贵计算且忘了缓存，它被每日结算高频调用（见第 19 行）。
- 误以为 `GetSkeletalCrewCount` 是公开业务 API，实际它主要服务默认实现内部（见第 25 行）。

## 关键成员

- **BaseSpeed**（`PartySpeedModel.cs:12`）— 抽象属性，静态基准速度；被默认实现在 `CalculateBaseSpeed` 里作为起点，覆写它不会自动改变最终速度。
- **MinimumSpeed**（`PartySpeedModel.cs:16`）— 抽象属性，最终速度下限；默认实现在 `CalculateFinalSpeed` 末尾用它兜底，防止修正把速度压到 0。
- **CalculateBaseSpeed**（`PartySpeedModel.cs:19`）— 抽象方法，算基础速度；每日行军结算首先调用它，`includeDescriptions` 为 true 时把每项修正写进 `ExplainedNumber`。
- **CalculateFinalSpeed**（`PartySpeedModel.cs:22`）— 抽象方法，在传入的 `finalSpeed` 上叠加地形/货物/伤员/士气修正；这是 mod 改速度的主战场，顺序在 `CalculateBaseSpeed` 之后。
- **GetSkeletalCrewCount**（`PartySpeedModel.cs:25`）— 抽象方法，取部队的「骨架乘员」计数；默认实现用它做内部结算，一般 mod 不需要覆写。

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Core;

public class FastMarchSpeedModel : PartySpeedModel
{
    public override float BaseSpeed => 5.5f;

    public override float MinimumSpeed => 1.0f;

    public override ExplainedNumber CalculateBaseSpeed(MobileParty party, bool includeDescriptions = false, int additionalTroopOnFootCount = 0, int additionalTroopOnHorseCount = 0)
    {
        var baseSpeed = new ExplainedNumber(BaseSpeed, includeDescriptions, null);
        baseSpeed.Add(party.MemberCount * 0.01f, "troop count");
        return baseSpeed;
    }

    public override ExplainedNumber CalculateFinalSpeed(MobileParty mobileParty, ExplainedNumber finalSpeed)
    {
        finalSpeed.AddFactor(0.3f, "fast march mod");
        if (finalSpeed.ResultValue < MinimumSpeed)
            finalSpeed.Set(MinimumSpeed, true);
        return finalSpeed;
    }

    public override int GetSkeletalCrewCount(MobileParty party) => 0;
}
```

## 参见

- ↔ [DefaultPartySpeedCalculatingModel](../DefaultPartySpeedCalculatingModel) — 官方默认实现（本批，先放着）
- ↔ [PartyMoraleModel](../PartyMoraleModel) — 士气模型：高低士气直接进最终速度
- ↔ [MobilePartyHelper](../../core-extra/MobilePartyHelper) — 部队侧工具页
- ↔ [GameModel](../../core-extra/GameModel) — 模型体系抽象根

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
