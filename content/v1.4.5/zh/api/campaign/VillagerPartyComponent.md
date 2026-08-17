---
title: "VillagerPartyComponent"
description: "VillagerPartyComponent 是村庄派出的村民运输队组件：围绕所属 Village 在村庄与据点之间往返，负责队伍名、归属氏族、旗帜以及创建时围绕村门生成兵员与驮运动物。"
---
# VillagerPartyComponent

**命名空间:** `TaleWorlds.CampaignSystem.Party.PartyComponents`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public class VillagerPartyComponent : PartyComponent`  
**基类:** [PartyComponent](../PartyComponent)  
**源码文件:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party.PartyComponents/VillagerPartyComponent.cs`

## 概述

`VillagerPartyComponent` 是战役地图上**村庄运输队**的身份组件：它不代表强盗、商队或领主军队，而代表某个 `Village` 派出去往所属据点送货、又在贸易结束后返回的村民队伍。它回答三件事——这支队伍服务哪个村庄（`Village`）、名义上属于哪个氏族（`PartyOwner` 解析为村庄所属氏族的首领）、以及地图上显示成什么名字（`Name` 为“某村的村民”）。它不持有兵员、不跑 AI，兵员与驮运动物的初始化都在创建回调里一次性完成，队伍的移动节奏由 `VillagerCampaignBehavior` 之类的战役行为驱动，组件本身不保存“是否在路上”之类的状态位。

## 一句话职责

它是 `Village` 的运输队身份牌：把村民队伍绑定到村庄、在创建时于村门周围生成兵员并装填驮运动物，并在读档时把 `Village.VillagerPartyComponent` 反向引用指向自己。

## 心智模型

把它当成**“村庄的运输小队徽章”**，而不是一支独立的战斗/贸易实体：

- 它**由 `MobileParty` 持有**，整个生命周期跟队伍走。创建入口是静态工厂 `CreateVillagerParty(stringId, village)`：内部 `new VillagerPartyComponent(village, new InitializationArgs())` 后交给 `MobileParty.CreateParty`，再由创建回调 `OnMobilePartySetOnCreation` 完成初始化；已有队伍想改造成村民队则走 `ConvertPartyToVillagerParty`（注意它传 `args = null`，**不会**重新生成兵员）。
- 它不是 `MBObjectBase`，**没有 `StringId`**，只在 `MobileParty.PartyComponent` / `MobileParty.VillagerPartyComponent` 这条引用上活着。
- **反向引用由 `Village` 持有**。读档后 `OnInitialize` 把 `village.VillagerPartyComponent = this`，队伍销毁时 `OnFinalize` 把它清空。想“拿到某村的村民队”，权威来源是 `village.VillagerPartyComponent`，而不是自己在 mod 里缓存的引用。
- **它不记录“是否在途”状态**。源码里没有 `IsTraveling` / `VillagerType` 之类的字段；村民队何时出发、何时返回由 `VillagerCampaignBehavior` 等战役行为根据村庄生产与据点需求决定，组件只管身份与创建时的兵员初始化。
- 创建回调里会显式把 `MobileParty.Aggressiveness = 0f` 并调用 `InitializePartyTrade(0)`，所以村民队天生是和平、被动的运输单位，不应被当成会主动交战的队伍对待。
- 层（Layer）= **Campaign**。它只在战役地图语义里有意义，进入战斗场景后对应的是短命的 `Agent`，而非本组件。

## 何时使用，何时不要使用

- 想读取某支队伍“是哪个村的运输队”“名义归属哪个氏族”“显示名是什么”时，读 `MobileParty.VillagerPartyComponent`（强类型）或判断 `party.PartyComponent is VillagerPartyComponent`。
- 确实要**新建**一支村民运输队时用 `CreateVillagerParty(stringId, village)`；要把一支已有队伍**重新分类**为村民队时用 `ConvertPartyToVillagerParty`。
- 不要 `new VillagerPartyComponent(...)` 后直接挂上去——构造函数是 `protected`，且跳过工厂会漏掉 `MobileParty.CreateParty` 的创建流程与创建回调。新建/转换一律走工厂或 `MobileParty.SetPartyComponent`。
- 不要把村民队塞进普通交战 AI。创建回调已把攻击性清零，把它当领主军指挥会违背它的设计。
- 修改了影响名字的来源（例如村庄改名）后，必须调用 `ClearCachedName()`，否则地图上仍显示旧名。

## 依赖关系

```text
Village (来源)
  -> VillagerPartyComponent.CreateVillagerParty
  -> MobileParty.CreateParty + 创建回调 OnMobilePartySetOnCreation
       · Aggressiveness = 0，InitializePartyTrade(0)
       · 围绕 village.Settlement.GatePosition 生成兵员并装填最便宜的驮运动物
  -> 读档 OnInitialize：village.VillagerPartyComponent = this
  -> 销毁 OnFinalize：village.VillagerPartyComponent = null
  -> 移动节奏由 VillagerCampaignBehavior 驱动（组件自身无在途状态）
```

- 宿主：[MobileParty](../MobileParty) 持有组件、roster 与物品，并提供 `VillagerPartyComponent` 强类型访问器。
- 来源：[Village](../Village) 拥有反向引用 `Village.VillagerPartyComponent`，是“某村的村民队”的权威入口。
- 归属：[Settlement](../Settlement) 与 [Clan](../Clan) 通过 `Village.Settlement.OwnerClan.Leader` 解析出 `PartyOwner` 与 `HomeSettlement`。
- 共同契约：[PartyComponent](../PartyComponent) 提供身份、名字缓存与生命周期钩子。
- 队伍数值：[PartyBase](../PartyBase) 经组件暴露兵员/金币/规模；[PartyWageModel](../PartyWageModel) 与 [PartySizeLimitModel](../PartySizeLimitModel) 提供工资与规模上限。
- 事件：[CampaignEventDispatcher](../CampaignEventDispatcher) 在换队长等时刻广播。
- 同级兄弟：[WarPartyComponent](../WarPartyComponent)（家族/领主野战军）、[CaravanPartyComponent](../CaravanPartyComponent)（商队）、[GarrisonPartyComponent](../GarrisonPartyComponent)（驻军）、[BanditPartyComponent](../BanditPartyComponent)（强盗）、[LordPartyComponent](../LordPartyComponent)（领主军）。

## 状态与操作

| 成员 | 含义与时机 |
|---|---|
| `Village Village` | 可保存的服务村庄，组件的核心身份来源；`OnInitialize` 时把 `Village.VillagerPartyComponent` 指向本组件，`OnFinalize` 清空。 |
| `Hero PartyOwner` | 重写自基类，解析为 `Village.Settlement.OwnerClan.Leader`（村庄所属氏族的首领），需要有效的村庄所有者。 |
| `Settlement HomeSettlement` | 重写自基类，等价于 `Village.Settlement`。 |
| `TextObject Name` | 延迟缓存的本地化名称 `str_villagers_of_VILLAGE_NAME`，把 `VILLAGE_NAME` 替换为 `Village.Name`；改名后需 `ClearCachedName`。 |
| `Banner GetDefaultComponentBanner()` | 重写自基类，返回 `HomeSettlement.Banner`（即村庄据点的旗帜）。 |
| `MobileParty CreateVillagerParty(string stringId, Village village)` | 静态工厂：内部 `new VillagerPartyComponent(village, new InitializationArgs())` 后 `MobileParty.CreateParty`，触发创建回调初始化兵员与驮运动物。不是只读访问器。 |
| `void ConvertPartyToVillagerParty(MobileParty mobileParty, Village village)` | 静态：用 `new VillagerPartyComponent(village, null)` 替换已有队伍组件；因 `args = null`，**不会**重新生成兵员。 |
| `void ClearCachedName()` | 重写自基类，把 `_cachedName` 置 `null`，下次读 `Name` 时重新生成。 |
| `OnMobilePartySetOnCreation()` | 受保护生命周期钩子（首次创建）：清零攻击性、初始化队伍贸易、标记视觉脏、并在有 `InitializationArgs` 时围绕村门生成兵员并添加驮运动物。 |
| `OnInitialize()` / `OnFinalize()` | 受保护钩子：读档时登记/清空调 `Village.VillagerPartyComponent` 反向引用。 |

## 真实示例

强类型访问玩家队伍的村民组件，并按队伍类型在世界中分流：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party.PartyComponents;
using TaleWorlds.CampaignSystem.Settlements;

// 强类型访问：玩家队伍若是村民队则非空，否则为空
VillagerPartyComponent villager = MobileParty.MainParty.VillagerPartyComponent;
if (villager != null)
{
    Village home = villager.Village;                  // 该队伍服务的村庄
    Settlement settlement = villager.HomeSettlement;  // 等价于 village.Settlement
    TextObject label = villager.Name;                 // 缓存的“X 村的村民”名称
}

// 遍历世界，区分村民运输队与家族野战军
foreach (MobileParty party in MobileParty.All)
{
    if (party.VillagerPartyComponent != null) { /* 村庄运输队 */ }
    else if (party.WarPartyComponent != null)    { /* 领主 / 氏族野战军 */ }
}
```

由村庄创建一支新的村民运输队（内部已装配兵员与驮运动物，不要自己重复初始化）：

```csharp
using TaleWorlds.CampaignSystem.Party.PartyComponents;
using TaleWorlds.CampaignSystem.Settlements;

// 由村庄创建村民运输队；stringId 需全局唯一
MobileParty villagers = VillagerPartyComponent.CreateVillagerParty("my_villager_party", someVillage);
```

注意：`ConvertPartyToVillagerParty` 传入 `args = null`，只替换组件、不会补兵员；若希望保留队伍但重置为“村民”身份且不重新生成，才用它。每 tick 或已有同名队伍时重复调用工厂会制造重复队伍。

## 风险与存档边界

- `Village` 必须存在，才能建立 `Village.VillagerPartyComponent` 反向引用。把此组件套用到村庄之外的实体会违反源码假设。
- 创建是状态变更路径：回调会清零 `Aggressiveness`、调用 `InitializePartyTrade(0)`、围绕村门生成兵员、按价值筛选最便宜的驮运动物（`PackAnimal` 且 `Value > 40`）装填物品 roster。它**不是**无副作用的构造辅助，不要每 tick 调用。
- 读档后才 `OnInitialize`（登记反向引用），首次创建走 `OnMobilePartySetOnCreation`（生成兵员）。把“每次进档都要重建”的逻辑放到 `OnInitialize`，把“仅首次创建”的逻辑放到 `OnMobilePartySetOnCreation`，放错钩子会导致重复登记或漏登记。
- 销毁时 `OnFinalize` 清空 `Village.VillagerPartyComponent`；之后该村庄的村民队引用为 `null`。在地图逻辑中使用队伍前，应同时检查组件是否为 `null` 与 `MobileParty.IsActive`，尤其注意 `MobileParty.AllPartiesWithoutPartyComponent` 中 `party.PartyComponent` 可能为 `null`。
- `Name` 带缓存，修改村庄名等影响名字的来源后必须 `ClearCachedName()`，否则显示旧名。
- 组件不持有“在途”状态位；队伍是否出发/返回由 `VillagerCampaignBehavior` 决定，不要在组件上自行维护一套会被读档覆盖的旅行标记。

## 版本说明

本页依据 v1.4.5 `VillagerPartyComponent.cs` 与 `MobileParty.VillagerPartyComponent` 强类型访问器编写。村民队的生成模板、驮运动物筛选阈值（价值 > 40）与名称本地化 key（`str_villagers_of_VILLAGE_NAME`）可能随版本变化；其移动/出发逻辑位于 `VillagerCampaignBehavior`，不在本组件内。

## 导航

- 父级：[Campaign API](../)
- 同级：[PartyComponent](../PartyComponent) · [WarPartyComponent](../WarPartyComponent) · [CaravanPartyComponent](../CaravanPartyComponent) · [GarrisonPartyComponent](../GarrisonPartyComponent) · [BanditPartyComponent](../BanditPartyComponent) · [LordPartyComponent](../LordPartyComponent)
- 相关：[MobileParty](../MobileParty) · [Village](../Village) · [Settlement](../Settlement) · [Clan](../Clan) · [PartyBase](../PartyBase) · [PartyWageModel](../PartyWageModel) · [PartySizeLimitModel](../PartySizeLimitModel) · [CampaignEventDispatcher](../CampaignEventDispatcher)
