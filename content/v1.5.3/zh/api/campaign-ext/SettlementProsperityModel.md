---
title: "SettlementProsperityModel"
description: "规定城镇繁荣度与村庄 hearth 的每日变化计算；mod 替换它可重写经济成长曲线与围城后的恢复节奏。"
---

# SettlementProsperityModel

**命名空间：** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Type:** `public abstract class SettlementProsperityModel : MBGameModel<SettlementProsperityModel>`
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementProsperityModel.cs`

## 概述

这个抽象模型规定城镇（Town）与村庄（Village）两项核心经济数值的每日变化量：繁荣度（Prosperity）与 hearth。它不是被围城流程直接调用，而是由定居点的每日 tick 驱动——每天游戏时间推进时，引擎对每个城镇调用 `CalculateProsperityChange`、对每个村庄调用 `CalculateHearthChange`，把返回的 `ExplainedNumber` 累加到当前数值上。繁荣度决定税收、驻军工资与公共秩序的基线，hearth 则决定村庄的成长速度与可招募兵员。相邻模型分工明确：`SettlementMilitiaModel` 管民兵数量，`DefaultSettlementLoyaltyModel` 管忠诚度，本模型只管「钱与人口」这条线。mod 替换它之后，可以整体重写经济成长曲线，例如让战争破坏更严重、让商队收益更高、或让繁荣度随忠诚度联动。

## 心智模型

这个模型是典型的「参数表 + 曲线方法」结构：它不保存任何状态（状态在 `Settlement` 自身上），只提供一组纯计算方法，输入是定居点引用，输出是 `ExplainedNumber`。`ExplainedNumber` 是引擎的累加器：默认实现把每一项修正（基础值、建筑加成、政策加成、战争破坏……）逐项 `Add` 或 `AddFactor` 进去，每一项都可以带一段文字说明，最终这些说明会拼成游戏里鼠标悬停看到的「繁荣度变化 +1.2（市场 +0.5，战争 -0.3）」提示。理解这一点是正确使用它的关键：你不需要自己算总和，只需要在基线结果上叠加自己的修正项。什么时候该替换它：当你想改变经济数值随时间演化的规律时——比如让围城后的恢复更慢、让村庄 hearth 受驻军数量影响、让繁荣度有上限衰减。常见误用有三：一是忘记调用 `base` 方法导致基线经济完全失效；二是把 `includeDescriptions` 当开关乱传，导致悬停提示里出现或缺失自己那一行；三是把本模型当成状态容器往里塞字段——它是无状态的，任何 mod 自有状态都应存在自己子类的字段里。

## 怎么用

### 怎么拿到它

通过 Campaign 的 GameModels 聚合取到：从当前 Campaign 实例的 GameModels 集合中按类型取出该模型实例，取用方式与其他 GameModel 一致。

### 典型用法

- 想让商队对城镇繁荣度有更大贡献：重写 `CalculateProsperityChange`，在基线结果上按商队数量追加修正。
- 想让围城破坏经济：重写 `CalculateProsperityChange`，检测围城状态并叠加一个大的负修正。
- 想让村庄成长更快：重写 `CalculateHearthChange`，乘一个大于 1 的因子。
- 想在自己的 UI 里显示繁荣度预测：直接调用两个方法，把 `ExplainedNumber` 的数值与说明文字读出来展示。

### 最容易踩的坑

- 忘记调用 `base.CalculateProsperityChange`，导致默认经济曲线完全失效，城镇经济瞬间停滞。
- 给 `CalculateHearthChange` 传了 `Town` 而不是 `Village`——方法签名只接受村庄，用基类引用间接调用时尤其容易混。
- 在 `includeDescriptions: false` 时仍往 `ExplainedNumber` 里塞说明文字，导致悬停提示里出现本不该显示的行。
- 把 mod 自有状态写进模型字段，却忘了模型实例由引擎持有、生命周期与 Campaign 绑定，换档后状态残留。

## 关键成员

- **类声明**（`SettlementProsperityModel.cs:8`）— 抽象类声明，继承 `MBGameModel<SettlementProsperityModel>`，是 mod 替换的入口；子类必须实现下面两个抽象方法。
- **CalculateProsperityChange**（`SettlementProsperityModel.cs:11`）— 计算单个城镇每日繁荣度变化；由每日 tick 调用，`includeDescriptions` 控制是否生成悬停说明文字。
- **CalculateHearthChange**（`SettlementProsperityModel.cs:14`）— 计算单个村庄每日 hearth 变化；同样由每日 tick 驱动，只接受 `Village` 参数。

## 真实示例

```csharp
public class MyProsperityModel : SettlementProsperityModel
{
    public override ExplainedNumber CalculateProsperityChange(Town fortification, bool includeDescriptions = false)
    {
        ExplainedNumber result = base.CalculateProsperityChange(fortification, includeDescriptions);
        if (fortification.IsTown)
        {
            result.Add(2f, "MyMod: 市场繁荣加成");
        }
        return result;
    }

    public override ExplainedNumber CalculateHearthChange(Village village, bool includeDescriptions = false)
    {
        ExplainedNumber result = base.CalculateHearthChange(village, includeDescriptions);
        result.AddFactor(1.1f, "MyMod: hearth 增长系数");
        return result;
    }
}
```

## 参见

- [DefaultSettlementProsperityModel](../DefaultSettlementProsperityModel) — 默认实现，逐项累加繁荣度与 hearth 修正的参考
- [SettlementMilitiaModel](../SettlementMilitiaModel) — 同层的民兵数量模型，与经济模型分工相邻
- [TownHelpers](../../core-extra/TownHelpers) — 城镇相关辅助方法

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
