---
title: "StealthCharactersCampaignBehavior"
description: "潜行/伪装探员注入器：当城镇 Location 场景报出 stealth_agent / disguise_* 等 spawn-tag 时，把 stealth_character、disguise_default_character 等角色刷入首个 Location，并挂上 AddStealthAgentBehaviors 潜行 AI。"
---

# StealthCharactersCampaignBehavior

**类型：** class `StealthCharactersCampaignBehavior` : `CampaignBehaviorBase`
**命名空间：** `TaleWorlds.CampaignSystem.SandBox.CampaignBehaviors`
**模块：** `SandBox`
**源文件：** `bannerlord-1.4.5/Bannerlord.Source/Modules.SandBox/SandBox/SandBox.CampaignBehaviors/StealthCharactersCampaignBehavior.cs`

## 概述

`StealthCharactersCampaignBehavior` 是 SandBox 里负责「在城镇/城堡场景里生成潜行与伪装角色」的纯注入器。它只订阅一个事件 `LocationCharactersAreReadyToSpawnEvent`：每当玩家进入某定居点的 Location（如间谍、盗窃、伪装相关任务场景）时，场景会把空闲 spawn 点按 tag 汇总成 `Dictionary<string, int>` 上报；该行为据此把 `stealth_character`、`disguise_default_character`、`disguise_officer_character`、`disguise_shadow_target` 这些游戏数据里的角色，带随机年龄、对应文化、`_settlement_slow` 怪物变体，并挂载 `SandBoxManager.AgentBehaviorManager.AddStealthAgentBehaviors` 潜行 AI，统一加进该定居点的**第一个 Location**。它自身不持有任何状态，`SyncData` 为空——理解它能直接看清「Location 刷怪事件 → 角色工厂 → AgentBehavior 挂载」这条标准管道。

## 心智模型

把它想成「潜行/伪装关卡的 NPC 布景工」，整段逻辑只活在**战役层的 Location Mission 刷怪阶段**，且只在场景主动请求时才动手。

- **入口**：战役启动后 `RegisterEvents` 仅挂一条非序列化监听 `LocationCharactersAreReadyToSpawnEvent` → `LocationCharactersAreReadyToSpawn`。它没有 `OnSessionLaunched`、不注册菜单、不接对话——纯粹被动等待场景刷怪回调。
- **触发与门禁**：回调里先取 `PlayerEncounter.LocationEncounter.Settlement`；若 `settlement.IsHideout` 为真直接返回——也就是说**藏身处永不刷潜行探员**，只面向普通城镇/城堡。否则取 `settlement.LocationComplex.GetListOfLocations().First()` 作为投放目标 Location。
- **按 tag 分流**：遍历上报的 `unusedPoints`，对 `stealth_agent`、`stealth_agent_forced`、`disguise_default_agent`、`disguise_officer_agent`、`disguise_shadow_agent` 五个 tag，只要计数 > 0 就调 `Location.AddLocationCharacters(...)`，传入对应的角色工厂委托、定居点文化、`CharacterRelations.Neutral`(=2) 与数量。
- **角色工厂**：五个工厂最终都收敛到 `CreateStealthAgentInternal(spawnTag, characterId)`，从 `MBObjectManager` 按 id 取 `CharacterObject`，用 `AgeModel.GetAgeLimitForLocation` 拿年龄区间后随机，构造 `AgentData`（含 `SimpleAgentOrigin`、`FaceGen.GetMonsterWithSuffix(race, "_settlement_slow")` 与随机 `Age`），再用 `SandBoxManager.Instance.AgentBehaviorManager.AddStealthAgentBehaviors` 作为 `AddBehaviorsDelegate` 包成 `LocationCharacter` 返回。其中 `stealth_agent_forced` 工厂额外把 `ForceSpawnInSpecialTargetTag = true`，把它钉到特殊目标 tag，无视容量限制。
- **生命周期**：战役期常驻、零状态；`SyncData` 为空，不写任何存档字段，因此它的存在/缺失对读档无副作用。

## 何时使用 / 何时不要使用

- **用**：你想理解或扩展官方潜行/伪装任务（间谍尾随、盗窃、易容潜入）里那些自动出现的潜行 NPC 是怎么来的；想把自定义潜行角色挂进同一套 `LocationCharactersAreReadyToSpawnEvent` 管道，复用 `AddStealthAgentBehaviors` 潜行 AI；想学「无状态、纯事件驱动、靠场景 spawn-tag 触发的 CampaignBehavior」最简写法。
- **不要用**：想在村庄/藏身处刷这类探员——`IsHideout` 门禁会直接跳过，且它只投到 `GetListOfLocations().First()`，想精确控制投放 Location 需改索引；想用它直接操控英雄/队伍/关系——它只产出带 AI 的 `LocationCharacter`，不涉及任何世界状态变更，那种改动应走 `*Action`；想在 Location Mission 之外调用——`PlayerEncounter.LocationEncounter` 在非场景语境下为空，回调会空引用。

## 依赖

- 上游：[CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)（基类与 `RegisterEvents`/`SyncData` 契约）、[CampaignEvents](../../campaign/CampaignEvents)（唯一订阅的 `LocationCharactersAreReadyToSpawnEvent`）、[Settlement](../../campaign/Settlement)（`IsHideout`、`LocationComplex.GetListOfLocations()`）、[Campaign](../../campaign/Campaign)（`Campaign.Current.Models.AgeModel.GetAgeLimitForLocation`、`PlayerEncounter.LocationEncounter`）、[Hero](../../campaign/Hero)（被刷角色的本质是 `CharacterObject`/`BasicCharacterObject`）。
- 下游 / 相关事件与 Action：消费方是 [EavesdroppingMissionLogic](../EavesdroppingMissionLogic)（窃听/伪装任务场景正是请求 `stealth_agent`/`disguise_*` 这些 tag 的一方，本行为即为其供货）；同事件模式的兄弟行为有 [ArenaMasterCampaignBehavior](../ArenaMasterCampaignBehavior) 与 [PrisonBreakCampaignBehavior](../PrisonBreakCampaignBehavior)（同样在 `LocationCharactersAreReadyToSpawnEvent` 里用 `AddLocationCharacters` 刷场景角色）；相关刷怪行为还可参照 [TradersCampaignBehavior](../TradersCampaignBehavior)、[TownMerchantsCampaignBehavior](../TownMerchantsCampaignBehavior)。

## 风险

- **`SyncData` 为空 = 无存档面，但扩展即陷阱**：本行为不持有任何字段，因此读档零副作用。但一旦你在派生/改写版里缓存了「当前正在刷哪些探员 / 已刷数量」等状态，就必须补 `SyncData`，否则读档后这些状态丢失或错位——这是从「无状态」改「有状态」时的典型坏档点。
- **`PlayerEncounter.LocationEncounter` 在非场景语境为空**：回调第一句就解引用 `PlayerEncounter.LocationEncounter.Settlement`。虽然该事件只在已进入定居点 Location 时触发，但若你手动复用此逻辑或事件被异常提前触发，会直接空引用。
- **藏身处被硬跳过**：`if (!settlement.IsHideout)` 直接 return。想在藏身相关场景用潜行探员，本行为不会帮你刷，需另写行为。
- **全部投到「第一个 Location」**：它用 `GetListOfLocations().First()`，约定上是定居点的主 Location（中心）。若你的场景希望潜行探员出现在特定子场景，这里不会区分，必须改索引或换 Location。
- **角色 id 必须存在于游戏数据**：`MBObjectManager.Instance.GetObject<CharacterObject>("stealth_character")` 等若被 mod 删除/改名会返回 null，下游 `AgeModel.GetAgeLimitForLocation` 立即空引用。
- **`ForceSpawnInSpecialTargetTag` 仅 forced 变体**：只有 `stealth_agent_forced` 工厂设了 `ForceSpawnInSpecialTargetTag = true`；其余四类按正常容量/目标 tag 投放，不要误以为所有潜行探员都会被强制钉位。

## 成员

### RegisterEvents() — 订阅唯一事件
战役启动时调用，仅注册 `LocationCharactersAreReadyToSpawnEvent` 的非序列化监听指向 `LocationCharactersAreReadyToSpawn`。这是该行为全部活性的来源；mod 重写时务必保留此监听，否则潜行探员永不生成。

### LocationCharactersAreReadyToSpawn(Dictionary<string,int>) — 按 tag 分流刷怪
当场景上报空闲 spawn 点时被调用。副作用：可能向定居点首个 Location 追加若干 `LocationCharacter`。门禁：藏身处直接返回；随后对五个 tag（`stealth_agent`、`stealth_agent_forced`、`disguise_default_agent`、`disguise_officer_agent`、`disguise_shadow_agent`）分别计数 > 0 时调用 `Location.AddLocationCharacters`，传入对应工厂、文化、`CharacterRelations.Neutral` 与数量。

### CreateStealthCharacter / CreteForcedStealthCharacter / CreateDisguiseDefaultCharacter / CreateDisguiseOfficerCharacter / CreateDisguiseShadowTargetCharacter — 五种角色工厂
收到 `AddLocationCharacters` 回调时各刷一名角色。前四者只是 `CreateStealthAgentInternal` 的不同 (spawnTag, characterId) 封装；唯 `CreteForcedStealthCharacter`（源码拼写如此）额外设 `ForceSpawnInSpecialTargetTag = true`。副作用：返回带潜行 AI 的 `LocationCharacter`。

### CreateStealthAgentInternal(string, string) — 核心构造
从 `MBObjectManager` 按 characterId 取 `CharacterObject`，用 `AgeModel.GetAgeLimitForLocation` 取得年龄区间后 `MBRandom.RandomInt` 随机；构造 `AgentData`：`SimpleAgentOrigin`（id -1、无 Banner、`default(UniqueTroopDescriptor)`）+ `FaceGen.GetMonsterWithSuffix(race, "_settlement_slow")` 怪物 + 随机 `Age`；最后用 `SandBoxManager.Instance.AgentBehaviorManager.AddStealthAgentBehaviors` 作 `AddBehaviorsDelegate` 包成 `LocationCharacter`。这是理解「数据角色 → 带 AI 的 Location 角色」的钥匙。

### SyncData(IDataStore) — 空实现
方法体为空。说明该行为完全无状态，不参与任何读档序列化；派生类若要加状态须自行实现。

## 示例

复刻官方「按 `stealth_agent` tag 注入带潜行 AI 的 stealth_character」的核心逻辑（可直接放进你自己的 `CampaignBehavior`）：

```csharp
public override void RegisterEvents()
{
    CampaignEvents.LocationCharactersAreReadyToSpawnEvent.AddNonSerializedListener(
        this, (Action<Dictionary<string, int>>)OnLocationCharactersReadyToSpawn);
}

private void OnLocationCharactersReadyToSpawn(Dictionary<string, int> unusedPoints)
{
    Settlement settlement = PlayerEncounter.LocationEncounter.Settlement;
    if (settlement.IsHideout)
        return;

    Location firstLocation = settlement.LocationComplex.GetListOfLocations().First();
    if (unusedPoints.TryGetValue("stealth_agent", out int count) && count > 0)
    {
        firstLocation.AddLocationCharacters(
            (CultureObject culture, CharacterRelations relation) =>
            {
                CharacterObject character =
                    MBObjectManager.Instance.GetObject<CharacterObject>("stealth_character");
                int minAge = 0, maxAge = 0;
                Campaign.Current.Models.AgeModel.GetAgeLimitForLocation(character, ref minAge, ref maxAge, "");
                AgentData agentData = new AgentData(
                        new SimpleAgentOrigin(character, -1, null, default(UniqueTroopDescriptor)))
                    .Monster(FaceGen.GetMonsterWithSuffix(character.Race, "_settlement_slow"))
                    .Age(MBRandom.RandomInt(minAge, maxAge));
                return new LocationCharacter(
                    agentData,
                    new AddBehaviorsDelegate(SandBoxManager.Instance.AgentBehaviorManager.AddStealthAgentBehaviors),
                    "stealth_agent", true, (CharacterRelations)2, null, true, false,
                    null, false, false, true, null, false);
            },
            settlement.Culture, (CharacterRelations)2, count);
    }
}

public override void SyncData(IDataStore dataStore)
{
}
```

## 导航

- ↑ 父级/枢纽：[CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)（基类与 `RegisterEvents`/`SyncData` 契约；所有 CampaignBehavior 的对照范本）
- ↔ 兄弟行为：[EavesdroppingMissionLogic](../EavesdroppingMissionLogic)（请求 `stealth_agent`/`disguise_*` tag 的潜行/伪装任务场景，本行为即为其供货）、[ArenaMasterCampaignBehavior](../ArenaMasterCampaignBehavior) 与 [PrisonBreakCampaignBehavior](../PrisonBreakCampaignBehavior)（同样在 `LocationCharactersAreReadyToSpawnEvent` 中刷场景角色）
- 相关系统：[CampaignEvents](../../campaign/CampaignEvents)（唯一订阅事件）、[Settlement](../../campaign/Settlement)（`IsHideout` 门禁与 `LocationComplex`）
