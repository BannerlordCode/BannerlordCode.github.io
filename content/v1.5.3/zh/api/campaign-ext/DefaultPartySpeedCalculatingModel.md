---
title: "DefaultPartySpeedCalculatingModel"
description: "官方默认的部队速度实现，基础速度分段算，最终速度再叠加地形、货物、伤员、战俘、畜群、士气与 perk 修正"
---

# DefaultPartySpeedCalculatingModel

**命名空间：** `TaleWorlds.CampaignSystem.GameComponents`
**Type:** `public class DefaultPartySpeedCalculatingModel : PartySpeedModel`
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartySpeedCalculatingModel.cs`

## 概述

`DefaultPartySpeedCalculatingModel` 是官方默认的部队速度实现，也是地图行军每日推进时实际调用的那个模型。它继承自 `PartySpeedModel`，把「部队一天能走多远」拆成两段计算：`CalculateBaseSpeed`(168) 先按兵种构成、人数规模、货物、伤员、战俘、畜群与士气给出一个带解释的基础速度；`CalculateFinalSpeed`(206) 再在这个已经算好的 `ExplainedNumber` 之上，叠加当前导航面的地形（森林、涉水、沙漠、平原）、天气（雪）、昼夜、侦察 perk 与难度选项等修正。两段都以 `ExplainedNumber` 为载体，每一项修正都附带一条本地化说明文本，供 UI 向玩家展示「速度为什么是这个数」。类内 474–519 行的 16 个常量集中定义了所有修正系数，改这些常量就等于改整个游戏的行军节奏。

## 心智模型

打开 168–301 行与 302–404 行读完后，这个类的结构其实非常清晰，可以概括为「两段式 + 一组纯函数修正器」。

第一段是基础速度。`CalculateBaseSpeed`(168) 本身不做任何计算，它只是把调用原样委托给私有的 `CalculateLandBaseSpeed`(38)。后者是真正的劳动密集型方法：它先通过 `AddCargoStats`(180) 把部队（以及所有 `AttachedParties` 附属部队）的可用坐骑数、总载重、畜群规模累加起来，再调用 `CalculateBaseSpeedForParty`(191) 得到基数——公式是 `BaseSpeed * (200 / (200 + 总人数)) ^ 0.4`，即人越多越慢，但衰减很平缓。在这个基数之上，它按顺序叠乘一系列修正：骑兵比例（`GetCavalryRatioModifier` 357，正向）、骑马的步兵比例（`GetMountedFootmenRatioModifier` 367，正向）、货物（`GetCargoEffect` 302，负向）、超载（`GetOverburdenedEffect` 197，负向且幅度大）、超编（`GetOverPartySizeEffect` 308，负向）、畜群（`GetHerdingModifier` 322，负向）、伤员（`GetWoundedModifier` 337，负向但有 1/4 阈值）、战俘（`GetSizeModifierPrisoner` 399，负向）、士气（高于 70 给 `HighMoraleEffect` 0.05 的线性加成，低于 30 给 `LowMoraleEffect` -0.1 的线性惩罚）、商队 +0.1、溃散 -0.4，最后用 `LimitMin(MimumSpeed)` 把结果钳到 1。

第二段是最终速度。`CalculateFinalSpeed`(206) 接收一个**已经算好的** `ExplainedNumber finalSpeed`——它不关心这个数是怎么来的，只负责继续往上叠。它先处理自定义部队的特例（`IsCustomParty` 且 `BaseSpeed` 非零时直接整体替换），然后按当前导航面的 `TerrainType` 分支：森林 -0.2（侦察 perk `ForestKin` 可减免，巴塔尼亚文化 feat 再加成）、涉水/河流/桥/渡口 -0.3、沙漠 -0.0.1（阿塞莱 feat 免疫）、平原/草原给 `Pathfinder` perk。之后是天气（雪/暴风雪 -0.125）、昼夜（夜间 -0.25，`NightRunner`/`DayTraveler` perk 对应加成）、侦察英雄的 epic perk `UncannyInsight`、士气高于 75 时的 `ForcedMarch`、追击敌人时的 `Tracker`、军团 `CallToArms`，以及选项里的全局加速 +0.25。同样以 `LimitMin` 收尾。

各修正函数都是无状态的纯函数，输入几个整数/浮点数，输出一个系数，方向只有正（骑兵、骑马步兵、高士气、商队）和负（货物、超载、伤员、战俘、畜群、低士气、溃散、地形、夜间、雪）两类。

常见误用：以为 `BaseSpeed` 属性是主要变量。其实它只是 4.6 的固定基数，真正决定速度走向的是兵种比例与 474–519 的 16 个常量；另一个误用是以为负修正能让部队停下——`MinimumSpeed` = 1 的下限保证了任何部队每天至少移动 1 格。

## 怎么用

### 怎么拿到它

通过 Campaign 的 `GameModels` 聚合取到：`Campaign.Current.Models.PartySpeedModel` 返回当前注册的速度模型实例，默认注册的就是本类的实例。mod 若要自定义速度，可以用自己的实现替换这个聚合槽位，或包一层委托。

### 典型用法

1. **读当前速度**：先 `CalculateBaseSpeed(party, true)` 拿基础速度，再 `CalculateFinalSpeed(party, baseSpeed)` 拿最终速度，读 `ResultNumber`。
2. **展示速度构成**：把 `includeDescriptions` 传 `true`，遍历 `ExplainedNumber.GetLines()` 把每一项修正的本地化文本显示给玩家。
3. **估算到达时间**：用最终速度除以地图日推进量，比较两支部队谁先到达目标点。
4. **mod 自定义节奏**：继承 `PartySpeedModel` 重写 `CalculateFinalSpeed`，在官方结果上再乘自己的系数。
5. **调试行军异常**：把 `BaseSpeed`、`MinimumSpeed` 与 474–519 的常量对照，定位是哪一项修正把速度拉低。

### 最容易踩的坑

1. **把 `BaseSpeed` 属性当最终速度**：它只是 4.6 的固定基数，最终速度要经过 `CalculateFinalSpeed`(206) 叠加地形/天气/夜间修正（474–486 的常量）后才作数。
2. **以为负修正能让部队停下**：`MinimumSpeed`(29) = 1，`LimitMin` 会把所有修正后的速度钳到 1，极端负修正也不会让部队完全不动。
3. **忽略伤员的 1/4 阈值**：`GetWoundedModifier`(337) 在伤员数不超过总人数 1/4 时直接返回 0，少量伤员不减速，只有超过阈值才按 -0.05/人 线性惩罚（上限 -0.8）。
4. **畜群修正按「超出人数的畜数」算**：`GetHerdingModifier`(322) 先执行 `herdSize -= totalMenCount`，只有超出人数的畜才产生 -0.3/只 的惩罚（上限 -0.8），且村民部队完全免疫。
5. **自定义部队会绕过基础速度**：`CalculateFinalSpeed`(206) 开头对 `IsCustomParty` 且 `BaseSpeed` 非零的部队直接用组件里的 `BaseSpeed` 整体替换 `finalSpeed`，之前算的一切都作废。
6. **`GetLines()` 依赖 `includeDescriptions: true`**：`ExplainedNumber.GetLines()` 只在构造时传了 `includeDescriptions: true` 才返回修正明细；传 `false` 时 `_explainer` 为 null，返回空列表，遍历什么都不输出。

## 关键成员

- **BaseSpeed**（`DefaultPartySpeedCalculatingModel.cs:19`）— 固定返回 4.6 的基数属性，是 `CalculateBaseSpeedForParty`(191) 公式的乘数；改它等于整体平移所有部队的速度。
- **MinimumSpeed**（`DefaultPartySpeedCalculatingModel.cs:29`）— 固定返回 1 的下限属性，两段计算末尾都靠它钳位，保证部队每天至少移动 1 格。
- **CalculateLandBaseSpeed**（`DefaultPartySpeedCalculatingModel.cs:38`）— 私有核心方法，按兵种构成、附属部队、货物、伤员、战俘、畜群、士气分段累加修正，产出带解释的 `ExplainedNumber`。
- **CalculateBaseSpeed**（`DefaultPartySpeedCalculatingModel.cs:168`）— 公开入口，把调用原样委托给 `CalculateLandBaseSpeed`(38)，是 mod 与 UI 拿基础速度的正规途径。
- **GetSkeletalCrewCount**（`DefaultPartySpeedCalculatingModel.cs:174`）— 始终返回 0，因为陆战部队不需要 skeletal crew；海战模型才用这个钩子。
- **AddCargoStats**（`DefaultPartySpeedCalculatingModel.cs:180`）— 把一支部队的可用坐骑数、总载重、畜群规模累加到 ref 参数上，供主部队与附属部队循环调用。
- **CalculateBaseSpeedForParty**（`DefaultPartySpeedCalculatingModel.cs:191`）— 纯函数，公式 `BaseSpeed * (200/(200+人数))^0.4`，人数越多越慢但衰减平缓。
- **GetOverburdenedEffect**（`DefaultPartySpeedCalculatingModel.cs:197`）— 超载修正，-0.4 乘以超出载重与容量之比，并叠加 `Energetic`/`Unburdened` perk 的减免。
- **CalculateFinalSpeed**（`DefaultPartySpeedCalculatingModel.cs:206`）— 公开入口，接收已算好的 `ExplainedNumber`，在其上叠地形、天气、夜间、侦察 perk、难度选项等修正。
- **GetCargoEffect**（`DefaultPartySpeedCalculatingModel.cs:302`）— 货物修正，-0.02 乘以载重与容量之比，只对实际携带的重量生效。
- **GetOverPartySizeEffect**（`DefaultPartySpeedCalculatingModel.cs:308`）— 超编修正，`1/(人数/上限) - 1`，超编越多惩罚越重；逃兵 clan 只受一半惩罚。
- **GetOverPrisonerSizeEffect**（`DefaultPartySpeedCalculatingModel.cs:314`）— 战俘超编修正，`1/(战俘/上限) - 1`，仅非商队部队且超编时触发。
- **GetHerdingModifier**（`DefaultPartySpeedCalculatingModel.cs:322`）— 畜群修正，按超出人数的畜数给 -0.3/只（上限 -0.8），村民部队免疫。
- **GetWoundedModifier**（`DefaultPartySpeedCalculatingModel.cs:337`）— 伤员修正，1/4 阈值内为 0，超过后按 -0.05/人 线性惩罚（上限 -0.8），并叠加 `Sledges` perk。
- **GetCavalryRatioModifier**（`DefaultPartySpeedCalculatingModel.cs:357`）— 骑兵比例修正，0.3 乘以骑兵占比，是速度的主要正向来源。
- **GetMountedFootmenRatioModifier**（`DefaultPartySpeedCalculatingModel.cs:367`）— 骑马步兵比例修正，0.15 乘以骑马步兵占比，正向但弱于骑兵。
- **GetFootmenPerkBonus**（`DefaultPartySpeedCalculatingModel.cs:377`）— 为步兵比例叠加 `Athletics.Strong` perk 的次级加成，是纯步兵部队的速度补偿。
- **GetSizeModifierWounded**（`DefaultPartySpeedCalculatingModel.cs:393`）— 伤员规模因子，`((10+人数)/(10+人数-伤员))^0.33`，把伤员对编制完整性的影响换算成系数。
- **GetSizeModifierPrisoner**（`DefaultPartySpeedCalculatingModel.cs:399`）— 战俘规模因子，`((10+人数+战俘)/(10+人数))^0.33`，战俘拖慢编制的方式与伤员对称。
- **MovingAtForestEffect**（`DefaultPartySpeedCalculatingModel.cs:474`）— 常量 -0.2，森林地形的基础惩罚；实际代码里森林分支直接内联了 -0.2f，此常量主要作语义参照。

## 真实示例

```csharp
// 通过 GameModels 聚合拿到官方默认速度模型
PartySpeedModel speedModel = Campaign.Current.Models.PartySpeedModel;
MobileParty party = MobileParty.MainParty;

// 第一段：基础速度（兵种构成 + 货物/伤员/士气等修正）
ExplainedNumber baseSpeed = speedModel.CalculateBaseSpeed(party, true);

// 第二段：在基础速度上叠加地形、天气、夜间、侦察 perk
ExplainedNumber finalSpeed = speedModel.CalculateFinalSpeed(party, baseSpeed);
float speed = finalSpeed.ResultNumber;

// 把每一项修正的说明取出来，做速度构成提示
foreach (var line in finalSpeed.GetLines())
    InformationManager.DisplayMessage(new InformationMessage($"{line.name}: {line.number:0.##}"));
```

## 参见

- ↔ [PartySpeedModel](../PartySpeedModel) — 它实现的契约（本批，先放着）
- ↔ [PartyMoraleModel](../PartyMoraleModel) — 士气模型：高低士气进最终速度
- ↔ [DefaultPartyMoraleModel](../DefaultPartyMoraleModel) — 士气的默认实现
- ↔ [MobilePartyHelper](../../core-extra/MobilePartyHelper) — 部队侧工具页

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
