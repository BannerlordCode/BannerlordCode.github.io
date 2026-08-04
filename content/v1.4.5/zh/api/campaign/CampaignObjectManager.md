---
title: "CampaignObjectManager"
description: "CampaignObjectManager 是当前战役的对象登记与查询中心，维护英雄、派系、据点和队伍分类，并参与读档后的对象重建。"
---
# CampaignObjectManager

**命名空间:** `TaleWorlds.CampaignSystem`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public class CampaignObjectManager`  
**基类:** 无显式基类  
**源文件:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignObjectManager.cs`

## 一句话职责

它把当前战役中已经注册的 `Hero`、`Clan`、`Kingdom`、`Settlement` 和 `MobileParty` 组织成可读取的分类集合，并提供按字符串 ID 或条件查找对象的入口；它不是供 Mod 临时创建对象的工厂。

## 心智模型

**战役拥有的登记表**

`Campaign` 在初始化时创建这个管理器，并通过 `Campaign.Current.CampaignObjectManager` 暴露它。管理器内部维护活动英雄与死亡/禁用英雄、Clan、Kingdom、Settlement，以及按组件分类的队伍集合。公开属性返回 `MBReadOnlyList<T>`，所以它更像战役对象目录的只读视图，而不是一个可以由调用者编辑的普通 `List<T>`。

队伍的分类不是静态标签。添加或移除 `MobileParty`、更换其 `PartyComponent`，或者英雄状态从存活变成死亡/禁用时，管理器会同步相应集合。`Campaign` 的保存收集器会保存核心登记表（存活/死亡英雄、Clan、Kingdom、MobileParty 和 Settlement）；`Factions` 以及按 `PartyComponent` 分类的队伍列表属于派生索引，读档时由 `InitializeOnLoad` 重新建立。

虽然构造函数是公开的，`CampaignObjectManager` 的实例仍属于 `Campaign` 的初始化边界。Mod 不应自行 `new CampaignObjectManager()` 来替换当前管理器；这样不会登记到现有战役，也不会建立完整的保存与生命周期关系。

**查找与创建的边界**

`Find<T>(string id)` 适合已经知道稳定字符串 ID 的对象，`FindFirst<T>` 和 `FindAll<T>` 适合按运行时条件筛选。找不到对象时这些查找会返回 `null` 或空的只读列表，调用者必须处理这一点。它们不会绕过游戏的创建流程，也不会为缺失对象补造 ID。

要创建或销毁战役对象，应使用对应的公开工厂、生命周期 API 或 Action，让管理器、实体关系、队伍组件和事件保持一致。直接修改只读视图、手动拼装对象 ID，或在没有活动 `Campaign.Current` 时查找，都会把本来由管理器维护的注册关系置于未定义状态。

## 何时使用，何时不要用

- **使用：** 从活动战役取得一个现有对象，或读取某一类已注册对象的快照，例如查找玩家 Clan、遍历活动队伍或筛选存活英雄。
- **不要使用：** 把 `FindAll` 当成创建/删除 API；它只返回符合条件的已登记对象。
- **不要使用：** 直接写入 `AliveHeroes`、`MobileParties` 等只读集合，或绕过 `MobileParty.CreateParty`、对象工厂和相关 Action 修改注册状态。
- **注意时机：** 模块加载、主菜单和战役销毁阶段可能没有有效的 `Campaign.Current`。在 `OnGameLoaded`、地图事件或已注册的战役 Behavior 中再读取战役对象。

## 依赖关系

- **所有者与上游：** [Campaign](../Campaign) 创建并持有管理器；[CampaignEvents](../CampaignEvents) 和 [CampaignBehaviorBase](../CampaignBehaviorBase) 是适合观察对象生命周期的下游入口。
- **对象关系：** 管理器登记 [Hero](../Hero)、[Clan](../Clan)、[Kingdom](../Kingdom)、[Settlement](../Settlement) 和 [MobileParty](../MobileParty)。队伍分类由 [PartyComponent](../PartyComponent) 的具体类型影响。
- **查找后的使用：** 取得队伍后仍应通过 [PartyBase](../PartyBase)、[MobileParty](../MobileParty) 以及对应的 Action 修改状态，而不是改管理器的集合。

## 公开查询面

| 成员 | 用途与边界 |
| --- | --- |
| `AliveHeroes` / `DeadOrDisabledHeroes` | 读取英雄状态分类；状态变化由英雄生命周期通知管理器。 |
| `Clans` / `Kingdoms` / `Factions` / `Settlements` | 读取当前登记的派系和据点。不要把返回集合当作可写存储。 |
| `MobileParties` 与各类队伍集合 | 按队伍组件分类读取队伍；组件更换后分类会被重新计算。 |
| `Find<T>` | 按已登记对象的字符串 ID 查询，找不到时返回 `null`。 |
| `FindFirst<T>` / `FindAll<T>` | 在相同类型的登记表中按 `Predicate<T>` 查询；结果只能代表当前快照。对 `FindAll<T>` 传入 `null` 谓词会返回该类型当前登记的全部对象。 |
| `FindNextUniqueStringId<T>` | 为创建流程提供下一个可用字符串 ID；不应由 Mod 用它替代具体对象工厂。 |

## 真实示例

下面的读取路径与战役源码使用的 `player_faction` 查询一致。查找结果仍可能为 `null`，因为对象可能尚未注册、已被移除，或当前并不是一个活动战役。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Library;

Campaign campaign = Campaign.Current;
if (campaign != null)
{
    Clan playerClan = campaign.CampaignObjectManager.Find<Clan>("player_faction");
    if (playerClan != null)
    {
        MBReadOnlyList<MobileParty> ownedParties = campaign.CampaignObjectManager.FindAll<MobileParty>(
            party => party.ActualClan == playerClan);
    }
}
```

如果只需要已经暴露的分类集合，可以直接读取活动英雄或队伍；不要在遍历时尝试移除元素。需要改变世界状态时，把对象交给对应的 Action 或生命周期入口。

## 风险与存档边界

- **空战役引用：** `Campaign.Current` 为 `null` 时，任何管理器查询都不能安全执行。把查询放在战役启动后的 Behavior、事件或地图阶段。
- **集合不是写入口：** 公开集合是只读视图，内部登记还承担 ID、对象类型和保存收集职责。直接改底层对象或保存集合会造成查找、百科、关系和读档状态不一致。
- **状态迁移：** 英雄死亡/禁用、队伍组件更换和队伍销毁必须经过游戏已有生命周期；只从一个集合中移除对象不会同步其它索引或事件。
- **读档顺序：** 管理器的 `PreAfterLoad`、`AfterLoad` 与各实体的加载回调有先后关系。不要在对象尚未恢复时缓存查询结果，必要时在 `OnGameLoaded` 或之后重新取得。

## 版本注记

本页以 v1.4.5 `TaleWorlds.CampaignSystem` 源码为准。跨版本使用时重新确认对象分类、字符串 ID 和读档回调；不要因为旧版本存在某个队伍集合，就假设当前版本仍以同样的注册时机填充它。

## 导航

- ↑ 父级：[Campaign API](../)
- ↔ 同级：[Campaign](../Campaign) · [CampaignEvents](../CampaignEvents) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [CampaignPeriodicEventManager](../CampaignPeriodicEventManager)
- 相关对象：[Hero](../Hero) · [Clan](../Clan) · [Kingdom](../Kingdom) · [Settlement](../Settlement) · [MobileParty](../MobileParty) · [PartyComponent](../PartyComponent)
