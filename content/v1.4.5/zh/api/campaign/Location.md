---
title: "Location"
description: "Location 是定居点地点图中的一个节点，拥有场景数据、通道、地点角色、预订状态和进入规则。"
---
# Location

**命名空间:** `TaleWorlds.CampaignSystem.Settlements.Locations`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public class Location`  
**基类:** 无  
**源码文件:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements.Locations/Location.cs`

## 一句话职责

它表示 `center`、`tavern`、`prison` 或 `village_center` 这样的定居点节点，并为该节点管理角色、通道、场景变体、访问委托、预订状态和特殊物品。

## 心智模型

`Location` 不是场景，也不是 Mission。它是战役侧的节点，由 [LocationComplex](../LocationComplex) 根据 [LocationComplexTemplate](../LocationComplexTemplate) 构建。节点保存判断玩家或 Agent 是否可以进入所需的数据，保存不同升级等级对应的场景名，也保存当前属于它的 `LocationCharacter` 描述。之后 Mission 通过 `CampaignMission.Current.Location` 和 SandBox 地点逻辑消费这张图。

持有者 complex 很重要。`AddCharacter` 会在添加新描述前通过 owner 移除同一 Hero 的旧描述；`AddPassageToLocation` 只向单侧列表加入通道，而 `LocationComplex.AddPassage` 才是保持双向关系的安全入口。`Location` 还会从 XML 的类型/方法字符串延迟加载访问委托，所以这些公开方法依赖模板和程序集已经加载。

## 何时使用，何时不要使用

- 从 `Settlement.CurrentSettlement.LocationComplex.GetLocationWithId("center")` 或其他源码定义的 ID 读取地点；不要从场景文件名猜地点节点。
- 在遭遇战或通道流程提交转换前，使用 `CanPlayerEnter`、`CanPlayerSee`、`CanAIEnter` 和 `CanAIExit` 做权限判断。
- 当活动遭遇战已经确定升级等级和 Mission 模式时，使用 `GetSceneName` 或 owner complex 的 `GetScene` 读取场景。
- 移动角色使用 `LocationComplex.ChangeLocation`，管理跟随玩家关系使用 `LocationEncounter`。只有在行为明确要把描述加入本节点时才直接调用 `AddCharacter`。
- 不要把 `Location` 当作通用库存容器、Agent 注册表或可保存的场景对象。`SpecialItems` 是地点特殊物品生成列表，不是队伍的 [ItemRoster](../ItemRoster)。
- 除非已确认 Hero 存在，否则不要调用 `RemoveCharacter(Hero)`；源码使用 `First`，找不到描述时会抛出异常。

## 依赖关系

```text
LocationComplexTemplate XML
  -> LocationComplex
  -> Location 节点与通道图
  -> LocationCharacter 描述
  -> MissionAgentHandler / CampaignMission.Current
  -> 场景与 Agent 转换
```

- 图的持有者：[LocationComplex](../LocationComplex) 创建、初始化、查询和移动节点。
- 模板：[LocationComplexTemplate](../LocationComplexTemplate) 提供 ID、名称、访问表达式和场景名。
- 角色：[LocationCharacter](../LocationCharacter) 是节点保存的生成描述。
- Mission 桥接：[CampaignMission](../CampaignMission)、[CampaignMissionComponent](../../campaign-ext/CampaignMissionComponent) 和 [MissionAgentHandler](../../campaign-ext/MissionAgentHandler) 消费活动地点。
- 战役持有者：[Settlement](../Settlement) 持有当前定居点遭遇战使用的 complex。

## 状态与方法分组

| 区域 | 成员与源码行为 |
|---|---|
| 身份与显示 | `StringId`、`Name`、`DoorName`、`IsIndoor`、`ProsperityMax`。`Name` 和 `DoorName` 优先使用预订覆盖值，ID 才是稳定查找键。 |
| 访问与预订 | `CanPlayerEnter`、`CanPlayerSee`、`CanAIEnter`、`CanAIExit` 调用延迟反序列化的委托。`ReserveLocation` 只有在 `CanBeReserved` 为真时才生效，并会改变显示名称；`RemoveReservation` 恢复模板名称。 |
| 场景变体 | `GetSceneName(upgradeLevel)` 选择四个场景名之一，选中项为空时回退到索引 `0`。`SetSceneName` 和 `GetSceneCount` 是设置/检查操作。 |
| 角色 | `AddCharacter`、`AddLocationCharacter`、`AddLocationCharacters`、`GetCharacterList`、`GetLocationCharacter`、`ContainsCharacter` 及移除方法管理的是描述，不是活跃 Agent。添加 Hero 时会通过 owner complex 移除旧描述。 |
| 通道 | `LocationsOfPassages`、`AddPassageToLocation` 和 `GetPassageToLocation` 描述相邻节点。要更新双向关系，应使用 `LocationComplex.AddPassage`。 |
| 特殊物品 | `SpecialItems` 和 `AddSpecialItem` 保存地点专属生成物品，不会修改队伍 roster。 |
| 生命周期 | 保存战役重建时，`Initialize` 设置 `IsInitialized`；`IsReserved` 和 `SpecialItems` 是可保存状态，访问委托和角色缓存则是运行时关注点。 |

## 真实示例

下面从当前定居点读取真实节点和场景数据，不自行构造 `Location`，也不绕过遭遇战的持有关系：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.CampaignSystem.Settlements.Locations;

Settlement settlement = Settlement.CurrentSettlement;
LocationComplex complex = settlement?.LocationComplex;
Location center = complex?.GetLocationWithId("center");

if (center != null && center.CanPlayerEnter())
{
    string scene = center.GetSceneName(0);
    int occupants = center.CharacterCount;
}
```

当活动遭遇战已选择城墙或升级等级时，会继续使用同一个节点，例如先调用 `settlement.LocationComplex.GetScene("center", upgradeLevel)`，再把场景交给 `CampaignMission.OpenIndoorMission(nextLocation.GetSceneName(wallLevel), wallLevel, nextLocation, talkToChar)`。`Location` 查找本身不会打开 Mission，也不会验证场景是否匹配遭遇战模式。

## 风险与存档边界

- 访问字符串来自 XML，并在第一次使用时通过反射解析。程序集缺失、类型/方法文本错误或委托为空，可能直到调用 `Can*` 时才失败。
- `GetSceneName` 直接索引四元素数组，不校验 `upgradeLevel`。应使用定居点流程提供的升级等级范围。
- `AddPassageToLocation` 只建立单侧链接；单侧链接会让 Agent 通道移动和玩家门逻辑不一致。优先使用 `LocationComplex.AddPassage(first, second)`。
- `AddCharacter` 和 `ChangeLocation` 维护 Hero 唯一性并触发 Mission 回调。不要尝试绕过 owner 图复制描述。
- 地点角色描述不是活跃 Agent。Mission 结束后，不要因为战役节点仍存在就继续持有 Agent 或场景引用。
- `RemoveAllCharacters` 和 `RemoveAllHeroCharactersFromPrison` 会破坏性地修改地点图。尤其当存档或遭遇战仍引用陪同角色时，应使用所属战役行为的清理路径。

## 版本说明

本页依据 v1.4.5 的 `Location.cs`、`Settlement.Deserialize` 以及 SandBox 地点/Mission 调用点编写。面向其他版本时，应重新核对地点 ID、四级场景回退、访问表达式名称和预订行为。

## 导航

- 父级：[Campaign API](../)
- 同级：[LocationComplex](../LocationComplex) · [LocationCharacter](../LocationCharacter) · [LocationComplexTemplate](../LocationComplexTemplate)
- 相关：[Settlement](../Settlement) · [CampaignMission](../CampaignMission) · [MissionAgentHandler](../../campaign-ext/MissionAgentHandler) · [LocationEncounter](../LocationEncounter)
