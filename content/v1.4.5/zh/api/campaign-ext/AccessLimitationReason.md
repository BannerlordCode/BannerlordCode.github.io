---
title: "AccessLimitationReason"
description: "据点准入受限原因枚举：八值 None / HostileFaction / RelationshipWithOwner / CrimeRating / VillageIsLooted / Disguised / ClanTier / LocationEmpty，表示玩家主英雄为什么不能或只能有条件进入某个据点，由 SettlementAccessModel 通过 AccessDetails.AccessLimitationReason 字段返回。"
---
# AccessLimitationReason

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public enum AccessLimitationReason`  
**Base:** 无  
**File:** `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementAccessModel.cs`

## 概述

`AccessLimitationReason` 是 `SettlementAccessModel` 的**原因枚举**——八值，定义在 `SettlementAccessModel.cs:23`。它回答「玩家主英雄为什么不能进这个据点」这个问题：是阵营交战、关系不好、犯罪值太高、村庄被洗劫、伪装状态、家族等级不足，还是地点为空。

它作为 `AccessDetails` 的第三个字段（`SettlementAccessModel.cs:72`）被返回，是调用方在 `AccessLevel != FullAccess` 时**第二个检查**的字段。`SettlementAccessModel` 的三个抽象方法 `CanMainHeroEnterSettlement`（`SettlementAccessModel.cs:81`）、`CanMainHeroEnterLordsHall`（`SettlementAccessModel.cs:83`）、`CanMainHeroEnterDungeon`（`SettlementAccessModel.cs:85`）都通过 `out AccessDetails` 把这个原因带回。

`AccessLimitationReason` 有 8 个值，与 `AccessLevel` 的 3 个值形成对比——前者是**原因**（为什么不能进），后者是**结论**（能不能进）。两者不要混淆。

## 心智模型

把 `AccessLimitationReason` 当作**门卫的解释**：当门卫说「不能进」或「有条件进」时，他会告诉你原因——

- **`None`**（`SettlementAccessModel.cs:25`）— 「没有限制」。玩家可以自由进入，通常伴随 `AccessLevel == FullAccess`。
- **`HostileFaction`**（`SettlementAccessModel.cs:26`）— 「与据点阵营交战」。玩家所属阵营与据点所属阵营处于战争状态，无法进入。
- **`RelationshipWithOwner`**（`SettlementAccessModel.cs:27`）— 「与所有者关系过低」。玩家与据点所有者（通常是领主或家族）的关系值太低，无法进入。
- **`CrimeRating`**（`SettlementAccessModel.cs:28`）— 「犯罪值过高」。玩家在据点所在区域的犯罪值太高，被拒绝进入。
- **`VillageIsLooted`**（`SettlementAccessModel.cs:29`）— 「村庄刚被洗劫」。目标村庄最近被洗劫，暂时无法进入。
- **`Disguised`**（`SettlementAccessModel.cs:30`）— 「处于伪装状态」。玩家当前处于伪装状态，某些据点会因此拒绝或限制进入。
- **`ClanTier`**（`SettlementAccessModel.cs:31`）— 「家族等级不足」。玩家家族等级太低，无法进入某些高级据点。
- **`LocationEmpty`**（`SettlementAccessModel.cs:32`）— 「地点为空」。目标地点当前为空（可能尚未生成或被摧毁），无法进入。

关键心智要点：

1. **原因 vs 结论**：`AccessLimitationReason` 是原因（8 值），`AccessLevel` 是结论（3 值）。`AccessLevel == FullAccess` 时原因通常为 `None`；`AccessLevel == LimitedAccess` 或 `NoAccess` 时原因给出具体解释。
2. **它是 `AccessDetails` 的一部分**：`AccessLimitationReason` 不单独存在，它总是作为 `AccessDetails.AccessLimitationReason` 字段（`SettlementAccessModel.cs:72`）被返回。读取时必须先拿到 `AccessDetails`，再读其 `AccessLimitationReason` 字段。
3. **八值覆盖主要受限场景**：从阵营交战到地点为空，八值涵盖了战役层据点准入的主要受限原因。在自定义模型里，你应该根据游戏状态选择最匹配的原因值。
4. **与 `LimitedAccessSolution` 配合**：当 `AccessLevel == LimitedAccess` 时，`AccessLimitationReason` 给出原因，`LimitedAccessSolution` 给出解决路径。例如 `RelationshipWithOwner` 可能对应 `Bribe`（贿赂），`Disguised` 可能对应 `Disguise`（伪装）。

## 怎么用

### 怎么拿到

- **源树路径**：`Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementAccessModel.cs`
- **声明处**：`SettlementAccessModel.cs:23`（`public enum AccessLimitationReason`）
- **值定义**：`None` 在 `SettlementAccessModel.cs:25`，`HostileFaction` 在 `SettlementAccessModel.cs:26`，`RelationshipWithOwner` 在 `SettlementAccessModel.cs:27`，`CrimeRating` 在 `SettlementAccessModel.cs:28`，`VillageIsLooted` 在 `SettlementAccessModel.cs:29`，`Disguised` 在 `SettlementAccessModel.cs:30`，`ClanTier` 在 `SettlementAccessModel.cs:31`，`LocationEmpty` 在 `SettlementAccessModel.cs:32`
- **入口**：通过 `Campaign.Current.Models.SettlementAccessModel` 拿到模型实例，调用 `CanMainHeroEnterSettlement`（`SettlementAccessModel.cs:81`）等方法，从 `out AccessDetails` 的 `AccessLimitationReason` 字段读取。

### 典型用法

```csharp
SettlementAccessModel model = Campaign.Current.Models.SettlementAccessModel;
model.CanMainHeroEnterSettlement(settlement, out AccessDetails details);

if (details.AccessLevel != AccessLevel.FullAccess)
{
    string hint = details.AccessLimitationReason switch
    {
        AccessLimitationReason.HostileFaction => "与据点阵营交战",
        AccessLimitationReason.RelationshipWithOwner => "与所有者关系过低",
        AccessLimitationReason.CrimeRating => "犯罪值过高",
        AccessLimitationReason.VillageIsLooted => "村庄刚被洗劫",
        AccessLimitationReason.Disguised => "处于伪装状态",
        AccessLimitationReason.ClanTier => "家族等级不足",
        AccessLimitationReason.LocationEmpty => "地点为空",
        _ => "无法进入"
    };
    InformationManager.DisplayMessage(new InformationMessage(hint));
}
```

在自定义模型里设置 `AccessLimitationReason`：

```csharp
public override void CanMainHeroEnterSettlement(Settlement settlement, out AccessDetails accessDetails)
{
    accessDetails = default(AccessDetails);

    if (FactionManager.IsAtWarAgainstFaction(Hero.MainHero.MapFaction, settlement.MapFaction))
    {
        accessDetails.AccessLevel = AccessLevel.NoAccess;
        accessDetails.AccessLimitationReason = AccessLimitationReason.HostileFaction;
        return;
    }

    if (settlement.IsVillage && settlement.Village.IsRaided)
    {
        accessDetails.AccessLevel = AccessLevel.NoAccess;
        accessDetails.AccessLimitationReason = AccessLimitationReason.VillageIsLooted;
        return;
    }

    accessDetails.AccessLevel = AccessLevel.FullAccess;
    accessDetails.AccessMethod = AccessMethod.Direct;
}
```

### 坑

- **不要与 `AccessLevel` 混淆**：`AccessLimitationReason` 是 8 值（`None` / `HostileFaction` / `RelationshipWithOwner` / `CrimeRating` / `VillageIsLooted` / `Disguised` / `ClanTier` / `LocationEmpty`），`AccessLevel` 是 3 值（`NoAccess` / `LimitedAccess` / `FullAccess`）。前者是原因，后者是结论。
- **`None` 表示没有限制**：`AccessLimitationReason == None` 通常伴随 `AccessLevel == FullAccess`。如果你在自定义模型里设置了 `AccessLevel = FullAccess` 但忘了把 `AccessLimitationReason` 设为 `None`，UI 可能会显示矛盾的提示。
- **枚举默认值是 `None`**：`AccessLimitationReason` 的底层类型是 `int`，`None` 是第一个值（0）。如果你在自定义模型里只填了部分字段，未填的 `AccessLimitationReason` 会是 `None`——这可能不是你想要的。
- **八值是互斥的**：一次判定只会给出一个 `AccessLimitationReason`。如果多个原因同时成立（如既交战又犯罪值高），你需要选择最优先的一个。

## 关键成员

`AccessLimitationReason` 的八个枚举值，每个代表一种受限原因：

- **`None`**（`SettlementAccessModel.cs:25`）— 无限制。玩家可以自由进入，通常伴随 `AccessLevel == FullAccess`。
- **`HostileFaction`**（`SettlementAccessModel.cs:26`）— 与据点阵营交战。玩家所属阵营与据点所属阵营处于战争状态，无法进入。
- **`RelationshipWithOwner`**（`SettlementAccessModel.cs:27`）— 与所有者关系过低。玩家与据点所有者（通常是领主或家族）的关系值太低，无法进入。
- **`CrimeRating`**（`SettlementAccessModel.cs:28`）— 犯罪值过高。玩家在据点所在区域的犯罪值太高，被拒绝进入。
- **`VillageIsLooted`**（`SettlementAccessModel.cs:29`）— 村庄刚被洗劫。目标村庄最近被洗劫，暂时无法进入。
- **`Disguised`**（`SettlementAccessModel.cs:30`）— 处于伪装状态。玩家当前处于伪装状态，某些据点会因此拒绝或限制进入。
- **`ClanTier`**（`SettlementAccessModel.cs:31`）— 家族等级不足。玩家家族等级太低，无法进入某些高级据点。
- **`LocationEmpty`**（`SettlementAccessModel.cs:32`）— 地点为空。目标地点当前为空（可能尚未生成或被摧毁），无法进入。

## 真实示例

### 示例 1：根据原因显示不同提示

```csharp
model.CanMainHeroEnterSettlement(settlement, out AccessDetails details);

if (details.AccessLimitationReason == AccessLimitationReason.HostileFaction)
{
    ShowMessage("你与据点阵营交战，无法进入。");
}
else if (details.AccessLimitationReason == AccessLimitationReason.CrimeRating)
{
    ShowMessage("你的犯罪值过高，被拒绝进入。");
}
else if (details.AccessLimitationReason == AccessLimitationReason.VillageIsLooted)
{
    ShowMessage("村庄刚被洗劫，暂时无法进入。");
}
```

### 示例 2：自定义模型返回多个原因

```csharp
public override void CanMainHeroEnterSettlement(Settlement settlement, out AccessDetails accessDetails)
{
    accessDetails = default(AccessDetails);

    if (FactionManager.IsAtWarAgainstFaction(Hero.MainHero.MapFaction, settlement.MapFaction))
    {
        accessDetails.AccessLevel = AccessLevel.NoAccess;
        accessDetails.AccessLimitationReason = AccessLimitationReason.HostileFaction;
        return;
    }

    if (Hero.MainHero.CrimeRating > 50)
    {
        accessDetails.AccessLevel = AccessLevel.NoAccess;
        accessDetails.AccessLimitationReason = AccessLimitationReason.CrimeRating;
        return;
    }

    accessDetails.AccessLevel = AccessLevel.FullAccess;
    accessDetails.AccessMethod = AccessMethod.Direct;
}
```

### 示例 3：检查是否因家族等级受限

```csharp
model.CanMainHeroEnterLordsHall(settlement, out AccessDetails details);

if (details.AccessLimitationReason == AccessLimitationReason.ClanTier)
{
    ShowMessage("你的家族等级不足，无法进入领主大厅。");
    ShowClanTierRequirement();
}
```

## 参见

- [AccessDetails](../AccessDetails) — 包含 `AccessLimitationReason` 字段的判定结果结构
- [AccessLevel](../AccessLevel) — 结论枚举，3 值，与 `AccessLimitationReason` 配合使用
- [SettlementAccessModel](../SettlementAccessModel) — 返回 `AccessDetails` 的抽象模型
- [Settlement](../../campaign/Settlement) — 判定目标据点

## 导航

- [本区域目录](../)
