---
title: "Workshop"
description: "城镇中的一座工坊（铁匠铺、酒坊等）：由 Town 持有，记录业主、运营资金与每日生产进度。"
---
# Workshop

**Namespace:** `TaleWorlds.CampaignSystem.Settlements.Workshops`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class Workshop : SettlementArea`  
**Base:** `SettlementArea`  
**源文件路径:** `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements.Workshops/Workshop.cs`

## 一句话职责

它是城镇里某座具体工坊的运行时状态卡：谁拥有它、现在有多少运营资金、每天按什么配方生产，以及生产进度走到了哪里。

## 心智模型

把 `Workshop` 当作**“城镇里一张具体的店牌”**，而不是可买卖的抽象商品：

- 每个 `Workshop` 实例绑定到一个 `Settlement`（实际是它的 `Town`），并带一个唯一 `Tag`（如 `"workshop_0"`），用于在一座城里区分多座工坊。
- 工坊不是孤立对象：`Town` 在建立时通过 `InitializeWorkshops(int count)` 预先开出 `Workshop[]`，每座还没被分配前处于“空工坊”状态（`WorkshopType` 为 `null`，`Name` 回退到 `Empty Workshop`）。真正启用要走 `InitializeWorkshop(owner, type)`。
- 业主是一位 `Hero`，写入时同步维护 `Hero.OwnedWorkshops`（反向索引）和 `WorkshopType`（决定配方 `Productions`）。
- 工坊本身不跑生产循环；每天 `WorkshopsCampaignBehavior` 订阅的 `DailyTickTownEvent` 触发后，会按 `WorkshopType.Productions` 消耗城镇市场原料、产出成品、扣每日开销，并刷新 `LastRunCampaignTime` 与 `Capital`。
- 不要自己 `new Workshop(...)` 来做生意——创建一座空工坊是 `Town.InitializeWorkshops` 的职责，启用/转让/换产都应走 `InitializeWorkshop` / `ChangeOwnerOfWorkshop` / `ChangeWorkshopProduction`，让业主索引与每日流程保持一致。

## 如何获取 Workshop

```csharp
// 从城镇直接拿它持有的工坊数组
Town town = Settlement.CurrentSettlement.Town;
foreach (Workshop workshop in town.Workshops)
{
    // workshop.Tag: "workshop_0" / "workshop_1" ...
    // workshop.Owner: 当前业主英雄（可能为 null，尚未启用时）
    InformationManager.DisplayMessage(
        new InformationMessage($"{workshop.Name} 业主 {workshop.Owner?.Name}"));
}

// 从据点拿（Settlement.Town.Workshops 与 Town.Workshops 是同一数组）
Workshop[] workshops = Settlement.CurrentSettlement.Town.Workshops;

// 从业主反向拿他拥有的全部工坊
Hero owner = Hero.MainHero;
MBReadOnlyList<Workshop> owned = owner.OwnedWorkshops;
```

## 主要成员

工坊的公共成员都是**只读快照或受控变更入口**：直接写入私有字段会破坏 `Hero.OwnedWorkshops` 索引和每日循环。下面按主题分组。

### 身份与归属

| 成员 | 类型 | 用途 / 副作用 / 调用时机 |
|------|------|--------------------------|
| `Settlement` | `Settlement`（只读） | 工坊所属据点；就是构造时传入的 `_settlement`，不会变。 |
| `Tag` | `string`（只读） | 唯一标签（如 `"workshop_0"`），参与 `GetHashCode` 以区分同城工坊。 |
| `Owner` | `Hero`（只读） | 当前业主。`null` 表示尚未 `InitializeWorkshop` 或数据异常；改业主用 `ChangeOwnerOfWorkshop`，不要直接赋值。 |
| `Name` | `TextObject`（只读） | 显示名：优先 `_customName`，否则 `WorkshopType.Name`，都没有时回退到 `Empty Workshop`。设置店名用 `SetCustomName`。 |

### 经济与生产类型

| 成员 | 类型 | 用途 / 副作用 / 调用时机 |
|------|------|--------------------------|
| `WorkshopType` | `WorkshopType`（get private） | 工坊类型（铁匠、酿酒……），持有 `Productions` 配方数组。`null` 表示空工坊；换类型用 `ChangeWorkshopProduction`。 |
| `Capital` | `int`（get private） | 当前运营资金。增减用 `ChangeGold`，不要反射改私有字段。 |
| `InitialCapital` | `int`（get private） | 购买/启用时的初始资金，由 `WorkshopModel.InitialCapital` 决定。 |
| `ProfitMade` | `int`（只读） | 自启用以来的累计利润：`MathF.Max(Capital - InitialCapital, 0)`。用来判断这间店是否回本。 |
| `Expense` | `int`（只读） | 每日固定开销，直接来自 `Campaign.Current.Models.WorkshopModel.DailyExpense`。 |
| `LastRunCampaignTime` | `CampaignTime`（get private） | 上次每日 tick 运行的时刻；`WorkshopsCampaignBehavior` 跑完生产后调用 `UpdateLastRunTime` 刷新。 |

### 受控变更入口

#### `public void InitializeWorkshop(Hero owner, WorkshopType type)`
把一座空工坊正式启用：设置类型与业主、把工坊加入 `owner.OwnedWorkshops`、按 `WorkshopModel.InitialCapital` 初始化 `Capital`/`InitialCapital`，并分配与 `type.Productions.Count` 等长的 `_productionProgress`。由 `Town` 建立流程调用；模组一般不要手动调用，需要分配空工坊应走对应的 `*Action`（如 `InitializeWorkshopAction`）。

```csharp
// 示意：引擎建立城镇时启用一座工坊（模组应优先用 InitializeWorkshopAction 而非直接调）
Workshop empty = town.Workshops[0];
if (empty.Owner == null && empty.WorkshopType == null)
{
    empty.InitializeWorkshop(Hero.MainHero, WorkshopType.Find("workshop_smithy"));
}
```

#### `public void ChangeOwnerOfWorkshop(Hero newOwner, WorkshopType type, int capital)`
转让业主的正确入口。它会先从旧 `Owner.OwnedWorkshops` 移除、再加入新业主、写入 `Capital`；若 `type` 与当前 `WorkshopType` 不同，会一并调用 `ChangeWorkshopProduction` 重设生产进度。直接改 `_owner` 会丢掉反向索引，必须用这个入口。

```csharp
Workshop shop = town.Workshops[0];
Hero buyer = Hero.MainHero;
// 转让并带新资金；类型不变则传入原 WorkshopType
shop.ChangeOwnerOfWorkshop(buyer, shop.WorkshopType, shop.Capital);
```

#### `public void ChangeWorkshopProduction(WorkshopType newWorkshopType)`
改变生产类型，并把 `_productionProgress` 重置为与 `newWorkshopType.Productions.Count` 等长的新数组。换产会清空旧进度——这正是避免存档后数组长度不匹配的关键。

```csharp
Workshop shop = town.Workshops[0];
WorkshopType brewery = WorkshopType.Find("workshop_brewery");
shop.ChangeWorkshopProduction(brewery);
```

#### `public void SetCustomName(TextObject customName)`
为工坊设置自定义店名；之后 `Name` 会优先返回它。

```csharp
Workshop shop = town.Workshops[0];
shop.SetCustomName(new TextObject("主角的铁匠铺"));
```

#### `public void ChangeGold(int goldChange)`
对 `Capital` 做带符号增减（负数即扣款）。这是低层入口：每日开销与产出结算由 `WorkshopsCampaignBehavior` 通过它完成。需要人为注资/扣款且不涉及交易事件时可直接调，但不要用反射绕过它。

```csharp
Workshop shop = town.Workshops[0];
shop.ChangeGold(-shop.Expense); // 等价于扣掉一天的固定开销
```

#### `public void UpdateLastRunTime()`
把 `LastRunCampaignTime` 设为 `CampaignTime.Now`。由每日生产结算后调用，模组通常只在复刻每日流程时需要。

#### `public void SetProgress(int i, float value)`
设置第 `i` 条 `WorkshopType.Productions` 的累计生产进度。索引 `i` 必须与 `Productions` 顺序对应。

#### `public float GetProductionProgress(int index)`
读取第 `index` 条 `Productions` 的当前进度（`_productionProgress[index]`）。UI 显示生产条、行为做结算节流时常用。

```csharp
Workshop shop = town.Workshops[0];
for (int i = 0; i < shop.WorkshopType.Productions.Count; i++)
{
    float progress = shop.GetProductionProgress(i);
    // 进度达到 1 表示这一条配方本轮可结算一次
}
```

## 最小真实示例

### 示例 1：列出玩家城镇的工坊并读取业主与利润

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements.Workshops;

Town town = Settlement.CurrentSettlement.Town;
if (town.Workshops != null)
{
    foreach (Workshop workshop in town.Workshops)
    {
        Hero owner = workshop.Owner;
        if (owner != null && workshop.WorkshopType != null)
        {
            int profit = workshop.ProfitMade;
            InformationManager.DisplayMessage(
                new InformationMessage($"{workshop.Name}：业主 {owner.Name}，累计利润 {profit}"));
        }
    }
}
```

### 示例 2：把一座工坊转让给玩家并保留其当前资金

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements.Workshops;

Workshop shop = Settlement.CurrentSettlement.Town.Workshops[0];
if (shop.Owner != null)
{
    // 正确入口：维护 Hero.OwnedWorkshops 索引与 Capital
    shop.ChangeOwnerOfWorkshop(Hero.MainHero, shop.WorkshopType, shop.Capital);
}
```

## 依赖图

`Workshop` 是 `Town` 持有的叶子状态对象，自身不驱动循环，依赖上下游协作：

- 上游：[Town](../Town/) 在建立时通过 `InitializeWorkshops` 开出 `Workshop[]` 并逐个 `InitializeWorkshop`；基类 [SettlementArea](../SettlementComponent/)（同 `SettlementArea` 抽象）定义了 `Settlement` / `Tag` / `Owner` / `Name` 契约。
- 下游：[WorkshopsCampaignBehavior](../WorkshopsCampaignBehavior/) 订阅 `DailyTickTownEvent`，按 `WorkshopType.Productions` 跑每日生产、扣费、刷新 `LastRunCampaignTime`。
- 模型：[WorkshopModel](../WorkshopModel/) 提供 `InitialCapital`、`DailyExpense`、`CapitalLowLimit` 等经济参数；[WorkshopType](../WorkshopType/) 提供配方 `Productions`。
- 反向索引：[Hero](../../campaign/Hero/) 的 `OwnedWorkshops` 维护业主 ↔ 工坊关系，`ChangeOwnerOfWorkshop` 会同步增减。
- 原料/产出：生产消耗城镇市场、产出进入城镇 [ItemRoster](../ItemRoster/)，周转依赖 [Settlement](../../campaign/Settlement/) 的经济状态。
- 存档：工坊字段带 `[SaveableField]` / `[SaveableProperty]`，随 `Town` 一起序列化。

## 风险

1. **Town 初始化前访问**：`Town` 构造时 `Workshops` 先为 `new Workshop[0]`；尚未 `InitializeWorkshop` 的工坊 `WorkshopType` 为 `null`、`Owner` 为 `null`、`Name` 回退到 `Empty Workshop`。此时读 `WorkshopType.Productions` 会直接抛 `NullReferenceException`。访问前先判 `Owner != null` 与 `WorkshopType != null`。
2. **空业主**：`Owner` 可能为 `null`（空工坊或异常存档）。访问 `Owner.OwnedWorkshops`、取 `Owner.Name` 前必须判空，否则崩溃。
3. **绕过受控入口改字段**：直接（反射或取私有）改 `_owner` / `Capital` 会破坏 `Hero.OwnedWorkshops` 反向索引与每日结算，导致业主列表与资金不一致。转让走 `ChangeOwnerOfWorkshop`，资金走 `ChangeGold`。
4. **换产与进度数组长度**：`_productionProgress` 长度绑定 `WorkshopType.Productions.Count`。必须经由 `ChangeWorkshopProduction` 换产，它会重建数组；否则下次读取 `GetProductionProgress(i)` 越界或旧档 `AfterLoad` 被迫重建，生产进度清零。
5. **`LastRunCampaignTime` 时间语义**：它是 `CampaignTime`，旧档可能为 `CampaignTime.Zero`。`AfterLoad` 会把它修正为 `Now`，不要把它当作绝对历史时刻做精确时间差；做差计算前确认它不是 `Zero`。
6. **保存/重算交互**：工坊随 `Town` 存档。在每日 tick 之外手动 `ChangeGold` / `SetProgress` 不会重算利润与产出；若在非游戏开始阶段（`Campaign.Current.GameStarted == false`）改动，生产结算可能因 `effectCapital` 开关而忽略你的变更。

## 导航

- [↑ 战役扩展类索引](../)
- [↔ Town](../Town/) · [SettlementComponent](../SettlementComponent/) · [WorkshopType](../WorkshopType/) · [WorkshopModel](../WorkshopModel/) · [WorkshopsCampaignBehavior](../WorkshopsCampaignBehavior/) · [BarterManager](../BarterManager/) · [IssueManager](../IssueManager/)
- [相关类] [Settlement](../../campaign/Settlement/) · [Hero](../../campaign/Hero/) · [Clan](../../campaign/Clan/) · [ItemRoster](../ItemRoster/) · [WorkshopType](../WorkshopType/)
- [架构：崩溃与存档边界](../../../architecture/crash-boundaries/)
