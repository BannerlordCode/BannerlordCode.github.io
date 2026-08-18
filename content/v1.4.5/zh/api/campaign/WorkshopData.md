---
title: "WorkshopData"
description: "WorkshopsCampaignBehavior 内部维护的玩家工坊经济载体：记录每间玩家工坊是否从仓库取料、每次产出有多少入库，以及仓库/城镇两条生产进度累加器，并随战役存档经 [SaveableField] 序列化。"
---
# WorkshopData

**命名空间：** `TaleWorlds.CampaignSystem.CampaignBehaviors`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `internal class WorkshopData`（嵌套于 `WorkshopsCampaignBehavior` 内部的私有数据载体）  
**源文件：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/WorkshopsCampaignBehavior.cs`

## 概述

`WorkshopData` 是 `WorkshopsCampaignBehavior` 为**每一位玩家拥有的工坊**额外维护的一份经济运行快照，它把“这间铺子跟玩家的仓库怎么互动”这件事拆成几个数值：是否从城镇仓库取生产原料、每次产出中有多少比例存入仓库、以及仓库线和城镇线各自累积到“能产出一件货”的进度。它不属于 `Workshop` 对象本身（`Workshop` 只管归属、资本与配方进度），而是被行为单独放在一个与 `WorkshopModel.MaximumWorkshopsPlayerCanHave` 等长的并行数组 `_workshopData` 里，靠“数组槽位 ↔ 工坊”的对应关系来查找；所有字段都用 `[SaveableField]` 标记，跟随战役存档一起读写。

## 心智模型

把 `WorkshopData` 想成**贴在玩家工坊上的一张“仓库运转记录卡”**：`Workshop` 管“这间铺子归谁、有多少本金、在产什么”，而 `WorkshopData` 管“它和玩家仓库之间怎么进料、怎么出货”。它不是 `MBObjectBase`，没有 `StringId`，也**不是**挂在 `Workshop` 上的属性——它完全由 `WorkshopsCampaignBehavior` 在战役运行时 `new` 出来并保存在一个内部并行数组 `_workshopData` 中，长度固定为 `WorkshopModel.MaximumWorkshopsPlayerCanHave`。当玩家买下一间工坊、工坊易主给玩家或玩家把工坊转产时，`AddNewWorkshopData(workshop)` 在数组里找一个空槽塞入一条新记录；当工坊离开玩家手中时 `RemoveWorkshopData` 把对应槽位清空。行为每天对每个城镇 tick 时，经 `GetDataOfWorkshop(workshop)`（线性扫描数组比对 `Workshop` 引用）取出这条记录，在 `TickOneProductionCycleForPlayerWorkshop` 里读取 `IsGettingInputsFromWarehouse` 决定原料来自仓库还是城镇市场、用 `StockProductionInWarehouseRatio` 把产出切分给仓库与城镇，并累加 `ProductionProgressForWarehouse` / `ProductionProgressForTown` 两个 0~1 的进度。因为全程由行为持有，mod 不应自己 `new WorkshopData(...)`，也不该直接改这些字段，而要经 `IWorkshopWarehouseCampaignBehavior` 的接口方法读写——直接改数组里的对象会让仓库 UI 与每日生产逻辑脱节。

## 何时使用 / 何时不要使用

- **用：** 只读诊断某间玩家工坊的仓库取向（是否从仓库取料、产出入库比例、两条生产进度），或想经由接口改写这些取向。
- **用：** 通过 `Campaign.Current.GetCampaignBehavior<IWorkshopWarehouseCampaignBehavior>()` 拿到接口，调用其读取/设置方法——这是唯一面向外部的访问入口。
- **不要：** 自己 `new WorkshopData(...)` 或手动维护一份 `Workshop → WorkshopData` 映射；生命周期与数组槽位归行为所有，自己建的实例不会被存档、也不会被每日 tick 读取。
- **不要：** 直接拿到 `_workshopData` 中的对象并写 `IsGettingInputsFromWarehouse` / `StockProductionInWarehouseRatio` 等字段；应走接口方法，否则会绕过行为内的容量校验与事件广播。
- **不要：** 把它当成“生产配方”或“经营账本”本身——配方在 `WorkshopType.Productions`，本金/利润在 `Workshop`，二者都不是 `WorkshopData`。

## 依赖图

| 方向 | 节点 | 关系 |
|------|------|------|
| 持有者 | [WorkshopsCampaignBehavior](../WorkshopsCampaignBehavior) | 在 `_workshopData` 并行数组里创建/查找/删除每条 `WorkshopData`，并在每日 tick 中读写其字段 |
| 序列化 | `WorkshopsCampaignBehaviorTypeDefiner`（`SaveableTypeDefiner`） | `AddClassDefinition(typeof(WorkshopData), 10)` 登记类型；`_workshopData` 经 `SyncData` 随档读写，五个字段各有 `[SaveableField(1..5)]` |
| 关联对象 | [Workshop](../Workshop) | `Workshop` 字段是反向引用，标识这条记录属于哪间工坊；行为靠它线性匹配数组槽位 |
| 参数来源 | [WorkshopModel](../WorkshopModel) | `MaximumWorkshopsPlayerCanHave` 决定 `_workshopData` 数组长度；`WarehouseCapacity` 决定入库是否到达上限 |
| 仓库库存 | [ItemRoster](../ItemRoster) | `IsGettingInputsFromWarehouse` 为 true 时从玩家在该定居点的仓库 `ItemRoster` 取料、并把产出写入其中 |
| 生产配方 | [WorkshopType](../WorkshopType) | `TickOneProductionCycleForPlayerWorkshop` 用 `WorkshopType.Productions` 决定输入/输出，再结合本记录的取向切分产出 |
| 外部接口 | [IWorkshopWarehouseCampaignBehavior](../IWorkshopWarehouseCampaignBehavior) | 仓库 UI 与 mod 经此接口读写 `IsGettingInputsFromWarehouse` / `StockProductionInWarehouseRatio` |
| 地理容器 | [Town](../Town) · [Settlement](../Settlement) | 工坊属于某个城镇；仓库 `ItemRoster` 按 `workshop.Settlement` 定位 |
| 归属 | [Hero](../Hero) | 仅玩家（[Hero.MainHero](../Hero)）拥有的工坊才有 `WorkshopData` 记录 |
| 上层 | [Campaign](../Campaign) | 行为、`WorkshopModel` 与接口都活在活动 `Campaign` 内 |

## 风险

- **它是 `internal` 且由行为持有：** 没有公开构造函数暴露给 mod，也不要假设 `Workshop` 上有 `WorkshopData` 属性可取——真实访问入口是 `IWorkshopWarehouseCampaignBehavior`。直接 new 或缓存数组引用会因为数组在版本迁移时可能被 `EnsureBehaviorDataSize` 整体重建而失效。
- **数组容量与索引：** `_workshopData` 长度固定为 `WorkshopModel.MaximumWorkshopsPlayerCanHave`，`GetDataOfWorkshop` 是线性扫描；玩家工坊数超过该上限时新工坊不会得到记录（接口方法会返回默认值而非崩溃，但行为也不会为它跑仓库逻辑）。
- **存档顺序与迁移：** 五个字段全部 `[SaveableField]` 序列化；旧版本存档（`< v1.2.0` / `< v1.2.9.35637`）在 `OnGameLoaded` 里会被补建或按主人过滤清理 `_workshopData`，自定义读档逻辑不要提前假定记录已就绪。
- **进度累加器是 0~1 累加：** `ProductionProgressForWarehouse` / `ProductionProgressForTown` 由 `AddOutputProgressForWarehouse/Town` 累加，达到 1 才真正产出一件货并回扣 1；直接改它们会让“产出一件”的触发时机错乱。
- **Mission 层不可见：** 这是纯 Campaign 经济数据，进入到战斗/场景（Mission）后不会自动同步；仓库 UI 也只在城镇菜单上下文里有效，不要在 Mission 中读取。
- **改取向要走接口：** 裸写 `IsGettingInputsFromWarehouse` / `StockProductionInWarehouseRatio` 会绕过 `IWorkshopWarehouseCampaignBehavior` 的容量与一致性处理；正确做法是调用 `SetIsGettingInputsFromWarehouse` / `SetStockProductionInWarehouseRatio`。

## 成员说明

`WorkshopData` 的五个业务字段全部以 `[SaveableField]` 标记并参与序列化；下表说明它们**真正表示/计算什么**，而非签名。

| 成员 | 真正表示什么 |
| --- | --- |
| `Workshop Workshop`（`[SaveableField(1)]`） | 这条记录绑定的工坊反向引用，是行为与数组槽位之间匹配的关键。`GetDataOfWorkshop` 用 `workshopData.Workshop == workshop` 在 `_workshopData` 中定位记录；`ToString` 也会经它取 `WorkshopType` 与 `Settlement` 名。 |
| `bool IsGettingInputsFromWarehouse`（`[SaveableField(2)]`） | 该玩家工坊是否从**玩家在该城镇的仓库**取生产原料，而不是从城镇市场/领主 `ItemRoster` 取料。为 true 时 `TickOneProductionCycleForPlayerWorkshop` 优先消耗仓库库存，不足才退回城镇市场。 |
| `float ProductionProgressForWarehouse`（`[SaveableField(3)]`） | 本周期“将送入仓库”的产出进度累加器（0~1）。`AddOutputProgressForWarehouse` 按入库比例累加，达到 1 时真正产出一件货进仓库并回扣 1。 |
| `float ProductionProgressForTown`（`[SaveableField(4)]`） | 本周期“将送往城镇市场”的产出进度累加器（0~1），与仓库线互补；达到 1 时把货交给城镇并结算资金。 |
| `float StockProductionInWarehouseRatio`（`[SaveableField(5)]`） | 每次产出中有多少比例入库（0~1，等于 1 表示全部进仓库）。它决定每件产出在 `ProductionProgressForWarehouse` 与 `ProductionProgressForTown` 之间如何切分，也决定输出是否会走仓库容量上限判断。 |

### 构造与格式化

| 成员 | 说明 |
| --- | --- |
| `WorkshopData(Workshop workshop)` | 内部构造：仅把 `Workshop` 反向引用写入，其余字段保持默认值（取料关、比例为 0、两条进度为 0）。由 `AddNewWorkshopData` 在数组空槽中调用，mod 不应直接使用。 |
| `ToString()` | 返回 `"<WorkshopType> in <Settlement名称>"`，便于日志/调试；它直接读 `Workshop.WorkshopType` 与 `Workshop.Settlement`，因此 `Workshop` 引用必须非空。 |

> 注意：`AutoGeneratedStaticCollectObjectsWorkshopData` / `AutoGeneratedGetMemberValueXxx` 等方法是 SaveSystem 代码生成器为 `[SaveableField]` 自动生成的存取桩，仅用于反序列化收集，不应在业务代码中调用。

## 示例

### 示例 1：读取某玩家工坊的仓库取向（只读，经接口）

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;
using TaleWorlds.CampaignSystem.Settlements.Workshops;

// 玩家视角：通过 IWorkshopWarehouseCampaignBehavior 读取仓库设置
IWorkshopWarehouseCampaignBehavior warehouseBehavior =
    Campaign.Current.GetCampaignBehavior<IWorkshopWarehouseCampaignBehavior>();

foreach (Workshop workshop in Hero.MainHero.OwnedWorkshops)
{
    bool usesWarehouse = warehouseBehavior.IsGettingInputsFromWarehouse(workshop);
    float stockRatio = warehouseBehavior.GetStockProductionInWarehouseRatio(workshop);
    // stockRatio == 1 表示每次产出全部入库；0 表示全部卖往城镇市场
}
```

### 示例 2：把某玩家工坊的产出全部导向仓库（经接口改写）

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;
using TaleWorlds.CampaignSystem.Settlements.Workshops;

Workshop playerShop = Hero.MainHero.OwnedWorkshops.FirstOrDefault();
if (playerShop != null)
{
    IWorkshopWarehouseCampaignBehavior warehouseBehavior =
        Campaign.Current.GetCampaignBehavior<IWorkshopWarehouseCampaignBehavior>();

    // 让该工坊从玩家仓库取原料，并把 100% 产出存入仓库
    warehouseBehavior.SetIsGettingInputsFromWarehouse(playerShop, true);
    warehouseBehavior.SetStockProductionInWarehouseRatio(playerShop, 1f);
}
```

> 对比：直接拿到 `_workshopData` 中的对象写 `data.IsGettingInputsFromWarehouse = true` 虽然字段可见，但会绕过接口的容量与一致性处理，且依赖内部数组结构——始终优先用 `IWorkshopWarehouseCampaignBehavior`。

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 同级相关：[WorkshopsCampaignBehavior](../WorkshopsCampaignBehavior) · [Workshop](../Workshop) · [WorkshopType](../WorkshopType) · [WorkshopModel](../WorkshopModel) · [IWorkshopWarehouseCampaignBehavior](../IWorkshopWarehouseCampaignBehavior) · [Town](../Town) · [Settlement](../Settlement) · [Hero](../Hero) · [ItemRoster](../ItemRoster) · [ItemObject](../../core-extra/ItemObject/) · [Campaign](../Campaign)
