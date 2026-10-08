---
title: "SettlementTaxModel"
description: "规定城镇与村庄的税率、佣金，以及按治安折算的税收修正的抽象契约；替换它即可改写每日税收结算。"
---

# SettlementTaxModel

**命名空间：** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Type:** `public abstract class SettlementTaxModel : MBGameModel<SettlementTaxModel>`
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementTaxModel.cs`

## 概述

`SettlementTaxModel` 是 `CampaignSystem` 里负责「钱从定居点流进领主口袋」这一环的抽象契约。它规定城镇与村庄的税率、领主从定居点抽取的佣金比例，以及治安如何把这些佣金往下压。每当游戏推进到每日结算，城镇或村庄都会通过这个契约把当天的市场收入折算成一笔税收交给所有者，因此它是税收侧唯一被外部读取的接口面。

它自己不保存任何状态：所有数值都由实现类提供，契约只声明「有哪些参数、有哪些折算入口」。官方默认实现 `DefaultSettlementTaxModel` 给出了一套平衡性基线，mod 只要替换这一个契约，就能同时改变所有城镇与村庄的税率曲线，而不必逐个 patch 结算逻辑。

它与 `SettlementSecurityModel`、`SettlementLoyaltyModel` 构成一条联动链：治安契约决定驻军带来的治安值，本契约的 `GetTownCommissionChangeBasedOnSecurity` 把治安折进佣金，佣金再通过 `CalculateTownTax` 影响最终税收；忠诚契约则决定定居点能否维持稳定，从而间接决定税收是否会被叛乱打断。理解这条链，才能预判改一个参数会在几周后产生什么后果。

## 心智模型

把这个契约想成一张「税率参数表 + 折算曲线」：4 个抽象属性是参数表里的常数项——城镇佣金率、村庄佣金率、治安开始扣减佣金的阈值、以及治安最多能扣掉多少佣金；抽象方法则是把参数套到具体定居点上的曲线，输入是 `Town` 或 `Village`，输出是一个比例或一笔金额。

两个入口必须分开看：`CalculateTownTax` 是城镇侧入口，返回的是 `ExplainedNumber`，也就是说它不只是一个数字，还带着可以被 UI 拆解成一条条说明的加成来源；`CalculateVillageTaxFromIncome` 是村庄侧入口，输入是市场收入，返回整数税额，没有解释对象，因为它不进城镇的收支明细面板。把这两个入口混用是新手最常见的错误：城镇需要解释、村庄不需要。

`GetTownTaxRatio` 与 `GetVillageTaxRatio` 提供的是「税率」这一层的系数，通常与繁荣度、建筑加成相关；而 `GetTownCommissionChangeBasedOnSecurity` 提供的是「佣金」这一层的偏移，只有当治安低于 `SettlementCommissionDecreaseSecurityThreshold` 时才开始扣，扣的上限是 `MaximumDecreaseBasedOnSecuritySecurity`。所以治安先影响佣金、佣金再影响税收，两级折算不能合并成一个线性公式。

常见误用：以为改掉某个属性当天就生效。实际上税收是在每日结算时重算的，属性只在那一刻被读取，改完要等到下一次结算才会在数值上体现；如果同时替换了实现类，还要注意 `GameModels` 聚合是在 `Campaign` 启动时构建的，运行中替换对象并不会自动刷新所有缓存引用。

## 怎么用

### 怎么拿到它
通过 `Campaign` 的 `GameModels` 聚合取到。不要自己 new 一个实现类塞进去，聚合里已经持有一个由引擎在启动时构建的实例，直接用聚合暴露的那个引用即可。

### 典型用法
- 想让「治安差的城镇交税更少」这件事更严厉：继承本契约，把 `SettlementCommissionDecreaseSecurityThreshold` 调高、把 `MaximumDecreaseBasedOnSecuritySecurity` 调大，让治安惩罚曲线更陡。
- 想给某类城镇整体加税：重写 `GetTownTaxRatio`，在里面按城镇的繁荣度或建筑等级返回不同系数。
- 想在村庄侧做差异化：重写 `CalculateVillageTaxFromIncome`，按村庄所属文化或距离城市的远近对市场收入做调整。
- 想给城镇税收加一条可解释的加成：重写 `CalculateTownTax`，在返回的 `ExplainedNumber` 上追加一条带说明文字的加成，让玩家在收支面板里看到来源。
- 想临时做调试：继承默认实现，只覆写一个方法并打印日志，其余全部转发给 base，避免破坏平衡。

### 最容易踩的坑
- 把 `GetTownTaxRatio` 的返回值当成最终税额——它只是比例系数，真正的结算发生在 `CalculateTownTax`。
- 忘记 `ExplainedNumber` 的说明参数：`CalculateTownTax` 的 `includeDescriptions` 为 `false` 时不要指望 UI 能拆出条目。
- 在属性里做重计算：这些属性会在每次结算被读取，放昂贵逻辑会拖慢每日结算。
- 忽略阈值语义：治安高于阈值时佣金不扣，此时改 `MaximumDecreaseBasedOnSecuritySecurity` 不会有任何效果。
- 直接改聚合里的实例字段：契约是只读面，正确做法是替换整个实现类。

## 关键成员

- **SettlementTaxModel**（`SettlementTaxModel.cs:8`）— 契约声明本身：继承 `MBGameModel` 并暴露全部税率参数与折算入口，替换它等于替换整条税收曲线。
- **SettlementCommissionRateTown**（`SettlementTaxModel.cs:12`）— 城镇佣金基准比例，城镇结算时先取它作为抽成起点，再叠加治安偏移。
- **SettlementCommissionRateVillage**（`SettlementTaxModel.cs:16`）— 村庄佣金基准比例，村庄结算走这条而不是城镇那条，两者不要互相套用。
- **SettlementCommissionDecreaseSecurityThreshold**（`SettlementTaxModel.cs:20`）— 治安低于该值时才开始扣佣金的阈值，决定了「治安惩罚」的触发点。
- **MaximumDecreaseBasedOnSecuritySecurity**（`SettlementTaxModel.cs:24`）— 治安最多能扣掉的佣金上限，决定惩罚曲线的天花板。
- **GetTownTaxRatio**（`SettlementTaxModel.cs:27`）— 输入一个 `Town`，返回城镇税率系数，是城镇侧最外层的比例缩放。
- **GetVillageTaxRatio**（`SettlementTaxModel.cs:30`）— 输入一个 `Village`，返回村庄税率系数，与城镇侧分开计算。
- **GetTownCommissionChangeBasedOnSecurity**（`SettlementTaxModel.cs:33`）— 输入 `Town` 与当前佣金，按治安折算出一个佣金变化量，是把治安接进税收的桥。
- **CalculateTownTax**（`SettlementTaxModel.cs:36`）— 城镇侧主入口，返回带说明的 `ExplainedNumber`，`includeDescriptions` 控制是否生成可拆解的说明条目。
- **CalculateVillageTaxFromIncome**（`SettlementTaxModel.cs:39`）— 村庄侧主入口，输入市场收入返回整数税额，不进收支明细面板。

## 真实示例

```csharp
public class PeacefulTownTaxModel : SettlementTaxModel
{
    public override float SettlementCommissionRateTown => 0.12f;
    public override float SettlementCommissionRateVillage => 0.08f;
    public override int SettlementCommissionDecreaseSecurityThreshold => 50;
    public override int MaximumDecreaseBasedOnSecuritySecurity => 30;

    public override float GetTownTaxRatio(Town town) => 1.0f + town.Prosperity / 10000f;

    public override float GetVillageTaxRatio(Village village) => 1.0f;

    public override float GetTownCommissionChangeBasedOnSecurity(Town town, float commission)
    {
        int security = (int)town.Security;
        if (security >= SettlementCommissionDecreaseSecurityThreshold) return 0f;
        int deficit = SettlementCommissionDecreaseSecurityThreshold - security;
        return -commission * deficit / MaximumDecreaseBasedOnSecuritySecurity;
    }

    public override ExplainedNumber CalculateTownTax(Town town, bool includeDescriptions = false)
    {
        var result = new ExplainedNumber(0f, includeDescriptions);
        float ratio = GetTownTaxRatio(town);
        float commission = SettlementCommissionRateTown
            + GetTownCommissionChangeBasedOnSecurity(town, SettlementCommissionRateTown);
        result.Add(town.Prosperity * ratio * commission);
        return result;
    }

    public override int CalculateVillageTaxFromIncome(Village village, int marketIncome)
    {
        return (int)(marketIncome * GetVillageTaxRatio(village) * SettlementCommissionRateVillage);
    }
}
```

## 参见

- ↔ [DefaultSettlementTaxModel](../DefaultSettlementTaxModel) — 官方默认实现（本批，先放着）
- ↔ [SettlementSecurityModel](../SettlementSecurityModel) — 治安契约：佣金随治安折算
- ↔ [SettlementLoyaltyModel](../SettlementLoyaltyModel) — 忠诚度契约：与税收阈值联动
- ↔ [TownHelpers](../../core-extra/TownHelpers) — 城镇侧工具页

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
