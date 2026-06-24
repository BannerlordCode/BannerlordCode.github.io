<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultEncounterModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultEncounterModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEncounterModel : EncounterModel`
**Base:** `EncounterModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultEncounterModel.cs`

## 概述

`DefaultEncounterModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultEncounterModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### IsEncounterExemptFromHostileActions
`public override bool IsEncounterExemptFromHostileActions(PartyBase side1, PartyBase side2)`

**用途 / Purpose:** 处理 `is encounter exempt from hostile actions` 相关逻辑。

### GetLeaderOfSiegeEvent
`public override Hero GetLeaderOfSiegeEvent(SiegeEvent siegeEvent, BattleSideEnum side)`

**用途 / Purpose:** 获取 `leader of siege event` 的当前值。

### CanMainHeroDoParleyWithParty
`public override bool CanMainHeroDoParleyWithParty(PartyBase partyBase, out TextObject explanation)`

**用途 / Purpose:** 判断当前对象是否可以执行 `main hero do parley with party`。

### GetLeaderOfMapEvent
`public override Hero GetLeaderOfMapEvent(MapEvent mapEvent, BattleSideEnum side)`

**用途 / Purpose:** 获取 `leader of map event` 的当前值。

### GetCharacterSergeantScore
`public override int GetCharacterSergeantScore(Hero hero)`

**用途 / Purpose:** 获取 `character sergeant score` 的当前值。

### GetDefenderPartiesOfSettlement
`public override IEnumerable<PartyBase> GetDefenderPartiesOfSettlement(Settlement settlement, MapEvent.BattleTypes mapEventType)`

**用途 / Purpose:** 获取 `defender parties of settlement` 的当前值。

### GetNextDefenderPartyOfSettlement
`public override PartyBase GetNextDefenderPartyOfSettlement(Settlement settlement, ref int partyIndex, MapEvent.BattleTypes mapEventType)`

**用途 / Purpose:** 获取 `next defender party of settlement` 的当前值。

### CreateMapEventComponentForEncounter
`public override MapEventComponent CreateMapEventComponentForEncounter(PartyBase attackerParty, PartyBase defenderParty, MapEvent.BattleTypes battleType)`

**用途 / Purpose:** 创建一个 `map event component for encounter` 实例或对象。

### GetSurrenderChance
`public override float GetSurrenderChance(MobileParty defenderParty, MobileParty attackerParty)`

**用途 / Purpose:** 获取 `surrender chance` 的当前值。

### GetBribeChance
`public override ExplainedNumber GetBribeChance(MobileParty defenderParty, MobileParty attackerParty)`

**用途 / Purpose:** 获取 `bribe chance` 的当前值。

### GetMapEventSideRunAwayChance
`public override float GetMapEventSideRunAwayChance(MapEventSide mapEventSide)`

**用途 / Purpose:** 获取 `map event side run away chance` 的当前值。

### FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter
`public override void FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter(List<MobileParty> partiesToJoinPlayerSide, List<MobileParty> partiesToJoinEnemySide)`

**用途 / Purpose:** 处理 `find non attached npc parties who will join player encounter` 相关逻辑。

### CanPlayerForceBanditsToJoin
`public override bool CanPlayerForceBanditsToJoin(out TextObject explanation)`

**用途 / Purpose:** 判断当前对象是否可以执行 `player force bandits to join`。

### IsPartyUnderPlayerCommand
`public override bool IsPartyUnderPlayerCommand(PartyBase party)`

**用途 / Purpose:** 处理 `is party under player command` 相关逻辑。

### GetPartiesToTeleportOnMapEventFinalize
`public override MBReadOnlyList<MobileParty> GetPartiesToTeleportOnMapEventFinalize(MapEvent mapEvent)`

**用途 / Purpose:** 获取 `parties to teleport on map event finalize` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultEncounterModel>(new MyDefaultEncounterModel());
```

## 参见

- [完整类目录](../catalog)