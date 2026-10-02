---
title: "Village"
description: "村庄聚落组件：火炉、民兵、村庄状态、生产、绑定与贸易绑定关系、仓库与物价。"
---

# Village

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Village : SettlementComponent`
**Base:** `SettlementComponent`
**File:** `TaleWorlds.CampaignSystem/Settlements/Village.cs`

## 概述

`Village` 是地图上星罗棋布的小型聚落所对应的 [Settlement](../Settlement) 组件。它直接继承 `SettlementComponent`（不像 [Town](../Town) 那样经过 `Fief` 一层），并且是整场战役的生产引擎：村庄产出物资，并通过 `Bound` 把产出输送给它所属封地的繁荣度。

真正要紧的是两个数值：

- **`Hearth`** —— 村庄规模。0 表示已废弃；低于 `LowHearthThreshold`（200）算贫困，低于 `MidHearthThreshold`（600）算勉强，跨越两者则算健康。`GetHearthLevel()` 返回分档。
- **`Militia`** —— 村庄自身的防卫力量，由火炉数换算。

村庄还带有一套由每日 tick 驱动的**状态机** `Village.VillageStates`：`Normal`、`BeingRaided`、`ForcedForVolunteers`、`ForcedForSupplies`、`Looted`。`IsDeserted` 是它的快捷视图——它精确等于 `VillageState == Looted`，所以正在被劫掠的村庄**并不算**已废弃，尽管它也不正常生产。

三个连接定义了村庄的角色：

| 连接 | 含义 |
|------|------|
| `Bound` | 其产出供给繁荣度的封地 |
| `TradeBound` | 其贸易所用的城镇 |
| `Settlement` | 村庄自身的地图对象 |

## 心智模型

```
Settlement (IsVillage)
  └─ SettlementComponent
       └─ Village
            ├─ Hearth / HearthChange / GetHearthLevel()
            ├─ Militia / MilitiaChange
            ├─ VillageState（Normal → BeingRaided → Looted ...）
            ├─ Bound ────────► Settlement（封地）    繁荣度来源
            ├─ TradeBound ───► Settlement（城镇）    市场来源
            ├─ MarketData ───► VillageMarketData
            ├─ ItemRoster ───► 仓库（GetWarehouseCapacity）
            └─ VillagerPartyComponent ─► 村民部队
```

典型调用顺序：

```
MBSubModuleBase.OnCampaignStart
    Village.All 已填充；Village.OnInit() 已执行
CampaignBehaviorBase.RegisterEvents()
    CampaignEvents.DailyTickSettlementEvent / VillageStateChanged
DailyTick（直接传入村庄对象）
    读取 village.Hearth、village.Militia
    模型重算 HearthChange / MilitiaChange
    Village.DailyTick() 推进火炉增长、状态与仓库补货
```

实际开发中最容易踩的坑：

- **`Bound` 与 `TradeBound` 通常是不同的聚落。** 一个绑定到城堡的村庄可以通过附近的城镇贸易。默认两者相同是村庄逻辑里的经典 bug。
- **`Bound` 可能为 null。** 荒野中的村庄、叛乱期间以及 `VillageState` 变化之后都可能没有封地。在参与繁荣度计算前务必判空。
- **`VillageStates.Normal` 是零值。** 一个从未走过 `OnInit` 的村庄会报告 `Normal`，看起来很健康，但实际上既无绑定封地也无库存。
- **`HearthChange` 是增量而不是总量。** `Hearth` 是当前规模，`HearthChange` 是今日增长或损失。把 `HearthChange` 当“规模”播报，是典型的差一天错误。
- **`Militia` 不是封地的民兵。** 村庄有自己的小队；真正的守备军与城镇民兵在城镇那边。
- **`DailyTick()` 由引擎驱动。** 自己调用会让火炉增长与状态转移推进两次。

## 依赖关系

| 方向 | 类型 | 关系 |
|-----------|------|--------------|
| 基类 | `SettlementComponent` → [Settlement](../Settlement) | `village.Settlement` 回到上层 |
| 封地 | [Town](../Town) | `Bound`（繁荣度）、`TradeBound`（市场） |
| 部队 | [MobileParty](../MobileParty) | `VillagerPartyComponent`、防守部队 |
| 政治 | [Clan](../Clan)、[Kingdom](../Kingdom) | 通过聚落所有者解析 `MapFaction` |
| 模型 | `VillageProductionCalculatorModel`、`VillageTradeModel`、`SettlementMilitiaModel` | 生产、贸易、民兵换算 |
| 物品 | `VillageMarketData`、`ItemRoster` | 价格与仓库库存 |
| 事件 | [CampaignEvents](../CampaignEvents) | `VillageStateChanged`、`VillageBeingRaided`、`DailyTickSettlementEvent` |

## 主要成员

### 规模

#### `public float Hearth { get; set; }`

当前火炉数。可写，但每日 tick 会根据 `HearthChange` 覆盖它；只有在你有意调整村庄规模时才写。

#### `public float HearthChange` / `public ExplainedNumber HearthChangeExplanation`

今日的增长或衰退，以及成因。给玩家看的应当是 `HearthChangeExplanation`。

#### `public int GetHearthLevel()`

由 `Hearth` 对照 `LowHearthThreshold`（200）与 `MidHearthThreshold`（600）推导出的分档索引。

#### `public const int NumberOfDaysToFillVillageStocks = 5`

被劫掠后每日 tick 填满仓库所需的天数。用来给 mod 内容排节奏很方便。

### 状态

#### `public Village.VillageStates VillageState`

原始状态枚举。请对它做 switch，布尔视图只是局部的。

#### `public bool IsDeserted`

精确等于 `VillageState == VillageStates.Looted`。很廉价，但不完整：它不覆盖劫掠与强征状态。

#### `public float LastDemandSatisfiedTime { get; private set; }`

绑定封地上次满足该村庄生产需求的时间。这是一条只读审计线索——想重置它只能通过状态变更。

### 连接

#### `public Settlement Bound`

该村庄供给的封地。未绑定时为 null；城镇繁荣度正是读这个值。

#### `public Settlement TradeBound`

该村庄贸易所用的城镇。可能与 `Bound` 不同。

### 武力与经济

#### `public float Militia` / `public float MilitiaChange` / `public ExplainedNumber MilitiaChangeExplanation`

村庄防卫力量及其每日增量。与封地民兵不同。

#### `public IEnumerable<PartyBase> GetDefenderParties(MapEvent.BattleTypes battleType)` / `public PartyBase GetNextDefenderParty(ref int partyIndex, MapEvent.BattleTypes battleType)`

遍历“在地图事件中会防守该村庄的部队”的一对枚举方法。循环里请用带 `ref int` 游标的版本；`GetDefenderParties` 每次调用都会新建序列。

#### `public VillageMarketData MarketData`

村庄自身商品的价格数据。

#### `public bool IsProducing(ItemObject item)`

该村庄当前是否生产这个物品。它读取生产计算器，因此会反映村庄类型、火炉等级与绑定封地的需求。

#### `public int GetWarehouseCapacity()`

村庄能存放多少物品单位。超出后生产会停止。

#### `public override int GetItemPrice(ItemObject item, MobileParty tradingParty = null, bool isSelling = false)` / `GetItemPrice(EquipmentElement, ...)`

村庄价格。与 [Town](../Town) 相同的双重重载形状。

#### `public override IFaction MapFaction`

经由聚落所有者解析，并尊重村庄状态。

### 查找与生命周期

#### `public static MBReadOnlyList<Village> All`

全部村庄，数量很大（数百个）；活动视图。

#### `public override void OnInit()` / `public void DailyTick()`

引擎生命周期钩子。`DailyTick()` 推进火炉、状态与库存——绝不自己调用。

## 使用示例

### 示例 1：观察绑定封地的繁荣度输入

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;

public sealed class VillageWatchBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.VillageStateChanged.AddNonSerializedListener(
            this, OnVillageStateChanged);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    // IMbEvent<Village, VillageStates, VillageStates, MobileParty>
    private void OnVillageStateChanged(
        Village village, Village.VillageStates oldState, Village.VillageStates newState, MobileParty raider)
    {
        if (village == null || oldState == newState)
        {
            return;
        }

        InformationManager.DisplayMessage(new InformationMessage(
            $"{village.Settlement.Name}：{oldState} → {newState}，" +
            $"火炉 {village.Hearth:0}，绑定 {village.Bound?.Name.Name ?? "无"}"));
    }
}
```

### 示例 2：这个村庄真的在供养它的封地吗？

```csharp
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public static bool FeedsItsFief(Village village)
{
    if (village == null || village.Bound == null || village.IsDeserted)
    {
        return false;
    }

    CharacterObject grain = MBObjectManager.Instance.GetObject<CharacterObject>("grain");
    return grain != null && village.IsProducing(grain);
}
```

### 示例 3：不逐帧分配地枚举防守部队

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;

public static int CountDefenders(Village village, MapEvent.BattleTypes battleType)
{
    if (village == null)
    {
        return 0;
    }

    int index = 0;
    int count = 0;
    for (PartyBase party = village.GetNextDefenderParty(ref index, battleType);
         party != null;
         party = village.GetNextDefenderParty(ref index, battleType))
    {
        count += party.NumberOfHealthyMembers;
    }

    return count;
}
```

### 示例 4：为任务条件对村庄分类

```csharp
using TaleWorlds.CampaignSystem.Settlements;

public static string Classify(Village village)
{
    if (village == null)
    {
        return "无";
    }

    switch (village.VillageState)
    {
        case Village.VillageStates.Normal:
            return $"正常村庄（{village.Hearth:0} 火炉）";
        case Village.VillageStates.BeingRaided:
            return "正在被劫掠";
        case Village.VillageStates.ForcedForVolunteers:
        case Village.VillageStates.ForcedForSupplies:
            return "被强征";
        case Village.VillageStates.Looted:
            return "已遭洗劫";
        default:
            return village.VillageState.ToString();
    }
}
```

## 风险与崩溃边界

1. **`Bound` 在真实战役中会为 null。** 叛乱、新建村庄与劫掠后的状态都会让它变成 null。无保护地解引用会在每日 tick 上抛异常，而那会杀死整个 tick 循环，而不只是你的处理函数。
2. **状态默认值陷阱。** 未走 `OnInit` 的村庄报告 `Normal`，看起来健康却既无绑定封地也无库存。请显式枚举你关心的状态。
3. **`Hearth` 与 `HearthChange`。** 写 `Hearth` 会在下一个 tick 被覆盖。要做一次性微调请用 `HearthChange`，并预期 tick 会重算它。
4. **`DailyTick()` 不幂等。** 手动调用会让增长、补货与状态转移推进两次，并使村庄与其绑定封地失去同步。
5. **与存档耦合。** `Hearth`、`TradeTaxAccumulated` 与物品名册通过聚落数据宿主序列化；村庄状态由 `AfterLoad` 重建。重新编号存档 id 会破坏已有存档，参见 [存档系统](../../../architecture/save-system)。
6. **防守部队枚举有分配。** `GetDefenderParties` 会新建序列；热路径请用 `GetNextDefenderParty(ref int, ...)`。
7. **跨域依赖。** `MarketData` 的价格只在交易系统内部成立；从地图回调读取会绕过利润与声望。
8. **仓库溢出。** 向 `ItemRoster` 写入超过 `GetWarehouseCapacity()` 的物品不会报错，只会让生产停止——这是一个看起来像“村庄坏了”的静默死锁。

## 跨版本提示

- `Hearth`、各阈值（`LowHearthThreshold = 200`、`MidHearthThreshold = 600`）、`NumberOfDaysToFillVillageStocks = 5` 以及五个成员的 `VillageStates` 枚举在 1.3.x 与 1.4.x 中保持稳定。
- 后续构建增加了更多 `VillageType` 行为。由于状态处理是消费方代码里的 switch，新增枚举成员是源码兼容但行为有变化的更新——跨版本迁移时请检查你的 `default:` 分支。

## 参见

- [Settlement](../Settlement) — 该组件所属的地图对象
- [Town](../Town) — 村庄绑定与贸易的封地和城镇
- [Clan](../Clan) — 谁拥有该村庄所在的聚落
- [Hero](../Hero) — 住在其中的名士与村民
- [MobileParty](../MobileParty) — 村民部队与劫掠者
- [Campaign](../Campaign) — 聚落注册表与每日 tick
- [存档系统](../../../architecture/save-system) — Saveable 属性纪律
- [战役基础](../../../guide/campaign-basics) — 以任务为导向的上手指南