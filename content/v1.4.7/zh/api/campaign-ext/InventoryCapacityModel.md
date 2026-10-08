---
title: "InventoryCapacityModel"
description: "部队背包容量与物品重量的抽象计算模型，决定一支部队能携带多少物资、每件装备占多少负重。"
---
# InventoryCapacityModel

**命名空间：** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public abstract class InventoryCapacityModel : MBGameModel<InventoryCapacityModel>`
**基类：** `MBGameModel<InventoryCapacityModel>`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/ComponentInterfaces/InventoryCapacityModel.cs`（声明见第 9 行）

## 概述

InventoryCapacityModel 是部队后勤的抽象计算模型，把"一支部队能带多少东西"拆成容量、单件重量、已载重三个可覆写口径。游戏用它决定背包上限、物品占用与超重判定；Mod 整体替换这个模型，就等于重做整个游戏的负重与经济规则。

## 心智模型

把它想成部队背包的"会计公式"：`CalculateInventoryCapacity` 是收入（总容量），`GetItemEffectiveWeight` 与 `GetItemAverageWeight` 是单价（每件装备/物品占多少负重），`CalculateTotalWeightCarried` 是支出（已载重）。三个口径都返回带解释的 `ExplainedNumber`，UI 能直接显示"为什么是这个数"。它继承 `MBGameModel<InventoryCapacityModel>`，是 Campaign 级单例模型，经 `Campaign.Current.Models` 访问；替换它即替换全游戏的负重规则。

## 怎么用

替换方式：继承 `DefaultInventoryCapacityModel`（默认实现）而不是直接继承本抽象类，只覆写想改的口径，再在 Mod 的 `SubModule` 里把自定义模型挂到 `Campaign.Current.Models` 的模型注册上。

真实坑：

1. `CalculateInventoryCapacity` 的 `includeFollowers` 默认 `false`（InventoryCapacityModel.cs:12）——要算追随者容量必须显式传 `true`，否则结果不含追随者。
2. `GetItemEffectiveWeight` 的 `out TextObject description` 必须给值（InventoryCapacityModel.cs:18）——它是 UI 解释弹窗的条目来源，返回 `null` 会让说明缺一条。
3. `CalculateTotalWeightCarried` 与 `CalculateInventoryCapacity` 的 `isCurrentlyAtSea` 必须传同一个值（InventoryCapacityModel.cs:21）——海上与陆地重量规则不同，混用会得到对不上的载重与容量。
4. 本抽象类没有任何默认实现，直接继承它必须补齐全部四个方法（InventoryCapacityModel.cs:9）——只想改一个口径也要实现其余三个，所以实践中几乎总是继承 `DefaultInventoryCapacityModel`。

## 关键成员

| 成员 | 用途 |
|------|------|
| `CalculateInventoryCapacity` | 抽象方法：计算部队背包总容量，返回带解释的 `ExplainedNumber`；可叠加额外步兵、备用坐骑、驮兽，并选择是否包含追随者 InventoryCapacityModel.cs:12 |
| `GetItemAverageWeight` | 抽象方法：返回物品平均重量，用于把容量换算成"能带多少件物品" InventoryCapacityModel.cs:15 |
| `GetItemEffectiveWeight` | 抽象方法：返回某件装备在特定部队与海上状态下的实际重量，并经 `out TextObject` 输出解释文本 InventoryCapacityModel.cs:18 |
| `CalculateTotalWeightCarried` | 抽象方法：计算部队当前已携带的总重量，返回带解释的 `ExplainedNumber` InventoryCapacityModel.cs:21 |

## 真实示例

```csharp
// 自定义容量模型：继承默认实现，叠加本 Mod 的容量加成
public class MyInventoryCapacityModel : DefaultInventoryCapacityModel
{
    public override ExplainedNumber CalculateInventoryCapacity(MobileParty mobileParty, bool isCurrentlyAtSea,
        bool includeDescriptions = false, int additionalManOnFoot = 0, int additionalSpareMounts = 0,
        int additionalPackAnimals = 0, bool includeFollowers = false)
    {
        ExplainedNumber result = base.CalculateInventoryCapacity(mobileParty, isCurrentlyAtSea, includeDescriptions,
            additionalManOnFoot, additionalSpareMounts, additionalPackAnimals, includeFollowers);
        result.Add(100f, new TextObject("{=mymod_cap}MyMod 容量加成"));
        return result;
    }
}

// 在 CampaignBehavior 里查询当前部队的实际载重
float carriedWeight = Campaign.Current.Models.InventoryCapacityModel
    .CalculateTotalWeightCarried(mobileParty, isCurrentlyAtSea: false).Result;
```

## 参见

- [默认实现 DefaultInventoryCapacityModel](../DefaultInventoryCapacityModel)
- [MobileParty：容量与载重计算的作用对象](../../campaign/MobileParty)

## 导航

- ↑ [campaign-ext 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
