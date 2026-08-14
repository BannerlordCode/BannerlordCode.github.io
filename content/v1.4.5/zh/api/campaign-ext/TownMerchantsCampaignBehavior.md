---
title: "TownMerchantsCampaignBehavior"
description: "城镇中心商人 NPC 的生成器：在白天 center 场景就绪时，按可用刷点把文化对应的商人/马商/盔甲匠/武器匠/铁匠刷进城镇，装备行走行为与动作集。"
---
# TownMerchantsCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox
**类型：** `public class TownMerchantsCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**源文件:** `Modules.SandBox/SandBox/SandBox.CampaignBehaviors/TownMerchantsCampaignBehavior.cs`

## 概述

`TownMerchantsCampaignBehavior` 负责在城镇里**生成**站着卖东西的 NPC 身体——商人、马商、盔甲匠、武器匠、铁匠。它监听 `LocationCharactersAreReadyToSpawnEvent`：当玩家身处某定居点的 `center`（城镇中心）场景、且当前是白天（`Campaign.Current.IsDay`）时，根据场景里预留的可用刷点（`sp_merchant` / `sp_horse_merchant` / `sp_armorer` / `sp_weaponsmith` / `sp_blacksmith`）数量，把对应文化的 `CultureObject.Merchant / HorseMerchant / Armorer / Weaponsmith / Blacksmith` 角色包装成 `LocationCharacter` 刷进去，并挂上 `SandBoxManager.Instance.AgentBehaviorManager.AddWandererBehaviors` 行走 AI。它和 [TradersCampaignBehavior](../TradersCampaignBehavior) 是「身体」与「对话」的互补对：本类把人放进去，[TradersCampaignBehavior](../TradersCampaignBehavior) 负责你点开他们时的交易/锻造对话。它同样**无状态**（`SyncData` 为空），NPC 每次会话都从文化重新生成，不需要存档。

## 心智模型

把它想成「城镇中心的摆摊工」，全部工作在**战役层 + 场景(Location)生成子系统**，不存档、不改世界状态。

- **入口**：战役启动后 `RegisterEvents` 订阅 `LocationCharactersAreReadyToSpawnEvent` → `LocationCharactersAreReadyToSpawn(unusedUsablePointCount)`。
- **触发/过滤**：先从 `PlayerEncounter.LocationEncounter.Settlement.LocationComplex` 取 `center` 位置；只有当 `CampaignMission.Current.Location == center` 且 `Campaign.Current.IsDay` 时才继续——即「玩家正站在这个城镇的白天中心场景里」。
- **生成**：`AddTradersToCenter` 对每个在 `unusedUsablePointCount` 里出现的刷点 tag，调用 `locationWithId.AddLocationCharacters(new CreateLocationCharacterDelegate(CreateX), culture, relation, count)`。
- **生命周期**：会话级、无持久状态；每次进入中心场景都会重新生成，因此不依赖存档，不存在坏档风险。

## 何时用 / 何时不要用

- **用**：你想理解官方是怎么把商人 NPC 刷进城镇中心的；想学「监听 `LocationCharactersAreReadyToSpawnEvent` + 用 `CreateLocationCharacterDelegate` + `CultureObject` 角色 + `SimpleAgentOrigin` / `AgentData` / `LocationCharacter` 生成场景 NPC」的标准写法；想为自定义文化/自定义刷点加自己的城镇 NPC。
- **不要用**：想给 NPC 接交易对话——那是 [TradersCampaignBehavior](../TradersCampaignBehavior) 的活；想生成野外/队伍里的商人——本类只认 `center` 位置与城镇文化；想直接 `new LocationCharacter(...)` 而不走 `AddLocationCharacters`——会绕过场景刷点计数与占用槽位管理。

## 依赖

- 上游：[CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)（基类与 `RegisterEvents`/`SyncData` 契约）、[CampaignEvents](../../campaign/CampaignEvents)（`LocationCharactersAreReadyToSpawnEvent`）、[PlayerEncounter](../../campaign/PlayerEncounter)（`.LocationEncounter.Settlement`，判定当前定居点）、[Settlement](../../campaign/Settlement)（`CurrentSettlement.LocationComplex`、`CurrentSettlement.Culture`）、[Campaign](../../campaign/Campaign)（`Current.IsDay`、`.Models.AgeModel`）、[LocationComplex](../../campaign/LocationComplex) / [Location](../../campaign/Location)（`GetLocationWithId("center")`、`AddLocationCharacters`）、[CultureObject](../../campaign/CultureObject)（`.Merchant` / `.HorseMerchant` / `.Armorer` / `.Weaponsmith` / `.Blacksmith` 角色来源）、[CampaignMission](../../campaign/CampaignMission)（`Current.Location`，判定当前场景）、[SandBoxManager](../../campaign/SandBoxManager)（`.Instance.AgentBehaviorManager`，行走行为）、[AgeModel](../../campaign/AgeModel)（`GetAgeLimitForLocation` 取年龄区间）。
- 下游 / 相关（本类构造 NPC 时直接使用的类型）：[CharacterObject](../../campaign/CharacterObject)（文化角色基类）、[LocationCharacter](../../campaign/LocationCharacter)（最终生成的场景角色封装）、[SimpleAgentOrigin](../../campaign/SimpleAgentOrigin)（`AgentData` 的来源原点）、[AgentData](../../core-extra/AgentData)（怪物/年龄/来源装配）、[FaceGen](../../core-extra/FaceGen)（`GetMonsterWithSuffix(Race, "_settlement")` 取城镇体型）、[ItemObject](../../core/ItemObject)（参数透传）、[MBRandom](../../core-extra/MBRandom)（随机年龄）。

## 成员说明

### RegisterEvents() — 订阅场景 NPC 就绪
只订阅 `LocationCharactersAreReadyToSpawnEvent`。mod 若移除本 Behavior，城镇中心将不再有商人 NPC，但**不会崩溃**（只是场景空了）。

### SyncData(IDataStore) — 空实现
无任何字段需要持久化（NPC 不跨档保存，每次会话重建）。派生/扩展时若新增需存档字段才需登记，否则保持空即可。

### LocationCharactersAreReadyToSpawn(Dictionary<string,int>) — 入口与过滤
```csharp
Location center = PlayerEncounter.LocationEncounter.Settlement.LocationComplex.GetLocationWithId("center");
if (CampaignMission.Current.Location == center && Campaign.Current.IsDay)
    AddTradersToCenter(unusedUsablePointCount);
```
注意它读的是 `PlayerEncounter.LocationEncounter.Settlement`（进入场景时的定居点），而 `AddTradersToCenter` 内部又读 `Settlement.CurrentSettlement`——两者在正常的城镇进入流程中一致。

### AddTradersToCenter(Dictionary<string,int>) — 按刷点数量生成
对五个 tag（`sp_merchant` / `sp_horse_merchant` / `sp_armorer` / `sp_weaponsmith` / `sp_blacksmith`）分别 `TryGetValue` 取出可用点数 `value`，再 `locationWithId.AddLocationCharacters(new CreateLocationCharacterDelegate(CreateX), Settlement.CurrentSettlement.Culture, CharacterRelations.None, value)`。场景里没有某个 tag 的可用槽位，就不会生成对应 NPC。

### CreateMerchant / CreateHorseTrader / CreateArmorer / CreateWeaponsmith / CreateBlacksmith（静态工厂）
五个工厂结构一致，以 `CreateMerchant` 为例：
```csharp
CharacterObject merchant = culture.Merchant;
Monster monster = FaceGen.GetMonsterWithSuffix(merchant.Race, "_settlement");
int minAge = 0, maxAge = 0;
Campaign.Current.Models.AgeModel.GetAgeLimitForLocation(merchant, ref minAge, ref maxAge, "");
AgentData agentData = new AgentData(
    new SimpleAgentOrigin(merchant, -1, null, default(UniqueTroopDescriptor)))
    .Monster(monster).Age(MBRandom.RandomInt(minAge, maxAge));
IAgentBehaviorManager mgr = SandBoxManager.Instance.AgentBehaviorManager;
return new LocationCharacter(agentData,
    new AddBehaviorsDelegate(mgr.AddWandererBehaviors),
    "sp_merchant", true, CharacterRelations.None,
    ActionSetCode.GenerateActionSetNameWithSuffix(agentData.AgentMonster, agentData.AgentIsFemale, "_seller"),
    true, false, null, false, false, true, null, false);
```
要点：
- 角色取自 `culture.Merchant` 等；体型用 `FaceGen.GetMonsterWithSuffix(Race, "_settlement")` 取「城镇版」体型。
- 年龄由 `AgeModel.GetAgeLimitForLocation` 给出区间，再 `MBRandom.RandomInt` 随机。
- 行走行为统一挂 `SandBoxManager.Instance.AgentBehaviorManager.AddWandererBehaviors`（流浪者式游走）。
- 动作集后缀：商人/马商/盔甲匠用 `_seller`，武器匠用 `_weaponsmith`，铁匠传 `null`（不专门指定）。

## 风险

- **只在白天、只在 center 场景生成**：`Campaign.Current.IsDay` 为 false（夜晚）或玩家不在 `center` 位置时，本类直接跳过——这是设计行为，不是 bug；想让夜晚也有商人需改这段过滤。
- **依赖 `PlayerEncounter.LocationEncounter` 非空**：入口第一行就读 `.LocationEncounter.Settlement`，若该事件在非遭遇(encounter)语境触发，`LocationEncounter` 可能为 null → 空引用。正常城镇进入流程下不会，但 mod 手动触发该事件时需保证有有效 `PlayerEncounter`。
- **依赖文化角色齐全**：五个 NPC 都来自 `CultureObject`（`culture.Merchant` 等）。若某个文化缺对应角色字段，会空引用；自定义文化务必填全这些角色。
- **刷点数量来自场景**：`value` 来自 `unusedUsablePointCount`（场景预留槽位），场景美术若删掉 `sp_merchant` 等 tag，对应 NPC 自然不生成，且不会报错。
- **无状态但不等于无害**：误删会让城镇中心空无一人（商人/铁匠消失），虽不崩溃但破坏交易体验，且与 [TradersCampaignBehavior](../TradersCampaignBehavior) 的对话形成「有对话没人」的哑链。

## 最小真实示例

在自定义城镇中心场景里，给本文化加 2 个商人（取自 `AddTradersToCenter` 精简）：
```csharp
Location center = Settlement.CurrentSettlement.LocationComplex.GetLocationWithId("center");
if (unusedUsablePointCount.TryGetValue("sp_merchant", out int count))
{
    center.AddLocationCharacters(
        new CreateLocationCharacterDelegate(CreateMerchant),
        Settlement.CurrentSettlement.Culture,
        CharacterRelations.None, count);
}
```
构造一个城镇商人 `LocationCharacter`（取自 `CreateMerchant` 精简）：
```csharp
CharacterObject merchant = Settlement.CurrentSettlement.Culture.Merchant;
Monster monster = FaceGen.GetMonsterWithSuffix(merchant.Race, "_settlement");
int lo = 0, hi = 0;
Campaign.Current.Models.AgeModel.GetAgeLimitForLocation(merchant, ref lo, ref hi, "");
AgentData data = new AgentData(new SimpleAgentOrigin(merchant, -1, null, default(UniqueTroopDescriptor)))
    .Monster(monster).Age(MBRandom.RandomInt(lo, hi));
return new LocationCharacter(data,
    new AddBehaviorsDelegate(SandBoxManager.Instance.AgentBehaviorManager.AddWandererBehaviors),
    "sp_merchant", true, CharacterRelations.None,
    ActionSetCode.GenerateActionSetNameWithSuffix(data.AgentMonster, data.AgentIsFemale, "_seller"),
    true, false, null, false, false, true, null, false);
```

## 导航

- ↑ 父级/枢纽：[CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)（所有 CampaignBehavior 的基类与 `RegisterEvents`/`SyncData` 契约）
- ↔ 同级（互补）：[TradersCampaignBehavior](../TradersCampaignBehavior)（你点开这些 NPC 时的交易/锻造对话）
- 相关：[LocationCharacter](../../campaign/LocationCharacter) · [SimpleAgentOrigin](../../campaign/SimpleAgentOrigin) · [CultureObject](../../campaign/CultureObject) · [SandBoxManager](../../campaign/SandBoxManager) · [PlayerEncounter](../../campaign/PlayerEncounter)
