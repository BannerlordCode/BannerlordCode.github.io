---
title: "CaravanHelper"
description: "按文化与陆路/海路需求，在商队队伍模板池里随机抽出一个合适模板的静态入口。"
---

# CaravanHelper

**Namespace:** Helpers
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class CaravanHelper`
**Base:** 无（静态类）
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/Helpers/CaravanHelper.cs`

## 概述

`CaravanHelper` 只做一件事：给定一个文化（`CultureObject`），在它的商队队伍模板池里挑出一个符合「陆路 / 海路」要求的 `PartyTemplateObject`。它不生成队伍、不管商队数量、不碰金钱，也不决定商队走哪条路线——那些属于 `MobileParty` 与商队行为层的职责。整个类只有两个方法，其中只有一个是对外的。

对 mod 开发者来说，这个类通常出现在「我要给某个文化补一条商队模板」或者「我要在生成商队时换掉默认模板」这两类需求里：你关心的其实是模板池的筛选规则，而不是这个类本身。

## 心智模型

要理解它，先要接受一个反直觉的事实：**「陆路还是海路」在这个类里没有显式字段，是用 `ShipHulls` 的数量反推的。**

- **模板池挂在文化上。** `culture.CaravanPartyTemplates` 是普通商队池，`culture.EliteCaravanPartyTemplates` 是精英商队池，由 `isElite` 参数二选一。两个池子结构一样，筛选逻辑也共用同一个谓词。
- **筛选判据是船体数量。** `IsPartyTemplateSuitable` 的规则只有两条：要求海路（`isLand == false`）时必须 `template.ShipHulls.Count > 0`；要求陆路（`isLand == true`）时必须 `template.ShipHulls.Count == 0`。也就是说，一个模板有没有船体，直接决定了它被归为海路还是陆路。如果某个文化给所有模板都配了船体，那这个文化就永远抽不到陆路商队。
- **筛选与随机是一步完成的。** 内部用 `GetRandomElementWithPredicate` 把「过滤」和「随机取一个」合并成一次调用，而不是先筛出列表再随机。这意味着没有中间列表可供检查，也意味着你无法知道「本来有几个候选」。
- **它不做任何空值保护。** 如果该文化下一个候选都没通过筛选，`GetRandomElementWithPredicate` 返回的是 `default(PartyTemplateObject)`，也就是 `null`。源码从头到尾没有判空，也没有断言。所以**判空的责任完全在调用方**。
- **它无状态、不可替换。** 没有单例、没有策略对象、没有可注入的模型。想改筛选规则，只能改文化数据里的模板（给模板增删 `ShipHulls`），而不是覆写这个类。

一句话：这是「文化模板池 → 一个合适模板」的纯函数，输入不合法时它会安静地给你 `null`，而不是抛异常。

## 怎么用

### 怎么拿到它

静态类，无实例、无初始化，直接 `CaravanHelper.GetRandomCaravanTemplate(...)` 调用。它不需要注册到 `CampaignGameStarter`，因为它内部没有任何可替换的策略。你真正需要准备的是那个 `CultureObject`：它一般来自聚落、家族或角色所属的文化，而不是凭空构造。

### 典型用法

最常见的路径是「先决定要给谁配商队，再决定普通还是精英，最后决定走陆路还是海路」，然后把这个三元组丢给 `GetRandomCaravanTemplate`，拿到模板后交给队伍生成逻辑。由于返回值可能为 `null`，标准写法是先判空、再决定是降级到另一个文化还是干脆跳过这次生成。

如果你在写自己的生成逻辑，建议把 `wantSea` 这类业务语义包装一层，在调用点把「海路」翻译成 `isLand = false`，而不是让 `!isLand` 这种取反散落在各处。

### 最容易踩的坑

1. **返回值可能为 `null`，而且没有日志。** 这是最容易出事的一条：文化里所有模板都被筛掉时，你拿到的是 `null`，如果直接传给队伍生成代码，报错点会离这里很远。
2. **`isLand` 是反的直觉参数。** 要海路模板时传 `isLand: false`。参数名叫「是陆地」，但业务上你可能想的是「是不是海上」。
3. **判据是 `ShipHulls`，不是任何显式的陆/海标记。** 你以为改了模板的某个属性就能影响结果，实际上只有船体数量会被读。
4. **`isElite` 选的是两个完全独立的池子。** 精英池空了不会自动回退到普通池，结果是 `null`，而不是「退而求其次」。
5. **`IsPartyTemplateSuitable` 是私有的，不要试图复用它。** 想在自己的代码里做同样的判断，只能照着 `ShipHulls.Count` 的规则重写一遍。

## 关键成员

- `GetRandomCaravanTemplate(CultureObject culture, bool isElite, bool isLand)` —— 唯一的对外入口：按 `isElite` 选定普通或精英模板池，再用陆/海要求过滤并随机取一个；候选全部不合格时返回 `null`，调用方必须自己判空。
- `IsPartyTemplateSuitable(PartyTemplateObject template, bool isLand)` —— **私有，不对外**；判定单个模板是否符合行进方式要求，规则是「海路要有船体、陆路不能有船体」，全部依据 `template.ShipHulls.Count`。

## 真实示例

```csharp
// 抽模板时必须自己判空：文化里一个合适候选都没有时返回 null
public static PartyTemplateObject PickTemplate(CultureObject culture, bool wantElite, bool wantSea)
{
    if (Campaign.Current == null)
    {
        return null; // 战役还没建立，模板池也还没准备好
    }

    // isLand 与 wantSea 是反的：wantSea=true 时要传 isLand=false
    PartyTemplateObject template = CaravanHelper.GetRandomCaravanTemplate(culture, wantElite, !wantSea);

    if (template == null)
    {
        // 所有候选都被 IsPartyTemplateSuitable 筛掉了：
        // wantSea=true 需要 ShipHulls.Count > 0，wantSea=false 需要 ShipHulls.Count == 0
        // 注意精英池不会回退到普通池，这里只能由调用方决定降级策略
        Debug.Print("no matching caravan party template for this culture");
    }

    return template;
}
```

## 参见

- ↔ [Campaign](../../campaign/Campaign) —— 商队是战役世界里的 `MobileParty`；模板抽出后由战役侧创建部队
- ↔ [GameModels](../../campaign/GameModels) —— 商队生成与速度这类规则在模型层，不写死在 helper 里

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
