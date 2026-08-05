---
title: "LocationEncounter"
description: "LocationEncounter 是当前聚落地点会话的短寿命上下文，连接 Settlement、LocationComplex、陪同角色和进入地点 Mission 的流程。"
---
# LocationEncounter

**命名空间:** `TaleWorlds.CampaignSystem.Encounters`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public class LocationEncounter`  
**基类:** `object`  
**源文件:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Encounters/LocationEncounter.cs`

## 概述

它保存玩家当前正在进入的 Settlement 地点上下文，并把地点角色、陪同角色和地点 Mission 之间的状态变化接起来。

它由 `PlayerEncounter` 在 `EnterSettlement` 时按聚落类型创建，存活到离开聚落或 Encounter 收尾；地点图和 Mission 行为分别负责持有底层角色与生成 Agent，本类只维护这段短寿命会话边界。

## 心智模型

`LocationEncounter` 不是一个独立的地点数据库，也不是可以长期缓存的 Campaign 服务。它是 `PlayerEncounter` 在聚落内活动时持有的会话对象：`EnterSettlement` 根据 Settlement 类型创建 `TownEncounter`、`VillageEncounter`、`CastleEncounter` 或 `HideoutEncounter`，这些对象都继承本类；离开聚落或结束 Encounter 后，`PlayerEncounter.LocationEncounter` 会被清空。

它的 `Settlement` 指向会话所属的聚落，`CharactersAccompanyingPlayer` 是准备随玩家进入地点 Mission 的包装对象集合。地点图本身由该 Settlement 的 [LocationComplex](../LocationComplex) 持有；当角色通过 `LocationComplex.ChangeLocation` 跨过当前 Mission 的地点边界时，本类才会把变化转发给 [CampaignMissionComponent](../../campaign-ext/CampaignMissionComponent)。因此，读取它适合放在活动 Encounter/Mission 内，存储它或绕过地点图直接改集合都不安全。

## 生命周期与所有权

```text
PlayerEncounter.EnterSettlement
  -> 根据 Settlement 类型创建具体 LocationEncounter
  -> PlayerEncounter.LocationEncounter 暴露当前实例
  -> LocationComplex / MissionLocationLogic 使用 Settlement 与陪同角色
  -> PlayerEncounter.LeaveSettlement 或结束 Encounter
  -> LocationEncounter = null
```

- 创建者是 `PlayerEncounter`，不是 mod 的 CampaignBehavior。
- `Settlement` 在受保护构造函数中确定；mod 不应直接构造本类。
- `CharactersAccompanyingPlayer` 由本对象创建和清空，但真正的地点角色仍归 `LocationComplex` 的某个 `Location` 所有。
- `IsInsideOfASettlement` 是当前地点 Mission 用来标记进入状态的瞬时字段，不是存档级聚落状态。

## 何时使用，何时不要用

适合使用它的情况：

- 在活动聚落 Encounter 中读取当前 `Settlement`，或检查玩家的地点陪同角色。
- 在已经拥有真实 `LocationCharacter` 时，调用 `AddAccompanyingCharacter` 或按 Hero 移除陪同包装。
- 需要从当前地点切换到下一个地点 Mission 时，让具体的 `TownEncounter`、`VillageEncounter` 或 `CastleEncounter` 实现创建流程。

不要这样使用：

- 不要 `new LocationEncounter(...)`；构造函数受保护，实例的具体类型和所属 Settlement 由 `PlayerEncounter` 决定。
- 不要在没有活动 `Campaign.Current`、`PlayerEncounter.Current` 或地点 Mission 时读取它的状态；静态入口可能返回 `null`，地点回调还依赖 `CampaignMission.Current`。
- 不要直接把 `CharactersAccompanyingPlayer` 当作持久化 roster，也不要绕过 `LocationComplex.ChangeLocation` 手动调用 `OnCharacterLocationChanged`。
- 不要假设基类 `CreateAndOpenMissionController` 会打开 Mission；基类实现返回 `null`，具体 Encounter 子类才覆盖该方法。

## 依赖关系

```text
PlayerEncounter.EnterSettlement
  -> LocationEncounter / TownEncounter / VillageEncounter / CastleEncounter / HideoutEncounter
  -> Settlement.LocationComplex -> Location -> LocationCharacter
  -> MissionLocationLogic + MissionAgentHandler
  -> CampaignMissionComponent.OnCharacterLocationChanged
```

- 上游创建与入口：[PlayerEncounter](../PlayerEncounter)、[Settlement](../Settlement)、[LocationComplex](../LocationComplex)。
- 状态与地点角色：[Location](../Location)、[LocationCharacter](../LocationCharacter)、[AccompanyingCharacter](../AccompanyingCharacter)。
- Mission 下游：[CampaignMissionComponent](../../campaign-ext/CampaignMissionComponent)、[MissionLocationLogic](../../campaign-ext/MissionLocationLogic)、[MissionAgentHandler](../../campaign-ext/MissionAgentHandler)。
- 具体 Mission 工厂：[TownEncounter](../TownEncounter)、[VillageEncounter](../VillageEncounter)、[CastleEncounter](../CastleEncounter)、[HideoutEncounter](../HideoutEncounter)。

## 公开成员与时机

| 成员 | 真实语义与副作用 | 调用时机 |
|---|---|---|
| `Settlement` | 当前地点会话所属的 `Settlement`，创建后不变。 | 仅在活动 Location Encounter 中读取。 |
| `CharactersAccompanyingPlayer` | 当前待带入地点 Mission 的 `AccompanyingCharacter` 列表；列表内容会随增删操作改变。 | 进入 Mission 前或 Mission 内的地点角色流程。 |
| `IsInsideOfASettlement` | 当前地点流程使用的瞬时标志；`MissionLocationLogic` 会在城镇地点出生前设置它。 | 不要当作 Settlement 的永久状态。 |
| `AddAccompanyingCharacter(LocationCharacter, bool)` | 按底层 `Character` 去重，创建包装并记录是否在 Mission 开始时跟随玩家。 | 已有真实 `LocationCharacter` 且确认当前 Encounter 有效时。 |
| `GetAccompanyingCharacter(LocationCharacter)` | 按同一个 `LocationCharacter` 实例查找包装；找不到返回 `null`。 | 生成 Agent 或清理角色前先查询。 |
| `GetAccompanyingCharacter(CharacterObject)` | 按底层角色查找包装；适合只有 `CharacterObject` 的调用点。 | 需要避免重复添加或按模板角色检查时。 |
| `RemoveAccompanyingCharacter(LocationCharacter)` | 移除匹配的包装，不会替代 `LocationComplex` 的地点角色迁移。 | Agent 被移除或角色离开陪同列表时。 |
| `RemoveAccompanyingCharacter(Hero)` | 从后往前找到该 Hero 的陪同包装并移除一个。 | Hero Agent 结束且需要清理对应陪同状态时。 |
| `RemoveAllAccompanyingCharacters()` | 清空全部包装；不会自动重建地点图。 | Encounter 收尾或明确放弃本次陪同流程时。 |
| `OnCharacterLocationChanged(...)` | 只有从当前 Mission 地点离开或进入当前 Mission 地点时，才转发到 `CampaignMission.Current`。 | 应由 `LocationComplex.ChangeLocation` 间接触发。 |
| `IsWorkshopLocation(Location)` | 基类固定返回 `false`；具体 Encounter 可覆盖。 | 只在需要区分具体聚落 Encounter 时调用。 |
| `IsTavern(Location)` | 基类固定返回 `false`；具体 Encounter 可覆盖。 | 不要从基类返回值推断所有地点类型。 |
| `CreateAndOpenMissionController(...)` | 基类固定返回 `null`；具体 Encounter 根据地点 ID、场景和对话角色创建 Mission。 | 通常由菜单/地点流程调用，而不是由 mod 手动重放。 |

## 真实获取与陪同示例

下面的获取路径与游戏源码一致：先从 `PlayerEncounter.LocationEncounter` 取得活动会话，再通过 Settlement 的地点图找到 Hero 的 `LocationCharacter`。没有活动地点或角色尚未进入地点图时，方法保持无操作。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Encounters;
using TaleWorlds.CampaignSystem.Settlements.Locations;
using TaleWorlds.Core;

public static void EnsureMainHeroFollowsIntoLocation()
{
    LocationEncounter encounter = PlayerEncounter.LocationEncounter;
    if (encounter == null || encounter.Settlement == null)
    {
        return;
    }

    LocationComplex complex = encounter.Settlement.LocationComplex;
    LocationCharacter mainHero = complex?.GetLocationCharacterOfHero(Hero.MainHero);
    if (mainHero != null && encounter.GetAccompanyingCharacter(mainHero) == null)
    {
        encounter.AddAccompanyingCharacter(mainHero, isFollowing: true);
    }
}
```

`isFollowing: true` 会影响 `MissionLocationLogic` 在玩家 Agent 出生后设置跟随行为；它不是让角色立刻生成 Agent 的命令。真正生成仍由活动 Mission 的地点逻辑和 `MissionAgentHandler` 完成。

## 地点切换与 Mission 创建

地点角色移动应交给 `LocationComplex.ChangeLocation`，因为它会同时更新旧地点、新地点、AI 通道，并在目标属于当前 `CampaignMission` 时转发边界回调：

```csharp
LocationComplex complex = LocationComplex.Current;
if (complex != null && locationCharacter != null)
{
    complex.ChangeLocation(locationCharacter, fromLocation, toLocation);
}
```

从菜单进入下一个地点时，源码会把 `Campaign.Current.GameMenuManager.NextLocation` 和 `PreviousLocation` 交给当前具体 Encounter 的 `CreateAndOpenMissionController`。不要把基类返回的 `null` 当作 Mission 创建失败后可以自行补写 `CampaignMission.Current` 的信号；应让相应的 `TownEncounter`、`VillageEncounter` 或 `CastleEncounter` 选择正确的 `CampaignMission.Open...` 入口。

## 风险与存档边界

- **空上下文风险：** `PlayerEncounter.LocationEncounter` 在聚落外、离开聚落后或 Encounter 清理后为 `null`。读取 `Settlement`、列表或具体 Encounter 类型前必须检查活动上下文。
- **回调阶段风险：** `OnCharacterLocationChanged` 直接访问 `CampaignMission.Current.Location`。脱离活动地点 Mission 手动调用可能触发空引用或把角色状态写入错误的任务。
- **重复/错对象风险：** 添加操作按底层 `Character` 去重，而查找/移除的 `LocationCharacter` 重载按包装实例匹配。不要用刚复制出的 `LocationCharacter` 误以为它等于地点图里的实例。
- **Agent 生命周期风险：** `AccompanyingCharacter` 只是地点角色的 Mission 前包装；Mission 结束后其中的 Agent、导航和场景引用都不能缓存到 CampaignBehavior。
- **持久化边界：** `Settlement.LocationComplex` 是可保存的地点图，但当前 Encounter、陪同列表和 `IsInsideOfASettlement` 处于活动流程中；不要把它们另存为自定义 Saveable 字段。
- **Mission 工厂风险：** 基类的 `IsWorkshopLocation`、`IsTavern` 和 `CreateAndOpenMissionController` 是默认空行为。需要特定地点语义时，应检查运行时具体类型和对应源码，而不是调用后假定成功。

## 版本注记

本页按 v1.4.5 的 `LocationEncounter.cs`、`PlayerEncounter.cs`、`LocationComplex.cs` 和四个具体 Encounter 实现撰写。升级版本时应重新核对 `CreateLocationEncounter` 的类型分派、离开聚落时的清理顺序，以及 `OnCharacterLocationChanged` 是否仍由地点图负责转发。

## 导航

- ↑ 父级：[Campaign API](../)
- ↔ 同级：[PlayerEncounter](../PlayerEncounter) · [LocationComplex](../LocationComplex) · [LocationCharacter](../LocationCharacter)
- 相关：[CampaignMissionComponent](../../campaign-ext/CampaignMissionComponent) · [MissionLocationLogic](../../campaign-ext/MissionLocationLogic) · [MissionAgentHandler](../../campaign-ext/MissionAgentHandler)
- English: [LocationEncounter](../../../../en/api/campaign/LocationEncounter)
