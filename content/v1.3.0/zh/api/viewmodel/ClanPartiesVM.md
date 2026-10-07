---
title: "ClanPartiesVM"
description: "ClanPartiesVM 的自动生成类参考。"
---
# ClanPartiesVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanPartiesVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanPartiesVM.cs`

## 概述

`ClanPartiesVM` 是家族管理界面里的“部队”页签：一个 `ViewModel` 子类（`ClanPartiesVM.cs:21`），命名空间是 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`。它把玩家氏族的三类队伍分栏展示——野战部队（`Parties`）、商队（`Caravans`）、驻军（`Garrisons`）——每一栏都是一个 `MBBindingList<ClanPartyItemVM>`。

它绑定的是**玩家氏族**，而且是写死的：构造函数里 `this._faction = Hero.MainHero.Clan`（`ClanPartiesVM.cs:42`），字段是 `private readonly Clan`。构造函数签名是 `ClanPartiesVM(Action onExpenseChange, Action<Hero> openPartyAsManage, Action onRefresh, Action<ClanCardSelectionInfo> openCardSelectionPopup)`（`ClanPartiesVM.cs:34`），它还会从 `Campaign.Current` 上取两个行为：`IDisbandPartyCampaignBehavior` 和 `ITeleportationCampaignBehavior`，并把三个列表交给 `ClanPartiesSortControllerVM` 做排序。

真正的数据在 `RefreshPartiesList()`（`ClanPartiesVM.cs:105`）里一次性重建：先清空三个列表并 `SortController.ResetAllStates()`（`ClanPartiesVM.cs:110`），再遍历 `_faction.WarPartyComponents`，其中主玩家的队伍被 `Insert(0, …)` 强行放到第一位并标记 `ClanPartyItemVM.ClanPartyType.Main`（`ClanPartiesVM.cs:115`）；商队来自 `_faction.Heroes.SelectMany(h => h.OwnedCaravans)` 并按 MobileParty 去重，驻军来自 `_faction.Settlements.Where(a => a.Town != null)` 的 `Town.GarrisonParty`。最后它顺手做了一件事：把 `Parties` 的第一个条目设为选中（`GetDefaultMember()`）。

## 心智模型

把它当成**“一个只读投影 + 一组由外部注入的回调”**。它自己不创建也不删除队伍（除了 `CreateNewClanParty` 那一条路径），它只是读 `Clan` 并把结果铺到三个绑定列表里。所有副作用都通过构造函数传进来的四个委托转出去。

几个具体到会咬人的点：

- **构造函数里就已经建好并刷新了一次。** 它会先 `RefreshPartiesList()` 再 `RefreshValues()`。所以拿到实例时列表已经填充，不要以为还需要手动调一次。
- **两个刷新方法的调用顺序会互相覆盖。** `RefreshValues()`（`ClanPartiesVM.cs:59`）把 `GarrisonsText`/`CaravansText` 直接设成裸文本 `GameTexts.FindText("str_clan_garrisons", null).ToString()`（`ClanPartiesVM.cs:67`、`ClanPartiesVM.cs:68`）；而 `RefreshPartiesList()` 会先 `GameTexts.SetVariable("CURRENT", count)`（`ClanPartiesVM.cs:154`）再把带计数的版本 `.ToString()` 出来（`ClanPartiesVM.cs:158`）。`.ToString()` 是**当场解析**的，所以谁后跑谁赢：在 `RefreshPartiesList()` 之后调 `RefreshValues()`，标题里的数量就没了。而 `RefreshValues()` 自己又会在末尾调一次 `RefreshPartiesList()`（`ClanPartiesVM.cs:69`），把顺序又绕回来。想要带计数的标题，最后一次调用必须是 `RefreshPartiesList()`。
- **`GameTexts.SetVariable` 是全局的。** `CURRENT` 和 `LIMIT` 写在全局文本变量上，两个同时存活的 `ClanPartiesVM` 会互相覆盖。
- **`SelectParty` 找不到驻军。** 它只遍历 `Parties`（`ClanPartiesVM.cs:235`）和 `Caravans`（`ClanPartiesVM.cs:243`），完全没扫 `Garrisons`。传入一个驻军的 `PartyBase` 不会报错，只是静默无反应。
- **`CurrentSelectedParty` 的 setter 有副作用。** 它会顺带写 `IsAnyValidPartySelected = (value != null)`（`ClanPartiesVM.cs:988`）。如果你自己 set 这个属性，就同时改掉了另一个公开属性的值。
- **三个弹窗方法在没有回调时静默返回。** `OnShowNewPartyPopup`（`ClanPartiesVM.cs:286`）和 `OnShowChangeLeaderPopup`（`ClanPartiesVM.cs:447`）都会先判 `_openCardSelectionPopup == null` 就 return。构造时不传这个委托，“新建部队”和“更换队长”两个按钮就是死的，没有任何报错。
- **创建队伍时会直接扣你的钱。** `CreateNewClanParty` 先 `MobilePartyHelper.CreateNewClanMobileParty(newLeader, this._faction)`（`ClanPartiesVM.cs:437`），如果新队长金币不够，就 `GiveGoldAction.ApplyBetweenCharacters(Hero.MainHero, newLeader, partyGoldLowerThreshold - newLeader.Gold, false)` 从**玩家角色**身上扣（`ClanPartiesVM.cs:440`），最后无条件调 `this._onRefresh()`（`ClanPartiesVM.cs:443`）——这个委托也是不判空的。
- **可选技能列表是写死的四项。** `_leaderAssignmentRelevantSkills` 固定为 `DefaultSkills.Engineering`、`Steward`、`Scouting`、`Medicine`（`ClanPartiesVM.cs:1036` 起），队长/新首领卡片里显示的技能就这四个；mod 想加第五项得改这个 private 字段。
- **费用与收入的口径不同。** `RefreshTotalExpense()`（`ClanPartiesVM.cs:86`）对 `Parties ∪ Garrisons ∪ Caravans` 中 `ShouldPartyHaveExpense` 的条目求和，而 `TotalIncome` 只对 `Caravans` 求和（`ClanPartiesVM.cs:101`）。商队以外的队伍不贡献收入。

## 怎么用

### 怎么拿到它

它由家族管理界面自己创建，mod 一般不 new。典型用法是在你自己的 `CampaignBehaviorBase` 里通过菜单回调拿到当前打开的 `ClanVM`，从它下面找这个页签；或者自己构造一个并注入四个回调（`ClanPartiesVM.cs:34`）。无论哪种，`_faction` 都会固定成玩家氏族（`ClanPartiesVM.cs:42`）。

### 典型用法

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Party.PartyComponents;
using TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories;

public class ClanPartiesPanel
{
    private readonly ClanPartiesVM _vm;

    public ClanPartiesPanel()
    {
        _vm = new ClanPartiesVM(
            onExpenseChange: () => { /* 通知父界面刷新总开支 */ },
            openPartyAsManage: hero => { /* 打开队伍管理 */ },
            onRefresh: RefreshFromCampaign,
            // 不传这个委托，OnShowNewPartyPopup / OnShowChangeLeaderPopup 会静默返回。
            openCardSelectionPopup: info => { /* 弹出选人卡片 */ });

        // 构造函数里已经建过一遍列表，这里按需重建。
        _vm.RefreshPartiesList();
    }

    private void RefreshFromCampaign()
    {
        _vm.RefreshTotalExpense();

        // SelectParty 只扫 Parties 和 Caravans，驻军不在搜索范围内。
        PartyBase main = MobileParty.MainParty.Party;
        _vm.SelectParty(main);

        // 注意顺序：RefreshValues 里的 RefreshPartiesList 会重新算计数标题，
        // 但如果你在它之后再调 RefreshValues，计数会被裸文本覆盖。
        _vm.RefreshValues();

        // New leader list is fixed to Engineering / Steward / Scouting / Medicine.
        var leader = _vm.CurrentSelectedParty?.LeaderMember?.HeroObject;
    }

    public void CreateParty()
    {
        // CanCreateNewParty 与提示文案在 RefreshPartiesList 里算好，存在 ActionHint 里。
        if (!_vm.CanCreateNewParty)
        {
            return;
        }

        // 内部会在队长金币不足时从 Hero.MainHero 扣钱。
        _vm.ExecuteCreateNewParty();
    }
}
```

### 最容易踩的坑

把 `RefreshValues()` 当成“带计数标题”的最终刷新。它在 `:67`、`:68` 用裸的 `str_clan_garrisons`/`str_clan_caravans` 覆盖了 `RefreshPartiesList()` 在 `:154`-`:159` 刚用 `GameTexts.SetVariable("CURRENT", …)` 算出来的带数量标题，而 `.ToString()` 是当场解析的，不会等你下次刷新。如果你只看到标题里的数字消失或变成上一次的值，就把最后一次调用改成 `RefreshPartiesList()`。

## 主要属性

| Name | Signature |
|------|-----------|
| `TotalExpense` | `public int TotalExpense { get; }` |
| `TotalIncome` | `public int TotalIncome { get; }` |
| `CreateNewPartyActionHint` | `public HintViewModel CreateNewPartyActionHint { get; set; }` |
| `IsAnyValidPartySelected` | `public bool IsAnyValidPartySelected { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `CaravansText` | `public string CaravansText { get; set; }` |
| `GarrisonsText` | `public string GarrisonsText { get; set; }` |
| `PartiesText` | `public string PartiesText { get; set; }` |
| `MoraleText` | `public string MoraleText { get; set; }` |
| `LocationText` | `public string LocationText { get; set; }` |
| `CreateNewPartyText` | `public string CreateNewPartyText { get; set; }` |
| `SizeText` | `public string SizeText { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `CanCreateNewParty` | `public bool CanCreateNewParty { get; set; }` |
| `Parties` | `public MBBindingList<ClanPartyItemVM> Parties { get; set; }` |
| `Caravans` | `public MBBindingList<ClanPartyItemVM> Caravans { get; set; }` |
| `Garrisons` | `public MBBindingList<ClanPartyItemVM> Garrisons { get; set; }` |
| `CurrentSelectedParty` | `public ClanPartyItemVM CurrentSelectedParty { get; set; }` |
| `SortController` | `public ClanPartiesSortControllerVM SortController { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 ClanPartiesVM 实例
ClanPartiesVM clanPartiesVM = ...;
clanPartiesVM.RefreshValues();
```

### RefreshTotalExpense
`public void RefreshTotalExpense()`

**用途 / Purpose:** 使 total expense 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 ClanPartiesVM 实例
ClanPartiesVM clanPartiesVM = ...;
clanPartiesVM.RefreshTotalExpense();
```

### RefreshPartiesList
`public void RefreshPartiesList()`

**用途 / Purpose:** 使 parties list 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 ClanPartiesVM 实例
ClanPartiesVM clanPartiesVM = ...;
clanPartiesVM.RefreshPartiesList();
```

### ExecuteCreateNewParty
`public void ExecuteCreateNewParty()`

**用途 / Purpose:** 执行 create new party 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ClanPartiesVM 实例
ClanPartiesVM clanPartiesVM = ...;
clanPartiesVM.ExecuteCreateNewParty();
```

### SelectParty
`public void SelectParty(PartyBase party)`

**用途 / Purpose:** 调用 SelectParty 对应的操作。

```csharp
// 先通过子系统 API 拿到 ClanPartiesVM 实例
ClanPartiesVM clanPartiesVM = ...;
clanPartiesVM.SelectParty(party);
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ClanPartiesVM 实例
ClanPartiesVM clanPartiesVM = ...;
clanPartiesVM.OnFinalize();
```

### OnShowNewPartyPopup
`public void OnShowNewPartyPopup()`

**用途 / Purpose:** 在 show new party popup 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ClanPartiesVM 实例
ClanPartiesVM clanPartiesVM = ...;
clanPartiesVM.OnShowNewPartyPopup();
```

### OnShowChangeLeaderPopup
`public void OnShowChangeLeaderPopup()`

**用途 / Purpose:** 在 show change leader popup 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ClanPartiesVM 实例
ClanPartiesVM clanPartiesVM = ...;
clanPartiesVM.OnShowChangeLeaderPopup();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ClanPartiesVM clanPartiesVM = ...;
clanPartiesVM.RefreshValues();
```

## 参见

- [本区域目录](../)
- [ClanPartyItemVM](../ClanPartyItemVM)
- [ClanPartiesSortControllerVM](../ClanPartiesSortControllerVM)
- [Clan](../../campaign/Clan)