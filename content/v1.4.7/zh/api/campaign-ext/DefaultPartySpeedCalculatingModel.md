---
title: "DefaultPartySpeedCalculatingModel"
description: "PartySpeedModel 的官方实现：以人数衰减公式算基础速度，再叠加骑兵比例、辎重、士气、地形、天气与侦察 perk 得到最终速度。"
---
# DefaultPartySpeedCalculatingModel

**命名空间：** `TaleWorlds.CampaignSystem.GameComponents`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public class DefaultPartySpeedCalculatingModel : PartySpeedModel`
**基类：** `PartySpeedModel`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/GameComponents/DefaultPartySpeedCalculatingModel.cs`（声明见第 15 行）

## 概述

官方的行军速度算法。基础速度从 `BaseSpeed`（4）出发，按人数衰减（人越多越慢），再叠加骑兵比例、骑乘步兵、辎重、超载、perk、超员、放牧、伤病、俘虏、士气、难度、商队、混乱等修正；最终速度在此基础上叠加地形（森林、水域、沙漠）、天气（雪）、昼夜、侦察 perk 与军队 perk。所有修正都以 `ExplainedNumber` 的因子形式累加，UI 能显示每项的来源。

## 心智模型

**两段式结构。** `CalculateBaseSpeed`（实际转调 private 的 `CalculateLandBaseSpeed`）算队伍本身的速度，`CalculateFinalSpeed` 叠加环境修正。两段都返回 `ExplainedNumber`，都 `LimitMin(MinimumSpeed)` 保底。读这个类时先读 `CalculateLandBaseSpeed` 的主干（它是最长的私有方法，约 130 行），再读 `CalculateFinalSpeed` 的地形/天气分支，最后看一堆 `Get*Modifier` 小公式。

**ExplainedNumber 是核心数据结构。** 每个修正都是一次 `AddFactor(倍率, 来源文字)`：正数加速、负数减速。`includeDescriptions` 决定来源文字是否被收集。改算法时保持这个结构，UI 就能自动显示你的修正项。

**替换机制。** 这个类是 `public` 的具体类，mod 可以直接继承它、只覆写关心的方法——用 `base.Xxx()` 调回官方算法再叠加自己的改动。注意 `CalculateBaseSpeed` 只是转调 `CalculateLandBaseSpeed`，要改基础速度算法得覆写 `CalculateLandBaseSpeed`（private，不能覆写）——所以要么覆写 `CalculateBaseSpeed` 整个替换，要么在 `CalculateFinalSpeed` 里叠加。

**何时被调用。** 与契约页描述的使用点一致：`MobileParty` 移动时算速度、招募界面预览。这个类是那些调用的实际应答者。

## 怎么用

**在官方算法上叠加（推荐）：** 继承 `DefaultPartySpeedCalculatingModel`，覆写一个方法，用 `base` 调回官方结果再叠加。注册方式与契约页一致：`campaignGameStarter.AddModel<PartySpeedModel>(new MyPartySpeedModel())`。

**真实坑：**

1. **`CalculateLandBaseSpeed` 是 private，不能覆写。** 想改基础速度算法只能覆写 `CalculateBaseSpeed`（整个替换）或改 `BaseSpeed` 常量。在 `CalculateFinalSpeed` 里叠加是更安全的姿势。
2. **自定义队伍走特殊分支。** `CalculateFinalSpeed` 开头检查 `IsCustomParty` 且 `CustomPartyComponent.BaseSpeed` 非零时，直接用自定义速度替换 `finalSpeed`。自定义队伍的速度不走正常算法。
3. **士气阈值是硬编码的。** 高士气 >70 加速、低士气 <30 减速，阈值和幅度都是代码里的常量（`HighMoraleThreshold` / `LowMoraleThreshold`）。改它们要覆写 `CalculateLandBaseSpeed`——做不到，所以只能整体替换或在最终速度上补偿。
4. **地形修正在 `CalculateFinalSpeed` 里按 `CurrentNavigationFace` 判定。** 森林、水域/河流/桥、沙漠/沙丘各有分支，且与侦察 perk、文化特质交互。改地形影响要覆写 `CalculateFinalSpeed`。

**使用点：**

- `SandBoxManager.cs:248` — 官方注册：`AddModel<PartySpeedModel>(new DefaultPartySpeedCalculatingModel())`
- `MobileParty.cs:823` / `MobileParty.cs:824` — 移动时算速度并缓存
- `MobileParty.cs:3490` / `MobileParty.cs:3499` / `MobileParty.cs:3513` — 速度重算与最终速度取值
- `RecruitmentVM.cs:146` / `RecruitmentVM.cs:147` / `RecruitmentVM.cs:148` / `RecruitmentVM.cs:149` — 招募界面预览

## 关键成员

### 契约覆写（public override）

| 成员 | 用途 |
| --- | --- |
| `BaseSpeed` | 基础速度常量，返回 4（`DefaultPartySpeedCalculatingModel.cs:19`）。 |
| `MinimumSpeed` | 速度硬地板，返回 1（`DefaultPartySpeedCalculatingModel.cs:29`）。 |
| `CalculateBaseSpeed(MobileParty mobileParty, bool includeDescriptions = false, int additionalTroopOnFootCount = 0, int additionalTroopOnHorseCount = 0)` | 基础速度入口，直接转调 `CalculateLandBaseSpeed`（`DefaultPartySpeedCalculatingModel.cs:168`）。 |
| `CalculateFinalSpeed(MobileParty mobileParty, ExplainedNumber finalSpeed)` | 最终速度：自定义队伍特殊分支 → 地形（森林/水域/沙漠）→ 天气（雪）→ 昼夜 → 侦察 perk → 军队 perk，最后 `LimitMin`（`DefaultPartySpeedCalculatingModel.cs:203`）。 |

### 算法辅助（private）

| 成员 | 用途 |
| --- | --- |
| `CalculateLandBaseSpeed(MobileParty mobileParty, bool includeDescriptions = false, int additionalTroopOnFootCount = 0, int additionalTroopOnHorseCount = 0)` | **基础速度主干**（约 130 行）：人数衰减 → 骑兵/骑乘步兵比例 → 湿雨天气惩罚 → 辎重/超载 → perk → 超员 → 放牧 → 伤病 → 俘虏 → 士气 → 难度 → 商队 → 混乱，最后 `LimitMin`（`DefaultPartySpeedCalculatingModel.cs:38`）。 |
| `CalculateBaseSpeedForParty(int menCount)` | 人数衰减公式：`BaseSpeed × (200 / (200 + 人数))^0.4`（`DefaultPartySpeedCalculatingModel.cs:185`）。 |
| `AddCargoStats(MobileParty mobileParty, ref int numberOfAvailableMounts, ref float totalWeightCarried, ref int herdSize)` | 累计辎重统计：驮兽、牲畜、可用坐骑、总重量（`DefaultPartySpeedCalculatingModel.cs:174`）。 |
| `GetOverburdenedEffect(MobileParty party, float totalWeightCarried, int partyCapacity, bool includeDescriptions)` | 超载修正：`-0.4 × 重量/容量`，叠加「精力充沛」「无负担」perk（`DefaultPartySpeedCalculatingModel.cs:191`）。 |
| `GetCargoEffect(float weightCarried, int partyCapacity)` | 辎重修正：`-0.02 × 重量/容量`（`DefaultPartySpeedCalculatingModel.cs:300`）。 |
| `GetOverPartySizeEffect(int totalMenCount, int partySize)` | 超员修正：`1 / (人数/上限) - 1`（`DefaultPartySpeedCalculatingModel.cs:306`）。 |
| `GetOverPrisonerSizeEffect(MobileParty mobileParty)` | 超俘虏上限修正：`1 / (俘虏/俘虏上限) - 1`（`DefaultPartySpeedCalculatingModel.cs:312`）。 |
| `GetHerdingModifier(int totalMenCount, int herdSize)` | 放牧修正：牲畜超过人数时 `-0.3 × 牲畜/人数`，下限 -0.8（`DefaultPartySpeedCalculatingModel.cs:320`）。 |
| `GetWoundedModifier(int totalMenCount, int numWounded, MobileParty party)` | 伤病修正：伤病超过 1/4 人数时 `-0.05 × 伤病/人数`，下限 -0.8，叠加「雪橇」perk（`DefaultPartySpeedCalculatingModel.cs:335`）。 |
| `GetCavalryRatioModifier(int totalMenCount, int totalCavalryCount)` | 骑兵比例修正：`0.3 × 骑兵/总人数`（`DefaultPartySpeedCalculatingModel.cs:355`）。 |
| `GetMountedFootmenRatioModifier(int totalMenCount, int totalMountedFootmenCount)` | 骑乘步兵修正：`0.15 × 骑乘步兵/总人数`（`DefaultPartySpeedCalculatingModel.cs:365`）。 |
| `GetFootmenPerkBonus(MobileParty party, int totalMenCount, int totalFootmenCount, ref ExplainedNumber result)` | 步兵 perk「强壮」加成（`DefaultPartySpeedCalculatingModel.cs:375`）。 |
| `GetSizeModifierWounded(int totalMenCount, int totalWoundedMenCount)` | 伤病规模公式：`((10+人数)/(10+人数-伤病))^0.33`（`DefaultPartySpeedCalculatingModel.cs:389`）。 |
| `GetSizeModifierPrisoner(int totalMenCount, int totalPrisonerCount)` | 俘虏规模公式：`((10+人数+俘虏)/(10+人数))^0.33`（`DefaultPartySpeedCalculatingModel.cs:395`）。 |

### 关键常量（private const）

| 成员 | 用途 |
| --- | --- |
| `MovingAtForestEffect = -0.3f` | 森林地形减速（`DefaultPartySpeedCalculatingModel.cs:470`）。 |
| `MovingAtWaterEffect = -0.3f` | 水域/河流/桥地形减速（`DefaultPartySpeedCalculatingModel.cs:473`）。 |
| `MovingAtNightEffect = -0.25f` | 夜间减速（`DefaultPartySpeedCalculatingModel.cs:476`）。 |
| `MovingOnSnowEffect = -0.1f` | 雪天减速（`DefaultPartySpeedCalculatingModel.cs:479`）。 |
| `MovingInDesertEffect = -0.1f` | 沙漠减速（`DefaultPartySpeedCalculatingModel.cs:482`）。 |
| `CavalryEffect = 0.3f` | 骑兵比例加速系数（`DefaultPartySpeedCalculatingModel.cs:485`）。 |
| `MountedFootMenEffect = 0.15f` | 骑乘步兵加速系数（`DefaultPartySpeedCalculatingModel.cs:488`）。 |
| `HighMoraleThreshold = 70f` | 高士气阈值（`DefaultPartySpeedCalculatingModel.cs:503`）。 |
| `LowMoraleThreshold = 30f` | 低士气阈值（`DefaultPartySpeedCalculatingModel.cs:506`）。 |
| `DisorganizedEffect = -0.4f` | 混乱减速（`DefaultPartySpeedCalculatingModel.cs:515`）。 |

## 真实示例

```csharp
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

// 在官方算法上叠加：最终速度再 +10%
public class MyPartySpeedModel : DefaultPartySpeedCalculatingModel
{
    public override float BaseSpeed => 5f; // 默认 4

    public override ExplainedNumber CalculateFinalSpeed(MobileParty mobileParty, ExplainedNumber finalSpeed)
    {
        ExplainedNumber speed = base.CalculateFinalSpeed(mobileParty, finalSpeed);
        speed.AddFactor(0.1f, "{=mod}Mod speed bonus", null);
        return speed;
    }
}
```

## 参见

- [PartySpeedModel](../PartySpeedModel) — 本类的契约
- [DefaultPartySizeLimitModel](../DefaultPartySizeLimitModel) — 同桶的人数上限实现
- [CampaignGameStarter](../../campaign/CampaignGameStarter) — 模型替换的注册入口

## 导航

- ↑ [campaign-ext 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
