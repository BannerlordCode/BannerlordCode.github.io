---
title: "AccompanyingCharacter"
description: "AccompanyingCharacter 是一个遭遇战范围内的包装对象，用于决定跟随玩家的角色可以进入哪些地点。"
---
# AccompanyingCharacter

**命名空间:** `TaleWorlds.CampaignSystem.Settlements.Locations`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public class AccompanyingCharacter`  
**基类:** 无  
**源码文件:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements.Locations/AccompanyingCharacter.cs`

## 一句话职责

它把一个 `LocationCharacter` 绑定到当前 `LocationEncounter`，记录角色是否应在 Mission 开始时跟随玩家，并过滤角色可以进入的地点。

## 心智模型

`AccompanyingCharacter` 是遭遇战状态，不是第二个 Agent，也不是全战役范围的伙伴记录。`LocationEncounter.AddAccompanyingCharacter` 从已有的 [LocationCharacter](../LocationCharacter) 创建它，把包装对象放进 `CharactersAccompanyingPlayer`；之后 Mission 逻辑用它把角色移入当前的 [Location](../Location)。

这个包装对象持有两类不同状态。`LocationCharacter` 标识要跟随的角色和 Agent 生成配方；`IsFollowingPlayerAtMissionStart` 告诉 `MissionLocationLogic` 是否要在 Mission 进入时把角色生成到玩家身边并安装跟随行为。私有的禁止地点列表则由 `CanEnterLocation` 和按谓词控制的允许/禁止方法读取。

因此，它只在同一个 `PlayerEncounter.LocationEncounter` 和定居点 [LocationComplex](../LocationComplex) 存活期间有意义。离开遭遇战时，应移除这个角色及包装对象；清空地点列表或在离开定居点后继续保存包装对象都不能替代清理。

## 何时使用，何时不要使用

- 对已经解析成 `LocationCharacter` 的跟随角色，使用 `PlayerEncounter.LocationEncounter.AddAccompanyingCharacter` 创建包装对象。
- 在地点转换流程决定是否把角色加入目标地点前，使用 `CanEnterLocation`。任务改变当前地点图的允许子集时，使用 `AllowEntranceToLocations` 或 `DisallowEntranceToLocations`。
- 把 `IsFollowingPlayerAtMissionStart` 当作进入 Mission 时的策略，而不是实时 Agent 跟随状态。真正的 Agent 和跟随行为由之后的 Mission 逻辑创建。
- 不要在没有活动 `LocationCharacter` 的战役存档上下文中自行构造它；它不会创建 Agent、Hero 或地点归属。
- 不要在战役启动阶段或遭遇战清理后调用谓词方法。它们会解引用 `LocationComplex.Current`，假设当前存在地点遭遇战。

## 依赖关系

```text
PlayerEncounter.LocationEncounter
  -> LocationEncounter.AddAccompanyingCharacter(LocationCharacter, bool)
  -> AccompanyingCharacter
  -> MissionLocationLogic 检查 CanEnterLocation / IsFollowingPlayerAtMissionStart
  -> CampaignMission.Current 与 LocationComplex 在 Mission 中移动角色
```

- 持有者：[LocationEncounter](../LocationEncounter) 存储并移除包装对象。
- 角色配方：[LocationCharacter](../LocationCharacter) 提供角色、来源、生成标签和行为委托。
- 地点图：[LocationComplex](../LocationComplex) 提供谓词遍历的地点集合。
- Mission 桥接：[CampaignMission](../CampaignMission) 与 [CampaignMissionComponent](../../campaign-ext/CampaignMissionComponent) 暴露地点转换期间的活动 Mission。
- 持久化：`IsFollowingPlayerAtMissionStart` 和禁止地点列表参与战役保存；活跃 Agent 不会因为这个类型自动变成存档数据。

## 状态与操作

| 成员 | 含义与时机 |
|---|---|
| `LocationCharacter` | 被陪同的地点角色。它是构造函数赋值的公开字段，不会自行移动角色。 |
| `IsFollowingPlayerAtMissionStart` | 保存的只读标志，由地点 Mission 在生成跟随角色时读取。为 `true` 时，Mission 可以在入口建立跟随关系。 |
| `CanEnterLocation(Location)` | 只有当同一个 `Location` 实例在禁止列表中时才返回 `false`；它不检查场景是否准备好、玩家权限或 Agent 状态。 |
| `AllowEntranceToLocations(Func<Location, bool>)` | 从当前 complex 的禁止列表中移除匹配地点；谓词会针对 `LocationComplex.Current` 的每个地点执行。 |
| `DisallowEntranceToLocations(Func<Location, bool>)` | 把匹配地点加入禁止列表并避免重复。 |
| `AllowEntranceToAllLocations()` | 清除该包装对象的全部地点限制。 |
| `DisallowEntranceToAllLocations()` | 先清除旧限制，再把当前 complex 的每个地点加入列表；它是一次允许列表重置，不是永久全局锁。 |

## 真实示例

下面的顺序与 SandBox 战役行为一致：先从活动地点图解析已有 Hero 的地点角色，再加入当前遭遇战，最后按任务需要限制可进入地点。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Encounters;
using TaleWorlds.CampaignSystem.Settlements.Locations;

LocationEncounter encounter = PlayerEncounter.LocationEncounter;
LocationComplex complex = LocationComplex.Current;
LocationCharacter member = complex?.GetLocationCharacterOfHero(Hero.MainHero);

if (encounter != null && complex != null && member != null)
{
    encounter.AddAccompanyingCharacter(member, isFollowing: true);
    AccompanyingCharacter accompanying = encounter.GetAccompanyingCharacter(member);
    accompanying?.DisallowEntranceToLocations(
        location => location.StringId == "prison");
}
```

源代码在加入氏族成员时采用相同顺序：先 `AddAccompanyingCharacter` 创建包装对象，然后行为调用 `DisallowEntranceToAllLocations`，再选择性允许 `center`、`village_center` 和 `tavern`。包装对象本身不会调用 `LocationComplex.ChangeLocation`；Mission 开始时由 `MissionLocationLogic` 完成移动。

## 风险与存档边界

- `AllowEntranceToLocations` 和 `DisallowEntranceToLocations` 会无保护地调用 `LocationComplex.Current.GetListOfLocations()`。在没有活动地点遭遇战时调用，可能在谓词运行前就失败。
- 地点检查使用对象身份。来自另一个定居点 complex 的 `Location`，即使 `StringId` 相同，也不能替代当前 complex 的节点。
- `CanEnterLocation` 只表达此包装对象的限制，不替代 `Location.CanAIEnter`、`Location.CanPlayerEnter`、通道容量或 Mission 生成标签校验。
- 从 `Location` 移除 `LocationCharacter` 不会移除对应的 `AccompanyingCharacter`。遭遇战不再拥有伙伴时，使用 `LocationEncounter.RemoveAccompanyingCharacter` 或其 Hero 重载。
- 包装对象含有可保存的遭遇战策略，但 `LocationCharacter`、Agent、场景和导航对象仍受生命周期限制。不要在战役行为中保存引擎 Agent 或过期 Mission 引用。

## 版本说明

本页依据 v1.4.5 的 `AccompanyingCharacter`、`LocationEncounter` 和 `MissionLocationLogic` 编写。面向其他版本时，应重新核对保存字段 ID、地点允许列表行为以及 Mission 入口的跟随策略。

## 导航

- 父级：[Campaign API](../)
- 同级：[Location](../Location) · [LocationCharacter](../LocationCharacter) · [LocationComplex](../LocationComplex)
- 相关：[LocationEncounter](../LocationEncounter) · [CampaignMission](../CampaignMission) · [CampaignMissionComponent](../../campaign-ext/CampaignMissionComponent)
