---
title: "ArmyManagementItemVM"
description: "军队管理界面里的一支候选部队。它在构造时一次性算完距离、兵力、船只与影响力花费，并用一个私有 UpdateEligibility 把「能不能加入」与「为什么不能」绑在一起。排序器读的就是它的 DistInTime / Cost / Strength / ShipCount / LeaderNameText / Clan。"
---
# ArmyManagementItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public class ArmyManagementItemVM : ViewModel`  
**Base:** `ViewModel`  
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement/ArmyManagementItemVM.cs`

## 概述

军队管理界面左侧是一列可以勾选编入的部队，每一支就是一个本类。它承担两件互不相干的事：

1. **构造时的一次性快照**（`:401-430`）：读出首领头像、旗帜、关系、兵力、船只数、与主队的距离、影响力花费，然后 `RefreshValues()` 生成文字。
2. **持续的资格判定**：`UpdateEligibility()` 反复被调用，把 `IsEligible` 与 `_eligibilityReason` 一起更新。

它对外的三个属性是给排序器用的：`DistInTime`（到达所需时间）、`Cost`（影响力花费）、`Clan` / `LeaderNameText`（后两者供 `ItemClanComparer` 与 `ItemNameComparer` 用）。`Strength` 与 `ShipCount` 同时也是绑定属性。

## 构造里那个 float.MaxValue

距离计算有一段很特殊的分支（`:415-424`）：

```csharp
_distance = DistanceHelper.FindClosestDistanceFromMobilePartyToMobileParty(Party, MobileParty.MainParty, Party.NavigationCapability);
if (MobileParty.MainParty.IsCurrentlyAtSea && !Party.HasNavalNavigationCapability)
{
    DistInTime = 2.1474836E+09f;
}
else
{
    DistInTime = TaleWorlds.Library.MathF.Ceiling(_distance / Party.Speed);
    Cost = armyManagementCalculationModel.CalculatePartyInfluenceCost(MobileParty.MainParty, mobileParty);
}
```

主队在海上而这支部队没有航海能力时：

- `DistInTime` 被设成 **`2.1474836E+09f`（即 `float.MaxValue`）**——作用是让"距离"排序把它永远排到最后。
- 🔴 **`Cost` 完全不被赋值**，停留在字段初始值 `-1`。而 `Cost` 的排序比较器 `ItemCostComparer` 会直接 `y.Cost.CompareTo(x.Cost)`——**`-1` 比任何真实花费都小，于是这支部队在"按花费排序"里会跑到最前面**，与"距离排序把它甩到最后"完全相反。`_cost` 的字段初值就是 `-1`（`:52`）。

这是本类型最容易踩的一个不一致。

## 心智模型

把它读成**「构造期算一次的只读快照 + 一个可反复重算的资格开关」**：

- **谁 new 它**：两处，都在 `ArmyManagementVM` 构造函数里。
  - `:994` —— 玩家队伍外的候选部队：`new ArmyManagementItemVM(OnAddToCart, OnRemove, OnFocus, item)`，**三个回调都传了**。
  - `:997` —— 玩家主队自己：`_mainPartyItem = new ArmyManagementItemVM(null, null, null, Hero.MainHero.PartyBelongedTo)`，**三个回调全是 null**。
- **谁持引用**：`ArmyManagementVM` 的两个列表——`PartyList`（全部候选）与 `PartiesInCart`（已勾选）。**同一实例可能同时出现在两个列表里**。
- **绑定到哪个 View 属性**：十三个。`NameText` / `LeaderNameText` / `InArmyText` / `DistanceText` 是文字，`Strength` / `ShipCount` / `Relation` / `Cost` 是数值，`ClanBanner` / `LordFace` 是图像，`IsEligible` / `IsInCart` / `IsMainHero` / `IsAlreadyWithPlayer` / `IsTransferDisabled` / `IsFocused` / `HasShip` / `IsCostRelevant` 是状态，`RemoveInputKey` 是按键提示。
- **什么时候 Dispose**：**不需要 Dispose。** 它不覆写 `OnFinalize`，不注册任何事件。持有一个 `MobileParty` 引用与三个回调。**它自身不泄漏**；但注意 `Party` 是 `public readonly` **字段**而非属性，所以外部可以直接拿到原始 `MobileParty` 并长期持有。
- 🔴 **`Cost` / `Strength` / `ShipCount` / `Relation` 都是可写的 `[DataSourceProperty]`**，setter 各自带副作用（见下）。`ArmyManagementVM` 正是靠外部写 `Cost = 0` 来表示"已在军中"（`:1008`）。
- **`IsInCart` 的 setter 会连带 `UpdateIsCostRelevant()`**，`Cost` / `IsAlreadyWithPlayer` 的 setter 也各自会调它。**所以成本是否相关的这个显示状态由三个属性共同决定。**
- **`ShipCount` 的 setter 连带 `HasShip = _shipCount > 0`**（`:173`）——所以 `HasShip` 不该被外部直接写。
- **`OnAddToCart` 里 `UpdateEligibility()` 被调了两次**（`:467` 与 `:472`）——一次在调用回调前，一次在之后。注释说明这样写是有意的：先按当前状态判断能否加入，加入后再刷新。
- 🔴 **`ExecuteRevert`/`OnRemove` 对主队无效。** `OnRemove()` 开头 `if (!IsMainHero)`，所以主队那一行永远不会被移除——这也解释了构造时为何给主队那一行传 `null` 回调。
- 🔴 **`ExecuteBeginHint` 在不可用时显示的是"原因"而不是提示框。** `if (!IsEligible) { MBInformationManager.ShowHint(_eligibilityReason.ToString()); return; }`——`_eligibilityReason` 只有在这里才会被玩家看到。
- **死代码**：`_minimumPartySizeScoreNeeded = 0.4f`（`:24`）在本文件内出现次数是 1——只有定义，**没有任何引用**。不要照它推断存在什么队伍规模门槛。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Party` | `public readonly MobileParty Party`（`:22`） | **字段不是属性**，构造时由 `mobileParty` 赋值，之后不可变。外部可直接拿到原始战役对象并长期持有——这是本类最"穿透"的一处封装破口。 |
| `DistInTime` | `public float DistInTime { get; }`（`:68`） | `ItemDistanceComparer` 的主键。**主队在海上且本方无航海能力时被设成 `2.1474836E+09f`（`float.MaxValue`）**，作用是把它排到距离序最后。 |
| `_distance` | `public float _distance { get; }`（`:70`） | 原始距离值。**注意这是一个带下划线前缀的 public 属性**——命名不合常规，但确实是公开成员。 |
| `Clan` | `public Clan Clan { get; }`（`:72`） | `ItemClanComparer` 的排序依据（`Clan.Name.ToString()`）。构造时由 `mobileParty.LeaderHero.Clan` 赋值。 |
| `CanJoinBackWithoutCost` | `public bool CanJoinBackWithoutCost`（`:26`） | **public 字段**，由 `ArmyManagementVM.OnAddToCart` / `OnRemove` 写入。为真时 `UpdateEligibility()` **完全跳过检查**直接判定可加入——用于"原已在军中，取出后无损加回"。 |
| 构造函数 | `public ArmyManagementItemVM(Action<ArmyManagementItemVM> onAddToCart, Action<ArmyManagementItemVM> onRemove, Action<ArmyManagementItemVM> onFocus, MobileParty mobileParty)`（`:401-430`） | **一次性快照**。算旗帜、头像、关系、兵力、船只、距离、`DistInTime`、`Cost`、`Clan`、`IsMainHero`；`IsTransferDisabled = IsMainHero \|\| PlayerSiege.PlayerSiegeEvent != null`；最后 `UpdateEligibility()` + `RefreshValues()`。主队那一行传三个 null（`ArmyManagementVM.cs:997`）。 |
| `UpdateEligibility` | `public void UpdateEligibility()`（`:487-509`） | 同时更新 `IsEligible` 与 `_eligibilityReason`。`CanJoinBackWithoutCost` 为真直接放行；`IsInCart && !IsAlreadyWithPlayer` 直接拒绝并写 "Already added to the army."；否则先 `CheckPartyEligibility` 再 `CampaignUIHelper.GetMapScreenActionIsEnabledWithReason`。 |
| `ExecuteAction` | `public void ExecuteAction()`（`:444-454`） | 切换命令：已在购物车里就 `OnRemove()`，否则 `OnAddToCart()`。**这是 widget 绑定的主入口。** |
| `OnAddToCart` | `private void OnAddToCart()`（`:465-473`） | 先 `UpdateEligibility()`，`IsEligible` 为真才调 `_onAddToCart(this)`，**然后再 `UpdateEligibility()` 一次**（`:472`）。 |
| `OnRemove` | `private void OnRemove()`（`:456-463`） | `if (!IsMainHero)` 才 `_onRemove(this)` 并 `UpdateEligibility()`。**主队那一行永远走不到这里。** |
| `ExecuteSetFocused` / `ExecuteSetUnfocused` | `public void ExecuteSetFocused()` / `ExecuteSetUnfocused()`（`:475-485`） | 前者 `IsFocused = true` 后 `_onFocus?.Invoke(this)`；后者 `IsFocused = false` 后 **`_onFocus?.Invoke(null)`**——传 null 表示取消选择。 |
| `ExecuteBeginHint` | `public void ExecuteBeginHint()`（`:523-531`） | 不可用时 `MBInformationManager.ShowHint(_eligibilityReason.ToString())` 并 return；可用时才 `InformationManager.ShowTooltip(typeof(MobileParty), Party, true, true)`。**这是 `_eligibilityReason` 唯一对玩家可见的地方。** |
| `UpdateIsCostRelevant` | `private void UpdateIsCostRelevant()`（`:511-521`） | 私有。`Cost == 0 && IsAlreadyWithPlayer && IsInCart` 时 `IsCostRelevant = false`，否则 true。**由 `Cost` / `IsInCart` / `IsAlreadyWithPlayer` 三个 setter 共同调用。** |
| `_minimumPartySizeScoreNeeded` | `private const float _minimumPartySizeScoreNeeded = 0.4f`（`:24`） | **死代码**：本文件内出现次数为 1，只有定义没有任何引用。**不要据此推断存在队伍规模门槛。** |
| `_eligibilityReason` | `private TextObject _eligibilityReason`（`:28`） | 不可用的原因。私有、无公开访问器，**只能通过 `ExecuteBeginHint` 看到**。 |

## 真实示例

复刻构造时的距离与花费判定——**注意那个分支里 `Cost` 不被赋值**：

```csharp
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Library;

public float ComputeDistInTime(MobileParty party, out int cost)
{
    cost = -1;

    float distance = DistanceHelper.FindClosestDistanceFromMobilePartyToMobileParty(
        party, MobileParty.MainParty, party.NavigationCapability);

    if (MobileParty.MainParty.IsCurrentlyAtSea && !party.HasNavalNavigationCapability)
    {
        // 原版把这个值设成 2.1474836E+09f（float.MaxValue），
        // 并且完全不写 cost —— cost 保持字段初值 -1。
        return 2.1474836E+09f;
    }

    cost = Campaign.Current.Models.ArmyManagementCalculationModel
        .CalculatePartyInfluenceCost(MobileParty.MainParty, party);

    return MathF.Ceiling(distance / party.Speed);
}
```

复刻 `UpdateEligibility` 的三段判定：

```csharp
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Localization;

public bool CheckEligibility(ArmyManagementItemVM item, out TextObject reason)
{
    reason = TextObject.GetEmpty();

    if (item.CanJoinBackWithoutCost)
    {
        // 原版在此直接放行，不做任何检查。
        return true;
    }

    if (item.IsInCart && !item.IsAlreadyWithPlayer)
    {
        reason = new TextObject("{=idRXFzQ6}Already added to the army.");
        return false;
    }

    if (!Campaign.Current.Models.ArmyManagementCalculationModel
            .CheckPartyEligibility(item.Party, out reason))
    {
        return false;
    }

    return CampaignUIHelper.GetMapScreenActionIsEnabledWithReason(out reason);
}
```

自己写一个稳定的排序键——**避开 `Cost` 在海上分支里为 `-1` 的坑**：

```csharp
public List<ArmyManagementItemVM> SortByEffectiveCost(List<ArmyManagementItemVM> items)
{
    // item.Cost 在"海上不可达"分支里是 -1，比任何真实花费都小，
    // 直接用它排序会把这些部队排到最前面。
    // 用 DistInTime == float.MaxValue 作为"不可达"的判据更稳。
    items.Sort((a, b) =>
    {
        bool aUnreachable = a.DistInTime > 2.0E+09f;
        bool bUnreachable = b.DistInTime > 2.0E+09f;
        if (aUnreachable != bUnreachable)
        {
            return aUnreachable ? 1 : -1;
        }

        return b.Cost.CompareTo(a.Cost);
    });

    return items;
}
```

显示不可用原因——**因为 `_eligibilityReason` 没有公开访问器**：

```csharp
public string ExplainIfBlocked(ArmyManagementItemVM item)
{
    if (item.IsEligible)
    {
        return string.Empty;
    }

    // 私有字段拿不到，只能触发 ExecuteBeginHint 让它显示。
    // 若你想拿到文字，得自己重跑一遍 CheckEligibility。
    item.ExecuteBeginHint();
    return "(see on-screen hint)";
}
```

## 风险与边界

- 🔴 **海上分支里 `Cost` 保持 `-1`。** `MobileParty.MainParty.IsCurrentlyAtSea && !Party.HasNavalNavigationCapability` 时，`Cost` 从未被赋值（字段初值 `-1`，`:52`），而 `ItemCostComparer` 直接 `y.Cost.CompareTo(x.Cost)`。**结果：不可达的部队在"按花费排序"里跑到最前面，却在"按距离排序"里被甩到最后。** 这是原版逻辑，两个排序器的不一致。mod 若重写排序请先处理这个哨兵值。
- 🔴 **排序键是只读快照。** `DistInTime` / `_distance` / `Clan` 是 get-only，**在构造后永不重算**。部队移动、舰队改装、关系变化都不会反映。要实时数据必须重建实例。
- **`Party` 是 public readonly 字段，不是属性。** 外部可以直接长期持有这个 `MobileParty`，绕过本类的封装与生命周期。
- **四个数值属性可写且带副作用**：`Cost` 与 `IsAlreadyWithPlayer` 的 setter 调 `UpdateIsCostRelevant()`；`IsInCart` 的 setter 也调；`ShipCount` 的 setter 额外写 `HasShip = _shipCount > 0`。**绕过 setter 直接写字段会破坏这些联动。**
- **`IsEligible` 与原因分离维护。** `IsEligible` 是公开绑定属性，`_eligibilityReason` 是私有的、无访问器。**外部能读到"不能"，但读不到"为什么"**，只能触发 `ExecuteBeginHint` 让它显示在屏幕上。
- **三个回调可能全是 null。** 主队那一行（`ArmyManagementVM.cs:997`）传的就是 `null, null, null`。虽然 `OnRemove` 有 `!IsMainHero` 守卫、`_onFocus` 用 `?.`，但 `_onAddToCart` **没有 null 保护**（`:470`）——若外部把主队那一行的 `IsInCart` 改成 false 再点，`ExecuteAction` 会 NRE。
- **构造期对 `Campaign.Current.Models` 无 null 检查。** `Campaign.Current.Models.ArmyManagementCalculationModel`（`:403`）裸取；无头环境下崩在这里。`UpdateEligibility`（`:489`）倒是用了 `Campaign.Current.Models?`。
- **死代码**：`_minimumPartySizeScoreNeeded = 0.4f` 在本文件内只出现一次（`:24`，仅定义）。**不要推断存在"队伍规模不足 40% 就不能加入"的逻辑——原版没有这个检查。**
- **生命周期**：不覆写 `OnFinalize`、不注册事件 → **不泄漏**。`ArmyManagementVM` 也没有为条目调 `OnFinalize`，条目靠列表 `Clear` 回收。
- **序列化**：无。没有 `SyncData`、不接触 `IDataStore`。编入军队的结果由 `ArmyManagementVM.ExecuteDone` 写 `item.Party.Army` 与 `ChangeClanInfluenceAction.Apply`，条目本身不参与。
- **`ExecuteSetUnfocused` 传 null 给回调。** `_onFocus?.Invoke(null)`（`:484`）。宿主 `ArmyManagementVM.OnFocus` 直接 `FocusedItem = focusedItem`，所以 null 是合法的"取消选择"信号——**若你写自己的 `_onFocus` 回调，必须处理 null。**
- **native 边界**：无。纯托管。但 `InformationManager.ShowTooltip(typeof(MobileParty), ...)` 下游会触及战役侧展示层。
- **跨版本**：`ArmyManagementCalculationModel` 的三个方法（`CheckPartyEligibility` / `CalculatePartyInfluenceCost` / `GetPartyRelation`）、`float.MaxValue` 哨兵、`DistanceHelper.FindClosestDistanceFromMobilePartyToMobileParty` 的签名都是 v1.4.5 的形状。排序器侧见 [ArmyManagementSortControllerVM](../ArmyManagementSortControllerVM)。

## 依赖关系

- ↑ VM 基类：[ViewModel](../../core-extra/ViewModel) —— 属性变更通知与 `RefreshValues` 契约
- ↔ 同级：[ArmyManagementVM](../ArmyManagementVM) —— **唯一的构造方与持有方**，并在 `:1008` 用 `Cost = 0` 标记"已在军中"
- ↔ 同级：[ArmyManagementSortControllerVM](../ArmyManagementSortControllerVM) —— 排序本类的六个比较器全部读这里列出的属性
- ↔ 同级：[ArmyMenuOverlayVM](../ArmyMenuOverlayVM) —— 军队覆层的另一处呈现，读同一批战役对象
- → 计算模型：[ArmyManagementCalculationModel](../../campaign-ext/ArmyManagementCalculationModel)（zh 链接；en: `../../campaign/ArmyManagementCalculationModel`）
- → 部队：[MobileParty](../../campaign/MobileParty)、[Clan](../../campaign/Clan)、[Army](../../campaign-ext/Army)
- → 距离计算：[DistanceHelper](../../system/DistanceHelper)
- → 图像：[BannerImageIdentifierVM](../../core-extra/BannerImageIdentifierVM)、[CharacterImageIdentifierVM](../../core-extra/CharacterImageIdentifierVM)
- → 提示：[InformationManager](../../core-extra/InformationManager)、[MBInformationManager](../../core-extra/MBInformationManager)
