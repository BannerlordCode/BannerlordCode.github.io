---
title: "LocationCharacter"
description: "LocationCharacter 是把战役角色描述转换为地点 Agent 的生成配方，包含来源、行为回调、装备策略和生成元数据。"
---
# LocationCharacter

**命名空间:** `TaleWorlds.CampaignSystem.Settlements.Locations`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public class LocationCharacter`  
**基类:** 无  
**源码文件:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements.Locations/LocationCharacter.cs`

## 一句话职责

它是定居点地点系统保存的角色生成配方：把 `AgentData`、关系、动作集、行为委托、固定地点和特殊物品组合起来，供 `Location` 与 Mission 生成流程创建临时 Agent；它本身不是 Hero、Agent 或地点容器。

## 心智模型

`LocationCharacter` 是生成配方和地点身份的组合。[Location](../Location) 把它保存在角色列表中，之后 `MissionAgentHandler` 读取这份配方并创建真正的引擎 Agent。因此它既不是 `Hero`，也不是 `Agent`：`Character` 指回 `CharacterObject`，而 `AgentData` 与 `AgentOrigin` 为运行时 Agent 构造提供信息。

构造函数还会执行战役专用的身体属性设置。在战役模式下，它读取角色装备，并使用固定角色的确定性种子或 `AgentData.AgentEquipmentSeed`；没有显式动作集时，还会选择默认的村民动作集。因此创建它是依赖 `Campaign.Current`、角色和有效 `AgentData` 的战役/定居点操作，不是无副作用的数据分配。

## 何时使用，何时不要使用

- Mission 或战役行为需要把 Agent 连接回战役数据时，从 `LocationComplex.GetLocationCharacterOfHero`、`Location.GetLocationCharacter` 或 `LocationComplex.FindCharacter` 读取已有实例。
- 只有在战役行为确实要新增地点角色，并且能提供真实 `AgentData`、行为委托、生成标签、关系和装备策略时，才构造新实例。
- 使用 `SetAlleyOfCharacter` 设置巷道归属；不要从 `Location.StringId` 推断它。
- 当源流程需要内置 bodyguard 配方时，使用 `CreateBodyguardHero`。它会创建友好、无马、使用定居点怪物和指定行为回调的描述。
- 不要认为 `SpecialTargetTag`、`ActionSetCode` 或 `CharacterRelation` 本身就能生成 Agent；Mission 工厂和 `MissionAgentHandler` 仍负责场景道具、Agent 组件和生成时机。
- 不要通过重复构造实例移动已注册角色。使用 [LocationComplex](../LocationComplex) 的 `ChangeLocation`，以保留 Hero 唯一性和 Mission 回调。

## 依赖关系

```text
AgentData / AgentOrigin / CharacterObject
  -> LocationCharacter 生成配方
  -> Location 角色列表
  -> MissionAgentHandler 创建 Agent 并附加行为
  -> CampaignMission / Mission 持有活跃运行时 Agent
```

- 容器：[Location](../Location) 存储实例，并在加入时从原节点移除同一 Hero。
- 图：[LocationComplex](../LocationComplex) 查找、移动和移除地点角色。
- 运行时：[Mission](../../mission/Mission)、[MissionAgentHandler](../../campaign-ext/MissionAgentHandler) 和 [Agent](../../mission/Agent) 把描述转换为活跃 Agent。
- 战役身份：[Hero](../Hero)、[MobileParty](../MobileParty)、[AgentData](../../core-extra/AgentData) 和 [PartyAgentOrigin](../PartyAgentOrigin) 提供真实来源与角色数据。
- 遭遇战策略：[AccompanyingCharacter](../AccompanyingCharacter) 可以包装此实例，以控制跟随玩家和地点限制。

## 成员与构造策略

| 成员 | 含义与时机 |
|---|---|
| `Character`、`AgentOrigin`、`AgentData` | 解析战役角色和创建 Agent 所需的来源。`Character` 从 `AgentData.AgentCharacter` 得到；无效数据可能在构造或生成时失败。 |
| `CharacterRelation` | `Neutral`、`Friendly` 或 `Enemy`；由 Mission 行为和队伍/交互设置使用，不决定地点归属。 |
| `SpecialTargetTag`、`ForceSpawnInSpecialTargetTag` | 场景生成标签选择。force 标志只是给 Agent handler 的请求；场景中没有对应道具时仍无法有效生成。 |
| `FixedLocation` | 阻止 `LocationComplex.AgentPassageUsageTick` 为普通 AI 通道移动选择此角色；不会阻止显式 `ChangeLocation`。 |
| `ActionSetCode`、`AlarmedActionSetCode` | 普通和警戒动作集名称。普通名称为空时，会替换为生成的 `_villager` 后缀。 |
| `AddBehaviors`、`AfterAgentCreated` | 在 Agent 创建路径中执行的委托；它们不是 Agent 产生前执行战役逻辑的入口。 |
| `UseCivilianEquipment`、`SpecialItem`、`IsVisualTracked`、`PrefabNamesForBones` | 生成与外观策略，由 Mission 系统消费；不会把对象加入地点，也不会保存活跃 Agent。 |
| `MemberOfAlley` / `SetAlleyOfCharacter` | 可选的巷道关联，由巷道行为显式设置。 |
| `CharacterRelations` | 构造和生成流程使用的枚举；mod 代码不要用裸整数替代。 |

## 真实示例

读取已有 Hero 的地点描述是最安全的集成边界：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements.Locations;
using TaleWorlds.Core;

LocationComplex complex = LocationComplex.Current;
LocationCharacter heroCharacter = complex?.GetLocationCharacterOfHero(Hero.MainHero);
if (heroCharacter != null)
{
    CharacterObject character = heroCharacter.Character;
    Location currentLocation = complex.GetLocationOfCharacter(heroCharacter);
    bool isFixed = heroCharacter.FixedLocation;
}
```

当战役流程确实需要 bodyguard 配方时，v1.4.5 源代码使用带真实 Hero、队伍和行为回调的静态工厂：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements.Locations;

LocationCharacter bodyguard = LocationCharacter.CreateBodyguardHero(
    Hero.MainHero,
    MobileParty.MainParty,
    SandBoxManager.Instance.AgentBehaviorManager.AddCompanionBehaviors);
```

返回对象在地点加入它并由相应 Mission 工厂生成之前都不是活跃角色。mod 通常应复用所属战役行为的回调，然后在同一个遭遇战生命周期内调用 `Location.AddCharacter` 或 `LocationComplex.ChangeLocation`。

## 风险与存档边界

- 构造函数会读取 `Campaign.Current.GameMode`，并可能从 `Settlement.CurrentSettlement` 读取固定角色身体属性。不要在战役和定居点初始化前构造它。
- `AgentData.AgentCharacter` 必须是有效的 `CharacterObject`；`Character` 是未经检查的转换，空数据或不兼容数据可能在 Mission 报告错误前就失败。
- `LocationCharacter` 没有 `Location` 属性。角色移动后，应通过扫描 `LocationComplex` 查询所属节点；缓存旧节点会得到过期归属。
- 通过 `Location.AddCharacter` 添加 Hero 时，owner complex 会移除该 Hero 的旧描述。绕过容器或保留重复描述，会让 Agent 查找产生歧义。
- 行为委托在 Agent 创建时运行。不要捕获已释放 Agent，也不要从任意线程通过回调修改战役保存数据。
- `SpecialItem` 和外观字段是生成时状态；它们不能代替把物品加入 [ItemRoster](../ItemRoster)，也不能持久化库存变化。

## 版本说明

本页依据 v1.4.5 的 `LocationCharacter.cs` 以及 wanderer、guard、companion、bodyguard、prison break 和 alley 的 SandBox 调用点编写。构造参数、固定标志和动作集约定都可能随版本变化。

## 导航

- 父级：[Campaign API](../)
- 同级：[Location](../Location) · [LocationComplex](../LocationComplex) · [AccompanyingCharacter](../AccompanyingCharacter)
- 相关：[AgentData](../../core-extra/AgentData) · [PartyAgentOrigin](../PartyAgentOrigin) · [MissionAgentHandler](../../campaign-ext/MissionAgentHandler) · [Mission](../../mission/Mission)
