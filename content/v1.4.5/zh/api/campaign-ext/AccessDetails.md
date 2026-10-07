---
title: "AccessDetails"
description: "据点准入判定结果结构：把 AccessLevel 结论、AccessMethod 方式、AccessLimitationReason 原因、LimitedAccessSolution 解决方案与 PreliminaryActionObligation 前置义务打包成一个值，由 SettlementAccessModel 的三个 CanMainHeroEnter* 方法通过 out 参数返回。"
---
# AccessDetails

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public struct AccessDetails`  
**Base:** 无（struct，值类型）  
**File:** `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementAccessModel.cs`

## 概述

`AccessDetails` 是 `SettlementAccessModel` 的**判定结果容器**——一个纯数据的 `struct`，定义在 `SettlementAccessModel.cs:66`。它把一次准入判定所需的全部信息打包成六个字段：结论（`AccessLevel`）、方式（`AccessMethod`）、原因（`AccessLimitationReason`）、解决方案（`LimitedAccessSolution`）、前置义务（`PreliminaryActionObligation`）与前置动作类型（`PreliminaryActionType`）。

它是模型与 UI/行为层之间的**契约对象**：`SettlementAccessModel` 的三个抽象方法 `CanMainHeroEnterSettlement`（`SettlementAccessModel.cs:81`）、`CanMainHeroEnterLordsHall`（`SettlementAccessModel.cs:83`）、`CanMainHeroEnterDungeon`（`SettlementAccessModel.cs:85`）都通过 `out AccessDetails` 把判定结果交回给调用方。调用方（如 `PlayerTownVisitCampaignBehavior`、`EncounterGameMenuBehavior`、`LocationComplex`）读取这些字段来决定菜单项是显示、置灰还是隐藏。

因为是 `struct`，它具有**值语义**：赋值即拷贝、不能为 `null`、没有继承与多态、不参与垃圾回收。这使得它在频繁查询的菜单判定路径上零分配、无开销。

## 心智模型

把 `AccessDetails` 当作**一张「准入判定单」**：每次玩家试图进入某个据点（或其中的领主大厅、地牢）时，`SettlementAccessModel` 都会重新填写这张单子，六个字段合起来构成一个完整答案——

- `AccessLevel`（`SettlementAccessModel.cs:68`）是**结论**：能不能进？三值——`NoAccess`（不能）、`LimitedAccess`（有条件能进）、`FullAccess`（能进）。
- `AccessMethod`（`SettlementAccessModel.cs:70`）是**方式**：如果能进，是怎么进的？`None` / `Direct`（直接进入）/ `ByRequest`（请求会面后进入）。
- `AccessLimitationReason`（`SettlementAccessModel.cs:72`）是**原因**：为什么不能进或只能有条件进？八值——`None`（无限制）/ `HostileFaction`（交战阵营）/ `RelationshipWithOwner`（与所有者关系差）/ `CrimeRating`（犯罪值过高）/ `VillageIsLooted`（村庄刚被洗劫）/ `Disguised`（伪装状态）/ `ClanTier`（家族等级不足）/ `LocationEmpty`（地点为空）。
- `LimitedAccessSolution`（`SettlementAccessModel.cs:74`）是**解决方案**：有条件进入时，玩家能做什么来达成？`None` / `Bribe`（贿赂）/ `Disguise`（伪装）。
- `PreliminaryActionObligation`（`SettlementAccessModel.cs:76`）与 `PreliminaryActionType`（`SettlementAccessModel.cs:78`）是**前置义务**：进入前是否必须先做某事？`None` / `Optional`（可选），动作类型为 `None` / `FaceCharges`（面对指控）。

关键心智要点：

1. **`AccessLevel` 是结论，`AccessLimitationReason` 是原因**——两者不要混淆。前者 3 值，后者 8 值。`AccessLevel == FullAccess` 时 `AccessLimitationReason` 通常为 `None`；`AccessLevel == LimitedAccess` 时 `AccessLimitationReason` 给出具体原因，`LimitedAccessSolution` 给出解决路径。
2. **它是契约对象，不是状态对象**——`AccessDetails` 不持有任何世界状态，也不被保存到存档。每次查询由模型即时计算并填充，调用方读取后自行决定 UI 表现。
3. **`struct` ⇒ 值语义**——没有 `null`、没有继承、没有身份标识。你不需要（也不能）`new` 一个 `AccessDetails` 来「创建」准入；你只能从模型的 `out` 参数拿到它，或在自己实现模型时填充它。
4. **六个字段构成完整答案**——不要只读 `AccessLevel` 就下结论。`LimitedAccess` 的 UX 完全取决于 `AccessLimitationReason` + `LimitedAccessSolution` 的组合：同样是「有条件进入」，`Bribe` 和 `Disguise` 对应的菜单项和提示文本完全不同。

## 怎么用

### 怎么拿到

- **源树路径**：`Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementAccessModel.cs`
- **声明处**：`SettlementAccessModel.cs:66`（`public struct AccessDetails`）
- **入口**：通过 `Campaign.Current.Models.SettlementAccessModel` 拿到当前生效的模型实例，调用其三个抽象方法之一：
  - `CanMainHeroEnterSettlement(Settlement, out AccessDetails)` — `SettlementAccessModel.cs:81`
  - `CanMainHeroEnterLordsHall(Settlement, out AccessDetails)` — `SettlementAccessModel.cs:83`
  - `CanMainHeroEnterDungeon(Settlement, out AccessDetails)` — `SettlementAccessModel.cs:85`
- 三个方法都是 `void` 返回，结果通过 `out AccessDetails` 带回。

### 典型用法

```csharp
SettlementAccessModel model = Campaign.Current.Models.SettlementAccessModel;
model.CanMainHeroEnterSettlement(settlement, out AccessDetails details);

switch (details.AccessLevel)
{
    case AccessLevel.FullAccess:
        // 允许进入，无需额外 UI
        break;
    case AccessLevel.LimitedAccess:
        // 有条件进入：按原因和解决方案显示菜单
        if (details.LimitedAccessSolution == LimitedAccessSolution.Bribe)
        {
            // 显示「贿赂进入」选项
        }
        break;
    case AccessLevel.NoAccess:
        // 禁止进入：按原因显示提示
        break;
}
```

在自定义 `SettlementAccessModel` 实现里填充 `AccessDetails`：

```csharp
public override void CanMainHeroEnterSettlement(Settlement settlement, out AccessDetails accessDetails)
{
    accessDetails = default(AccessDetails); // 先清零，避免漏填
    accessDetails.AccessLevel = AccessLevel.FullAccess;
    accessDetails.AccessMethod = AccessMethod.Direct;
    accessDetails.AccessLimitationReason = AccessLimitationReason.None;
    accessDetails.LimitedAccessSolution = LimitedAccessSolution.None;
    accessDetails.PreliminaryActionObligation = PreliminaryActionObligation.None;
    accessDetails.PreliminaryActionType = PreliminaryActionType.None;
}
```

### 坑

- **必须给 `out` 参数完整赋值**：C# 编译器强制 `out` 参数在方法返回前被赋值。如果你在自定义模型里只填了部分字段就 `return`，编译能过但运行期那些字段会是 `default` 值（枚举 0 值），可能导致 UI 显示错乱。建议先 `accessDetails = default(AccessDetails);` 再逐字段填充。
- **不要缓存 `AccessDetails`**：模型每次查询都重新计算。你把某次查询的结果存进字段，下次玩家状态变化（如犯罪值上升、阵营开战）后，缓存就是错的。
- **`struct` 不能为 `null`**：不需要写 `if (details != null)`——它永远不为 `null`。但这也意味着你无法用 `null` 表示「尚未判定」；需要这种语义时得自己包一层。
- **字段是公开可变字段，不是属性**：`AccessDetails` 的六个字段都是 `public` 字段（无 `{ get; set; }`）。你可以直接读写，但这也意味着调用方可以随意改写——在自定义模型里填充后，不要再让调用方修改。
- **`AccessLevel` 与 `AccessLimitationReason` 不要互相抄错**：前者 3 值（`NoAccess` / `LimitedAccess` / `FullAccess`），后者 8 值（`None` / `HostileFaction` / `RelationshipWithOwner` / `CrimeRating` / `VillageIsLooted` / `Disguised` / `ClanTier` / `LocationEmpty`）。

## 关键成员

`AccessDetails` 的六个公开字段，每个字段代表判定结果的一个维度：

- **`AccessLevel AccessLevel`**（`SettlementAccessModel.cs:68`）— 结论字段。三值：`NoAccess`（禁止进入）、`LimitedAccess`（有条件进入）、`FullAccess`（完全进入）。调用方首先读这个字段做分支。
- **`AccessMethod AccessMethod`**（`SettlementAccessModel.cs:70`）— 方式字段。三值：`None`（无方式，通常伴随 `NoAccess`）、`Direct`（直接进入）、`ByRequest`（请求会面后进入）。仅当 `AccessLevel != NoAccess` 时有意义。
- **`AccessLimitationReason AccessLimitationReason`**（`SettlementAccessModel.cs:72`）— 原因字段。八值：`None`（无限制）、`HostileFaction`（与据点阵营交战）、`RelationshipWithOwner`（与所有者关系过低）、`CrimeRating`（犯罪值过高）、`VillageIsLooted`（村庄刚被洗劫）、`Disguised`（处于伪装状态）、`ClanTier`（家族等级不足）、`LocationEmpty`（地点为空）。仅当 `AccessLevel != FullAccess` 时有意义。
- **`LimitedAccessSolution LimitedAccessSolution`**（`SettlementAccessModel.cs:74`）— 解决方案字段。三值：`None`（无解决方案）、`Bribe`（可贿赂进入）、`Disguise`（可伪装进入）。仅当 `AccessLevel == LimitedAccess` 时有意义。
- **`PreliminaryActionObligation PreliminaryActionObligation`**（`SettlementAccessModel.cs:76`）— 前置义务字段。两值：`None`（无前置义务）、`Optional`（有可选前置动作）。用于提示玩家在进入前是否需要先处理某些事情。
- **`PreliminaryActionType PreliminaryActionType`**（`SettlementAccessModel.cs:78`）— 前置动作类型字段。两值：`None`（无前置动作）、`FaceCharges`（面对指控）。当 `PreliminaryActionObligation == Optional` 时，这个字段指明具体要做什么。

## 真实示例

### 示例 1：在菜单条件里读取 `AccessDetails`

```csharp
SettlementAccessModel model = Campaign.Current.Models.SettlementAccessModel;
model.CanMainHeroEnterSettlement(Settlement.CurrentSettlement, out AccessDetails details);

if (details.AccessLevel == AccessLevel.NoAccess)
{
    string reason = details.AccessLimitationReason switch
    {
        AccessLimitationReason.HostileFaction => "与据点阵营交战",
        AccessLimitationReason.CrimeRating => "犯罪值过高",
        _ => "无法进入"
    };
    InformationManager.DisplayMessage(new InformationMessage(reason));
    return false;
}
return true;
```

### 示例 2：自定义模型里填充 `AccessDetails`

```csharp
public override void CanMainHeroEnterLordsHall(Settlement settlement, out AccessDetails accessDetails)
{
    accessDetails = default(AccessDetails);

    if (settlement.OwnerClan == Clan.PlayerClan)
    {
        accessDetails.AccessLevel = AccessLevel.FullAccess;
        accessDetails.AccessMethod = AccessMethod.Direct;
        return;
    }

    accessDetails.AccessLevel = AccessLevel.LimitedAccess;
    accessDetails.AccessLimitationReason = AccessLimitationReason.RelationshipWithOwner;
    accessDetails.LimitedAccessSolution = LimitedAccessSolution.Bribe;
}
```

### 示例 3：检查前置义务

```csharp
model.CanMainHeroEnterSettlement(settlement, out AccessDetails details);

if (details.PreliminaryActionObligation == PreliminaryActionObligation.Optional &&
    details.PreliminaryActionType == PreliminaryActionType.FaceCharges)
{
    // 提示玩家：进入前需要先面对犯罪指控
    ShowFaceChargesPrompt();
}
```

## 参见

- [AccessLevel](../AccessLevel) — 结论枚举，3 值
- [AccessLimitationReason](../AccessLimitationReason) — 原因枚举，8 值
- [AccessMethod](../AccessMethod) — 方式枚举，3 值
- [SettlementAccessModel](../SettlementAccessModel) — 持有 `AccessDetails` 的抽象模型
- [Settlement](../../campaign/Settlement) — 判定目标据点

## 导航

- [本区域目录](../)
