---
title: "LocationComplex"
description: "LocationComplex 是定居点地点图的持有者，管理节点、通道、地点角色、访问策略和活动遭遇战中的移动。"
---
# LocationComplex

**命名空间:** `TaleWorlds.CampaignSystem.Settlements.Locations`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public class LocationComplex`  
**基类:** 无  
**源码文件:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements.Locations/LocationComplex.cs`

## 一句话职责

它是定居点内部地点图的运行时持有者：从 `LocationComplexTemplate` 建立节点和双向通道，保存 `LocationCharacter`，提供查找、移动、清理与场景选择，并在活动地点遭遇战中把角色移动通知 `CampaignMission`；它不是 Mission 场景或独立存档管理器。

## 心智模型

应把 `LocationComplex` 看成图，而不是一间室内场景。它的私有保存字典把 `center`、`tavern`、`prison` 和 `village_center` 等 ID 映射到 [Location](../Location) 节点；每个节点再持有角色和相邻通道引用。[LocationComplexTemplate](../LocationComplexTemplate) 创建初始图，`Settlement.Deserialize` 负责应用定居点专属场景名和保存战役初始化。

`LocationComplex.Current` 是一个派生的便利属性。有遭遇战时，它返回 `PlayerEncounter.LocationEncounter.Settlement.LocationComplex`；没有遭遇战时返回 `null`。它不是单例存储，不能在战役空闲 tick 中无条件使用。`ChangeLocation` 是运行时关键边界：它从旧节点移除描述、加入新节点、应用进入规则，并在移动跨过当前 Mission 地点边界时通知活动 `CampaignMission`。

## 何时使用，何时不要使用

- 已知定居点时使用 `Settlement.CurrentSettlement.LocationComplex`；只有在活动地点遭遇战内部才使用 `LocationComplex.Current`。
- 在修改之前，使用 `GetLocationWithId`、`GetLocationOfCharacter` 和 `GetLocationCharacterOfHero` 解析已有图对象。
- 使用 `ChangeLocation` 移动描述，使用 `AddPassage` 构建图。这些方法会保留 owner 图和遭遇战回调边界。
- 只有在调用方已经选定真实地点 ID 和当前定居点升级等级后，才使用 `GetScene`；它只是查找辅助方法，不是 Mission 工厂。
- 不要从通用战役 tick 调用 `AgentPassageUsageTick`。源码假定 `CampaignMission.Current` 和当前 Mission 地点都存在。
- 不要为了移动一个角色而给活动定居点新建 complex。定居点和遭遇战已经拥有这张图，替换它会断开保存的地点状态。

## 依赖关系

```text
LocationComplexTemplate / Settlement XML
  -> LocationComplex._locations
  -> Location 节点与双向通道
  -> LocationCharacter 列表
  -> PlayerEncounter 派生 LocationComplex.Current
  -> CampaignMission.Current / MissionLocationLogic / MissionAgentHandler
```

- 数据来源：[LocationComplexTemplate](../LocationComplexTemplate) 和 [Settlement](../Settlement) 构建或初始化地点图。
- 节点状态：[Location](../Location) 保存访问规则、场景、通道和角色描述。
- 角色状态：[LocationCharacter](../LocationCharacter) 与 [AccompanyingCharacter](../AccompanyingCharacter) 定义可进入和可移动的角色。
- Mission 桥接：[CampaignMission](../CampaignMission)、[CampaignMissionComponent](../../campaign-ext/CampaignMissionComponent) 和 [MissionAgentHandler](../../campaign-ext/MissionAgentHandler) 在 Mission 中消费移动。
- 遭遇战持有者：[LocationEncounter](../LocationEncounter) 决定 `Current` 并接收地点变更回调。

## 公开表面

| 区域 | 成员与时机 |
|---|---|
| 当前图 | `Current` 通过 `PlayerEncounter.LocationEncounter` 解析 complex；没有活动遭遇战时返回 null。 |
| 访问策略 | `CanAlways`、`CanNever`、`CanIfHero`、`CanIfDay`、`CanIfPriceIsPaid`、`CanIfGrownUpMaleOrHero`、`CanIfMaleOrHero` 和 `CanIfSettlementAccessModelLetsPlayer` 是地点 XML 引用的委托目标，会读取战役、定居点、年龄、贿赂和访问模型。 |
| 构造 | `LocationComplex(LocationComplexTemplate)`、复制构造函数和 `Initialize` 创建或重建节点与通道；保存战役路径中的 `Initialize` 会移除尚未初始化的节点。 |
| 图变更 | `AddPassage` 添加两个方向；`ChangeLocation` 移动描述，并在跨过活动 Mission 边界时调用 `LocationEncounter.OnCharacterLocationChanged`。 |
| 枚举与查找 | `GetListOfLocations`、`GetListOfCharacters`、`GetListOfCharactersInLocation`、`GetLocationWithId`、`FindAll`、`FindCharacter`、`GetLocationOfCharacter`、`GetLocationCharacterOfHero` 和 `GetFirstLocationCharacterOfCharacter` 查询图。 |
| 运行时移动 | `AgentPassageUsageTick` 随机选择非固定角色，并通过允许且未满的通道移动它；隐身模式会跳过，并假定有活动战役 Mission。 |
| 清理 | `RemoveCharacterIfExists` 的两个重载从当前节点移除 Hero 或描述；`ClearTempCharacters` 清空所有节点的角色列表。 |
| 场景查找 | `GetScene(string, int)` 委托选中节点的 `GetSceneName`；缺失 ID 时可能立即触发空引用。 |

## 真实示例

源代码中的战役行为会解析已有 Hero 描述、找到当前节点，再通过同一张图 API 移动它：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements.Locations;

LocationComplex complex = LocationComplex.Current;
LocationCharacter heroCharacter = complex?.GetLocationCharacterOfHero(Hero.MainHero);
Location tavern = complex?.GetLocationWithId("tavern");

if (complex != null && heroCharacter != null && tavern != null)
{
    Location from = complex.GetLocationOfCharacter(heroCharacter);
    if (from != tavern && tavern.CanAIEnter(heroCharacter))
    {
        complex.ChangeLocation(heroCharacter, from, tavern);
    }
}
```

在场景选择流程中，定居点遭遇战同样会调用 `settlement.LocationComplex.GetScene("center", upgradeLevel)`，再把结果交给 `CampaignMission.OpenIndoorMission(nextLocation.GetSceneName(wallLevel), wallLevel, nextLocation, talkToChar)`。地点图提供场景，但不决定请求的是战斗、对话还是定居点内部 Mission。

## 风险与存档边界

- 没有 `PlayerEncounter.LocationEncounter` 时，`LocationComplex.Current` 为 null；`AgentPassageUsageTick` 还会无保护地解引用 `CampaignMission.Current`。
- `AddPassage` 要求两个地点都属于当前 complex。传入 null 或其他 complex 的节点会破坏图或立即失败。
- `ChangeLocation` 可能调用 `CampaignMission.Current.OnCharacterLocationChanged`。只能在活动遭遇战生命周期内的游戏线程调用，不要从存档加载或后台线程调用。
- 未知 ID 时 `GetLocationWithId` 返回 null，而 `GetScene` 会直接解引用结果。选场景前应验证 ID。
- `ClearTempCharacters` 会移除所有地点描述，包括之后 Mission 逻辑预期要生成的角色。它是生命周期清理操作，不是方便的重置按钮。
- 地点图属于定居点/战役状态，而 Mission Agent 和场景对象是临时对象。不要保存引擎 Agent，也不要通过替换 complex 来持久化战役事实。

## 版本说明

本页依据 v1.4.5 的 `LocationComplex.cs`、`Settlement.Deserialize` 以及 CampaignSystem/SandBox 地点移动调用点编写。地点 ID、访问策略方法、保存初始化和 Mission 回调时机都应在其他版本重新核对。

## 导航

- 父级：[Campaign API](../)
- 同级：[Location](../Location) · [LocationCharacter](../LocationCharacter) · [LocationComplexTemplate](../LocationComplexTemplate)
- 相关：[Settlement](../Settlement) · [LocationEncounter](../LocationEncounter) · [CampaignMission](../CampaignMission) · [MissionAgentHandler](../../campaign-ext/MissionAgentHandler)
