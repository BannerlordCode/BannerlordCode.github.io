---
title: "Workshop"
description: "城镇中一个具体的生产工坊实例：绑定所属城镇、拥有者英雄与生产类型，记录运营资本、盈亏与每日生产进度，是工坊经济与玩家投资的载体。"
---
# Workshop

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Workshops  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public class Workshop : SettlementArea`  
**Base:** `SettlementArea`  
**File:** `TaleWorlds.CampaignSystem/Settlements/Workshops/Workshop.cs`

## 概述

`Workshop` 是 Bannerlord 战役世界里**一个具体城镇里一间具体工坊**的运行时实例——不是工坊的“类型定义”（那是 [`WorkshopType`](../../campaign-ext/WorkshopType/)），也不是工坊的每日生产逻辑（那在 [`WorkshopsCampaignBehavior`](../../campaign-ext/WorkshopsCampaignBehavior/) 里）。它把四件事绑在一起：

- **位置与归属**：属于哪个城镇（[`Settlement`](../Settlement/) / [`Town`](../Town/)）、归哪个英雄（[`Hero`](../Hero/)）所有、在城镇里的唯一标签 `Tag`。
- **生产类型**：`WorkshopType` 决定它把哪些原料（[`ItemCategory`](../../campaign-ext/)) 转成哪些商品，以及转换速度。
- **经营账本**：`Capital`（当前周转资金）、`InitialCapital`（初始资金）、`ProfitMade`（累计利润）、`Expense`（每日开销）。
- **生产进度**：`_productionProgress[]`（对每种 `WorkshopType.Productions` 各一条 0~1 的进度）。

你几乎所有“工坊 mod”都会碰到它：读玩家在某个城镇开了哪些铺子、看哪间在赚钱、把某间转产、或给某间注资。注意 `Workshop` 只是一个**状态和归属容器**；真正的“每天生产/卖货/扣钱”由 `WorkshopsCampaignBehavior` 的每日 tick 驱动，并通过 [`WorkshopModel`](../../campaign-ext/WorkshopModel/) 读取经济参数。

## 心智模型

把 `Workshop` 当成**“城镇里一间铺面的营业执照 + 账本”**：

- 它在**战役（Campaign）层**，不属于战斗场景（Mission）。进战斗后工坊不会变成 `Agent`。
- 一个 `Workshop` 实例对应一个**城镇里的固定槽位**（`Tag` 唯一）。槽位由 `Town.InitializeWorkshops(...)` 在开局分配，`Workshop[]` 数组长度固定；你拿到的 `Workshop` 是已经存在的、被序列化保存的对象，**不要自己 `new Workshop(...)`**。
- 它**不做生产计算**：`ChangeGold`、`SetProgress`、`UpdateLastRunTime` 都是“被动记录”，由 `WorkshopsCampaignBehavior.DailyTickTown` 在每个城镇的每日 tick 里调用。你自己直接调它们，相当于手动改账本，会和行为内部的仓库/进度数据脱节。
- **何时直接用 `Workshop` 的方法**：只读（看利润、看归属、看进度）、或用 `SetCustomName` 改个店名。
- **何时不要直接调变更方法**：换所有者、换生产类型、改资本——这些应走对应的 Action（`ChangeOwnerOfWorkshopAction`、`ChangeProductionTypeOfWorkshopAction`、`InitializeWorkshopAction`），否则会绕过行为数据与事件，见下方风险段。
- **依赖**：向上依赖 `WorkshopType`（XML 加载的 `MBObjectBase`）、`WorkshopModel`（经济参数）；向下被 `WorkshopsCampaignBehavior`（每日 tick）、`Clan` 财务面板、仓库 UI 读取；变更会通过 `CampaignEventDispatcher` 广播事件。

## 依赖图

| 方向 | 节点 | 关系 |
|------|------|------|
| 上游（定义/参数） | [WorkshopType](../../campaign-ext/WorkshopType/) | 决定生产配方 `Productions`、名称、隐藏性 |
| 上游（参数） | [WorkshopModel](../../campaign-ext/WorkshopModel/) | `InitialCapital` / `DailyExpense` / `CapitalLowLimit` 等来源 |
| 下游（驱动者） | [WorkshopsCampaignBehavior](../../campaign-ext/WorkshopsCampaignBehavior/) | 每日 tick 调用 `SetProgress` / `ChangeGold` / `UpdateLastRunTime` |
| 下游（变更入口） | [ChangeOwnerOfWorkshopAction](../../campaign-ext/ChangeOwnerOfWorkshopAction/) · [ChangeProductionTypeOfWorkshopAction](../../campaign-ext/ChangeProductionTypeOfWorkshopAction/) · [InitializeWorkshopAction](../../campaign-ext/InitializeWorkshopAction/) | 正确换主/转产/开局建坊的入口 |
| 事件 | [CampaignEventDispatcher](../../campaign-ext/CampaignEventDispatcher/) | `OnItemProduced` / `OnItemConsumed`；`WorkshopOwnerChangedEvent` / `WorkshopTypeChangedEvent` |
| 仓库接口 | [IWorkshopWarehouseCampaignBehavior](../../campaign-ext/IWorkshopWarehouseCampaignBehavior/) | 玩家工坊的仓库出入库比例与原料判定 |
| 归属 | [Hero](../Hero/) · [Clan](../Clan/) | `Owner.OwnedWorkshops` 反向持有；玩家铺面计入家族财务 |
| 容器 | [Town](../Town/) · [Settlement](../Settlement/) | `Town.Workshops` 是获取入口；`Settlement` 是地理位置 |

## 风险段

> 直接改 `Workshop` 的低级 setter 而不走 Action，是工坊 mod 最常见的“坏档/黑屏仓库”来源。

1. **换主/转产要走过场 Action，不要裸调 `ChangeOwnerOfWorkshop` / `ChangeWorkshopProduction`。** 这两个方法只是改字段；而 `WorkshopsCampaignBehavior` 在 `OnWorkshopOwnerChanged` / `OnWorkshopTypeChanged` 里才维护玩家工坊的 `_workshopData`（仓库进度、库存比例）和 `_warehouseRosterPerSettlement`。裸调会让“仓库数据”和实际工坊脱节：玩家在城镇开“进入仓库”菜单时可能拿到错配的 `ItemRoster`，甚至因为 `_workshopData` 找不到对应条目而静默丢失仓库。正确做法见示例 2。
2. **`SetProgress(i, value)` 越界会抛 `IndexOutOfRangeException`。** `_productionProgress` 数组长度严格等于 `WorkshopType.Productions.Count`。任何 `i` 必须满足 `0 <= i < WorkshopType.Productions.Count`。换生产类型后数组会被 `ChangeWorkshopProduction` 重建，老的索引含义已变。
3. **不要随便 `ChangeGold` 灌资本。** `Capital` 由每日 tick 的 `HandlePlayerWorkshopExpense` / `HandleNotableWorkshopExpense` 管理；资本低于 `CapitalLowLimit` 且所有者付不起开销时，行为会触发 `ChangeWorkshopOwnerByBankruptcy`（走 `ChangeOwnerOfWorkshopAction.ApplyByBankruptcy`，铺子被名人接管）。你直接把 `Capital` 拉高会掩盖破产逻辑，或直接调低会提前触发破产转移。
4. **不要用 `new Workshop(...)` 自建实例。** 槽位与序列化由引擎拥有；存档加载时 `AfterLoad()` 会按 `WorkshopType.Productions.Count` 校正 `_productionProgress` 长度、把 `LastRunCampaignTime == CampaignTime.Zero` 的实例推到“现在”。自己 new 出来的对象不会被保存、也不会出现在 `Town.Workshops` 中，反而可能成为孤儿引用。
5. **`WorkshopType` 是 `MBObjectBase`（模块 XML 加载），不能 `new`。** 通过 `WorkshopType.Find(id)` 或 `WorkshopType.All` 获取；传一个不存在/`null` 的 type 给 `InitializeWorkshop` / `ChangeWorkshopProduction` 会在 `type.Productions` 处崩溃。
6. **在每日 tick 之外改 `Capital` / `ProductionProgress` 可能与行为内 `_workshopData` 不同步。** 若必须改，优先在 `CampaignBehaviorBase` 的 `DailyTickTownEvent` 订阅里操作，此时行为自身也在跑同一步骤。

## 如何获取 Workshop

```csharp
// 路径 1：从当前所在城镇拿到全部工坊（每个元素是 Workshop）
Town town = Settlement.CurrentSettlement.Town;
Workshop[] workshops = town.Workshops;
foreach (Workshop w in workshops)
{
    // w 是一间具体工坊
}

// 路径 2：从某个英雄拿到其拥有的全部工坊
MBReadOnlyList<Workshop> owned = Hero.MainHero.OwnedWorkshops;
foreach (Workshop w in owned)
{
    // 玩家开的铺子
}

// 路径 3：从 WorkshopType 的定义反查“所有此类工坊”并没有直接索引，
// 通常遍历 Town.Workshops 按 w.WorkshopType 过滤：
foreach (Town t in Town.AllTowns)
{
    foreach (Workshop w in t.Workshops)
    {
        if (w.WorkshopType == WorkshopType.Find("brewery"))
        {
            // 找到所有酿酒坊
        }
    }
}
```

> `Town.Workshops` 是 `Workshop[]`；`Hero.OwnedWorkshops` 是 `MBReadOnlyList<Workshop>`。两者引用的是同一批实例。

## 成员说明（按主题）

### 身份与归属

#### `public override Settlement Settlement { get; }`
工坊所属城镇（[`Settlement`](../Settlement/)）。只读，构造时由 `Town.InitializeWorkshops` 注入，序列化保存。**查看何时调用**：任何需要知道“这间铺子在哪”的逻辑（如邻近村庄补给、城镇税率判定）。

#### `public override string Tag { get; }`
工坊在该城镇内的唯一短标签（如 `"workshop_1"`）。与 `Settlement` 一起参与 `GetHashCode()`。只读。**查看何时调用**：需要稳定区分同一城镇内多间工坊时（比数组下标更稳健）。

#### `public override Hero Owner { get; }`
当前所有者英雄。只读属性，但内部可变；变更应通过 `ChangeOwnerOfWorkshopAction`。**副作用注意**：`Owner.OwnedWorkshops` 反向列表由 `AddOwnedWorkshop` / `RemoveOwnedWorkshop` 维护——裸调 `ChangeOwnerOfWorkshop` 才会同步该列表，但**不会**同步行为仓库数据（见风险段）。

#### `public override TextObject Name { get; }`
显示名称：优先用 `SetCustomName` 设的自定义名，否则用 `WorkshopType.Name`，都没有则返回 `Empty Workshop`。只读。**查看何时调用**：UI 列表、日志、对话文本。

#### `public WorkshopType WorkshopType { get; private set; }`
这间工坊当前的生产类型。决定 `Productions`（配方）、`IsHidden`、名称。**设置何时调用**：仅通过 `ChangeWorkshopProduction` 或对应的 `ChangeProductionTypeOfWorkshopAction`；不要赋 `null`。

### 经营状态

#### `public int Capital { get; private set; }`
当前周转资金。由 `ChangeGold` 增减，日常被开销扣减，生产卖出时增加。**查看何时调用**：判断是否盈利、是否接近破产阈值 `WorkshopModel.CapitalLowLimit`。

#### `public int InitialCapital { get; private set; }`
开局/购入时的初始资金。在 `InitializeWorkshop` 中由 `WorkshopModel.InitialCapital` 设定，之后不变。

#### `public int ProfitMade { get; }`
累计利润，计算为 `MathF.Max(Capital - InitialCapital, 0)`。**只读、派生值**：不需要调用方维护。

#### `public int Expense { get; }`
每日固定开销，等于 `Campaign.Current.Models.WorkshopModel.DailyExpense`。**只读、派生值**；若 `WorkshopType.IsHidden` 为 true，行为在每日 tick 中skip 这笔开销。

#### `public CampaignTime LastRunCampaignTime { get; private set; }`
上一次跑生产循环的战役时刻。由 `UpdateLastRunTime` 写入 `CampaignTime.Now`。**查看何时调用**：需要判断“多久没产出了”或冷却时。

### 生产进度

#### `public float GetProductionProgress(int index)`
读取第 `index` 种配方的进度（0~1）。`index` 必须 `< WorkshopType.Productions.Count`，否则越界。**查看何时调用**：只读展示进度条，或判断某配方这轮是否能产出。

#### `public void SetProgress(int i, float value)`
写入第 `i` 种配方的进度。`i` 越界抛 `IndexOutOfRangeException`。**副作用**：仅改本实例数组；由 `WorkshopsCampaignBehavior.RunTownWorkshop` 每日累加 `WorkshopModel.GetEffectiveConversionSpeedOfProduction` 的结果后回写。**何时调用**：一般不要手动调；若必须，在每日 tick 订阅中、且确保 `i` 落在 `Productions.Count` 内。

### 生命周期与初始化

#### `public Workshop(Settlement settlement, string tag)`
**引擎内部**构造：分配槽位、清零资本、不绑定 `WorkshopType` 和 `Owner`。**mod 不应调用**——由 `Town.InitializeWorkshops` 调用；之后请走 `InitializeWorkshopAction.ApplyByNewGame`。

#### `public void InitializeWorkshop(Hero owner, WorkshopType type)`
把空槽位真正变成一间营业工坊：设置 `WorkshopType`、`_owner`（并 `owner.AddOwnedWorkshop(this)`）、按 `WorkshopModel.InitialCapital` 设 `Capital` / `InitialCapital`、按 `type.Productions.Count` 分配进度数组。**正常入口是** `InitializeWorkshopAction.ApplyByNewGame(workshop, owner, type)`；直接调本方法不会触发 `WorkshopOwnerChangedEvent`，且对玩家铺子不会建 `_workshopData`。

#### `internal void AfterLoad()`
存档加载后校正：`_productionProgress` 长度与 `WorkshopType.Productions.Count` 对齐（不一致则重建，==丢进度），`LastRunCampaignTime == Zero` 则推到 Now。**mod 不可访问（internal）**，仅记录其存在以避免误以为能手动“修复”进度。

### 变更操作（多数应走 Action）

#### `public void ChangeOwnerOfWorkshop(Hero newOwner, WorkshopType type, int capital)`
低级换主：从旧主 `RemoveOwnedWorkshop`、新主 `AddOwnedWorkshop`、`Capital = capital`；若 `type != WorkshopType` 顺带 `ChangeWorkshopProduction`。**副作用/风险**：同步了 `Hero.OwnedWorkshops`，但**不同步** `WorkshopsCampaignBehavior` 的仓库数据，也不发事件。正确入口：`ChangeOwnerOfWorkshopAction.ApplyByPlayerBuying` / `ApplyByDeath` / `ApplyByBankruptcy`。

#### `public void ChangeWorkshopProduction(WorkshopType newWorkshopType)`
换生产类型并**重建** `_productionProgress` 数组（长度 = 新类型的 `Productions.Count`，旧进度清零）。**风险**：会丢失进度；且裸调不触发 `WorkshopTypeChangedEvent`，玩家铺子的 `_workshopData` 不会被刷新。正确入口：`ChangeProductionTypeOfWorkshopAction.Apply(workshop, newType, ignoreCost)`。

#### `public void SetCustomName(TextObject customName)`
设置自定义店名，覆盖 `WorkshopType.Name`。**安全、可直接调用**：仅改显示名，无经济副作用。空名回退到 `WorkshopType.Name` 或 `Empty Workshop`。

#### `public void ChangeGold(int goldChange)`
`Capital += goldChange`。**副作用**：直接动账本。日常由 `WorkshopsCampaignBehavior` 在生产卖出（加）、开销（减）时调用。**何时调用**：除非你明确要手动注资/扣款，否则不要调——会干扰破产与盈亏统计。

#### `public void UpdateLastRunTime()`
`LastRunCampaignTime = CampaignTime.Now`。由 `RunTownWorkshop` 在当天有产出时调用。**何时调用**：手动模拟一次生产循环后如需刷新时间戳，可在每日 tick 订阅内调用。

### 杂项

#### `public override int GetHashCode()`
基于 `Settlement` 与 `Tag` 的哈希（用于在字典/集合中稳定识别同一间工坊）。可直接使用。

#### `public override string ToString()`
`Name.ToString() + " " + Settlement.ToString()`，用于日志/调试。

## 典型用法示例

### 示例 1：列出当前城镇每间工坊的名称、类型与累计利润（只读，安全）

```csharp
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.CampaignSystem.Settlements.Workshops;

Town town = Settlement.CurrentSettlement.Town;
foreach (Workshop workshop in town.Workshops)
{
    string name = workshop.Name.ToString();
    string type = workshop.WorkshopType?.Name.ToString() ?? "(none)";
    int profit = workshop.ProfitMade;
    int capital = workshop.Capital;
    InformationManager.DisplayMessage(
        new InformationMessage($"{name} [{type}] 利润 {profit}, 资本 {capital}"));
}
```

### 示例 2：把玩家拥有的某间工坊转产为“酿酒坊”——走正确的 Action

```csharp
using TaleWorlds.CampaignSystem.Settlements.Workshops;
using TaleWorlds.CampaignSystem.Actions;

// 获取目标工坊：玩家拥有的第一间，或任意 town.Workshops 元素
Workshop playerShop = Hero.MainHero.OwnedWorkshops.FirstOrDefault();
if (playerShop != null)
{
    // 正确的转产入口：会扣转产费、同步 WorkshopsCampaignBehavior 的 _workshopData，
    // 并广播 WorkshopTypeChangedEvent
    WorkshopType brewery = WorkshopType.Find("brewery");
    if (brewery != null && playerShop.WorkshopType != brewery)
    {
        ChangeProductionTypeOfWorkshopAction.Apply(playerShop, brewery);
    }
}
```

> 对比：直接 `playerShop.ChangeWorkshopProduction(brewery)` 虽然也能换类型，但会丢失生产进度、且不刷新玩家仓库数据，长期运行会出现仓库菜单与实际不符。始终优先用 `ChangeProductionTypeOfWorkshopAction` / `ChangeOwnerOfWorkshopAction`。

### 示例 3：检测某间玩家工坊是否濒临破产（只读诊断）

```csharp
Workshop w = Hero.MainHero.OwnedWorkshops.FirstOrDefault();
if (w != null)
{
    int lowLimit = Campaign.Current.Models.WorkshopModel.CapitalLowLimit;
    bool nearBankruptcy = w.Capital <= lowLimit && w.Owner.Gold < w.Expense;
    if (nearBankruptcy)
    {
        InformationManager.DisplayMessage(
            new InformationMessage($"{w.Name} 即将破产（资本 {w.Capital} / 下限 {lowLimit}）"));
    }
}
```

## 跨版本提示

- **v1.3.15 与 v1.4.5 的 `Workshop` 公开 API 完全一致**：`Workshop(Settlement, string)`、`InitializeWorkshop`、`ChangeOwnerOfWorkshop`、`ChangeWorkshopProduction`、`SetCustomName`、`ChangeGold`、`SetProgress`、`GetProductionProgress`、`UpdateLastRunTime`、`AfterLoad`（internal）、`GetHashCode`、`ToString`，以及全部属性名与签名均无变化。
- `WorkshopType` 的 `All`（`=> Campaign.Current.Workshops`）与 `Find(string)` 在两个版本同样存在；`Productions` 为 `MBReadOnlyList<WorkshopType.Production>`。
- 行为层 `WorkshopsCampaignBehavior`、三个 Action、以及 `WorkshopModel` 的经济参数（`InitialCapital` / `DailyExpense` / `CapitalLowLimit`）在 v1.3.15 同样适用，跨版本 mod 可直接依赖。

## 导航

- ↑ 父级：[战役 API 索引](../../campaign/) · [api 根](../../)
- ↔ 同级：[Town](../Town/) · [Settlement](../Settlement/) · [Village](../Village/) · [Hero](../Hero/) · [Clan](../Clan/) · [WorkshopData](../WorkshopData/) · [MobileParty](../MobileParty/) · [Campaign](../Campaign/)
- 相关类型 / 行为 / 动作：
  - [WorkshopType](../../campaign-ext/WorkshopType/) — 生产类型定义（配方、名称）
  - [WorkshopModel](../../campaign-ext/WorkshopModel/) — 工坊经济参数
  - [WorkshopsCampaignBehavior](../../campaign-ext/WorkshopsCampaignBehavior/) — 每日 tick 驱动器
  - [InitializeWorkshopAction](../../campaign-ext/InitializeWorkshopAction/) — 开局建坊
  - [ChangeOwnerOfWorkshopAction](../../campaign-ext/ChangeOwnerOfWorkshopAction/) — 换主/买卖/破产
  - [ChangeProductionTypeOfWorkshopAction](../../campaign-ext/ChangeProductionTypeOfWorkshopAction/) — 转产
  - [CampaignEventDispatcher](../../campaign-ext/CampaignEventDispatcher/) — 产出/消耗与工坊事件
  - [IWorkshopWarehouseCampaignBehavior](../../campaign-ext/IWorkshopWarehouseCampaignBehavior/) — 玩家仓库出入库接口
