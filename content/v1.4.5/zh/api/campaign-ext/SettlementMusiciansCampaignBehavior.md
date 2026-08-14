---
title: "SettlementMusiciansCampaignBehavior"
description: "城镇/城堡/村庄地点场景的乐手配乐行为：依据定居点文化、忠诚度、王国实力与地理距离做文化加权，为场景中的 MusicianGroup 动态计算并下发一套加权随机播放列表。"
---

# SettlementMusiciansCampaignBehavior

**类型：** class `SettlementMusiciansCampaignBehavior` : `CampaignBehaviorBase`
**命名空间：** `TaleWorlds.CampaignSystem.SandBox.CampaignBehaviors`
**模块：** `SandBox`
**源文件：** `bannerlord-1.4.5/Bannerlord.Source/Modules.SandBox/SandBox/SandBox.CampaignBehaviors/SettlementMusiciansCampaignBehavior.cs`

## 概述

`SettlementMusiciansCampaignBehavior` 负责在玩家进入城镇、城堡或村庄的「地点（Location）」场景时，为场景里摆着的乐手（`MusicianGroup` 物体）挑选并下发一套背景配乐歌单。它不管理任何剧情或菜单，只做一件事：当任意 Mission 在「地点遭遇」语境下启动时，根据当前定居点的文化、忠诚度、所属阵营，以及各王国实力与地理距离，给每个 `MusicianGroup` 算出一张按文化加权的 `SettlementMusicData` 歌单，并调用 `SetPlayList` 让乐手按此播放。整个过程是纯展示、无副作用、无存档状态——它是学习「只订阅 `OnMissionStartedEvent` 的轻量 Location 呈现型 CampaignBehavior」的最小范例。

## 心智模型

把它看作「地点场景里的配乐导演」，全部活动都发生在**战役层**，但只在**城镇/城堡/村庄的 Location Mission** 真正开场的一瞬间介入，平时完全沉默。

- **创建与持有**：战役启动时由 [CampaignBehaviorManager](../../campaign/CampaignBehaviorManager) 统一登记，实例在整场战役中常驻；它不像 `PrisonBreakCampaignBehavior` 那样需要跨档记忆「正在做什么」，因此引擎创建它后基本只是把它挂在事件总线上。
- **触发入口**：`RegisterEvents` 只订阅一个事件——[CampaignEvents](../../campaign/CampaignEvents) 的 `OnMissionStartedEvent`，且用 `AddNonSerializedListener` 注册（监听不随存档序列化，每次新战役经 `RegisterEvents` 重新挂上）。
- **判断语境**：`OnMissionStarted` 一进来就用一串短路判断筛掉所有非地点场景——`mission` 必须能转成 `Mission`、`CampaignMission.Current` 不为空、`PlayerEncounter.LocationEncounter` 与对应的 `Settlement` 不为空、`CampaignMission.Current.Location` 不为空；若主角是伪装状态（`IsMainHeroDisguised`）且当前地点是 `center`，也直接返回。满足这些条件才算「玩家在已知定居点的地点里」，才继续配乐。
- **产出**：对每个 `MusicianGroup` 调 `CreateRandomPlayList(settlement)` 算出歌单并 `SetPlayList` 下发，之后什么都不保留。
- **生命周期边界**：它只在 Location 场景开场时跑一次，野战、攻城、普通战役地图 tick 里它都是空操作；因为没有任何字段，读档不会让它「丢失进度」，但也意味着你若想给它加缓存状态，必须自己补 `SyncData`。

## 何时用 / 何时不要用

- **用**：你想理解「如何用 `OnMissionStartedEvent` + `PlayerEncounter.LocationEncounter` 检测地点场景并安全取值」；想学按文化/地理加权挑选 `MBObjectManager` 资产（`SettlementMusicData`）并把结果下发给场景物体（`MusicianGroup`）的写法；想给自己的地点场景加动态内容（配乐、布景、NPC 行为）且不需要存档。
- **不要用**：想调换/管理具体歌单数据本身——那属于 `SettlementMusicData` 资产（`MBObjectManager` 里的 `List<SettlementMusicData>`），应去改数据而非改这个 Behavior；想让配乐随剧情状态变化并跨档保留——本类 `SyncData` 为空，不存任何东西，需要状态请自建行为并登记 `SyncData`；想在非 Location 语境（野战、地图）里用它的加权逻辑——`OnMissionStarted` 对非地点场景直接 return，逻辑不通用。

## 依赖

- 上游（本类消费的类型/系统）：
  - [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)（基类与 `RegisterEvents`/`SyncData` 契约）
  - [CampaignEvents](../../campaign/CampaignEvents)（`OnMissionStartedEvent` 是唯一订阅源）
  - [Campaign](../../campaign/Campaign)（`Campaign.Current.Models.MapDistanceModel`、`Campaign.MapDiagonal`、`Campaign.Current.IsMainHeroDisguised`）
  - [Settlement](../../campaign/Settlement)（`Settlement.Town`/`Village`/`Culture`/`MapFaction`、`PlayerEncounter.LocationEncounter.Settlement`）
  - [Hero](../../campaign/Hero)（主角是伪装判断的载体；`IsMainHeroDisguised` 经 `Campaign.Current` 间接引用）
  - [CampaignBehaviorManager](../../campaign/CampaignBehaviorManager)（战役启动时登记本行为）
- 下游 / 直接驱动（本类把结果写给这些场景物体；它们不在已审核链接表中，故只以反引号标注，不链）：
  - `MusicianGroup`（`SandBox.Objects`，场景中的乐手物体，接收 `SetPlayList`）
  - `SettlementMusicData`（`MBObjectManager` 资产，按 `Culture` 与 `LocationId` 过滤后组成歌单）
  - `CampaignMission` / `PlayerEncounter`（`LocationEncounter.Settlement`、`Current.Location` 用于判定地点语境）
- 相关事件与 Action：
  - [CampaignEvents](../../campaign/CampaignEvents) 的 `OnMissionStartedEvent`（本类唯一钩子，同款「地点场景呈现」型行为可对照 [ArenaMasterCampaignBehavior](../ArenaMasterCampaignBehavior)、[TradersCampaignBehavior](../TradersCampaignBehavior)、[TownMerchantsCampaignBehavior](../TownMerchantsCampaignBehavior)、[BarberCampaignBehavior](../BarberCampaignBehavior)，它们同样在 Location 场景里做呈现，但走各自的菜单/对话流；[PrisonBreakCampaignBehavior](../PrisonBreakCampaignBehavior) 则是同一事件总线上的重行为对照样本）
  - [SaveManager](../../save-system/SaveManager)（本类 `SyncData` 为空，因此 [SaveManager](../../save-system/SaveManager) 序列化时不会触碰它——这是「无状态 Location 行为」的正面案例）

## 成员

### RegisterEvents() — 注册唯一监听
战役启动时由 `CampaignBehaviorManager` 调用，仅挂 `CampaignEvents.OnMissionStartedEvent` 的 non-serialized 监听指向 `OnMissionStarted`。**副作用**：无，只订阅事件。**何时调用**：每次新战役 `RegisterEvents` 阶段。mod 若想扩展配乐逻辑，必须保留这条订阅，否则行为彻底失活。

### SyncData(IDataStore) — 空实现（明确无存档）
方法体为空（源码直接 `{}`）。**副作用**：不读写任何字段，[SaveManager](../../save-system/SaveManager) 存读档时对它无操作。**何时调用**：每次存/读档时由引擎调用。它的「空」是设计意图——本行为没有任何需要跨档保留的状态。注意：一旦你给它加了缓存字段却忘了在此登记，就会成为坏档点。

### OnMissionStarted(IMission) — 地点场景入口
`OnMissionStartedEvent` 的回调。**作用**：判定是否处于地点遭遇（`Mission` 可转换、`CampaignMission.Current` 非空、`PlayerEncounter.LocationEncounter.Settlement` 非空、`CampaignMission.Current.Location` 非空），并排除「伪装主角进入 `center`」的情况；通过后用 `MBExtensions.FindAllWithType<MusicianGroup>` 取场景中全部乐手，对每个调 `CreateRandomPlayList(settlement)` 再 `SetPlayList` 下发。**副作用**：仅写入场景物体的播放列表，不改任何世界状态、不触发 Action、不存档。**何时调用**：任意 Mission 开场时（野战/攻城因前置判断而空转）。

### CreateRandomPlayList(Settlement) — 文化加权选曲
本类核心算法。**作用**：先按 `Location.StringId` 决定候选 `LocationId` 标签（`center` → 同时含 `lordshall` 与 `tavern`；其余用地点 id，若是 `port` 再补 `tavern`）；再构建一个 `Dictionary<CultureObject, float>` 权重表——依据定居点忠诚度（`Town.Loyalty` 或 `Village.Bound.Town.Loyalty`）、各王国中军定居点到本阵营中军定居点的立方距离衰减、交战惩罚、王国总实力、各城镇繁荣度，并给本定居点 `Culture` 加 `+10`、给所属地图阵营 `Culture` 加 `忠诚度*5`；然后从 `MBObjectManager` 取 `SettlementMusicData` 候选集（按 `LocationId` 标签过滤），以权重最大的文化为基准确定各文化入选数量，最后 `Shuffle` 输出。**副作用**：纯计算、无世界副作用；若加权后列表为空则回退为全部候选。**何时调用**：`OnMissionStarted` 内部、逐 `MusicianGroup` 调用一次。

### PopulatePlayList(...) — 按文化铺满歌单
私有辅助。**作用**：从候选集里筛出指定 `Culture` 的 `SettlementMusicData`，打乱后取前 `count` 条追加进歌单。**副作用**：只修改传入的 `playList` 列表。

## 风险

- **`SyncData` 为空 = 不存档**：本行为刻意无状态，所以读档不会丢失任何东西；但反过来说，任何派生/fork 版本若引入缓存字段却未在此登记 `SyncData`，读档后该字段会被丢弃或错位——这是你扩展它时唯一的坏档隐患点。
- **`AddNonSerializedListener` 不在存档里重放**：因为监听是非序列化的，它只在每次新战役经 `RegisterEvents` 重新挂上后才生效。如果你依赖「读档瞬间就自动跑一次配乐」，它不会触发——只有真正的 Mission 开场才会。
- **强绑定 Location 语境**：`OnMissionStarted` 的前置判断依赖 `PlayerEncounter.LocationEncounter`、`CampaignMission.Current.Location`、`Settlement` 全部非空；在野战、攻城、或 `CampaignMission.Current == null` 的语境下它静默 return。脱离地点场景调用/取值会得到空操作或空引用，不要假定它在任何 Mission 里都工作。
- **伪装主角的「安静中心」**：当 `Campaign.Current.IsMainHeroDisguised && Location.StringId == "center"` 时直接 return，中心广场乐手不会播放——这是设计上的隐蔽分支，扩展时若想让伪装状态也出声，需显式放开该判断。
- **遍历全局集合的性能与空引用**：`CreateRandomPlayList` 会迭代 `Kingdom.All`、`Town.AllTowns`、`MBObjectManager` 的文化与歌曲资产；对一个既无 `Town` 也无 `Village` 的异常定居点，源码用 `village?.Bound?.Town?.Loyalty ?? 100f` 兜底，但你若改算法、去掉这个 null 保护，就可能空引用。
- **无权改歌单数据本身**：它只读 `SettlementMusicData` 资产并选曲，不负责增删改这些资产；想调整某地点的实际曲目应改数据/模块，而非在这个 Behavior 里硬塞。

## 示例

在自写行为里订阅同一事件，给地点场景的乐手按定居点文化下发歌单（用到的都是真实类型与方法：`CampaignEvents.OnMissionStartedEvent`、`AddNonSerializedListener`、`Mission`、`CampaignMission.Current.Location`、`PlayerEncounter.LocationEncounter.Settlement`、`MBExtensions.FindAllWithType<MusicianGroup>`、`MusicianGroup.SetPlayList`、`MBObjectManager.Instance.GetObjectTypeList<SettlementMusicData>`、`SettlementMusicData.Culture`/`LocationId`、`Settlement.Culture`）：

```csharp
public class MyMusicianBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.OnMissionStartedEvent.AddNonSerializedListener(this, OnMissionStarted);
    }

    private void OnMissionStarted(IMission mission)
    {
        if (!(mission is Mission m) || CampaignMission.Current?.Location == null
            || PlayerEncounter.LocationEncounter?.Settlement == null)
            return;

        var settlement = PlayerEncounter.LocationEncounter.Settlement;
        var locationId = CampaignMission.Current.Location.StringId;
        var musicians = MBExtensions.FindAllWithType<MusicianGroup>(m.MissionObjects);

        foreach (var group in musicians)
        {
            group.SetPlayList(BuildPlayList(settlement, locationId));
        }
    }

    private List<SettlementMusicData> BuildPlayList(Settlement settlement, string locationId)
    {
        var tags = new List<string>();
        if (locationId == "center")
        {
            tags.Add("lordshall");
            tags.Add("tavern");
        }
        else
        {
            tags.Add(locationId);
            if (locationId == "port") tags.Add("tavern");
        }

        var candidates = MBObjectManager.Instance
            .GetObjectTypeList<SettlementMusicData>()
            .Where(x => tags.Contains(x.LocationId))
            .ToList();

        var playList = new List<SettlementMusicData>();
        foreach (var data in candidates)
        {
            if (data.Culture == settlement.Culture)
                playList.Add(data);
        }

        if (playList.Count == 0)
            playList = candidates;

        Extensions.Shuffle<SettlementMusicData>(playList);
        return playList;
    }

    public override void SyncData(IDataStore dataStore) { }
}
```

## 导航

- ↑ 父级/基类：[CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)（存读档与 `RegisterEvents` 契约；所有 CampaignBehavior 的对照范本）
- ↔ 同级行为：[ArenaMasterCampaignBehavior](../ArenaMasterCampaignBehavior) / [TradersCampaignBehavior](../TradersCampaignBehavior) / [TownMerchantsCampaignBehavior](../TownMerchantsCampaignBehavior) / [BarberCampaignBehavior](../BarberCampaignBehavior)（同为「Location 场景呈现」型，但走菜单/对话流）；[PrisonBreakCampaignBehavior](../PrisonBreakCampaignBehavior)（同一事件总线上的重行为对照，含真实 `SyncData` 状态）
- 相关系统：[CampaignEvents](../../campaign/CampaignEvents)（`OnMissionStartedEvent` 钩子）、[Campaign](../../campaign/Campaign)（距离模型与伪装判定）、[Settlement](../../campaign/Settlement)（文化/忠诚度/阵营来源）、[SaveManager](../../save-system/SaveManager)（本类空 `SyncData` 的体现）
