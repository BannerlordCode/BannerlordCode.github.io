---
title: "ArmyManagementItemVM"
description: "军队管理界面里的一行「可加入的队伍」：构造时一次性算好距离、影响力花费与资格，ExecuteAction 按 IsInCart 在加入/移出之间切换，UpdateEligibility 把资格判断委托给 ArmyManagementCalculationModel 与 CampaignUIHelper。"
---

# ArmyManagementItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement`
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArmyManagementItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementItemVM.cs`（全文 684 行）

## 概述

这一行 VM 代表「地图上某支可能加入玩家军队的队伍」。它有 **21 个绑定属性 + 3 个只读计算属性 + 1 个 public 字段**，是本批里绑定属性最多的类之一。**但真正属于「逻辑」的只有五个 public 方法**：`RefreshValues()` / `ExecuteAction()` / `ExecuteSetFocused()` / `ExecuteSetUnfocused()` / `UpdateEligibility()`，加上一组提示相关的方法。

构造器（第 29–59 行）做的事按顺序是：存三个回调；`this.Party = mobileParty`（**`public readonly MobileParty Party` 字段**，不是属性）；`_eligibilityReason = TextObject.GetEmpty()`；造 `ClanBanner` / `LordFace`；读 `Relation` / `Strength` / `ShipCount`；算距离与时间；条件性算 `Cost`；存 `Clan` / `IsMainHero`；调 `UpdateEligibility()`；设 `IsTransferDisabled`；调 `RefreshValues()`。

## 心智模型

**把它想成「一行带缓存的计算结果」：构造时把距离、花费、资格一次性算完存进绑定属性，之后所有属性变更只是把外部状态同步进来，而不是重算。**

**第一步，理解三个只读属性的分工。**

- `public float DistInTime { get; }` —— 从世界坐标算出的**预计到达时间（向上取整）**，排序键。构造时算一次。
- `public float _distance { get; }` —— **距离本身**。名字带下划线前缀却是个 `public` 属性，这是 1.3.0 源码里的实际写法。
- `public Clan Clan { get; }` —— 领袖所属氏族，给 `ItemClanComparer` 用。

第二步是关键的距离计算，它的两个分支完全不同：

```csharp
this._distance = DistanceHelper.FindClosestDistanceFromMobilePartyToMobileParty(
    this.Party, MobileParty.MainParty, this.Party.NavigationCapability);
if (MobileParty.MainParty.IsCurrentlyAtSea && !this.Party.HasNavalNavigationCapability)
{
    this.DistInTime = 2.1474836E+09f;
}
else
{
    this.DistInTime = (float)MathF.Ceiling(this._distance / this.Party.Speed);
    this.Cost = armyManagementCalculationModel.CalculatePartyInfluenceCost(MobileParty.MainParty, mobileParty);
}
```

**玩家在海上而目标队伍没有航海能力时，`DistInTime` 被设成 `float.MaxValue`，而且 `Cost` 不会被赋值**——`Cost` 保持字段初值 `-1`（第 614 行 `private int _cost = -1;`）。**这就是「不可达的队伍花费是 -1」这条隐含契约**：加入一支你到不了的队伍不会被收影响力。同理 `Strength` / `ShipCount` 的初值也是 `-1`（第 601、605 行）。

**第三步，理解 `ExecuteAction()` 的对称性：**

```csharp
public void ExecuteAction()
{
    if (this.IsInCart) { this.OnRemove(); return; }
    this.OnAddToCart();
}
```

一个方法两个方向。`IsInCart` 是**唯一的判据**——它不是本类自己维护的，是宿主 [ArmyManagementVM](../ArmyManagementVM) 的 `OnAddToCart` / `OnRemove` 写的。`OnRemove` 里有 `if (!this.IsMainHero)` 保护（**玩家自己的队伍永远移不出去**），`OnAddToCart` 则是「先刷资格 → 只有 `IsEligible` 才真的回调 → 再刷一次资格」。

**第四步，理解 `UpdateEligibility()` 的三条出口：**

```csharp
public void UpdateEligibility()
{
    GameModels models = Campaign.Current.Models;
    ArmyManagementCalculationModel model = (models != null) ? models.ArmyManagementCalculationModel : null;
    bool flag = true;
    this._eligibilityReason = TextObject.GetEmpty();
    if (!this.CanJoinBackWithoutCost)
    {
        if (this.IsInCart && !this.IsAlreadyWithPlayer) { flag = false; this._eligibilityReason = ...; }
        else
        {
            flag = model.CheckPartyEligibility(this.Party, out this._eligibilityReason);
            if (flag) { flag = CampaignUIHelper.GetMapScreenActionIsEnabledWithReason(out this._eligibilityReason); }
        }
    }
    this.IsEligible = flag;
}
```

`CanJoinBackWithoutCost` 是 `public bool` 字段（**不是属性**），由宿主在 `OnAddToCart` / `OnRemove` 里写。**它为 true 时整个判断被短路成「有资格」**——这正是「本来就在军队里、被移出后再加回来不收钱」的路径。失败原因 `_eligibilityReason` 是 `private`，只能通过 `ExecuteBeginHint()` 看到。

## 关键成员

### 只读计算属性（无 setter，构造时算一次）

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `DistInTime` | `public float DistInTime { get; }` | 预计到达时间（秒，`MathF.Ceiling(_distance / Speed)`）。**玩家在海上而目标无航海能力时被写成 `float.MaxValue`。** 排序键：[ArmyManagementSortControllerVM](../ArmyManagementSortControllerVM).`ItemDistanceComparer` 比它。 |
| `_distance` | `public float _distance { get; }` | 到玩家的距离（`DistanceHelper` 求最近可航路线，不是直线）。**名字带下划线却是 `public` 属性**——写代码时别按字段去访问，也别改。 |
| `Clan` | `public Clan Clan { get; }` | 领袖的氏族。`ItemClanComparer` 用 `Clan.Name.ToString()` 比。 |
| `Party` | `public readonly MobileParty Party` | **public 字段，不是属性**。所有 `Execute*` 方法与宿主的回调用它拿真实队伍。 |
| `CanJoinBackWithoutCost` | `public bool CanJoinBackWithoutCost` | **public 字段**。`UpdateEligibility()` 的短路开关，由宿主写。 |

### 五个逻辑方法

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `RefreshValues` | `public override void RefreshValues()` | 重算三处文案：`InArmyText`（`str_in_army`）、`LeaderNameText`、`NameText`、`DistanceText`。**距离文案对 `IsMainParty` 特判**：主队伍的距离文案不会被刷新（保持空）。距离在 0~5 之间显示 `str_nearby`，否则走 `CampaignUIHelper.GetPartyDistanceByTimeTextAbbreviated((int)_distance, Speed)`。 |
| `ExecuteAction` | `public void ExecuteAction()` | 加/移的唯一入口。**按 `IsInCart` 分流**：`true` → `OnRemove()`（内部 `if (!IsMainHero)`），`false` → `OnAddToCart()`（内部先 `UpdateEligibility()`、`IsEligible` 才回调、再 `UpdateEligibility()`）。**无返回值；两个回调为 null 时静默无效。** |
| `ExecuteSetFocused` | `public void ExecuteSetFocused()` | 设 `IsFocused = true`，然后调 `_onFocus(this)`。回调为 null 时只改属性。 |
| `ExecuteSetUnfocused` | `public void ExecuteSetUnfocused()` | 设 `IsFocused = false`，然后调 `_onFocus(null)`。**注意它传的是 `null` 而不是 `this`**——宿主靠这个区分聚焦与取消聚焦。 |
| `UpdateEligibility` | `public void UpdateEligibility()` | 重算 `IsEligible` 与私有的 `_eligibilityReason`。**`CanJoinBackWithoutCost` 为 true 时直接短路成 `true`**。失败原因通过 `ExecuteBeginHint()` 弹给玩家。**无返回值，调用方读 `IsEligible`。** |

### 提示与百科方法

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `ExecuteBeginHint` | `public void ExecuteBeginHint()` | 若 `IsEligible` 为 false，`MBInformationManager.ShowHint(_eligibilityReason.ToString())` 只弹一行原因；否则 `InformationManager.ShowTooltip(typeof(MobileParty), new object[] { Party, true, true })` 弹队伍浮窗。**两个分支互斥，且都不返回。** |
| `ExecuteBeginClanHint` | `public void ExecuteBeginClanHint()` | 弹氏族浮窗，参数是 `Party.ActualClan`（**不是 `Clan` 属性**，两者可能不同：氏族可以在队伍里但实际归属另有其人）。 |
| `ExecuteEndHint` | `public void ExecuteEndHint()` | 单句 `MBInformationManager.HideInformations()`。 |
| `ExecuteOpenEncyclopedia` | `public void ExecuteOpenEncyclopedia()` | `Campaign.Current.EncyclopediaManager.GoToLink(Party.LeaderHero.EncyclopediaLink)`。**判空只判 `LeaderHero != null`**，`Campaign.Current.EncyclopediaManager` 本身不判。 |
| `ExecuteOpenClanEncyclopedia` | `public void ExecuteOpenClanEncyclopedia()` | 同上，但链接指向 `Party.ActualClan.EncyclopediaLink`。 |

### 绑定属性（节选，说明它们各自绑哪个字段）

`RemoveInputKey`（`InputKeyItemVM`，宿主用 `SetRemoveInputKey(HotKey)` 灌）、`IsEligible`、`IsInCart`（宿主写的核心状态）、`IsMainHero`、`Strength`（`Party.Party.NumberOfHealthyMembers`）、`ShipCount`（`Party.Ships.Count`，**setter 里顺带写 `HasShip = (_shipCount > 0)`**）、`HasShip`、`DistanceText`、`InArmyText`、`Cost`（**setter 里顺带 `UpdateIsCostRelevant()`**）、`IsCostRelevant`、`Relation`（`ArmyManagementCalculationModel.GetPartyRelation(LeaderHero)`，字段初值 `-102`）、`ClanBanner`（`new BannerImageIdentifierVM(mobileParty.LeaderHero.ClanBanner, true)`）、`LordFace`（`CampaignUIHelper.GetCharacterCode(LeaderHero.CharacterObject, false)`）、`NameText`、`IsAlreadyWithPlayer`、`IsTransferDisabled`（构造时 `IsMainHero || PlayerSiege.PlayerSiegeEvent != null`）、`LeaderNameText`、`IsFocused`。

## 真实示例

宿主是唯一持有者；`_mainPartyItem` 那一例最能说明「三个回调全传 null」是什么意思：

```csharp
using System;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Siege;
using TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement;
using TaleWorlds.Core;
using TaleWorlds.Library;

// 我的军队管理行构造器：照 ArmyManagementVM 的形状，
// 但只暴露"玩家自己的队伍"这一行，回调全传 null。
public class MyMainPartyRow
{
    public ArmyManagementItemVM Build()
    {
        var row = new ArmyManagementItemVM(null, null, null, Hero.MainHero.PartyBelongedTo)
        {
            // 这四个字段就是官方对 _mainPartyItem 的设置
            IsAlreadyWithPlayer = true,
            IsMainHero = true,
            IsInCart = true
        };

        // 回调全为 null 的后果：ExecuteAction 会走 OnAddToCart 分支
        // （IsInCart 为 true 所以其实走 OnRemove），而 OnRemove 有
        // if (!this.IsMainHero) 保护 —— 所以这一行怎么点都不会移出。
        // 提示仍可用，因为它不依赖那三个回调。
        row.ExecuteSetFocused();
        MBDebug.Print("主队伍行：兵力 " + row.Strength + " 距离 " + row.DistanceText);

        // 百科跳转也不依赖回调，判空只判 LeaderHero。
        row.ExecuteOpenEncyclopedia();
        return row;
    }
}
```

对**别的**队伍，构造器必须给三个回调，否则 `ExecuteAction()` / `ExecuteSetFocused()` 会静默失效（回调字段为 null 时源码是判空后 `return`，不抛也不记日志）。

## 风险与边界

- **`Cost` 在不可达时是 `-1`，不是 0。** 因为「玩家在海上 + 目标无航海能力」那个分支根本不赋值，`Cost` 保持字段初值 `-1`。同理 `Strength` / `ShipCount` 初值 `-1`。**任何拿 `Cost` 参与求和的代码都要先处理 `-1`。**
- **`DistInTime` 可能被写成 `float.MaxValue`（`2.1474836E+09f`）。** 排序时它会排到最远端；但如果你拿它做减法或除法，会溢出。
- **`Party` 与 `CanJoinBackWithoutCost` 是 public 字段，不是属性。** 字段不经 `OnPropertyChanged`，XML 绑定写它们不会通知 UI；`CanJoinBackWithoutCost` 的变化也不触发任何刷新。
- **`Cost` / `ShipCount` / `IsAlreadyWithPlayer` / `IsInCart` 四个 setter 各带副作用**（`UpdateIsCostRelevant()` / 写 `HasShip`）。**在对象初始化器里赋值会触发这些副作用**，`UpdateIsCostRelevant` 里读 `IsAlreadyWithPlayer` 时它可能还是默认值。
- **`_distance` 与 `DistInTime` 只算一次，构造之后永不更新。** 队伍移动了不影响它们。想刷新距离只能 new 一个新的。
- **`Relation` 的初值是 `-102`。** 这是「未计算」的哨兵值，来自 `ArmyManagementCalculationModel.GetPartyRelation`。构造器里它会被真值覆盖，但如果模型返回 -102 你无从区分。
- **`ExecuteBeginHint` 与 `ExecuteBeginClanHint` 弹的是两个不同对象。** 一个是 `MobileParty`，一个是 `ActualClan`——`Clan` 属性和 `ActualClan` 不一定相同。
- **百科方法不判 `Campaign.Current.EncyclopediaManager`。** 战役外调用会 NRE。
- **`IsTransferDisabled` 只在构造器里算一次**（`IsMainHero || PlayerSiege.PlayerSiegeEvent != null`）。**攻城战开始 / 结束后这一行不会自动变**，要变得 new 一个新的。
- **`ExecuteSetUnfocused` 传 `null` 给回调。** 宿主的 `OnFocus(ArmyManagementItemVM)` 因此要处理 null——1.3.0 官方是 `this.FocusedItem = focusedItem;`，直接把属性设成 null。
- **`UpdateEligibility` 里 `armyManagementCalculationModel` 可能为 null。** 源码写的是 `(models != null) ? models.ArmyManagementCalculationModel : null`，然后在 `else` 分支裸调 `model.CheckPartyEligibility(...)`——**`Campaign.Current.Models` 为 null 时 NRE**。

## 跨版本提示

**所属文件在五棵源码树里 15 个 public 签名完全相同**：1.3.0 为 685 行，1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 都是 **680 行**——少 5 行是 decompiled 排版差异（`MathF.Ceiling` 那段的换行等），**public API 表面一字未动**。

**跨版本风险集中在三个上游 API：**

- `DistanceHelper.FindClosestDistanceFromMobilePartyToMobileParty(MobileParty, MobileParty, float)`（[DistanceHelper](../../system/DistanceHelper)）——官方改导航模型时签名可能变；
- `ArmyManagementCalculationModel.CheckPartyEligibility(MobileParty, out TextObject)` 与 `CalculatePartyInfluenceCost(MobileParty, MobileParty)`（[ArmyManagementCalculationModel](../../campaign/ArmyManagementCalculationModel) 第 48、63 行）——**你覆写这个模型就会牵动这里**；
- `CampaignUIHelper.GetMapScreenActionIsEnabledWithReason(out TextObject)`（第 2224 行）——地图操作可用性的总闸。

**结论：本类的 21 个绑定属性与 5 个逻辑方法跨 1.3 → 1.5 完全稳定；风险在你覆写的模型层。**

## 依赖关系

- UI 底座：[ViewModel](../../core-extra/ViewModel) 提供 21 个属性的通知机制与 `ExecuteCommand` 派发
- 宿主与唯一持有者：[ArmyManagementVM](../ArmyManagementVM) 造行、填回调、写 `IsInCart` / `IsAlreadyWithPlayer` / `Cost` / `CanJoinBackWithoutCost`
- 排序：[ArmyManagementSortControllerVM](../ArmyManagementSortControllerVM) 的六个 `Item*Comparer` 读本类的 `DistInTime` / `Cost` / `Strength` / `ShipCount` / `LeaderNameText` / `Clan`；它的 `ItemComparerBase.ResolveEquality` 也用 `LeaderNameText`
- 资格与花费：[ArmyManagementCalculationModel](../../campaign/ArmyManagementCalculationModel)（`CheckPartyEligibility` / `CalculatePartyInfluenceCost` / `GetPartyRelation`）；地图可用性总闸在 [CampaignUIHelper](../CampaignUIHelper)
- 距离与坐标：[DistanceHelper](../../system/DistanceHelper) 求最近可航距离；[MobileParty](../../campaign/MobileParty) 提供 `NavigationCapability` / `HasNavalNavigationCapability` / `Speed` / `Ships` / `ActualClan`
- 攻城禁用：[PlayerSiege](../../campaign/PlayerSiege) 的 `PlayerSiegeEvent`
- 提示与百科：[InformationManager](../../core-extra/InformationManager) 与 [MBInformationManager](../../core-extra/MBInformationManager)；图标 [BannerImageIdentifierVM](../../core-extra/BannerImageIdentifierVM) / [CharacterImageIdentifierVM](../../core-extra/CharacterImageIdentifierVM)
- 桶首页：[viewmodel API 分区](../)
