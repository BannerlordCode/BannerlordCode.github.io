---
title: "DefaultInventoryCapacityModel"
description: "部队背包容量与负重的默认计算模型：按士兵、备用坐骑与驮兽汇总容量，逐件称重累计实际负重。"
---
# DefaultInventoryCapacityModel

**命名空间：** `TaleWorlds.CampaignSystem.GameComponents`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public class DefaultInventoryCapacityModel : InventoryCapacityModel`
**基类：** `InventoryCapacityModel`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/GameComponents/DefaultInventoryCapacityModel.cs`（声明见第 12 行）

## 概述

`DefaultInventoryCapacityModel` 是 `InventoryCapacityModel` 的默认实现，负责回答关于部队（`MobileParty`）背包的两个问题：最多能带多少、现在实际带了多少。容量由基础值、士兵数、备用坐骑数与驮兽数按固定系数汇总，并可被 `DefaultPerks` 里的 perk 按系数放大；重量则遍历 `ItemRoster` 逐件累计，马匹类装备不计重。

## 心智模型

把这个类看成部队背包的「会计」。`CalculateInventoryCapacity` 算「容量上限」：基础 10，每名士兵 20、每匹备用坐骑 20、每头驮兽 100，perk 按 `AddFactor` 放大对应分项，最后 `LimitMin(10f)` 保底。`CalculateTotalWeightCarried` 算「实际负重」：遍历 `ItemRoster`，用 `GetItemEffectiveWeight` 逐件称重（马匹计 0）后乘以 `Amount` 累加。两者都返回 `ExplainedNumber`，`includeDescriptions` 为 true 时附带本地化明细，可直接显示在 UI 上。

## 怎么用

游戏通过 `Campaign.Current.Models.InventoryCapacityModel` 取得当前生效的模型实例（DefaultInventoryCapacityModel.cs:89），默认就是这个类。要替换它的行为，继承 `InventoryCapacityModel` 并覆盖相应方法，再让 Campaign 的模型系统返回你的子类；本类的四个 override 方法就是全部可替换的扩展点。

真实坑：

1. **马匹不计重量**：`GetItemEffectiveWeight` 对 `HasHorseComponent` 的装备直接返回 0f（DefaultInventoryCapacityModel.cs:23），自定义模型若漏掉这匹「免费的马」，负重会凭空膨胀。
2. **海上容量骤降**：备用坐骑与驮兽的容量只在 `!isCurrentlyAtSea` 时计入（DefaultInventoryCapacityModel.cs:59），跨海航行时队伍容量会明显缩水，自定义模型忽略这个分支会导致海上负重判断失真。
3. **三个 additional\* 参数是摆设**：`CalculateInventoryCapacity` 声明了 `additionalTroops`、`additionalSpareMounts`、`additionalPackAnimals`（DefaultInventoryCapacityModel.cs:33），但方法体（DefaultInventoryCapacityModel.cs:35 起）从未读取它们——传值不会生效，别指望用它们做临时加成。
4. **换模型会连带改变负重统计**：`CalculateTotalWeightCarried` 内部通过 `Campaign.Current.Models.InventoryCapacityModel` 取模型（DefaultInventoryCapacityModel.cs:89），所以替换后 `GetItemEffectiveWeight` 的语义必须与容量公式保持一致，否则「容量」与「重量」两套数字会互相矛盾。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `GetItemAverageWeight()` | 返回固定值 10，作为未知物品平均重量的兜底估计 | DefaultInventoryCapacityModel.cs:15 |
| `GetItemEffectiveWeight(...)` | 马匹类装备计 0 重，其余按 `GetEquipmentElementWeight()` 计重，并输出对应本地化标签 | DefaultInventoryCapacityModel.cs:21 |
| `CalculateInventoryCapacity(...)` | 汇总基础值、士兵、备用坐骑、驮兽容量，应用 perk 系数，`LimitMin(10f)` 保底 | DefaultInventoryCapacityModel.cs:33 |
| `CalculateTotalWeightCarried(...)` | 遍历 `ItemRoster` 逐件称重并累加，得到实际携带总重量 | DefaultInventoryCapacityModel.cs:86 |
| `_itemAverageWeight` | 常量 10，与 `GetItemAverageWeight()` 的返回值对应 | DefaultInventoryCapacityModel.cs:100 |
| `TroopsFactor` / `SpareMountsFactor` / `PackAnimalsFactor` | 士兵/备用坐骑/驮兽的容量系数（2/2/10），方法体以同等字面量参与计算 | DefaultInventoryCapacityModel.cs:103、DefaultInventoryCapacityModel.cs:106、DefaultInventoryCapacityModel.cs:109 |
| `_textBase` / `_textTroops` / `_textSpareMounts` / `_textPackAnimals` | `ExplainedNumber` 各分项使用的本地化标签 | DefaultInventoryCapacityModel.cs:115、DefaultInventoryCapacityModel.cs:112、DefaultInventoryCapacityModel.cs:118、DefaultInventoryCapacityModel.cs:121 |
| `_textItems` | 普通物品与负重总计的本地化标签 | DefaultInventoryCapacityModel.cs:130 |
| `_textMountsAndPackAnimals` | 马匹类装备称重时输出的本地化标签 | DefaultInventoryCapacityModel.cs:124 |
| `_textLiveStocksAnimals` | 已声明但当前方法体未使用的本地化标签 | DefaultInventoryCapacityModel.cs:127 |

## 真实示例

```csharp
// 取当前生效的容量模型（默认即 DefaultInventoryCapacityModel 的实例）
InventoryCapacityModel model = Campaign.Current.Models.InventoryCapacityModel;

// 计算队伍的背包容量上限，includeDescriptions: true 可拿到带本地化标签的明细
ExplainedNumber capacity = model.CalculateInventoryCapacity(mobileParty, false, true);

// 计算该队伍当前实际携带的总重量
ExplainedNumber carriedWeight = model.CalculateTotalWeightCarried(mobileParty, false, true);
```

## 参见

- [InventoryCapacityModel](../InventoryCapacityModel) — 基类，本类实现的容量模型契约
- [MobileParty](../../campaign/MobileParty) — 容量与负重计算所作用的队伍类型

## 导航
- ↑ [campaign-ext 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
