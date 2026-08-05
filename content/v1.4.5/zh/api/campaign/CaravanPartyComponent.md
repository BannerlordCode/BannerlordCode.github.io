---
title: "CaravanPartyComponent"
description: "CaravanPartyComponent 是已拥有商队和车队的队伍组件，负责贸易初始化、定居点归属、首领状态和货物视觉。"
---
# CaravanPartyComponent

**命名空间:** `TaleWorlds.CampaignSystem.Party.PartyComponents`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public class CaravanPartyComponent : PartyComponent`  
**基类:** [PartyComponent](../PartyComponent)  
**源码文件:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party.PartyComponents/CaravanPartyComponent.cs`

## 一句话职责

它表示一个有所有者的商队或车队，并在创建时完成贸易、首领、物品、导航、所有权和定居点登记。

## 心智模型

该组件是商队在战役层的身份；`MobileParty` 仍然负责移动队伍、roster、贸易金币、位置和地图状态。`Owner`、`Settlement`、`_leader` 和 `IsElite` 描述商队，而 `OnInitialize` 会把组件加入 `Owner.OwnedCaravans`，`OnFinalize` 则移除它。

`CreateCaravanParty` 根据 `ShipHulls` 判断模板是否为海军模板，在定居点港口或城门创建队伍；海军模板会关闭陆地导航；创建过程还会加入传入的首领或文化默认的 caravan master，并从传入物品或最便宜的驮运动物填充物品 roster。它还会初始化贸易金币；当地图事件或围城没有阻止移动时，让商队向所属定居点移动，并发布商队首领忙碌事件。

## 何时使用，何时不要使用

- 读取 `mobileParty.CaravanPartyComponent`，取得所有者、home settlement、首领、精英状态以及图标用坐骑/挽具策略。
- 战役行为确实要创建商队时使用 `CreateCaravanParty`；需要保留队伍贸易金币地转移所有权时使用 `TransferCaravanOwnership`。
- 只有在确实要更换 home settlement 时才使用 `ChangeHomeSettlement`；它只改变组件属性，不会重新执行创建流程。
- 只有受控的队伍重新分类流程才使用 `ConvertPartyToCaravanParty`；有首领时它也会发布首领忙碌事件。
- 不要传入任意 troop template 后假定组件会自动修复。海军模式、caravan master、驮运动物、贸易金币和进入定居点都依赖传入数据与战役模型。

## 依赖关系

```text
Hero owner + spawn Settlement + caravan PartyTemplateObject
  -> CaravanPartyComponent.CreateCaravanParty
  -> MobileParty 创建回调和贸易初始化
  -> Owner.OwnedCaravans 登记
  -> 商队移动、进入定居点和存档状态
```

- 宿主：[MobileParty](../MobileParty) 持有组件、roster 和队伍贸易金币。
- 身份来源：[Hero](../Hero)、[Settlement](../Settlement) 和 [PartyTemplateObject](../PartyTemplateObject) 提供所有者、home 以及部队/船体数据。
- 战役模型/操作：`CaravanModel.GetInitialTradeGold` 和 [EnterSettlementAction](../../campaign-ext/EnterSettlementAction) 参与创建。
- 事件：`CampaignEventDispatcher` 通过 `BecomeCaravanLeader` 把商队首领标记为忙碌。
- 共同契约：[PartyComponent](../PartyComponent) 提供首领和生命周期回调。

## 状态与操作

| 成员 | 含义与时机 |
|---|---|
| `Settlement` | 可保存的 home settlement，用于生成位置和商队的 home 关系。 |
| `Owner` | 可保存的 Hero 所有者，也是队伍归属和名称回退值的来源。 |
| `Leader` | 可选的可保存商队首领。创建时会把它加入 roster，否则回退到文化的 caravan master。 |
| `IsElite` | 可保存的精英/武装商队模式，参与名称选择和创建行为。 |
| `Name` | 根据精英和海军状态，延迟缓存陆地商队、武装商队、车队或武装车队文本。 |
| `CanHaveNavalNavigationCapability` / `CanHaveLandNavigationCapability` | 反映绑定队伍的实际导航能力，不是独立开关。 |
| `CreateCaravanParty` | 创建队伍、填充 roster/物品、初始化贸易金币、设置移动或停留状态，并发布首领忙碌状态。 |
| `ConvertPartyToCaravanParty` | 替换已有队伍组件；适用时发布首领忙碌状态。 |
| `TransferCaravanOwnership` | 转移所有权，同时保留 `PartyTradeGold`。 |
| `ChangeHomeSettlement` | 重新指定可保存的 home settlement，但不重建商队。 |
| `GetMountAndHarnessVisualIdsForPartyIcon` | 根据阵营文化和队伍索引选择骆驼或骡子的货物视觉。 |

## 真实示例

战役对话路径会取得真实的文化模板，并为当前定居点创建商队：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party.PartyComponents;
using TaleWorlds.CampaignSystem.Settlements;

Hero owner = Hero.MainHero;
Settlement settlement = Settlement.CurrentSettlement;
PartyTemplateObject template = owner.Culture.CaravanPartyTemplates[0];

MobileParty caravan = CaravanPartyComponent.CreateCaravanParty(
    owner,
    settlement,
    template,
    isInitialSpawn: false);
```

源码中的 `CaravansCampaignBehavior` 会先选择船体模式与生成定居点匹配的模板，再调用同一个工厂。mod 也应执行相同的陆地/海军兼容性检查，不要无条件使用第一个模板。

## 风险与存档边界

- `templateObject.ShipHulls` 决定商队是否从港口生成并失去陆地导航。传入与定居点不匹配的模板会产生错误的导航状态。
- 创建会从 `Campaign.Current.Models.CaravanModel` 初始化贸易金币，可能调用 `EnterSettlementAction`，并发出首领忙碌事件。不要每 tick 调用，也不要在已有商队时重复调用。
- `OnInitialize` 和 `OnFinalize` 维护 `Owner.OwnedCaravans`。绕过 `TransferCaravanOwnership` 替换所有者，可能使旧所有者的集合保留过期项。
- `TransferCaravanOwnership` 明确保留贸易金币；直接替换组件会丢失这个交接行为。
- `ChangeHomeSettlement` 只改变组件属性，不会移动队伍、重新初始化物品或更新所有外部战役决策。
- 组件中可保存的所有者、定居点、首领和精英状态必须与绑定队伍一致；Agent 或场景引用不属于这里的保存边界。

## 版本说明

本页依据 v1.4.5 `CaravanPartyComponent`、`CaravansCampaignBehavior`、`CaravanConversationsCampaignBehavior` 以及商队贸易/定居点调用点编写。海军模板字段和所有权事件可能随版本变化。

## 导航

- 父级：[Campaign API](../)
- 同级：[PartyComponent](../PartyComponent) · [LordPartyComponent](../LordPartyComponent) · [CustomPartyComponent](../CustomPartyComponent) · [BanditPartyComponent](../BanditPartyComponent)
- 相关：[MobileParty](../MobileParty) · [Hero](../Hero) · [Settlement](../Settlement) · [PartyTemplateObject](../PartyTemplateObject) · [EnterSettlementAction](../../campaign-ext/EnterSettlementAction)
