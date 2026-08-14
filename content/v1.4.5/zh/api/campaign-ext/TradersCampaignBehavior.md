---
title: "TradersCampaignBehavior"
description: "商人/铁匠对话接线员：在城镇与可交易职业 NPC 对话时挂交易/锻造入口，按职业映射交易面板筛选并刷新随行英雄装备；无状态、不存档。"
---
# TradersCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox
**类型：** `public class TradersCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**源文件:** `Modules.SandBox/SandBox/SandBox.CampaignBehaviors/TradersCampaignBehavior.cs`

## 概述

`TradersCampaignBehavior` 负责把「和城镇里的商人/铁匠对话 → 打开交易界面 / 锻造界面」这条玩家体验接起来。它本身**不生成**商人的身体（那由 [TownMerchantsCampaignBehavior](../TownMerchantsCampaignBehavior) 在 `center` 场景刷出），而是在**对话层注册一组对话线**：当你点开一个职业属于「可交易」集合的 NPC 时，它判断是否该显示问候/购物/锻造/离开等选项，并在玩家选择「看看你卖什么」或「帮我锻造武器」时调用 `InventoryScreenHelper.OpenScreenAsTrade` 或 `CraftingHelper.OpenCrafting` 真正打开 UI。它是一个**无状态** Behavior（`SyncData` 为空），所有接线都在会话内即时完成，不依赖也不写入存档。

## 心智模型

把它想成「交易对话的接线员」，全部工作在**战役层 + 对话子系统**，不碰任何世界状态、不存档。

- **入口**：战役启动后 `RegisterEvents` 订阅 `OnSessionLaunchedEvent`（非序列化监听）→ `OnSessionLaunched` → `AddDialogs`，把 `weaponsmith_*` 前缀的一组对话线登记进 `CampaignGameStarter`。
- **触发**：玩家与某个 NPC 进入 1v1 对话；对话线 `weaponsmith_talk_start_normal` 的显示条件 `conversation_weaponsmith_talk_start_normal_on_condition` 调用 `IsTrader()` 判定对方是不是可交易职业（职业代码 4 / 10 / 11 / 12 / 28）。
- **流程**：问候（`TRADER_GREETING` 文本变量）→ 玩家可选「看看你卖什么」(`merchant_response_1`，后果 `conversation_weaponsmith_talk_player_on_consequence` 打开交易面板)、或「帮我锻造武器」(仅职业 28 显示，`conversation_open_crafting_on_condition`，后果 `conversation_weaponsmith_craft_on_consequence` 打开锻造)、或「只是路过」(直接关闭)。
- **生命周期**：会话级、无持久状态；每次 `OnSessionLaunched` 重新接线，因此不依赖存档，本身不存在坏档风险。

## 何时用 / 何时不要用

- **用**：你想理解官方商人对话是怎么挂上交易/锻造 UI 的；想学「用 `OnSessionLaunched` + `AddDialogLine`/`AddPlayerLine` 给某类职业 NPC 接线对话」的标准写法；想在 mod 里给自定义商人职业加交易入口。
- **不要用**：想**生成**商人 NPC 站在城镇里——那是 [TownMerchantsCampaignBehavior](../TownMerchantsCampaignBehavior) 的活，本类只管对话；想直接买卖物品——应调用 `InventoryScreenHelper.OpenScreenAsTrade`，不要自己造交易逻辑；想在非城镇/非对话语境（如野外）打开交易——它依赖 `Settlement.CurrentSettlement` 与 `CharacterObject.OneToOneConversationCharacter`，脱离对话上下文会空引用。

## 依赖

- 上游：[CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)（基类与 `RegisterEvents`/`SyncData` 契约）、[CampaignEvents](../../campaign/CampaignEvents)（`OnSessionLaunchedEvent`）、[CampaignGameStarter](../../campaign/CampaignGameStarter)（`AddDialogLine` / `AddPlayerLine`）、[CharacterObject](../../campaign/CharacterObject)（`OneToOneConversationCharacter`、职业判定）、[Settlement](../../campaign/Settlement)（`CurrentSettlement`、`.ItemRoster`、`.Town`）、[Campaign](../../campaign/Campaign)（`Current.IsMainHeroDisguised`）、[Mission](../../mission/Mission)（是否处于场景内，决定交易关闭回调）、[MobileParty](../../campaign/MobileParty)（`MainParty`，关闭交易后刷新装备）、[Roguery](../../campaign/Roguery)（`SmugglerConnections` perk，伪装时商人友好）、[DisguiseMissionLogic](../DisguiseMissionLogic)（`ContactAlreadySetCommonCondition`，伪装接触判定）。
- 下游 / 相关（由本类直接调用的 UI / 数据入口）：[InventoryScreenHelper](../InventoryScreenHelper)（`OpenScreenAsTrade`，真正打开交易）、[CraftingHelper](../CraftingHelper)（`OpenCrafting`，打开锻造）、[CraftingTemplate](../../core-extra/CraftingTemplate)（`All[0]`，取第一个锻造模板）、[MBTextManager](../../localization/MBTextManager)（`SetTextVariable("TRADER_GREETING", ...)`）、[Agent](../../mission/Agent)（`OnInventoryScreenDone` 中遍历 `Mission.Current.Agents` 刷新装备）。

## 成员说明

### RegisterEvents() — 订阅会话启动
仅订阅 `OnSessionLaunchedEvent`（`AddNonSerializedListener`，非序列化，故不进存档）。mod 若替换/移除本 Behavior，商人对话会整体消失，但**不会崩溃**。

### SyncData(IDataStore) — 空实现
无任何字段需要持久化（无状态）。派生或 fork 时若没有新增需存档字段，可保持空；一旦加了字段就必须在此登记，否则会坏档。

### OnSessionLaunched(CampaignGameStarter) → AddDialogs
把所有 `weaponsmith_*` 对话线登记到会话。注意：这组对话虽然以 `weaponsmith_` 命名，实际上覆盖**所有可交易职业**，不只是铁匠。

### IsTrader() — 职业判定（关键）
```csharp
// 职业代码：4=Merchant，10/11/12=各类商贩，28=可锻造职业(Artisan)
Occupation o = CharacterObject.OneToOneConversationCharacter.Occupation;
if (o != 10 && o != 11 && o != 12) return o == 4; // 4 算，其余非 10/11/12 一律不算
return true;                                        // 10/11/12 都算
```
即职业 ∈ {4, 10, 11, 12, 28} 的 NPC 会被识别为可交易商人。

### conversation_weaponsmith_talk_player_on_consequence — 打开交易面板
按对方职业把 `InventoryCategoryType` 映射成对应筛选标签，再打开交易：
```csharp
InventoryCategoryType cat = (InventoryCategoryType)(-1);
Occupation o = CharacterObject.OneToOneConversationCharacter.Occupation;
if (o != 4) {
    switch (o - 10) {
        case 0: cat = (InventoryCategoryType)2; break; // 10
        case 1: cat = (InventoryCategoryType)1; break; // 11
        case 2: cat = (InventoryCategoryType)4; break; // 12
        default: if (o == 28) cat = (InventoryCategoryType)2; break; // 28
    }
} else cat = (InventoryCategoryType)5; // 4 = Merchant

Settlement s = Settlement.CurrentSettlement;
if (Mission.Current != null)
    InventoryScreenHelper.OpenScreenAsTrade(s.ItemRoster, s.Town, cat, OnInventoryScreenDone);
else
    InventoryScreenHelper.OpenScreenAsTrade(s.ItemRoster, s.Town, cat, null);
```
`categoryType` 决定交易面板预选的筛选 tab（武器/护甲/杂货等），与 NPC 职业对应。

### conversation_open_crafting_on_condition / _craft_on_consequence — 锻造入口
仅当 `OneToOneConversationCharacter.Occupation == 28` 时显示「帮我锻造武器」选项；选中后 `CraftingHelper.OpenCrafting(CraftingTemplate.All[0], null)` 打开锻造台（用第一个可用锻造模板）。

### conversation_weaponsmith_talk_start_normal_on_condition — 伪装分支
若主角处于伪装（`Campaign.Current.IsMainHeroDisguised`）且伪装接触条件成立且持有 `Roguery.SmugglerConnections` perk，则商人用友好问候（`TRADER_GREETING = "Ah, a friend of a friend..."`）；否则普通问候。反之 `conversation_weaponsmith_talk_start_to_player_in_disguise_on_condition`（即 `IsTrader() && !正常条件`）会让商人说「走开，你会吓跑顾客」并直接关窗。

### OnInventoryScreenDone() — 交易后刷新随行英雄外观
仅在 `Mission.Current != null`（即身处城镇场景）时传入此回调；遍历 `Mission.Current.Agents`，对属于 `MobileParty.MainParty` 的人类英雄 Agent，按其是否需便装（`DoesMissionRequireCivilianEquipment`）刷新 `UpdateSpawnEquipmentAndRefreshVisuals`（便装或战装）。

## 风险

- **必须在对话上下文内调用**：`OpenScreenAsTrade` 直接读 `Settlement.CurrentSettlement` 及其 `.Town` / `.ItemRoster`，没有空检查；若你的自定义对话线在野外或非定居点语境触发，会空引用崩溃。务必只用在本类已判定的「城镇可交易 NPC」对话里。
- **职业→筛选映射是硬编码整数**：`InventoryCategoryType` 的取值（1/2/4/5）与职业强绑定；若你新增自定义商人职业想用交易面板，需自己扩展这段映射，否则会落到 `cat = -1`（通常按「全部」处理）。
- **对话 ID 是字符串常量**：所有线以 `weaponsmith_` 前缀硬编码；若别的 Behavior 也注册同名 ID，后注册的会覆盖/冲突。
- **伪装关闭对话的副作用**：`conversation_weaponsmith_talk_start_to_player_in_disguise_on_condition` 在伪装且不满足条件时直接 `close_window`，玩家无法与该类 NPC 交易——这是设计行为，但 mod 改伪装逻辑时需注意。
- **无状态但不等于无害**：虽然不存档，但它是「交易体验」的唯一接线员；误删会在不报错的情况下让商人无法对话。

## 最小真实示例

给一个自定义商人职业（职业代码 4，Merchant）在对话中打开交易面板（取自 `conversation_weaponsmith_talk_player_on_consequence` 精简）：
```csharp
// 在已判定为城镇可交易 NPC 的对话后果里调用
Settlement settlement = Settlement.CurrentSettlement;
InventoryCategoryType cat = (InventoryCategoryType)5; // 4 = Merchant -> 5
if (Mission.Current != null)
    InventoryScreenHelper.OpenScreenAsTrade(settlement.ItemRoster, settlement.Town, cat, OnInventoryScreenDone);
else
    InventoryScreenHelper.OpenScreenAsTrade(settlement.ItemRoster, settlement.Town, cat, null);
```
让「铁匠类」NPC（职业 28）提供锻造入口：
```csharp
if (CharacterObject.OneToOneConversationCharacter.Occupation == (Occupation)28)
    CraftingHelper.OpenCrafting(((List<CraftingTemplate>)(object)CraftingTemplate.All)[0], null);
```

## 导航

- ↑ 父级/枢纽：[CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)（所有 CampaignBehavior 的基类与 `RegisterEvents`/`SyncData` 契约）
- ↔ 同级（互补）：[TownMerchantsCampaignBehavior](../TownMerchantsCampaignBehavior)（负责把商人 NPC 刷进 `center` 场景，本类负责其对话）
- 相关：[InventoryScreenHelper](../InventoryScreenHelper) · [CraftingHelper](../CraftingHelper) · [CampaignGameStarter](../../campaign/CampaignGameStarter) · [CharacterObject](../../campaign/CharacterObject)
