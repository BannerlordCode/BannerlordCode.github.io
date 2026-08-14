---
title: "SettlementMusiciansCampaignBehavior"
description: "城镇/村庄的场景音乐选择器：玩家进入 Location 时，依据定居点文化、忠诚、王国势力与地理距离，为场景里的 MusicianGroup 随机挑选并分配一套符合语境的乐曲播放列表。"
---
# SettlementMusiciansCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox
**类型：** `public class SettlementMusiciansCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**源文件:** `Modules.SandBox/SandBox/SandBox.CampaignBehaviors/SettlementMusiciansCampaignBehavior.cs`

## 概述

`SettlementMusiciansCampaignBehavior` 负责在玩家进入一个定居点的场景（Location）时，为场景里的乐手群组（`MusicianGroup` MissionObject）挑选并分配**背景音乐播放列表**。它监听 `CampaignEvents.OnMissionStartedEvent`：当 Mission 启动、且玩家正处于某个定居点的 `LocationEncounter` 中（即「在镇上/村里逛」的语境）时，遍历场景里的 `MusicianGroup`，根据当前定居点的**文化、忠诚（`Town.Loyalty` / `Village.Bound.Town.Loyalty`）、所属王国及其势力强弱、与各方王国的地理距离、繁荣度**等因素，给每种文化算出一个权重，再按权重随机抽取若干 `SettlementMusicData`（乐曲）打乱后塞给 `MusicianGroup.SetPlayList`。它**完全无状态**（`SyncData` 为空），不写入任何世界数据，只决定「此时此地该放什么歌」。

## 心智模型

把它想成「场景 BGM DJ」，工作在**战役层 + Mission/场景子系统**，但只读不改世界。

- **入口**：战役启动 `RegisterEvents` 订阅 `OnMissionStartedEvent` → `OnMissionStarted(IMission)`。
- **触发/过滤**：必须同时满足——Mission 是 `Mission` 类型、`CampaignMission.Current` 非空、`PlayerEncounter.LocationEncounter.Settlement` 非空、`CampaignMission.Current.Location` 非空，且若主角在伪装（`IsMainHeroDisguised`）则要求当前 `Location.StringId == "center"`（伪装状态下只在城镇中心放乐）。任一不满足直接 return。
- **选曲**：`CreateRandomPlayList(settlement)` 先按当前 Location 的 `StringId`（`center`/`tavern`/`port`/…）收集 `listOfLocationTags`，再遍历 `CultureObject` 与 `Kingdom` 计算权重字典 `dictionary`，取权重最高的文化 `maxWeightedCulture`，按 `数量 = 该文化乐曲数 / 最高权重` 的四舍五入在每种文化里抽曲，最后 `Extensions.Shuffle` 打乱返回。
- **应用**：`OnMissionStarted` 把列表交给每个 `MusicianGroup.SetPlayList(playList)`。
- **生命周期**：纯会话级、无持久字段；每次进场景重算，不依赖存档，无坏档风险。

## 何时用 / 何时不要用

- **用**：你想理解官方怎么给城镇/村庄场景挑背景音乐；想学「订阅 `OnMissionStartedEvent` + 用 `PlayerEncounter.LocationEncounter.Settlement` 判定当前定居点 + 从 `MBObjectManager` 取 `CultureObject`/`SettlementMusicData` 集合 + 按权重随机」的场景音乐写法；想为自定义文化/自定义乐曲加自己的播放逻辑。
- **不要用**：想改游戏配乐系统本身（那是音频/引擎层）；想让音乐影响玩法状态——本类只读世界数据、写 `MusicianGroup` 的播放列表，不产出任何可存档或可博弈的状态；想在 Mission 外或遭遇外（如战场、地图界面）触发——它依赖 `PlayerEncounter.LocationEncounter`，脱离该语境会直接 return。

## 依赖

- 上游：[CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)（基类与 `RegisterEvents`/`SyncData` 契约）、[CampaignEvents](../../campaign/CampaignEvents)（`OnMissionStartedEvent`）、[CampaignMission](../../campaign/CampaignMission)（`Current.Location`、`Current` 判定当前场景）、[PlayerEncounter](../../campaign/PlayerEncounter)（`.LocationEncounter.Settlement` 取当前定居点）、[Settlement](../../campaign/Settlement)（`Town`/`Village`、`Culture`、`MapFaction`）、[Town](../../campaign/Town)（`Loyalty`、`AllTowns`）、[Village](../../campaign/Village)（`Bound.Town.Loyalty`）、[CultureObject](../../campaign/CultureObject)（乐曲按文化分发，经 `MBObjectManager`）、[Kingdom](../../campaign/Kingdom)（`All`、`.Culture`、`.CurrentTotalStrength`、`.IsAtWarWith`）、[Campaign](../../campaign/Campaign)（`Current.IsMainHeroDisguised`、`MapDiagonal`、`Models.MapDistanceModel`）、[MapDistanceModel](../../campaign/MapDistanceModel)（`GetDistance`/`GetMaximumDistanceBetweenTwoConnectedSettlements`）、MBObjectManager（`Instance.GetObjectTypeList<T>()`）。
- 下游 / 相关（本类构造播放列表时使用的类型）：[Location](../../campaign/Location)（`StringId`、场景判定）、[LocationCharacter](../../campaign/LocationCharacter)（同属 Location 生态）、[Mission](../../mission/Mission)（`MissionObjects` 取 `MusicianGroup`）、[CharacterObject](../../campaign/CharacterObject)（文化角色基类）。`MusicianGroup` 与 `SettlementMusicData` 是场景/乐曲数据对象，按 `LocationId`/`Culture` 从 `MBObjectManager` 取出，不单独成文档页。

> 说明：`MBObjectManager` 在此处指 `TaleWorlds.ObjectSystem.MBObjectManager`（资产注册表），用于 `GetObjectTypeList<CultureObject>()` / `GetObjectTypeList<SettlementMusicData>()`；本页按项目约定不在噪声命名空间下单独建页。

## 成员说明

### RegisterEvents() — 订阅 OnMissionStartedEvent
只订阅 `OnMissionStartedEvent`（非序列化监听 `AddNonSerializedListener`）。移除本 Behavior 后场景将不再分配自定义播放列表（退回默认音乐），不会崩溃。

### OnMissionStarted(IMission) — 入口与多重过滤
```csharp
if (mission is not Mission || CampaignMission.Current == null
    || PlayerEncounter.LocationEncounter?.Settlement == null
    || CampaignMission.Current.Location == null
    || (Campaign.Current.IsMainHeroDisguised && CampaignMission.Current.Location.StringId != "center"))
    return;
foreach (var group in MBExtensions.FindAllWithType<MusicianGroup>(mission.MissionObjects))
    group.SetPlayList(CreateRandomPlayList(PlayerEncounter.LocationEncounter.Settlement));
```
伪装态（`IsMainHeroDisguised`）下只在 `center` 放乐，是刻意设计。

### CreateRandomPlayList(Settlement) — 权重选曲
- 先收集 `listOfLocationTags`：`center` 加 `lordshall`+`tavern`，其它 Location 加自身 `StringId`（若是 `port` 再加 `tavern`）。
- 遍历 `CultureObject` 初始化权重 0，并对每个 `Kingdom` 按「是否交战、与定居点地理立方距离、王国总战力」累加权重；再对 `Town.AllTowns` 按繁荣度微调；最后给 `settlement.Culture` 与 `settlement.MapFaction.Culture` 额外加权（`+10` / `+num2*5`）。
- 取权重最高的 `maxWeightedCulture`，对每种文化按 `round(该文化乐曲数 / 最高权重)` 抽取，全部 `Extensions.Shuffle` 后返回。若结果为空则退回全部乐曲。

### SyncData(IDataStore) — 空实现
无任何字段需持久化（播放列表每进场景重算）。扩展时若新增需存档字段才登记。

## 风险

- **强依赖 `PlayerEncounter.LocationEncounter` 与 `CampaignMission.Current`**：入口第一句就读这两个；在战场/Mission 外或遭遇未初始化时直接 return（安全），但如果你手动触发 `OnMissionStartedEvent` 又没有效 `PlayerEncounter`，列表不会分配——不是崩溃，只是没音乐。
- **伪装态只在 center 放乐**：`IsMainHeroDisguised && Location.StringId != "center"` 直接 return；想让伪装时别的场景也有乐需改这段。
- **权重公式依赖全局枚举**：遍历 `Kingdom.All`、`Town.AllTowns`、`MBObjectManager` 的 `CultureObject`/`SettlementMusicData` 全集——数据量大时（大量文化/乐曲）每次进场景都有遍历开销，但属常量级、不会坏档。
- **无状态≠无害**：误删会让所有城镇/村庄场景失去按文化/局势变化的背景音乐，退回引擎默认，破坏沉浸感但不崩溃。
- **不要缓存播放列表**：播放列表依赖当前定居点状态，必须每次重算；若想持久化需自行 `SyncData` 并小心坏档。

## 最小真实示例

进入场景时为乐手群分配与当前定居点匹配的播放列表（取自 `OnMissionStarted` 精简）：
```csharp
if (CampaignMission.Current != null
    && PlayerEncounter.LocationEncounter?.Settlement != null
    && CampaignMission.Current.Location != null)
{
    var settlement = PlayerEncounter.LocationEncounter.Settlement;
    foreach (var group in MBExtensions.FindAllWithType<MusicianGroup>(Mission.Current.MissionObjects))
        group.SetPlayList(CreateRandomPlayList(settlement));
}
```
为自定义定居点加一种文化的权重加成（取自 `CreateRandomPlayList` 思路）：
```csharp
var dictionary = new Dictionary<CultureObject, float>();
foreach (CultureObject c in MBObjectManager.Instance.GetObjectTypeList<CultureObject>())
    dictionary[c] = 0f;
dictionary[settlement.Culture] += 10f; // 当前定居点文化权重最高
```

## 导航

- ↑ 父级/枢纽：[CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)（所有 CampaignBehavior 的基类与 `RegisterEvents`/`SyncData` 契约）
- ↔ 同级（场景 NPC/音乐）：[TavernEmployeesCampaignBehavior](../TavernEmployeesCampaignBehavior)（酒馆 NPC 与对话）、[TownMerchantsCampaignBehavior](../TownMerchantsCampaignBehavior)（城镇中心商人 NPC）
- 相关：[CampaignEvents](../../campaign/CampaignEvents) · [PlayerEncounter](../../campaign/PlayerEncounter) · [Settlement](../../campaign/Settlement) · [CultureObject](../../campaign/CultureObject) · [CampaignMission](../../campaign/CampaignMission) · [Location](../../campaign/Location)
