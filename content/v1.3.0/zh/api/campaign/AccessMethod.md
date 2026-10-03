---
title: "AccessMethod"
description: "「怎么进」的三个取值：None / Direct / ByRequest。它与 AccessLevel 联判才有意义——FullAccess + Direct 才是无门槛直入。"
---

# AccessMethod

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public enum AccessMethod`
**Base:** 无（`System.Int32` 底层枚举，不是 `FlagsAttribute`）
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementAccessModel.cs`（`:41`，嵌套在 `SettlementAccessModel` 内）

## 概述

`AccessLevel` 说「能不能进」，`AccessMethod` 说「**经过什么手续能进**」。它只有三个值：`None`（没有可用的进入方式，通常意味着同时 `AccessLevel` 是 `NoAccess`）、`Direct`（直接进）、`ByRequest`（要先提请求——见界面）。

关键点是**它必须和 `AccessLevel` 联判**。官方在 `EncounterGameMenuBehavior.cs:2231` 与 `:2316` 用的条件是 `this._accessDetails.AccessLevel == AccessLevel.FullAccess && this._accessDetails.AccessMethod == AccessMethod.Direct`——**两个字段都要对**。所以「`AccessMethod` 是 `Direct`」本身不构成准入许可，必须同时 `AccessLevel == FullAccess`。

它同样**不是 `Flags`**，隐式值为 0 / 1 / 2。

## 心智模型

把它当成**「进入手续」而不是「准入结果」**，并且死记一条规则：**先看 `AccessLevel`，再看 `AccessMethod`。**

一次完整判定读起来是这样：

**`AccessLevel == NoAccess`** —— 无论 `AccessMethod` 是什么，都进不去。此时该读的是 `AccessLimitationReason`（为什么不许进），用来给玩家出提示文案。`AccessMethod` 在这个分支上是**无意义的残留值**。

**`AccessLevel == FullAccess`** —— 只有 `AccessMethod == Direct` 才是真正的「无门槛」。`ByRequest` 配 `FullAccess` 在官方实现里不出现，出现时说明你的模型写出了自相矛盾的组合。

**`AccessLevel == LimitedAccess`** —— `AccessMethod` 描述的是「走哪条有限制通道」，而真正的门槛写在 `LimitedAccessSolution`（`Bribe` 还是 `Disguise`）。`DefaultSettlementAccessModel.cs:357`、`:371`、`:391` 这三处产出的就是 `ByRequest` 配 `LimitedAccess`，也就是「得先提请求（或先付钱/乔装）才能进」。

**`AccessMethod == None` 只有一个真实场景**：`DefaultSettlementAccessModel.cs:435` 那一处，它与 `AccessLevel == NoAccess` 同时出现。**`None` 的设计含义是「没有可用的进入方式」**，而不是「随便进」——这是最容易读反的一个值。

**什么时候该用它、什么时候不该用。** 该用：在 `SettlementAccessModel` 派类里填 `AccessDetails` 时，把手续和许可分开表达。不该用：拿 `AccessMethod == Direct` 当作「玩家可以进」的唯一条件——那会在 `NoAccess` 上误判通过。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `None` | `None`（隐式值 0） | **没有可用的进入方式。** 它是 `default(AccessMethod)`，所以 `accessDetails = default(AccessDetails)` 会同时得到 `AccessLevel.NoAccess` + `AccessMethod.None`——「进不去且无方式」，这是一个自洽的默认组合。`DefaultSettlementAccessModel.cs:435` 是全树唯一显式产出 `None` 的地方。 |
| `Direct` | `Direct`（隐式值 1） | 直接进入，不需要任何前置交互。**必须配 `AccessLevel == FullAccess` 才有效。** `DefaultSettlementAccessModel.cs:25` 在「玩家与聚落同派系且驻军为空」的快速通道上产出它；`EncounterGameMenuBehavior.cs:2231` / `:2316` 在打开内城/地牢菜单项时判它。 |
| `ByRequest` | `ByRequest`（隐式值 2） | 需要先提出请求（由对应领主/管理者批准），通常随后还会有 `Bribe` 或 `Disguise` 的门槛。`DefaultSettlementAccessModel.cs:357`、`:371`、`:391` 是三处产出点。玩家界面上它对应「请求会面 / 请求进入」这类需要对手方点头的路径，而不是自己就能走的路径。 |

三个成员都没有显式数值，依赖声明顺序。

## 真实示例

联判 `AccessLevel` 与 `AccessMethod`（照抄 `EncounterGameMenuBehavior.cs:2231` 的形状）：

```csharp
SettlementAccessModel.AccessDetails details;
Campaign.Current.Models.SettlementAccessModel.CanMainHeroEnterLordsHall(settlement, out details);

bool canWalkInUnannounced = details.AccessLevel == SettlementAccessModel.AccessLevel.FullAccess
    && details.AccessMethod == SettlementAccessModel.AccessMethod.Direct;

Debug.Print("access level = " + details.AccessLevel, 0);
Debug.Print("access method = " + details.AccessMethod, 0);
Debug.Print("can walk in unannounced = " + canWalkInUnannounced, 0);
```

**两个条件必须都在同一个 `&&` 里**。只判 `AccessMethod == Direct` 会在 `AccessLevel == NoAccess` 时误判通过——因为 `NoAccess` 组合里 `AccessMethod` 是被忽略的残留值。

自定义准入时把「许可」和「手续」分开填：

```csharp
public class MySettlementAccessModel : SettlementAccessModel
{
    public override void CanMainHeroEnterLordsHall(Settlement settlement, out AccessDetails accessDetails)
    {
        accessDetails = default(AccessDetails);

        if (settlement.OwnerClan == Hero.MainHero.Clan)
        {
            accessDetails.AccessLevel = AccessLevel.FullAccess;
            accessDetails.AccessMethod = AccessMethod.Direct;
            accessDetails.AccessLimitationReason = AccessLimitationReason.None;
            return;
        }

        if (Hero.MainHero.MapFaction.IsAtWarWith(settlement.MapFaction))
        {
            accessDetails.AccessLevel = AccessLevel.NoAccess;
            accessDetails.AccessMethod = AccessMethod.None;
            accessDetails.AccessLimitationReason = AccessLimitationReason.HostileFaction;
            return;
        }

        accessDetails.AccessLevel = AccessLevel.LimitedAccess;
        accessDetails.AccessMethod = AccessMethod.ByRequest;
        accessDetails.AccessLimitationReason = AccessLimitationReason.RelationshipWithOwner;
        accessDetails.LimitedAccessSolution = LimitedAccessSolution.Bribe;
    }
}
```

三个分支覆盖了三种合法组合：`FullAccess+Direct`、`NoAccess+None`、`LimitedAccess+ByRequest`。**`AccessLevel` 与 `AccessMethod` 必须成套赋值**——只改一个就会得到官方模型里不存在的组合，下游联判会走进未定义分支。

## 风险与边界

- **不是 `Flags`。** 没有 `[Flags]`，按位或 `Direct | ByRequest` 编译通过但语义无意义，且不会报错。
- **隐式值绑定声明顺序。** 三个成员都没写数值。`None == 0`、`Direct == 1`、`ByRequest == 2` 只能靠枚举自身保证；把 `None` 与 `Direct` 对调会让所有 `default(AccessDetails)` 变成「无门槛直入」。
- **它不是准入许可。** 全树没有一处只判 `AccessMethod` 就放行。`AccessMethod == Direct` 在 `AccessLevel == NoAccess` 的组合里**不代表能进**。
- **`None` 的语义是「无方式」，不是「随意」。** 这是本页最容易读反的值。它与 `NoAccess` 成对出现。
- **`FullAccess + ByRequest` 在官方实现里不存在。** 你若产出这个组合，下游 `EncounterGameMenuBehavior` 那种 `AccessLevel == FullAccess && AccessMethod == Direct` 的联判会判 false，菜单项不会出现——**不会有任何报错提示你组合非法**。
- **`LimitedAccess + ByRequest` 的门槛在别处。** 究竟是先付钱还是先乔装，读 `LimitedAccessSolution`，不要从 `ByRequest` 推断。
- **嵌套类型。** 完整名是 `SettlementAccessModel.AccessMethod`，与 `AccessLevel` 同父。[AccessDetails](../AccessDetails) 的第二个字段类型就是它。
- **`AccessMethod` 不描述「在内部能做什么」。** 进了之后能去哪个 Location、能做哪个动作，是 `CanMainHeroAccessLocation` / `CanMainHeroDoSettlementAction` 的事，它们返回 `out bool disableOption, out TextObject disabledText` 而**不是** `AccessDetails`。

## 跨版本提示

`AccessMethod` 的三个成员 `None` / `Direct` / `ByRequest` 在 `bannerlord-1.3.0/`、`bannerlord-1.3.15/`、`bannerlord-1.4.6/`、`bannerlord-1.4.7/`、`bannerlord-1.5.3/` 五棵树里**完全一致**：同样的名字、同样的声明顺序、同样的隐式 0/1/2，无新增、无重排。

**变的是「请求」这条路的实现细节与提示文案。** 后续版本给「请求会面 / 请求进入」的判定加了更多条件（更多 `AccessLimitationReason` 理由、更多 `PreliminaryAction` 前置动作），但 `ByRequest` 这个值本身没有变。

对 mod 作者的实际含义：**覆盖 `SettlementAccessModel` 的代码跨版本基本稳定**；需要盯的是你依赖的 `AccessLimitationReason` / `PreliminaryActionType` 成员是否还在，而不是 `AccessMethod`。

## 依赖关系

- 宿主类型：[SettlementAccessModel](../SettlementAccessModel) 是嵌套它的抽象模型类，三个 `CanMainHeroEnterXxx` 方法用 `out AccessDetails` 返回判定结果
- 承载结构：[AccessDetails](../AccessDetails) 的第二个字段
- 必须联读的兄弟：[AccessLevel](../AccessLevel)（能不能进）先判，[AccessLimitationReason](../AccessLimitationReason)（为什么不许进）在 `NoAccess` 时读，`LimitedAccessSolution`（先做什么）在 `LimitedAccess` 时读
- 默认实现：[DefaultSettlementAccessModel](../DefaultSettlementAccessModel) 在 `:25` 产出 `Direct`，在 `:357` / `:371` / `:391` 产出 `ByRequest`，在 `:435` 产出 `None`
- 消费方：[EncounterGameMenuBehavior](../EncounterGameMenuBehavior) 在 `:2231` / `:2316` 与 `AccessLevel.FullAccess` 联判
- 桶首页：[campaign API 分区](../)