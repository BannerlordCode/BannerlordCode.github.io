---
title: "AccessLevel"
description: "据点准入结论枚举：三值 NoAccess / LimitedAccess / FullAccess，表示玩家主英雄能否进入某个据点，由 SettlementAccessModel 的三个 CanMainHeroEnter* 方法通过 AccessDetails.AccessLevel 字段返回。"
---
# AccessLevel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public enum AccessLevel`  
**Base:** 无  
**File:** `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementAccessModel.cs`

## 概述

`AccessLevel` 是 `SettlementAccessModel` 的**结论枚举**——三值，定义在 `SettlementAccessModel.cs:9`。它回答「玩家主英雄能不能进这个据点」这个最终问题：`NoAccess`（不能进）、`LimitedAccess`（有条件能进）、`FullAccess`（能进）。

它作为 `AccessDetails` 的第一个字段（`SettlementAccessModel.cs:68`）被返回，是调用方读取判定结果时**首先检查**的字段。`SettlementAccessModel` 的三个抽象方法 `CanMainHeroEnterSettlement`（`SettlementAccessModel.cs:81`）、`CanMainHeroEnterLordsHall`（`SettlementAccessModel.cs:83`）、`CanMainHeroEnterDungeon`（`SettlementAccessModel.cs:85`）都通过 `out AccessDetails` 把这个结论带回。

`AccessLevel` 只有 3 个值，与 `AccessLimitationReason` 的 8 个值形成对比——前者是**结论**（能不能进），后者是**原因**（为什么不能进）。两者不要混淆。

## 心智模型

把 `AccessLevel` 当作**门卫的最终答复**：玩家走到据点门口，门卫只回答三句话之一——

- **`NoAccess`**（`SettlementAccessModel.cs:11`）— 「不能进」。玩家被完全拒绝，菜单项会被隐藏或置灰。此时 `AccessDetails.AccessLimitationReason` 会给出具体原因（如 `HostileFaction`、`CrimeRating` 等），`AccessDetails.LimitedAccessSolution` 通常为 `None`。
- **`LimitedAccess`**（`SettlementAccessModel.cs:12`）— 「有条件能进」。玩家可以通过某种方式（贿赂、伪装）达成进入条件。此时 `AccessDetails.AccessLimitationReason` 给出受限原因，`AccessDetails.LimitedAccessSolution` 给出解决路径（`Bribe` 或 `Disguise`）。
- **`FullAccess`**（`SettlementAccessModel.cs:13`）— 「能进」。玩家可以直接进入，无需额外操作。此时 `AccessDetails.AccessLimitationReason` 通常为 `None`，`AccessDetails.AccessMethod` 为 `Direct` 或 `ByRequest`。

关键心智要点：

1. **结论 vs 原因**：`AccessLevel` 是结论（3 值），`AccessLimitationReason` 是原因（8 值）。`AccessLevel == FullAccess` 时原因通常为 `None`；`AccessLevel == LimitedAccess` 时原因和解决方案共同描述受限条件。
2. **它是 `AccessDetails` 的一部分**：`AccessLevel` 不单独存在，它总是作为 `AccessDetails.AccessLevel` 字段（`SettlementAccessModel.cs:68`）被返回。读取时必须先拿到 `AccessDetails`，再读其 `AccessLevel` 字段。
3. **三值是互斥的**：一次判定只会给出一个 `AccessLevel`。`LimitedAccess` 不是 `NoAccess` 的子集——它是一个独立的中间状态，表示「有路径可以进入，但需要额外操作」。
4. **UI 分支的起点**：调用方（如 `PlayerTownVisitCampaignBehavior`）首先读 `AccessLevel` 做三分支，然后在 `LimitedAccess` 分支里再读 `AccessLimitationReason` 和 `LimitedAccessSolution` 决定具体 UI。

## 怎么用

### 怎么拿到

- **源树路径**：`Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementAccessModel.cs`
- **声明处**：`SettlementAccessModel.cs:9`（`public enum AccessLevel`）
- **值定义**：`NoAccess` 在 `SettlementAccessModel.cs:11`，`LimitedAccess` 在 `SettlementAccessModel.cs:12`，`FullAccess` 在 `SettlementAccessModel.cs:13`
- **入口**：通过 `Campaign.Current.Models.SettlementAccessModel` 拿到模型实例，调用 `CanMainHeroEnterSettlement`（`SettlementAccessModel.cs:81`）等方法，从 `out AccessDetails` 的 `AccessLevel` 字段读取。

### 典型用法

```csharp
SettlementAccessModel model = Campaign.Current.Models.SettlementAccessModel;
model.CanMainHeroEnterSettlement(settlement, out AccessDetails details);

switch (details.AccessLevel)
{
    case AccessLevel.FullAccess:
        // 允许进入，显示「进入据点」菜单项
        break;
    case AccessLevel.LimitedAccess:
        // 有条件进入：根据 LimitedAccessSolution 显示「贿赂进入」或「伪装进入」
        break;
    case AccessLevel.NoAccess:
        // 禁止进入：隐藏菜单项或显示禁用原因
        break;
}
```

在自定义模型里设置 `AccessLevel`：

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

    accessDetails.AccessLevel = AccessLevel.FullAccess;
    accessDetails.AccessMethod = AccessMethod.Direct;
}
```

### 坑

- **不要与 `AccessLimitationReason` 混淆**：`AccessLevel` 是 3 值（`NoAccess` / `LimitedAccess` / `FullAccess`），`AccessLimitationReason` 是 8 值（`None` / `HostileFaction` / `RelationshipWithOwner` / `CrimeRating` / `VillageIsLooted` / `Disguised` / `ClanTier` / `LocationEmpty`）。前者是结论，后者是原因。
- **`LimitedAccess` 不是 `NoAccess`**：`LimitedAccess` 表示有路径可以进入（通过贿赂或伪装），`NoAccess` 表示完全禁止。在 UI 分支里不要把两者合并处理。
- **`FullAccess` 时原因通常为 `None`**：如果你在自定义模型里设置了 `AccessLevel = FullAccess` 但忘了把 `AccessLimitationReason` 设为 `None`，UI 可能会显示矛盾的提示。
- **枚举默认值是 `NoAccess`**：`AccessLevel` 的底层类型是 `int`，`NoAccess` 是第一个值（0）。如果你在自定义模型里只填了部分字段，未填的 `AccessLevel` 会是 `NoAccess`——这可能不是你想要的。

## 关键成员

`AccessLevel` 的三个枚举值，每个代表一种准入结论：

- **`NoAccess`**（`SettlementAccessModel.cs:11`）— 禁止进入。玩家完全无法进入该据点，菜单项会被隐藏或置灰。通常伴随 `AccessLimitationReason` 为非 `None` 值。
- **`LimitedAccess`**（`SettlementAccessModel.cs:12`）— 有条件进入。玩家可以通过贿赂或伪装等方式达成进入条件。伴随 `AccessLimitationReason` 指明受限原因，`LimitedAccessSolution` 指明解决路径。
- **`FullAccess`**（`SettlementAccessModel.cs:13`）— 完全进入。玩家可以直接进入该据点，无需额外操作。通常伴随 `AccessLimitationReason == None` 和 `AccessMethod == Direct` 或 `ByRequest`。

## 真实示例

### 示例 1：根据 `AccessLevel` 分支处理菜单

```csharp
model.CanMainHeroEnterSettlement(settlement, out AccessDetails details);

if (details.AccessLevel == AccessLevel.NoAccess)
{
    DisableMenuOption("enter_settlement");
    return;
}

if (details.AccessLevel == AccessLevel.LimitedAccess)
{
    if (details.LimitedAccessSolution == LimitedAccessSolution.Bribe)
    {
        ShowBribeOption(settlement);
    }
    else if (details.LimitedAccessSolution == LimitedAccessSolution.Disguise)
    {
        ShowDisguiseOption(settlement);
    }
    return;
}

EnableMenuOption("enter_settlement");
```

### 示例 2：自定义模型返回 `NoAccess`

```csharp
public override void CanMainHeroEnterSettlement(Settlement settlement, out AccessDetails accessDetails)
{
    accessDetails = default(AccessDetails);

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

### 示例 3：检查是否完全进入

```csharp
model.CanMainHeroEnterLordsHall(settlement, out AccessDetails details);

bool canEnterFreely = details.AccessLevel == AccessLevel.FullAccess &&
                     details.AccessMethod == AccessMethod.Direct;

if (!canEnterFreely)
{
    ShowAccessRestrictedHint(details.AccessLimitationReason);
}
```

## 参见

- [AccessDetails](../AccessDetails) — 包含 `AccessLevel` 字段的判定结果结构
- [AccessLimitationReason](../AccessLimitationReason) — 原因枚举，8 值，与 `AccessLevel` 配合使用
- [SettlementAccessModel](../SettlementAccessModel) — 返回 `AccessDetails` 的抽象模型
- [Settlement](../../campaign/Settlement) — 判定目标据点

## 导航

- [本区域目录](../)
