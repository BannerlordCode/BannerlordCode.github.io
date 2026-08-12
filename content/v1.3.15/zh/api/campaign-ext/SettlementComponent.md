---
title: "SettlementComponent"
description: "据点（城镇/城堡/村庄）的战役层组件基类：聚合归属、金库、驻军、繁荣与生命周期回调，Town 与 Village 都从它派生。"
---
# SettlementComponent

**Namespace:** TaleWorlds.CampaignSystem.Settlements  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public abstract class SettlementComponent : MBObjectBase`  
**Base:** `MBObjectBase`  
**源文件路径:** `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements/SettlementComponent.cs`

## 一句话职责

它是每个据点（城镇、城堡、村庄）背后那一份“据点自身状态”的抽象基类：把归属阵营、金库、驻军人数、繁荣程度和一批生命周期回调绑在一起，城镇由 `Town`、村庄由 `Village` 各自继承并补充具体数据。

## 心智模型

把 `SettlementComponent` 想成 **“一个据点挂在 `Settlement` 上的名片”**，而不是一个能独立存在的对象：

- 世界上**不存在裸的 `SettlementComponent`**。它由 `Settlement` 在加载/创建时通过 `SetSettlementComponent` 挂上去，并随据点一起存在（一个 `Settlement` 恰好持有一个 `SettlementComponent`）。
- 具体类型只有两种主流形态：`Town`（城镇/城堡，经 `Fief` 间接继承）和 `Village`；隐藏营地 `Hideout` 也是 `Fief` 的子类。组件挂载时，`Settlement` 会按 `is Town / is Village / is Hideout` 把引用也缓存到自己的 `Town`、`Village`、`Hideout` 字段上。
- 你**不要自己 `new SettlementComponent()`**。需要操作据点时，从 `Settlement.SettlementComponent` 拿到实例，再用 `as Town` / `as Village` 转型到具体子类去取城镇专属数据。
- 它保存金库等会进存档的状态（`Gold` 标记了 `[SaveableProperty(50)]`），但**不要直接改字段绕过模型**：给钱走 `ChangeGold`（`Gold` 私有 set，且该函数会把余额夹到 ≥ 0）；影响繁荣/忠诚/治安应交给对应的 `*Action` / 模型，而不是手写字段赋值。
- 它位于 **Campaign 层**，和大地图、据点经济、行为 tick 相关；它不负责战斗场景，也不渲染任何 3D 物体。

## 何时用 / 何时不要用

- **何时用**
  - 读某个据点的“与类型无关”的公共状态：归属阵营（`MapFaction`）、金库（`Gold`）、名称（`Name`）、驻军人数（`GetNumberOfTroops`）、囚犯英雄（`GetPrisonerHeroes`）。
  - 用一个 `if (component is Town town)` / `component is Village village` 分支，再访问 `Town` / `Village` 的具体成员。
  - 通过 `IsTown` / `IsCastle` 快速判别据点形态，而不必先转型。
- **何时不要用**
  - 不要 `new SettlementComponent()`：它只能由 `Settlement` 在初始化时装配，手动构造的实例没有 `Owner`、没有 `Settlement`，几乎所有属性会抛空。
  - 需要城镇专属数据（如 `Town.Governor`、`Town.Prosperity`、`Village.Hearth`）时，**先转型到 `Town` / `Village`**，不要只停留在基类——基类不提供这些成员。
  - 不要直接 `component.Gold = ...`：用 `ChangeGold(int)`（它内部做了非负夹紧）。不要为了“改繁荣”去写派生类的私有字段，应走 `SettlementProsperityModel` / 对应 Action。
  - 不要把 `SettlementComponent` 当作全局服务或单例缓存；它随据点而生，跨据点请重新从目标 `Settlement` 取。

## 依赖图

- [`Settlement`](../../campaign/Settlement/) 持有并装配唯一的 `SettlementComponent`，在 `OnGameCreated` / `OnSessionStart` 里回调其生命周期方法。
- [`Town`](../../campaign/Town/) 与 [`Village`](../../campaign/Village/) 是它仅有的两个主流产出子类，分别补充城镇与村庄状态。
- [`Clan`](../../campaign/Clan/) 通过 `Owner.Party` 链与组件相连：组件的归属方 `Owner` 是 `Settlement.Party`，其所属家族即据点领主家族。
- [`IFaction`](../IFaction/) 是 `MapFaction` 的返回类型，据点归属的阵营（家族 / 王国）即由此暴露。
- 下游由 `Campaign` 的各类 Behavior 与模型驱动：繁荣、忠诚、治安、物价等由 `SettlementProsperityModel` / `SettlementLoyaltyModel` 等在每日 tick 中重算，组件上的字段只是这些计算的输入与结果，不是计算本身。
- 风险边界见 [崩溃与存档边界](../../../architecture/crash-boundaries/)。

## 风险段

1. **未初始化即访问：** `Settlement.SettlementComponent` 在据点被注册并完成 `SetSettlementComponent` 之前为 `null`。在 `SubModule` 早期或自定义加载流程里读取前，先确认目标 `Settlement` 已被加入 `Campaign.Current.Settlements`。
2. **错误转型：** 一个 `Settlement` 也可能是 `Hideout`（`Fief` 子类，既不是 `Town` 也不是 `Village`）。只用 `is Town` / `is Village` 分支，或先用 `IsTown` / `IsCastle` 预判，避免把隐藏营地当成城镇去转型得到 `null` 后仍访问其成员。
3. **`Settlement` / `Banner` 依赖 `Owner`：** `Settlement => _owner.Settlement`、`Banner => Settlement.Banner` 都依赖 `Owner`（即 `Settlement.Party`）。组件被装到据点后 `Owner` 一定非空，但裸构造或反序列化中途访问仍可能触发空引用。
4. **直接改字段绕过模型：** `Gold` 是私有 set，但 `IsOwnerUnassigned`、`Background*` 等是公开可写。直接改这些会影响存档与后续重算；金库增减务必走 `ChangeGold`，繁荣/忠诚/治安等应交给模型与 Action，否则会出现“数值改了但行为没跟上”的坏档或不一致。
5. **生命周期回调里写状态：** `OnInit` / `OnSessionStart` 在据点加载与开局时由 `Settlement` 调用；在这些回调内修改金库或子对象，会和后续的重算 Behavior 顺序耦合，容易在旧档/读档场景产生不可预期结果。

## 成员说明

下面按主题给出 mod 真正会碰到的公共成员，每条含用途、副作用（若有）与调用时机。

### 归属与身份

#### `public PartyBase Owner { get; internal set; }`
组件的归属方，就是所在 `Settlement` 的 `Party`。`Settlement` 在挂载组件时把 `Settlement.Party` 赋给它。改 `Owner` 会触发 `_owner.ItemRoster.RosterUpdatedEvent` 订阅/退订，自动接上 `OnInventoryUpdated`。**通常只读**；直接改它等于改据点归属，应使用正式的归属变更 Action，而非手设此属性。

#### `public Settlement Settlement { get; }`
即 `_owner.Settlement`——组件所属据点。这是从组件反向拿回 `Settlement` 的最直接入口，几乎所有“从组件出发”的遍历都先走它。

#### `public Banner Banner { get; }`
等价于 `Settlement.Banner`，据点旗帜。用于 UI / 百科展示，无副作用。

#### `public abstract IFaction MapFaction { get; }`
该据点归属的阵营。`Town` 返回其所属家族/王国，`Village` 返回其绑定城镇阵营（`Bound.MapFaction`）。需要“据点属于哪一方”时直接用这个，而不是自己去翻 `Owner`。

#### `public TextObject Name { get; }`
即 `Owner.Name`，据点显示名。读取即可，无副作用。

#### `public bool IsOwnerUnassigned { get; set; }`
据点当前是否“无人认领/未分配领主”。由游戏状态维护；读它可以判断据点是否处于待占领/流放手状态，写它会改变据点的归属显示逻辑。

#### `public virtual bool IsTown => false;` / `public virtual bool IsCastle => false;`
形态判别开关。`Town` 重写 `IsTown` 返回 `true`（`Castle` 类型同时让 `IsCastle` 为 `true`），`Village` 两者皆 `false`。在不确定具体子类、又只想判断形态时，优先用这两个属性，比 `is` 转型更轻量。

### 经济

#### `public int Gold { get; private set; }`
组件的金库余额（城镇/村庄各自的钱袋），标记了 `[SaveableProperty(50)]`，会进存档。**私有 set**：外部只能通过 `ChangeGold` 增减，不能赋值。读取即可得知当前资金。

#### `public void ChangeGold(int changeAmount)`
对金库做加减（可负）。**副作用：** 内部 `Gold += changeAmount` 后若小于 0 会夹回 0。在你确实需要直接给据点加钱/扣钱、且业务不需要走完整交易事件时使用；涉及玩家/家族/王国层面的资金流转，仍应优先对应 Action。

```csharp
SettlementComponent comp = Settlement.CurrentSettlement.SettlementComponent;
// 给当前据点金库加 500，不会出现负数
comp.ChangeGold(500);
```

### 人口与驻军

#### `public int GetNumberOfTroops()`
统计该据点内**民兵与驻军**的总人数：遍历 `Owner.Settlement.Parties`，把 `IsMilitia` 或 `IsGarrison` 的 `Party.NumberOfAllMembers` 累加。适合在 UI / 平衡判定里快速估算防御兵力，只读、无副作用。

#### `public List<CharacterObject> GetPrisonerHeroes()`
返回该据点（含其所有驻军）囚犯栏里的**英雄角色**列表。实现上把 `Owner` 与各 `IsGarrison` 的 `Party` 的 `PrisonRoster` 扫一遍，挑出 `IsHero` 的 `CharacterObject`。用于“释放/处决/招募囚犯领主”等逻辑时调用，返回的是新列表，不会改动原名册。

### 繁荣与外观

#### `public virtual SettlementComponent.ProsperityLevel GetProsperityLevel()`
返回繁荣档位（`Low` / `Mid` / `High`，另含 `NumberOfLevels` 计数）。基类默认 `Mid`；`Town` / `Village` 按各自繁荣/炉火阈值重写。用来决定 UI 配图、命名或任务门槛，只读。

#### `public virtual Banner GetDefaultComponentBanner()`
返回该组件的默认旗帜；基类返回 `null`，由具体子类按需覆盖。`Settlement` 在取旗帜时会先问组件、非空才用组件默认值。只读。

#### 外观字段：`BackgroundCropPosition`、`BackgroundMeshName`、`WaitMeshName`、`CastleBackgroundMeshName`
这组 `protected set` 的字段描述百科/地图用的背景网格与裁切位置（普通背景、等待界面背景、城堡背景）。它们大多在 XML / 初始化时写入，mod 一般只读用于自定义 UI，不建议运行时随意改写。

### 生命周期与回调

这些都是 `virtual` 钩子，**由引擎在对应时机调用**，你通常只会在继承 `SettlementComponent`（或 `Town` / `Village`）写自定义据点子类时才重写；作为调用方不要手动去调它们。

#### `public virtual void OnInit()`
据点随游戏创建时由 `Settlement.OnGameCreated` 调用一次。适合做一次性初始化；注意不要在这里写会和后续重算 Behavior 冲突的状态。

#### `public virtual void OnSessionStart()`
开局/读档后由 `Settlement.OnSessionStart` 调用。适合恢复会话级运行时状态。

#### `public virtual void OnPartyEntered(MobileParty mobileParty)` / `public virtual void OnPartyLeft(MobileParty mobileParty)`
部队进入 / 离开据点时由 `Settlement` 触发。用于“进入城镇触发事件”“离开清除状态”等；`mobileParty` 是被进出的一方。

#### `public virtual void OnRelatedPartyRemoved(MobileParty mobileParty)`
与据点相关的部队被移除时调用（如驻军解散）。清理与该部队相关的引用时使用。

#### `protected virtual void OnInventoryUpdated(ItemRosterElement item, int count)`
当 `Owner.ItemRoster` 变化（因 `Owner` 订阅了 `RosterUpdatedEvent`）时回调。`Town` / `Village` 用它来刷新市场/生产状态。你若只持有组件引用，这是观察据点物资变动的内部入口。

#### `public virtual int GetItemPrice(ItemObject item, MobileParty tradingParty = null, bool isSelling = false)` / `public virtual int GetItemPrice(EquipmentElement itemRosterElement, MobileParty tradingParty = null, bool isSelling = false)`
买卖定价钩子，基类返回 0，由 `Town` / `Village` 按各自市场数据重写。要改据点物价，应重写此函数或走市场模型，而不是在外部硬写价格字段。

## 最小真实示例

### 示例 1：拿到当前据点组件并判别形态

```csharp
using TaleWorlds.CampaignSystem.Settlements;

Settlement settlement = Settlement.CurrentSettlement;
if (settlement == null)
    return;

SettlementComponent component = settlement.SettlementComponent;
if (component == null)
    return;

// 与类型无关的公共状态
IFaction ownerFaction = component.MapFaction;
int troops = component.GetNumberOfTroops();
int treasury = component.Gold;

// 按形态分支到具体子类
if (component is Town town)
{
    Hero governor = town.Governor;
    float prosperity = town.Prosperity;
}
else if (component is Village village)
{
    float hearth = village.Hearth;
}
```

### 示例 2：遍历所有据点，统计有多少个城镇金库低于阈值

```csharp
using System.Collections.Generic;
using TaleWorlds.CampaignSystem.Settlements;

List<Town> poorTowns = new List<Town>();
foreach (Settlement settlement in Campaign.Current.Settlements)
{
    SettlementComponent component = settlement.SettlementComponent;
    if (component is Town town && town.Gold < 1000)
    {
        poorTowns.Add(town);
    }
}
```

## 导航

- [↑ 据点扩展 API 模块](../)
- [↔ BarterManager](../BarterManager/) · [IssueManager](../IssueManager/)
- [相关：Settlement](../../campaign/Settlement/) · [Town](../../campaign/Town/) · [Village](../../campaign/Village/) · [Clan](../../campaign/Clan/) · [IFaction](../IFaction/)
- [架构：崩溃与存档边界](../../../architecture/crash-boundaries/)
