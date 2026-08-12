---
title: "PartyComponent"
description: "定义一支 MobileParty 在战役地图上的“行为身份”：它是谁的部队、叫什么名字、归属哪个据点，并提供工资上限、导航能力与换将等行为的统一入口。"
---
# PartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public abstract class PartyComponent`  
**Base:** 无（抽象基类，直接继承自 `System.Object`）  
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/PartyComponent.cs`

## 概述

`PartyComponent` 是战役地图上**每一支 `MobileParty` 都挂着的“身份牌”**。它不直接存兵、不跑 AI，而是回答三件关于这支队伍“是什么”的事：

- **归属**：这支队伍属于哪个英雄 / 哪个家族 / 哪个据点（`PartyOwner`、`HomeSettlement`、`Leader`）。
- **名字**：地图上显示的队伍名（`Name`、`GetDefaultComponentBanner`）。
- **能力边界**：能付多少工资（`WagePaymentLimit`）、能不能走海路（`CanHaveNavalNavigationCapability`）。

你几乎不会自己 `new PartyComponent()`。Banerlord 用它的具体子类来区分一支队伍到底是领主的野战军、商队、村庄运输队、驻军还是强盗：`WarPartyComponent`、`CaravanPartyComponent`、`VillagerPartyComponent`、`GarrisonPartyComponent`、`BanditPartyComponent`、`PatrolPartyComponent` 都继承自它。对这些子类做判断时，先拿到 `PartyComponent` 再向下转型，通常比用 `is`/类型判断更稳。

## 心智模型

把 `PartyComponent` 当成**“队伍的身份卡 + 行为钩子集合”**，而不是一个独立实体：

- 它**由 `MobileParty` 持有**，生命周期跟 `MobileParty` 走：`MobileParty.CreateParty(stringId, component)` 时通过 `Create(MobileParty)` 把自身绑上去，`MobileParty.SetPartyComponent(...)` 可整体替换组件；队伍被销毁时走 `Finish()`。
- 它不是 `MBObjectBase` 子类，**没有 `StringId`**，也没有自己的“存在感”——它只在 `MobileParty.PartyComponent` 这条引用上活着。
- 抽象成员（`PartyOwner`、`Name`、`HomeSettlement`、`GetDefaultComponentBanner`）必须由子类实现；基类只给了一组默认行为（如 `WagePaymentLimit` 默认取 `PartyWageModel.MaxWagePaymentLimit`、`Leader` 默认 `null`）。
- 内部有三条受保护的生命周期钩子 `OnMobilePartySetOnCreation` / `OnInitialize` / `OnFinalize`，子类（如 `GarrisonPartyComponent`、`CaravanPartyComponent`）用它来登记到据点、加入家族的 `WarParty` 列表等。**不要手动调用 `Create`/`Initialize`/`Finish`**——它们由 `MobileParty` 在创建、读档、销毁时驱动。
- 层（Layer）= **Campaign**。它只在战役地图语义里有意义；进入战斗场景后，与之对应的是短命的 `Agent`，而不是这个组件。

## 如何获取 PartyComponent

```csharp
using TaleWorlds.CampaignSystem.Party.PartyComponents;

// 主玩家队伍的身份卡
PartyComponent comp = MobileParty.MainParty.PartyComponent;

// 或者直接用具体子类的强类型访问器
WarPartyComponent war = MobileParty.MainParty.WarPartyComponent;
CaravanPartyComponent caravan = someCaravan.CaravanPartyComponent;

// 遍历世界所有队伍，按组件类型分流
foreach (MobileParty party in MobileParty.All)
{
    PartyComponent c = party.PartyComponent;
    if (c is WarPartyComponent) { /* 领主/家族野战军 */ }
    else if (c is GarrisonPartyComponent) { /* 驻军 */ }
}
```

> 注意：`MobileParty.Party` 返回的是 `PartyBase`（兵员花名册与队伍数值），**不是** `PartyComponent`。拿到组件要用 `MobileParty.PartyComponent` 或 `WarPartyComponent` 这类强类型属性。

## 何时用 / 何时不要用

**用它：**
- 想读取一支队伍“是谁的”（`PartyOwner`）、显示名（`Name`）、归属据点（`HomeSettlement`）而不关心它内部有多少兵。
- 想按队伍类型分流逻辑（领主军 / 商队 / 驻军 / 强盗），用 `party.PartyComponent is XxxPartyComponent` 判断。
- 想改工资上限或换队长：优先走 `SetWagePaymentLimit` / `ChangePartyLeader`，让组件和事件一起更新。

**别用它：**
- 不要 `new PartyComponent()` 或 `new` 任意抽象子类。新建一支队伍走 `MobileParty.CreateParty(id, new XxxPartyComponent(...))`，转换已有队伍走 `MobileParty.SetPartyComponent(...)`（如 `CaravanPartyComponent.ConvertPartyToCaravanParty`）。
- 不要在组件里直接写 `MobileParty.MemberRoster` 来“换队长”。要改队长用 `PartyComponent.ChangePartyLeader(newLeader)`（或它的包装 `MobileParty.ChangePartyLeader`），它会校验新队长是否在名册中并广播 `OnPartyLeaderChanged`。
- 不要把 `SetWagePaymentLimit` 当通用 setter 用。基类的实现是 `Debug.FailedAssert("Invalid set wage payment limit function usage!")`——直接调基类只会触发断言失败；只有真正重写了它的子类（如 `GarrisonPartyComponent`）才有意义。改据点驻军工资应改 `Settlement` 的 `GarrisonWagePaymentLimit`，由组件转写。

## 依赖图

- 上游：[MobileParty](../../campaign/MobileParty/) 创建并持有唯一的 `PartyComponent`（经 `CreateParty` / `SetPartyComponent`）；[Campaign](../../campaign/Campaign/) 与 `CampaignObjectManager` 在组件变更前后触发回调。
- 同类具体实现（按用途）：[WarPartyComponent](../../campaign-ext/WarPartyComponent/)（家族/领主野战军）、[CaravanPartyComponent](../../campaign-ext/CaravanPartyComponent/)（商队）、[VillagerPartyComponent](../../campaign-ext/VillagerPartyComponent/)（村庄运输队）、[GarrisonPartyComponent](../../campaign-ext/GarrisonPartyComponent/)（驻军）、[BanditPartyComponent](../../campaign-ext/BanditPartyComponent/)（强盗）、[PatrolPartyComponent](../../campaign-ext/PatrolPartyComponent/)（巡逻队）。
- 下游系统：[PartyBase](../../campaign/PartyBase/) 提供兵员/数值；[PartySizeLimitModel](../../campaign-ext/PartySizeLimitModel/) 按组件类型计算队伍规模上限；[PartyWageModel](../../campaign-ext/PartyWageModel/) 决定 `WagePaymentLimit` 的默认值；[CampaignEventDispatcher](../../campaign-ext/CampaignEventDispatcher/) 在换队长时广播 `OnPartyLeaderChanged`；[Clan](../../campaign/Clan/) 与 [Settlement](../../campaign/Settlement/) 是 `PartyOwner` / `HomeSettlement` 的来源；进入 [MapEvent](../../campaign-ext/MapEvent/) 时组件会参与战斗判定。

## 风险

- **换队长校验失败不抛异常**：`ChangePartyLeader` 在新队长不在 `MemberRoster` 里时只触发 `Debug.FailedAssert` 并**直接 return**，队长不会变、也没有事件。调用前务必确认 `newLeader.CharacterObject` 已在队伍名册中（用 `AddHeroToPartyAction.Apply` 加人后再换）。
- **`SetWagePaymentLimit` 基类是陷阱**：基类实现直接断言失败；只对真正重写了它的组件（如 `GarrisonPartyComponent`）调用才有效，其余情况应改对应的据点/家族设置。
- **读档后才 `OnInitialize`**：组件在 `CreateParty` 时先走 `OnMobilePartySetOnCreation`（首次创建），读档反序列化后走 `OnInitialize`。需要“每次进入存档都重新登记”的逻辑放在 `OnInitialize`，需要“首次生成”的逻辑放在 `OnMobilePartySetOnCreation`——放错钩子会导致返回主菜单再读档时重复登记或漏登记。
- **`null` 窗口期**：`MobileParty.AllPartiesWithoutPartyComponent` 包含尚未挂载组件的队伍；在这些队伍上访问 `party.PartyComponent` 会得到 `null`。遍历 `MobileParty.All` 后对组件做操作前先判空。
- **改名要清缓存**：`Name` 在很多子类（如 `CaravanPartyComponent`、`GarrisonPartyComponent`）是带缓存的。修改了影响名字的来源（如商队的 `Owner`、据点归属）后，必须调用 `ClearCachedName()`，否则地图上显示的还是旧名。

## 成员说明

### 身份与归属

#### `public MobileParty MobileParty { get; private set; }`
组件绑定的那支 `MobileParty`。在 `Create`/`Initialize` 时由 `MobileParty` 赋值，之后只读。其余所有成员几乎都通过它取数据。

#### `public PartyBase Party => MobileParty.Party;`
队伍的数值/花名册入口，等价于 `MobileParty.Party`。拿到组件后想读兵员数、金币、规模上限，走这里。

#### `public abstract Hero PartyOwner { get; }`
这支队伍名义上的主人（如商队的主人、驻军的家族首领）。**抽象**，子类必须实现——`GarrisonPartyComponent` 返回 `Settlement.OwnerClan.Leader`，`CaravanPartyComponent` 返回 `Owner`。

#### `public abstract TextObject Name { get; }`
地图上显示的队伍名。**抽象**，多数子类带缓存，改名后需 `ClearCachedName()`。

#### `public abstract Settlement HomeSettlement { get; }`
队伍的“老家”据点（商队/驻军的出生据点）。**抽象**。

#### `public virtual Hero Leader { get; }`
当前队长。基类返回 `null`；`CaravanPartyComponent` 等会返回真实领队伍的英雄。想拿“这支队伍的领袖英雄”优先读它，而不是 `MobileParty.LeaderHero`（后者是带兵的英雄，`Leader` 才是组件语义上的队长）。

#### `public Banner Banner => MobileParty.Banner;`
队伍的旗帜，直接透传 `MobileParty.Banner`。

#### `public abstract Banner GetDefaultComponentBanner()`
组件“默认该用哪面旗”的来源（如 `WarPartyComponent` 返回 `Clan.Banner`、`GarrisonPartyComponent` 返回 `Settlement.Banner`）。地图旗帜初始化时 `MobileParty` 会优先调用它。

### 容量、经济与导航

#### `public virtual int WagePaymentLimit => Campaign.Current.Models.PartyWageModel.MaxWagePaymentLimit;`
这支队伍允许支付的最高工资。基类默认取 `PartyWageModel` 的全局上限；`GarrisonPartyComponent` 重写为返回 `Settlement.GarrisonWagePaymentLimit`。它是只读的“当前上限”，要改它走 `SetWagePaymentLimit`。

#### `public virtual void SetWagePaymentLimit(int newLimit)`
设置工资上限。**基类实现是 `Debug.FailedAssert("Invalid set wage payment limit function usage!")`——直接调基类只会失败**。只有重写了它的子类（如 `GarrisonPartyComponent`，内部转写到 `Settlement.SetGarrisonWagePaymentLimit`）才应使用。

#### `public virtual bool CanHaveNavalNavigationCapability => MobileParty.ActualClan?.HasNavalNavigationCapability ?? false;`
这支队伍是否具备海上航行能力。基类按所属家族判断；`CaravanPartyComponent` 重写为按 `MobileParty.HasLandNavigationCapability` 取反（有船则能海航）。

#### `public virtual bool CanHaveLandNavigationCapability => true;`
是否具备陆上航行能力，基类恒为 `true`。

### 行为开关

#### `public virtual bool AvoidHostileActions => false;`
该组件是否应避免主动敌对行为（如商队、驻军默认不参与主动攻击）。影响 AI 决策。基类默认 `false`。

### 生命周期钩子（子类作者相关）

#### `public void ChangePartyLeader(Hero newLeader)`
**公开、可安全调用**。换队长：先校验 `newLeader` 是否在名册中（不在则断言失败并放弃），再调 `OnChangePartyLeader`；若新队长为 `null` 且队伍不在 `MapEvent` 中，自动 `SetMoveModeHold()`；队长确实变化时广播 `CampaignEventDispatcher.Instance.OnPartyLeaderChanged(party, oldLeader)`。

#### `protected virtual void OnChangePartyLeader(Hero newLeader)`
换队长的子类扩展点，真正把 `_leader` 字段改成新值（见 `CaravanPartyComponent`）。普通模组一般不直接碰它。

#### `public virtual void ClearCachedName()`
清空 `Name` 的缓存，下次读取 `Name` 时重新生成。基类是空操作；带缓存的子类（商队、驻军）在这里把 `_cachedName` 置 `null`。

#### `public virtual void GetMountAndHarnessVisualIdsForPartyIcon(PartyBase party, out string mountStringId, out string harnessStringId)`
返回地图图标上坐骑/鞍具的视觉 id（如 `CaravanPartyComponent` 按文化返回 `camel`/`mule` 及对应鞍具）。基类写空串。纯展示用，不影响逻辑。

#### `protected virtual void OnMobilePartySetOnCreation()`
**首次创建**队伍时由 `Create(MobileParty)` 调用（如 `CaravanPartyComponent` 在这里初始化兵员、`GarrisonPartyComponent` 在这里禁 AI）。只应在“新建”分支放逻辑。

#### `protected virtual void OnInitialize()`
**读档反序列化后**由 `Initialize(MobileParty)` 调用（如 `WarPartyComponent` 在这里 `Clan.OnWarPartyAdded`、`CaravanPartyComponent` 把自己加进 `Owner.OwnedCaravans`）。需要“每次进档都重建关联”的逻辑放这里。

#### `protected virtual void OnFinalize()`
队伍销毁时由 `Finish()` 调用（如 `WarPartyComponent.OnWarPartyRemoved`、`GarrisonPartyComponent` 把据点的 `GarrisonPartyComponent` 引用置空）。用于解绑、反注册。

### 委托

#### `public delegate void OnPartyComponentCreatedDelegate(MobileParty mobileParty);`
“某支队伍的组件已创建”的回调签名。引擎内部用它在组件挂上 `MobileParty` 时通知相关系统刷新状态。

## 典型用法示例

### 示例 1：读取玩家队伍的归属与导航能力

```csharp
using TaleWorlds.CampaignSystem.Party.PartyComponents;

PartyComponent comp = MobileParty.MainParty.PartyComponent;
if (comp != null)
{
    Hero owner = comp.PartyOwner;          // 这支队伍名义上的主人
    TextObject name = comp.Name;           // 地图显示名
    Settlement home = comp.HomeSettlement; // 老家据点
    bool canSail = comp.CanHaveNavalNavigationCapability;

    // 按组件类型分流
    if (comp is WarPartyComponent war)
    {
        Clan clan = war.Clan; // 领主/家族野战军归属的家族
    }
}
```

### 示例 2：安全地给商队换队长

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Party.PartyComponents;

CaravanPartyComponent caravan = someCaravan.CaravanPartyComponent;
Hero newLeader = /* 某个已经在这支商队名册里的英雄 */;

// 先确认新队长已在队伍名册中，否则 ChangePartyLeader 只会断言失败且不换人
if (newLeader != null && someCaravan.MemberRoster.Contains(newLeader.CharacterObject))
{
    caravan.ChangePartyLeader(newLeader); // 会广播 OnPartyLeaderChanged
}
else if (newLeader != null)
{
    // 不在名册中：先用 Action 把它加进队伍，再加为队长
    AddHeroToPartyAction.Apply(newLeader, someCaravan, isLeader: true);
}
```

### 示例 3：修改据点驻军工资上限

```csharp
using TaleWorlds.CampaignSystem.Party.PartyComponents;

GarrisonPartyComponent garrison = someSettlement.Town.GarrisonPartyComponent;
if (garrison != null)
{
    // 不要直接调基类的 SetWagePaymentLimit（会断言失败）。
    // GarrisonPartyComponent 重写了它，内部转写到据点：
    garrison.SetWagePaymentLimit(1500);
}
```

## 跨版本提示

- `PartyComponent` 的公开与受保护成员在 v1.3.0 / v1.3.15 / v1.4.5 三个版本间**基本一致**：`MobileParty`、`Party`、`PartyOwner`、`Name`、`HomeSettlement`、`AvoidHostileActions`、`WagePaymentLimit`、`Leader`、`Banner`、导航能力属性、`SetWagePaymentLimit`、`GetDefaultComponentBanner`、`ChangePartyLeader`、`ClearCachedName`、`GetMountAndHarnessVisualIdsForPartyIcon` 与生命周期钩子均存在且签名未变。
- 唯一形态差异在**具体子类**：不同版本对某些子类（如商队、巡逻队）的 `Create*` / `Convert*` 工厂方法参数略有增减；访问组件本身用 `MobileParty.PartyComponent` 这一稳定入口即可跨版本兼容。

## 依赖关系

- 上游：[MobileParty](../../campaign/MobileParty/) 通过 `CreateParty` / `SetPartyComponent` 创建并持有组件；[Campaign](../../campaign/Campaign/) / `CampaignObjectManager` 在组件变更前后触发 `BeforePartyComponentChanged` / `AfterPartyComponentChanged`。
- 同类具体实现：[WarPartyComponent](../../campaign-ext/WarPartyComponent/)、[CaravanPartyComponent](../../campaign-ext/CaravanPartyComponent/)、[VillagerPartyComponent](../../campaign-ext/VillagerPartyComponent/)、[GarrisonPartyComponent](../../campaign-ext/GarrisonPartyComponent/)、[BanditPartyComponent](../../campaign-ext/BanditPartyComponent/)、[PatrolPartyComponent](../../campaign-ext/PatrolPartyComponent/)。
- 下游：[PartyBase](../../campaign/PartyBase/) 提供数值；[PartySizeLimitModel](../../campaign-ext/PartySizeLimitModel/) 与 [PartyWageModel](../../campaign-ext/PartyWageModel/) 按组件计算规模与工资；[CampaignEventDispatcher](../../campaign-ext/CampaignEventDispatcher/) 广播换队长事件；[Clan](../../campaign/Clan/)、[Settlement](../../campaign/Settlement/) 提供归属；[MapEvent](../../campaign-ext/MapEvent/) 参与战斗判定。

## 参见

- [MobileParty](../../campaign/MobileParty/) — 持有并驱动 PartyComponent 的队伍本体
- [PartyBase](../../campaign/PartyBase/) — 组件暴露的兵员/数值入口
- [WarPartyComponent](../../campaign-ext/WarPartyComponent/) — 领主/家族野战军组件
- [CaravanPartyComponent](../../campaign-ext/CaravanPartyComponent/) — 商队组件
- [GarrisonPartyComponent](../../campaign-ext/GarrisonPartyComponent/) — 驻军组件
- [PartySizeLimitModel](../../campaign-ext/PartySizeLimitModel/) — 按组件类型计算队伍规模上限
- [CampaignEventDispatcher](../../campaign-ext/CampaignEventDispatcher/) — 换队长事件广播
