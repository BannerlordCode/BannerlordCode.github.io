---
title: "PartyBaseHelper"
description: "部队（PartyBase / MobileParty）的静态工具箱：名册排序、规模文本、队长查找、名册打印、视觉领袖、速度限制与特性查询，服务于部队面板、战前结算与 AI 决策前的信息准备。"
---

# PartyBaseHelper

**命名空间：** `Helpers`
**Type:** `public static class PartyBaseHelper`
**Source:** `TaleWorlds.CampaignSystem/Helpers/PartyBaseHelper.cs`

## 概述

`PartyBaseHelper` 把「部队」这件事里所有围绕 `TroopRoster` / `ItemRoster` 名册的查询与少量重排动作收进了一个静态类。它覆盖四类职责：一是**名册排序**——`SortRoster` 把最高 Tier 的兵种换到名册首位，作为视觉与逻辑上的「领队位」；二是**规模文本**——把部队人数、伤兵数、舰船数翻译成可展示的字符串；三是**名册打印**——把名册内容输出到日志或调试面板，含汇总与分类两种粒度；四是**杂项查询**——队长查找、视觉领袖、速度上限、部队是否拥有某特性。

对 mod 开发者来说，它最常出现的场景是：写一个部队面板或战前结算逻辑时，需要「这支部队现在多少人」「领队是谁」「名册里都有什么」「这部队受不受某特性加成」这类问题。这些问题的答案分散在 `PartyBase`、`TroopRoster`、`CharacterObject`、`Hero` 多个对象上，而这个 helper 把它们收敛成一行调用。

## 心智模型

理解这个类的关键是抓住「名册是核心、排序有语义、查询有回退」：

- **名册是核心。** `TroopRoster` 是 `PartyBase` 上按兵种聚合的列表（每项是 `TroopRosterElement`：`CharacterObject` + 数量），`ItemRoster` 同理。本类几乎所有方法都是在回答「名册里有什么、有多少、谁打头」。
- **排序有语义。** `SortRoster` 不是普通排序——它把 Tier 最高的兵种换到索引 0，让「领队位」始终站着部队里最强的单位。这个位置会被 `GetVisualPartyLeader` 等视觉逻辑读取，所以排序结果直接影响渲染。
- **查询有回退。** `HasFeat` 是典型的回退链：先查队长英雄的文化，再查部队自身文化，再查拥有者文化，最后查驻地聚落文化。写新查询时照抄这个「从具体到宽泛」的回退顺序即可。
- **它是规则集合，不是数据容器。** 类是 static 的，不保存任何状态。真正的状态在 `PartyBase`、`TroopRoster`、`Hero` 上，helper 只负责「按规则读、按规则排」。

一句话：把 `PartyBaseHelper` 想成「部队名册的查询与排版工具」——你给它一个 `PartyBase`，它给你名册的答案，仅此而已。

## 怎么用

### 怎么拿到它

静态类，没有实例、没有单例、没有初始化步骤，直接 `PartyBaseHelper.方法名(...)` 调用。不需要注册到 `CampaignGameStarter`，里面也没有可替换的策略——想换算法请改对应的 `GameModel`（如部队规模模型），而不是改这个类。

### 典型用法

- **部队面板刷新**：`GetPartySizeText` 给出「当前人数 / 上限」的展示文本，`GetVisualPartyLeader` 给出要渲染的领队模型。
- **战前结算与 AI 决策**：`FindPartySizeNormalLimit` 判断部队是否超编，`HasFeat` 检查部队是否受某特性加成，`GetSpeedLimitation` 决定移动速度上限。
- **调试与日志**：`PrintRosterContents`、`PrintSummarisedItemRoster`、`PrintRegularTroopCategories` 把名册内容输出到日志，是排查「部队构成不对」类问题的第一手工具。
- **名册重排**：`SortRoster` 在部队编成变化后调用，保证领队位正确。

### 调用前要准备什么

- 确认 `PartyBase` 有效：本类所有方法都直接解引用 `party`，传 null 会抛异常。
- 分清两个 `GetPartySizeText` 重载：一个收 `PartyBase`（读名册），三个收 `int`（纯数值→文本）。用错重载会得到「按错误数据源算」的答案。
- 打印类方法有性能开销，不要在每帧路径里调。

### 调用之后会发生什么

- 查询类方法只读，不改任何状态。
- `SortRoster` 会改名册顺序（把最高 Tier 换到首位），调用后依赖索引 0 的逻辑会读到新的领队位。
- `HasFeat` 在部队没有任何文化来源时返回 `false`，不会抛异常——这是设计而非缺陷。

### 最容易踩的坑

1. **`SortRoster` 只换首位，不整体排序。** 它不保证名册其余部分有序，只保证索引 0 是最高 Tier。
2. **`GetPartySizeText` 的三参重载里 `isCountingWounded` 决定伤兵是否计入。** 传错会让面板数字与实际战力不符。
3. **`GetVisualPartyLeader` 依赖 `SortRoster` 的结果。** 没先排序就调，读到的领队位可能是错的。
4. **`HasFeat` 的回退链有优先级。** 队长英雄的文化会盖过部队自身文化，写新查询时要不要这层覆盖取决于业务语义。

## 关键成员

- **SortRoster**（`PartyBaseHelper.cs:18`）— 把名册中 Tier 最高的兵种换到索引 0，作为视觉与逻辑上的「领队位」，供后续渲染与查询读取。
- **GetPartySizeText**（`PartyBaseHelper.cs:39`）— 从 `PartyBase` 读名册，返回「当前人数 / 上限」的展示文本，是部队面板的主力入口。
- **GetPartySizeText**（`PartyBaseHelper.cs:56`）— 三参重载：收当前数、上限与是否计伤兵，把纯数值翻译成文本，供不持有 `PartyBase` 的调用方使用。
- **GetShipSizeText**（`PartyBaseHelper.cs:75`）— 把舰船数量翻译成展示文本，用于海军部队的面板。
- **FindPartySizeNormalLimit**（`PartyBaseHelper.cs:85`）— 计算部队规模正常上限，用于判断是否超编。
- **GetCaptainOfTroop**（`PartyBaseHelper.cs:106`）— 在名册中查找指定兵种的队长角色，返回 `CharacterObject`。
- **PrintRosterContents**（`PartyBaseHelper.cs:119`）— 把部队名册完整输出到日志，含每个兵种的数量与角色信息。
- **PrintSummarisedItemRoster**（`PartyBaseHelper.cs:148`）— 把物品名册汇总输出到日志，粒度比完整名册粗。
- **PrintRegularTroopCategories**（`PartyBaseHelper.cs:292`）— 按常规兵种分类输出名册，用于快速查看部队构成。
- **GetVisualPartyLeader**（`PartyBaseHelper.cs:354`）— 取名册首位的角色作为视觉领袖，依赖 `SortRoster` 先执行。
- **GetSpeedLimitation**（`PartyBaseHelper.cs:373`）— 计算部队移动速度上限，综合地形、编成与模型规则。
- **HasFeat**（`PartyBaseHelper.cs:389`）— 按「队长英雄文化 → 部队文化 → 拥有者文化 → 驻地聚落文化」的回退链判断部队是否拥有某特性。

## 真实示例

```csharp
// PartyBaseHelper.cs:18 —— 把最高 Tier 的兵种换到名册首位，作为领队位
public static void SortRoster(PartyBase party)
{
    if (party == null)
    {
        return;
    }
    TroopRoster troopRoster = party.TroopRoster;
    if (troopRoster == null || troopRoster.Count == 0)
    {
        return;
    }
    int num = 0;
    for (int i = 0; i < troopRoster.Count; i++)
    {
        if (troopRoster[i].Character.Tier > troopRoster[num].Character.Tier)
        {
            num = i;
        }
    }
    if (num != 0)
    {
        TroopRosterElement value = troopRoster[num];
        troopRoster[num] = troopRoster[0];
        troopRoster[0] = value;
    }
}
```

```csharp
// PartyBaseHelper.cs:389 —— 回退链查询：从具体到宽泛，任一层命中即返回
public static bool HasFeat(PartyBase party, FeatObject feat)
{
    if (party == null)
    {
        return false;
    }
    if (party.LeaderHero != null)
    {
        return party.LeaderHero.Culture.HasFeat(feat);
    }
    if (party.Culture != null)
    {
        return party.Culture.HasFeat(feat);
    }
    if (party.Owner != null)
    {
        return party.Owner.Culture.HasFeat(feat);
    }
    return party.Settlement != null && party.Settlement.Culture.HasFeat(feat);
}
```

一个把排序与查询串起来的调用片段：

```csharp
// 战前准备：先排序保证领队位正确，再查规模、查特性、查速度上限
public static void PrepareForBattle(PartyBase party)
{
    PartyBaseHelper.SortRoster(party);  // 领队位 = 最高 Tier，视觉与逻辑都读它

    string sizeText = PartyBaseHelper.GetPartySizeText(party);     // 面板文本
    int limit = PartyBaseHelper.FindPartySizeNormalLimit(party);   // 超编判断
    bool hasFeat = PartyBaseHelper.HasFeat(party, SomeFeat);       // 特性加成
    float speedLimit = PartyBaseHelper.GetSpeedLimitation(party);  // 移动上限

    CharacterObject leader = PartyBaseHelper.GetVisualPartyLeader(party);
    if (leader != null)
    {
        // 用领队做战前渲染或 AI 决策
    }
}
```

## 参见

- ↔ [AiHelper](../AiHelper) —— 部队 AI 行为，本类提供 AI 决策前要读的名册与特性信息
- ↔ [DistanceHelper](../DistanceHelper) —— 部队移动与距离计算，与本类的速度限制查询互补
- ↔ [FeatHelper](../FeatHelper) —— 特性（Feat）维度的另一组静态工具，本类的 `HasFeat` 是特性在部队上的投影
- ↔ [GameModels](../../campaign/GameModels) —— 部队规模、速度等规则的真源模型，本类的方法只是这些模型的调用入口

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
