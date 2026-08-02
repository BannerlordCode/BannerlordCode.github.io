---
title: "Village"
description: "村庄组件：挂在 Settlement 上，记录村庄归属哪个城镇（Bound）、卖货去哪个城镇（TradeBound）、炉火繁荣度（Hearth）与每日产出；不要自己创建，也不要直接改 Hearth/Bound 引用。"
---
# Village

**Namespace:** TaleWorlds.CampaignSystem.Settlements  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public class Village : SettlementComponent`  
**Base:** `SettlementComponent`  
**源文件路径:** `TaleWorlds.CampaignSystem/Settlements/Village.cs`（1.3.15；API 已对照 1.4.5 交叉校验）

## 一句话职责

`Village` 是某个村庄据点 `Settlement` 身上的**经济组件**：它告诉你这个村庄归哪个城镇管、把货卖到哪个城镇、炉火（人口繁荣）还剩多少、每天产什么，以及当前是正常/被劫掠/被强征/废弃中的哪种状态。

## 心智模型

把它想成 **`Settlement` 的「村庄经济卡片」**，而不是一个独立实体：

- **它不是独立对象，挂在 Settlement 上。** 拿到村庄的入口永远是 `someSettlement.Village`——每个村庄型 `Settlement` 有且只有一个 `Village` 组件。你永远不会自己 `new Village()`；它由引擎在加载/初始化时随 `Settlement` 一起建立并 `Deserialize`（从 XML 读 `hearth`、`bound`、`village_type`）。
- **纯战役层数据，不进战斗场景。** `Village` 只活在战役地图（Campaign）里，代表地图上的村庄据点；进入战斗后才有 `PartyBase`/`Agent`，但那是另一回事。
- **生命周期：** `OnInit()`（被设为 `Normal` 并给 1000 金）→ 每个战役日由 `Campaign` 的每日 tick 循环统一调用 `DailyTick()`（累加 `Hearth`、`Militia`，金币封顶 1000）→ 被袭击/强征/洗劫时通过 `ChangeVillageStateAction.Apply*` 改变 `VillageState`，并触发 `CampaignEventDispatcher` 事件。
- **谁持有/枚举：** 由所属 `Settlement` 持有；全图所有村庄用 `Village.All`（`= Campaign.Current.AllVillages`）枚举。

## 何时用 / 何时不要用

**用它的场景：**
- 读村庄经济/产出/状态：`Hearth`、`GetHearthLevel()`、`VillageType.Productions`、`IsProducing(...)`、`GetWarehouseCapacity()`。
- 在对话或任务里把村庄和城镇关联起来：`Bound`（归属城镇）、`TradeBound`（卖货城镇）。
- 监听村庄状态变化：订阅 `OnVillageBecomeNormal` / `OnVillageBeingRaided` / `OnVillageLooted` 等事件。

**不要用 / 正确替代：**
- ❌ 自己 `new Village()` 或运行时替换 `VillageType` / `Bound` / `TradeBound` 引用——这些是序列化字段，加载时由 `MBObjectManager` 重建，乱改会坏档且破坏城镇↔村庄双向登记表。
- ❌ 手动把 `Hearth` 或 `Gold` 设成任意值。炉火的「每天变化量」来自 `SettlementProsperityModel`；增减金币请走 `ChangeGold(int)`（下限 0）。想影响炉火应替换/扩展模型或触发对应事件，而不是硬写字段。
- ❌ 手动调 `DailyTick()`。它由 `Campaign` 的每日 tick 统一驱动（`Campaign.cs` 中对每个 `settlement.Village.DailyTick()`），自己调会重复结算。
- ❌ 直接给 `VillageState` 赋值来切换状态。应改用 `ChangeVillageStateAction.ApplyBySettingToNormal / ApplyBySettingToBeingRaided / ApplyBySettingToLooted` 等，这样才会正确维护登记表并广播事件。

## 依赖图（可点击）

```
                Settlement (持有组件, .Village)
                     │  上游
       ┌─────────────┼───────────────────────────────┐
       ▼             ▼                                ▼
    Town           VillageType                    MBObjectManager
 (Bound 通常是   (决定 Productions)            (Deserialize 时重建引用)
  Town 组件)                                          │
       │                                             │ 存档重建
       └──────────────┬──────────────────────────────┘
                      ▼  本对象 Village
   ┌─────────── 经济/产出/状态  ───────────────────────────┐
   │ Hearth ← SettlementProsperityModel                    │
   │ 产出  ← VillageProductionCalculatorModel              │
   │ Militia ← SettlementMilitiaModel                      │
   │ MarketData (库存) ← VillageMarketData                  │
   │ VillagerPartyComponent (村民商队)                     │
   └───────────────────────────────────────────────────────┘
                      │  下游 / 副作用
       ┌──────────────┼───────────────────────────────┐
       ▼              ▼                               ▼
  VillageGoodProduction   VillageHeal             VillageHostileAction
   CampaignBehavior        CampaignBehavior         CampaignBehavior
  (食物/产出)            (炉火恢复)              (袭击/强征)
       │              VillageTradeBound           Raid/Force* EventComponents
       │              CampaignBehavior                  │
       ▼                                               ▼
  CampaignEventDispatcher.OnVillage*            ChangeVillageStateAction /
   (BecomeNormal/BeingRaided/Looted)            IncreaseSettlementHealthAction
```

- **上游（它依赖谁）：**[Settlement](./Settlement/)（持有组件，`settlement.Village`）、[Town](../campaign-ext/Town/)（`Bound` 通常是 Town，其 `Town` 组件负责登记 trade-bound）、[VillageType](../campaign-ext/VillageType/)（决定生产列表）、[MBObjectManager](../campaign-ext/MBObjectManager/)（反序列化时 `ReadObjectReferenceFromXml` 重建引用）。
- **下游（谁消费它）：**[SettlementProsperityModel](../campaign-ext/SettlementProsperityModel/)（`HearthChange`）、[VillageProductionCalculatorModel](../campaign-ext/VillageProductionCalculatorModel/)（`GetWarehouseCapacity`、产出）、[SettlementMilitiaModel](../campaign-ext/SettlementMilitiaModel/)（`MilitiaChange`）、[VillageMarketData](../campaign-ext/VillageMarketData/)（库存/市场）、[VillagerPartyComponent](../campaign-ext/VillagerPartyComponent/)（村民商队）。
- **相关事件 / Action / Behavior：** `CampaignEventDispatcher.OnVillageBecomeNormal / OnVillageBeingRaided / OnVillageLooted`；[ChangeVillageStateAction](../campaign-ext/ChangeVillageStateAction/) 与 `IncreaseSettlementHealthAction`；`VillageGoodProductionCampaignBehavior`、`VillageHealCampaignBehavior`、`VillageHostileActionCampaignBehavior`、`VillageTradeBoundCampaignBehavior`、`VillagerCampaignBehavior`。
- **存档点：** `[SaveableField]`/`[SaveableProperty]`（`Hearth`、`TradeTaxAccumulated`、`_villageState`、`_bound`、`_marketData`）、`[CachedData]`（`VillagerPartyComponent`）。

## 风险与崩溃边界（必读）

1. **错误阶段直接改 `Hearth` / `Gold`。** `DailyTick()` 只在战役「每日 tick」跑，里面会 `Hearth += HearthChange` 并在炉火等级跨越阈值时调用 `Settlement.Party.SetLevelMaskIsDirty()`。如果你在 HourlyTick、事件回调或别处直接写 `Hearth`，会与 DailyTick 的累加冲突/被覆盖，还可能跳过等级掩码更新（影响该村庄部队的等级显示）。想改炉火应改 `SettlementProsperityModel` 或等 DailyTick。
2. **跨存档缓存引用导致悬空/坏档。** `Bound` / `TradeBound` / `VillageType` 在读档时由 `MBObjectManager` 通过 `ReadObjectReferenceFromXml` 按 `stringId` 重建对象图。不要把你自己的模块状态（静态字段、非 `[Saveable]` 容器）里长期持有 `Village` / `Settlement` 实例；读档后应通过 `Campaign.Current` 现取或按 `stringId` 重新查询，避免引用指向已被丢弃的旧对象。
3. **直接写 `Hearth` 而非经模型/事件。** `Hearth` 是 `[SaveableProperty]`，但「为什么变」由 `SettlementProsperityModel.CalculateHearthChange` 决定。硬写字段会绕过解释链，且 DailyTick 次日还会再 `+= HearthChange`，造成不可预期的叠加；`Hearth < 10` 还会被夹回 10。
4. **`Bound` / `TradeBound` 引用失同步。** `Bound` 的 setter 会同步调用 `Settlement.AddBoundVillageInternal` / `RemoveBoundVillageInternal`；`TradeBound` 的 setter（仅当 `Bound` 不是 Town 时生效）会维护 `Town.SetTradeBoundVillageInternal` / `RemoveTradeBoundVillageInternal` 双登记表。绕过属性直接改私有字段（反射）或手动改 `Bound` 而不触发 setter，会让城镇↔村庄绑定、税收、产出、村民商队全部失同步。注意：**当 `Bound` 本身是 Town 时，`TradeBound` 直接返回 `Bound`**，单独设置 trade-bound 无效。

## 成员说明（按主题分组）

### 归属与经济

- **`Settlement Bound { get; }`** — 该村庄归属的城镇/城堡。`MapFaction` 直接取自它。引用是私有的，只在加载时由 XML 的 `bound` 引用设定；设置它会维护双向登记表。外部不要改。
- **`Settlement TradeBound { get; set; }`** — 卖货/贸易的城镇。若 `Bound` 本身就是 Town，则直接返回 `Bound`；否则返回独立的 `_tradeBound`。setter 仅当 `Bound` 不是 Town 时生效，并维护 `Town` 的 trade-bound 登记表。`GetItemPrice` 用它取城镇市价。
- **`IFaction MapFaction { get; }`** — 等于 `Bound.MapFaction`，村庄的外交归属（用于判断敌我）。
- **`int Gold`（继承自 `SettlementComponent`，仅 `ChangeGold` 可改）** — 村庄金库。`OnInit` 给 1000；`DailyTick` 里若 `> 1000` 会回落到 1000。增减走 `ChangeGold(int)`（下限 0）。
- **`VillageMarketData MarketData { get; }`** — 村庄市场/库存数据，`GetWarehouseCapacity` 与贸易定价会用到。
- **`int TradeTaxAccumulated`（`[SaveableProperty]`）** — 累计的贸易税。
- **`float LastDemandSatisfiedTime`（`[SaveableProperty]`，私有 set）** — 上次满足领主需求的时间，领主需求/任务事件会读它。

### 状态与战斗

- **`VillageStates VillageState { get; set; }`** — `Normal` / `BeingRaided` / `ForcedForVolunteers` / `ForcedForSupplies` / `Looted`。值变化时会广播 `CampaignEventDispatcher` 事件（`OnVillageBecomeNormal` / `OnVillageBeingRaided` / `OnVillageLooted`）。切换状态请用 `ChangeVillageStateAction.Apply*`。
- **`bool IsDeserted { get; }`** — `_villageState == Looted`。废弃村庄（炉火归零后无法自行恢复）。
- **`IEnumerable<PartyBase> GetDefenderParties(MapEvent.BattleTypes)` / `PartyBase GetNextDefenderParty(ref int, MapEvent.BattleTypes)`** — 村庄被袭击/强征时返回防守方（村庄自身 `Party` + 同阵营非商队部队；`Raid`/`Force` 类战斗额外纳入民兵与村民）。这是 `MapEvent` 侧调用，普通 mod 一般只读状态、不直接调。

### 生产与繁荣

- **`VillageType VillageType`** — 村庄类型（公开字段），决定 `Productions` 列表。加载时由 XML 的 `village_type` 引用设定；不要运行时替换（会破坏产出与反序列化一致性）。
- **`bool IsProducing(ItemObject item)`** — 判断 `VillageType.Productions` 是否包含该物品。
- **`int GetWarehouseCapacity()`** — 仓库容量 =（每日食物产出 + 各产物每日产出）× 5，向上取整、至少 1。用于库存上限。
- **`float Hearth`（`[SaveableProperty]`）** — 炉火/繁荣度。`DailyTick` 累加 `HearthChange`，`< 10` 夹到 10。派生的 `HearthLevel` / `ProsperityLevel` 都来自它。
- **`float HearthChange { get; }`** — 今天的炉火变化量 = `SettlementProsperityModel.CalculateHearthChange(this).ResultNumber`。只读查询。
- **`float Militia` / `float MilitiaChange` / `ExplainedNumber MilitiaChangeExplanation`** — 民兵数量及其每日变化（来自 `SettlementMilitiaModel`）。`MilitiaChange` 在 `DailyTick` 里加到 `Settlement.Militia`。
- **`ExplainedNumber HearthChangeExplanation`** — 带文字解释的炉火变化明细，调试/UI 用。
- **`int GetHearthLevel()`** — `Hearth ≥ 600` → 2，`≥ 200` → 1，否则 0（对应常量 `MidHearthThreshold = 600`、`LowHearthThreshold = 200`）。
- **`ProsperityLevel GetProsperityLevel()`** — 由炉火等级映射到 `High` / `Mid` / `Low`。
- **`VillagerPartyComponent VillagerPartyComponent`（`[CachedData]`）** — 该村庄对应的村民商队组件，由 `VillagerCampaignBehavior` 驱动。
- **`static MBReadOnlyList<Village> All`** — `= Campaign.Current.AllVillages`，全图村庄枚举入口。

## 最小真实示例

### 示例 1：从当前据点拿到 Village，读取归属与产出

```csharp
// 例如在对话/任务脚本里，当前所在据点就是村庄
Settlement settlement = Settlement.CurrentSettlement;
if (settlement != null && settlement.Village != null)
{
    Village village = settlement.Village;

    Settlement boundTown = village.Bound;       // 归属城镇（可能是 Town 或 Castle）
    Settlement tradeTown = village.TradeBound;   // 卖货城镇；若 Bound 是 Town 则等于 Bound

    // 遍历该村庄真实生产哪些物品（来自 VillageType.Productions）
    foreach (var production in village.VillageType.Productions)
    {
        ItemObject producedItem = production.Item1;
        float weight = production.Item2;
        InformationManager.DisplayMessage(
            new InformationMessage($"{village.Name} 产: {producedItem.Name} x{weight}"));
    }

    bool producesFirst = village.IsProducing(village.VillageType.Productions[0].Item1);
    int warehouseCap = village.GetWarehouseCapacity();
    int level = village.GetHearthLevel();        // 0 / 1 / 2

    InformationManager.DisplayMessage(
        new InformationMessage(
            $"{village.Name}: 归属={boundTown.Name}, 炉火={village.Hearth}, 等级={level}, 仓库={warehouseCap}"));
}
```

### 示例 2：遍历所有村庄并统计废弃村庄；用正规 Action 恢复正常

```csharp
int lootedCount = 0;
foreach (Village v in Village.All)
{
    if (v.VillageState == Village.VillageStates.Looted || v.IsDeserted)
    {
        lootedCount++;
    }
}

// 想让某个村庄恢复正常：走 ChangeVillageStateAction，会正确维护登记表并广播事件
// （不要直接 village.VillageState = Village.VillageStates.Normal）
Settlement target = Settlement.CurrentSettlement; // 实际应取目标村庄的 Settlement
if (target != null && target.Village != null)
{
    ChangeVillageStateAction.ApplyBySettingToNormal(target);
    // 之后 target.Village.VillageState == Village.VillageStates.Normal
}
```

## 跨版本提示

- **1.3.15（本页）↔ 1.4.5（权威源对照）：** 公开成员签名基本一致。差异仅在底层模型调用与 `GetItemPrice` 的额外参数——1.3.15 的 `HearthChange` / `MilitiaChange` / `HearthChangeExplanation` 用 `CalculateHearthChange(this, false)` / `CalculateHearthChange(this, true)`（bool 重载），1.4.5 改为具名参数 `includeDescriptions:`；`GetItemPrice` 在 1.3.15 末尾多一个 `null` 参数。读写这些属性对 mod 透明。
- **1.3.0：** 源目录布局为 `TaleWorlds.CampaignSystem/Settlements/Village.cs`（未拆到 `Bannerlord.Source/bin` 下），API 表面同上，可同样使用 `settlement.Village`、`ChangeVillageStateAction`。

## 参见

- [Settlement](./Settlement/) — 持有 Village 组件的父据点（↑ Parent）
- [Town](../campaign-ext/Town/) — Bound 通常指向的城镇组件（↔ Sibling 同级组件）
- [VillageType](../campaign-ext/VillageType/) — 决定村庄生产列表的上游类型
- [Clan](./Clan/) — 村庄归属城镇背后的家族
- [Campaign](./Campaign/) — `Campaign.Current.AllVillages` 与全局状态入口
- [MBObjectManager](../campaign-ext/MBObjectManager/) — 反序列化时重建 Bound/VillageType 引用
- [ChangeVillageStateAction](../campaign-ext/ChangeVillageStateAction/) — 切换村庄状态的正规 Action
- [SettlementProsperityModel](../campaign-ext/SettlementProsperityModel/) — 炉火变化量的来源模型
- [VillageProductionCalculatorModel](../campaign-ext/VillageProductionCalculatorModel/) — 产出与仓库容量模型
