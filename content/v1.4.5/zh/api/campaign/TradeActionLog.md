---
title: "TradeActionLog"
description: "商队贸易行动日志条目：CaravansCampaignBehavior 在每次买入/卖出商品时为商队记录的一笔交易快照，存放买入地、买入价、卖出地、卖出价、商品元素与买入时刻，并据此计算利润率、为商队谣言对话提供素材。"
---
# TradeActionLog

**命名空间：** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `internal class TradeActionLog`（嵌套于 `CaravansCampaignBehavior` 内部的贸易日志数据载体，非 MBObjectBase 派生，由 `CaravansCampaignBehaviorTypeDefiner` 以 id 2 注册存档）
**源文件：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/CaravansCampaignBehavior.cs`

## 概述

`TradeActionLog` 是商队（`MobileParty.IsCaravan`）在战役中完成一轮商品买卖时被 `CaravansCampaignBehavior` 记下来的一笔「交易快照」：它记录某件物品在哪座据点以什么价格买入、之后又在哪座据点以什么价格卖出、由哪个 `ItemRosterElement` 承载，以及买入发生的战役时刻。它本身不计算任何经济规则，只是一段被对象池复用、随商队存档的轻量记录，供商队后续挑选「值得吹嘘的盈利交易」作为与玩家对话的谣言素材。

## 心智模型

把它想成商队账本上的一行流水，而不是经济系统本身。`TradeActionLog` 由 `CaravansCampaignBehavior` 在买入商品时通过 `TradeActionLogPool.CreateNewLog(...)` 从对象池借出一个实例并填好买入信息（`BoughtSettlement`、`BuyPrice`、`ItemRosterElement`、`BoughtTime`），卖出时再调用 `OnSellAction(...)` 补上 `SoldSettlement` 与 `SellPrice`。这些日志按商队分组存放在私有的 `_tradeActionLogs`（`Dictionary<MobileParty, List<TradeActionLog>>`）里，全部参与 `[SaveableField]` 存档——六个字段都被 `CaravansCampaignBehaviorTypeDefiner` 以 id 2 注册为可序列化字段。生命周期完全由 `CaravansCampaignBehavior` 掌控：商队进入据点时超过 7 天的旧日志会被回收并 `Reset` 后归还对象池；商队被摧毁时整条日志列表释放回池。因此 mod 不应自己创建 `TradeActionLog` 或长期持有引用，要读商队盈利记录应走 `Campaign.Current.GetCampaignBehavior<CaravansCampaignBehavior>()` 并依赖其公开接口，或直接观察其产出的 `OnCaravanTransactionCompleted` 事件。

## 何时使用 / 何时不要使用

- **不要**直接 `new TradeActionLog`：它是 `internal` 且由对象池管理，外部构造的实例不会被任何行为消费，也拿不到 `BoughtTime` 之外的正确状态。
- **不要**长期缓存 `TradeActionLog` 引用：对象池会在回收时 `Reset` 并复用同一实例，跨 tick 持有的引用内容会被悄悄改写。
- **用** `ProfitRate` 只读属性快速判断某笔交易是否盈利（>1.2 即高于 `ProfitRateRumorThreshold`），用于筛选可讲述的谣言。
- **用** `OnSellAction` 在卖出路径上补全日志——但仅当你是 `CaravansCampaignBehavior` 内部逻辑时才应调用，外部 mod 不应触碰。

## 依赖图

```mermaid
graph TD
    BEH[CaravansCampaignBehavior] --> LOG[TradeActionLog]
    POOL[TradeActionLogPool] --> LOG
    LOG --> SETT[Settlement]
    LOG --> ITEM[ItemRosterElement]
    LOG --> TIME[CampaignTime]
    LOG --> PARTY[MobileParty]
```

- 上游创建者：[CaravansCampaignBehavior](../CaravansCampaignBehavior) 通过内部 `TradeActionLogPool` 借出/回收 `TradeActionLog`，并持有按商队分组的 `_tradeActionLogs`。
- 数据关联：[Settlement](../Settlement)（`BoughtSettlement`/`SoldSettlement` 指向买入与卖出据点）、[MobileParty](../MobileParty)（日志列表以商队为键）、[Town](../Town)（买入与卖出价格来自 `Town.GetItemPrice`）。
- 序列化层：`CampaignTime` 经 `SaveableField(5)` 存档；整体随 `CaravansCampaignBehaviorTypeDefiner`（id 2）写入存档。

## 风险

- **internal + 池化复用：** `TradeActionLog` 是 `internal`，外部 mod 无法访问，且实例由 `TradeActionLogPool` 复用；对象池在 `ReleaseLog` 时调用 `Reset` 并可能再次 `Pop` 给下一次买入，意味着你手里持有的引用内容会随时被覆盖。任何跨 tick 的缓存都不可靠。
- **存档字段顺序：** 六个字段以 `SaveableField(0..5)` 编号序列化，加载顺序依赖 `CaravansCampaignBehaviorTypeDefiner` 的注册；自定义逻辑不应依赖日志内存顺序，应只通过 `ItemRosterElement.EquipmentElement.Item` 等业务键去匹配。
- **Campaign 层数据，Mission 不可直接读：** `TradeActionLog` 是 Campaign 经济数据，挂在商队上；在 `Mission`（战斗场景）里没有活动 Campaign 商队交易上下文，访问会拿到空或过期数据。
- **不要把它当可变世界状态改：** 要改变商队买卖行为应改 `CaravansCampaignBehavior` 的参数或对应经济 Model/Action，而不是去改这些日志里的 `BuyPrice`/`SellPrice`——它们只是已发生交易的记录，改了既不会回滚交易，也会污染谣言与统计。
- **7 天回收时机：** `OnSettlementEntered` 中只回收进入据点时超过 7 天的日志；若想在别处读取某商队的近期交易，注意更早的记录可能已被回收。

## 成员说明

### 买入信息（创建时由 `CreateNewLog` 填写）

| 成员 | 真实表示与用途 |
| --- | --- |
| `BoughtSettlement`（`Settlement`，`SaveableField(0)`） | 这笔交易商品的**买入据点**。由 `CreateNewLog(boughtSettlement, ...)` 写入，用于谣言文本里「我从 X 买进」的来源地。 |
| `BuyPrice`（`int`，`SaveableField(1)`） | 在买入据点成交的**买入单价**（来自 `town.GetItemPrice(...)`）。是计算利润率与谣言 `BUY_COST` 文本的基础。 |
| `ItemRosterElement`（`ItemRosterElement`，`SaveableField(3)`） | 这笔交易对应的**商品元素**（物品 + 数量）。`OnSellItems` 用它把卖出动作与正确的买入日志配对（比较 `EquipmentElement.Item`）。 |
| `BoughtTime`（`CampaignTime`，`SaveableField(5)`） | 买入发生的**战役时刻**。`OnSettlementEntered` 用它判断日志是否已存活超过 7 天以决定回收。 |

### 卖出信息（卖出时由 `OnSellAction` 补全）

| 成员 | 真实表示与用途 |
| --- | --- |
| `SoldSettlement`（`Settlement`，`SaveableField(4)`） | 这笔交易的**卖出据点**。`OnSellAction(soldSettlement, sellPrice)` 写入；在 `OnSellItems` 中仅当新卖价高于原 `SellPrice` 时刷新，使日志最终保留最高成交价。 |
| `SellPrice`（`int`，`SaveableField(2)`） | 在卖出据点的**最新卖出单价**。`OnSellAction` 写入，且只被更高卖价覆盖，代表该商品已实现的（最佳）卖出收入。 |
| `ProfitRate`（`float`，只读计算属性） | **利润率 = SellPrice / BuyPrice**。判断一笔交易是否盈利的唯一派生指标；`caravan_ask_trade_rumors_on_consequence` 用它（>1.2）筛选可讲述的盈利交易。 |
| `OnSellAction(Settlement, int)` | 卖出路径上的「补全」方法：把卖价与卖出据点写回日志。它**不创建也不销毁**日志，只是把买入快照升级成完整交易记录。 |
| `Reset()` | 对象池回收时调用：清空两个据点引用、把买卖价归零，使实例可安全复用于下一笔交易。 |

## 怎么用

这是商队每完成一笔买卖留下的一条交易快照。它不计算任何经济规则，只是一段被对象池复用、随商队存档的轻量记录。

**怎么拿到它**：声明在 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/CaravansCampaignBehavior.cs:67`，是 `CaravansCampaignBehavior` 的**嵌套 internal 类**。所以外部 mod 拿不到类型，只能靠反射，而它的用途本身就是「给商队挑一条盈利交易当对话谣言素材」，不是给你直接调用的。

六个存档字段记录一笔买卖的两端：`BoughtSettlement`（`SaveableField(0)`）与 `BuyPrice`（`(1)`）是买入端，`SoldSettlement`（`(4)`）与 `SellPrice`（`(2)`）是卖出端，`ItemRosterElement`（`(3)`）承载被交易的那件物品，`BoughtTime`（`(5)`）记录买入时刻。存档注册在 `CaravansCampaignBehavior.cs:42` 与 `:43`，两个容器定义分别是 `List<TradeActionLog>` 与 `Dictionary<MobileParty, List<TradeActionLog>>`——**第二个说明它按商队归属**，一条记录属于某支商队。

```csharp
// internal 类，只能反射看它的形状；下面是读它该有的形状，不是可直接编译的调用
Type t = typeof(CaravansCampaignBehavior).GetNestedType("TradeActionLog",
    System.Reflection.BindingFlags.NonPublic);
foreach (System.Reflection.FieldInfo f in t.GetFields(
    System.Reflection.BindingFlags.Public | System.Reflection.BindingFlags.NonPublic))
{
    object attr = f.GetCustomAttributes(typeof(SaveableField), false);
    Debug.Print(f.Name + " 类型=" + f.FieldType.Name
        + " 存档属性=" + (attr.Length > 0 ? "有" : "无"), 0);
}
Debug.Print("存档容器：List<TradeActionLog> 与 Dictionary<MobileParty, List<TradeActionLog>>", 0);
```

自动生成的存档代码在 `AutoGeneratedSaveManager.cs:2278` 起（`AutoGeneratedStaticCollectObjectsTradeActionLog`），字段绑定在 `:2280`–`:2283`。

它的「价值」不在字段本身而在**配对关系**：`BuyPrice` 与 `SellPrice` 的差额才是这笔交易的利润，而 `BoughtSettlement` 与 `SoldSettlement` 决定它是不是一趟「A 城买 B 城卖」的正常商队行为。挑谣言素材时四个字段要一起看，只比单价会挑出一堆在同城原地交易的垃圾条目。

存档 id 从 0 编到 5，而且**不是按字段声明顺序编的**：`BoughtSettlement` 是 0、`SellPrice` 是 2、`ItemRosterElement` 是 3、`SoldSettlement` 是 4、`BoughtTime` 是 5，只有 `BuyPrice` 占 1。写存档迁移代码时不能按声明顺序推 id，必须看属性上的数字。

**最常见的坑**：internal 加对象池复用。实例由 `TradeActionLogPool` 复用，`ReleaseLog` 时调 `Reset` 并可能再次 `Pop` 给下一次买入，意味着你手里持有的引用内容会随时被覆盖。任何跨 tick 的缓存都不可靠。

## 示例

以下代码镜像 `CaravansCampaignBehavior` 内部对 `TradeActionLog` 的真实用法（注意它是 `internal`，仅在该行为内部可访问）。

### 买入时从对象池创建日志

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.CampaignSystem.Roster;

// 在 BuyCategory 内：为本次买入的商品创建/复用一条 TradeActionLog
if (caravanParty.LastVisitedSettlement != null && destinationForMobileParty != null && Campaign.Current.GameStarted)
{
    if (!_tradeActionLogs.TryGetValue(caravanParty, out var logs))
    {
        logs = new List<TradeActionLog>();
        _tradeActionLogs.Add(caravanParty, logs);
    }
    int buyPrice = town.GetItemPrice(rosterElement.EquipmentElement, caravanParty);
    logs.Add(_tradeActionLogPool.CreateNewLog(town.Settlement, buyPrice, rosterElement));
}
```

### 商队谣言对话中筛选盈利交易

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;

// 在 caravan_ask_trade_rumors_on_consequence 内：挑选利润率 > 1.2 的交易讲述
if (_tradeActionLogs.TryGetValue(MobileParty.ConversationParty, out var value))
{
    foreach (TradeActionLog item in value)
    {
        float profitRate = item.ProfitRate;
        if (profitRate > 1.2f && item.SoldSettlement != null && item.SoldSettlement != item.BoughtSettlement)
        {
            MBTextManager.SetTextVariable("ITEM_NAME", item.ItemRosterElement.EquipmentElement.Item.Name);
            MBTextManager.SetTextVariable("SETTLEMENT", item.BoughtSettlement.EncyclopediaLinkWithName);
            MBTextManager.SetTextVariable("DESTINATION", item.SoldSettlement.EncyclopediaLinkWithName);
        }
    }
}
```

## 参见

- ↑ 父级：[Campaign API 索引](../)
- ↔ 相关：[CaravansCampaignBehavior](../CaravansCampaignBehavior) · [Settlement](../Settlement) · [MobileParty](../MobileParty) · [Town](../Town) · [Hero](../Hero) · [Clan](../Clan)
